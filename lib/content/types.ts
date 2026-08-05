import type { LucideIcon } from "lucide-react";

import type { FaqItem } from "@/data/landing/types";

export type ContentImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ContentBlock = {
  title: string;
  description: string;
};

export type ApproachStep = {
  step: string;
  title: string;
  description: string;
};

/** Sub-category route: /{mainSlug}/{subSlug} (e.g. /software-development/custom-software-development) */
export type SubCategoryContent = {
  slug: string;
  label: string;
  description: string;
  /** Optional card/hero image for sub-category page */
  image?: ContentImage;
  /** Hero supporting copy; defaults to description */
  tagline?: string;
  /** Absolute document title when set */
  pageTitle?: string;
  metaDescription?: string;
  /** Body paragraphs on the sub-category page */
  content?: string[];
  /** Optional; falls back to parent main category highlights */
  highlights?: ContentBlock[];
};

/** Section headings override defaults on the template */
export type MainCategorySections = {
  offerings?: { title: string; subtitle?: string };
  highlights?: { title: string };
  approach?: { title: string };
  related?: { title: string };
  cta?: { title: string; description: string; buttonLabel: string; buttonHref: string };
};

/** Resolved pair for sub-category page template */
export type SubCategoryPageData = {
  main: MainCategoryContent;
  sub: SubCategoryContent;
};

/**
 * Main category one entry = one route at /{slug}
 * Add entries to `mainCategories` in categories.data.ts (no new page files needed).
 */
export type MainCategoryContent = {
  slug: string;
  label: string;
  tagline: string;
  /** Homepage service card CTA, e.g. "Explore software development" */
  exploreCta?: string;
  description: string;
  metaDescription: string;
  /** Absolute document title when it should not use the site title template */
  pageTitle?: string;
  icon: LucideIcon;
  /** Omit when no dedicated asset exists under /public/services */
  heroImage?: ContentImage;
  subCategories: SubCategoryContent[];
  highlights: ContentBlock[];
  approach: ApproachStep[];
  sections?: MainCategorySections;
  /** Optional FAQ items for JSON-LD / page FAQ blocks */
  faqs?: FaqItem[];
};
