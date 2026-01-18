'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

// Custom components to override default MDX components if needed
const customComponents = {
  // Add any custom components you want to use in MDX here
};

export function MDXContent({ code, components }: { code: string, components?: any }) {
  const MDXComponent = useMDXComponent(code);
  
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <MDXComponent components={{ ...customComponents, ...components }} />
    </div>
  );
}
