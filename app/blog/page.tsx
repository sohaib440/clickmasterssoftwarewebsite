import type { Metadata } from "next";

import { BlogIndexPage } from "@/components/pages/blog-index-page";
import { selfCanonical } from "@/seo/canonical";

export const metadata: Metadata = {
  title: "Blog | Software Development Company Software",
  description:
    "Notes from the studio on product planning, calm interfaces, and shipping software weekly.",
  ...selfCanonical("/blog"),
};

export default function BlogRoute() {
  return <BlogIndexPage />;
}
