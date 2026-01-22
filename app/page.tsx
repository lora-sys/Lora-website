import { Locales } from "intlayer";
import { HeroSection } from "@/components/section/hero";
import dynamic from "next/dynamic";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ResizableNavbar } from "@/components/layout/resizable-navbar";
import { Footer } from "@/components/layout/footer";
import { IntlayerClientProvider } from "next-intlayer";
import { GridPattern } from "@/components/ui/grid-pattern";
import type { Metadata } from "next";
import skillsContent from "@/components/section/skills.content";
import projectsContent from "@/components/section/projects.content";
import aboutContent from "@/components/section/about.content";

export const metadata: Metadata = {
  title: "Lora | Full-Stack Developer",
  description: "Personal portfolio of Lora, showcasing projects in AI, Web Development, and more.",
};

function getHeroData(locale: string) {
  const typingTextEn = ["Hi, I'm lora", "I build things for the web", "I create intelligent agents"];
  const typingTextZh = ["你好，我是 lora", "我为 Web 构建应用", "我致力于开发智能体"];
  const cardTextsEn = ["Full-Stack Developer", "AI Enthusiast", "Tech Blogger"];
  const cardTextsZh = ["全栈开发工程师", "AI 爱好者", "技术博主"];
  
  const isZh = locale.includes('zh');
  
  return {
    typingText: { value: isZh ? typingTextZh : typingTextEn },
    cardTexts: (isZh ? cardTextsZh : cardTextsEn).map(v => ({ value: v }))
  };
}

function getSkillsData(locale: string) {
  const title = skillsContent.content.title;
  const description = skillsContent.content.description;
  const isZh = locale.includes('zh');
  
  return {
    title: isZh ? String(title).replace('技能与技术', '技能与技术') : "skills & technologies",
    description: isZh ? "我所使用的技术栈" : "Technologies I work with"
  };
}

function getProjectsData(locale: string) {
  const isZh = locale.includes('zh');
  
  return {
    title: isZh ? "精选项目" : "Featured Projects",
    description: isZh ? "我亲手打造的作品" : "Things I've built",
    items: [
      {
        name: isZh ? "AI 聊天助手" : "AI Chat Agent",
        description: isZh ? "基于大语言模型的对话助手，支持记忆和上下文理解" : "LLM-powered conversational agent with memory and context awareness",
        cta: isZh ? "查看项目" : "View Project"
      },
      {
        name: isZh ? "电商 API" : "E-commerce API",
        description: isZh ? "完整的电商后端系统，支持支付集成" : "Full-stack e-commerce backend with payment integration",
        cta: isZh ? "查看项目" : "View Project"
      },
      {
        name: isZh ? "数据分析仪表盘" : "Analytics Dashboard",
        description: isZh ? "实时数据可视化和分析平台" : "Real-time data visualization and analytics platform",
        cta: isZh ? "查看项目" : "View Project"
      },
      {
        name: isZh ? "移动端背单词" : "Mobile Flashcards",
        description: isZh ? "支持间隔重复算法的跨平台背单词应用" : "Cross-platform flashcard app with spaced repetition",
        cta: isZh ? "查看项目" : "View Project"
      },
      {
        name: isZh ? "开发者工具 CLI" : "Dev Tools CLI",
        description: isZh ? "提升开发效率的多功能命令行工具" : "Developer productivity CLI with multiple utilities",
        cta: isZh ? "查看项目" : "View Project"
      }
    ]
  };
}

function getAboutData(locale: string) {
  const isZh = locale.includes('zh');
  
  return {
    typingAnimationText: isZh ? "我是 LORA" : "I am LORA",
    profileCtaText: isZh ? "查看个人主页" : "View Profile",
    contributionsNameText: isZh ? "贡献" : "Contributions",
    contributionsDescriptionText: isZh ? "总提交数" : "Total commits",
    starsNameText: isZh ? "获赞数" : "Stars",
    starsDescriptionText: isZh ? "总获赞数" : "Total stars",
    musicCtaText: isZh ? "立即收听" : "Listen",
    locationNameText: isZh ? "所在地" : "Location",
    locationDescriptionText: isZh ? "中国，西安" : "Xian, China",
    techStackNameText: isZh ? "技术栈" : "Tech Stack",
    techStackDescriptionText: isZh ? "持续学习中" : "Always learning",
  };
}

