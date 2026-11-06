"use client";

import { useId, useState } from "react";

type Reference = {
  name: string;
  title: string;
  org: string;
  phone: string;
  email?: string;
};

export default function ReferenceCard({ reference: r }: { reference: Reference }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="lift h-full rounded-xl bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="focus-ring block w-full cursor-pointer rounded-xl p-7 text-left"
      >
        <h3 className="text-lg font-semibold">{r.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{r.title}</p>
        <p className="mt-1 font-mono text-sm text-signal">{r.org}</p>
        <p className="mt-4 font-mono text-xs text-muted">
          {open ? "Hide contact info −" : "Show contact info +"}
        </p>
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out-strong motion-reduce:transition-none ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden" inert={!open}>
          <div className="space-y-2 border-t border-raised px-7 pt-5 pb-7 text-sm">
            <p>
              <a
                href={`tel:+1${r.phone.replace(/\D/g, "")}`}
                className="focus-ring underline decoration-signal underline-offset-4 hover:opacity-80"
              >
                {r.phone}
              </a>
            </p>
            {r.email && (
              <p>
                <a
                  href={`mailto:${r.email}`}
                  className="focus-ring break-all underline decoration-signal underline-offset-4 hover:opacity-80"
                >
                  {r.email}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
