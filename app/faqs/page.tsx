import type { Metadata } from "next";

import { FaqPage } from "@/components/pages/faq-page";
import { selfCanonical } from "@/seo/canonical";

export const metadata: Metadata = {
  title: "FAQ | Software Development Company Software",
  description:
    "Answers about how Software Development Company Software works, project timelines, pricing, tech stack, and post-launch support.",
  ...selfCanonical("/faqs"),
};

export default function FaqsRoute() {
  return <FaqPage />;
}
