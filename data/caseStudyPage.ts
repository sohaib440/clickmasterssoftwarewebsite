import type { ImageAsset } from "@/data/landingPage";
import { projects } from "@/data/landingPage";
import { contactPath } from "@/lib/landing/constants";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  outcomes: string[];
  image: ImageAsset;
};

const caseStudyDetails: Record<
  string,
  { problem: string; solution: string; outcomes: string[] }
> = {
  "prime-lead-crm": {
    problem:
      "Sales teams were losing leads across spreadsheets, chat apps, and unclear staff ownership.",
    solution:
      "We built Prime Lead CRM with a leads panel, staff roles, chat, training, and a live dashboard in one workflow.",
    outcomes: [
      "Unified lead pipeline",
      "Clear staff ownership",
      "Chat and training in one CRM",
    ],
  },
};

export const caseStudies: CaseStudy[] = projects.map((project) => {
  const detail = caseStudyDetails[project.slug];
  return {
    slug: project.slug,
    title: project.title,
    category: project.category,
    problem: detail?.problem ?? project.description,
    solution: detail?.solution ?? project.description,
    outcomes: detail?.outcomes ?? [],
    image: project.image,
  };
});

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
