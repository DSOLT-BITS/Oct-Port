import Reveal from "@/components/motion/Reveal";
import { certifications, education } from "@/data/resume";
import CertificatePreview from "./CertificatePreview";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="05 / Certifications & education" title="Professional credentials.">
      <Reveal>
        <h3 className="mb-6 font-mono text-sm text-muted">Professional Certifications</h3>
      </Reveal>
      <ul className="mb-16 grid gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 80}>
            <div className="lift h-full rounded-xl bg-card p-6 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-lg font-medium">{c.title}</h4>
                  <p className="mt-1 text-sm text-muted">{c.org}</p>
                </div>
                <span className="shrink-0 rounded bg-signal px-2 py-1 font-mono text-xs font-medium text-ink">
                  {c.date}
                </span>
              </div>
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
