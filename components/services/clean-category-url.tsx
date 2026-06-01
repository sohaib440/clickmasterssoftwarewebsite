"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { getMainCategoryBySlug } from "@/lib/content";

/**
 * Removes legacy hash URLs (e.g. /software-development#web-development)
 * and redirects nested paths to /main/sub when appropriate.
 */
export function CleanCategoryUrl({ mainSlug }: { mainSlug: string }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const main = getMainCategoryBySlug(mainSlug);
    const sub = main?.subCategories.find((s) => s.slug === hash);

    if (sub) {
      router.replace(`/${mainSlug}/${hash}`);
      return;
    }

    if (pathname === `/${mainSlug}`) {
      router.replace(`/${mainSlug}`);
    }
  }, [mainSlug, pathname, router]);

  return null;
}
