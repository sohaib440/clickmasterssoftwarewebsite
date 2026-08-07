import type { Metadata } from "next";

import { CaseStudyPageContent } from "@/components/case-study/case-study-page";
import { caseStudies, caseStudyPageMeta } from "@/data/caseStudy";
import { selfCanonical, pageTitle, pageTitleString } from "@/seo/canonical";
import { breadcrumbSchema, itemListSchema } from "@/seo/schema";

export const metadata: Metadata = {
  title: pageTitle(caseStudyPageMeta.title),
  description: caseStudyPageMeta.description,
  ...selfCanonical("/case-study"),
  openGraph: {
    title: pageTitleString(caseStudyPageMeta.title),
    description: caseStudyPageMeta.description,
    type: "website",
  },
};

export default function CaseStudyRoute() {
  const schemas = [
    itemListSchema({
      name: caseStudyPageMeta.title,
      description: caseStudyPageMeta.description,
      path: "/case-study",
      items: caseStudies.map((study) => ({
        name: study.cardTitle,
        path: `/case-study/${study.slug}`,
      })),
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-study" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <CaseStudyPageContent />
    </>
  );
}
