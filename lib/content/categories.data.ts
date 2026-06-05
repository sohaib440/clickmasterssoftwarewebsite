/**
 * MAIN CATEGORY & SUB-CATEGORY CONTENT
 * ------------------------------------
 * Add or edit entries in `mainCategories` below. Each main category automatically
 * gets a page at /{slug} (e.g. /software-development).
 * Each sub-category gets /{mainSlug}/{subSlug} (e.g. /software-development/custom-software-development).
 *
 * For 200+ categories: split into separate files per category and import them
 * into the `mainCategories` array at the bottom of this file.
 */

import { Cloud, Code2, Palette, Shield } from "lucide-react";

import type { MainCategoryContent } from "@/lib/content/types";

export const mainCategories: MainCategoryContent[] = [
  {
    slug: "software-development",
    icon: Code2,
    label: "Software Development",
    exploreCta: "Explore software development",
    tagline:
      "Custom software that fits your business exactly CRM systems, ERP platforms, SaaS products, HRM tools, POS software and enterprise applications built from the ground up for companies in Pakistan and beyond.",
    description:
      "We partner with teams to design and build custom software—from greenfield platforms to modernizing legacy systems. Our engineers embed with yours, ship in tight loops, and leave codebases your team can own for years.",
    metaDescription:
      "Custom software, web, mobile, and API development. Software Development Company Software builds maintainable products with senior engineers and weekly delivery.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      alt: "Developers collaborating on software",
      width: 1200,
      height: 800,
    },
    subCategories: [
      {
        slug: "custom-software-development",
        label: "Custom Software Development",
        description:
          "Tailored applications aligned to your workflows, integrations, and growth roadmap—not one-size-fits-all templates.",
        image: {
          src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
          alt: "Custom software on a laptop",
          width: 800,
          height: 500,
        },
      },
      {
        slug: "web-development",
        label: "Web Development",
        description:
          "Fast, accessible web apps with modern stacks, SEO-friendly architecture, and design systems that scale.",
        image: {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          alt: "Web application dashboard",
          width: 800,
          height: 500,
        },
      },
      {
        slug: "mobile-app-development",
        label: "Mobile App Development",
        description:
          "Native-quality experiences on iOS and Android with shared logic where it makes sense, native where it matters.",
      },
      {
        slug: "api-development",
        label: "API Development",
        description:
          "Well-documented APIs and event-driven services that connect products, partners, and internal tools reliably.",
      },
    ],
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
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
      alt: "Design team reviewing interface work",
      width: 1200,
      height: 800,
    },
    subCategories: [
      {
        slug: "ux-research",
        label: "UX Research",
        description:
          "Interviews, usability studies, and journey mapping to ground decisions in real user behavior.",
      },
      {
        slug: "ui-systems",
        label: "UI Design Systems",
        description:
          "Tokens, components, and documentation that keep product and marketing visually aligned.",
      },
      {
        slug: "prototyping",
        label: "Prototyping",
        description:
          "Clickable prototypes to validate flows early—before engineering commits to the wrong path.",
      },
      {
        slug: "design-audits",
        label: "Design Audits",
        description:
          "Heuristic reviews and accessibility checks with a prioritized roadmap for improvement.",
      },
    ],
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
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      alt: "Cloud infrastructure visualization",
      width: 1200,
      height: 800,
    },
    subCategories: [
      {
        slug: "cloud-architecture",
        label: "Cloud Architecture",
        description:
          "Right-sized AWS, Azure, or GCP designs with security, cost, and resilience built in from day one.",
      },
      {
        slug: "cicd",
        label: "CI/CD Pipelines",
        description:
          "Automated build, test, and deploy workflows that shorten feedback loops and reduce manual risk.",
      },
      {
        slug: "kubernetes",
        label: "Kubernetes & Containers",
        description:
          "Container orchestration, Helm charts, and cluster operations tuned for your team's maturity.",
      },
      {
        slug: "observability",
        label: "Observability",
        description:
          "Logging, metrics, and tracing so incidents are detected early and resolved with clear runbooks.",
      },
    ],
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
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      alt: "Analytics dashboard on a monitor",
      width: 1200,
      height: 800,
    },
    subCategories: [
      {
        slug: "dashboards",
        label: "Analytics Dashboards",
        description:
          "Clear visualizations and self-serve reporting that executives and operators actually use.",
      },
      {
        slug: "pipelines",
        label: "Data Pipelines",
        description:
          "Reliable ingestion, transformation, and warehousing—batch or streaming, as the domain requires.",
      },
      {
        slug: "security-audits",
        label: "Security Audits",
        description:
          "Threat modeling, penetration testing coordination, and remediation planning with engineering.",
      },
      {
        slug: "compliance",
        label: "Compliance Readiness",
        description:
          "SOC 2, HIPAA, or GDPR-aligned controls integrated into how you build and operate.",
      },
    ],
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
];
