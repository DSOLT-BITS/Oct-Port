"use client";

import { useEffect, useRef } from "react";

const BLUE = "0, 122, 204";
const AMBER = "229, 161, 58";

// Fixed background: radio waves rippling out of two antennas plus a carrier wave
// whose phase follows the scroll position.
export default function RadioBackground() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvas.current;
    const ctx = el?.getContext("2d");
    if (!el || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let scrollY = window.scrollY;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      el.width = w * dpr;
      el.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced.matches) draw(0);
    };

    const rings = (
      x: number,
      y: number,
      color: string,
      t: number,
      period: number,
      maxR: number,
    ) => {
      const count = 8;
      for (let i = 0; i < count; i++) {
        const phase = (t / period + i / count) % 1;
        const r = phase * maxR;
        const alpha = (1 - phase) ** 2 * 0.22;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${color}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, 0.5)`;
      ctx.fill();
    };

    const carrier = (t: number) => {
      const y0 = h * 0.82;
      const yAt = (x: number) =>
        y0 +
        Math.sin(x / 38 - t / 500 - scrollY / 120) *
          22 *
          (0.5 + 0.5 * Math.sin(x / 260 + t / 2500)) +
        Math.sin(x / 95 + t / 850) * 9;

      ctx.beginPath();
      for (let x = 0; x <= w; x += 6) {
        const y = yAt(x);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(${AMBER}, 0.16)`;
      ctx.lineWidth = 1.25;
      ctx.stroke();

      for (let i = 0; i < 3; i++) {
        const x = (t / 10 + (i * w) / 3) % w;
        ctx.beginPath();
        ctx.arc(x, yAt(x), 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${AMBER}, 0.45)`;
        ctx.fill();
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const maxR = Math.hypot(w, h) * 0.7;
      rings(w * 0.88, h * 0.18, BLUE, t, 10000, maxR);
      rings(w * 0.08, h * 0.9, AMBER, t, 13000, maxR * 0.8);
      carrier(t);
    };

    const loop = (t: number) => {
      if (!running) return;
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };
    const onVisibility = () => {
      running = !document.hidden && !reduced.matches;
      cancelAnimationFrame(raf);
      if (running) raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    reduced.addEventListener("change", onVisibility);
    onVisibility();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvas}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
