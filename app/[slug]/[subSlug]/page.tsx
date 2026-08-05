import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SubCategoryPage } from "@/components/services/sub-category-page";
import {
  getAllSubCategoryParams,
  getSubCategoryPageData,
  isSubCategoryPath,
  mainCategoryPath,
  subCategoryPath,
} from "@/lib/content";
import { selfCanonical } from "@/seo/canonical";
import { breadcrumbSchema, serviceSchema } from "@/seo/schema";

type PageProps = {
  params: Promise<{ slug: string; subSlug: string }>;
};

export function generateStaticParams() {
  return getAllSubCategoryParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, subSlug } = await params;
  const data = getSubCategoryPageData(slug, subSlug);
  if (!data) return { title: "Not found" };

  const description =
    data.sub.metaDescription ??
    `${data.sub.label} from a leading software development company. ${data.sub.description}`;

  if (data.sub.pageTitle) {
    return {
      title: { absolute: data.sub.pageTitle },
      description,
      ...selfCanonical(`/${slug}/${subSlug}`),
    };
  }

  return {
    title: `${data.sub.label} | ${data.main.label} | Next Software Development Company`,
    description,
    ...selfCanonical(`/${slug}/${subSlug}`),
  };
}

export default async function SubCategoryRoute({ params }: PageProps) {
  const { slug, subSlug } = await params;

  if (!isSubCategoryPath(slug, subSlug)) {
    notFound();
  }

  const data = getSubCategoryPageData(slug, subSlug);
  if (!data) {
    notFound();
  }

  const mainPath = mainCategoryPath(slug);
  const path = subCategoryPath(slug, subSlug);
  const description =
    data.sub.metaDescription ??
    `${data.sub.label} from a leading software development company. ${data.sub.description}`;

  const schemas = [
    serviceSchema({
      name: data.sub.label,
      description,
      path,
      serviceType: data.sub.label,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: data.main.label, path: mainPath },
      { name: data.sub.label, path },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SubCategoryPage data={data} />
    </>
  );
}
