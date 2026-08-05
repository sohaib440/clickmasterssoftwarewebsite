import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  BrainCircuit,
  Building2,
  ClipboardCheck,
  Cloud,
  Code2,
  Database,
  Glasses,
  Globe2,
  HeartPulse,
  LineChart,
  Palette,
  Server,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Workflow,
} from "lucide-react";

import { contactPath } from "@/lib/landing/constants";
import type {
  ApproachStep,
  ContentBlock,
  ContentImage,
  MainCategoryContent,
} from "@/lib/content/types";
import { subServicesByCategory } from "@/data/subServices";

export type ServiceCardSpan = "wide" | "tall";

export type ServiceCard = {
  title: string;
  description: string;
  /** Dedicated asset under /public/services; omit when missing */
  image?: string;
  imageAlt?: string;
  Icon: LucideIcon;
  AltIcon: LucideIcon;
  tag: string;
  span?: ServiceCardSpan;
  accent: string;
};

/** Canonical main service routes; keep titles aligned with `services` cards */
export const serviceRoutes: Record<string, string> = {
  "Software Development": "/software-development",
  "Mobile App Development": "/mobile-development",
  "Web Development": "/web-development",
  "Ecommerce Development": "/ecommerce-development",
  "UI/UX Design": "/ui-ux-design",
  "Artificial Intelligence": "/artificial-intelligence",
  "Machine Learning": "/machine-learning",
  "Automation Services": "/automation-services",
  "Cloud & DevOps": "/cloud-devops",
  "Data & Business Intelligence": "/data-business-intelligence",
  Cybersecurity: "/cybersecurity",
  "Enterprise Solutions": "/enterprise-solutions",
  "Blockchain Development": "/blockchain-development",
  "Healthcare Software Development": "/healthcare-software-development",
  "AR/VR Development": "/ar-vr-development",
  "Testing & QA": "/testing-and-qa",
};

