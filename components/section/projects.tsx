"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import { 
  Bot, ShoppingCart, BarChart, Smartphone, Terminal, ArrowRight 
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bot: Bot,
  "shopping-cart": ShoppingCart,
  "bar-chart": BarChart,
  smartphone: Smartphone,
  terminal: Terminal,
};

interface ProjectItem {
  name: string;
  description: string;
  cta: string;
  tags?: string[];
  href?: string;
  icon?: string;
  className?: string;
}

interface ProjectsSectionProps {
  title: string;
  description: string;
  items: ProjectItem[];
}

const defaultProjects = [
  { icon: "bot", href: "https://github.com/username/chat-agent", tags: ["React", "OpenAI API", "PostgreSQL", "Redis"], className: "col-span-1 md:col-span-2" },
  { icon: "shopping-cart", href: "https://github.com/username/ecommerce-api", tags: ["Node.js", "Express", "MongoDB", "Stripe"], className: "col-span-1" },
  { icon: "bar-chart", href: "https://github.com/username/dashboard", tags: ["Next.js", "D3.js", "Prisma", "Tailwind"], className: "col-span-1" },
  { icon: "smartphone", href: "https://github.com/username/flashcards", tags: ["Flutter", "Firebase", "Riverpod"], className: "col-span-1 md:col-span-2" },
  { icon: "terminal", href: "https://github.com/username/cli", tags: ["Rust", "Clap", "Ollama"], className: "col-span-1" },
];

function ProjectCard({ item, defaultData }: { item: ProjectItem; defaultData: any }) {
  const IconComponent = iconMap[defaultData?.icon] || Bot;
  
  return (
    <div className={cn(
      "p-6 border border-border rounded-lg bg-card/50 hover:bg-card/80 transition-colors",
      defaultData?.className
    )}>
      <div className="flex items-start gap-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {defaultData?.tags?.map((tag: string) => (
              <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                {tag}
              </span>
            ))}
          </div>
          
          <Link 
            href={defaultData?.href || "#"}
            className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:underline"
          >
            {item.cta} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection({ title, description, items }: ProjectsSectionProps) {
  const titleWords = [{ text: title, className: "text-foreground" }];
  const descriptionWords = String(description || "").split(" ").map((word: string) => ({
    text: word + " ",
    className: "text-muted-foreground"
  }));

  return (
    <section id="projects" className="min-h-screen w-full py-20">
      {/* Title */}
      <div className="text-center mb-12">
        <TypewriterEffect words={titleWords} className="text-3xl md:text-5xl font-bold tracking-tight" />
        <TypewriterEffect words={descriptionWords} className="text-base mt-4" />
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <ProjectCard 
              key={i} 
              item={item} 
              defaultData={defaultProjects[i]} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
