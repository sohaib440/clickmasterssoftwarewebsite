import type { Metadata } from "next";

import { ProjectsPageContent } from "@/components/project/projects-page";

export const metadata: Metadata = {
  title: "Our Work & Software Projects",
  description:
    "Explore custom software, SaaS, ERP, CRM, and mobile apps we've designed and shipped for clients in the USA, UK, UAE, Canada, Australia, and Pakistan.",
  openGraph: {
    title: "Our Work & Software Projects",
    description:
      "Explore custom software, SaaS, ERP, CRM, and mobile apps we've designed and shipped for clients in the USA, UK, UAE, Canada, Australia, and Pakistan.",
    type: "website",
  },
};

export default function ProjectPage() {
  return <ProjectsPageContent />;
}
