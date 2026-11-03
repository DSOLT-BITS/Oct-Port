import Reveal from "@/components/motion/Reveal";
import { references } from "@/data/resume";
import Section from "./Section";

export default function References() {
  return (
    <Section id="references" eyebrow="05 / References" title="People who can vouch." tone="panel">
      <div className="grid gap-4 md:grid-cols-3">
        {references.map((r, i) => (
          <Reveal key={r.name} delay={i * 100}>
            <div className="lift h-full rounded-xl bg-card p-7">
              <h3 className="text-lg font-semibold">{r.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {r.title}
              </p>
              <p className="mt-1 font-mono text-sm text-signal">{r.org}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={150}>
        <p className="mt-8 text-sm text-muted">
          Contact details are available upon request.
        </p>
      </Reveal>
    </Section>
  );
}
