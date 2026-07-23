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

function img(src: string, alt: string): ImageAsset {
  return { src, alt, width: 1200, height: 750 };
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

export const projectDetails: ProjectDetail[] = [
  {
    ...(() => {
      const p = base("mediconnect-pro");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "MediConnect Pro Telehealth Case Study",
    metaDescription:
      "See how we built MediConnect Pro, a HIPAA-ready telehealth platform that cut wait times 60% and connected 12,000+ patients with licensed clinicians.",
    highlights: ["60% faster wait times", "12,000+ patients served", "HIPAA-ready workflows"],
    slides: [
      {
        label: "Patient portal",
        caption: "Secure onboarding for patients and providers.",
        image: img(
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&h=750&q=80",
          "Telehealth dashboard",
        ),
      },
      {
        label: "Video consultations",
        caption: "Real-time visits with licensed clinicians.",
        image: img(
          "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=1200&h=750&q=80",
          "Doctor video consultation",
        ),
      },
      {
        label: "Mobile access",
        caption: "Care plans and follow-ups on any device.",
        image: img(
          "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&h=750&q=80",
          "Healthcare mobile app",
        ),
      },
    ],
    overview: [
      "MediConnect Pro is a telehealth platform built for multi-clinic networks that need secure video visits, patient onboarding, and provider scheduling in one workflow.",
      "We designed the product for U.S. healthcare operators who were losing patients to long wait times and limited reach beyond brick-and-mortar locations.",
      "The result is a HIPAA-conscious stack that supports intake, live consultations, prescriptions follow-up, and mobile care plans without forcing staff to juggle disconnected tools.",
    ],
    problem:
      "Clinics struggled with long patient wait times and limited reach beyond physical locations. Front-desk teams spent hours coordinating appointments by phone, while providers lacked a reliable way to see remote patients without compromising compliance or clinical quality.",
    solutions: [
      "Built a unified telehealth workflow covering patient registration, identity checks, and provider availability.",
      "Delivered encrypted video consultations with waiting-room logic and visit notes that sync to care plans.",
      "Added mobile access so patients can complete follow-ups and view instructions after each visit.",
      "Instrumented analytics for wait times, no-shows, and provider utilization so clinics can improve operations week over week.",
    ],
    whyNeedProduct: {
      title: "Why clinics need MediConnect Pro",
      paragraphs: [
        "Patients expect digital care options, and clinics that rely only on in-person visits lose reach and revenue. A purpose-built telehealth product protects compliance while expanding capacity without hiring more front-desk staff overnight.",
      ],
      reasons: [
        "Reduce lobby congestion and average wait time",
        "Serve patients outside your physical catchment area",
        "Keep visit documentation tied to the same clinical workflow",
        "Give leadership measurable utilization and outcomes data",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Discovery & compliance map",
        description:
          "We mapped clinic workflows, HIPAA requirements, and provider schedules to define the MVP visit path.",
      },
      {
        step: 2,
        title: "Product architecture",
        description:
          "Designed secure auth, role-based access, and a visit state machine for intake through follow-up.",
      },
      {
        step: 3,
        title: "Build & clinical QA",
        description:
          "Shipped portal, video, and mobile modules with staged rollouts across pilot clinics.",
      },
      {
        step: 4,
        title: "Launch & optimization",
        description:
          "Monitored wait times and no-shows, then tuned scheduling rules and patient reminders.",
      },
    ],
    clientFeedback: [
      {
        quote:
          "Wait times dropped faster than we expected, and providers finally had one place for remote visits and notes.",
        author: "Dr. Alicia Monroe",
        role: "Medical Director, multi-clinic network",
      },
      {
        quote:
          "Patients adopted the app quickly. Our front desk stopped drowning in reschedule calls.",
        author: "James Porter",
        role: "Operations Lead",
      },
    ],
    modulePictures: [],
    video: {
      title: "MediConnect Pro product walkthrough",
      youtubeId: "dQw4w9WgXcQ",
    },
    outcome: [
      "60% faster average patient wait times",
      "12,000+ patients served in the first major growth window",
      "HIPAA-ready workflows across intake, visit, and follow-up",
      "Clinic reach expanded without opening new physical sites",
    ],
    faqs: [
      faq(
        "Is MediConnect Pro suitable for multi-clinic networks?",
        "Yes. It was designed for networks that need shared scheduling, provider roles, and consistent visit documentation across locations.",
        "Scope",
        "left",
      ),
      faq(
        "How long did the initial build take?",
        "Discovery through pilot launch ran in phased sprints, with core video and portal modules live first, followed by mobile care-plan features.",
        "Timeline",
        "right",
      ),
      faq(
        "Can it integrate with existing EMR tools?",
        "The architecture supports API-based integrations for demographics, visit notes, and scheduling handoffs depending on your stack.",
        "Integrations",
        "left",
      ),
      faq(
        "What outcomes should we expect?",
        "Clients typically target shorter waits, higher remote visit volume, and clearer operational reporting within the first months of adoption.",
        "Results",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("finedge-erp");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "FinEdge ERP Financial Services Case Study",
    metaDescription:
      "Explore FinEdge ERP: a unified finance and operations platform that replaced five legacy tools, cut overhead 40%, and built in UAE compliance.",
    highlights: ["40% lower overhead", "5 legacy tools replaced", "UAE compliance built in"],
    slides: [
      {
        label: "Finance dashboard",
        caption: "Unified ledgers, approvals, and audit trails.",
        image: img(
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=750&q=80",
          "Financial analytics dashboard",
        ),
      },
      {
        label: "Operations hub",
        caption: "Inventory, billing, and HR in one workspace.",
        image: img(
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=750&q=80",
          "ERP reporting interface",
        ),
      },
      {
        label: "Executive reporting",
        caption: "Leadership views with live compliance metrics.",
        image: img(
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&h=750&q=80",
          "Finance team reviewing data",
        ),
      },
    ],
    overview: [
      "FinEdge ERP consolidates finance, operations, and reporting for mid-size financial services firms operating under UAE regulatory expectations.",
      "The engagement focused on replacing a patchwork of five legacy systems that created duplicate data entry, slow approvals, and audit risk.",
      "Today teams work from one ledger-backed workspace with role-based approvals and executive dashboards that stay current with operational reality.",
    ],
    problem:
      "A mid-size financial firm ran five disconnected legacy tools, creating overhead and compliance risk. Month-end closes dragged on, and auditors struggled to reconstruct a single source of truth across finance and operations.",
    solutions: [
      "Delivered a unified ERP covering general ledger, billing, inventory, and HR workflows.",
      "Encoded UAE compliance requirements into approvals, audit trails, and reporting views.",
      "Migrated historical records with validation checks so teams could retire legacy tools confidently.",
      "Built executive dashboards for cash, compliance status, and operational KPIs.",
    ],
    whyNeedProduct: {
      title: "Why financial firms need FinEdge ERP",
      paragraphs: [
        "Fragmented tools multiply cost and risk. A single ERP with compliance baked in reduces overhead while giving leadership trustworthy numbers for decisions and audits.",
      ],
      reasons: [
        "Eliminate duplicate entry across finance and ops",
        "Shorten close cycles with clearer approval paths",
        "Satisfy regional compliance with built-in audit trails",
        "Give executives one live view of performance",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Process & risk discovery",
        description:
          "Documented finance, ops, and compliance workflows across the five systems in use.",
      },
      {
        step: 2,
        title: "Data model & migration plan",
        description:
          "Defined the canonical ledger model and staged migration with reconciliation checkpoints.",
      },
      {
        step: 3,
        title: "Module delivery",
        description:
          "Released finance first, then operations and HR, with training for each cohort of users.",
      },
      {
        step: 4,
        title: "Cutover & audit readiness",
        description:
          "Retired legacy tools after parallel-run validation and prepared audit-ready reporting packs.",
      },
    ],
    clientFeedback: [
      {
        quote:
          "We finally closed the books without chasing five systems. Compliance reporting is no longer a fire drill.",
        author: "Sara Al-Hassan",
        role: "CFO, financial services firm",
      },
      {
        quote:
          "Approvals are transparent. Managers know where every request sits and why it stalled.",
        author: "Omar Reed",
        role: "Head of Operations",
      },
    ],
    modulePictures: [],
    video: {
      title: "FinEdge ERP platform overview",
      youtubeId: "ysz5S6PUM-U",
    },
    outcome: [
      "40% lower operational overhead",
      "Five legacy tools fully replaced",
      "UAE compliance requirements embedded in workflows",
      "Faster month-end close with unified audit trails",
    ],
    faqs: [
      faq(
        "Which departments does FinEdge cover?",
        "Finance, operations, billing, inventory-related workflows, and HR processes that needed to sit beside the ledger.",
        "Scope",
        "left",
      ),
      faq(
        "How was legacy data handled?",
        "We ran staged migrations with reconciliation reports so balances and critical history matched before cutover.",
        "Migration",
        "right",
      ),
      faq(
        "Is UAE compliance configurable?",
        "Yes. Approval rules, audit logging, and reporting packs were designed around the client's regulatory obligations.",
        "Compliance",
        "left",
      ),
      faq(
        "Can we start with finance only?",
        "Absolutely. Many clients launch finance and reporting first, then expand into operations modules.",
        "Rollout",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("retailflow-pos");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "RetailFlow POS Multi-Branch Case Study",
    metaDescription:
      "Learn how RetailFlow POS synced inventory across 30 UK retail branches, cut stock issues 85%, and sped checkout by 35%.",
    highlights: ["30 retail branches", "85% fewer stock issues", "35% faster checkout"],
    slides: [
      {
        label: "Checkout flow",
        caption: "Faster counter experiences across stores.",
        image: img(
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=750&q=80",
          "Retail checkout software",
        ),
      },
      {
        label: "Inventory sync",
        caption: "Stock levels updated in real time.",
        image: img(
          "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&h=750&q=80",
          "POS payment terminal",
        ),
      },
      {
        label: "Branch analytics",
        caption: "Performance insights for every location.",
        image: img(
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=750&q=80",
          "Retail store operations",
        ),
      },
    ],
    overview: [
      "RetailFlow POS is a cloud point-of-sale and inventory platform built for multi-branch retailers that need consistent checkout and live stock accuracy.",
      "We deployed it across 30 UK retail branches where stock discrepancies and slow counters were hurting both revenue and customer experience.",
      "Store teams now share one inventory truth, while HQ gets branch-level performance without waiting for end-of-day spreadsheets.",
    ],
    problem:
      "A retail chain faced stock discrepancies and slow checkout across 30 branches. Associates sold items that appeared available elsewhere, and managers lacked timely visibility into what each store was actually holding.",
    solutions: [
      "Shipped a cloud POS optimized for fast counter flows and reliable offline-tolerant sync.",
      "Connected inventory updates in real time so every branch sees the same stock picture.",
      "Added branch analytics for sales velocity, shrinkage signals, and staff performance.",
      "Rolled out role-based permissions so store managers and HQ see the right level of detail.",
    ],
    whyNeedProduct: {
      title: "Why retailers need RetailFlow POS",
      paragraphs: [
        "When inventory is wrong, every channel suffers—checkout, transfers, and online promises. A cloud POS with live sync protects margin and customer trust across the estate.",
      ],
      reasons: [
        "Keep stock accurate across every branch",
        "Speed up queues without sacrificing controls",
        "Give HQ live visibility instead of delayed reports",
        "Reduce lost sales from phantom inventory",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Store operations workshops",
        description:
          "Observed checkout, receiving, and transfer processes in representative branches.",
      },
      {
        step: 2,
        title: "POS & inventory design",
        description:
          "Defined sync rules, barcode flows, and manager dashboards for day-to-day use.",
      },
      {
        step: 3,
        title: "Phased branch rollout",
        description:
          "Launched in pilot stores, trained staff, then expanded across the remaining locations.",
      },
      {
        step: 4,
        title: "Performance tuning",
        description:
          "Used early analytics to refine stock alerts, promotions, and staffing patterns.",
      },
    ],
    clientFeedback: [
      {
        quote:
          "Stock arguments between stores basically disappeared. Counters feel snappier for customers too.",
        author: "Helen Cartwright",
        role: "Retail Operations Director",
      },
      {
        quote:
          "I can see every branch's performance in the morning instead of waiting for weekly files.",
        author: "Marcus Lee",
        role: "Regional Manager",
      },
    ],
    modulePictures: [],
    video: {
      title: "RetailFlow POS demo",
      youtubeId: "aqz-KE-bpKQ",
    },
    outcome: [
      "30 retail branches live on one POS platform",
      "85% fewer stock discrepancies",
      "35% faster average checkout",
      "HQ visibility into branch performance without manual rollups",
    ],
    faqs: [
      faq(
        "Does RetailFlow work offline?",
        "Checkout is designed to tolerate connectivity gaps and sync when the connection returns, which matters for busy floor environments.",
        "Reliability",
        "left",
      ),
      faq(
        "Can we manage transfers between stores?",
        "Yes. Inventory sync and transfer workflows keep receiving and sending branches aligned.",
        "Inventory",
        "right",
      ),
      faq(
        "How long does a multi-branch rollout take?",
        "We typically pilot a handful of stores, refine training, then expand in waves to reduce disruption.",
        "Rollout",
        "left",
      ),
      faq(
        "What reporting is included?",
        "Branch sales, stock health, and operational metrics are available to managers and HQ with role-based access.",
        "Analytics",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("eduspark-lms");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "EduSpark LMS University Platform Case Study",
    metaDescription:
      "Discover EduSpark LMS for universities: structured learning paths, faculty tools, and a 45% lift in course completion for 8,000+ students.",
    highlights: ["8,000+ active students", "45% higher completion", "Multi-campus rollout"],
    slides: [
      {
        label: "Course hub",
        caption: "Structured learning paths for every cohort.",
        image: img(
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=750&q=80",
          "Online learning platform",
        ),
      },
      {
        label: "Student workspace",
        caption: "Assignments, progress, and collaboration.",
        image: img(
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&h=750&q=80",
          "Student learning experience",
        ),
      },
      {
        label: "Faculty tools",
        caption: "Instructors manage content with ease.",
        image: img(
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=750&q=80",
          "LMS course dashboard",
        ),
      },
    ],
    overview: [
      "EduSpark LMS is an e-learning management system built for private universities that need clearer course paths and better student engagement.",
      "Serving 8,000+ students, the platform replaced fragmented tools for content, assignments, and faculty administration.",
      "Structured learning paths and progress visibility helped raise completion rates while giving instructors a simpler way to manage cohorts.",
    ],
    problem:
      "A private university needed a modern LMS to improve course completion and student engagement. Content lived in multiple places, faculty spent too much time on admin, and students lacked a clear view of what to do next.",
    solutions: [
      "Built structured learning paths with milestones, assignments, and progress tracking.",
      "Gave faculty tools to publish content, grade work, and communicate with cohorts.",
      "Created a student workspace for collaboration, deadlines, and course status.",
      "Supported multi-campus rollout with shared catalogs and campus-specific cohorts.",
    ],
    whyNeedProduct: {
      title: "Why universities need EduSpark LMS",
      paragraphs: [
        "Completion suffers when students cannot see the path and faculty cannot manage content efficiently. A dedicated LMS turns courses into guided journeys instead of file dumps.",
      ],
      reasons: [
        "Raise completion with clearer learning sequences",
        "Reduce faculty admin around content and grading",
        "Give students one place for progress and deadlines",
        "Scale consistently across campuses and programs",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Academic workflow mapping",
        description:
          "Interviewed faculty, students, and IT to capture course design and assessment needs.",
      },
      {
        step: 2,
        title: "LMS information architecture",
        description:
          "Designed catalogs, cohorts, roles, and progress models for multi-campus use.",
      },
      {
        step: 3,
        title: "Pilot courses",
        description:
          "Launched with selected programs, gathered feedback, and refined faculty tooling.",
      },
      {
        step: 4,
        title: "Campus-wide scale",
        description:
          "Expanded enrollment, trained support staff, and monitored completion metrics.",
      },
    ],
    clientFeedback: [
      {
        quote:
          "Students finally know where they stand. Completion improvements showed up within the first term.",
        author: "Prof. Nadine Clarke",
        role: "Dean of Academic Affairs",
      },
      {
        quote:
          "Publishing and grading no longer feel like separate jobs from teaching.",
        author: "Daniel Okonkwo",
        role: "Faculty Lead",
      },
    ],
    modulePictures: [],
    video: {
      title: "EduSpark LMS tour",
      youtubeId: "ScMzIvxBSi4",
    },
    outcome: [
      "8,000+ active students on the platform",
      "45% higher course completion rates",
      "Successful multi-campus rollout",
      "Lower faculty overhead for content and grading",
    ],
    faqs: [
      faq(
        "Can EduSpark support blended learning?",
        "Yes. Courses can mix asynchronous content with scheduled activities and campus-specific cohorts.",
        "Teaching",
        "left",
      ),
      faq(
        "How are roles handled?",
        "Students, faculty, and administrators get role-based access to content, grading, and reporting.",
        "Access",
        "right",
      ),
      faq(
        "Is multi-campus content shared?",
        "Shared catalogs are supported alongside campus-specific courses and enrollments.",
        "Scale",
        "left",
      ),
      faq(
        "What changed for students day to day?",
        "They see clear paths, deadlines, and progress instead of hunting through disconnected portals.",
        "Experience",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("cargotrack");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "CargoTrack Shipment Visibility Case Study",
    metaDescription:
      "See how CargoTrack delivers live GPS shipment tracking for 600+ daily deliveries and cut customer support queries by 70%.",
    highlights: ["600+ daily deliveries", "70% fewer support queries", "Live GPS tracking"],
    slides: [
      {
        label: "Live map",
        caption: "GPS visibility for every active shipment.",
        image: img(
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&h=750&q=80",
          "Logistics warehouse and shipment tracking dashboard",
        ),
      },
      {
        label: "Client portal",
        caption: "Customers check status without calling support.",
        image: img(
          "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&h=750&q=80",
          "Freight logistics operations",
        ),
      },
      {
        label: "Dispatch console",
        caption: "Ops teams prioritize exceptions in real time.",
        image: img(
          "https://images.unsplash.com/photo-1578574577315-52ac8755fb29?auto=format&fit=crop&w=1200&h=750&q=80",
          "Delivery fleet and logistics planning",
        ),
      },
    ],
    overview: [
      "CargoTrack is a real-time shipment tracking platform for logistics operators moving high daily volumes across Pakistan and the UAE.",
      "Clients and internal teams share the same live GPS picture, which dramatically reduced status calls into the support center.",
      "Dispatchers can focus on exceptions—delays, failed attempts, and handoffs—instead of answering routine 'where is my shipment' questions.",
    ],
    problem:
      "Logistics clients flooded support with shipment status calls due to limited visibility. Without a shared live view, every delay became a phone tree, and operations struggled to prioritize true exceptions.",
    solutions: [
      "Created a real-time tracking platform with live GPS visibility for every delivery.",
      "Opened a client portal so customers can self-serve status and ETA updates.",
      "Built a dispatch console that highlights exceptions and stalled shipments.",
      "Instrumented volume and support metrics to prove the reduction in inbound queries.",
    ],
    whyNeedProduct: {
      title: "Why logistics teams need CargoTrack",
      paragraphs: [
        "When customers cannot see shipments, support becomes the product. Live tracking restores trust, frees agents for complex issues, and helps ops intervene earlier.",
      ],
      reasons: [
        "Cut repetitive status calls into support",
        "Give customers transparent ETAs and locations",
        "Help dispatch act on exceptions faster",
        "Scale daily delivery volume without linear support growth",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Tracking & support audit",
        description:
          "Analyzed call reasons, delivery stages, and GPS data sources across the network.",
      },
      {
        step: 2,
        title: "Portal & console design",
        description:
          "Designed customer-facing tracking and internal exception workflows together.",
      },
      {
        step: 3,
        title: "Integration & pilot lanes",
        description:
          "Connected devices and carrier events, then piloted on high-volume lanes.",
      },
      {
        step: 4,
        title: "Network rollout",
        description:
          "Expanded coverage, trained support, and monitored query volume reductions.",
      },
    ],
    clientFeedback: [
      {
        quote:
          "Support volume dropped almost overnight once customers could see their shipments live.",
        author: "Bilal Khan",
        role: "Customer Experience Manager",
      },
      {
        quote:
          "Dispatchers finally spend time on exceptions instead of answering the same status question.",
        author: "Fatima Noor",
        role: "Logistics Operations Lead",
      },
    ],
    modulePictures: [],
    video: {
      title: "CargoTrack live tracking demo",
      youtubeId: "jNQXAC9IVRw",
    },
    outcome: [
      "600+ deliveries processed daily on the platform",
      "70% fewer customer support queries about status",
      "Live GPS visibility for clients and internal teams",
      "Faster exception handling for delayed shipments",
    ],
    faqs: [
      faq(
        "Which regions does CargoTrack cover?",
        "The initial deployment focused on Pakistan/UAE logistics corridors with expandable lane coverage.",
        "Coverage",
        "left",
      ),
      faq(
        "Can customers track without an account?",
        "Tracking links and portal access can be configured per client preference and security needs.",
        "Access",
        "right",
      ),
      faq(
        "How are GPS events ingested?",
        "Device and carrier events feed a unified shipment timeline that powers both portal and dispatch views.",
        "Data",
        "left",
      ),
      faq(
        "What changed for the support team?",
        "Routine status calls fell sharply, freeing agents for claims, exceptions, and relationship work.",
        "Support",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("propertyhub");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "PropertyHub Real Estate CRM Case Study",
    metaDescription:
      "Explore PropertyHub: AI-assisted property search and agent CRM that doubled leads and increased time-on-site by 120% in Australia.",
    highlights: ["120% time-on-site increase", "2× lead generation", "Agent CRM in one place"],
    slides: [
      {
        label: "Listing discovery",
        caption: "AI-assisted search that matches buyer intent.",
        image: img(
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=750&q=80",
          "Modern real estate property listing platform",
        ),
      },
      {
        label: "Agent CRM",
        caption: "Leads, follow-ups, and listing status in one hub.",
        image: img(
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=750&q=80",
          "Real estate agent workspace",
        ),
      },
      {
        label: "Buyer journey",
        caption: "Saved searches and recommendations that keep buyers engaged.",
        image: img(
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&h=750&q=80",
          "Residential property listing photography",
        ),
      },
    ],
    overview: [
      "PropertyHub combines property listings with an agent CRM and AI-powered search recommendations for Australian real estate teams.",
      "Buyers stay longer because discovery feels relevant; agents convert more because leads and follow-ups live in the same system as listings.",
      "The platform replaced a mix of listing sites and spreadsheets that left teams blind to which inquiries were actually progressing.",
    ],
    problem:
      "A real estate business needed better lead capture and property discovery for agents and buyers. Listings were hard to explore, and agents lost momentum chasing inquiries across inboxes and sticky notes.",
    solutions: [
      "Launched a listing experience with AI-powered search recommendations.",
      "Built an agent CRM for lead capture, assignment, and follow-up cadences.",
      "Connected saved searches and alerts so buyers return with clearer intent.",
      "Gave leadership visibility into lead volume, response times, and conversion.",
    ],
    whyNeedProduct: {
      title: "Why agencies need PropertyHub",
      paragraphs: [
        "Listings alone do not close deals—agents need CRM discipline and buyers need smarter discovery. PropertyHub ties both together so engagement turns into measurable pipeline.",
      ],
      reasons: [
        "Increase time-on-site with relevant recommendations",
        "Capture and assign leads before they go cold",
        "Give agents one workspace for listings and follow-ups",
        "Measure which channels actually produce appointments",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Buyer & agent journey mapping",
        description:
          "Studied search behavior, inquiry handoffs, and agent follow-up habits.",
      },
      {
        step: 2,
        title: "Listing + CRM architecture",
        description:
          "Modeled properties, leads, recommendations, and notification rules.",
      },
      {
        step: 3,
        title: "MVP launch",
        description:
          "Released discovery and CRM cores, then trained agents on daily workflows.",
      },
      {
        step: 4,
        title: "Recommendation tuning",
        description:
          "Improved AI search signals using engagement and conversion data from the first quarter.",
      },
    ],
    clientFeedback: [
      {
        quote:
          "Buyers linger longer and agents finally stop losing inquiries in email threads.",
        author: "Sophie Grant",
        role: "Agency Principal",
      },
      {
        quote:
          "Lead response times improved because everything sits in one CRM tied to the listings.",
        author: "Liam Hughes",
        role: "Sales Manager",
      },
    ],
    modulePictures: [],
    video: {
      title: "PropertyHub platform walkthrough",
      youtubeId: "M7lc1UVf-VE",
    },
    outcome: [
      "120% increase in time-on-site",
      "Lead generation doubled in the first quarter",
      "Agent CRM and listings unified in one product",
      "Clearer reporting on response times and conversion",
    ],
    faqs: [
      faq(
        "Does PropertyHub replace our listing syndication?",
        "It can act as the primary discovery and CRM hub while still supporting feeds to external portals where needed.",
        "Listings",
        "left",
      ),
      faq(
        "How does AI search help buyers?",
        "Recommendations learn from preferences and engagement so buyers see more relevant properties faster.",
        "AI",
        "right",
      ),
      faq(
        "Can multiple agencies share the platform?",
        "Roles and tenancy can be configured for teams, offices, and permission boundaries.",
        "Teams",
        "left",
      ),
      faq(
        "What metrics matter most after launch?",
        "Time-on-site, lead volume, response latency, and appointment conversion are the primary early signals.",
        "Metrics",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("insightai");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "InsightAI Document Intelligence Case Study",
    metaDescription:
      "How InsightAI helps legal teams extract, classify, and summarize contracts—cutting manual review time 75% across 50,000+ documents.",
    highlights: ["75% less manual review", "50,000+ documents processed", "Higher audit accuracy"],
    slides: [
      {
        label: "Document intake",
        caption: "Bulk upload and classification for contract libraries.",
        image: img(
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=750&q=80",
          "AI-powered document analysis dashboard",
        ),
      },
      {
        label: "Clause extraction",
        caption: "Key terms surfaced for faster legal review.",
        image: img(
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=750&q=80",
          "Legal team reviewing contracts on laptop",
        ),
      },
      {
        label: "Summary workspace",
        caption: "Audit-ready summaries for counsel and stakeholders.",
        image: img(
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=750&q=80",
          "Machine learning and document processing interface",
        ),
      },
    ],
    overview: [
      "InsightAI is a document intelligence platform that extracts, classifies, and summarizes contracts for legal and compliance teams.",
      "Built for high-volume review environments in the USA, it turns unstructured contract libraries into searchable, auditable work products.",
      "Counsel spend less time hunting clauses and more time making decisions, with accuracy improvements that matter in audit and diligence contexts.",
    ],
    problem:
      "Legal teams spent excessive time manually reviewing and classifying large contract volumes. Inconsistent tagging and slow summaries created backlog, audit risk, and burnout during diligence spikes.",
    solutions: [
      "Built extraction and classification pipelines tailored to contract structures.",
      "Delivered summarization workspaces that highlight obligations, risks, and key dates.",
      "Added review queues so counsel can validate model output before it becomes official.",
      "Instrumented accuracy and throughput metrics across 50,000+ documents.",
    ],
    whyNeedProduct: {
      title: "Why legal teams need InsightAI",
      paragraphs: [
        "Manual review does not scale with contract volume. Document intelligence reduces cycle time while keeping humans in the loop for judgments that still need counsel.",
      ],
      reasons: [
        "Shrink time spent on repetitive clause hunting",
        "Standardize classification across large libraries",
        "Improve audit readiness with consistent summaries",
        "Absorb diligence spikes without proportional headcount",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Corpus & clause discovery",
        description:
          "Sampled contract types, risk taxonomies, and existing review playbooks.",
      },
      {
        step: 2,
        title: "Model & workflow design",
        description:
          "Defined extraction targets, human review steps, and audit logging requirements.",
      },
      {
        step: 3,
        title: "Pilot review pods",
        description:
          "Ran parallel human/AI reviews to calibrate accuracy before wider rollout.",
      },
      {
        step: 4,
        title: "Production scale",
        description:
          "Expanded document volume, tuned prompts/models, and trained legal ops users.",
      },
    ],
    clientFeedback: [
      {
        quote:
          "We cut review time dramatically without giving up counsel oversight on what matters.",
        author: "Rachel Nguyen",
        role: "General Counsel, growth-stage company",
      },
      {
        quote:
          "Diligence spikes are manageable now. The summaries give partners a head start.",
        author: "Evan Brooks",
        role: "Legal Operations Manager",
      },
    ],
    modulePictures: [],
    video: {
      title: "InsightAI document intelligence demo",
      youtubeId: "eIho2S0ZahI",
    },
    outcome: [
      "75% less time spent on manual contract review",
      "50,000+ documents processed on the platform",
      "Higher audit accuracy through consistent classification",
      "Human-in-the-loop review queues for counsel validation",
    ],
    faqs: [
      faq(
        "Does InsightAI replace lawyers?",
        "No. It accelerates extraction and summarization while keeping counsel responsible for final judgment.",
        "Role",
        "left",
      ),
      faq(
        "What document types are supported?",
        "The initial focus was commercial contracts, with classification taxonomies expandable to adjacent legal documents.",
        "Coverage",
        "right",
      ),
      faq(
        "How is accuracy maintained?",
        "Pilot calibration, review queues, and ongoing metric monitoring keep model output aligned with legal standards.",
        "Quality",
        "left",
      ),
      faq(
        "Can it plug into our DMS?",
        "Integrations can connect document intake and export with common repository workflows.",
        "Integrations",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("payflow-saas");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "PayFlow SaaS Billing Platform Case Study",
    metaDescription:
      "PayFlow SaaS automates B2B subscription billing and invoicing for 200+ merchants while cutting failed transaction rates by 28%.",
    highlights: ["200+ merchants onboarded", "28% fewer failed payments", "Automated recurring billing"],
    slides: [
      {
        label: "Billing dashboard",
        caption: "Subscriptions, invoices, and retries in one view.",
        image: img(
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=750&q=80",
          "SaaS billing and analytics dashboard",
        ),
      },
      {
        label: "Merchant onboarding",
        caption: "Faster setup for B2B SaaS billing configurations.",
        image: img(
          "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&h=750&q=80",
          "Fintech payment operations workspace",
        ),
      },
      {
        label: "Revenue analytics",
        caption: "Failed payment trends and recovery insights.",
        image: img(
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=750&q=80",
          "Subscription revenue charts and invoices",
        ),
      },
    ],
    overview: [
      "PayFlow SaaS is a subscription billing and invoicing platform for B2B software companies that need reliable recurring revenue operations.",
      "Built for merchants in Singapore and beyond, it automates invoices, payment retries, and dunning so finance teams are not stuck in spreadsheet recovery loops.",
      "With 200+ merchants onboarded, failed transaction rates dropped as retry logic and clearer invoicing took hold.",
    ],
    problem:
      "B2B SaaS merchants needed reliable recurring billing with fewer failed transactions. Manual invoicing and weak retry handling created revenue leakage and angry customers when cards failed silently.",
    solutions: [
      "Developed automated recurring billing with configurable plans and invoicing.",
      "Implemented smart payment retries and recovery workflows for failed charges.",
      "Gave merchants dashboards for MRR, failures, and customer billing status.",
      "Streamlined onboarding so new merchants could launch billing without heavy engineering.",
    ],
    whyNeedProduct: {
      title: "Why SaaS companies need PayFlow",
      paragraphs: [
        "Recurring revenue dies in the gaps between invoices, failed cards, and delayed follow-up. PayFlow closes those gaps with automation finance teams can trust.",
      ],
      reasons: [
        "Automate recurring invoices instead of monthly manual work",
        "Recover more failed payments with structured retries",
        "Give finance clear visibility into churn risk from billing failures",
        "Onboard merchants and plans without custom one-off scripts",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Billing model workshops",
        description:
          "Mapped plan types, tax needs, dunning policies, and payment provider constraints.",
      },
      {
        step: 2,
        title: "Core billing engine",
        description:
          "Built subscription states, invoice generation, and webhook-driven payment updates.",
      },
      {
        step: 3,
        title: "Merchant pilots",
        description:
          "Onboarded early merchants, tuned retry windows, and validated reconciliation.",
      },
      {
        step: 4,
        title: "Scale & analytics",
        description:
          "Expanded the merchant base and shipped failure analytics for continuous recovery gains.",
      },
    ],
    clientFeedback: [
      {
        quote:
          "Failed payments stopped being a mystery. Retries and dashboards paid for themselves quickly.",
        author: "Priya Tan",
        role: "Head of Finance, B2B SaaS",
      },
      {
        quote:
          "We onboarded merchants faster than our old bespoke billing scripts ever allowed.",
        author: "Jon Wei",
        role: "Product Lead",
      },
    ],
    modulePictures: [],
    video: {
      title: "PayFlow SaaS billing demo",
      youtubeId: "9bZkp7q19f0",
    },
    outcome: [
      "200+ merchants onboarded to automated billing",
      "28% fewer failed transactions",
      "Recurring invoicing handled without manual month-end chaos",
      "Clearer recovery analytics for revenue operations",
    ],
    faqs: [
      faq(
        "Which payment providers can PayFlow use?",
        "The platform is designed around provider webhooks and can be configured for the processors your merchants already rely on.",
        "Payments",
        "left",
      ),
      faq(
        "Can we support usage-based plans?",
        "Subscription configurations support common B2B patterns; usage components can be extended based on metering needs.",
        "Plans",
        "right",
      ),
      faq(
        "How are failed payments recovered?",
        "Configurable retry schedules and merchant-facing status views help recover revenue before churn sets in.",
        "Recovery",
        "left",
      ),
      faq(
        "Is this only for Singapore?",
        "The launch market was Singapore, but the billing architecture is built for multi-market B2B SaaS operations.",
        "Markets",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("workforce-hrm");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "Workforce HRM Payroll & Attendance Case Study",
    metaDescription:
      "Workforce HRM unifies payroll, attendance, and performance for enterprises—15,000 employees, 40 branches, 99.9% payroll accuracy.",
    highlights: ["15,000 employees onboarded", "40 branches live", "99.9% payroll accuracy"],
    slides: [
      {
        label: "Employee directory",
        caption: "Unified profiles across every branch.",
        image: img(
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&h=750&q=80",
          "Human resources management software interface",
        ),
      },
      {
        label: "Payroll runs",
        caption: "Accurate, auditable payroll across large headcount.",
        image: img(
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&h=750&q=80",
          "HR team reviewing payroll reports",
        ),
      },
      {
        label: "Attendance & reviews",
        caption: "Time tracking tied to performance workflows.",
        image: img(
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&h=750&q=80",
          "Managers collaborating on workforce planning",
        ),
      },
    ],
    overview: [
      "Workforce HRM is an all-in-one HRMS covering payroll, attendance, and performance reviews for mid-size enterprises in Pakistan.",
      "The platform onboarded 15,000 employees across 40 branches, replacing fragmented HR spreadsheets and inconsistent local processes.",
      "Payroll accuracy hit 99.9% because attendance, policies, and compensation rules finally lived in one governed system.",
    ],
    problem:
      "HR teams juggled attendance sheets, payroll files, and review documents that never agreed. Branch managers lacked a shared employee record, and payroll errors created costly rework every cycle.",
    solutions: [
      "Delivered a unified employee master with branch-aware roles and permissions.",
      "Automated payroll using attendance, allowances, and policy rules in one run.",
      "Added performance review cycles tied to the same employee profiles.",
      "Gave HR and leadership dashboards for headcount, attendance, and payroll health.",
    ],
    whyNeedProduct: {
      title: "Why enterprises need Workforce HRM",
      paragraphs: [
        "People data scattered across files is a payroll and compliance risk. An HRMS keeps attendance, pay, and performance aligned as you grow across branches.",
      ],
      reasons: [
        "Raise payroll accuracy with a single employee source of truth",
        "Standardize attendance across dozens of locations",
        "Run performance reviews without parallel spreadsheets",
        "Give leadership reliable people metrics in real time",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "HR policy & data audit",
        description:
          "Collected compensation rules, leave policies, and branch org structures.",
      },
      {
        step: 2,
        title: "HRMS configuration",
        description:
          "Modeled employees, attendance devices/integrations, and payroll formulas.",
      },
      {
        step: 3,
        title: "Parallel payroll runs",
        description:
          "Validated results against legacy payroll before switching branches live.",
      },
      {
        step: 4,
        title: "Enterprise rollout",
        description:
          "Onboarded remaining branches, trained HRBPs, and enabled performance modules.",
      },
    ],
    clientFeedback: [
      {
        quote:
          "Payroll week used to be chaos. Accuracy is now something we can actually defend.",
        author: "Ayesha Malik",
        role: "HR Director",
      },
      {
        quote:
          "Branch managers finally see the same employee data we see at head office.",
        author: "Imran Qureshi",
        role: "People Operations Lead",
      },
    ],
    modulePictures: [],
    video: {
      title: "Workforce HRM product overview",
      youtubeId: "kJQP7kiw5Fk",
    },
    outcome: [
      "15,000 employees onboarded across the HRMS",
      "40 branches operating on shared people processes",
      "99.9% payroll accuracy achieved",
      "Attendance and performance reviews tied to one employee record",
    ],
    faqs: [
      faq(
        "Can Workforce HRM handle multi-branch policies?",
        "Yes. Branch-aware configuration supports shared rules with local exceptions where needed.",
        "Structure",
        "left",
      ),
      faq(
        "How do you protect payroll accuracy during cutover?",
        "We run parallel payroll cycles against legacy outputs until variances are understood and resolved.",
        "Payroll",
        "right",
      ),
      faq(
        "Are performance reviews included?",
        "Performance cycles are part of the platform and linked to the same employee profiles used for payroll and attendance.",
        "Performance",
        "left",
      ),
      faq(
        "What size companies is this for?",
        "It is built for mid-size enterprises with multi-branch complexity—thousands of employees, not just small teams.",
        "Fit",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("factoryops");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "FactoryOps Smart Manufacturing Case Study",
    metaDescription:
      "FactoryOps monitors IoT machine uptime, defects, and throughput in real time—cutting unplanned downtime 32% across three factory floors.",
    highlights: ["32% less unplanned downtime", "3 factory floors live", "Real-time IoT monitoring"],
    slides: [
      {
        label: "Live floor dashboard",
        caption: "Uptime, defects, and throughput in one glance.",
        image: img(
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=750&q=80",
          "Smart factory operations monitoring dashboard",
        ),
      },
      {
        label: "Machine health",
        caption: "IoT signals that flag issues before lines stop.",
        image: img(
          "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&h=750&q=80",
          "Industrial manufacturing equipment on factory floor",
        ),
      },
      {
        label: "Throughput insights",
        caption: "Shift-level performance for supervisors and planners.",
        image: img(
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&h=750&q=80",
          "Engineers reviewing production monitoring screens",
        ),
      },
    ],
    overview: [
      "FactoryOps is an IoT-enabled production monitoring system for manufacturers that need live visibility into machine uptime, defects, and throughput.",
      "Deployed across three factory floors in Germany, it helped leadership move from reactive firefighting to earlier intervention on failing assets.",
      "Operators and planners share the same signals, which reduced unplanned downtime and made shift performance measurable instead of anecdotal.",
    ],
    problem:
      "Plant leaders discovered downtime only after output slipped. Defect trends were buried in paper logs, and each floor told a different story about what was actually running.",
    solutions: [
      "Connected machine signals into a real-time monitoring dashboard for uptime and throughput.",
      "Surfaced defect and quality trends so teams could act before scrap piled up.",
      "Standardized floor views so supervisors and planners worked from the same truth.",
      "Alerted maintenance earlier on patterns that historically preceded line stops.",
    ],
    whyNeedProduct: {
      title: "Why manufacturers need FactoryOps",
      paragraphs: [
        "Unplanned downtime is expensive and often visible too late. IoT monitoring turns machine health into an operational signal the whole plant can act on.",
      ],
      reasons: [
        "Detect failing equipment before full line stops",
        "Track defects and throughput by shift and floor",
        "Align maintenance, ops, and planning on live data",
        "Reduce costly surprises in daily production targets",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Floor & signal discovery",
        description:
          "Audited machines, existing PLCs/sensors, and downtime reporting habits.",
      },
      {
        step: 2,
        title: "IoT data architecture",
        description:
          "Defined ingestion, alerting thresholds, and role-based dashboards per floor.",
      },
      {
        step: 3,
        title: "Pilot line deployment",
        description:
          "Instrumented a critical line, validated alerts with maintenance, then expanded.",
      },
      {
        step: 4,
        title: "Multi-floor scale",
        description:
          "Rolled out across three floors and tuned thresholds using early downtime reductions.",
      },
    ],
    clientFeedback: [
      {
        quote:
          "We stopped finding out about downtime from the production report. The floor tells us first.",
        author: "Klaus Weber",
        role: "Plant Operations Manager",
      },
      {
        quote:
          "Maintenance finally gets signals early enough to matter. Scrap conversations changed overnight.",
        author: "Elena Vogt",
        role: "Quality Lead",
      },
    ],
    modulePictures: [],
    video: {
      title: "FactoryOps monitoring demo",
      youtubeId: "RgKAFK5djSk",
    },
    outcome: [
      "32% reduction in unplanned downtime",
      "Three factory floors monitored in real time",
      "Shared visibility into uptime, defects, and throughput",
      "Earlier maintenance intervention on failing assets",
    ],
    faqs: [
      faq(
        "What machines can FactoryOps connect to?",
        "It is designed around common industrial signal sources and can adapt to PLCs and sensors already on the floor.",
        "IoT",
        "left",
      ),
      faq(
        "Do supervisors need new hardware on day one?",
        "Dashboards work in the browser; sensor coverage expands based on the machines you prioritize first.",
        "Rollout",
        "right",
      ),
      faq(
        "How fast do downtime improvements appear?",
        "Pilot lines often show earlier detection quickly; plant-wide gains compound as thresholds and response habits mature.",
        "Results",
        "left",
      ),
      faq(
        "Can quality teams use the same data?",
        "Yes. Defect and throughput views are shared so quality and production respond from one operational picture.",
        "Quality",
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
  .slice(0, 4)
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
    "Explore custom software, SaaS, ERP, CRM, and mobile apps we've designed and shipped for clients in the USA, UK, UAE, Canada, Australia, and Pakistan.",
} as const;
