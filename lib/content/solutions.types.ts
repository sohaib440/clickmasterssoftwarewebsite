import type { LucideIcon } from "lucide-react";

import type { ApproachStep, ContentBlock, ContentImage } from "@/lib/content/types";

export type SolutionCategory =
  | "Enterprise"
  | "Customer"
  | "AI & Automation"
  | "Operations";

/**
 * Product solution one entry = /solutions/{slug}
 * Add rows to `data/solutions.ts` (no new route files needed).
 */
export type SolutionContent = {
  slug: string;
  label: string;
  tagline: string;
  description: string;
  metaDescription: string;
  category: SolutionCategory;
  icon: LucideIcon;
  heroImage: ContentImage;
  /** Short bullets on index cards */
  summary: string[];
  /** Real shipped projects shown on the solution detail page */
  projectSlugs: string[];
  features: ContentBlock[];
  capabilities: string[];
  useCases: ContentBlock[];
  highlights: ContentBlock[];
  approach: ApproachStep[];
};
