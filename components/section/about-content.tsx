"use client";

import { aboutData } from "@/config/site-data";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe } from "@/components/ui/globe";
import Image from "next/image";
import { Music, User, MapPin, BookOpen, Coffee, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// Inline lifestyle data
const lifestyleData = {
  tagline: "Code & Freedom",
  description: "A programmer's life is freedom",
  hobbies: ["Coding", "Reading", "Music", "Travel"],
};

const musicData = {
  favoriteSongs: [
    {
      name: "Running Up That Hill",
      artist: "Kate Bush",
      cover: "/images/music/running-up-hill.jpg",
      spotifyUrl: "https://open.spotify.com/track/29d0nY7Tv5GKuq16sSfWfP",
    },
    {
      name: "I Love You So",
      artist: "The Walters",
      cover: "/images/music/love-you-so.jpg",
      spotifyUrl: "https://open.spotify.com/track/3hBXKpDVw6bFG5Z8vFB8W5",
    },
  ],
};

const readingData = {
  totalBooks: 150,
  featuredBooks: [
    {
      title: "Three.js Journey",
      category: "Graphics",
    },
    {
      title: "Building AI Agents",
      category: "AI",
    },
    {
      title: "JavaScript高级程序设计",
      category: "Web",
    },
    {
      title: "Clean Code",
      category: "Engineering",
    },
  ],
};

interface AboutContentProps {
  profileCtaText: string;
  locationNameText: string;
  locationDescriptionText: string;
  musicCtaText: string;
}

export function AboutContent({
  profileCtaText,
  locationNameText,
  locationDescriptionText,
  musicCtaText,
}: AboutContentProps) {
  const profileCard = {
    name: aboutData.displayName,
    description: aboutData.username,
    href: aboutData.profileUrl,
    target: "_blank",
    cta: profileCtaText,
    Icon: User,
    className: "md:col-span-2 md:row-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
    ),
  };

  const featuredSong = musicData.favoriteSongs[0];
  const musicCard = {
    Icon: Music,
    name: "",
    description: "",
    href: featuredSong.spotifyUrl,
    target: "_blank",
    cta: musicCtaText,
    className: "md:col-span-1 md:row-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={featuredSong.cover}
          alt={featuredSong.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-xs text-white/70 font-medium truncate">{featuredSong.artist}</p>
          <p className="text-sm font-bold text-white truncate">{featuredSong.name}</p>
        </div>
      </div>
    ),
  };

  const footprintCard = {
    Icon: MapPin,
    name: locationNameText,
    description: locationDescriptionText,
    className: "md:col-span-1 md:row-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <Globe className="w-full h-full max-w-[120px] max-h-[120px]" />
      </div>
    ),
  };

  const readingCard = {
    Icon: BookOpen,
    name: "Reading",
    description: `${readingData.totalBooks}+ books`,
    href: "#statistics",
    cta: "View All",
    className: "md:col-span-1 md:row-span-1",
    background: (
      <div className="absolute inset-0 p-3 flex flex-wrap gap-1 content-end">
        {readingData.featuredBooks.slice(0, 4).map((book, i) => (
          <div
            key={i}
            className="w-10 h-14 rounded shadow-sm overflow-hidden flex-shrink-0"
            style={{ transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)` }}
          >
            <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <span className="text-[8px] text-white font-bold text-center leading-tight px-1">
                {book.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    ),
  };

  const lifestyleCard = {
    Icon: Coffee,
    name: lifestyleData.tagline,
    description: lifestyleData.description,
    className: "md:col-span-1 md:row-span-1",
    background: (
      <div className="absolute top-3 right-3 flex flex-wrap gap-1 max-w-[80px] justify-end">
        {lifestyleData.hobbies.map((hobby, i) => (
          <span
            key={i}
            className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70"
          >
            {hobby}
          </span>
        ))}
      </div>
    ),
  };

  const features = [profileCard, musicCard, footprintCard, readingCard, lifestyleCard];

  return (
    <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[160px] md:auto-rows-[180px]">
      {features.map((feature, idx) => {
        const { Icon, background, ...rest } = feature;

        return (
          <BentoCard
            key={`card-${idx}`}
            {...rest}
            className={cn(
              rest.className,
              "group overflow-hidden h-full",
              idx === 0 && "min-h-[320px] md:min-h-0"
            )}
            Icon={
              rest.name && (
                <Icon className="h-6 w-6 text-primary/80" />
              )
            }
            background={background}
          />
        );
      })}
    </BentoGrid>
  );
}