export const services: ServiceCard[] = [
  {
    title: "Software Development",
    description:
      "As a leading software development company and software house, we deliver software development from discovery and architecture through build, launch, and ongoing support for startups and enterprises.",
    image: "/services/software-development.webp",
    imageAlt: "Software development services illustration",
    Icon: ShieldCheck,
    AltIcon: Globe2,
    tag: "Enterprise",
    span: "wide",
    accent: "#3b82f6",
  },
  {
    title: "Mobile App Development",
    description:
      "Secure, scalable iOS and Android apps built by our software house with native quality and shared logic where it speeds delivery without sacrificing performance.",
    image: "/services/mobile-development.webp",
    imageAlt: "Mobile application development services illustration",
    Icon: Smartphone,
    AltIcon: ShieldCheck,
    tag: "Cross-Platform",
    accent: "#10b981",
  },
  {
    title: "Web Development",
    description:
      "Modern web applications from a trusted software company with responsive design, strong performance, and SEO-friendly architecture for every device and browser.",
    image: "/services/web-development.webp",
    imageAlt: "Web development services illustration",
    Icon: Globe2,
    AltIcon: Server,
    tag: "Web",
    accent: "#ec4899",
  },
  {
    title: "Ecommerce Development",
    description:
      "Storefronts, marketplaces, and checkout systems from a leading software company built for conversion, catalog complexity, and reliable order operations.",
    Icon: ShoppingCart,
    AltIcon: Globe2,
    tag: "Commerce",
    accent: "#f97316",
  },
  {
    title: "UI/UX Design",
    description:
      "Research-led interfaces and design systems from a leading software house, focused on usability, consistency, and conversion from wireframes to design QA.",
    image: "/services/ui-ux-design.webp",
    imageAlt: "UI/UX design services illustration",
    Icon: Palette,
    AltIcon: Globe2,
    tag: "Design",
    accent: "#f59e0b",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Production AI from a top rated software company covering automation, insights, agents, NLP, and vision systems with clear guardrails, monitoring, and human oversight.",
    image: "/services/artificial-intelligence.webp",
    imageAlt: "Artificial intelligence services illustration",
    Icon: BrainCircuit,
    AltIcon: Database,
    tag: "Intelligence",
    span: "tall",
    accent: "#8b5cf6",
  },
  {
    title: "Machine Learning",
    description:
      "ML models and pipelines from a top rated software house covering data prep, training, evaluation, and production inference so predictions run reliably at scale.",
    image: "/services/machine-learning.webp",
    imageAlt: "Machine learning services illustration",
    Icon: LineChart,
    AltIcon: BrainCircuit,
    tag: "ML",
    accent: "#14b8a6",
  },
  {
    title: "Automation Services",
    description:
      "Workflow, RPA, and document automation from a best software company so teams eliminate repetitive work and move data between systems reliably.",
    Icon: Workflow,
    AltIcon: Server,
    tag: "Ops",
    accent: "#a855f7",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Secure cloud-native infrastructure and CI/CD from a best software company with monitoring and scalable DevOps workflows so teams ship reliably and grow with confidence.",
    image: "/services/cloud-devops.webp",
    imageAlt: "Cloud and DevOps services illustration",
    Icon: Cloud,
    AltIcon: Server,
    tag: "DevSecOps",
    span: "wide",
    accent: "#0ea5e9",
  },
  {
    title: "Data & Business Intelligence",
    description:
      "Data engineering, warehousing, and analytics from a leading software company delivering trusted dashboards, reports, and decisions your teams can act on.",
    image: "/services/data-business-intelligence.webp",
    imageAlt: "Data and business intelligence services illustration",
    Icon: Database,
    AltIcon: LineChart,
    tag: "Analytics",
    accent: "#6366f1",
  },
  {
    title: "Cybersecurity",
    description:
      "Application security, audits, and compliance readiness from a trusted software house so products stay resilient as they scale.",
    Icon: Shield,
    AltIcon: ShieldCheck,
    tag: "Security",
    accent: "#ef4444",
  },
  {
    title: "Enterprise Solutions",
    description:
      "ERP, CRM, and internal platforms from a leading software development company that replace disconnected tools with one system of record.",
    Icon: Building2,
    AltIcon: Code2,
    tag: "Enterprise",
    accent: "#64748b",
  },
  {
    title: "Blockchain Development",
    description:
      "Smart contracts, dApps, and Web3 integrations from a software company built for secure on-chain workflows and real product use cases.",
    Icon: Blocks,
    AltIcon: Shield,
    tag: "Web3",
    accent: "#22c55e",
  },
  {
    title: "Healthcare Software Development",
    description:
      "Hospital, clinic, and telemedicine platforms from a software house designed for clinical workflows, patient data, and compliance needs.",
    Icon: HeartPulse,
    AltIcon: Database,
    tag: "Health",
    accent: "#e11d48",
  },
  {
    title: "AR/VR Development",
    description:
      "Augmented and virtual reality experiences from a top rated software company for training, retail, and immersive product visualization.",
    Icon: Glasses,
    AltIcon: Smartphone,
    tag: "Immersive",
    accent: "#06b6d4",
  },
  {
    title: "Testing & QA",
    description:
      "Manual and automated testing from our software development company across web, mobile, and APIs covering functional, regression, and performance checks before release.",
    image: "/services/testing-and-qa.webp",
    imageAlt: "Software testing and QA services illustration",
    Icon: ClipboardCheck,
    AltIcon: ShieldCheck,
    tag: "Quality",
    accent: "#42f560",
  },
];

/** Default section copy for main category pages; override per category via `sections` on each entry */
export const defaultCategorySections = {
  offerings: {
    title: "What we deliver",
    subtitle: (label: string) =>
      `Focused capabilities within ${label.toLowerCase()}, each scoped to your timeline and team. Built by a leading [software development company](/) and [software house](/). Open any capability below.`,
  },
  highlights: { title: "Why teams choose us" },
  approach: { title: "Our approach" },
  related: { title: "Explore more capabilities" },
  cta: {
    title: "Ready to build with Software Development Company?",
    description: (label: string) =>
      `Tell us about your ${label.toLowerCase()} needs, we'll respond within one business day.`,
    buttonLabel: "Get in touch",
    buttonHref: contactPath,
  },
} as const;

const defaultHighlights: ContentBlock[] = [
  {
    title: "Senior-led delivery",
    description:
      "Every engagement is staffed with experienced engineers, with no bait-and-switch to junior-only teams.",
  },
  {
    title: "Maintainable by design",
    description:
      "Clear architecture, documentation, and handoff so your team can extend the product after launch.",
  },
  {
    title: "Transparent progress",
    description:
      "Weekly demos and honest timelines so you always know what shipped and what is next.",
  },
  {
    title: "Outcome-focused scoping",
    description:
      "We prioritize the work that moves metrics, not a padded backlog of nice-to-haves that burn budget.",
  },
  {
    title: "Security and quality built in",
    description:
      "Code review, testing, and secure defaults are part of delivery, not an afterthought before go-live.",
  },
  {
    title: "Global collaboration, clear ownership",
    description:
      "Timezone-friendly communication with a single accountable team across the UK, USA, Canada, Australia, UAE, and Pakistan.",
  },
];

