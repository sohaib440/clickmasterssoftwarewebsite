import { contactPath } from "@/lib/landing/constants";
import type { SubCategoryContent } from "@/lib/content/types";

export type SubServicesMap = Record<string, SubCategoryContent[]>;

/** Default CTA copy for sub-category pages at /{mainSlug}/{subSlug} */
export const defaultSubCategorySections = {
  cta: {
    description: (label: string) =>
      `Share your goals for ${label.toLowerCase()}, we'll reply within one business day.`,
    buttonLabel: "Get in touch",
    buttonHref: contactPath,
  },
} as const;

/**
 * Sub-service pages grouped by main category slug.
 * Routes: /{mainSlug}/{subSlug}
 */
export const subServicesByCategory: SubServicesMap = {
  "software-development": [
    {
      slug: "custom-software-development",
      label: "Custom Software Development",
      description:
        "Tailored applications aligned to your workflows, integrations, and growth roadmap, not one-size-fits-all templates.",
      image: {
        src: "/services/software-development.webp",
        alt: "Custom software on a laptop",
        width: 800,
        height: 500,
      },
    },
    {
      slug: "api-development",
      label: "API Development",
      description:
        "Well-documented APIs and event-driven services that connect products, partners, and internal tools reliably.",
    },
    {
      slug: "saas-development",
      label: "SaaS Product Development",
      description:
        "Multi-tenant architecture, billing, and scalable infrastructure from MVP to growth stage.",
    },
    {
      slug: "legacy-modernization",
      label: "Legacy System Modernization",
      description:
        "Migrate aging platforms to maintainable architecture without disrupting live operations.",
    },
  ],
  "mobile-development": [
    {
      slug: "ios-app-development",
      label: "iOS App Development",
      description: "Native Swift apps with App Store–ready quality, performance, and polish.",
    },
    {
      slug: "android-app-development",
      label: "Android App Development",
      description: "Kotlin and modern Android apps engineered for reliability and Play Store delivery.",
    },
    {
      slug: "cross-platform-apps",
      label: "Cross-Platform Apps",
      description:
        "React Native and Flutter builds that share logic while keeping native feel where it matters.",
    },
  ],
  "web-development": [
    {
      slug: "web-applications",
      label: "Web Applications",
      description:
        "Fast, accessible web apps with modern stacks and SEO-friendly architecture.",
      image: {
        src: "/services/web-development.webp",
        alt: "Web application dashboard",
        width: 800,
        height: 500,
      },
    },
    {
      slug: "progressive-web-apps",
      label: "Progressive Web Apps",
      description: "Installable, offline-capable experiences that feel native in the browser.",
    },
    {
      slug: "frontend-engineering",
      label: "Frontend Engineering",
      description: "Component systems, performance budgets, and accessible UI implementation.",
    },
  ],
  "ecommerce-development": [
    {
      slug: "custom-ecommerce",
      label: "Custom Ecommerce Platforms",
      description: "Storefronts and admin systems built around your catalog, pricing, and fulfillment.",
    },
    {
      slug: "marketplace-development",
      label: "Marketplace Development",
      description: "Multi-vendor marketplaces with payments, commissions, and seller tooling.",
    },
    {
      slug: "checkout-integrations",
      label: "Payments & Checkout",
      description: "Secure payment gateways, carts, and conversion-focused checkout flows.",
    },
  ],
  "ui-ux-design": [
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
        "Clickable prototypes to validate flows early, before engineering commits to the wrong path.",
    },
    {
      slug: "design-audits",
      label: "Design Audits",
      description:
        "Heuristic reviews and accessibility checks with a prioritized roadmap for improvement.",
    },
  ],
  "artificial-intelligence": [
    {
      slug: "ai-agents",
      label: "AI Agents & Assistants",
      description:
        "Task-oriented agents that integrate with your tools and automate repeatable workflows.",
      image: {
        src: "/services/artificial-intelligence.webp",
        alt: "AI agents and assistants",
        width: 800,
        height: 500,
      },
    },
    {
      slug: "nlp-solutions",
      label: "NLP & Chatbots",
      description:
        "Search, summarization, classification, and conversational interfaces grounded in your content.",
    },
    {
      slug: "computer-vision",
      label: "Computer Vision",
      description:
        "Image and video analysis for inspection, moderation, identity checks, and visual search.",
    },
  ],
  "machine-learning": [
    {
      slug: "predictive-models",
      label: "Predictive Models",
      description:
        "Forecasting, churn prediction, demand planning, and risk scoring built on your data.",
      image: {
        src: "/services/machine-learning.webp",
        alt: "Predictive machine learning models",
        width: 800,
        height: 500,
      },
    },
    {
      slug: "recommendation-systems",
      label: "Recommendation Systems",
      description:
        "Personalized content, product, and offer ranking tuned for engagement and business KPIs.",
    },
    {
      slug: "mlops",
      label: "MLOps & Pipelines",
      description:
        "Training pipelines, feature stores, model registry, and deployment automation.",
    },
    {
      slug: "model-monitoring",
      label: "Model Monitoring",
      description:
        "Drift detection, performance dashboards, and alerting so models stay accurate after launch.",
    },
  ],
  "automation-services": [
    {
      slug: "workflow-automation",
      label: "Workflow Automation",
      description: "End-to-end process automation across ops, support, finance, and sales tools.",
    },
    {
      slug: "rpa-integrations",
      label: "RPA & Integrations",
      description: "Bots and connectors that move data between legacy and modern systems reliably.",
    },
    {
      slug: "document-automation",
      label: "Document Automation",
      description: "Extraction, classification, and routing for invoices, forms, and contracts.",
    },
  ],
  "cloud-devops": [
    {
      slug: "cloud-architecture",
      label: "Cloud Architecture",
      description:
        "Right-sized AWS, Azure, or GCP designs with security, cost, and resilience built in.",
    },
    {
      slug: "cicd",
      label: "CI/CD Pipelines",
      description:
        "Automated build, test, and deploy workflows that shorten feedback loops.",
    },
    {
      slug: "kubernetes",
      label: "Kubernetes & Containers",
      description:
        "Container orchestration, Helm charts, and cluster operations tuned for your team.",
    },
    {
      slug: "observability",
      label: "Observability",
      description:
        "Logging, metrics, and tracing so incidents are detected early and resolved clearly.",
    },
  ],
  "data-business-intelligence": [
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
        "Reliable ingestion, transformation, and warehousing, batch or streaming.",
    },
    {
      slug: "business-intelligence",
      label: "Business Intelligence",
      description:
        "KPI models, semantic layers, and reporting that align teams on one source of truth.",
    },
  ],
  cybersecurity: [
    {
      slug: "security-audits",
      label: "Security Audits",
      description:
        "Threat modeling, penetration testing coordination, and remediation planning.",
    },
    {
      slug: "compliance",
      label: "Compliance Readiness",
      description:
        "SOC 2, HIPAA, or GDPR-aligned controls integrated into how you build and operate.",
    },
    {
      slug: "application-security",
      label: "Application Security",
      description:
        "Secure coding reviews, dependency scanning, and hardening for web and APIs.",
    },
  ],
  "enterprise-solutions": [
    {
      slug: "erp-systems",
      label: "ERP Systems",
      description: "Custom and tailored ERP platforms that unify finance, ops, and inventory.",
    },
    {
      slug: "crm-platforms",
      label: "CRM Platforms",
      description: "Sales and customer platforms that fit your pipeline, not the other way around.",
    },
    {
      slug: "internal-tools",
      label: "Internal Tools",
      description: "Ops dashboards and admin systems that replace spreadsheets and manual work.",
    },
  ],
  "blockchain-development": [
    {
      slug: "smart-contracts",
      label: "Smart Contracts",
      description: "Auditable contract development and integration for business workflows.",
    },
    {
      slug: "dapp-development",
      label: "dApp Development",
      description: "User-facing decentralized applications with wallets and on-chain state.",
    },
    {
      slug: "web3-integrations",
      label: "Web3 Integrations",
      description: "Connect existing products to blockchain networks, tokens, and oracles.",
    },
  ],
  "healthcare-software-development": [
    {
      slug: "hospital-systems",
      label: "Hospital & Clinic Systems",
      description: "Patient, appointment, billing, and clinical workflow platforms.",
    },
    {
      slug: "telemedicine",
      label: "Telemedicine Platforms",
      description: "Secure video, messaging, and care coordination for remote health services.",
    },
    {
      slug: "health-data-platforms",
      label: "Health Data Platforms",
      description: "Interoperable records, analytics, and compliance-aware data layers.",
    },
  ],
  "ar-vr-development": [
    {
      slug: "ar-experiences",
      label: "AR Experiences",
      description: "Augmented reality apps for product visualization, training, and retail.",
    },
    {
      slug: "vr-applications",
      label: "VR Applications",
      description: "Immersive VR for simulation, education, and enterprise training.",
    },
    {
      slug: "spatial-interfaces",
      label: "Spatial Interfaces",
      description: "3D interaction design and engineering for headset and mixed-reality devices.",
    },
  ],
  "testing-and-qa": [
    {
      slug: "manual-qa",
      label: "Manual QA & Exploratory Testing",
      description:
        "Structured test passes and exploratory sessions that find edge cases automation misses.",
      image: {
        src: "/services/testing-and-qa.webp",
        alt: "Manual software QA testing",
        width: 800,
        height: 500,
      },
    },
    {
      slug: "test-automation",
      label: "Test Automation",
      description:
        "Selenium, Cypress, Playwright, and API automation suites integrated into CI/CD.",
    },
    {
      slug: "performance-testing",
      label: "Performance & Load Testing",
      description:
        "Stress, soak, and spike tests with bottlenecks identified before high-traffic events.",
    },
    {
      slug: "security-qa",
      label: "Security & Regression QA",
      description:
        "Security-focused checks and regression suites that protect release quality.",
    },
  ],
};
