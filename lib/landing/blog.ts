import { blogPosts } from "@/data/blog";
import { teamPath } from "@/lib/landing/constants";

export type { BlogPost } from "@/data/blog";

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

export function blogAuthorSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Canonical profile URL for a blog author (team page anchor). */
export function blogAuthorPath(name: string): string {
  return `${teamPath}#${blogAuthorSlug(name)}`;
}

export const blogIndexPath = "/blog";
