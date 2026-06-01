import { mainCategories } from "@/lib/content/categories.data";
import type {
  MainCategoryContent,
  SubCategoryContent,
  SubCategoryPageData,
} from "@/lib/content/types";

const slugIndex = new Map(mainCategories.map((c) => [c.slug, c]));

/** All main category slugs — used by generateStaticParams */
export function getAllMainCategorySlugs(): string[] {
  return mainCategories.map((c) => c.slug);
}

export function getMainCategoryBySlug(slug: string): MainCategoryContent | undefined {
  return slugIndex.get(slug);
}

export function isMainCategorySlug(slug: string): boolean {
  return slugIndex.has(slug);
}

export function getAllMainCategories(): MainCategoryContent[] {
  return mainCategories;
}

export function getSubCategory(
  mainSlug: string,
  subSlug: string
): SubCategoryContent | undefined {
  const main = getMainCategoryBySlug(mainSlug);
  return main?.subCategories.find((s) => s.slug === subSlug);
}

export function getSubCategoryPageData(
  mainSlug: string,
  subSlug: string
): SubCategoryPageData | undefined {
  const main = getMainCategoryBySlug(mainSlug);
  const sub = main?.subCategories.find((s) => s.slug === subSlug);
  if (!main || !sub) return undefined;
  return { main, sub };
}

export function isSubCategoryPath(mainSlug: string, subSlug: string): boolean {
  return Boolean(getSubCategoryPageData(mainSlug, subSlug));
}

/** All /{main}/{sub} pairs for generateStaticParams */
export function getAllSubCategoryParams(): { slug: string; subSlug: string }[] {
  return mainCategories.flatMap((main) =>
    main.subCategories.map((sub) => ({ slug: main.slug, subSlug: sub.slug }))
  );
}

/** Path helpers */
export function mainCategoryPath(slug: string): string {
  return `/${slug}`;
}

export function subCategoryPath(mainSlug: string, subSlug: string): string {
  return `/${mainSlug}/${subSlug}`;
}

/** Header services dropdown — derived from content (do not duplicate in nav by hand) */
export function getServiceNavCategories() {
  return mainCategories.map((category) => ({
    label: category.label,
    slug: category.slug,
    href: mainCategoryPath(category.slug),
    description: category.tagline,
    items: category.subCategories.map((sub) => ({
      label: sub.label,
      slug: sub.slug,
      href: subCategoryPath(category.slug, sub.slug),
    })),
  }));
}

export type {
  ContentImage,
  MainCategoryContent,
  SubCategoryContent,
  SubCategoryPageData,
} from "@/lib/content/types";
