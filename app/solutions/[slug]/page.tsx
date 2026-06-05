import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SolutionDetailPage } from "@/components/solutions/solution-detail-page";
import {
  getAllSolutionSlugs,
  getSolutionBySlug,
  isSolutionSlug,
} from "@/lib/content/solutions";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: "Not found" };

  return {
    title: `${solution.label} | Software Development Company Software Solutions`,
    description: solution.metaDescription,
  };
}

export default async function SolutionRoute({ params }: PageProps) {
  const { slug } = await params;

  if (!isSolutionSlug(slug)) {
    notFound();
  }

  const solution = getSolutionBySlug(slug);
  if (!solution) {
    notFound();
  }

  return <SolutionDetailPage solution={solution} />;
}
