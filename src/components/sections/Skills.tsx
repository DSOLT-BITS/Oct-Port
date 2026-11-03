import Reveal from "@/components/motion/Reveal";
import { skills } from "@/data/resume";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="03 / Skills" title="What I bring." tone="panel">
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 100}>
            <div className="lift h-full rounded-xl bg-card p-7">
              <h3 className="mb-5 text-lg font-semibold">{s.group}</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-muted">
                {s.items.map((item) => (
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
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
