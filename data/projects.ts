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
    caption:
      "Live KPIs for staff, license agents, active leads, revenue, conversion rate, and attendance.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Dashboard.jpeg",
      "Prime Lead CRM dashboard",
      1536,
      1024,
    ),
  },
  {
    label: "Leads panel",
    caption:
      "Search, qualify, assign, and track every lead with status, earnings, and ownership in one table.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Leads-Panel.jpeg",
      "Prime Lead CRM leads panel",
      1600,
      889,
    ),
  },
  {
    label: "Chat module",
    caption:
      "Team and agent messaging with conversation history kept beside the sales workflow.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Chat-Module.jpeg",
      "Prime Lead CRM chat module",
      1536,
      1024,
    ),
  },
  {
    label: "Staff management",
    caption:
      "Manage roles, agents, permissions, and performance so follow-ups never fall through.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Staff-Management.jpeg",
      "Prime Lead CRM staff management",
      1528,
      1029,
    ),
  },
  {
    label: "Training panel",
    caption:
      "Internal and external training modules with status, categories, and file attachments for agent onboarding.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Training-Pannel.jpeg",
      "Prime Lead CRM training panel",
      1600,
      874,
    ),
  },
  {
    label: "Secure login",
    caption:
      "Role-based sign-in so admins, managers, and agents only access what they need.",
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
    metaTitle: "Prime Lead CRM Case Study | Call Center CRM Software",
    metaDescription:
      "Case study: Prime Lead CRM, a call center CRM with lead management, staff roles, attendance, chat, training, and live dashboards for sales teams.",
    highlights: [
      "Unified lead pipeline",
      "Staff roles & permissions",
      "Chat, training & attendance",
      "Live conversion dashboard",
    ],
    slides: primeLeadSlides,
    overview: [
      "Prime Lead CRM is a call center CRM built for sales and operations teams that need one system to capture leads, assign ownership, coach agents, and close conversations.",
      "Instead of juggling spreadsheets, inboxes, and separate chat tools, the platform brings dashboard analytics, leads, staff management, training, chat, and secure login into a single workflow.",
      "Managers get real-time visibility into pipeline health, staff activity, revenue, and conversion. Agents get a focused workspace for follow-ups, messaging, and learning the playbook.",
      "We designed the product around day-to-day call center operations: lead intake, license agents, shift and attendance awareness, role-based permissions, and structured training so new hires ramp without slowing the floor.",
    ],
    problem:
      "The sales floor was losing leads and context across disconnected tools. Spreadsheets went stale, chat lived outside the CRM, ownership was unclear, attendance and staffing were hard to track, and new agents had no structured path to learn scripts and processes. Managers could not see conversion, workload, or follow-up gaps in one place.",
    solutions: [
      "Built a live dashboard with KPIs for staff, license agents, active leads, monthly revenue, conversion rate, and daily attendance.",
      "Delivered a leads panel to search, qualify, assign, and update every inquiry with clear status and ownership.",
      "Added staff management with roles, permissions, and performance visibility so the right people own the right leads.",
      "Connected an internal chat module so team conversations stay in the same product as the sales workflow.",
      "Shipped a training panel for internal and external modules, categories, status, and file attachments to speed agent onboarding.",
      "Implemented secure role-based login so admins, managers, and agents only see the modules they need.",
    ],
    whyNeedProduct: {
      title: "Why call centers need Prime Lead CRM",
      paragraphs: [
        "When lead data, staffing, chat, and coaching live in separate places, conversion drops and managers lose control of the floor. A purpose-built call center CRM keeps the full sales motion visible from first contact to close.",
        "Prime Lead CRM is built for teams that need speed, accountability, and coaching in the same system, not another generic CRM that ignores attendance, training, and live agent operations.",
      ],
      reasons: [
        "Stop losing leads across spreadsheets, inboxes, and side chats",
        "Assign clear ownership and permissions to every opportunity",
        "See staff, attendance, revenue, and conversion on one dashboard",
        "Train new agents without slowing experienced closers",
        "Keep conversation history inside the sales workflow",
        "Give leadership a single source of truth for pipeline health",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Discovery & call center workflow mapping",
        description:
          "We mapped how leads enter the business, who owns follow-up, how shifts and attendance affect coverage, and where handoffs and coaching break down.",
      },
      {
        step: 2,
        title: "CRM information architecture",
        description:
          "Designed roles, permissions, lead states, chat threads, training access, and dashboard KPIs around one shared data model.",
      },
      {
        step: 3,
        title: "Core module build",
        description:
          "Shipped login, dashboard, leads, and staff management first so teams could run daily operations on the new platform quickly.",
      },
      {
        step: 4,
        title: "Collaboration & coaching modules",
        description:
          "Added chat and training with attachments, categories, and progress-friendly structure so agents stay aligned and ramp faster.",
      },
      {
        step: 5,
        title: "QA, permissions hardening & pilot",
        description:
          "Tested role boundaries, lead assignment rules, and reporting accuracy with managers and agents before wider rollout.",
      },
      {
        step: 6,
        title: "Launch & continuous tuning",
        description:
          "Onboarded teams, refined dashboard metrics from real usage, and adjusted workflows based on floor feedback.",
      },
    ],
    clientFeedback: [
      {
        quote:
          "Our team finally works from one lead list. Assignments are clear, and managers can see conversion without chasing spreadsheets.",
        author: "Operations Lead",
        role: "Sales operations",
      },
      {
        quote:
          "New agents ramp faster because training materials and live leads sit in the same system as chat and attendance.",
        author: "Team Manager",
        role: "Call center management",
      },
      {
        quote:
          "The dashboard gave us an honest picture of staff capacity, active leads, and revenue in one view.",
        author: "Admin",
        role: "Business owner",
      },
    ],
    modulePictures: [],
    video: {
      title: "Prime Lead CRM product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One CRM for leads, staff, chat, training, and attendance visibility",
      "Clear ownership and role-based access on every lead",
      "Faster agent onboarding through structured training modules",
      "Managers track pipeline, conversion, and team activity from a live dashboard",
      "Fewer dropped follow-ups caused by scattered tools and unclear assignment",
      "A scalable foundation for call center sales operations",
    ],
    faqs: [
      faq(
        "Who is Prime Lead CRM built for?",
        "Call center and sales operations teams that need lead capture, staff assignment, conversation history, training, and live performance visibility in one product.",
        "Scope",
        "left",
      ),
      faq(
        "What modules are included?",
        "Dashboard, leads panel, staff management, chat, training panel, and secure role-based login. The product is structured around day-to-day call center sales operations.",
        "Modules",
        "right",
      ),
      faq(
        "Can roles limit what staff can see?",
        "Yes. Access is role-based so agents, managers, and admins only see the modules and records they are permitted to use.",
        "Access",
        "left",
      ),
      faq(
        "Does chat stay linked to the sales workflow?",
        "Yes. The chat module keeps team conversations inside the CRM so context is not lost in separate messaging apps.",
        "Chat",
        "right",
      ),
      faq(
        "How does the training panel help new agents?",
        "Managers can publish internal and external training modules with categories, status, and file attachments so onboarding stays consistent and measurable.",
        "Training",
        "left",
      ),
      faq(
        "What does the dashboard show?",
        "Key call center metrics such as total staff, license agents, active leads, monthly revenue, conversion rate, and present-day attendance signals.",
        "Reporting",
        "right",
      ),
      faq(
        "Can leads be assigned to specific staff?",
        "Yes. The leads panel supports assignment, status tracking, and ownership so every inquiry has a clear next owner.",
        "Leads",
        "left",
      ),
      faq(
        "Is this a generic CRM or built for call centers?",
        "It is purpose-built for call center sales operations, with staffing, training, chat, and conversion visibility designed into the core workflow.",
        "Fit",
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
