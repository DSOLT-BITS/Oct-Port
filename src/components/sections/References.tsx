import Reveal from "@/components/motion/Reveal";
import { references } from "@/data/resume";
import Section from "./Section";
import ReferenceCard from "./ReferenceCard";

export default function References() {
  return (
    <Section id="references" eyebrow="06 / References" title="People who can vouch." tone="panel">
      <div className="grid gap-4 md:grid-cols-3">
        {references.map((r, i) => (
          <Reveal key={r.name} delay={i * 100}>
            <ReferenceCard reference={r} />
          </Reveal>
        ))}
      </div>
      <Reveal delay={150}>
        <p className="mt-8 text-sm text-muted">
          Select a reference to see their contact details.
        </p>
      </Reveal>
    </Section>
  );
}
