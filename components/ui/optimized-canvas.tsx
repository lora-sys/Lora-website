"use client";

import { useEffect, useRef, useState, memo } from "react";
import { useLazyAnimation } from "@/hooks/use-lazy-animation";
import { cn } from "@/lib/utils";

interface OptimizedCanvasProps {
  className?: string;
  renderFunction: (canvas: HTMLCanvasElement) => () => void;
  placeholder?: React.ReactNode;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const OptimizedCanvas = memo(function OptimizedCanvas({
  className,
  renderFunction,
  placeholder,
  width = 400,
  height = 400,
  priority = false,
}: OptimizedCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const [isReady, setIsReady] = useState(false);

  const { ref, shouldRender, isVisible } = useLazyAnimation({
    threshold: priority ? 0 : 0.1,
    rootMargin: priority ? "0px" : "200px",
  });

  useEffect(() => {
    if (!shouldRender || !canvasRef.current) return;

    const cleanup = renderFunction(canvasRef.current);
    setIsReady(true);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      cleanup();
    };
  }, [shouldRender, renderFunction]);

  if (!shouldRender) {
    return (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={cn("flex items-center justify-center", className)}
        style={{ width, height }}
      >
        {placeholder || (
          <div className="animate-pulse bg-muted rounded-lg w-full h-full" />
        )}
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={cn(
        "transition-opacity duration-500",
        isReady ? "opacity-100" : "opacity-0",
        className
      )}
    />
  );
});

interface LazyCanvasProps {
  children: React.ReactNode;
  className?: string;
  priority?: boolean;
}

export const LazyCanvas = memo(function LazyCanvas({
  children,
  className,
  priority = false,
}: LazyCanvasProps) {
  const { ref, shouldRender } = useLazyAnimation({
    threshold: priority ? 0 : 0.1,
    rootMargin: priority ? "0px" : "200px",
  });

  if (!shouldRender) {
    return (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={cn("flex items-center justify-center", className)}
      >
        <div className="animate-pulse bg-muted/50 rounded-lg w-full h-full max-w-[600px] aspect-[1/1]" />
      </div>
    );
  }

  return <div className={className}>{children}</div>;
});
