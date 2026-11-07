import Reveal from "@/components/motion/Reveal";
import ScrollText from "@/components/motion/ScrollText";
import { activities, profile } from "@/data/resume";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="Reliable under pressure." tone="panel">
      <ScrollText
        text={profile.summary}
        className="max-w-3xl text-2xl leading-relaxed sm:text-3xl"
      />

      <Reveal className="mt-20">
        <h3 className="mb-6 font-mono text-sm text-muted">
          Activities, honors &amp; community
        </h3>
      </Reveal>
      <ul className="grid gap-x-10 sm:grid-cols-2">
        {activities.map((a, i) => (
          <Reveal as="li" key={a} delay={(i % 2) * 80}>
            <div className="flex items-start gap-3 border-b border-raised/70 py-4 text-sm leading-relaxed">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
              />
              <span className="whitespace-pre-line">{a}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
