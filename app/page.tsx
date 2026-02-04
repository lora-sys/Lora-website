import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HeroSection } from "@/components/section/hero";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GridPattern } from "@/components/ui/grid-pattern";
import type { Metadata } from "next";
import "./globals.css";

// Lazy load sections below the fold for better performance
// Following Vercel best practice: bundle-dynamic-imports
// Note: In App Router Server Components, we don't use ssr: false
const SkillsSection = dynamic(
  () => import("@/components/section/skills").then((mod) => mod.SkillsSection)
);

const ProjectsSection = dynamic(
  () => import("@/components/section/projects").then((mod) => mod.ProjectsSection)
);

const StatisticsSection = dynamic(
  () => import("@/components/section/statistics").then((mod) => mod.StatisticsSection)
);

const TimelineSection = dynamic(
  () => import("@/components/section/timeline").then((mod) => mod.TimelineSection)
);

const BlogSection = dynamic(
  () => import("@/components/section/blog").then((mod) => mod.BlogSection)
);

const AboutSection = dynamic(
  () => import("@/components/section/about").then((mod) => mod.AboutSection)
);

const LifeSection = dynamic(
  () => import("@/components/section/life").then((mod) => mod.LifeSection)
);

const ContactSection = dynamic(
  () => import("@/components/section/contact").then((mod) => mod.ContactSection)
);

// Simple skeleton for lazy-loaded sections
const sectionSkeleton = (
  <div className="min-h-[50vh] w-full flex items-center justify-center">
    <div className="w-24 h-24 animate-pulse bg-muted/30 rounded-lg" />
  </div>
);

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
            <Suspense fallback={sectionSkeleton}>
              <SkillsSection title="skills & technologies" description="Technologies I work with" />
            </Suspense>
          </div>
          <div id="projects" className="scroll-mt-28 content-visibility-auto">
            <Suspense fallback={sectionSkeleton}>
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
            </Suspense>
          </div>
          <div className="content-visibility-auto">
            <Suspense fallback={sectionSkeleton}>
              <StatisticsSection />
            </Suspense>
          </div>
          <div id="timeline" className="scroll-mt-28 content-visibility-auto">
            <Suspense fallback={sectionSkeleton}>
              <TimelineSection />
            </Suspense>
          </div>
          <div className="content-visibility-auto">
            <Suspense fallback={sectionSkeleton}>
              <BlogSection />
            </Suspense>
          </div>
          <div id="about" className="scroll-mt-28 content-visibility-auto">
            <Suspense fallback={sectionSkeleton}>
              <AboutSection
                typingAnimationText="I am LORA"
                profileCtaText="View Profile"
                musicCtaText="Listen"
                locationNameText="Location"
                locationDescriptionText="Xian, China"
              />
            </Suspense>
          </div>
          <div id="life" className="scroll-mt-28 content-visibility-auto">
            <Suspense fallback={sectionSkeleton}>
              <LifeSection />
            </Suspense>
          </div>
          <div id="contact" className="scroll-mt-28 content-visibility-auto">
            <Suspense fallback={sectionSkeleton}>
              <ContactSection />
            </Suspense>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
