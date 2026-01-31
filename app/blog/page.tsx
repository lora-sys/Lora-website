"use client";

import { PostList } from "@/components/blog/post-list";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Meteors } from "@/components/ui/meteors";
import { Navbar } from "@/components/layout/navbar";
import { GridPattern } from "@/components/ui/grid-pattern";
import { useEffect, useState } from "react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: string[];
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const blogPosts: BlogPost[] = [
      {
        slug: "mastering-tailwind-v4",
        title: "Mastering Tailwind v4",
        description: "A comprehensive guide to the new features in Tailwind CSS v4.",
        date: "2025-01-15",
        tags: ["CSS", "Tailwind"],
      },
      {
        slug: "art-of-3d-web-design",
        title: "Art of 3D Web Design",
        description: "Exploring the intersection of web development and 3D graphics.",
        date: "2025-01-10",
        tags: ["3D", "WebGL"],
      },
      {
        slug: "react-server-components",
        title: "React Server Components",
        description: "Understanding the future of React with Server Components.",
        date: "2025-01-05",
        tags: ["React", "Next.js"],
      },
      {
        slug: "hello-world",
        title: "Hello World",
        description: "Welcome to my new blog!",
        date: "2025-01-01",
        tags: ["General"],
      },
    ];
    setPosts(blogPosts);
  }, []);

  return (
    <div className="min-h-screen" style={{ overflowX: "hidden" }}>
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
      
      <div className="pt-20">
        <Meteors number={20} />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16">
            <TypewriterEffect
              words={[{ text: "Blog" }]}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
            />
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, 3D art, and technology.
            </p>
          </div>

          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
}
