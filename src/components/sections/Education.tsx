import Reveal from "@/components/motion/Reveal";
import { certifications, education } from "@/data/resume";
import CertificatePreview from "./CertificatePreview";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="04 / Education" title="Training & education.">
      <Reveal>
        <h3 className="mb-6 font-mono text-sm text-muted">Certifications</h3>
      </Reveal>
      <ul className="mb-16 grid gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 80}>
            <div className="lift h-full rounded-xl bg-card p-6">
              <h4 className="text-lg font-medium">{c.title}</h4>
              <p className="mt-1 text-sm text-muted">{c.org}</p>
              <p className="mt-4 font-mono text-sm text-signal">{c.date}</p>
              <CertificatePreview file={c.file} title={c.title} />
            </div>
          </Reveal>
        ))}
      </ul>
      <Reveal>
        <h3 className="mb-6 font-mono text-sm text-muted">Education &amp; training</h3>
      </Reveal>
      <ul className="divide-y divide-raised border-y border-raised">
        {education.map((e, i) => (
          <Reveal as="li" key={e.title} delay={i * 60}>
            <div className="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-xl font-medium">{e.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {e.org} · {e.place}
                </p>
              </div>
              <p className="font-mono text-sm text-muted">{e.date}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
