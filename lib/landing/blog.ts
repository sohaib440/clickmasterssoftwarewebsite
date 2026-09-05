import { blogPosts } from "@/data/blog";
import { teamPath } from "@/lib/landing/constants";

export type { BlogPost } from "@/data/blog";

export function getAllBlogPosts() {
  return blogPosts;
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

/** Old middleware used to strip trailing years from blog slugs; keep those URLs working. */
const blogSlugAliases: Record<string, string> = {
  "best-ai-tools-for-business-in": "best-ai-tools-for-business-in-2026",
};

export function resolveBlogSlug(slug: string): string {
  return blogSlugAliases[slug] ?? slug;
}

export function getBlogBySlug(slug: string) {
  const resolved = resolveBlogSlug(slug);
  return blogPosts.find((post) => post.slug === resolved);
}

export function isBlogSlug(slug: string): boolean {
  const resolved = resolveBlogSlug(slug);
  return blogPosts.some((post) => post.slug === resolved);
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
