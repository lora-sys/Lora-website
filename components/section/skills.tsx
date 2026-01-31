"use client";

import { skillsData } from "@/config/site-data";
import { IconCloud } from "@/components/ui/icon-cloud";
import { LightRays } from "@/components/ui/light-rays";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Marquee } from "@/components/ui/marquee";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const SkillsAnimations = dynamic(
  () => import("./skills-animations").then((mod) => mod.SkillsAnimations),
  { 
    ssr: false,
    loading: () => <SkillsSkeleton />
  }
);

function SkillsSkeleton() {
  return (
    <div className="relative z-10 text-center mb-12">
      <div className="h-[60px] animate-pulse bg-muted/30 rounded-lg mb-4" />
      <div className="h-[24px] animate-pulse bg-muted/30 rounded-lg w-2/3 mx-auto" />
    </div>
  );
}

export function SkillsSkeletonComponent() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <RetroGrid className="opacity-50" />
        <LightRays />
      </div>
      <div className="relative z-10 scale-50 sm:scale-75 md:scale-100 min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] animate-pulse bg-muted/30 rounded-lg" />
      </div>
      <div className="absolute bottom-10 w-full z-10 opacity-60">
        <Marquee pauseOnHover className="[--duration:15s]">
          {skillsData.slugs.map((slug: string) => (
            <span key={slug} className="mx-3 text-xs sm:text-sm font-mono text-muted-foreground uppercase tracking-widest">
              {slug}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export function SkillsSection({ title, description }: { 
  title: string; 
  description: string;
}) {
  const images = skillsData.slugs.map((slug: string) => `/skills/${slug}.svg`);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center py-20 overflow-hidden">
      {/* Background - Pure CSS, can be static */}
      <div className="absolute inset-0 -z-10">
        <RetroGrid className="opacity-50" />
        <LightRays />
      </div>
      
      {/* Static Marquee */}
      <div className="absolute bottom-10 w-full z-10 opacity-60">
        <Marquee pauseOnHover className="[--duration:15s]">
          {skillsData.slugs.map((slug: string) => (
            <span key={slug} className="mx-3 text-xs sm:text-sm font-mono text-muted-foreground uppercase tracking-widest">
              {slug}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Animated content - Lazy loaded */}
      <Suspense fallback={<SkillsSkeleton />}>
        <SkillsAnimations 
          titleText={title} 
          descriptionText={description}
          images={images}
        />
      </Suspense>
    </section>
  );
}
