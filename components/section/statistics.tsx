"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { 
  Film, 
  Music, 
  BookOpen,
  Star,
  Headphones,
  Clock,
  TrendingUp,
  Target
} from "lucide-react";

// Inline statistics data
const statisticsData = {
  movies: {
    total: 120,
    averageRating: 4.2,
    ratingDistribution: [
      { rating: 5, count: 35 },
      { rating: 4, count: 48 },
      { rating: 3, count: 28 },
      { rating: 2, count: 7 },
      { rating: 1, count: 2 },
    ],
  },
  music: {
    yearlyHours: 350,
    albumsCollected: 45,
    topGenres: ["Rock", "Pop", "Indie", "Electronic"],
  },
  reading: {
    totalBooks: 150,
    yearlyGoal: 30,
    completedThisYear: 18,
    currentlyReading: "Three.js Journey",
  },
};

// Rating distribution chart component
function RatingChart({ distribution }: { distribution: { rating: number; count: number }[] }) {
  const maxCount = Math.max(...distribution.map(d => d.count));
  
  return (
    <div className="flex items-end gap-1 h-12 mt-2">
      {distribution.map((item, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div 
            className="w-full bg-rose-500/60 rounded-t transition-all duration-500 hover:bg-rose-500"
            style={{ height: `${(item.count / maxCount) * 100}%` }}
          />
          <span className="text-[10px] text-muted-foreground">{item.rating}★</span>
        </div>
      ))}
    </div>
  );
}

// Progress bar component
function ProgressBar({ current, total }: { current: number; total: number }) {
  const percentage = (current / total) * 100;
  
  return (
    <div className="mt-3">
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-muted-foreground">年度目标</span>
        <span className="font-medium">{current}/{total}</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-emerald-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

// Genre tags component
function GenreTags({ genres }: { genres: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {genres.map((genre, i) => (
        <span 
          key={i}
          className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400"
        >
          {genre}
        </span>
      ))}
    </div>
  );
}

export function StatisticsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const statsCards = [
    {
      id: "movies",
      Icon: Film,
      name: "Movies",
      className: "md:col-span-1",
      background: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-red-500/5 to-transparent" />
          <div className="absolute top-3 right-3 opacity-20">
            <Film className="w-16 h-16 text-rose-500" />
          </div>
        </div>
      ),
      content: (
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-baseline gap-1">
                <motion.span 
                  className="text-4xl font-bold text-rose-500"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {statisticsData.movies.total}
                </motion.span>
                <span className="text-sm text-muted-foreground">films</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Watched</p>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold">{statisticsData.movies.averageRating}</span>
            </div>
          </div>
          <div className="flex-1" />
          <RatingChart distribution={statisticsData.movies.ratingDistribution} />
        </div>
      ),
    },
    {
      id: "music",
      Icon: Music,
      name: "Music",
      className: "md:col-span-1",
      background: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent" />
          <div className="absolute top-3 right-3 opacity-20">
            <Headphones className="w-16 h-16 text-violet-500" />
          </div>
        </div>
      ),
      content: (
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-baseline gap-1">
                <motion.span 
                  className="text-4xl font-bold text-violet-500"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {statisticsData.music.yearlyHours}
                </motion.span>
                <span className="text-sm text-muted-foreground">h</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Listening time this year</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-violet-400">
                <TrendingUp className="w-3 h-3" />
                <span className="text-xs">{statisticsData.music.albumsCollected}</span>
              </div>
              <p className="text-[10px] text-muted-foreground">Albums collected</p>
            </div>
          </div>
          <div className="flex-1" />
          <GenreTags genres={statisticsData.music.topGenres} />
        </div>
      ),
    },
    {
      id: "reading",
      Icon: BookOpen,
      name: "Reading",
      className: "md:col-span-1",
      background: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent" />
          <div className="absolute top-3 right-3 opacity-20">
            <BookOpen className="w-16 h-16 text-emerald-500" />
          </div>
        </div>
      ),
      content: (
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-baseline gap-1">
                <motion.span 
                  className="text-4xl font-bold text-emerald-500"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {statisticsData.reading.totalBooks}
                </motion.span>
                <span className="text-sm text-muted-foreground">+</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Books read</p>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              <Target className="w-4 h-4" />
              <span className="text-xs">{statisticsData.reading.yearlyGoal}/year</span>
            </div>
          </div>
          <div className="flex-1" />
          <ProgressBar 
            current={statisticsData.reading.completedThisYear} 
            total={statisticsData.reading.yearlyGoal} 
          />
          <p className="text-[10px] text-muted-foreground mt-2 truncate">
            Currently reading: {statisticsData.reading.currentlyReading}
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="statistics" className="relative flex min-h-[60vh] w-full flex-col items-center justify-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 space-y-8">
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">Digital Life</h2>
          <p className="text-muted-foreground">Tracking life through data</p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[200px]">
            {statsCards.map((card) => (
              <motion.div key={card.id} variants={itemVariants} className="h-full">
                <div className={cn(
                  "group relative col-span-1 row-span-1 h-full overflow-hidden rounded-xl",
                  "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                  "dark:bg-background dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
                  card.className
                )}>
                  {/* Background Layer */}
                  <div className="absolute inset-0 size-full pointer-events-none">
                    {card.background}
                  </div>
                  
                  {/* Content Layer */}
                  <div className="relative z-10 h-full">
                    {card.content}
                  </div>

                  {/* Hover Effect */}
                  <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
                </div>
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
