import Reveal from "@/components/motion/Reveal";
import { profile } from "@/data/resume";
import Section from "./Section";

export default function Contact() {
  const compose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

  return (
    <Section id="contact" eyebrow="06 / Contact" title="Let's talk." tone="ink">
      <Reveal className="-mt-8 mb-12 flex items-center gap-3">
        <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
        <p className="font-mono text-sm tracking-widest text-muted uppercase">
          Based in {profile.location}
        </p>
      </Reveal>
      <Reveal className="flex flex-wrap gap-3">
        <a
          href={compose}
          target="_blank"
          rel="noreferrer"
          className="focus-ring press rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-[transform,opacity] duration-150 hover:opacity-90"
        >
          Send an email
        </a>
        <a
          href={profile.resume}
          download
          className="focus-ring press rounded-md border border-raised px-6 py-3 text-sm font-medium transition-[transform,background-color] duration-150 hover:bg-card"
        >
          Download resume
        </a>
        <a
          href={profile.references}
          download
          className="focus-ring press rounded-md border border-raised px-6 py-3 text-sm font-medium transition-[transform,background-color] duration-150 hover:bg-card"
        >
          Download references
        </a>
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-24 font-mono text-sm text-muted">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </Reveal>
    </Section>
  );
}
