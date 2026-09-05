import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostPage } from "@/components/pages/blog-post-page";
import {
  blogAuthorPath,
  blogPostPath,
  getAllBlogSlugs,
  getBlogBySlug,
  isBlogSlug,
} from "@/lib/landing/blog";
import { selfCanonical } from "@/seo/canonical";
import { blogPostingSchema, breadcrumbSchema, faqPageSchema } from "@/seo/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return {
    title: { absolute: post.title },
    description: post.excerpt,
    ...selfCanonical(`/blog/${post.slug}`),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: toIsoDate(post.publishedAt),
      modifiedTime: toIsoDate(post.updatedAt),
      authors: [post.author.name],
    },
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

  const path = blogPostPath(post.slug);
  const schemas = [
    blogPostingSchema({
      title: post.title,
      description: post.excerpt,
      path,
      datePublished: toIsoDate(post.publishedAt),
      dateModified: toIsoDate(post.updatedAt),
      image: post.image,
      category: post.category,
      authorName: post.author.name,
      authorUrl: blogAuthorPath(post.author.name),
      authorRole: post.author.role,
      authorBio: post.author.bio,
      authorImage: post.author.image,
      reviewerName: post.reviewedBy.name,
      reviewerRole: post.reviewedBy.role,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path },
    ]),
    ...(post.faqs.length
      ? [
          faqPageSchema(post.faqs, {
            id: `${path}#faqs`,
            pageUrl: path,
          }),
        ]
      : []),
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
