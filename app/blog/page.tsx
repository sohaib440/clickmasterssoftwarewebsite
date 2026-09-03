import type { Metadata } from "next";

import { BlogIndexPage } from "@/components/pages/blog-index-page";
import { getAllBlogPosts, blogIndexPath, blogPostPath } from "@/lib/landing/blog";
import { selfCanonical } from "@/seo/canonical";
import { blogSchema, breadcrumbSchema, itemListSchema } from "@/seo/schema";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from the studio on product planning, calm interfaces, and shipping software weekly.",
  ...selfCanonical("/blog"),
};

export default function BlogRoute() {
  const posts = getAllBlogPosts();
  const schemas = [
    blogSchema({
      name: "Next Software Development Company Blog",
      description:
        "Notes from the studio on product planning, calm interfaces, and shipping software weekly.",
      path: blogIndexPath,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: blogIndexPath },
    ]),
    itemListSchema({
      name: "Next Software Development Company Blog Articles",
      description: "Articles on product planning, design, and software delivery.",
      path: blogIndexPath,
      items: posts.map((post) => ({
        name: post.title,
        path: blogPostPath(post.slug),
      })),
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <BlogIndexPage />
    </>
  );
}
