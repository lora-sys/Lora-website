import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, Clock, User, Tag, Twitter, Linkedin, Github } from 'lucide-react';
import { BlogMDXWrapper } from '@/components/blog/mdx-wrapper';
import { cn } from '@/lib/utils';
import { ArticleCard, SidebarCard, RelatedPostCard } from '@/components/blog/blog-animations';
import { CopyLinkButton } from '@/components/blog/copy-link-button';

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function ShareButton({ url, title, platform }: { url: string; title: string; platform: 'twitter' | 'linkedin' }) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const icons = {
    twitter: Twitter,
    linkedin: Linkedin,
  };

  const Icon = icons[platform];

  return (
    <a
      href={shareUrls[platform]}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

export default async function Page(props: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await props.params;
  const isEn = locale.startsWith('en');

  let post = allPosts.find((p) => p.slug === slug);

  if (!post && isEn && !slug.endsWith('-en')) {
    post = allPosts.find((p) => p.slug === `${slug}-en`);
  }

  if (!post && !isEn && slug.endsWith('-en')) {
    post = allPosts.find((p) => p.slug === slug.replace(/-en$/, ''));
  }

  if (!post) notFound();

  const backText = isEn ? "Back to Blog" : "返回博客";
  const dateLocale = isEn ? 'en-US' : 'zh-CN';
  const readingTime = calculateReadingTime(post.body.raw);
  
  interface Heading {
    depth: number;
    text: string;
    url?: string;
  }
  
  const toc = (post.headings ?? []).filter(
    (h: Heading) => h && typeof h.depth === 'number' && h.depth >= 2 && h.depth <= 3
  );

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lora4.dpdns.org'}/${locale}/blog/${slug}/`;

  return (
    <div className="relative w-full min-h-screen bg-background">
      <div className="relative z-10">
        <header className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group mb-8"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              {backText}
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(dateLocale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <span className="text-border">·</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min read</span>
              </div>
              {post.author && (
                <>
                  <span className="text-border">·</span>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              {post.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
              {post.description}
            </p>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-3 pt-8 border-t border-border/50">
              <span className="text-sm text-muted-foreground">Share:</span>
              <ShareButton url={shareUrl} title={post.title} platform="twitter" />
              <ShareButton url={shareUrl} title={post.title} platform="linkedin" />
              <CopyLinkButton url={shareUrl} />
            </div>
          </div>
        </header>

        <main className="px-4 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
              <ArticleCard className="prose prose-lg dark:prose-invert max-w-none">
                <BlogMDXWrapper code={post.body.code} />
              </ArticleCard>

              <aside className="hidden lg:block">
                <div className="sticky top-28 space-y-6">
                  {toc.length > 0 && (
                    <SidebarCard className="rounded-2xl border bg-background/80 p-6">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                        Table of Contents
                      </h3>
                      <nav aria-label="Table of contents" className="space-y-2">
                        {toc.map((h: Heading, index: number) => (
                          <a
                            key={h.url || index}
                            href={h.url}
                            className={cn(
                              "block text-sm rounded-lg px-3 py-2",
                              "hover:bg-primary/5 hover:text-primary",
                              h.depth === 3 ? 'text-muted-foreground ml-3' : 'font-medium'
                            )}
                          >
                            {h.text}
                          </a>
                        ))}
                      </nav>
                    </SidebarCard>
                  )}

                  <SidebarCard className="rounded-2xl border bg-primary/5 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{post.author || 'Lora'}</p>
                        <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Building cool stuff with code. Sharing what I learn along the way.
                    </p>
                    <div className="flex gap-2 mt-4">
                      <a href="https://github.com/lora-sys" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-background hover:bg-primary/10 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href="https://twitter.com/lora1979391" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-background hover:bg-primary/10 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </SidebarCard>
                </div>
              </aside>
            </div>
          </div>
        </main>

        <RelatedPosts currentSlug={slug} locale={locale} />
      </div>
    </div>
  );
}

function RelatedPosts({ currentSlug, locale }: { currentSlug: string; locale: string }) {
  const otherPosts = allPosts.filter(p => p.slug !== currentSlug).slice(0, 2);
  
  if (otherPosts.length === 0) return null;

  return (
    <section className="border-t bg-muted/30 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">More Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherPosts.map((post) => (
            <RelatedPostCard key={post.slug}>
              <Link
                href={`/${locale}/blog/${post.slug}/`}
                className="group block p-6 rounded-2xl bg-background border hover:border-primary/50 transition-all"
              >
                <time className="text-xs text-muted-foreground mb-2 block">
                  {new Date(post.date).toLocaleDateString(locale.startsWith('en') ? 'en-US' : 'zh-CN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
              </Link>
            </RelatedPostCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const locales = ['en', 'zh'];
  const params = [];

  for (const post of allPosts) {
    for (const locale of locales) {
      params.push({
        slug: post.slug,
        locale: locale,
      });
    }
  }

  return params;
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
