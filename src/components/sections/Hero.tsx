import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";
import WordReveal from "@/components/motion/WordReveal";
import { profile, stats } from "@/data/resume";
import SignalWave from "./SignalWave";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      <Parallax
        speed={0.25}
        className="pointer-events-none absolute -right-6 top-24 select-none"
      >
        <span
          aria-hidden
          className="block font-mono text-[clamp(12rem,32vw,26rem)] font-semibold leading-none text-panel"
        >
          DS
        </span>
      </Parallax>

      <div className="relative mx-auto w-full max-w-5xl px-6 py-24">
        <Reveal>
          <p className="mb-6 font-mono text-sm text-muted">
            <span className="mr-3 inline-block h-2 w-2 rounded-full bg-signal align-middle" />
            {profile.location}
            <span className="ml-4 rounded-md border border-raised px-2.5 py-1 text-xs text-fg">
              U.S. Army Veteran
            </span>
          </p>
        </Reveal>

        <WordReveal
          as="h1"
          text={profile.name}
          className="text-6xl font-semibold tracking-tight sm:text-8xl"
        />
        <WordReveal
          as="p"
          text={profile.role}
          delay={200}
          className="mt-4 text-2xl text-muted sm:text-3xl"
        />
        <Reveal delay={300} className="mt-8">
          <SignalWave />
        </Reveal>

        <Reveal delay={350} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="focus-ring press rounded-md bg-accent px-8 py-3 text-sm font-medium text-white transition-[transform,opacity] duration-150 hover:opacity-90 shadow-lg shadow-accent/30"
          >
            Get in touch →
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring press rounded-md border border-raised px-8 py-3 text-sm font-medium transition-[transform,background-color] duration-150 hover:bg-card"
          >
            View resume
          </a>
        </Reveal>

        <dl className="mt-20 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={450 + i * 100}>
              <dt className="text-5xl font-semibold tracking-tight text-signal">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
