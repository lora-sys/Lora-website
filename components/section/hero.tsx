"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroAnimationsWrapper = dynamic(
  () => import("./hero-animations").then((mod) => mod.HeroAnimations),
  { 
    ssr: true,  // 恢复 SSR，让首屏立即显示内容
    loading: () => (
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <div className="w-32 h-32 animate-pulse bg-muted/30 rounded-lg" />
      </div>
    )
  }
);

function HeroSkeleton() {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center">
      <div className="w-32 h-32 animate-pulse bg-muted/30 rounded-lg" />
    </div>
  );
}

export function HeroSection({ typingText, cardTexts }: { 
  typingText: { value: string | string[] }
  cardTexts: Array<{ value: string }>
}) {
  const typingWords = Array.isArray(typingText?.value)
    ? typingText.value.map(String)
    : [String(typingText?.value || "lora")];
  return (
    <section className="min-h-screen w-full py-20 overflow-hidden">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroAnimationsWrapper typingWords={typingWords} cardTexts={cardTexts} />
      </Suspense>
    </section>
  );
}
