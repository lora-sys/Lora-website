'use client';

import dynamic from 'next/dynamic';

const MDXContent = dynamic(() => import('@/components/mdx-content').then(mod => mod.MDXContent), { 
  ssr: false,
  loading: () => <div className="animate-pulse bg-muted h-96 w-full rounded-xl" />
});

export function BlogMDXWrapper({ code }: { code: string }) {
  return <MDXContent code={code} />;
}
