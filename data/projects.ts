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
  clientFeedback: string;
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

const aiSchoolErpSlides: ProjectSlide[] = [
  {
    label: "Product showcase",
    caption:
      "Complete smart school management solution with AI-powered face recognition attendance, academics, finance, and multi-role portals.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Showcase.jpeg",
      "AI School ERP product showcase",
    ),
  },
  {
    label: "Administrator dashboard",
    caption:
      "System overview with student counts, fee collection, expenses, and quick access to every school module.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Administrator-Dashboard.jpeg",
      "AI School ERP administrator dashboard",
    ),
  },
  {
    label: "Public website",
    caption:
      "Marketing homepage for the educational institution with programs, admissions, and portal login access.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Homepage.jpeg",
      "AI School ERP public website homepage",
    ),
  },
  {
    label: "Role-based login",
    caption:
      "Secure sign-in for administrators, teachers, students, accountants, and parents from one branded portal.",
    image: img("/projects/ai-school-erp/AI-School-Erp-Login.jpeg", "AI School ERP login screen"),
  },
  {
    label: "Sessions & timetable",
    caption:
      "Manage academic sessions, active terms, and timetable configuration from a centralized admin view.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Sessions-Timetable.jpeg",
      "AI School ERP sessions and timetable",
    ),
  },
  {
    label: "AI attendance enrollment",
    caption:
      "Enroll student and staff faces with webcam or phone camera so recognition is ready for daily attendance.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Ai-Attendance-Enrolled.jpeg",
      "AI School ERP attendance enrollment",
    ),
  },
  {
    label: "Live monitor",
    caption:
      "Real-time face recognition with present, late, and absent status plus recent recognition history.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Live-Monitor.jpeg",
      "AI School ERP live attendance monitor",
    ),
  },
  {
    label: "AI CCTV attendance",
    caption:
      "Multi-camera CCTV feeds with live AI recognition, daily attendance summary, and recognition logs.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Ai-Cctv-Attendance.jpeg",
      "AI School ERP CCTV attendance",
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
        "Assign clear ownership and permissions on every sales opportunity",
        "Track staff, attendance, revenue, and conversion on one dashboard",
        "Train new agents quickly without slowing experienced closers",
        "Keep full conversation history inside the sales workflow",
        "Give leadership one clear source of truth for pipeline health",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Discovery and workflow mapping",
        description:
          "Mapped lead intake, ownership, shifts, attendance coverage, handoffs, and coaching gaps across the sales floor.",
      },
      {
        step: 2,
        title: "CRM information architecture",
        description:
          "Designed roles, permissions, lead states, chat, training access, and dashboard KPIs on one shared data model.",
      },
      {
        step: 3,
        title: "Core module build",
        description:
          "Shipped login, dashboard, leads, and staff management first so teams could run daily operations quickly.",
      },
      {
        step: 4,
        title: "Collaboration and coaching",
        description:
          "Added chat and training with attachments, categories, and clear structure so agents stay aligned and ramp faster.",
      },
      {
        step: 5,
        title: "QA and pilot rollout",
        description:
          "Tested role boundaries, lead assignment rules, and reporting accuracy with managers and agents before launch.",
      },
      {
        step: 6,
        title: "Launch and continuous tuning",
        description:
          "Onboarded teams, refined dashboard metrics from live usage, and adjusted workflows from real floor feedback.",
      },
    ],
    clientFeedback:
      "We needed call center CRM and custom CRM software that our sales floor would actually use every day. Next Software Development Company delivered Prime Lead CRM with the care of a software development company that understands lead management software, staff management CRM, sales dashboard reporting, agent training software, and how a real software house should support a call center. Assignments are clear, conversion is visible without spreadsheets, and our agents finally work from one system built by a software company that listened to how our floor operates.",
    modulePictures: [],
    video: {
      title: "Prime Lead CRM product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One CRM for leads, staff, chat, training, and attendance visibility",
      "Clear ownership with role based access controls on every lead",
      "Faster agent onboarding through structured training modules",
      "Live dashboard tracking for pipeline, conversion, and team activity",
      "Fewer dropped follow ups from scattered tools and unclear ownership",
      "A scalable foundation ready for growing call center operations",
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
  {
    ...(() => {
      const p = base("ai-school-erp");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "AI School ERP Case Study | School Management & AI Attendance",
    metaDescription:
      "Case study: AI School ERP, a school management system with AI face recognition attendance, fees, exams, timetables, and role-based portals for admins, teachers, parents, and students.",
    highlights: [
      "AI face recognition attendance",
      "Multi-role school portals",
      "Fees, exams & timetables",
      "Webcam, mobile & CCTV support",
    ],
    slides: aiSchoolErpSlides,
    overview: [
      "AI School ERP is a complete school management platform built for institutions that need academics, administration, finance, and attendance in one secure system.",
      "The product combines a public website, administrator panel, and role-based portals for teachers, students, parents, and accountants so every stakeholder works from the right view.",
      "Its standout feature is AI-powered attendance using webcam, mobile camera, and CCTV with live monitoring, enrollment, and real-time recognition logs.",
      "Modules cover sessions, classes, subjects, homework, study materials, lesson plans, exams, fees, reports, and communication so schools can replace scattered tools with one ERP.",
    ],
    problem:
      "The school was managing attendance manually, tracking fees and academics in separate spreadsheets, and giving staff no single dashboard for sessions, classes, or student progress. Attendance was slow, error-prone, and hard to audit. Parents and teachers lacked a unified portal, and leadership had no live view of daily presence across campuses or cameras.",
    solutions: [
      "Built an administrator dashboard with student counts, fee collection, expenses, and module shortcuts for daily school operations.",
      "Delivered role-based login for administrators, teachers, students, accountants, and parents with branded portal access.",
      "Shipped academic setup for sessions, classes, sections, subjects, rooms, teachers, and timetable configuration.",
      "Implemented AI attendance enrollment so faces are captured once and linked to student or staff records.",
      "Added live monitor and AI CCTV views with real-time recognition, present/late/absent status, and recent logs.",
      "Connected fees, exams, homework, study materials, reports, and communication into one school ERP workflow.",
    ],
    whyNeedProduct: {
      title: "Why schools need AI School ERP",
      paragraphs: [
        "When attendance, fees, academics, and parent communication live in separate systems, admin teams waste hours reconciling data and errors slip through every day.",
        "AI School ERP gives leadership one platform for operations while automating attendance with face recognition that works across webcam, mobile, and CCTV feeds.",
      ],
      reasons: [
        "Replace manual registers and spreadsheet attendance with AI recognition",
        "Give admins, teachers, parents, and students the right portal for their role",
        "Manage sessions, classes, timetables, exams, and fees in one ERP",
        "Monitor live attendance across cameras with instant present/late/absent status",
        "Enroll faces once and automate daily recognition at gates and classrooms",
        "Improve reporting with real-time dashboards and attendance history",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "School workflow discovery",
        description:
          "Mapped academic structure, attendance processes, fee cycles, roles, and reporting needs across admin, teaching, and finance teams.",
      },
      {
        step: 2,
        title: "ERP architecture & roles",
        description:
          "Designed modules, permissions, session model, and portal flows for administrators, teachers, students, parents, and accountants.",
      },
      {
        step: 3,
        title: "Core academic modules",
        description:
          "Built sessions, classes, subjects, timetable tools, homework, study materials, and examination workflows first.",
      },
      {
        step: 4,
        title: "AI attendance pipeline",
        description:
          "Integrated face enrollment, live webcam monitoring, and multi-camera CCTV recognition with attendance status rules.",
      },
      {
        step: 5,
        title: "Finance & communication",
        description:
          "Connected fee collection, expenses, reports, and school communication so operations stay inside one product.",
      },
      {
        step: 6,
        title: "Pilot, training & launch",
        description:
          "Onboarded staff, validated recognition accuracy, tuned attendance rules, and launched with ongoing support from live usage.",
      },
    ],
    clientFeedback:
      "We needed school ERP software that could handle academics, fees, and attendance without juggling multiple systems. Next Software Development Company delivered AI School ERP with AI attendance, role-based portals, and the depth of a software development company that understands how schools actually run day to day.",
    modulePictures: [],
    video: {
      title: "AI School ERP product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One ERP for academics, finance, attendance, and school communication",
      "AI face recognition across webcam, mobile camera, and CCTV feeds",
      "Role-based portals for admins, teachers, students, parents, and accountants",
      "Live attendance monitoring with present, late, and absent visibility",
      "Faster admin work through sessions, timetables, exams, and fee modules",
      "Scalable foundation for multi-campus school operations",
    ],
    faqs: [
      faq(
        "Who is AI School ERP built for?",
        "Schools, academies, and educational institutions that need academics, administration, finance, and AI attendance in one secure platform.",
        "Scope",
        "left",
      ),
      faq(
        "How does AI attendance work?",
        "Staff and students enroll faces via webcam or phone camera. The system then recognizes them in live monitor or CCTV feeds and marks present, late, or absent automatically.",
        "Attendance",
        "right",
      ),
      faq(
        "Which roles can access the system?",
        "Administrators, teachers, students, accountants, and parents each get a dedicated portal with permissions matched to their responsibilities.",
        "Roles",
        "left",
      ),
      faq(
        "What modules are included?",
        "Sessions, classes, subjects, timetables, homework, study materials, lesson plans, exams, fees, reports, communication, and AI attendance.",
        "Modules",
        "right",
      ),
      faq(
        "Can attendance run on CCTV cameras?",
        "Yes. The AI CCTV view supports multiple camera feeds with live recognition, daily summaries, and recent recognition logs.",
        "CCTV",
        "left",
      ),
      faq(
        "Does the product include a public website?",
        "Yes. A branded public site supports admissions, programs, and portal login alongside the admin ERP.",
        "Website",
        "right",
      ),
      faq(
        "Can schools manage fees inside the ERP?",
        "Yes. Fee collection, outstanding balances, and monthly expenses are visible from the administrator dashboard and finance modules.",
        "Finance",
        "left",
      ),
      faq(
        "Is this only attendance software?",
        "No. It is a full school ERP with AI attendance as a core module, not a standalone attendance tool.",
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
