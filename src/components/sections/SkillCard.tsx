"use client";

import { useId, useState } from "react";

type SkillItem = string | { name: string; level: "beginner" | "intermediate" | "expert" };

export default function SkillCard({
  group,
  items,
}: {
  group: string;
  items: SkillItem[];
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const getLevelColor = (level?: string) => {
    switch (level) {
      case "expert":
        return "bg-signal";
      case "intermediate":
        return "bg-accent";
      case "beginner":
        return "bg-raised";
      default:
        return "bg-signal";
    }
  };

  const getLevelLabel = (level?: string) => {
    switch (level) {
      case "expert":
        return "Expert";
      case "intermediate":
        return "Intermediate";
      case "beginner":
        return "Beginner";
      default:
        return "";
    }
  };

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
          <ul className="space-y-3 border-t border-raised px-7 pt-5 pb-7 text-sm">
            {items.map((item) => {
              const isObject = typeof item === "object";
              const name = isObject ? item.name : item;
              const level = isObject ? item.level : undefined;

              return (
                <li key={name} className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                    />
                    <span className="text-muted">{name}</span>
                  </span>
                  {level && (
                    <span
                      className={`ml-2 inline-block rounded px-2 py-1 font-mono text-xs font-medium text-ink ${getLevelColor(
                        level,
                      )}`}
                    >
                      {getLevelLabel(level)}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
