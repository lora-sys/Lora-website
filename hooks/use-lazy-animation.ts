"use client";

import { useEffect, useState, useRef } from "react";

interface UseLazyAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  disableOnReducedMotion?: boolean;
}

export function useLazyAnimation({
  threshold = 0.1,
  rootMargin = "100px",
  disableOnReducedMotion = true,
}: UseLazyAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (disableOnReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      setShouldRender(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, disableOnReducedMotion]);

  return { ref: elementRef, isVisible, shouldRender };
}

export function useOnScreen(options?: UseLazyAnimationOptions) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOnScreen(true);
        }
      },
      { threshold: 0.01, rootMargin: "200px" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isOnScreen };
}
