"use client";
import { cn } from "@/lib/utils";
import { useMemo, useEffect, useState } from "react";
import { Trophy, Star, Music, User, Globe, Code2 } from "lucide-react";
import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { aboutData } from "@/config/site-data";
import { TypingAnimation } from "../ui/typing-animation";
interface GitHubStats {
  contributions: number;
  stars: number;
}

export function AboutSection() {
  const [stats, setStats] = useState<GitHubStats>({
    contributions: 0,
    stars: 0,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchGitHubData() {
      // 先检查缓存
      const cached = localStorage.getItem("github-stats");
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        // 缓存有效期 1 小时
        if (Date.now() - timestamp < 60 * 60 * 1000) {
          setStats(data);
          setLoading(false);
          return;
        }
      }

      try {
        const [reposRes, eventsRes] = await Promise.all([
          fetch(
            "https://api.github.com/users/lora-sys/repos?per_page=100&sort=updated"
          ),
          fetch(
            "https://api.github.com/users/lora-sys/events/public?per_page=100"
          ),
        ]);
        const [reposData, eventsData] = await Promise.all([
          reposRes.json(),
          eventsRes.json(),
        ]);
        const totalStars = reposData.reduce(
          (acc: number, repo: { stargazers_count: number }) =>
            acc + repo.stargazers_count,
          0
        );
        const pushEvents = eventsData.filter(
          (e: { type: string }) => e.type === "PushEvent"
        );
        const contributions = pushEvents.reduce(
          (acc: number, e: { commits?: unknown[] }) =>
            acc + (e.commits?.length || 0),
          0
        );
        setStats({ contributions, stars: totalStars });
        // 保存到缓存
        localStorage.setItem(
          "github-stats",
          JSON.stringify({
            data: { contributions, stars: totalStars },
            timestamp: Date.now(),
          })
        );
      } catch (error) {
        console.warn("Failed to fetch GitHub data, using default values:", error);
        setStats({ contributions: 1024, stars: 128 });
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  const backgroundContent = useMemo(() => (
    <div className="absolute inset-0 flex flex-col">
      <div className="h-[75%] w-full">
        <iframe
          src={aboutData.splineScene}
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>
      <div className="flex h-[25%] items-start justify-center pt-4">
        <TypingAnimation className="text-wrap text-3xl font-bold md:text-5xl">
          I am LORA
        </TypingAnimation>
      </div>
    </div>
  ), []);

  const features = [
    {
      name: aboutData.displayName,
      description: aboutData.username,
      href: aboutData.profileUrl,
      target: "_blank",
      cta: "View Profile",
      Icon: User,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
      background: backgroundContent,
    },
    {
      Icon: Trophy,
      name: "Contributions",
      description: "Total commits",
      href: aboutData.profileUrl,
      target: "_blank",
      cta: "View Profile",
      className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
      background: (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
          {loading ? (
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          ) : (
            <>
              <NumberTicker
                value={stats.contributions}
                className="text-6xl font-bold tracking-tighter text-primary"
              />
              <p className="mt-2 text-sm text-muted-foreground">
                Contributions
              </p>
            </>
          )}
        </div>
      ),
    },
    {
      Icon: Star,
      name: "Stars",
      description: "Total stars",
      href: aboutData.profileUrl,
      target: "_blank",
      cta: "View Profile",
      className: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
      background: (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
          {loading ? (
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          ) : (
            <>
              <NumberTicker
                value={stats.stars}
                className="text-6xl font-bold tracking-tighter text-primary"
              />
              <p className="mt-2 text-sm text-muted-foreground">Stars</p>
            </>
          )}
        </div>
      ),
    },
    {
      Icon: Music,
      name: aboutData.music[0].name,
      description: aboutData.music[0].artist,
      href: "https://open.spotify.com",
      target: "_blank",
      cta: "Listen",
      dark: true,
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
      background: (
        <div className="absolute inset-0">
          <Image
            src={aboutData.music[0].coverImage}
            alt={aboutData.music[0].name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-lg text-muted-foreground">
              {aboutData.music[0].artist}
            </p>
            <p className="text-2xl font-semibold text-white">
              {aboutData.music[0].name}
            </p>
          </div>
        </div>
      ),
    },
    {
      Icon: Music,
      name: aboutData.music[1].name,
      description: aboutData.music[1].artist,
      href: "https://open.spotify.com",
      target: "_blank",
      cta: "Listen",
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
      background: (
        <div className="absolute inset-0">
          <Image
            src={aboutData.music[1].coverImage}
            alt={aboutData.music[1].name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-lg text-muted-foreground">
              {aboutData.music[1].artist}
            </p>
            <p className="text-2xl font-semibold text-white">
              {aboutData.music[1].name}
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "Trae",
      description: "AI IDE",
      href: "https://trae.ai",
      target: "_blank",
      Icon: Code2,
      cta: "Visit",
      className: "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
      background: (
        <div className="absolute inset-0 flex items-center justify-center">
          <Meteors number={10} />
          <TextHoverEffect text="Trae" />
        </div>
      ),
    },
    {
      name: "Chrome",
      description: "Browser",
      href: "https://chrome.google.com",
      target: "_blank",
      Icon: Globe,
      cta: "Visit",
      className: "lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-4",
      background: <TextHoverEffect text="Chrome" />,
    },
  ];
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Meteors number={20} />
      </div>

      <div className="w-full max-w-7xl px-4">
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => {
            const { Icon, ...rest } = feature;
            return (
              <BentoCard
                key={rest.name}
                {...rest}
                Icon={
                  <Icon
                    className={cn(
                      "h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75",
                      rest.dark ? "text-white" : "text-neutral-700"
                    )}
                  />
                }
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
