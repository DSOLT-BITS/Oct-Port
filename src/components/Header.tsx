"use client";

import { useEffect, useRef } from "react";
import { profile, sections } from "@/data/resume";

export default function Header() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-raised/60 bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="focus-ring font-mono text-sm font-medium">
          {profile.name}
        </a>
        <nav aria-label="Primary" className="hidden gap-7 text-sm text-muted sm:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="focus-ring transition-colors duration-200 hover:text-fg"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
      <div
        ref={bar}
        aria-hidden
        className="h-0.5 origin-left bg-accent"
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
}
