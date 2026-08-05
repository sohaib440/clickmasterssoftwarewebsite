import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/about-page";
import { siteBrand } from "@/lib/landing/brand";
import { selfCanonical } from "@/seo/canonical";
import { aboutPageSchema, breadcrumbSchema } from "@/seo/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    `${siteBrand.name} is a custom software development company in Islamabad, Pakistan senior-led delivery for clients in the USA, UK, UAE, Canada, Australia, and Pakistan.`,
  ...selfCanonical("/about"),
};

export default function AboutRoute() {
  const schemas = [
    aboutPageSchema,
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <AboutPage />
    </>
  );
}
