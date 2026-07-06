import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MainCategoryPage } from "@/components/services/main-category-page";
import { SoftwareDevelopmentJsonLd } from "@/components/seo/software-development-json-ld";
import { getMainCategoryBySlug } from "@/lib/content";
import { softwareDevelopmentMeta } from "@/data/softwareDevelopmentPage";

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

  return (
    <>
      <SoftwareDevelopmentJsonLd />
      <MainCategoryPage category={category} />
    </>
  );
}
