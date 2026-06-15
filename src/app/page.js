import Hero from "@/components/hero";
import SkillsShowcase from "@/components/skills-showcase";
import Projects from "@/components/projects";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsShowcase />
      <Projects />
      <ContactSection />
    </>
  );
}
