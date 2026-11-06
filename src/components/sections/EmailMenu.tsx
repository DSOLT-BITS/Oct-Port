"use client";

import { useEffect, useId, useRef, useState } from "react";

const item =
  "focus-ring block w-full rounded-md px-4 py-2.5 text-left text-sm transition-colors duration-150 hover:bg-raised";

export default function EmailMenu({ email }: { email: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const to = encodeURIComponent(email);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy my email address:", email);
    }
  };

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={menuId}
        className="focus-ring press rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-[transform,opacity] duration-150 hover:opacity-90"
      >
        Send an email
        <span
          aria-hidden
          className={`ml-2 inline-block transition-transform duration-200 motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>
      <div
        id={menuId}
        inert={!open}
        className={`absolute left-0 z-20 mt-2 w-64 origin-top-left rounded-xl border border-raised bg-card p-2 transition-[transform,opacity] duration-200 ease-out-strong motion-reduce:transition-none ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${to}`}
          target="_blank"
          rel="noreferrer"
          className={item}
        >
          Gmail
        </a>
        <a
          href={`https://outlook.live.com/mail/0/deeplink/compose?to=${to}`}
          target="_blank"
          rel="noreferrer"
          className={item}
        >
          Outlook
        </a>
        <a
          href={`https://compose.mail.yahoo.com/?to=${to}`}
          target="_blank"
          rel="noreferrer"
          className={item}
        >
          Yahoo Mail
        </a>
        <a href={`mailto:${email}`} className={item}>
          Default mail app
        </a>
        <button type="button" onClick={copy} className={item}>
          {copied ? "Copied!" : "Copy email address"}
        </button>
      </div>
    </div>
  );
}
