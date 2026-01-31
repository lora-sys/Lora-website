import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Navbar } from "@/components/layout/navbar";
import { GridPattern } from "@/components/ui/grid-pattern";

const posts: Record<string, {
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
  author?: string;
  license?: string;
}> = {
  "mastering-tailwind-v4": {
    title: "Mastering Tailwind v4",
    description: "A comprehensive guide to the new features in Tailwind CSS v4.",
    date: "2025-01-15",
    tags: ["CSS", "Tailwind"],
    author: "Lora",
    license: "CC BY-SA 4.0",
    content: `
# Mastering Tailwind v4

Tailwind CSS v4 brings exciting new features that make styling easier and more powerful.

## Key Changes

1. **Zero-config JIT**: No more tailwind.config.js required for basic usage
2. **CSS variables**: Native CSS variable support
3. **Improved performance**: Faster build times
4. **New color system**: More intuitive color palettes

## Getting Started

\`\`\`bash
npm install tailwindcss@next
\`\`\`

## Conclusion

Tailwind v4 makes it easier than ever to build beautiful, responsive interfaces.
    `
  },
  "art-of-3d-web-design": {
    title: "Art of 3D Web Design",
    description: "Exploring the intersection of web development and 3D graphics.",
    date: "2025-01-10",
    tags: ["3D", "WebGL"],
    author: "Lora",
    license: "CC BY-SA 4.0",
    content: `
# Art of 3D Web Design

3D web design opens up new possibilities for interactive and immersive experiences.

## Tools of the Trade

1. **Three.js**: The most popular 3D library for the web
2. **React Three Fiber**: React bindings for Three.js
3. **Splines**: Design tool for 3D web experiences
4. **Babylon.js**: Microsoft's 3D engine

## Getting Started

\`\`\`javascript
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
\`\`\`

## Conclusion

3D web design is becoming more accessible. Start experimenting today!
    `
  },
  "react-server-components": {
    title: "React Server Components",
    description: "Understanding the future of React with Server Components.",
    date: "2025-01-05",
    tags: ["React", "Next.js"],
    author: "Lora",
    license: "CC BY-SA 4.0",
    content: `
# React Server Components

Server Components represent a paradigm shift in how we build React applications.

## What Are Server Components?

- Run exclusively on the server
- Reduce bundle size significantly
- Direct backend access
- Zero client-side JavaScript

## Benefits

1. **Performance**: Less JavaScript to download
2. **SEO**: Better for search engines
3. **DX**: Simpler data fetching

## Example

\`\`\`jsx
// Server Component
async function BlogPosts() {
  const posts = await db.posts.findMany();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`
    `
  },
  "hello-world": {
    title: "Hello World",
    description: "Welcome to my new blog!",
    date: "2025-01-01",
    tags: ["General"],
    author: "Lora",
    license: "CC BY-SA 4.0",
    content: `
# Hello World

Welcome to my new blog! Here I'll share my thoughts on:

- Web development
- 3D graphics
- AI and machine learning
- Personal projects

Stay tuned for more content!
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Not Found" };
  
  return {
    title: `${post.title} - Lora`,
    description: post.description,
  };
}

function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="mt-12 mb-6 text-3xl font-bold text-foreground">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-foreground">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-8 mb-3 text-xl font-semibold text-foreground">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="my-4 leading-relaxed text-muted-foreground">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="my-6 list-disc ml-6 space-y-2 text-muted-foreground">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="my-6 list-decimal ml-6 space-y-2 text-muted-foreground">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="leading-relaxed">{children}</li>
        ),
        code: ({ className, children, ...props }) => {
          const match = className?.match(/language-(\w+)/);
          const language = match ? match[1] : '';
          
          const isInline = !className && !props.node?.position?.start.column;
          
          if (isInline) {
            return (
              <code className="px-1.5 py-0.5 bg-muted/50 rounded text-sm font-mono text-foreground" {...props}>
                {children}
              </code>
            );
          }
          
          return (
            <SyntaxHighlighter
              language={language || 'text'}
              style={oneDark as any}
              customStyle={{
                margin: '1.5rem 0',
                padding: '1.25rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                lineHeight: '1.625',
                background: 'rgb(40, 44, 52)',
              }}
              codeTagProps={{ style: { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' } }}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          );
        },
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">
            {children}
          </strong>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
          <p className="text-muted-foreground mb-8">Post not found</p>
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" style={{ overflowX: "hidden" }}>
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <GridPattern
          width={40}
          height={40}
          className="opacity-[0.03] dark:opacity-[0.05]"
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [6, 6],
            [12, 12],
            [15, 15],
            [20, 20],
          ]}
        />
      </div>
      <Navbar />

      <article className="pt-20">
        <nav className="max-w-xl mx-auto px-6 py-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </nav>

        <header className="max-w-xl mx-auto px-6 mb-12">
          <time className="text-sm text-muted-foreground font-mono">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <h1 className="mt-3 mb-4 text-3xl md:text-4xl font-bold leading-tight text-foreground">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </header>

        <div className="max-w-xl mx-auto px-6 pb-24">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <MarkdownContent content={post.content} />
          </div>

          <footer className="mt-16 pt-8 border-t border-border/50">
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground">
                  {tag.toLowerCase()}
                </span>
              ))}
            </div>
            
            {(post.author || post.license) && (
              <div className="text-sm text-muted-foreground space-y-2">
                {post.author && (
                  <p>Written by <span className="font-medium text-foreground">{post.author}</span></p>
                )}
                {post.license && (
                  <p className="text-xs opacity-70">This post is licensed under {post.license}</p>
                )}
              </div>
            )}
          </footer>
        </div>
      </article>
    </div>
  );
}
