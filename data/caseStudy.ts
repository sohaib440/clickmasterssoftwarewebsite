import type { ImageAsset } from "@/data/landingPage";
import { contactPath } from "@/lib/landing/constants";
import { buildCaseStudiesFromProjects } from "@/data/caseStudyFromProjects";

export type CaseStudy = {
  slug: string;
  title: string;
  cardTitle: string;
  clientName: string;
  category: string;
  status: string;
  problem: string;
  solution: string;
  summary: string;
  technologies: string[];
  outcomes: string[];
  image: ImageAsset;
};

export const caseStudies: CaseStudy[] = buildCaseStudiesFromProjects();

export const caseStudyPageMeta = {
  title: "Case Studies",
  description:
    "In-depth looks at how we approach discovery, architecture, and delivery for CRM, SaaS, and custom software clients worldwide.",
  hero: {
    eyebrow: "Case Studies",
    title: "How we solve real product problems",
    description:
      "Each engagement below covers the business challenge, what we built, and measurable outcomes so you can see how we think before we write a line of code.",
  },
  bookCall: {
    title: "Want the full story behind one of our builds?",
    description:
      "Book a call and we'll walk you through the architecture, challenges, and outcomes of a project similar to yours.",
    cta: "Book a call",
    href: contactPath,
  },
  closing: {
    title: "Planning something similar?",
    description:
      "Tell us about your product goals. We'll share relevant experience and respond within one business day.",
    cta: "Get a free quote",
    href: contactPath,
  },
} as const;
