"use client";

import { WavyBackground } from "@/components/ui/wavy-background";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";
import { HyperText } from "@/components/ui/hyper-text";
import Link from "next/link";
import { Github, Twitter, Instagram, Video, Music } from "lucide-react";

const iconMap: Record<string, any> = {
  github: Github,
  x: Twitter,
  instagram: Instagram,
  bilibili: Video,
  douyin: Music,
};

const socials = {
  github: "https://github.com/lora-sys",
  x: "https://twitter.com/lora1979391",
  instagram: "https://instagram.com/lora",
  bilibili: "https://space.bilibili.com/lora",
  douyin: "https://v.douyin.com/lora",
};

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-border/40 bg-background">
      <WavyBackground 
        className="max-w-4xl mx-auto pb-[calc(10rem+env(safe-area-inset-bottom))]" 
        containerClassName="h-[600px]"
        colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
        waveWidth={50}
        backgroundFill="transparent"
        blur={10}
        speed="fast"
        waveOpacity={0.5}
      >
        <div className="flex flex-col items-center justify-center gap-10 z-10">
            <TextRevealCard
                text="Get in touch"
                revealText="Let's talk"
                className="bg-transparent border-none shadow-none"
            >
                <TextRevealCardTitle className="text-3xl text-center text-foreground">
                    Contact Me
                </TextRevealCardTitle>
                <TextRevealCardDescription className="text-center text-muted-foreground">
                    Open for collaboration and opportunities
                </TextRevealCardDescription>
            </TextRevealCard>

            <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
                {Object.entries(socials).map(([key, url]) => {
                    const Icon = iconMap[key] || Github;
                    return (
                        <Link key={key} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                             <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                             <HyperText text={key.charAt(0).toUpperCase() + key.slice(1)} className="text-muted-foreground group-hover:text-primary text-lg font-bold" />
                        </Link>
                    )
                })}
            </div>
             <div className="text-center text-sm text-muted-foreground mt-10">
                © {new Date().getFullYear()} LoraLG. All rights reserved.
            </div>
        </div>
      </WavyBackground>
    </footer>
  );
}
