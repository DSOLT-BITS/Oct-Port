import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import References from "@/components/sections/References";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <References />
      <Contact />
    </main>
  );
}
