import type { FaqItem, ImageAsset } from "@/data/landingPage";
import { projects } from "@/data/landingPage";
import { projectPath } from "@/lib/landing/constants";

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

export type ProjectProcedureStep = {
  step: number;
  title: string;
  description: string;
};

export type ProjectClientFeedback = {
  quote: string;
  author: string;
  role: string;
};

export type ProjectVideo = {
  title: string;
  youtubeId: string;
  poster?: ImageAsset;
};

export type ProjectWhyNeed = {
  title: string;
  paragraphs: string[];
  reasons: string[];
};

export type ProjectDetail = ShowcaseProject & {
  metaTitle: string;
  metaDescription: string;
  image: ImageAsset;
  overview: string[];
  problem: string;
  solutions: string[];
  whyNeedProduct: ProjectWhyNeed;
  procedure: ProjectProcedureStep[];
  clientFeedback: ProjectClientFeedback[];
  modulePictures: ProjectSlide[];
  video: ProjectVideo;
  outcome: string[];
  faqs: FaqItem[];
};

function img(src: string, alt: string, width = 1200, height = 750): ImageAsset {
  return { src, alt, width, height };
}

function faq(
  question: string,
  answer: string,
  tag: string,
  column: "left" | "right",
): FaqItem {
  return { question, answer, tag, column };
}

const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

function base(slug: string) {
  const project = bySlug[slug];
  if (!project) {
    throw new Error(`Missing landing project for slug: ${slug}`);
  }
  return project;
}

const primeLeadSlides: ProjectSlide[] = [
  {
    label: "Dashboard",
    caption: "Live snapshot of leads, staff activity, and pipeline health.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Dashboard.jpeg",
      "Prime Lead CRM dashboard",
      1536,
      1024,
    ),
  },
  {
    label: "Leads panel",
    caption: "Capture, qualify, and assign leads in one workflow.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Leads-Panel.jpeg",
      "Prime Lead CRM leads panel",
      1600,
      889,
    ),
  },
  {
    label: "Chat module",
    caption: "Keep sales conversations tied to each lead record.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Chat-Module.jpeg",
      "Prime Lead CRM chat module",
      1536,
      1024,
    ),
  },
  {
    label: "Staff management",
    caption: "Roles, assignments, and performance visibility for your team.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Staff-Management.jpeg",
      "Prime Lead CRM staff management",
      1528,
      1029,
    ),
  },
  {
    label: "Training panel",
    caption: "Onboard agents with structured training content and progress tracking.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Training-Pannel.jpeg",
      "Prime Lead CRM training panel",
      1600,
      874,
    ),
  },
  {
    label: "Secure login",
    caption: "Role-based access so teams only see what they need.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Login.jpeg",
      "Prime Lead CRM login screen",
      1536,
      1024,
    ),
  },
];

export const projectDetails: ProjectDetail[] = [
  {
    ...(() => {
      const p = base("prime-lead-crm");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "Prime Lead CRM Case Study",
    metaDescription:
      "See how we built Prime Lead CRM a sales CRM with lead management, staff roles, chat, and training so teams capture and convert leads in one system.",
    highlights: [
      "Unified lead pipeline",
      "Staff roles & assignments",
      "Built-in chat & training",
    ],
    slides: primeLeadSlides,
    overview: [
      "Prime Lead CRM is a sales-focused CRM designed for teams that need to capture leads, assign ownership, coach staff, and close conversations without switching between spreadsheets, inboxes, and chat apps.",
      "We built a clear workflow from login to dashboard, leads panel, staff management, chat, and training so managers stay in control and agents stay productive.",
      "The product gives leadership visibility into pipeline health while giving frontline staff a focused workspace for follow-ups and conversion.",
    ],
    problem:
      "Sales teams were losing leads across disconnected tools. Spreadsheets went stale, chat history lived outside the CRM, staff assignments were unclear, and new agents lacked a structured way to learn the playbook.",
    solutions: [
      "Built a central leads panel to capture, qualify, and assign every inquiry.",
      "Added staff management with clear roles and ownership so follow-ups never fall through.",
      "Connected a chat module to each lead so conversations stay on the record.",
      "Delivered a training panel so new agents ramp faster with shared materials and progress tracking.",
      "Designed a dashboard that surfaces pipeline status and team activity at a glance.",
    ],
    whyNeedProduct: {
      title: "Why teams need Prime Lead CRM",
      paragraphs: [
        "When lead data, chat, and coaching live in separate places, conversion drops and managers lose visibility. A purpose-built CRM keeps the full sales motion in one system from first contact to close.",
      ],
      reasons: [
        "Stop losing leads across spreadsheets and inboxes",
        "Assign clear ownership to every opportunity",
        "Keep chat history attached to the lead record",
        "Train new agents without slowing the sales floor",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Discovery & sales workflow mapping",
        description:
          "We mapped how leads enter the business, who owns follow-up, and where handoffs break down.",
      },
      {
        step: 2,
        title: "CRM architecture",
        description:
          "Designed roles, lead states, chat threads, and training access around a single source of truth.",
      },
      {
        step: 3,
        title: "Build & module delivery",
        description:
          "Shipped dashboard, leads, staff, chat, and training modules in phased releases with stakeholder review.",
      },
      {
        step: 4,
        title: "Launch & team rollout",
        description:
          "Onboarded managers and agents, tuned assignment rules, and refined dashboards from real usage.",
      },
    ],
    clientFeedback: [
      {
        quote:
          "Our team finally works from one lead list. Assignments are clear and chat history is where it belongs.",
        author: "Operations Lead",
        role: "Sales operations",
      },
      {
        quote:
          "New agents ramp faster because training and live leads sit in the same system.",
        author: "Team Manager",
        role: "Sales management",
      },
    ],
    modulePictures: [],
    video: {
      title: "Prime Lead CRM product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One system for leads, staff, chat, and training",
      "Clear ownership on every lead",
      "Faster agent onboarding through the training panel",
      "Managers can see pipeline health from a single dashboard",
    ],
    faqs: [
      faq(
        "Who is Prime Lead CRM built for?",
        "Sales and operations teams that need structured lead capture, staff assignment, conversation history, and agent training in one product.",
        "Scope",
        "left",
      ),
      faq(
        "What modules are included?",
        "Dashboard, leads panel, chat, staff management, training panel, and secure role-based login.",
        "Modules",
        "right",
      ),
      faq(
        "Can roles limit what staff can see?",
        "Yes. Access is role-based so agents, managers, and admins only see the areas they need.",
        "Access",
        "left",
      ),
      faq(
        "Does chat stay linked to each lead?",
        "Yes. The chat module keeps conversations attached to the lead record for clean handoffs and audits.",
        "Chat",
        "right",
      ),
    ],
  },
].map((project) => ({
  ...project,
  modulePictures: project.slides,
}));

export const showcaseProjects: ShowcaseProject[] = projectDetails
  .filter((project) => project.slides.length > 0)
  .map(({ slug, title, category, description, highlights, slides }) => ({
    slug,
    title,
    category,
    description,
    highlights,
    slides,
  }));

export function getAllProjectSlugs(): string[] {
  return projectDetails.map((project) => project.slug);
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug);
}

export function projectDetailPath(slug: string): string {
  return `${projectPath}/${slug}`;
}

export const projectPageMeta = {
  title: "Our Work & Software Projects",
  description:
    "Explore custom software, SaaS, ERP, CRM, and mobile apps we've designed and shipped for clients worldwide.",
} as const;
