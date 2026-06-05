import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SubCategoryPage } from "@/components/services/sub-category-page";
import {
  getAllSubCategoryParams,
  getSubCategoryPageData,
  isSubCategoryPath,
} from "@/lib/content";

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
    `${data.sub.label} ${data.main.label}. ${data.sub.description}`;

  return {
    title: `${data.sub.label} | ${data.main.label} | Software Development Company Software`,
    description,
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

  return <SubCategoryPage data={data} />;
}
