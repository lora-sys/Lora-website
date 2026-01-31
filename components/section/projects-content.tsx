import { projectsData } from "@/config/site-data";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";
import { 
  Bot, ShoppingCart, BarChart, Smartphone, Terminal 
} from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bot: Bot,
  "shopping-cart": ShoppingCart,
  "bar-chart": BarChart,
  smartphone: Smartphone,
  terminal: Terminal,
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
      {children}
    </span>
  );
}

interface ProjectsContentProps {
  items: Array<{
    name: string;
    description: string;
    cta: string;
  }>;
}

export function ProjectsContent({ items }: ProjectsContentProps) {
  return (
    <div className="relative z-10 w-full max-w-6xl px-4">
      <BentoGrid className="mx-auto">
        {items.map((item, i) => {
          const staticItem = projectsData.items[i];
          const IconComponent = iconMap[staticItem?.icon] || Bot;
          
          return (
            <MagicCard
              key={i}
              className={cn(staticItem?.className, "col-span-3 lg:col-span-1 min-h-[18rem] md:min-h-[22rem]")}
              gradientColor="#262626"
            >
              <div className="flex h-full flex-col justify-between p-6">
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="p-3 bg-white/10 w-fit rounded-lg backdrop-blur-sm border border-white/10">
                    <IconComponent className="h-8 w-8 text-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {staticItem?.tags?.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  
                  <Link 
                    href={staticItem?.href || "#"}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {item.cta} <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </MagicCard>
          );
        })}
      </BentoGrid>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className="relative z-10 w-full max-w-6xl px-4">
      <BentoGrid className="mx-auto">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="col-span-3 lg:col-span-1 min-h-[18rem] md:min-h-[22rem] animate-pulse bg-muted/30 rounded-xl"
          />
        ))}
      </BentoGrid>
    </div>
  );
}
