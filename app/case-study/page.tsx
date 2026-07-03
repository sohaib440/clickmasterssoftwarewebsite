import type { Metadata } from "next";

import { CaseStudyPageContent } from "@/components/case-study/case-study-page";
import { caseStudyPageMeta } from "@/data/caseStudyPage";

export const metadata: Metadata = {
  title: caseStudyPageMeta.title,
  description: caseStudyPageMeta.description,
  openGraph: {
    title: caseStudyPageMeta.title,
    description: caseStudyPageMeta.description,
    type: "website",
  },
};

export default function CaseStudyRoute() {
  return <CaseStudyPageContent />;
}
