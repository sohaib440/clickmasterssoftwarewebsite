import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MainCategoryPage } from "@/components/services/main-category-page";
import {
  softwareDevelopmentFaqs,
  softwareDevelopmentMeta,
} from "@/data/softwareDevelopmentPage";
import {
  getAllMainCategorySlugs,
  getMainCategoryBySlug,
  isMainCategorySlug,
} from "@/lib/content";
import { siteBrand } from "@/lib/landing/brand";
import { selfCanonical } from "@/seo/canonical";
import {
  breadcrumbSchema,
  faqPageSchema,
  professionalServiceSchema,
} from "@/seo/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllMainCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getMainCategoryBySlug(slug);
  if (!category) return { title: "Not found" };

  if (slug === "software-development") {
    return {
      title: { absolute: softwareDevelopmentMeta.title },
      description: softwareDevelopmentMeta.description,
      ...selfCanonical("/software-development"),
      openGraph: {
        title: softwareDevelopmentMeta.title,
        description: softwareDevelopmentMeta.description,
        type: "website",
        locale: "en_PK",
      },
    };
  }

  return {
    title: category.label,
    description: category.metaDescription,
    ...selfCanonical(`/${slug}`),
  };
}

export default async function MainCategoryRoute({ params }: PageProps) {
  const { slug } = await params;

  if (!isMainCategorySlug(slug)) {
    notFound();
  }

  const category = getMainCategoryBySlug(slug);
  if (!category) {
    notFound();
  }

  const schemas =
    slug === "software-development"
      ? [
          professionalServiceSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/software-development" },
            { name: "Software Development", path: "/software-development" },
          ]),
          faqPageSchema(softwareDevelopmentFaqs, {
            id: `${siteBrand.url}/software-development#faq`,
            pageUrl: `${siteBrand.url}/software-development`,
          }),
        ]
      : null;

  return (
    <>
      {schemas ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      ) : null}
      <MainCategoryPage category={category} />
    </>
  );
}
