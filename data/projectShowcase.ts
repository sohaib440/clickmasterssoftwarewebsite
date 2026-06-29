import type { ImageAsset } from "@/data/landingPage";
import { projects } from "@/data/landingPage";

export type ProjectSlide = {
  label: string;
  caption: string;
  image: ImageAsset;
};

export type ShowcaseProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  slides: ProjectSlide[];
};

const slideImages: Record<string, [ImageAsset, ImageAsset, ImageAsset]> = {
  "mediconnect-pro": [
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&h=750&q=80",
      alt: "Telehealth dashboard",
      width: 1200,
      height: 750,
    },
    {
      src: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=1200&h=750&q=80",
      alt: "Doctor video consultation",
      width: 1200,
      height: 750,
    },
    {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&h=750&q=80",
      alt: "Healthcare mobile app",
      width: 1200,
      height: 750,
    },
  ],
  "finedge-erp": [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=750&q=80",
      alt: "Financial analytics dashboard",
      width: 1200,
      height: 750,
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=750&q=80",
      alt: "ERP reporting interface",
      width: 1200,
      height: 750,
    },
    {
      src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&h=750&q=80",
      alt: "Finance team reviewing data",
      width: 1200,
      height: 750,
    },
  ],
  "retailflow-pos": [
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=750&q=80",
      alt: "Retail checkout software",
      width: 1200,
      height: 750,
    },
    {
      src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&h=750&q=80",
      alt: "POS payment terminal",
      width: 1200,
      height: 750,
    },
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=750&q=80",
      alt: "Retail store operations",
      width: 1200,
      height: 750,
    },
  ],
  "eduspark-lms": [
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=750&q=80",
      alt: "Online learning platform",
      width: 1200,
      height: 750,
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&h=750&q=80",
      alt: "Student learning experience",
      width: 1200,
      height: 750,
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=750&q=80",
      alt: "LMS course dashboard",
      width: 1200,
      height: 750,
    },
  ],
};

const slideMeta: Record<string, [string, string, string, string, string, string]> = {
  "mediconnect-pro": [
    "Patient portal",
    "Video consultations",
    "Mobile access",
    "Secure onboarding for patients and providers.",
    "Real-time visits with licensed clinicians.",
    "Care plans and follow-ups on any device.",
  ],
  "finedge-erp": [
    "Finance dashboard",
    "Operations hub",
    "Executive reporting",
    "Unified ledgers, approvals, and audit trails.",
    "Inventory, billing, and HR in one workspace.",
    "Leadership views with live compliance metrics.",
  ],
  "retailflow-pos": [
    "Checkout flow",
    "Inventory sync",
    "Branch analytics",
    "Faster counter experiences across stores.",
    "Stock levels updated in real time.",
    "Performance insights for every location.",
  ],
  "eduspark-lms": [
    "Course hub",
    "Student workspace",
    "Faculty tools",
    "Structured learning paths for every cohort.",
    "Assignments, progress, and collaboration.",
    "Instructors manage content with ease.",
  ],
};

const highlightMap: Record<string, string[]> = {
  "mediconnect-pro": ["60% faster wait times", "12,000+ patients served", "HIPAA-ready workflows"],
  "finedge-erp": ["40% lower overhead", "5 legacy tools replaced", "UAE compliance built in"],
  "retailflow-pos": ["30 retail branches", "85% fewer stock issues", "35% faster checkout"],
  "eduspark-lms": ["8,000+ active students", "45% higher completion", "Multi-campus rollout"],
};

export const showcaseProjects: ShowcaseProject[] = projects.slice(0, 4).map((project) => {
  const images = slideImages[project.slug] ?? [
    project.image,
    project.image,
    project.image,
  ];
  const meta = slideMeta[project.slug] ?? [
    "Overview",
    "Platform",
    "Results",
    project.description,
    project.description,
    project.description,
  ];

  return {
    slug: project.slug,
    title: project.title,
    category: project.category,
    description: project.description,
    highlights: highlightMap[project.slug] ?? [],
    slides: images.map((image, index) => ({
      label: meta[index * 2] ?? `View ${index + 1}`,
      caption: meta[index * 2 + 1] ?? project.description,
      image,
    })),
  };
});
