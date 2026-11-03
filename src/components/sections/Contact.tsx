import Reveal from "@/components/motion/Reveal";
import { profile } from "@/data/resume";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="06 / Contact" title="Let's talk." tone="ink">
      <Reveal>
        <a
          href={`mailto:${profile.email}`}
          className="focus-ring break-all text-3xl font-medium tracking-tight underline decoration-signal decoration-2 underline-offset-8 transition-opacity duration-200 hover:opacity-80 sm:text-5xl"
        >
          {profile.email}
        </a>
      </Reveal>
      <Reveal delay={100} className="mt-10 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
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
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-24 font-mono text-sm text-muted">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </Reveal>
    </Section>
  );
}
