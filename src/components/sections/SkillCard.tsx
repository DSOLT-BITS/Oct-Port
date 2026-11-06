"use client";

import { useId, useState } from "react";

export default function SkillCard({
  group,
  items,
}: {
  group: string;
  items: string[];
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="lift h-full rounded-xl bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="focus-ring flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl p-7 text-left"
      >
        <span>
          <span className="block text-lg font-semibold">{group}</span>
          <span className="mt-1 block font-mono text-xs text-muted">
            {items.length} skills · {open ? "click to hide" : "click to view"}
          </span>
        </span>
        <span
          aria-hidden
          className={`font-mono text-xl text-signal transition-transform duration-300 ease-out-strong motion-reduce:transition-none ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out-strong motion-reduce:transition-none ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden" inert={!open}>
          <ul className="space-y-3 border-t border-raised px-7 pt-5 pb-7 text-sm leading-relaxed text-muted">
            {items.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
