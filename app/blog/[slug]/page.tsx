import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostPage } from "@/components/pages/blog-post-page";
import { getAllBlogSlugs, getBlogBySlug, isBlogSlug } from "@/lib/landing/blog";
import { selfCanonical } from "@/seo/canonical";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Not found" };

  return {
    title: `${post.title} | Software Development Company Software Blog`,
    description: post.excerpt,
    ...selfCanonical(`/blog/${slug}`),
  };
}

export default async function BlogPostRoute({ params }: PageProps) {
  const { slug } = await params;

  if (!isBlogSlug(slug)) {
    notFound();
  }

  const post = getBlogBySlug(slug);
  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
