import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyDetailPage } from "@/components/case-study/case-study-detail-page";
import {
  getAllCaseStudySlugs,
  getCaseStudyDetailBySlug,
} from "@/data/caseStudy";
import { getProjectBySlug } from "@/data/projects";
import { selfCanonical, pageTitle, pageTitleString } from "@/seo/canonical";
import { breadcrumbSchema, projectSchema } from "@/seo/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const study = project ? getCaseStudyDetailBySlug(slug, project) : undefined;

  if (!study) {
    return { title: "Case study not found" };
  }

  return {
    title: pageTitle(study.metaTitle),
    description: study.metaDescription,
    ...selfCanonical(`/case-study/${slug}`),
    openGraph: {
      title: pageTitleString(study.metaTitle),
      description: study.metaDescription,
      type: "article",
      locale: "en_PK",
      images: study.image
        ? [
            {
              url: study.image.src,
              width: study.image.width,
              height: study.image.height,
              alt: study.image.alt,
            },
          ]
        : undefined,
    },
  };
}

export default async function CaseStudyDetailRoute({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const study = project ? getCaseStudyDetailBySlug(slug, project) : undefined;

  if (!study) {
    notFound();
  }

  const path = `/case-study/${slug}`;
  const schemas = [
    projectSchema({
      name: study.metaTitle,
      description: study.metaDescription,
      path,
      category: study.industry,
      image: study.image,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-study" },
      { name: study.headline, path },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <CaseStudyDetailPage study={study} />
    </>
  );
}
