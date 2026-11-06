import Reveal from "@/components/motion/Reveal";
import { projects } from "@/data/resume";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="04 / Projects" title="What I've built.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => {
          const card = (
            <>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`text-xl font-semibold transition-colors ${project.link ? "group-hover:text-accent" : ""}`}>
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

              {project.link && (
                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-signal transition-[gap] group-hover:gap-3">
                    View project
                    <span aria-hidden>→</span>
                  </span>
                </div>
              )}
            </>
          );
          const cardClassName = `relative flex h-full flex-col rounded-xl bg-card p-7 transition-all duration-200 ${
            project.link ? "lift group" : ""
          }`;

          return (
            <Reveal key={project.title} delay={i * 100}>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                >
                  {card}
                </a>
              ) : (
                <div className={cardClassName}>{card}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
