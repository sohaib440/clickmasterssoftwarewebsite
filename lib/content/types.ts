/** Shared content types — all category pages read from data using these shapes */

import type { LucideIcon } from "lucide-react";

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

/** Sub-category — route: /{mainSlug}/{subSlug} (e.g. /software-development/custom-software-development) */
export type SubCategoryContent = {
  slug: string;
  label: string;
  description: string;
  /** Optional card/hero image for sub-category page */
  image?: ContentImage;
  /** Optional; defaults to description */
  tagline?: string;
  metaDescription?: string;
  /** Optional extra copy blocks on sub-category page */
  content?: string[];
  /** Optional; falls back to parent main category highlights */
  highlights?: ContentBlock[];
};

/** Section headings — override defaults on the template */
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
 * Main category — one entry = one route at /{slug}
 * Add entries to `mainCategories` in categories.data.ts (no new page files needed).
 */
export type MainCategoryContent = {
  slug: string;
  label: string;
  tagline: string;
  description: string;
  metaDescription: string;
  icon: LucideIcon;
  heroImage: ContentImage;
  subCategories: SubCategoryContent[];
  highlights: ContentBlock[];
  approach: ApproachStep[];
  sections?: MainCategorySections;
};
