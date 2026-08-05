import type { Metadata } from "next";

import { FaqPage } from "@/components/pages/faq-page";
import { faqs } from "@/data/landing/faq";
import { siteBrand } from "@/lib/landing/brand";
import { selfCanonical } from "@/seo/canonical";
import { breadcrumbSchema, faqPageSchema } from "@/seo/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about how Next Software Development Company works, project timelines, pricing, tech stack, and post-launch support.",
  ...selfCanonical("/faqs"),
};

export default function FaqsRoute() {
  const schemas = [
    faqPageSchema(faqs, {
      id: `${siteBrand.url}/faqs#faq`,
      pageUrl: `${siteBrand.url}/faqs`,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "FAQ", path: "/faqs" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <FaqPage />
    </>
  );
}
