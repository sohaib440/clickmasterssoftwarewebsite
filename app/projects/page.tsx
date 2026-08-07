import type { Metadata } from "next";

import {
  ProjectsPageContent,
  projectPageContent,
} from "@/components/project/projects-page";
import { projects } from "@/data/landingPage";
import { projectDetailPath } from "@/data/projects";
import { selfCanonical, pageTitle, pageTitleString } from "@/seo/canonical";
import { breadcrumbSchema, itemListSchema } from "@/seo/schema";

export const metadata: Metadata = {
  title: pageTitle(projectPageContent.metaTitle),
  description: projectPageContent.metaDescription,
  ...selfCanonical("/projects"),
  openGraph: {
    title: pageTitleString(projectPageContent.metaTitle),
    description: projectPageContent.metaDescription,
    type: "website",
  },
};

export default function ProjectsPage() {
  const schemas = [
    itemListSchema({
      name: projectPageContent.metaTitle,
      description: projectPageContent.metaDescription,
      path: "/projects",
      items: projects.map((project) => ({
        name: project.title,
        path: projectDetailPath(project.slug),
      })),
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <ProjectsPageContent />
    </>
  );
}
