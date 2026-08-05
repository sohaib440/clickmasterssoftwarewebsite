import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyDetailPage } from "@/components/case-study/case-study-detail-page";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/data/projects";
import { selfCanonical } from "@/seo/canonical";
import { breadcrumbSchema, projectSchema } from "@/seo/schema";

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

  const title = `${project.title} Case Study`;
  const description = `Case study: challenge, approach, and outcomes for ${project.title}. ${project.metaDescription}`;

  return {
    title,
    description,
    ...selfCanonical(`/case-study/${slug}`),
    openGraph: {
      title,
      description,
      type: "article",
      locale: "en_PK",
      images: project.image
        ? [
            {
              url: project.image.src,
              width: project.image.width,
              height: project.image.height,
              alt: project.image.alt,
            },
          ]
        : undefined,
    },
  };
}

export default async function CaseStudyDetailRoute({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const path = `/case-study/${slug}`;
  const caseDescription = `Case study: challenge, approach, and outcomes for ${project.title}. ${project.metaDescription}`;
  const schemas = [
    projectSchema({
      name: `${project.title} Case Study`,
      description: caseDescription,
      path,
      category: project.category,
      image: project.image,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-study" },
      { name: `${project.title} Case Study`, path },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <CaseStudyDetailPage project={project} breadcrumbRoot="case-study" />
    </>
  );
}
