'use client';

import * as React from 'react';
import { useMemo } from 'react';

// Custom components to override default MDX components if needed
const customComponents = {
};

interface MDXContentProps {
  code: string;
  components?: Record<string, React.ComponentType<any>>;
}

export function MDXContent({ code, components }: MDXContentProps) {
  const Component = useMemo(() => {
    try {
      // Contentlayer generates a function that returns the component
      const fn = new Function('React', `${code}; return Object.assign({}, { React }, exports);`);
      const exports = {};
      const result = fn(React);
      return result.default || result.Component || (() => null);
    } catch (e) {
      console.error('Error rendering MDX:', e);
      return () => null;
    }
  }, [code]);

  return <Component components={{ ...customComponents, ...components }} />;
}
