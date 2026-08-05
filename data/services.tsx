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
  /** Dedicated asset under /public/services — omit when missing */
  image?: string;
  imageAlt?: string;
  Icon: LucideIcon;
  AltIcon: LucideIcon;
  tag: string;
  span?: ServiceCardSpan;
  accent: string;
};

/** Canonical main service routes — keep titles aligned with `services` cards */
export const serviceRoutes: Record<string, string> = {
  "Software Development": "/software-development",
  "Mobile Development": "/mobile-development",
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
    title: "Mobile Development",
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
      `Focused capabilities within ${label.toLowerCase()}—each scoped to your timeline and team.`,
  },
  highlights: { title: "Why teams choose us" },
  approach: { title: "Our approach" },
  related: { title: "Explore more capabilities" },
  cta: {
    title: "Ready to build with Software Development Company?",
    description: (label: string) =>
      `Tell us about your ${label.toLowerCase()} needs—we'll respond within one business day.`,
    buttonLabel: "Get in touch",
    buttonHref: contactPath,
  },
} as const;

const defaultHighlights: ContentBlock[] = [
  {
    title: "Senior-led delivery",
    description:
      "Every engagement is staffed with experienced engineers—no bait-and-switch to junior-only teams.",
  },
  {
    title: "Maintainable by design",
    description:
      "Clear architecture, documentation, and handoff so your team can extend the product after launch.",
  },
  {
    title: "Transparent progress",
    description:
      "Weekly demos and honest timelines—you always know what shipped and what is next.",
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
    description: "Production rollout, observability, and a clean handoff—or ongoing partnership.",
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
  heroImage?: ContentImage;
  highlights?: ContentBlock[];
  approach?: ApproachStep[];
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
    tagline: "Custom Software Development That Solves Real Business Problems",
    description:
      "We design, build, and maintain custom software for startups, SMBs, and enterprises across the USA, UK, UAE, Canada, and Australia as well as businesses here in Pakistan.",
    metaDescription:
      "Custom software development for startups & enterprises in the USA, UK, UAE, Canada & Australia. Fixed-price, senior-only delivery from Pakistan. Get a free quote.",
    heroImage: {
      src: "/services/software-development.webp",
      alt: "Software development services",
      width: 800,
      height: 800,
    },
  }),
  defineCategory({
    slug: "mobile-development",
    icon: Smartphone,
    label: "Mobile Development",
    exploreCta: "Explore mobile development",
    tagline: "iOS and Android apps with native quality and production reliability",
    description:
      "We build secure, scalable mobile applications for startups and enterprises—native where it matters, shared logic where it speeds delivery.",
    metaDescription:
      "Mobile app development for iOS and Android. Native and cross-platform delivery from a senior software house.",
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
    tagline: "Modern web applications built for performance, SEO, and scale",
    description:
      "From marketing sites to complex web apps, we ship responsive experiences with strong performance and maintainable architecture.",
    metaDescription:
      "Web application development with React, Next.js, and modern stacks. SEO-friendly, accessible, and production-ready.",
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
    tagline: "Storefronts and marketplaces engineered for conversion and operations",
    description:
      "We build ecommerce platforms, multi-vendor marketplaces, and checkout experiences that handle real catalog, payment, and fulfillment complexity.",
    metaDescription:
      "Ecommerce development for custom storefronts, marketplaces, and payment integrations. Senior-led delivery for growing brands.",
  }),
  defineCategory({
    slug: "ui-ux-design",
    icon: Palette,
    label: "UI/UX Design",
    exploreCta: "Explore UI/UX design",
    tagline:
      "Interfaces that convert and products that users love—from research and wireframes to high-fidelity UI and design QA.",
    description:
      "Our design practice pairs research with craft. We help you understand users, define design languages, and ship interfaces that feel intentional at every breakpoint.",
    metaDescription:
      "UX research, UI systems, prototyping, and design audits. Calm, confident product experiences from a leading software house.",
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
          "We validate assumptions with evidence, not opinions—reducing rework downstream.",
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
    ],
  }),
  defineCategory({
    slug: "artificial-intelligence",
    icon: BrainCircuit,
    label: "Artificial Intelligence",
    exploreCta: "Explore AI services",
    tagline: "AI systems that automate work and unlock smarter decisions",
    description:
      "We design and ship production AI—from intelligent agents and workflow automation to NLP and computer vision—with clear guardrails, observability, and human oversight.",
    metaDescription:
      "Custom AI development: agents, NLP, and computer vision for startups and enterprises. Production-ready delivery with timezone overlap for US, UK, and UAE.",
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
    tagline: "Machine learning models trained on your data, deployed at scale",
    description:
      "We build custom ML pipelines—from feature engineering and model training to MLOps and inference APIs—so predictions run reliably in production.",
    metaDescription:
      "Custom machine learning development: predictive models, MLOps, and analytics pipelines. Senior ML engineers for international clients.",
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
    tagline: "Automate repetitive work across ops, support, and back-office systems",
    description:
      "We design workflow automation, RPA, and document processing that connects your tools and removes manual bottlenecks.",
    metaDescription:
      "Business process automation, RPA, and document automation for teams that need reliable, integrated workflows.",
  }),
  defineCategory({
    slug: "cloud-devops",
    icon: Cloud,
    label: "Cloud & DevOps",
    exploreCta: "Explore cloud services",
    tagline:
      "Cloud environments on AWS, Google Cloud, and Azure with CI/CD, monitoring, and reliable deploys.",
    description:
      "We design cloud architecture, automate deployments, and instrument systems so you can move fast with confidence—from first deploy to multi-region scale.",
    metaDescription:
      "Cloud architecture, CI/CD, Kubernetes, and observability. Ship reliably on modern infrastructure with a senior DevOps team.",
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
    tagline: "Turn raw business data into trusted dashboards and decisions",
    description:
      "We build data pipelines, warehouses, and BI dashboards stakeholders trust—from first metrics to self-serve analytics.",
    metaDescription:
      "Data engineering, analytics dashboards, and business intelligence platforms for data-driven product and ops teams.",
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
    tagline: "Practical security and compliance built into how you ship software",
    description:
      "We harden applications, run security reviews, and help you reach compliance readiness without slowing delivery.",
    metaDescription:
      "Application security, security audits, and compliance readiness (SOC 2, HIPAA, GDPR) for growing software products.",
  }),
  defineCategory({
    slug: "enterprise-solutions",
    icon: Building2,
    label: "Enterprise Solutions",
    exploreCta: "Explore enterprise solutions",
    tagline: "ERP, CRM, and internal platforms that become your system of record",
    description:
      "We design and build enterprise software—ERP, CRM, and ops platforms—that replace spreadsheets and disconnected tools.",
    metaDescription:
      "Enterprise software development for ERP, CRM, and internal tools. Senior-led delivery for complex business workflows.",
  }),
  defineCategory({
    slug: "blockchain-development",
    icon: Blocks,
    label: "Blockchain Development",
    exploreCta: "Explore blockchain development",
    tagline: "Smart contracts and Web3 products for real business workflows",
    description:
      "We build blockchain integrations, smart contracts, and dApps focused on secure, usable outcomes—not hype demos.",
    metaDescription:
      "Blockchain and Web3 development: smart contracts, dApps, and on-chain integrations for product teams.",
  }),
  defineCategory({
    slug: "healthcare-software-development",
    icon: HeartPulse,
    label: "Healthcare Software Development",
    exploreCta: "Explore healthcare software",
    tagline: "Clinical and patient platforms built for real healthcare workflows",
    description:
      "We develop hospital, clinic, telemedicine, and health data platforms with privacy, reliability, and compliance in mind.",
    metaDescription:
      "Healthcare software development for hospitals, clinics, and telemedicine. Secure, workflow-aware systems for care teams.",
  }),
  defineCategory({
    slug: "ar-vr-development",
    icon: Glasses,
    label: "AR/VR Development",
    exploreCta: "Explore AR/VR development",
    tagline: "Immersive AR and VR experiences for training, retail, and product demos",
    description:
      "We design and engineer augmented and virtual reality applications—from spatial interfaces to headset-ready experiences.",
    metaDescription:
      "AR/VR development for training, retail visualization, and immersive product experiences.",
  }),
  defineCategory({
    slug: "testing-and-qa",
    icon: ClipboardCheck,
    label: "Testing & QA",
    exploreCta: "Explore QA services",
    tagline: "Quality assurance that catches issues before your users do",
    description:
      "Manual and automated testing across web, mobile, and APIs—functional, regression, performance, and security—so you ship with confidence.",
    metaDescription:
      "Software QA and test automation for web, mobile, and APIs. Manual testing, automation, and performance testing from a senior-led team.",
    heroImage: {
      src: "/services/testing-and-qa.webp",
      alt: "Software testing and QA services",
      width: 800,
      height: 800,
    },
  }),
];
