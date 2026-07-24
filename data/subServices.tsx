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
 * Routes: /{mainSlug}/{subSlug} (e.g. /software-development/web-development)
 */
export const subServicesByCategory: SubServicesMap = {
  "software-development": [
    {
      slug: "custom-software-development",
      label: "Custom Software Development",
      description:
        "Tailored applications aligned to your workflows, integrations, and growth roadmap, not one-size-fits-all templates.",
      image: {
        src: "/services/Software development.png",
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
        src: "/services/Web Development.png",
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
      image: {
        src: "/services/Mobile Application Development.png",
        alt: "Mobile application development",
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
  ],
  "design-ux": [
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
  "cloud-devops": [
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
  "data-security": [
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
        "Reliable ingestion, transformation, and warehousing, batch or streaming, as the domain requires.",
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
  "artificial-intelligence-ai": [
    {
      slug: "ai-agents",
      label: "AI Agents & Assistants",
      description:
        "Task-oriented agents that integrate with your tools, Slack, CRM, support desks, and automate repeatable workflows.",
      image: {
        src: "/services/Artificial Intelligence.png",
        alt: "AI agents and assistants",
        width: 800,
        height: 500,
      },
    },
    {
      slug: "intelligent-automation",
      label: "Intelligent Automation",
      description:
        "RPA plus AI for document processing, classification, routing, and approval flows across operations.",
    },
    {
      slug: "nlp-solutions",
      label: "NLP & Chatbots",
      description:
        "Search, summarization, classification, and conversational interfaces grounded in your content and policies.",
    },
    {
      slug: "computer-vision",
      label: "Computer Vision",
      description:
        "Image and video analysis for inspection, moderation, identity checks, and visual search use cases.",
    },
  ],
  "machine-learning-ml": [
    {
      slug: "predictive-models",
      label: "Predictive Models",
      description:
        "Forecasting, churn prediction, demand planning, and risk scoring built on your historical data.",
      image: {
        src: "/services/Machine Learning.png",
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
        "Training pipelines, feature stores, model registry, and deployment automation for repeatable ML delivery.",
    },
    {
      slug: "model-monitoring",
      label: "Model Monitoring",
      description:
        "Drift detection, performance dashboards, and alerting so models stay accurate after launch.",
    },
  ],
  "testing-and-qa": [
    {
      slug: "manual-qa",
      label: "Manual QA & Exploratory Testing",
      description:
        "Structured test passes and exploratory sessions that find edge cases automation misses.",
      image: {
        src: "/services/Testing-and-QA.png",
        alt: "Manual software QA testing",
        width: 800,
        height: 500,
      },
    },
    {
      slug: "test-automation",
      label: "Test Automation",
      description:
        "Selenium, Cypress, Playwright, and API automation suites integrated into your CI/CD pipeline.",
    },
    {
      slug: "performance-testing",
      label: "Performance & Load Testing",
      description:
        "Stress, soak, and spike tests with clear bottlenecks identified before high-traffic events.",
    },
    {
      slug: "security-qa",
      label: "Security & Regression QA",
      description:
        "Regression packs for releases plus security-focused test cases for auth, payments, and data access.",
    },
  ],
};
