"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "card";
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  className,
  variant = "text",
  width,
  height,
  ...props
}: SkeletonProps) {
  const variantClasses = {
    text: "rounded h-4",
    circular: "rounded-full",
    rectangular: "rounded-lg",
    card: "rounded-xl",
  };

  return (
    <div
      className={cn(
        "animate-pulse bg-muted",
        variantClasses[variant],
        className
      )}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    />
  );
}

export function HeroSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full py-20">
      <div className="flex flex-col items-center gap-8">
        <Skeleton variant="circular" width={168} height={168} />
        <div className="flex flex-col gap-3 items-center">
          <Skeleton variant="text" width={200} height={32} />
          <Skeleton variant="text" width={150} height={24} />
        </div>
        <Skeleton variant="card" width={320} height={150} />
      </div>
    </div>
  );
}

export function IconCloudSkeleton() {
  return (
    <div className="relative z-10 scale-75 md:scale-100 min-h-[400px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Skeleton variant="rectangular" width={400} height={400} className="rounded-full" />
        <Skeleton variant="text" width={200} height={24} />
      </div>
    </div>
  );
}

export function GlobeSkeleton() {
  return (
    <div className="relative z-10 scale-75 md:scale-100 min-h-[400px] flex items-center justify-center">
      <Skeleton variant="rectangular" width={400} height={400} className="rounded-full" />
    </div>
  );
}

export function SectionSkeleton({ height = "60vh" }: { height?: string }) {
  return (
    <div className="w-full flex items-center justify-center" style={{ minHeight: height }}>
      <Skeleton variant="rectangular" width="80%" height="60%" />
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="flex-1">
          <Skeleton variant="text" width="60%" height={20} />
          <Skeleton variant="text" width="40%" height={16} className="mt-2" />
        </div>
      </div>
      <Skeleton variant="text" width="100%" height={16} />
      <Skeleton variant="text" width="80%" height={16} className="mt-2" />
    </div>
  );
}
