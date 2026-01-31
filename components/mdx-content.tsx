'use client';

import * as React from 'react';
import * as _jsx_runtime from 'react/jsx-runtime';
import * as _jsx_dev_runtime from 'react/jsx-dev-runtime';
import { useMemo, Component, ErrorInfo, ReactNode } from 'react';
import { cn } from '@/lib/utils';

const Heading2 = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <h2 
    id={id}
    className={cn(
      'mt-16 mb-6 text-3xl font-bold tracking-tight text-foreground scroll-mt-28',
      className
    )}
  >
    <span className="inline-flex items-center gap-3">
      <span className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
      {children}
    </span>
  </h2>
);

const Heading3 = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <h3 
    id={id}
    className={cn(
      'mt-10 mb-4 text-2xl font-semibold tracking-tight text-foreground/90 scroll-mt-28',
      className
    )}
  >
    {children}
  </h3>
);

const Paragraph = ({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p 
    className={cn('mb-6 text-lg leading-[1.9] text-foreground/80', className)}
    {...props}
  >
    {children}
  </p>
);

const Strong = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <strong 
    className={cn('font-semibold text-foreground bg-primary/10 px-1.5 py-0.5 rounded', className)}
    {...props}
  >
    {children}
  </strong>
);

const UnorderedList = ({ children, className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className={cn('mb-8 space-y-3 list-none', className)} {...props}>
    {children}
  </ul>
);

const OrderedList = ({ children, className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
  <ol className={cn('mb-8 space-y-3 list-decimal list-inside marker:text-primary marker:font-semibold', className)} {...props}>
    {children}
  </ol>
);

const ListItem = ({ children, className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
  <li className={cn('flex items-start gap-3 text-lg leading-relaxed text-foreground/80', className)} {...props}>
    <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const BlockQuote = ({ children, className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote className={cn('my-8 p-6 rounded-2xl border-l-4 border-primary bg-primary/5', 'text-lg italic text-foreground/70', className)} {...props}>
    {children}
  </blockquote>
);

const CodeInline = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <code className={cn('px-2 py-1 text-sm font-mono rounded-md bg-muted text-primary border border-border/50', className)} {...props}>
    {children}
  </code>
);

const CodeBlock = ({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
  <pre
    {...props}
    className={cn('not-prose my-8 overflow-x-auto rounded-xl border border-border/50 bg-muted/50 p-5', className)}
  >
    <code className="block text-sm font-mono leading-relaxed">
      {children}
    </code>
  </pre>
);

const Anchor = ({
  href,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isExternal = typeof href === 'string' && /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      {...props}
      target={isExternal ? '_blank' : props.target}
      rel={isExternal ? 'noopener noreferrer' : props.rel}
      className={cn('text-primary font-medium underline-offset-4 hover:underline', className)}
    />
  );
};

const customComponents = {
  h1: ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn('text-4xl font-bold mb-8', className)} {...props}>{children}</h1>
  ),
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  strong: Strong,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  blockquote: BlockQuote,
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isCodeBlock = typeof className === 'string' && className.includes('language-');
    if (isCodeBlock) {
      return <CodeBlock {...props} className={className} />;
    }
    return <CodeInline {...props} className={className} />;
  },
  pre: ({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className={cn('', className)}>
      {children}
    </pre>
  ),
  a: Anchor,
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className={cn('my-12 border-border/50', className)} {...props} />
  ),
};

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: (error: Error | null) => ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class MDXErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return this.props.fallback(this.state.error);
    }
    return this.props.children;
  }
}

export function MDXContent({ code, components }: { code: string; components?: Record<string, unknown> }) {
  const { MDXComponent, evaluationError } = useMemo(() => {
    if (!code) return { MDXComponent: null, evaluationError: null };
    
    try {
      const exports: Record<string, unknown> = {};
      const localModule = { exports };
      
      const require = (name: string) => {
        if (name === 'react') return React;
        if (name === 'react/jsx-runtime') return _jsx_runtime;
        if (name === 'react/jsx-dev-runtime') return _jsx_dev_runtime;
        if (name === '@mdx-js/react') return { useMDXComponents: () => ({}) };
        throw new Error(`Module not found: ${name}`);
      };

      const fn = new Function('React', 'require', 'exports', 'module', '_jsx_runtime', '_jsx_dev_runtime', `
        try {
          return (function() {
            ${code}
          })();
        } catch (e) {
          throw e;
        }
      `);
      
      const resultFromFn = fn(React, require, exports, localModule, _jsx_runtime, _jsx_dev_runtime);
      const resultFromFnObj = resultFromFn as Record<string, unknown>;
      
      const possibleExports: unknown[] = [
        resultFromFn,
        resultFromFnObj?.default,
        (resultFromFnObj?.default as Record<string, unknown>)?.default,
        resultFromFnObj?.Component,
        exports,
        (exports as Record<string, unknown>)?.Component,
      ];
      
      let finalComponent: React.ComponentType<unknown> | null = null;
      for (const exp of possibleExports) {
        if (typeof exp === 'function') {
          finalComponent = exp as React.ComponentType<unknown>;
          break;
        }
      }

      if (!finalComponent && typeof localModule.exports === 'object' && localModule.exports !== null) {
        const values = Object.values(localModule.exports);
        finalComponent = values.find((v): v is React.ComponentType<unknown> => typeof v === 'function') ?? null;
      }

      if (!finalComponent && resultFromFnObj && typeof resultFromFnObj === 'object') {
        const values = Object.values(resultFromFnObj);
        const fnValue = values.find((v): v is React.ComponentType<unknown> => typeof v === 'function');
        if (fnValue) {
          finalComponent = fnValue;
        } else {
          const objWithDefault = values.find((v): v is { default: React.ComponentType<unknown> } => 
            v !== null && 
            typeof v === 'object' && 
            'default' in v && 
            typeof (v as { default: unknown }).default === 'function'
          );
          if (objWithDefault) {
            finalComponent = objWithDefault.default;
          }
        }
      }

      if (!finalComponent) {
        const exportKeys = Object.keys(localModule.exports).join(', ');
        const resultKeys =
          resultFromFnObj && typeof resultFromFnObj === 'object'
            ? Object.keys(resultFromFnObj).join(', ')
            : '';
        throw new Error(
          `Failed to extract a valid React component from MDX. Available exports: [${exportKeys}]. Result from fn: ${typeof resultFromFnObj}${resultKeys ? ` (keys: [${resultKeys}])` : ''}`
        );
      }

      return { MDXComponent: finalComponent, evaluationError: null };
    } catch (error: unknown) {
      return { MDXComponent: null, evaluationError: error as Error };
    }
  }, [code]);

  const getFallback = (error: Error | null) => (
    <div className="p-6 border border-destructive/20 rounded-xl bg-destructive/5 my-8">
      <h3 className="text-lg font-semibold text-destructive mb-2">Content Display Error</h3>
      <p className="text-muted-foreground text-sm mb-4">
        This content could not be displayed.
      </p>
      {error && (
        <pre className="text-xs p-4 bg-destructive/10 rounded overflow-auto max-h-40 text-destructive/80">
          {error.stack || error.message || 'Unknown Error'}
        </pre>
      )}
    </div>
  );

  if (!MDXComponent) return getFallback(evaluationError);

  const MDXComponentTyped = MDXComponent as React.ComponentType<{ components?: Record<string, unknown> }>;

  return (
    <MDXErrorBoundary fallback={getFallback}>
      <div className="article-content">
        <MDXComponentTyped components={{ ...customComponents, ...components }} />
      </div>
    </MDXErrorBoundary>
  );
}
