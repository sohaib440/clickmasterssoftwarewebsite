import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  ClipboardCheck,
  Cloud,
  Code2,
  Database,
  Globe2,
  LineChart,
  Palette,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { contactPath } from "@/lib/landing/constants";
import type { MainCategoryContent } from "@/lib/content/types";
import { subServicesByCategory } from "@/data/subServices";
export type ServiceCardSpan = "wide" | "tall";

export type ServiceCard = {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
  AltIcon: LucideIcon;
  tag: string;
  span?: ServiceCardSpan;
  accent: string;
};

export const serviceRoutes: Record<string, string> = {
  "Software Development": "/software-development",
  "Web Development": "/software-development/web-development",
  "Mobile Development": "/software-development/mobile-app-development",
  "Artificial Intelligence": "/artificial-intelligence-ai",
  "UI/UX Systems": "/design-ux",
  "Cloud & DevOps": "/cloud-devops",
  "Machine Learning": "/machine-learning-ml",
  "Data Services": "/data-security",
  "Testing & QA": "/testing-and-qa",
};
export const services: ServiceCard[] = [
  {
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs, from discovery and architecture through build, launch, and ongoing support for startups and enterprises.",
    image: "/services/Software development.png",
    Icon: ShieldCheck,
    AltIcon: Globe2,
    tag: "Enterprise",
    span: "wide",
    accent: "#3b82f6",
  },
  {
    title: "Web Development",
    description:
      "Modern web applications with responsive design, strong performance, and SEO-friendly architecture for a seamless experience on every device and browser.",
    image: "/services/Web Development.png",
    Icon: Globe2,
    AltIcon: Server,
    tag: "Web3 Ready",
    accent: "#ec4899",
  },
  {
    title: "Mobile Development",
    description:
      "Secure, scalable mobile apps for iOS and Android with native quality and shared logic where it speeds delivery, without sacrificing performance or user feel.",
    image: "/services/Mobile Application Development.png",
    Icon: Smartphone,
    AltIcon: ShieldCheck,
    tag: "Cross-Platform",
    accent: "#10b981",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Production AI for automation, insights, and smarter products, including agents, NLP, and vision systems with clear guardrails, monitoring, and human oversight.",
    image: "/services/Artificial Intelligence.png",
    Icon: BrainCircuit,
    AltIcon: Database,
    tag: "Intelligence",
    span: "tall",
    accent: "#8b5cf6",
  },
  {
    title: "UI/UX Systems",
    description:
      "Research-led interfaces and design systems focused on usability, consistency, and conversion, from discovery and wireframes through high-fidelity UI and design QA.",
    image: "/services/UI-UX.png",
    Icon: Palette,
    AltIcon: Globe2,
    tag: "Design",
    accent: "#f59e0b",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Secure cloud-native infrastructure with CI/CD, monitoring, and scalable DevOps workflows so your team can ship reliably, recover quickly, and grow with confidence.",
    image: "/services/CloudOPs and Devops.png",
    Icon: Database,
    AltIcon: Server,
    tag: "DevSecOps",
    span: "wide",
    accent: "#0ea5e9",
  },
  {
    title: "Machine Learning",
    description:
      "Custom ML models and pipelines from data prep and training to evaluation and production inference, so predictions and recommendations run reliably at scale.",
    image: "/services/Machine Learning.png",
    Icon: Server,
    AltIcon: BrainCircuit,
    tag: "Reliability",
    accent: "#14b8a6",
  },
  {
    title: "Data Services",
    description:
      "Data engineering, warehousing, and analytics solutions that turn raw business information into trusted dashboards, reports, and decisions your teams can act on.",
    image: "/services/Data Services.png",
    Icon: Database,
    AltIcon: Palette,
    tag: "Platform",
    accent: "#6366f1",
  },
  {
    title: "Testing & QA",
    description:
      "Manual and automated testing across web, mobile, and APIs, covering functional, regression, and performance checks so issues are caught before users and releases stay confident.",
    image: "/services/Testing-and-QA.png",
    Icon: Database,
    AltIcon: Palette,
    tag: "Platform",
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

/**
 * Main category pages at /{slug}. Sub-services live in data/subServices.tsx.
 */
export const mainCategories: MainCategoryContent[] = [
  {
    slug: "software-development",
    icon: Code2,
    label: "Software Development",
    exploreCta: "Explore software development",
    tagline:
      "Custom Software Development That Solves Real Business Problems",
    description:
      "We design, build, and maintain custom software for startups, SMBs, and enterprises across the USA, UK, UAE, Canada, and Australia as well as businesses here in Pakistan.",
    metaDescription:
      "Custom software development for startups & enterprises in the USA, UK, UAE, Canada & Australia. Fixed-price, senior-only delivery from Pakistan. Get a free quote.",
    heroImage: {
      src: "/services/Software development.png",
      alt: "Software development services",
      width: 800,
      height: 800,
    },
    subCategories: subServicesByCategory["software-development"],
    highlights: [
      {
        title: "Senior-led delivery",
        description:
          "Every sprint is staffed with experienced engineers—no bait-and-switch to junior-only teams.",
      },
      {
        title: "Maintainable by design",
        description:
          "Tests, documentation, and clear architecture so your team can extend the product after launch.",
      },
      {
        title: "Transparent progress",
        description:
          "Weekly demos and honest timelines—you always know what shipped and what is next.",
      },
    ],
    approach: [
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
    ],
  },
  {
    slug: "design-ux",
    icon: Palette,
    label: "Design & UI/UX",
    exploreCta: "Explore design services",
    tagline:
      "Interfaces that convert and products that users love. We move from discovery and user research through wireframes to high-fidelity Figma designs and stay involved throughout development to make sure every pixel ships as designed.",
    description:
      "Our design practice pairs research with craft. We help you understand users, define design languages, and ship interfaces that feel intentional at every breakpoint.",
    metaDescription:
      "UX research, UI systems, prototyping, and design audits. Software Development Company Software creates calm, confident product experiences.",
    heroImage: {
      src: "/services/UI-UX.png",
      alt: "Design and UI/UX services",
      width: 800,
      height: 800,
    },
    subCategories: subServicesByCategory["design-ux"],
    highlights: [
      {
        title: "Research-led",
        description: "We validate assumptions with evidence, not opinions—reducing rework downstream.",
      },
      {
        title: "Systems thinking",
        description: "Patterns and components that scale across teams, products, and releases.",
      },
      {
        title: "Engineering-aware",
        description: "Designs that respect technical constraints and ship without endless revision cycles.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Understand context",
        description: "Stakeholder workshops and user research to frame the problem space.",
      },
      {
        step: "02",
        title: "Explore & prototype",
        description: "Low- and high-fidelity flows tested with users before build begins.",
      },
      {
        step: "03",
        title: "Define the system",
        description: "Visual language, components, and specs ready for implementation.",
      },
      {
        step: "04",
        title: "Partner in delivery",
        description: "Design QA and iteration through launch so the shipped product matches intent.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    icon: Cloud,
    label: "Cloud & DevOps",
    exploreCta: "Explore cloud services",
    tagline:
      "Your software is only as reliable as the infrastructure underneath it. We architect, deploy and manage cloud environments on AWS, Google Cloud and Azure with full CI/CD automation, monitoring and zero-downtime deployments.",
    description:
      "We design cloud architecture, automate deployments, and instrument systems so you can move fast with confidence. From first deploy to multi-region scale, we focus on reliability and developer experience.",
    metaDescription:
      "Cloud architecture, CI/CD, Kubernetes, and observability. Software Development Company Software helps teams ship reliably on modern infrastructure.",
    heroImage: {
      src: "/services/CloudOPs and Devops.png",
      alt: "Cloud and DevOps services",
      width: 800,
      height: 800,
    },
    subCategories: subServicesByCategory["cloud-devops"],
    highlights: [
      {
        title: "Security first",
        description: "IAM, secrets management, and network policies aligned with compliance needs.",
      },
      {
        title: "Cost conscious",
        description: "Architecture and autoscaling choices that balance performance with spend.",
      },
      {
        title: "Developer-friendly",
        description: "Platforms your engineers enjoy using—not black boxes only ops can touch.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Assess & plan",
        description: "Current-state review, risks, and a phased roadmap for infrastructure maturity.",
      },
      {
        step: "02",
        title: "Automate delivery",
        description: "Pipelines and environments that mirror production with confidence.",
      },
      {
        step: "03",
        title: "Harden & observe",
        description: "Monitoring, alerting, and disaster recovery exercised—not just documented.",
      },
      {
        step: "04",
        title: "Enable your team",
        description: "Runbooks, training, and handoff so operations stay sustainable in-house.",
      },
    ],
  },
  {
    slug: "data-security",
    icon: Shield,
    label: "Data & Analytics",
    exploreCta: "Explore data services",
    tagline:
      "Turn raw business data into decisions. We build data pipelines, custom reporting dashboards, business intelligence tools and machine learning models that give Pakistani businesses the same analytical edge as global enterprises.",
    description:
      "We build analytics pipelines, dashboards stakeholders trust, and security practices that scale with your product. From first metrics to compliance readiness, we help you grow with guardrails.",
    metaDescription:
      "Analytics dashboards, data pipelines, security audits, and compliance. Software Development Company Software for data-driven, secure products.",
    heroImage: {
      src: "/services/Data Services.png",
      alt: "Data and analytics services",
      width: 800,
      height: 800,
    },
    subCategories: subServicesByCategory["data-security"],
    highlights: [
      {
        title: "Trusted numbers",
        description: "Data models and definitions everyone agrees on—no conflicting dashboard versions.",
      },
      {
        title: "Practical security",
        description: "Controls that fit your stage—not enterprise theater on a startup budget.",
      },
      {
        title: "Cross-functional",
        description: "We work with legal, ops, and engineering so compliance and velocity coexist.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Inventory & prioritize",
        description: "Data sources, risks, and regulatory drivers mapped to a clear action plan.",
      },
      {
        step: "02",
        title: "Build foundations",
        description: "Pipelines, access controls, and monitoring for data and security posture.",
      },
      {
        step: "03",
        title: "Validate & report",
        description: "Testing, audits, and dashboards that prove progress to stakeholders.",
      },
      {
        step: "04",
        title: "Operate & improve",
        description: "Ongoing reviews as the product and threat landscape evolve.",
      },
    ],
  },
  {
    slug: "artificial-intelligence-ai",
    icon: BrainCircuit,
    label: "Artificial Intelligence",
    exploreCta: "Explore AI services",
    tagline: "AI systems that automate work and unlock smarter decisions",
    description:
      "We design and ship production AI—from intelligent agents and workflow automation to NLP and computer vision—integrated into your product with clear guardrails, observability, and human oversight where it matters.",
    metaDescription:
      "Custom AI development: agents, automation, NLP, and computer vision for startups and enterprises. Production-ready delivery from Pakistan with US, UK, and UAE timezone overlap.",
    heroImage: {
      src: "/services/Artificial Intelligence.png",
      alt: "Artificial intelligence services",
      width: 800,
      height: 800,
    },
    subCategories: subServicesByCategory["artificial-intelligence-ai"],
    highlights: [
      {
        title: "Production-first AI",
        description:
          "We ship models and agents inside real products—not slide decks—with monitoring, fallbacks, and cost controls.",
      },
      {
        title: "Responsible by design",
        description:
          "Privacy, prompt safety, and evaluation harnesses built in before features reach your users.",
      },
      {
        title: "Integrated delivery",
        description:
          "AI wired to your APIs, data, and UX by the same engineers who build the rest of your stack.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Define the use case",
        description: "Map workflows, data sources, and success metrics so AI solves a real business problem.",
      },
      {
        step: "02",
        title: "Prototype & evaluate",
        description: "Rapid experiments with benchmarked quality, latency, and cost before full build-out.",
      },
      {
        step: "03",
        title: "Integrate & harden",
        description: "Production APIs, guardrails, logging, and human-in-the-loop paths where needed.",
      },
      {
        step: "04",
        title: "Monitor & improve",
        description: "Feedback loops, retraining plans, and iteration as usage and data evolve.",
      },
    ],
  },
  {
    slug: "machine-learning-ml",
    icon: LineChart,
    label: "Machine Learning",
    exploreCta: "Explore ML services",
    tagline: "Machine learning models trained on your data, deployed at scale",
    description:
      "We build custom ML pipelines—from feature engineering and model training to MLOps and inference APIs—so predictions and recommendations run reliably in production, not just in notebooks.",
    metaDescription:
      "Custom machine learning development: predictive models, MLOps, and analytics pipelines. Senior ML engineers for international clients.",
    heroImage: {
      src: "/services/Machine Learning.png",
      alt: "Machine learning services",
      width: 800,
      height: 800,
    },
    subCategories: subServicesByCategory["machine-learning-ml"],
    highlights: [
      {
        title: "End-to-end ML",
        description:
          "Data prep, training, deployment, and monitoring handled by one team—no handoffs between silos.",
      },
      {
        title: "Explainable outcomes",
        description:
          "Metrics, dashboards, and documentation stakeholders can trust—not black-box demos.",
      },
      {
        title: "Scalable inference",
        description:
          "Batch or real-time serving architectures sized for your traffic and budget.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Data & feasibility",
        description: "Audit data quality, label strategy, and whether ML is the right tool for the job.",
      },
      {
        step: "02",
        title: "Train & validate",
        description: "Iterative modeling with held-out evaluation and bias checks before promotion.",
      },
      {
        step: "03",
        title: "Deploy & serve",
        description: "Pipelines, APIs, and infrastructure for reliable inference in your environment.",
      },
      {
        step: "04",
        title: "Measure & retrain",
        description: "Drift detection, performance tracking, and scheduled model updates.",
      },
    ],
  },
  {
    slug: "testing-and-qa",
    icon: ClipboardCheck,
    label: "Testing & QA",
    exploreCta: "Explore QA services",
    tagline: "Quality assurance that catches issues before your users do",
    description:
      "Manual and automated testing across web, mobile, and APIs—functional, regression, performance, and security—so you ship with confidence and fewer production surprises.",
    metaDescription:
      "Software QA and test automation for web, mobile, and APIs. Manual testing, Selenium/Cypress automation, and performance testing from a senior-led team.",
    heroImage: {
      src: "/services/Testing-and-QA.png",
      alt: "Software testing and QA services",
      width: 800,
      height: 800,
    },
    subCategories: subServicesByCategory["testing-and-qa"],
    highlights: [
      {
        title: "Risk-based testing",
        description:
          "We prioritize what breaks your business—checkout, auth, integrations—not checkbox coverage.",
      },
      {
        title: "Automation where it pays",
        description:
          "Regression suites that run on every build without flaky tests that erode trust.",
      },
      {
        title: "Clear reporting",
        description:
          "Repro steps, severity, and release readiness your team can act on immediately.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Assess & plan",
        description: "Review architecture, critical paths, and existing coverage to define a QA strategy.",
      },
      {
        step: "02",
        title: "Design test cases",
        description: "Functional, edge-case, and regression scenarios aligned to user journeys.",
      },
      {
        step: "03",
        title: "Execute & automate",
        description: "Manual passes plus automation for high-value, repeatable checks.",
      },
      {
        step: "04",
        title: "Report & gate releases",
        description: "Actionable defect reports and go/no-go input before production deploys.",
      },
    ],
  },
];