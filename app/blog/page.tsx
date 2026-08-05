import type { Metadata } from "next";

import { BlogIndexPage } from "@/components/pages/blog-index-page";
import { selfCanonical } from "@/seo/canonical";
import { blogSchema, breadcrumbSchema } from "@/seo/schema";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from the studio on product planning, calm interfaces, and shipping software weekly.",
  ...selfCanonical("/blog"),
};

export default function BlogRoute() {
  const schemas = [
    blogSchema({
      name: "Next Software Development Company Blog",
      description:
        "Notes from the studio on product planning, calm interfaces, and shipping software weekly.",
      path: "/blog",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
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
