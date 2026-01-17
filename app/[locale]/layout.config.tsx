import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2.5 group">
        <div className="relative">
          <Image 
            src="/logo.svg" 
            alt="LoraLG" 
            width={32} 
            height={32} 
            className="rounded-lg transition-transform group-hover:rotate-12 duration-300"
          />
          <div className="absolute inset-0 bg-primary/10 rounded-lg blur-sm group-hover:blur-md transition-all" />
        </div>
        <span className="font-black text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          LoraLG Blog
        </span>
      </div>
    ),
    transparentMode: 'top',
  },
  links: [
    {
      text: 'Home',
      url: '/',
      active: 'nested-url',
    },
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
  ],
};
