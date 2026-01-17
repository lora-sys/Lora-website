import { allPosts } from 'contentlayer/generated';
import type { PageTree } from 'fumadocs-core/server';

export const source = {
  pageTree: {
    name: 'Blog',
    children: allPosts.map((post) => ({
      type: 'page',
      name: post.title,
      url: `/blog/${post.slug}`,
    })),
  } as PageTree.Root,
};
