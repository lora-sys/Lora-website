"use client";
import { skillsData } from "@/config/site-data";
import { IconCloud } from "@/components/ui/icon-cloud";
import { LightRays } from "@/components/ui/light-rays";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Marquee } from "@/components/ui/marquee";
import { useIntlayer } from "react-intlayer";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function SkillsSection() {
  const { title, description } = useIntlayer("skills");
  const titleText = typeof title === 'string' ? title : (title as any).value;
  const descriptionText = typeof description === 'string' ? description : (description as any).value;

  const titleWords = [
    { text: titleText, className: "text-foreground" }
  ];
  const descriptionWords = String(descriptionText).split(" ").map((word: string)  => ({
    text: word + " ",
    className: "text-muted-foreground"
  }));
  const images = skillsData.slugs.map((slug : any) => `/skills/${slug}.svg`);
  
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <RetroGrid className="opacity-50" />
        <LightRays />
      </div>
      
      {/* Title */}
      <div className="relative z-10 text-center mb-12">
        <TypewriterEffect words={titleWords} className="text-3xl md:text-5xl font-bold tracking-tight" />
        <TypewriterEffect words={descriptionWords} className="text-base mt-4" />
      </div>
      
      {/* IconCloud */}
      <div className="relative z-10 scale-75 md:scale-100">
        <IconCloud images={images} />
      </div>

      {/* Bottom Marquee for extra tech feel */}
      <div className="absolute bottom-10 w-full z-10 opacity-60 hover:opacity-100 transition-opacity">
        <Marquee pauseOnHover className="[--duration:30s]">
          {skillsData.slugs.map((slug: string) => (
            <span key={slug} className="mx-4 text-sm font-mono text-muted-foreground uppercase tracking-widest">
              {slug}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}