const defaultApproach: ApproachStep[] = [
  {
    step: "01",
    title: "Discover & scope",
    description: "We map users, constraints, and success metrics before writing production code.",
  },
  {
    step: "02",
    title: "Architect & design",
    description: "Technical design and UX align on the lightest path to a durable solution.",
  },
  {
    step: "03",
    title: "Build & iterate",
    description:
      "Trunk-based development with continuous integration and regular stakeholder demos.",
  },
  {
    step: "04",
    title: "Launch & support",
    description: "Production rollout, observability, and a clean handoff or ongoing partnership.",
  },
];

type CategoryInput = {
  slug: string;
  icon: LucideIcon;
  label: string;
  exploreCta: string;
  tagline: string;
  description: string;
  metaDescription: string;
  pageTitle?: string;
  heroImage?: ContentImage;
  highlights?: ContentBlock[];
  approach?: ApproachStep[];
  faqs?: MainCategoryContent["faqs"];
};

function defineCategory(input: CategoryInput): MainCategoryContent {
  return {
    ...input,
    subCategories: subServicesByCategory[input.slug] ?? [],
    highlights: input.highlights ?? defaultHighlights,
    approach: input.approach ?? defaultApproach,
  };
}

/**
 * Main category pages at /{slug}. Sub-services live in data/subServices.tsx.
 */
