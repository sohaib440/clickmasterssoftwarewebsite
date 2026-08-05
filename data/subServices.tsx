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

function sub(
  slug: string,
  label: string,
  description: string,
  image?: SubCategoryContent["image"],
): SubCategoryContent {
  return image ? { slug, label, description, image } : { slug, label, description };
}

/**
 * Sub-service pages grouped by main category slug.
 * Routes: /{mainSlug}/{subSlug}
 */
export const subServicesByCategory: SubServicesMap = {
  "software-development": [
    sub(
      "custom-software-development",
      "Custom Software Development",
      "Tailored applications aligned to your workflows, integrations, and growth roadmap.",
      {
        src: "/services/software-development.webp",
        alt: "Custom software development",
        width: 800,
        height: 500,
      },
    ),
    sub(
      "enterprise-software-development",
      "Enterprise Software Development",
      "Large-scale systems for complex operations, governance, and multi-team delivery.",
    ),
    sub(
      "saas-application-development",
      "SaaS Application Development",
      "Multi-tenant products with billing, onboarding, and infrastructure built to scale.",
    ),
    sub(
      "software-product-development",
      "Software Product Development",
      "End-to-end product engineering from discovery through launch and iteration.",
    ),
    sub(
      "mvp-development",
      "MVP Development",
      "Focused first releases that validate demand quickly without overbuilding.",
    ),
    sub(
      "api-development-integration",
      "API Development & Integration",
      "APIs and third-party integrations that connect products, partners, and internal tools.",
    ),
  ],
  "mobile-development": [
    sub(
      "android-app-development",
      "Android App Development",
      "Native Android apps engineered for performance, reliability, and Play Store delivery.",
      {
        src: "/services/mobile-development.webp",
        alt: "Android app development",
        width: 800,
        height: 500,
      },
    ),
    sub(
      "ios-app-development",
      "iOS App Development",
      "Native iOS apps with App Store–ready quality, polish, and security.",
    ),
    sub(
      "flutter-development",
      "Flutter Development",
      "Cross-platform Flutter apps with shared UI and near-native performance.",
    ),
    sub(
      "react-native-development",
      "React Native Development",
      "React Native apps that share logic across iOS and Android without sacrificing feel.",
    ),
    sub(
      "cross-platform-app-development",
      "Cross-Platform App Development",
      "One codebase strategies that balance speed, quality, and platform reach.",
    ),
    sub(
      "progressive-web-app-development",
      "Progressive Web App (PWA) Development",
      "Installable, offline-capable web apps that behave like native mobile experiences.",
    ),
  ],
  "web-development": [
    sub(
      "custom-website-development",
      "Custom Website Development",
      "Marketing and brand sites built for performance, SEO, and conversion.",
      {
        src: "/services/web-development.webp",
        alt: "Custom website development",
        width: 800,
        height: 500,
      },
    ),
    sub(
      "web-application-development",
      "Web Application Development",
      "Complex browser apps with secure auth, workflows, and scalable architecture.",
    ),
    sub(
      "frontend-development",
      "Frontend Development",
      "Accessible, responsive interfaces with modern component systems and performance budgets.",
    ),
    sub(
      "backend-development",
      "Backend Development",
      "APIs, services, and data layers that keep products reliable under real traffic.",
    ),
    sub(
      "full-stack-development",
      "Full Stack Development",
      "Unified frontend and backend delivery from one senior engineering team.",
    ),
    sub(
      "cms-development",
      "CMS Development",
      "Content platforms and headless CMS setups your marketing and product teams can own.",
    ),
  ],
  "ecommerce-development": [
    sub(
      "shopify-development",
      "Shopify Development",
      "Custom Shopify storefronts, themes, and apps tuned for conversion and ops.",
    ),
    sub(
      "woocommerce-development",
      "WooCommerce Development",
      "WordPress ecommerce builds with catalogs, checkout, and payment flexibility.",
    ),
    sub(
      "magento-development",
      "Magento Development",
      "Enterprise Magento storefronts for complex catalogs and B2B workflows.",
    ),
    sub(
      "custom-ecommerce-development",
      "Custom Ecommerce Development",
      "Bespoke ecommerce platforms built around your catalog, pricing, and fulfillment.",
    ),
    sub(
      "multi-vendor-marketplace-development",
      "Multi-Vendor Marketplace Development",
      "Marketplaces with seller tooling, commissions, and multi-party payments.",
    ),
    sub(
      "payment-gateway-integration",
      "Payment Gateway Integration",
      "Secure payment flows and gateway integrations that protect conversion and trust.",
    ),
  ],
  "ui-ux-design": [
    sub(
      "ui-design",
      "UI Design",
      "High-fidelity interfaces that stay consistent across product and marketing surfaces.",
      {
        src: "/services/ui-ux-design.webp",
        alt: "UI design",
        width: 800,
        height: 500,
      },
    ),
    sub(
      "ux-design",
      "UX Design",
      "User journeys and interaction design grounded in research and real task flows.",
    ),
    sub(
      "wireframing",
      "Wireframing",
      "Low-fidelity structures that clarify information architecture before visual design.",
    ),
    sub(
      "prototyping",
      "Prototyping",
      "Clickable prototypes that validate flows before engineering commits.",
    ),
    sub(
      "design-systems",
      "Design Systems",
      "Tokens, components, and documentation that keep teams shipping consistently.",
    ),
    sub(
      "usability-testing",
      "Usability Testing",
      "Evidence-based tests that find friction early and prioritize UX improvements.",
    ),
  ],
  "artificial-intelligence": [
    sub(
      "ai-software-development",
      "AI Software Development",
      "Production AI features integrated into products with guardrails and monitoring.",
      {
        src: "/services/artificial-intelligence.webp",
        alt: "AI software development",
        width: 800,
        height: 500,
      },
    ),
    sub(
      "generative-ai-solutions",
      "Generative AI Solutions",
      "LLM-powered generation for content, support, and internal knowledge workflows.",
    ),
    sub(
      "ai-chatbot-development",
      "AI Chatbot Development",
      "Conversational assistants grounded in your data, policies, and brand voice.",
    ),
    sub(
      "ai-agent-development",
      "AI Agent Development",
      "Task-oriented agents that automate multi-step work across your tools.",
    ),
    sub(
      "computer-vision-solutions",
      "Computer Vision Solutions",
      "Image and video analysis for inspection, moderation, identity, and search.",
    ),
    sub(
      "natural-language-processing",
      "Natural Language Processing (NLP)",
      "Search, summarization, classification, and language understanding for your domain.",
    ),
  ],
  "machine-learning": [
    sub(
      "predictive-analytics",
      "Predictive Analytics",
      "Forecasting and risk models that turn historical data into forward-looking decisions.",
      {
        src: "/services/machine-learning.webp",
        alt: "Predictive analytics",
        width: 800,
        height: 500,
      },
    ),
    sub(
      "deep-learning-solutions",
      "Deep Learning Solutions",
      "Neural models for complex pattern recognition across text, images, and signals.",
    ),
    sub(
      "mlops",
      "MLOps",
      "Training pipelines, registries, and deployment automation for repeatable ML delivery.",
    ),
    sub(
      "image-recognition",
      "Image Recognition",
      "Classification and detection systems built for production accuracy and latency.",
    ),
    sub(
      "recommendation-systems",
      "Recommendation Systems",
      "Personalized ranking for products, content, and offers tied to business KPIs.",
    ),
    sub(
      "model-deployment",
      "Model Deployment",
      "Batch and real-time inference serving sized for your traffic and cost targets.",
    ),
  ],
  "automation-services": [
    sub(
      "business-process-automation",
      "Business Process Automation",
      "End-to-end automation that removes manual handoffs across operations teams.",
    ),
    sub(
      "robotic-process-automation",
      "Robotic Process Automation (RPA)",
      "Bots that execute repetitive desktop and system tasks with auditability.",
    ),
    sub(
      "workflow-automation",
      "Workflow Automation",
      "Triggered workflows that connect tools, approvals, and notifications reliably.",
    ),
    sub(
      "crm-automation",
      "CRM Automation",
      "Lead routing, nurturing, and CRM sync that keep sales pipelines clean.",
    ),
    sub(
      "erp-automation",
      "ERP Automation",
      "Automated ERP processes for finance, inventory, and order operations.",
    ),
    sub(
      "ai-workflow-automation",
      "AI Workflow Automation",
      "AI-assisted workflows for classification, extraction, and decision support.",
    ),
  ],
  "cloud-devops": [
    sub(
      "aws-cloud-services",
      "AWS Cloud Services",
      "AWS architecture, migration, and managed services tuned for cost and reliability.",
      {
        src: "/services/cloud-devops.webp",
        alt: "AWS cloud services",
        width: 800,
        height: 500,
      },
    ),
    sub(
      "microsoft-azure-services",
      "Microsoft Azure Services",
      "Azure landing zones, apps, and identity patterns for enterprise workloads.",
    ),
    sub(
      "google-cloud-platform",
      "Google Cloud Platform (GCP)",
      "GCP infrastructure and data platforms with secure, scalable defaults.",
    ),
    sub(
      "docker-containerization",
      "Docker Containerization",
      "Containerized apps with reproducible builds and portable environments.",
    ),
    sub(
      "kubernetes-deployment",
      "Kubernetes Deployment",
      "Cluster setup, Helm delivery, and operations for production Kubernetes.",
    ),
    sub(
      "ci-cd-pipeline-setup",
      "CI/CD Pipeline Setup",
      "Automated build, test, and deploy pipelines that shorten release cycles.",
    ),
  ],
  "data-business-intelligence": [
    sub(
      "power-bi-development",
      "Power BI Development",
      "Power BI models and dashboards executives and operators can trust.",
      {
        src: "/services/data-business-intelligence.webp",
        alt: "Power BI development",
        width: 800,
        height: 500,
      },
    ),
    sub(
      "tableau-development",
      "Tableau Development",
      "Tableau visualizations and workbooks aligned to your KPI definitions.",
    ),
    sub(
      "data-analytics",
      "Data Analytics",
      "Analysis and reporting that turn raw data into clear business decisions.",
    ),
    sub(
      "data-engineering",
      "Data Engineering",
      "Pipelines, warehouses, and quality checks for reliable analytics foundations.",
    ),
    sub(
      "data-visualization",
      "Data Visualization",
      "Clear charts and interactive views that make complex metrics easy to act on.",
    ),
    sub(
      "business-intelligence-solutions",
      "Business Intelligence Solutions",
      "End-to-end BI platforms with semantic models and self-serve reporting.",
    ),
  ],
  cybersecurity: [
    sub(
      "penetration-testing",
      "Penetration Testing",
      "Authorized attack simulations that surface real exploitable risks before attackers do.",
    ),
    sub(
      "vulnerability-assessment",
      "Vulnerability Assessment",
      "Systematic scanning and prioritization of weaknesses across apps and infrastructure.",
    ),
    sub(
      "application-security",
      "Application Security",
      "Secure coding reviews, dependency checks, and hardening for web and APIs.",
    ),
    sub(
      "cloud-security",
      "Cloud Security",
      "Identity, network, and configuration controls that protect cloud workloads.",
    ),
    sub(
      "security-compliance",
      "Security Compliance",
      "SOC 2, HIPAA, and GDPR-aligned controls integrated into how you build and operate.",
    ),
    sub(
      "security-monitoring",
      "Security Monitoring",
      "Detection, alerting, and response workflows that keep production environments watched.",
    ),
  ],
  "enterprise-solutions": [
    sub(
      "erp-development",
      "ERP Development",
      "Custom ERP platforms that unify finance, inventory, and operations.",
    ),
    sub(
      "crm-development",
      "CRM Development",
      "Sales and customer platforms shaped around your pipeline and service model.",
    ),
    sub(
      "hrm-software-development",
      "HRM Software Development",
      "HR systems for hiring, attendance, payroll workflows, and employee lifecycle.",
    ),
    sub(
      "supply-chain-management",
      "Supply Chain Management (SCM)",
      "Procurement, inventory, and logistics systems that improve visibility and control.",
    ),
    sub(
      "enterprise-integration",
      "Enterprise Integration",
      "Reliable integrations across ERP, CRM, and legacy systems of record.",
    ),
    sub(
      "document-management-systems",
      "Document Management Systems",
      "Secure document storage, versioning, and workflow for enterprise teams.",
    ),
  ],
  "blockchain-development": [
    sub(
      "smart-contract-development",
      "Smart Contract Development",
      "Auditable smart contracts for business workflows and on-chain logic.",
    ),
    sub(
      "dapp-development",
      "dApp Development",
      "Decentralized apps with wallets, on-chain state, and usable product UX.",
    ),
    sub(
      "web3-development",
      "Web3 Development",
      "Web3 product features and integrations for modern blockchain networks.",
    ),
    sub(
      "defi-development",
      "DeFi Development",
      "Decentralized finance protocols and interfaces built for security and clarity.",
    ),
    sub(
      "cryptocurrency-wallet-development",
      "Cryptocurrency Wallet Development",
      "Secure wallet experiences for sending, receiving, and managing digital assets.",
    ),
    sub(
      "nft-marketplace-development",
      "NFT Marketplace Development",
      "Marketplaces for minting, listing, and trading NFTs with reliable payments.",
    ),
  ],
  "healthcare-software-development": [
    sub(
      "electronic-health-records",
      "Electronic Health Records (EHR)",
      "EHR platforms that support clinical documentation and care coordination.",
    ),
    sub(
      "electronic-medical-records",
      "Electronic Medical Records (EMR)",
      "EMR systems tailored to clinic workflows, charting, and medical history.",
    ),
    sub(
      "telemedicine-development",
      "Telemedicine Development",
      "Secure video, messaging, and remote care platforms for patients and clinicians.",
    ),
    sub(
      "hospital-management-systems",
      "Hospital Management Systems",
      "Hospital ops platforms for appointments, billing, wards, and administration.",
    ),
    sub(
      "patient-portal-development",
      "Patient Portal Development",
      "Patient portals for records access, scheduling, and care communication.",
    ),
    sub(
      "healthcare-mobile-app-development",
      "Healthcare Mobile App Development",
      "Mobile health apps for patients, providers, and care teams.",
    ),
  ],
  "ar-vr-development": [
    sub(
      "augmented-reality-apps",
      "Augmented Reality (AR) Apps",
      "AR experiences for product visualization, retail, and on-site guidance.",
    ),
    sub(
      "virtual-reality-apps",
      "Virtual Reality (VR) Apps",
      "Immersive VR applications for simulation, education, and entertainment.",
    ),
    sub(
      "mixed-reality-solutions",
      "Mixed Reality (MR) Solutions",
      "Mixed reality products that blend digital overlays with physical environments.",
    ),
    sub(
      "metaverse-development",
      "Metaverse Development",
      "Shared virtual spaces and experiences for brand, training, and community use.",
    ),
    sub(
      "3d-visualization",
      "3D Visualization",
      "Interactive 3D visuals for products, spaces, and technical demonstrations.",
    ),
    sub(
      "vr-training-simulations",
      "VR Training Simulations",
      "VR training environments that teach skills safely before real-world practice.",
    ),
  ],
  "testing-and-qa": [
    sub(
      "manual-testing",
      "Manual Testing",
      "Structured and exploratory testing that catches edge cases automation misses.",
      {
        src: "/services/testing-and-qa.webp",
        alt: "Manual testing",
        width: 800,
        height: 500,
      },
    ),
    sub(
      "automation-testing",
      "Automation Testing",
      "Automated UI and regression suites integrated into your CI/CD pipeline.",
    ),
    sub(
      "performance-testing",
      "Performance Testing",
      "Load and stress tests that surface bottlenecks before high-traffic events.",
    ),
    sub(
      "security-testing",
      "Security Testing",
      "Security-focused QA that validates auth, input handling, and common exploit paths.",
    ),
    sub(
      "api-testing",
      "API Testing",
      "Contract, functional, and negative tests that keep APIs reliable across releases.",
    ),
    sub(
      "mobile-app-testing",
      "Mobile App Testing",
      "Device and OS coverage for iOS and Android apps before store or production release.",
    ),
  ],
};
