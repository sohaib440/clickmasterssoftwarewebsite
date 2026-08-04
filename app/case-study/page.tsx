import type { Metadata } from "next";

import { CaseStudyPageContent } from "@/components/case-study/case-study-page";
import { caseStudyPageMeta } from "@/data/caseStudy";
import { selfCanonical } from "@/seo/canonical";

export const metadata: Metadata = {
  title: caseStudyPageMeta.title,
  description: caseStudyPageMeta.description,
  ...selfCanonical("/case-study"),
  openGraph: {
    title: caseStudyPageMeta.title,
    description: caseStudyPageMeta.description,
    type: "website",
  },
};

export default function CaseStudyRoute() {
  return <CaseStudyPageContent />;
}
