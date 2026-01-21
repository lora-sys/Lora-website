import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
import { Meteors } from '@/components/ui/meteors';
import { BlogMDXWrapper } from '@/components/blog/mdx-wrapper';

export default async function Page(props: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await props.params;
  const isEn = locale.startsWith('en');
  
  // Try to find the post directly by slug
  let post = allPosts.find((p) => p.slug === slug);

  // If we are in English locale and the slug doesn't end with -en, try to find the -en version
  if (!post && isEn && !slug.endsWith('-en')) {
    post = allPosts.find((p) => p.slug === `${slug}-en`);
  }
  
  // If we are in Chinese locale and the slug ends with -en, try to find the version without -en
  if (!post && !isEn && slug.endsWith('-en')) {
    post = allPosts.find((p) => p.slug === slug.replace(/-en$/, ''));
  }

  if (!post) notFound();

  const backText = isEn ? "Back to Blog" : "返回博客";
  const dateLocale = isEn ? 'en-US' : 'zh-CN';
  const toc = (post.headings ?? []).filter(
    (h: any) => h && typeof h.depth === 'number' && h.depth >= 2 && h.depth <= 3
  );

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Meteors Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Meteors number={40} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {backText}
            </Link>

            <header className="mb-10">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-4 uppercase tracking-widest">
                <CalendarIcon className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(dateLocale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                {post.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed border-l-4 border-primary/50 pl-6 py-2">
                {post.description}
              </p>
            </header>

            <article className="rounded-2xl border bg-background/50 backdrop-blur-sm shadow-2xl shadow-black/[0.06] dark:shadow-black/30">
              <div className="p-6 md:p-10">
                <BlogMDXWrapper code={post.body.code} />
              </div>
            </article>
          </div>

          {toc.length > 0 ? (
            <aside className="hidden xl:block">
              <div className="sticky top-28">
                <div className="rounded-2xl border bg-background/50 backdrop-blur-sm p-5 shadow-lg shadow-black/[0.04] dark:shadow-black/20">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    On this page
                  </p>
                  <nav aria-label="Table of contents" className="mt-4">
                    <ul className="space-y-2 text-sm">
                      {toc.map((h: any) => (
                        <li
                          key={h.url}
                          className={h.depth === 3 ? 'pl-4' : undefined}
                        >
                          <a
                            href={h.url}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return;
  return {
    title: post.title,
    description: post.description,
  };
}
