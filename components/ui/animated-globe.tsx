"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Dot {
  x: number;
  y: number;
  z: number;
  size: number;
  delay: number;
  duration: number;
}

interface AnimatedGlobeProps {
  className?: string;
  dotColor?: string;
  lineColor?: string;
  dotCount?: number;
  speed?: "slow" | "medium" | "fast";
  intensity?: "low" | "medium" | "high";
}

export function AnimatedGlobe({
  className,
  dotColor = "#2563eb",
  lineColor = "rgba(59, 130, 246, 0.4)",
  dotCount = 60,
  speed = "medium",
  intensity = "medium",
}: AnimatedGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const dotsRef = useRef<Dot[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const speedMultiplier = {
    slow: 0.0003,
    medium: 0.0005,
    fast: 0.0008,
  }[speed];

  const intensityMultiplier = {
    low: 0.6,
    medium: 1,
    high: 1.4,
  }[intensity];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width = canvas.offsetWidth * 2;
    const height = canvas.height = canvas.offsetHeight * 2;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.35 * intensityMultiplier;

    dotsRef.current = Array.from({ length: dotCount }, () => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      return {
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
        size: Math.random() * 2.5 + 1.5,
        delay: Math.random() * 2000,
        duration: Math.random() * 2000 + 3000,
      };
    });

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += speedMultiplier * 16.67;

      const projectedDots = dotsRef.current.map((dot) => {
        const rotatedX = dot.x * Math.cos(time) - dot.z * Math.sin(time);
        const rotatedZ = dot.x * Math.sin(time) + dot.z * Math.cos(time);
        
        const screenX = centerX + rotatedX * radius;
        const screenY = centerY + dot.y * radius * 0.85;
        const scale = (rotatedZ + 2) / 3;
        const size = dot.size * scale;

        return { x: screenX, y: screenY, size, z: rotatedZ, original: dot };
      });

      projectedDots.forEach((dot) => {
        const opacity = Math.max(0.3, (dot.z + 1.2) / 2.2);
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(1, dot.size), 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.globalAlpha = opacity;
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      for (let i = 0; i < projectedDots.length; i++) {
        for (let j = i + 1; j < projectedDots.length; j++) {
          const d1 = projectedDots[i];
          const d2 = projectedDots[j];
          const dx = d1.x - d2.x;
          const dy = d1.y - d2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 70 && d1.z > -0.3 && d2.z > -0.3) {
            const opacity = (1 - dist / 70) * 0.25;
            ctx.beginPath();
            ctx.moveTo(d1.x, d1.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.strokeStyle = lineColor;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, dotColor, lineColor, dotCount, speedMultiplier, intensityMultiplier]);

  return (
    <div ref={containerRef} className={cn("relative w-full h-full flex items-center justify-center", className)}>
      {isVisible ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-xl" />
          <canvas
            ref={canvasRef}
            className="w-full h-full max-w-[500px] aspect-square relative z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20 pointer-events-none" />
        </>
      ) : (
        <div className="w-full h-full max-w-[500px] aspect-square flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-primary/10 animate-pulse" />
        </div>
      )}
    </div>
  );
}

interface StaticGlobeProps {
  className?: string;
}

export function StaticGlobe({ className }: StaticGlobeProps) {
  return (
    <div className={cn("relative w-full h-full flex items-center justify-center", className)}>
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-pulse" />
        <div className="absolute inset-4 rounded-full border border-primary/30" />
        <div className="absolute inset-8 rounded-full border border-primary/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 md:w-60 md:h-60 relative">
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-primary"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${angle}deg) translateX(60px) translateY(-50%)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface PulseGlobeProps {
  className?: string;
  primaryColor?: string;
  accentColor?: string;
}

export function PulseGlobe({
  className,
  primaryColor = "#3b82f6",
  accentColor = "#8b5cf6",
}: PulseGlobeProps) {
  return (
    <div className={cn("relative w-full h-full flex items-center justify-center", className)}>
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 animate-pulse" style={{ animationDuration: "3s" }} />
        
        <div className="absolute inset-2 rounded-full border border-primary/20" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-40 h-40">
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: i % 2 === 0 ? primaryColor : accentColor,
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${angle}deg) translateX(40px) translateY(-50%)`,
                  animation: `pulse-dot ${2 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute -inset-4 rounded-full border border-primary/10 animate-ping" style={{ animationDuration: "4s" }} />
      </div>
      
      <style jsx>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.4; transform: translateX(40px) translateY(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(40px) translateY(-50%) scale(1.5); }
        }
      `}</style>
    </div>
  );
}
