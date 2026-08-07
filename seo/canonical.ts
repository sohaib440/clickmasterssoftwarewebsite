import type { Metadata } from "next";

import { siteBrand } from "@/lib/landing/brand";

/**
 * Self-referencing canonical for a page path.
 * Works with `metadataBase` in the root layout to produce absolute URLs.
 */
export function selfCanonical(path: string): Pick<Metadata, "alternates"> {
  const canonical =
    path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;

  return {
    alternates: { canonical },
  };
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Document title that never double-stacks the brand.
 * Returns `absolute` so the root layout template (`%s | Brand`) is not applied again.
 * Multi-clause titles (`A | B`) keep only the primary clause to stay SERP-friendly.
 */
export function pageTitle(segment: string): NonNullable<Metadata["title"]> {
  const brand = siteBrand.name;
  let clean = segment.trim();

  clean = clean
    .replace(new RegExp(`\\s*[|–—-]\\s*${escapeRegExp(brand)}\\s*$`, "i"), "")
    .trim();

  if (!clean || clean.toLowerCase() === brand.toLowerCase()) {
    return { absolute: brand };
  }

  if (/[|–—]/.test(clean)) {
    clean = clean.split(/\s*[|–—]\s*/)[0]?.trim() || clean;
  }

  return { absolute: `${clean} | ${brand}` };
}

/** Resolved absolute title string (for Open Graph / Twitter). */
export function pageTitleString(segment: string): string {
  const title = pageTitle(segment);
  if (typeof title === "object" && title && "absolute" in title && title.absolute) {
    return String(title.absolute);
  }
  return `${segment} | ${siteBrand.name}`;
}
