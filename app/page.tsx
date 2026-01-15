import { HeroSection } from "@/components/section/hero";
import { SkillsSection } from "@/components/section/skills";
import { ProjectsSection } from "@/components/section/projects";
import { AboutSection } from "@/components/section/about";
import { LifeSection } from "@/components/section/life";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection/>
      <LifeSection />
    </main>
  );
}
