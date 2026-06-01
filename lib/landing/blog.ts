import { blogPosts } from "@/lib/landing/data";

export type { BlogPost } from "@/lib/landing/data";

export function getAllBlogPosts() {
  return blogPosts;
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function isBlogSlug(slug: string): boolean {
  return blogPosts.some((post) => post.slug === slug);
}

export function blogPostPath(slug: string): string {
  return `/blog/${slug}`;
}

export const blogIndexPath = "/blog";
