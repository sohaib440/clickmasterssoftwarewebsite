import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SolutionDetailPage } from "@/components/solutions/solution-detail-page";
import {
  getAllSolutionSlugs,
  getSolutionBySlug,
  isSolutionSlug,
  solutionPath,
} from "@/lib/content/solutions";
import { selfCanonical, pageTitle, pageTitleString } from "@/seo/canonical";
import { breadcrumbSchema, softwareApplicationSchema } from "@/seo/schema";

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
    title: pageTitle(solution.label),
    description: solution.metaDescription,
    ...selfCanonical(`/solutions/${slug}`),
    openGraph: {
      title: pageTitleString(solution.label),
      description: solution.metaDescription,
      type: "website",
    },
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

  const path = solutionPath(slug);
  const schemas = [
    softwareApplicationSchema({
      name: solution.label,
      description: solution.metaDescription,
      path,
      image: solution.heroImage,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
      { name: solution.label, path },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SolutionDetailPage solution={solution} />
    </>
  );
}
