"use client";

import { useEffect, useRef, useState } from "react";
import { profile, sections } from "@/data/resume";

export default function Header() {
  const bar = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

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
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="focus-ring rounded-md border border-raised px-3 py-2 font-mono text-sm text-muted transition-colors hover:text-fg sm:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile primary"
        className={`${menuOpen ? "grid" : "hidden"} gap-1 border-t border-raised/60 px-6 py-3 text-sm text-muted sm:hidden`}
      >
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={() => setMenuOpen(false)}
            className="focus-ring rounded-md px-3 py-2 transition-colors hover:bg-card hover:text-fg"
          >
            {s.label}
          </a>
        ))}
      </nav>
      <div
        ref={bar}
        aria-hidden
        className="h-0.5 origin-left bg-accent"
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
}
