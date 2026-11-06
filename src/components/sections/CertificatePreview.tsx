"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function CertificatePreview({
  file,
  title,
}: {
  file: string;
  title: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);

  const open = () => setMounted(true);
  const close = () => {
    setShown(false);
    window.setTimeout(() => setMounted(false), 250);
  };

  useEffect(() => {
    if (!mounted) return;
    const frame = requestAnimationFrame(() => setShown(true));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShown(false);
        window.setTimeout(() => setMounted(false), 250);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [mounted]);

  return (
    <>
      <a
        href={file}
        target="_blank"
        rel="noreferrer"
        className="focus-ring press mt-5 flex items-center justify-between rounded-lg border border-raised bg-panel px-4 py-4 text-sm font-medium sm:hidden"
      >
        <span>{title}</span>
        <span className="text-signal">Open certificate PDF ↗</span>
      </a>
      <div className="relative mt-5 hidden sm:block">
        <iframe
          src={`${file}#toolbar=0&navpanes=0&view=Fit`}
          title={`${title} certificate`}
          loading="lazy"
          tabIndex={-1}
          className="h-72 w-full rounded-lg border border-raised bg-panel sm:h-80"
        />
        <button
          type="button"
          onClick={open}
          aria-label={`Enlarge ${title} certificate`}
          className="focus-ring absolute inset-0 cursor-zoom-in rounded-lg"
        />
      </div>

      {mounted &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} certificate`}
          onClick={close}
          className={`fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-0 backdrop-blur-sm transition-opacity duration-[250ms] ease-out motion-reduce:transition-none sm:p-8 ${
            shown ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`flex h-[100dvh] w-full max-w-5xl flex-col overflow-hidden border-raised bg-card transition-[transform,opacity] duration-[250ms] ease-out-strong motion-reduce:transition-none sm:h-full sm:rounded-xl sm:border ${
              shown ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between gap-4 border-b border-raised px-4 py-3 sm:px-5">
              <h4 className="truncate text-sm font-medium">{title}</h4>
              <button
                type="button"
                onClick={close}
                className="focus-ring press rounded-md border border-raised px-3 py-1.5 text-sm transition-colors duration-150 hover:bg-raised"
              >
                Close
              </button>
            </div>
            <iframe
              src={`${file}#view=FitH`}
              title={`${title} certificate (enlarged)`}
              className="h-full w-full flex-1 bg-panel"
            />
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
