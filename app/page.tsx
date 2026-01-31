import { HeroSection } from "@/components/section/hero";
import { SkillsSection } from "@/components/section/skills";
import { ProjectsSection } from "@/components/section/projects";
import { TimelineSection } from "@/components/section/timeline";
import { BlogSection } from "@/components/section/blog";
import { AboutSection } from "@/components/section/about";
import { LifeSection } from "@/components/section/life";
import { ContactSection } from "@/components/section/contact";
import { StatisticsSection } from "@/components/section/statistics";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GridPattern } from "@/components/ui/grid-pattern";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lora | Full-Stack Developer",
  description: "Personal portfolio of Lora, showcasing projects in AI, Web Development, and more.",
};

export default function IndexPage() {
  return (
    <div className="min-h-screen" style={{ overflowX: "hidden" }}>
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <GridPattern
          width={40}
          height={40}
          className="opacity-[0.03] dark:opacity-[0.05] [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_90%,transparent)]"
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [6, 6],
            [12, 12],
            [15, 15],
            [20, 20],
          ]}
        />
      </div>
      <Navbar />
      <div id="main-content">
        <main>
          <div>
            <HeroSection typingText={{ value: "lora" }} cardTexts={[
              { value: "Full-Stack" },
              { value: "AI" },
              { value: "Blog" }
            ]} />
          </div>
          <div id="skills" className="scroll-mt-28 content-visibility-auto">
            <SkillsSection title="skills & technologies" description="Technologies I work with" />
          </div>
          <div id="projects" className="scroll-mt-28 content-visibility-auto">
            <ProjectsSection
              title="Featured Projects"
              description="Things I've built"
              items={[
                {
                  name: "AI Chat Agent",
                  description: "LLM-powered conversational agent with memory and context awareness",
                  cta: "View Project"
                },
                {
                  name: "E-commerce API",
                  description: "Full-stack e-commerce backend with payment integration",
                  cta: "View Project"
                },
                {
                  name: "Analytics Dashboard",
                  description: "Real-time data visualization and analytics platform",
                  cta: "View Project"
                },
                {
                  name: "Mobile Flashcards",
                  description: "Cross-platform flashcard app with spaced repetition",
                  cta: "View Project"
                },
                {
                  name: "Dev Tools CLI",
                  description: "Developer productivity CLI with multiple utilities",
                  cta: "View Project"
                }
              ]}
            />
          </div>
          <div className="content-visibility-auto">
            <StatisticsSection />
          </div>
          <div id="timeline" className="scroll-mt-28 content-visibility-auto">
            <TimelineSection />
          </div>
          <div className="content-visibility-auto">
            <BlogSection />
          </div>
          <div id="about" className="scroll-mt-28 content-visibility-auto">
            <AboutSection
              typingAnimationText="I am LORA"
              profileCtaText="View Profile"
              musicCtaText="Listen"
              locationNameText="Location"
              locationDescriptionText="Xian, China"
            />
          </div>
          <div id="life" className="scroll-mt-28 content-visibility-auto">
            <LifeSection />
          </div>
          <div id="contact" className="scroll-mt-28 content-visibility-auto">
            <ContactSection />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
