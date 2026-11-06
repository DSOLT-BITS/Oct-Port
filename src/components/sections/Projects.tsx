import Reveal from "@/components/motion/Reveal";
import { projects } from "@/data/resume";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="04 / Projects" title="What I've built.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="lift group relative flex h-full flex-col rounded-xl bg-card p-7 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
                {project.featured && (
                  <span className="shrink-0 rounded bg-signal px-2 py-1 font-mono text-xs font-medium text-ink">
                    Featured
                  </span>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-raised bg-panel px-3 py-1.5 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-signal group-hover:gap-3 transition-[gap]">
                  View project
                  <span aria-hidden>→</span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
