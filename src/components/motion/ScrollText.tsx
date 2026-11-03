"use client";

import { useEffect, useRef } from "react";

// Words fade in as the paragraph scrolls through the viewport (scroll-linked, not time-based).
export default function ScrollText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const container = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((s) => (s.style.opacity = "1"));
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9;
      const end = vh * 0.35;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end + rect.height)),
      );
      spans.forEach((s, i) => {
        const local = Math.min(1, Math.max(0, progress * spans.length * 1.15 - i));
        s.style.opacity = String(0.18 + local * 0.82);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <p ref={container} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} data-w aria-hidden style={{ opacity: 0.18 }}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
