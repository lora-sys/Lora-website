'use client';

import { ReactNode } from 'react';

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
}

export function FadeIn({ children, className }: AnimatedContainerProps) {
  return <div className={className}>{children}</div>;
}

export function SlideIn({ children, className }: AnimatedContainerProps) {
  return <div className={className}>{children}</div>;
}

export function ScaleIn({ children, className }: AnimatedContainerProps) {
  return <div className={className}>{children}</div>;
}

export function ArticleCard({ children, className }: { children: ReactNode; className?: string }) {
  return <article className={className}>{children}</article>;
}

export function SidebarCard({ children, className }: AnimatedContainerProps) {
  return <div className={className}>{children}</div>;
}

export function RelatedPostCard({ children }: { children: ReactNode }) {
  return <article>{children}</article>;
}

export function ReadingProgress() {
  return null;
}
