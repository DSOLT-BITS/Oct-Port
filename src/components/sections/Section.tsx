import Reveal from "@/components/motion/Reveal";
import WordReveal from "@/components/motion/WordReveal";
import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  tone = "ink",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  tone?: "ink" | "panel";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={tone === "panel" ? "bg-panel/80" : "bg-transparent"}
    >
      <div className="mx-auto max-w-5xl px-6 py-28">
        <Reveal>
          <p className="mb-4 font-mono text-sm tracking-widest text-signal uppercase">{eyebrow}</p>
        </Reveal>
        <WordReveal
          text={title}
          className="mb-14 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl"
        />
        {children}
      </div>
    </section>
  );
}
