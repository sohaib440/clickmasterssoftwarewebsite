import type { Metadata } from "next";

import { ProjectsPageContent } from "@/components/project/projects-page";
import { projectPageMeta } from "@/data/projectPage";

export const metadata: Metadata = {
  title: projectPageMeta.title,
  description: projectPageMeta.description,
  openGraph: {
    title: projectPageMeta.title,
    description: projectPageMeta.description,
    type: "website",
  },
};

export default function ProjectPage() {
  return <ProjectsPageContent />;
}
