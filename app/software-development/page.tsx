import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MainCategoryPage } from "@/components/services/main-category-page";
import { getMainCategoryBySlug } from "@/lib/content";
import { softwareDevelopmentFaqs, softwareDevelopmentMeta } from "@/data/softwareDevelopmentPage";
import {
  breadcrumbSchema,
  faqPageSchema,
  professionalServiceSchema,
} from "@/seo/schema";

export const metadata: Metadata = {
  title: {
    absolute: softwareDevelopmentMeta.title,
  },
  description: softwareDevelopmentMeta.description,
  openGraph: {
    title: softwareDevelopmentMeta.title,
    description: softwareDevelopmentMeta.description,
    type: "website",
    locale: "en_PK",
  },
};

export default function SoftwareDevelopmentRoute() {
  const category = getMainCategoryBySlug("software-development");
  if (!category) notFound();

  const schemas = [
    professionalServiceSchema,
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/software-development" },
      { name: "Software Development", path: "/software-development" },
    ]),
    faqPageSchema(softwareDevelopmentFaqs, {
      id: "https://nextsoftwaredevelopment.com/software-development#faq",
      pageUrl: "https://nextsoftwaredevelopment.com/software-development",
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <MainCategoryPage category={category} />
    </>
  );
}
