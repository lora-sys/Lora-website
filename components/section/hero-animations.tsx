"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { CometCard } from "@/components/ui/comet-card";
import { Icons } from "@/components/ui/icons";

interface HeroAnimationsProps {
  typingWords: string[];
  cardTexts: Array<{ value: string }>;
}

export function HeroAnimations({ typingWords, cardTexts }: HeroAnimationsProps) {
  const mainText = typingWords[0] || "lora";

  return (
    <>
      <div className="relative z-30 mb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary">
          {mainText}
        </h1>
      </div>

      <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={40} radius={240} speed={1}>
          <Icons.gitHub />
          <Icons.googleDrive />
          <Icons.whatsapp />
          <Icons.figma />
          <Icons.openai />
          <Icons.notion />
        </OrbitingCircles>

        <div className="z-10 flex flex-col items-center">
          <CometCard className="max-w-md">
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border">
              <div className="space-y-3 text-center">
                <p className="text-lg font-medium text-primary">
                  {cardTexts[0]?.value}
                </p>
                <p className="text-lg font-medium text-accent">
                  {cardTexts[1]?.value}
                </p>
                <p className="text-lg font-medium text-secondary-foreground">
                  {cardTexts[2]?.value}
                </p>
              </div>
            </div>
          </CometCard>
        </div>
      </div>
    </>
  );
}
