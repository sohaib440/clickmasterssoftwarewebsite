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
  "mediconnect-pro": {
    problem:
      "Clinics struggled with long patient wait times and limited reach beyond physical locations.",
    solution:
      "We built a telehealth platform with video consultations, patient onboarding, and provider scheduling in one workflow.",
    outcomes: ["60% faster wait times", "12,000+ patients served", "HIPAA-ready workflows"],
  },
  "finedge-erp": {
    problem:
      "A mid-size financial firm ran five disconnected legacy tools, creating overhead and compliance risk.",
    solution:
      "We delivered a unified ERP covering finance, operations, and reporting with UAE regulatory requirements built in.",
    outcomes: ["40% lower overhead", "5 legacy tools replaced", "UAE compliance built in"],
  },
  "retailflow-pos": {
    problem:
      "A retail chain faced stock discrepancies and slow checkout across 30 branches.",
    solution:
      "We shipped a cloud POS with real-time inventory sync and branch-level analytics.",
    outcomes: ["30 retail branches live", "85% fewer stock issues", "35% faster checkout"],
  },
  "eduspark-lms": {
    problem:
      "A private university needed a modern LMS to improve course completion and student engagement.",
    solution:
      "We built an e-learning platform with structured paths, assignments, and faculty tooling.",
    outcomes: ["8,000+ active students", "45% higher completion", "Multi-campus rollout"],
  },
  "cargotrack": {
    problem:
      "Logistics clients flooded support with shipment status calls due to limited visibility.",
    solution:
      "We created a real-time tracking platform with live GPS visibility for every delivery.",
    outcomes: ["600+ daily deliveries", "70% fewer support queries", "Live GPS tracking"],
  },
  "propertyhub": {
    problem:
      "A real estate business needed better lead capture and property discovery for agents and buyers.",
    solution:
      "We launched a listing and CRM platform with AI-powered search recommendations.",
    outcomes: ["120% time-on-site increase", "2× lead generation", "Agent CRM in one place"],
  },
  "insightai": {
    problem:
      "Legal teams spent excessive time manually reviewing and classifying large contract volumes.",
    solution:
      "We built a document intelligence platform for extraction, classification, and summarization.",
    outcomes: ["75% less manual review", "50,000+ documents processed", "Higher audit accuracy"],
  },
  "payflow-saas": {
    problem:
      "B2B SaaS merchants needed reliable recurring billing with fewer failed transactions.",
    solution:
      "We developed a subscription billing platform with automated invoicing and payment retries.",
    outcomes: ["200+ merchants onboarded", "28% fewer failed payments", "Automated recurring billing"],
  },
};

export const caseStudies: CaseStudy[] = projects.slice(0, 8).map((project) => {
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
    "In-depth looks at how we approach discovery, architecture, and delivery for healthcare, fintech, retail, logistics, and SaaS clients worldwide.",
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
