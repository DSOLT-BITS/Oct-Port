import Reveal from "@/components/motion/Reveal";
import { profile } from "@/data/resume";
import Section from "./Section";
import EmailMenu from "./EmailMenu";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="07 / Contact" title="Ready to work together?" tone="ink">
      <Reveal className="-mt-8 mb-12">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
          <p className="font-mono text-sm tracking-widest text-muted uppercase">
            Based in {profile.location}
          </p>
        </div>
        <p className="mt-4 max-w-2xl text-lg text-muted">{profile.seeking}</p>
      </Reveal>
      <Reveal className="flex flex-wrap gap-3">
        <EmailMenu email={profile.email} />
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="focus-ring press rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-[transform,opacity] duration-150 hover:opacity-90 shadow-lg shadow-accent/30"
        >
          View my resume
        </a>
        <a
          href={profile.references}
          target="_blank"
          rel="noreferrer"
          className="focus-ring press rounded-md border border-raised px-6 py-3 text-sm font-medium transition-[transform,background-color] duration-150 hover:bg-card"
        >
          View references
        </a>
        <a
          href={profile.resume}
          download
          className="focus-ring press rounded-md border border-raised px-6 py-3 text-sm font-medium transition-[transform,background-color] duration-150 hover:bg-card"
        >
          Download resume
        </a>
      </Reveal>
      <Reveal delay={100} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
        {profile.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="focus-ring font-mono text-sm underline decoration-signal decoration-2 underline-offset-4 transition-opacity duration-200 hover:opacity-80"
          >
            {l.label} ↗
          </a>
        ))}
      </Reveal>
      <Reveal delay={200}>
        <div className="mt-24 flex flex-col gap-4 border-t border-raised pt-8 font-mono text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <nav aria-label="Footer">
            <a
              href="#top"
              className="focus-ring transition-colors duration-200 hover:text-fg"
            >
              Back to top ↑
            </a>
          </nav>
        </div>
      </Reveal>
    </Section>
  );
}
