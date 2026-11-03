import Reveal from "@/components/motion/Reveal";
import ScrollText from "@/components/motion/ScrollText";
import { experience } from "@/data/resume";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 / Experience" title="Where I've worked.">
      <ol className="space-y-16 border-l border-raised pl-8 sm:pl-12">
        {experience.map((job) => (
          <li key={job.title} className="relative">
            <span
              aria-hidden
              className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-signal sm:-left-[53px]"
            />
            <Reveal>
              <p className="font-mono text-sm text-signal">{job.period}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {job.title}
              </h3>
              <p className="mt-1 text-muted">
                {job.org} · {job.place}
              </p>
            </Reveal>
            <ul className="mt-6 space-y-3">
              {job.points.map((p) => (
                <li key={p}>
                  <ScrollText
                    text={p}
                    className="max-w-2xl leading-relaxed"
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
