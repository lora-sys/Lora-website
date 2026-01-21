"use client";
import { projectsData } from "@/config/site-data";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { LightRays } from "@/components/ui/light-rays";
import { Particles } from "@/components/ui/particles";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";
import { 
  Bot, ShoppingCart, BarChart, Smartphone, Terminal 
} from "lucide-react";
import { useIntlayer } from "react-intlayer";

import { MagicCard } from "@/components/ui/magic-card";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bot: Bot,
  "shopping-cart": ShoppingCart,
  "bar-chart": BarChart,
  smartphone: Smartphone,
  terminal: Terminal,
};
function getBackgroundComponent(type: string) {
  switch (type) {
    case "particles":
      return <Particles className="absolute inset-0"
      color="#3B82F6" quantity={30}/>;
    case "shine-border":
      return (
        <ShineBorder
          className="absolute inset-0 rounded-xl"
          borderWidth={2}
          shineColor={["#A78BFA", "#60A5FA", "#34D399"]}
        />
      );
    default:
      return <div className="absolute inset-0" />;
  }
}
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
      {children}
    </span>
  );
}

export function ProjectsSection() {
  const { title, description, items } = useIntlayer("projects");
  const titleText = typeof title === 'string' ? title : (title as any).value;
  const descriptionText = typeof description === 'string' ? description : (description as any).value;

  const titleWords = [{ text: titleText, className: "text-foreground" }];
  const descriptionWords = String(descriptionText).split(" ").map((word: string) => ({
    text: word + " ",
    className: "text-muted-foreground"
  }));
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center py-20">
      <div className="absolute inset-0 -z-10">
        <StripedPattern className="mask-[radial_gradient(400px_circle_at_center,white,transparent)]" />
        <LightRays />
      </div>
      
      <div className="relative z-10 text-center mb-12">
        <TypewriterEffect words={titleWords} className="text-3xl md:text-5xl font-bold tracking-tight" />
        <TypewriterEffect words={descriptionWords} className="text-base mt-4" />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl px-4">
        <BentoGrid className="mx-auto">
          {projectsData.items.map((item, i) => {
            const IconComponent = iconMap[item.icon] || Bot;
            const translatedItem = items[i];
            
            return (
              <MagicCard
                key={i}
                className={cn(item.className, "col-span-3 lg:col-span-1 min-h-[22rem]")}
                gradientColor="#262626"
              >
                <div className="flex h-full flex-col justify-between p-6">
                    {/* Background Element */}
                   <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
                        {getBackgroundComponent(item.background)}
                   </div>

                   <div className="relative z-10 flex flex-col gap-4">
                      <div className="p-3 bg-white/10 w-fit rounded-lg backdrop-blur-sm border border-white/10">
                        <IconComponent className="h-8 w-8 text-neutral-700 dark:text-neutral-200" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
                            {translatedItem.name}
                        </h3>
                        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                            {translatedItem.description}
                        </p>
                      </div>
                   </div>

                   <div className="relative z-10 mt-4">
                     <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags?.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                     </div>
                     
                     <Link 
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                     >
                        {translatedItem.cta} <ArrowRightIcon className="w-4 h-4" />
                     </Link>
                   </div>
                </div>
              </MagicCard>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}