// Optimize dynamic imports with better loading states
const SkillsSection = dynamic(
  () => import("@/components/section/skills").then((mod) => mod.SkillsSection),
  { 
    loading: () => <div className="h-[60vh] flex items-center justify-center"><div className="animate-pulse w-80% h-60% bg-muted/30 rounded-xl" /></div>,
    ssr: true 
  }
);
const ProjectsSection = dynamic(
  () => import("@/components/section/projects").then((mod) => mod.ProjectsSection),
  { 
    loading: () => <div className="h-[60vh] flex items-center justify-center"><div className="animate-pulse w-80% h-60% bg-muted/30 rounded-xl" /></div>,
    ssr: true 
  }
);
const TimelineSection = dynamic(
  () => import("@/components/section/timeline").then((mod) => mod.TimelineSection),
  { 
    loading: () => <div className="h-[60vh] flex items-center justify-center"><div className="animate-pulse w-80% h-60% bg-muted/30 rounded-xl" /></div>,
    ssr: true 
  }
);
const BlogSection = dynamic(
  () => import("@/components/section/blog").then((mod) => mod.BlogSection),
  { 
    loading: () => <div className="h-[60vh] flex items-center justify-center"><div className="animate-pulse w-80% h-60% bg-muted/30 rounded-xl" /></div>,
    ssr: true 
  }
);
const AboutSection = dynamic(
  () => import("@/components/section/about").then((mod) => mod.AboutSection),
  { 
    loading: () => <div className="h-[60vh] flex items-center justify-center"><div className="animate-pulse w-80% h-60% bg-muted/30 rounded-xl" /></div>,
    ssr: true 
  }
);
const LifeSection = dynamic(
  () => import("@/components/section/life").then((mod) => mod.LifeSection),
  { 
    loading: () => <div className="h-[60vh] flex items-center justify-center"><div className="animate-pulse w-80% h-60% bg-muted/30 rounded-xl" /></div>,
    ssr: true 
  }
);
const ContactSection = dynamic(
  () => import("@/components/section/contact").then((mod) => mod.ContactSection),
  { 
    loading: () => <div className="h-[40vh] flex items-center justify-center"><div className="animate-pulse w-80% h-60% bg-muted/30 rounded-xl" /></div>,
    ssr: true 
  }
);

export default function IndexPage() {
  const locale = Locales.ENGLISH;
  const heroData = getHeroData(locale);
  const skillsData = getSkillsData(locale);
  const projectsData = getProjectsData(locale);
  const aboutData = getAboutData(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground" style={{ overflowX: "hidden" }} suppressHydrationWarning>
        <IntlayerClientProvider locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
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
            <ResizableNavbar />
            <div id="main-content">
              <main>
                <div>
                  <HeroSection typingText={heroData.typingText} cardTexts={heroData.cardTexts} />
                </div>
                <div id="skills" className="scroll-mt-28 content-visibility-auto">
                  <SkillsSection title={skillsData.title} description={skillsData.description} />
                </div>
                <div id="projects" className="scroll-mt-28 content-visibility-auto">
                  <ProjectsSection title={projectsData.title} description={projectsData.description} items={projectsData.items} />
                </div>
                <div id="timeline" className="scroll-mt-28 content-visibility-auto">
                  <TimelineSection />
                </div>
                <div className="content-visibility-auto">
                  <BlogSection />
                </div>
                <div id="about" className="scroll-mt-28 content-visibility-auto">
                  <AboutSection 
                    typingAnimationText={aboutData.typingAnimationText}
                    profileCtaText={aboutData.profileCtaText}
                    contributionsNameText={aboutData.contributionsNameText}
                    contributionsDescriptionText={aboutData.contributionsDescriptionText}
                    starsNameText={aboutData.starsNameText}
                    starsDescriptionText={aboutData.starsDescriptionText}
                    musicCtaText={aboutData.musicCtaText}
                    locationNameText={aboutData.locationNameText}
                    locationDescriptionText={aboutData.locationDescriptionText}
                    techStackNameText={aboutData.techStackNameText}
                    techStackDescriptionText={aboutData.techStackDescriptionText}
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
          </ThemeProvider>
        </IntlayerClientProvider>
      </body>
    </html>
  );
}
