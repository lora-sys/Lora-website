"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface RetroGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The grid angle in degrees
   * @default 65
   */
  angle?: number;
  /**
   * The grid color
   * @default "#000"
   */
  gridColor?: string;
}

export function RetroGrid({
  className,
  angle = 65,
  gridColor = "rgba(0,0,0,0.3)",
  ...props
}: RetroGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute h-full w-full overflow-hidden opacity-50 [perspective:200px]",
        className,
      )}
      style={{
        "--grid-angle": `${angle}deg`,
        "--grid-color": gridColor,
      } as React.CSSProperties}
      {...props}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-grid gpu-accelerated",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
            
            // Light mode
            "[background-image:linear-gradient(to_right,var(--grid-color)_1px,transparent_0),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_0)]",
            
            // Dark mode
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]",
          )}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
}
