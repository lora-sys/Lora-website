"use client";
import { HeroContent, HeroSkeleton } from "./hero-content";
import dynamic from "next/dynamic";
const HeroAnimationsWrapper = dynamic(
  () => import("./hero-animations").then((mod) => mod.HeroAnimations),
  { 
    ssr: false,
    loading: () => <HeroSkeleton />
  }
);
export function HeroSection({ typingText, cardTexts }: { 
  typingText: { value: string | string[] }
  cardTexts: Array<{ value: string }>
}) {
  const typingWords = Array.isArray(typingText?.value)
    ? typingText.value.map(String)
    : [String(typingText?.value || "lora")];
  return (
    <section className="min-h-screen w-full py-20 overflow-hidden">
      <HeroContent />
      <HeroAnimationsWrapper typingWords={typingWords} cardTexts={cardTexts} />
    </section>
  );
}