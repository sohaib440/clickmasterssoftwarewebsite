"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { aboutPath, industriesPath, projectPath } from "@/lib/landing/constants";

const legacyHashRoutes: Record<string, string> = {
  "#projects": projectPath,
  "#about": aboutPath,
  "#industries": industriesPath,
};

/** Legacy homepage anchors — send visitors to dedicated pages. */
export function LegacyHashRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const target = legacyHashRoutes[window.location.hash];
    if (target) router.replace(target);
  }, [pathname, router]);

  return null;
}
