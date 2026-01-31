"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Marquee } from "@/components/ui/marquee";

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React", level: 88, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  { name: "Prisma", level: 78, category: "Backend" },
  { name: "Docker", level: 70, category: "Backend" },
  
  // Mobile
  { name: "Flutter", level: 82, category: "Mobile" },
  { name: "Dart", level: 80, category: "Mobile" },
  { name: "Android", level: 65, category: "Mobile" },
  
  // Tools
  { name: "Git", level: 85, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Figma", level: 70, category: "Tools" },
];

const categories = ["Frontend", "Backend", "Mobile", "Tools"];

function SkillBar({ skill }: { skill: Skill }) {
  const filled = Math.round(skill.level / 10);
  const empty = 10 - filled;
  const bar = "█".repeat(filled) + "░".repeat(empty);
  
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-foreground font-mono">{skill.name}</span>
        <span className="text-muted-foreground font-mono">{skill.level}%</span>
      </div>
      <div className="font-mono text-sm tracking-wider">
        <span className="text-primary">{bar}</span>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="p-4 border border-border rounded-lg bg-card/50">
      <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">{title}</h3>
      {skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

export function SkillsSection({ title, description }: { 
  title: string; 
  description: string;
}) {
  const titleWords = [{ text: title, className: "text-foreground" }];
  const descriptionWords = String(description || "").split(" ").map((word: string) => ({
    text: word + " ",
    className: "text-muted-foreground"
  }));

  return (
    <section id="skills" className="min-h-screen w-full py-20">
      {/* Title */}
      <div className="text-center mb-12">
        <TypewriterEffect words={titleWords} className="text-3xl md:text-5xl font-bold tracking-tight" />
        <TypewriterEffect words={descriptionWords} className="text-base mt-4" />
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {categories.map((category) => (
            <SkillCategory 
              key={category} 
              title={category} 
              skills={skills.filter(s => s.category === category)} 
            />
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-12 opacity-60">
        <Marquee pauseOnHover className="[--duration:15s]">
          {skills.map((skill) => (
            <span key={skill.name} className="mx-4 text-sm font-mono text-muted-foreground uppercase tracking-widest">
              {skill.name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
