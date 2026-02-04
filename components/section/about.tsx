"use client";

import { BentoGrid } from "@/components/ui/bento-grid";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const TypewriterEffect = dynamic(
  () => import("@/components/ui/typewriter-effect").then((mod) => mod.TypewriterEffect),
  { ssr: false }
);

const AboutContent = dynamic(
  () => import("./about-content").then((mod) => mod.AboutContent),
  { 
    ssr: false,
    loading: () => <AboutSkeleton />
  }
);

export function AboutSkeleton() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="col-span-1 min-h-[12rem] animate-pulse bg-muted/30 rounded-xl"
        />
      ))}
    </BentoGrid>
  );
}

export function AboutSection({
  typingAnimationText,
  profileCtaText,
  musicCtaText,
  locationNameText,
  locationDescriptionText,
}: {
  typingAnimationText: string;
  profileCtaText: string;
  musicCtaText: string;
  locationNameText: string;
  locationDescriptionText: string;
}) {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center py-20 overflow-hidden">
      {/* Background Layer - Simple Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl px-4 space-y-12">
        {/* Animated Content - Typing */}
        <div className="flex items-center justify-center pt-8">
          <TypewriterEffect
            words={[{ text: typingAnimationText }]}
            className="text-wrap text-3xl font-bold md:text-5xl"
          />
        </div>

        {/* BentoGrid Content */}
        <Suspense fallback={<AboutSkeleton />}>
          <AboutContent
            profileCtaText={profileCtaText}
            musicCtaText={musicCtaText}
            locationNameText={locationNameText}
            locationDescriptionText={locationDescriptionText}
          />
        </Suspense>
      </div>
    </section>
  );
}