export const mainCategories: MainCategoryContent[] = [
  defineCategory({
    slug: "software-development",
    icon: Code2,
    label: "Software Development",
    exploreCta: "Explore software development",
    pageTitle: "Software Development Company | Next Software Dev",
    tagline:
      "Leading Software Development Company Building Products Businesses Depend On",
    description:
      "As a leading software development company and software house, we design, build, and maintain software for startups, SMBs, and enterprises. Our software development services cover custom applications, enterprise systems, SaaS products, MVPs, and API integrations from discovery and architecture through build, launch, and ongoing support so your team ships with clarity and confidence.",
    metaDescription:
      "Leading software development company and software house for custom apps, SaaS, MVPs, and API integrations. Senior-led delivery. Get a free quote.",
    heroImage: {
      src: "/services/software-development.webp",
      alt: "Software development services",
      width: 800,
      height: 800,
    },
    faqs: [
      {
        column: "left",
        tag: "Overview",
        question: "What does a custom software development company actually build?",
        answer:
          "A custom software development company designs, builds, and maintains software built specifically around your business processes web applications, mobile apps, ERP and CRM systems, SaaS platforms, and internal tools. Unlike off-the-shelf software, everything is built to match how your business actually works, not the other way around.",
      },
      {
        column: "left",
        tag: "Global",
        question: "Do you work with clients in the UK, USA, Canada, Australia, and UAE?",
        answer:
          "Yes. The majority of our engagements are with international clients across the UK, USA, Canada, Australia, and UAE, alongside clients based in Pakistan. We structure communication and delivery around timezone overlap with each region, and manage projects using Slack, Zoom, and project trackers so you always know exactly where your project stands.",
      },
      {
        column: "left",
        tag: "Pricing",
        question: "How much does custom software development cost?",
        answer:
          "Cost depends on scope and complexity. A simple MVP or internal tool typically starts in the low thousands (USD), while a full enterprise platform ERP, SaaS product, or multi-module system is a larger investment spread across development phases. We provide a clear, itemized quote after an initial discovery call, so you know the full cost before any contract is signed.",
      },
      {
        column: "left",
        tag: "Timeline",
        question: "How long does a custom software project take?",
        answer:
          "A focused MVP can typically be delivered in 6 to 10 weeks. A mid-complexity web or mobile application usually takes 3 to 5 months. Larger enterprise systems with multiple modules and integrations can take 6+ months. You'll receive a realistic, milestone-based timeline during the planning phase not an optimistic one that slips.",
      },
      {
        column: "left",
        tag: "Offshore",
        question: "Why hire a software development company in Pakistan instead of locally?",
        answer:
          "Pakistan-based software development companies typically offer significantly lower rates than US, UK, or UAE-based firms for comparable engineering quality largely due to cost-of-living differences, not a difference in skill. With English-speaking, timezone-flexible teams and modern collaboration tools, the distance is rarely felt day-to-day once a project is underway.",
      },
      {
        column: "right",
        tag: "Engagement",
        question: "Can I hire a dedicated developer or team instead of a fixed-scope project?",
        answer:
          "Yes. You can hire a single dedicated developer or a full team that works exclusively on your product during agreed hours, integrates with your existing tools and processes, and reports directly to you. This model works well for ongoing product development rather than a one-off build.",
      },
      {
        column: "right",
        tag: "Stack",
        question: "What technologies do you build with?",
        answer:
          "Our core stack is the MERN stack React, Next.js, Node.js, and Express along with Django and Python for backend and ML-driven work, and PostgreSQL or MongoDB for data layers. We select the stack based on your project's actual requirements rather than defaulting to one technology for everything.",
      },
      {
        column: "right",
        tag: "Legal",
        question: "Do you sign an NDA before discussing our project idea?",
        answer:
          "Yes. We sign a mutual Non-Disclosure Agreement before any detailed project discussion, and your idea, data, and business details remain fully confidential throughout and after the engagement.",
      },
      {
        column: "right",
        tag: "Support",
        question: "What happens after the software launches?",
        answer:
          "Launch isn't the finish line. We provide post-launch support and flexible maintenance plans so your software keeps working as your business grows, your user base scales, and requirements evolve.",
      },
      {
        column: "right",
        tag: "Getting started",
        question: "How do we get started?",
        answer:
          "Book a free discovery call. We'll discuss your goals, rough scope, and timeline, and follow up with a clear proposal no obligation, no pressure.",
      },
    ],
  }),
  defineCategory({
    slug: "mobile-development",
    icon: Smartphone,
    label: "Mobile App Development",
    exploreCta: "Explore mobile app development",
    tagline:
      "Top Rated Software House for Mobile App Development That Scales",
    description:
      "As a top rated software house, we deliver mobile app development for iOS and Android with native quality and production reliability. Our mobile practice includes Android, iOS, Flutter, React Native, cross-platform, and progressive web apps so your product feels fast, secure, and ready for real users from first release through growth.",
    metaDescription:
      "Top rated software house for mobile app development: Android, iOS, Flutter, React Native, cross-platform, and PWA. Senior-led delivery.",
    heroImage: {
      src: "/services/mobile-development.webp",
      alt: "Mobile development services",
      width: 800,
      height: 800,
    },
  }),
  defineCategory({
    slug: "web-development",
    icon: Globe2,
    label: "Web Development",
    exploreCta: "Explore web development",
    tagline:
      "Best Software Company for Web Development Built to Perform",
    description:
      "As a best software company for modern web work, we build websites and web applications that are fast, accessible, and SEO-friendly. Our web development services cover custom websites, web applications, frontend, backend, full stack, and CMS platforms so brands and product teams get maintainable systems that convert and scale.",
    metaDescription:
      "Best software company for web development: custom websites, web apps, frontend, backend, full stack, and CMS. SEO-friendly senior delivery.",
    heroImage: {
      src: "/services/web-development.webp",
      alt: "Web development services",
      width: 800,
      height: 800,
    },
  }),
  defineCategory({
    slug: "ecommerce-development",
    icon: ShoppingCart,
    label: "Ecommerce Development",
    exploreCta: "Explore ecommerce development",
    tagline:
      "Leading Software Company for Ecommerce Development That Converts",
    description:
      "As a leading software company, we engineer ecommerce platforms that balance conversion, catalog complexity, and reliable operations. Our ecommerce development services include Shopify, WooCommerce, Magento, custom storefronts, multi-vendor marketplaces, and payment gateway integrations so checkout, inventory, and fulfillment stay dependable as you grow.",
    metaDescription:
      "Leading software company for ecommerce development: Shopify, WooCommerce, Magento, custom stores, marketplaces, and payments.",
  }),
  defineCategory({
    slug: "ui-ux-design",
    icon: Palette,
    label: "UI/UX Design",
    exploreCta: "Explore UI/UX design",
    tagline:
      "Leading Software House for UI/UX Design That Converts",
    description:
      "As a leading software house, our UI/UX design practice turns complex products into clear, confident experiences. We deliver UI design, UX design, wireframing, prototyping, design systems, and usability testing so interfaces stay consistent across breakpoints, feel easy to use, and support conversion from discovery through design QA.",
    metaDescription:
      "Leading software house for UI/UX design: UI, UX, wireframing, prototyping, design systems, and usability testing.",
    heroImage: {
      src: "/services/ui-ux-design.webp",
      alt: "UI/UX design services",
      width: 800,
      height: 800,
    },
    highlights: [
      {
        title: "Research-led",
        description:
          "We validate assumptions with evidence, not opinions, reducing rework downstream.",
      },
      {
        title: "Systems thinking",
        description: "Patterns and components that scale across teams, products, and releases.",
      },
      {
        title: "Engineering-aware",
        description:
          "Designs that respect technical constraints and ship without endless revision cycles.",
      },
      {
        title: "Conversion-minded UI",
        description:
          "Layouts and flows shaped to support clarity, trust, and the actions that grow your product.",
      },
      {
        title: "Accessible by default",
        description:
          "Contrast, focus states, and inclusive patterns baked into the system so more users can succeed.",
      },
      {
        title: "Design-to-dev handoff",
        description:
          "Specs, tokens, and component notes that engineers can implement without guessing intent.",
      },
    ],
  }),
  defineCategory({
    slug: "artificial-intelligence",
    icon: BrainCircuit,
    label: "Artificial Intelligence",
    exploreCta: "Explore AI services",
    tagline:
      "Top Rated Software Company for Artificial Intelligence in Production",
    description:
      "As a top rated software company, we ship artificial intelligence that works in real products, not slide decks. Our AI services cover AI software development, generative AI, chatbots, AI agents, computer vision, and NLP with clear guardrails, monitoring, and human oversight so automation and insights stay safe, measurable, and useful.",
    metaDescription:
      "Top rated software company for artificial intelligence: generative AI, chatbots, agents, computer vision, and NLP.",
    heroImage: {
      src: "/services/artificial-intelligence.webp",
      alt: "Artificial intelligence services",
      width: 800,
      height: 800,
    },
  }),
  defineCategory({
    slug: "machine-learning",
    icon: LineChart,
    label: "Machine Learning",
    exploreCta: "Explore ML services",
    tagline:
      "Top Rated Software House for Machine Learning at Scale",
    description:
      "As a top rated software house, we build machine learning systems that move from notebook to production with discipline. Our ML services include predictive analytics, deep learning, MLOps, image recognition, recommendation systems, and model deployment so forecasts, rankings, and detections run reliably under real traffic and cost constraints.",
    metaDescription:
      "Top rated software house for machine learning: predictive analytics, deep learning, MLOps, image recognition, and model deployment.",
    heroImage: {
      src: "/services/machine-learning.webp",
      alt: "Machine learning services",
      width: 800,
      height: 800,
    },
  }),
  defineCategory({
    slug: "automation-services",
    icon: Workflow,
    label: "Automation Services",
    exploreCta: "Explore automation services",
    tagline:
      "Best Software Company for Automation Services That Stick",
    description:
      "As a best software company for operations tooling, we remove repetitive work with automation that your teams can trust. Our automation services cover business process automation, RPA, workflow automation, CRM automation, ERP automation, and AI workflow automation so data moves cleanly between systems and people focus on higher-value work.",
    metaDescription:
      "Best software company for automation services: BPA, RPA, workflow, CRM, ERP, and AI workflow automation.",
  }),
  defineCategory({
    slug: "cloud-devops",
    icon: Cloud,
    label: "Cloud & DevOps",
    exploreCta: "Explore cloud services",
    tagline:
      "Leading Software Development Company for Cloud & DevOps",
    description:
      "As a leading software development company, we make infrastructure as dependable as the product it runs. Our Cloud and DevOps services span AWS, Azure, GCP, Docker, Kubernetes, and CI/CD pipeline setup so deployments stay secure, observable, and ready to scale from first release to multi-region growth.",
    metaDescription:
      "Leading software development company for Cloud and DevOps: AWS, Azure, GCP, Docker, Kubernetes, and CI/CD.",
    heroImage: {
      src: "/services/cloud-devops.webp",
      alt: "Cloud and DevOps services",
      width: 800,
      height: 800,
    },
  }),
  defineCategory({
    slug: "data-business-intelligence",
    icon: Database,
    label: "Data & Business Intelligence",
    exploreCta: "Explore data & BI",
    tagline:
      "Leading Software Company for Data & Business Intelligence",
    description:
      "As a leading software company, we turn raw business data into decisions teams can act on. Our data and business intelligence services include Power BI, Tableau, data analytics, data engineering, data visualization, and BI platforms so executives and operators share trusted metrics instead of conflicting spreadsheets.",
    metaDescription:
      "Leading software company for data and BI: Power BI, Tableau, analytics, data engineering, visualization, and BI solutions.",
    heroImage: {
      src: "/services/data-business-intelligence.webp",
      alt: "Data and business intelligence services",
      width: 800,
      height: 800,
    },
  }),
  defineCategory({
    slug: "cybersecurity",
    icon: Shield,
    label: "Cybersecurity",
    exploreCta: "Explore cybersecurity",
    tagline:
      "Trusted Software House for Cybersecurity That Protects Delivery",
    description:
      "As a trusted software house, we build security into how products are designed, shipped, and operated. Our cybersecurity services cover penetration testing, vulnerability assessment, application security, cloud security, security compliance, and security monitoring so risks are found early and controls scale with your product.",
    metaDescription:
      "Trusted software house for cybersecurity: penetration testing, vulnerability assessment, app and cloud security, compliance, and monitoring.",
  }),
  defineCategory({
    slug: "enterprise-solutions",
    icon: Building2,
    label: "Enterprise Solutions",
    exploreCta: "Explore enterprise solutions",
    tagline:
      "Leading Software Development Company for Enterprise Solutions",
    description:
      "As a leading software development company, we replace disconnected tools with systems of record your organization can run on. Our enterprise solutions cover ERP, CRM, HRM, supply chain management, enterprise integration, and document management so finance, operations, and leadership share one reliable platform.",
    metaDescription:
      "Leading software development company for enterprise solutions: ERP, CRM, HRM, supply chain, integration, and document management.",
  }),
  defineCategory({
    slug: "blockchain-development",
    icon: Blocks,
    label: "Blockchain Development",
    exploreCta: "Explore blockchain development",
    tagline:
      "Software Company for Blockchain Development With Real Utility",
    description:
      "As a software company focused on usable Web3 outcomes, we build blockchain products for real business workflows. Our blockchain development services include smart contracts, dApps, Web3 development, DeFi, cryptocurrency wallets, and NFT marketplaces with security and clarity prioritized over hype demos.",
    metaDescription:
      "Software company for blockchain development: smart contracts, dApps, Web3, DeFi, wallets, and NFT marketplaces.",
  }),
  defineCategory({
    slug: "healthcare-software-development",
    icon: HeartPulse,
    label: "Healthcare Software Development",
    exploreCta: "Explore healthcare software",
    tagline:
      "Software House for Healthcare Software Development Care Teams Trust",
    description:
      "As a software house experienced in clinical workflows, we build healthcare software that respects privacy, reliability, and day-to-day care delivery. Our healthcare software development services include EHR, EMR, telemedicine, hospital management systems, patient portals, and healthcare mobile apps designed for patients and providers.",
    metaDescription:
      "Software house for healthcare software development: EHR, EMR, telemedicine, hospital systems, patient portals, and healthcare apps.",
  }),
  defineCategory({
    slug: "ar-vr-development",
    icon: Glasses,
    label: "AR/VR Development",
    exploreCta: "Explore AR/VR development",
    tagline:
      "Top Rated Software Company for AR/VR Development Experiences",
    description:
      "As a top rated software company for immersive products, we design and engineer AR and VR applications that feel practical in training, retail, and enterprise settings. Our AR/VR development services cover augmented reality, virtual reality, mixed reality, metaverse experiences, 3D visualization, and VR training simulations.",
    metaDescription:
      "Top rated software company for AR/VR development: AR, VR, mixed reality, metaverse, 3D visualization, and VR training.",
  }),
  defineCategory({
    slug: "testing-and-qa",
    icon: ClipboardCheck,
    label: "Testing & QA",
    exploreCta: "Explore QA services",
    tagline:
      "Software Development Company for Testing & QA That Protects Releases",
    description:
      "As a software development company with a senior QA practice, we catch issues before users do. Our testing and QA services cover manual testing, automation testing, performance testing, security testing, API testing, and mobile app testing so releases stay confident across web, mobile, and backend systems.",
    metaDescription:
      "Software development company for testing and QA: manual, automation, performance, security, API, and mobile app testing.",
    heroImage: {
      src: "/services/testing-and-qa.webp",
      alt: "Software testing and QA services",
      width: 800,
      height: 800,
    },
  }),
];
