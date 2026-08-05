import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyDetailPage } from "@/components/case-study/case-study-detail-page";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/data/projects";
import { selfCanonical } from "@/seo/canonical";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Case study not found" };
  }

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    ...selfCanonical(`/case-study/${slug}`),
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailRoute({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyDetailPage project={project} breadcrumbRoot="case-study" />;
}
