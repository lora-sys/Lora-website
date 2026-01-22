"use client";

import { aboutData } from "@/config/site-data";
import { BentoGrid } from "@/components/ui/bento-grid";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";

const TypingAnimation = dynamic(
  () => import("@/components/ui/typing-animation").then((mod) => mod.TypingAnimation),
  { ssr: false }
);

const AboutAnimations = dynamic(
  () => import("./about-animations").then((mod) => mod.AboutAnimations),
  { 
    ssr: false,
    loading: () => <AboutSkeleton />
  }
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
  contributionsNameText,
  contributionsDescriptionText,
  starsNameText,
  starsDescriptionText,
  musicCtaText,
  locationNameText,
  locationDescriptionText,
  techStackNameText,
  techStackDescriptionText,
}: {
  typingAnimationText: string;
  profileCtaText: string;
  contributionsNameText: string;
  contributionsDescriptionText: string;
  starsNameText: string;
  starsDescriptionText: string;
  musicCtaText: string;
  locationNameText: string;
  locationDescriptionText: string;
  techStackNameText: string;
  techStackDescriptionText: string;
}) {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center py-20 overflow-hidden">
      {/* Background Layer - Spline Scene */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0">
          {!isSplineLoaded ? (
            <div
              className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 cursor-pointer transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800"
              onClick={() => setIsSplineLoaded(true)}
              onMouseEnter={() => setIsSplineLoaded(true)}
            >
              <div className="text-center space-y-2">
                <span className="text-4xl">🤖</span>
                <p className="text-sm text-muted-foreground font-medium">Hover to load 3D Scene</p>
              </div>
            </div>
          ) : (
            <iframe
              src={aboutData.splineScene}
              className="h-full w-full border-0 animate-in fade-in duration-700"
              loading="lazy"
              title="3D Robot Scene"
            />
          )}
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl px-4 space-y-12">
        {/* Animated Content - Typing */}
        <div className="flex items-center justify-center pt-8">
          <TypingAnimation className="text-wrap text-3xl font-bold md:text-5xl">
            {typingAnimationText}
          </TypingAnimation>
        </div>

        {/* BentoGrid Content */}
        <Suspense fallback={<AboutSkeleton />}>
          <AboutContent
            profileCtaText={profileCtaText}
            contributionsNameText={contributionsNameText}
            contributionsDescriptionText={contributionsDescriptionText}
            starsNameText={starsNameText}
            starsDescriptionText={starsDescriptionText}
            musicCtaText={musicCtaText}
            locationNameText={locationNameText}
            locationDescriptionText={locationDescriptionText}
            techStackNameText={techStackNameText}
            techStackDescriptionText={techStackDescriptionText}
          />
        </Suspense>
      </div>
    </section>
  );
}
