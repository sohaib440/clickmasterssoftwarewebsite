import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MainCategoryPage } from "@/components/services/main-category-page";
import {
  getAllMainCategorySlugs,
  getMainCategoryBySlug,
  isMainCategorySlug,
  mainCategoryPath,
} from "@/lib/content";
import { siteBrand } from "@/lib/landing/brand";
import { selfCanonical } from "@/seo/canonical";
import {
  breadcrumbSchema,
  faqPageSchema,
  professionalServiceSchema,
  serviceSchema,
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

  const path = mainCategoryPath(slug);
  const description = category.metaDescription;

  if (category.pageTitle) {
    return {
      title: { absolute: category.pageTitle },
      description,
      ...selfCanonical(path),
      openGraph: {
        title: category.pageTitle,
        description,
        type: "website",
        locale: "en_PK",
      },
    };
  }

  return {
    title: category.label,
    description,
    ...selfCanonical(path),
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

  const path = mainCategoryPath(slug);
  const schemas = [
    ...(slug === "software-development" ? [professionalServiceSchema] : []),
    serviceSchema({
      name: category.label,
      description: category.metaDescription,
      path,
      serviceType: category.label,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: category.label, path },
    ]),
    ...(category.faqs?.length
      ? [
          faqPageSchema(category.faqs, {
            id: `${siteBrand.url}${path}#faq`,
            pageUrl: `${siteBrand.url}${path}`,
          }),
        ]
      : []),
  ];

  return (
    <>
      {schemas.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      ) : null}
      <MainCategoryPage category={category} />
    </>
  );
}
