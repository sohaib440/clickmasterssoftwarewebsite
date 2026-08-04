import type { CaseStudy } from "@/data/caseStudy";
import { projectCaseStudyMeta } from "@/data/projectCaseStudyMeta";
import { getProjectBySlug, projectDetails } from "@/data/projects";
import { undashList, undashText } from "@/lib/case-study-text";

function techTags(slug: string): string[] {
  const meta = projectCaseStudyMeta[slug];
  if (!meta) return [];

  const tags = [
    ...meta.technologyStack.frontend.slice(0, 2),
    meta.technologyStack.backend[0],
    meta.technologyStack.database[0],
  ].filter(Boolean);

  return undashList(tags).filter((tech, index, arr) => arr.indexOf(tech) === index).slice(0, 4);
}

function toCaseStudy(project: (typeof projectDetails)[number]): CaseStudy {
  const meta = projectCaseStudyMeta[project.slug];
  const solution = undashText(
    meta?.solutionApproach ?? project.solutions[0] ?? project.description,
  );

  return {
    slug: project.slug,
    title: undashText(project.title),
    cardTitle: undashText(meta?.cardTitle ?? project.title),
    clientName: undashText(meta?.clientName ?? project.title),
    category: undashText(meta?.industry ?? project.category),
    status: "Completed",
    problem: undashText(project.problem),
    solution,
    summary: solution,
    technologies: techTags(project.slug),
    outcomes: undashList(project.highlights),
    image: project.image,
  };
}

/** Sync listing cards with full project case study content. */
export function buildCaseStudiesFromProjects(): CaseStudy[] {
  return projectDetails.map(toCaseStudy);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  const project = getProjectBySlug(slug);
  if (!project) return undefined;
  return toCaseStudy(project);
}
