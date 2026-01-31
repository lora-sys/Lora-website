"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { CometCard } from "@/components/ui/comet-card";
import { Icons } from "@/components/ui/icons";
import Image from "next/image";

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
          {/* Avatar */}
          <div className="mb-6 relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="/profile.png"
                alt="Lora"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          
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
