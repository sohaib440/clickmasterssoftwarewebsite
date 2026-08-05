import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostPage } from "@/components/pages/blog-post-page";
import {
  blogPostPath,
  getAllBlogSlugs,
  getBlogBySlug,
  isBlogSlug,
} from "@/lib/landing/blog";
import { selfCanonical } from "@/seo/canonical";
import { blogPostingSchema, breadcrumbSchema } from "@/seo/schema";

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
    title: post.title,
    description: post.excerpt,
    ...selfCanonical(`/blog/${slug}`),
  };
}

function toIsoDate(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? date : parsed.toISOString().slice(0, 10);
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

  const path = blogPostPath(slug);
  const schemas = [
    blogPostingSchema({
      title: post.title,
      description: post.excerpt,
      path,
      datePublished: toIsoDate(post.date),
      image: post.image,
      category: post.category,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <BlogPostPage post={post} />
    </>
  );
}
