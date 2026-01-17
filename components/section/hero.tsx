"use client";
import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { CometCard } from "@/components/ui/comet-card";
import { heroData } from "@/config/site-data";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Icons } from "@/components/ui/icons";
import { useIntlayer } from "react-intlayer";

export function HeroSection() {
  const { typingText, cardTexts } = useIntlayer("hero");

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="relative z-30 mb-12 text-center">
        <TypingAnimation
          words={typingText.value}
          duration={80}
          startOnView={false}
          className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          loop={true}
        />
      </div>

      <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={40} radius={260}>
          <Icons.gitHub />
          <Icons.googleDrive />
          <Icons.whatsapp />
          <Icons.figma />
        </OrbitingCircles>

        <OrbitingCircles iconSize={30} radius={200} reverse speed={2}>
          <Icons.openai />
          <Icons.notion />
        </OrbitingCircles>

        <div className="z-10 flex flex-col items-center">
          <div className="mb-4">
            <Image
              src={heroData.profileImage}
              alt="Profile"
              width={168}
              height={168}
              className="rounded-full border-2 border-primary shadow-lg shadow-primary/20"
              priority
            />
          </div>

          <CometCard className="max-w-md">
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border">
              <div className="space-y-3 text-center">
                <p className="text-lg font-medium text-primary">
                  {cardTexts[0].value}
                </p>
                <p className="text-lg font-medium text-accent">
                  {cardTexts[1].value}
                </p>
                <p className="text-lg font-medium text-secondary-foreground">
                  {cardTexts[2].value}
                </p>
              </div>
            </div>
          </CometCard>
        </div>
      </div>
    </section>
  );
}
