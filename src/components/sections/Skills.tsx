import Reveal from "@/components/motion/Reveal";
import { skills } from "@/data/resume";
import Section from "./Section";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="03 / Skills" title="What I bring." tone="panel">
      <div className="grid items-start gap-4 md:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 100}>
            <SkillCard group={s.group} items={s.items} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
