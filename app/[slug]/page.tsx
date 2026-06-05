import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MainCategoryPage } from "@/components/services/main-category-page";
import {
  getAllMainCategorySlugs,
  getMainCategoryBySlug,
  isMainCategorySlug,
} from "@/lib/content";

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

  return {
    title: `${category.label} | Software Development Company`,
    description: category.metaDescription,
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

  return <MainCategoryPage category={category} />;
}
