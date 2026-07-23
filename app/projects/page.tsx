import type { Metadata } from "next";

import {
  ProjectsPageContent,
  projectPageContent,
} from "@/components/project/projects-page";

export const metadata: Metadata = {
  title: projectPageContent.metaTitle,
  description: projectPageContent.metaDescription,
  openGraph: {
    title: projectPageContent.metaTitle,
    description: projectPageContent.metaDescription,
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
