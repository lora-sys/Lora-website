"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Marquee } from "@/components/ui/marquee";
import { siteConfig } from "@/config/site";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = siteConfig.skills.details;
const categories = siteConfig.skills.categories;

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
  title?: string; 
  description?: string;
}) {
  const config = siteConfig.skills;
  const titleWords = [{ text: title || config.title, className: "text-foreground" }];
  const descriptionWords = String(description || config.description || "").split(" ").map((word: string) => ({
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
          {config.slugs.map((slug: string) => (
            <span key={slug} className="mx-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              {slug}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
