import type { Metadata } from "next";

import { IndustriesPageContent } from "@/components/industries/industries-page";
import { industries, industriesPageMeta } from "@/data/industriesPage";
import { selfCanonical, pageTitle, pageTitleString } from "@/seo/canonical";
import { breadcrumbSchema, itemListSchema } from "@/seo/schema";

export const metadata: Metadata = {
  title: pageTitle(industriesPageMeta.title),
  description: industriesPageMeta.description,
  ...selfCanonical("/industries"),
  openGraph: {
    title: pageTitleString(industriesPageMeta.title),
    description: industriesPageMeta.description,
    type: "website",
  },
};

export default function IndustriesRoute() {
  const schemas = [
    itemListSchema({
      name: industriesPageMeta.title,
      description: industriesPageMeta.description,
      path: "/industries",
      items: industries.map((industry) => ({
        name: industry.industry,
        path: `/industries/${industry.slug}`,
      })),
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <IndustriesPageContent />
    </>
  );
}
