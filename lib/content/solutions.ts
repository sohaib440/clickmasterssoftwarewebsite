import { solutions } from "@/lib/content/solutions.data";
import type { SolutionCategory, SolutionContent } from "@/lib/content/solutions.types";

const slugIndex = new Map(solutions.map((s) => [s.slug, s]));

export function getAllSolutions(): SolutionContent[] {
  return solutions;
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((s) => s.slug);
}

export function getSolutionBySlug(slug: string): SolutionContent | undefined {
  return slugIndex.get(slug);
}

export function isSolutionSlug(slug: string): boolean {
  return slugIndex.has(slug);
}

export function solutionPath(slug: string): string {
  return `/solutions/${slug}`;
}

export const solutionsIndexPath = "/solutions";

export function getSolutionCategories(): SolutionCategory[] {
  const categories = new Set<SolutionCategory>();
  for (const solution of solutions) {
    categories.add(solution.category);
  }
  return Array.from(categories);
}

export function getSolutionsByCategory(category: SolutionCategory): SolutionContent[] {
  return solutions.filter((s) => s.category === category);
}

export type { SolutionCategory, SolutionContent } from "@/lib/content/solutions.types";
