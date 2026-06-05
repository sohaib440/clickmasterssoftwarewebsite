/**
 * SOLUTIONS CONTENT
 * -----------------
 * Add or edit entries in `solutions` below. Each solution gets:
 *   - /solutions          (index lists all)
 *   - /solutions/{slug}   (detail page)
 */

import {
  BarChart3,
  Bot,
  Boxes,
  Brain,
  ShoppingCart,
  Users,
  Warehouse,
  Workflow,
} from "lucide-react";

import type { SolutionContent } from "@/lib/content/solutions.types";

const img = (
  src: string,
  alt: string,
  width = 800,
  height = 500
) => ({
  src,
  alt,
  width,
  height,
});

export const solutions: SolutionContent[] = [
  {
    slug: "erp",
    label: "ERP System",
    category: "Enterprise",
    icon: Workflow,
    tagline: "Unify finance, inventory, and operations on one clear platform.",
    description:
      "Our ERP solutions connect departments, automate workflows, and give leadership real-time visibility—from procurement and production to accounting and reporting.",
    metaDescription:
      "Custom ERP software for finance, inventory, and operations. Software Development Company Software builds scalable enterprise resource planning systems.",
    heroImage: img(
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75",
      "Enterprise dashboard with charts and KPIs"
    ),
    summary: ["Finance & accounting", "Inventory & supply chain", "Role-based access"],
    features: [
      {
        title: "Unified data model",
        description:
          "One source of truth across departments—no more reconciling spreadsheets or duplicate entries.",
      },
      {
        title: "Modular by design",
        description:
          "Start with finance and inventory, then add HR, manufacturing, or CRM modules as you grow.",
      },
      {
        title: "Audit-ready reporting",
        description:
          "Configurable dashboards, exportable ledgers, and permission trails built for compliance.",
      },
    ],
    capabilities: [
      "General ledger & accounts payable/receivable",
      "Purchase orders & vendor management",
      "Multi-warehouse inventory",
      "Approval workflows",
      "Custom reports & exports",
      "API integrations with banks and logistics",
    ],
    useCases: [
      {
        title: "Growing manufacturers",
        description: "Connect shop floor, warehouse, and finance without replacing tools every two years.",
      },
      {
        title: "Multi-location retail",
        description: "Track stock, transfers, and consolidated P&L across branches in one system.",
      },
      {
        title: "Services firms",
        description: "Project costing, time tracking, and invoicing tied to your chart of accounts.",
      },
    ],
    highlights: [
      {
        title: "Implementation in phases",
        description: "We ship core modules first, validate with users, then expand—reducing rollout risk.",
      },
      {
        title: "Your workflows, not ours",
        description: "Forms, approvals, and reports match how your team actually works.",
      },
      {
        title: "Long-term ownership",
        description: "Documentation, training, and clean handoff so your team can run and extend the system.",
      },
    ],
    approach: [
      { step: "01", title: "Discovery", description: "Map processes, integrations, and reporting needs." },
      { step: "02", title: "Design", description: "Data model, roles, and UX prototypes with stakeholders." },
      { step: "03", title: "Build", description: "Iterative delivery with weekly demos and UAT." },
      { step: "04", title: "Launch", description: "Migration, training, and hypercare support." },
    ],
  },
  {
    slug: "crm",
    label: "CRM Platform",
    category: "Customer",
    icon: Users,
    tagline: "Relationships, pipelines, and revenue—in one calm workspace.",
    description:
      "We build CRM platforms that help sales and success teams track leads, manage accounts, and forecast revenue without fighting clunky software.",
    metaDescription:
      "Custom CRM development for sales pipelines, account management, and customer success. Built by Software Development Company Software.",
    heroImage: img(
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=75",
      "Sales team reviewing CRM dashboard"
    ),
    summary: ["Lead & deal pipelines", "Account timelines", "Email & calendar sync"],
    features: [
      {
        title: "Pipeline visibility",
        description: "Stages, probabilities, and forecasts your managers can trust.",
      },
      {
        title: "360° customer view",
        description: "Contacts, deals, tickets, and activity history in one profile.",
      },
      {
        title: "Automation that helps",
        description: "Reminders, assignment rules, and follow-ups—without spamming your team.",
      },
    ],
    capabilities: [
      "Lead capture & scoring",
      "Deal stages & forecasting",
      "Task & activity tracking",
      "Email templates & sequences",
      "Team dashboards",
      "Integrations (Slack, Gmail, Zapier, etc.)",
    ],
    useCases: [
      {
        title: "B2B sales teams",
        description: "Long cycles, multiple stakeholders, and custom quoting workflows.",
      },
      {
        title: "Agencies",
        description: "Client accounts, retainers, and project upsell in one place.",
      },
      {
        title: "Customer success",
        description: "Health scores, renewals, and onboarding checklists.",
      },
    ],
    highlights: [
      {
        title: "Adoption-first UX",
        description: "Interfaces salespeople actually want to open every morning.",
      },
      {
        title: "Flexible data model",
        description: "Custom fields, objects, and views per team or segment.",
      },
      {
        title: "Secure by default",
        description: "Role-based access, audit logs, and SSO for enterprise clients.",
      },
    ],
    approach: [
      { step: "01", title: "Align", description: "Sales process workshops and tool audit." },
      { step: "02", title: "Prototype", description: "Clickable flows for pipeline and account views." },
      { step: "03", title: "Integrate", description: "Connect email, calendar, and existing data sources." },
      { step: "04", title: "Scale", description: "Roll out teams, measure adoption, iterate." },
    ],
  },
  {
    slug: "ai-agent",
    label: "AI Agent",
    category: "AI & Automation",
    icon: Bot,
    tagline: "Intelligent assistants that work inside your product and workflows.",
    description:
      "We design and deploy AI agents for support, sales, and internal ops—grounded in your data, guarded by policies, and measurable in production.",
    metaDescription:
      "Custom AI agents for support, sales, and operations. RAG, tool use, and safe deployment by Software Development Company Software.",
    heroImage: img(
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=75",
      "Abstract AI and neural network visualization"
    ),
    summary: ["RAG over your docs", "Tool & API actions", "Human handoff"],
    features: [
      {
        title: "Grounded answers",
        description: "Retrieval over knowledge bases, tickets, and product docs—fewer hallucinations.",
      },
      {
        title: "Action-capable agents",
        description: "Book meetings, update CRM records, or trigger workflows with guardrails.",
      },
      {
        title: "Observability",
        description: "Logging, feedback loops, and quality metrics so you can improve over time.",
      },
    ],
    capabilities: [
      "Chat & voice interfaces",
      "Document ingestion & chunking",
      "LLM orchestration (OpenAI, Anthropic, etc.)",
      "Custom tools & function calling",
      "Moderation & policy layers",
      "Analytics & A/B testing",
    ],
    useCases: [
      {
        title: "Support deflection",
        description: "Resolve tier-1 questions and route complex cases to humans with full context.",
      },
      {
        title: "Internal copilots",
        description: "HR, IT, and policy Q&A for employees on Slack or Teams.",
      },
      {
        title: "Sales assistants",
        description: "Prep briefs, draft outreach, and summarize calls from your CRM.",
      },
    ],
    highlights: [
      {
        title: "Security-first",
        description: "PII handling, access controls, and deployment options that fit your compliance needs.",
      },
      {
        title: "Cost-aware design",
        description: "Caching, routing, and model selection to balance quality and spend.",
      },
      {
        title: "Human in the loop",
        description: "Escalation paths and review queues where automation should not decide alone.",
      },
    ],
    approach: [
      { step: "01", title: "Scope", description: "Use cases, data sources, and success metrics." },
      { step: "02", title: "Pilot", description: "Limited rollout with evaluation harness." },
      { step: "03", title: "Harden", description: "Policies, monitoring, and fallback behavior." },
      { step: "04", title: "Operate", description: "Continuous improvement from real conversations." },
    ],
  },
  {
    slug: "hrms",
    label: "HRMS",
    category: "Enterprise",
    icon: Brain,
    tagline: "People operations from hire to retire—without the paperwork maze.",
    description:
      "Human resource management systems for employee records, leave, payroll hooks, performance cycles, and self-service portals tailored to your policies.",
    metaDescription:
      "Custom HRMS software for employee management, leave, and HR workflows. Software Development Company Software builds people platforms.",
    heroImage: img(
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=75",
      "HR team in a modern office"
    ),
    summary: ["Employee profiles", "Leave & attendance", "Performance reviews"],
    features: [
      {
        title: "Self-service portal",
        description: "Employees update details, request leave, and access payslips securely.",
      },
      {
        title: "Policy engine",
        description: "Leave types, accruals, and approvals that match your handbook.",
      },
      {
        title: "Manager workflows",
        description: "Approvals, team views, and review cycles without email chains.",
      },
    ],
    capabilities: [
      "Employee directory & org chart",
      "Leave & attendance tracking",
      "Onboarding checklists",
      "Performance & goals",
      "Document storage",
      "Payroll system integrations",
    ],
    useCases: [
      {
        title: "Mid-size companies",
        description: "Outgrow spreadsheets but need more flexibility than off-the-shelf HR tools.",
      },
      {
        title: "Distributed teams",
        description: "Time zones, remote policies, and async approval flows.",
      },
      {
        title: "Regulated industries",
        description: "Audit trails and data retention for HR records.",
      },
    ],
    highlights: [
      {
        title: "Privacy built in",
        description: "Field-level permissions and encryption for sensitive HR data.",
      },
      {
        title: "Localized policies",
        description: "Support multiple regions, currencies, and holiday calendars.",
      },
      {
        title: "Integrations",
        description: "Connect payroll, SSO, and communication tools you already use.",
      },
    ],
    approach: [
      { step: "01", title: "Map HR flows", description: "Current process and pain points by role." },
      { step: "02", title: "Configure", description: "Policies, forms, and approval chains." },
      { step: "03", title: "Migrate", description: "Employee data import and validation." },
      { step: "04", title: "Train", description: "HR admin and employee rollout." },
    ],
  },
  {
    slug: "inventory-management",
    label: "Inventory Management",
    category: "Operations",
    icon: Warehouse,
    tagline: "Stock levels, movements, and fulfillment—accurate and real-time.",
    description:
      "Inventory systems for warehouses and retail: receiving, picking, transfers, barcodes, and alerts when SKUs run low.",
    metaDescription:
      "Inventory management software for warehouses and retail. Real-time stock tracking by Software Development Company Software.",
    heroImage: img(
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=75",
      "Warehouse shelves and logistics"
    ),
    summary: ["Multi-location stock", "Barcode scanning", "Low-stock alerts"],
    features: [
      {
        title: "Real-time quantities",
        description: "Every receipt, sale, and adjustment reflected immediately across locations.",
      },
      {
        title: "Fulfillment workflows",
        description: "Pick lists, packing, and shipment status for operations teams.",
      },
      {
        title: "Demand signals",
        description: "Reorder points, velocity reports, and supplier lead times.",
      },
    ],
    capabilities: [
      "SKU & variant management",
      "Purchase orders & receiving",
      "Stock transfers",
      "Cycle counts",
      "Barcode / QR support",
      "ERP & e-commerce sync",
    ],
    useCases: [
      {
        title: "E-commerce brands",
        description: "Sync online orders with warehouse picks and returns.",
      },
      {
        title: "Wholesale distributors",
        description: "Bulk orders, pallets, and multi-warehouse allocation.",
      },
      {
        title: "Field service",
        description: "Van stock, parts usage, and replenishment.",
      },
    ],
    highlights: [
      {
        title: "Mobile-friendly",
        description: "Scan and update stock from handheld devices on the floor.",
      },
      {
        title: "Accurate costing",
        description: "FIFO, average cost, or methods that match your finance team.",
      },
      {
        title: "Resilient offline",
        description: "Queue updates when connectivity is spotty, sync when back online.",
      },
    ],
    approach: [
      { step: "01", title: "Audit", description: "SKUs, locations, and current tracking methods." },
      { step: "02", title: "Model", description: "Data structure for items, bins, and movements." },
      { step: "03", title: "Deploy", description: "Pilot warehouse, then roll out locations." },
      { step: "04", title: "Optimize", description: "Reports, alerts, and integration tuning." },
    ],
  },
  {
    slug: "ecommerce-platform",
    label: "E-commerce Platform",
    category: "Customer",
    icon: ShoppingCart,
    tagline: "Storefronts and admin that convert—and scale on busy days.",
    description:
      "Custom e-commerce platforms with catalog management, checkout, payments, promotions, and admin tools built for your brand and catalog complexity.",
    metaDescription:
      "Custom e-commerce platform development. Storefronts, checkout, and admin by Software Development Company Software.",
    heroImage: img(
      "https://images.unsplash.com/photo-1472851291508-62bd40d0d974?auto=format&fit=crop&w=800&q=75",
      "Online shopping on laptop and phone"
    ),
    summary: ["Custom checkout", "Catalog & variants", "Admin & promotions"],
    features: [
      {
        title: "Brand-led UX",
        description: "Fast, accessible storefronts that reflect your design—not generic themes.",
      },
      {
        title: "Flexible catalog",
        description: "Bundles, subscriptions, B2B pricing, and complex variant rules.",
      },
      {
        title: "Operations hub",
        description: "Orders, refunds, and inventory in one admin your team enjoys using.",
      },
    ],
    capabilities: [
      "Product & category management",
      "Cart & checkout",
      "Payment gateways (Stripe, etc.)",
      "Shipping & tax rules",
      "Discounts & coupons",
      "Analytics & conversion tracking",
    ],
    useCases: [
      {
        title: "DTC brands",
        description: "Story-driven shopping with performance and SEO in mind.",
      },
      {
        title: "B2B ordering",
        description: "Account pricing, PO numbers, and approval before checkout.",
      },
      {
        title: "Marketplaces",
        description: "Multi-vendor listings, commissions, and seller dashboards.",
      },
    ],
    highlights: [
      {
        title: "Performance at peak",
        description: "Caching, CDN, and load-tested checkout for sale events.",
      },
      {
        title: "Own your stack",
        description: "No platform lock-in—extend catalog, checkout, and integrations freely.",
      },
      {
        title: "Omnichannel ready",
        description: "Connect POS, ERP, and marketing tools from day one.",
      },
    ],
    approach: [
      { step: "01", title: "Define", description: "Catalog rules, checkout, and fulfillment model." },
      { step: "02", title: "Design", description: "Storefront UX and admin workflows." },
      { step: "03", title: "Build", description: "MVP launch with core catalog and payments." },
      { step: "04", title: "Grow", description: "Promotions, integrations, and conversion optimization." },
    ],
  },
  {
    slug: "business-analytics",
    label: "Business Analytics",
    category: "Operations",
    icon: BarChart3,
    tagline: "Dashboards and insights your leadership actually uses.",
    description:
      "Analytics platforms that pull from your databases and SaaS tools—unified KPIs, drill-downs, and scheduled reports without spreadsheet chaos.",
    metaDescription:
      "Custom business analytics dashboards and BI tools. Data visualization by Software Development Company Software.",
    heroImage: img(
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75",
      "Analytics charts on a monitor"
    ),
    summary: ["Live dashboards", "Scheduled reports", "Role-based views"],
    features: [
      {
        title: "Trusted metrics",
        description: "Single definitions for revenue, churn, and utilization across teams.",
      },
      {
        title: "Interactive exploration",
        description: "Filters, drill-downs, and exports without waiting on analysts.",
      },
      {
        title: "Embedded analytics",
        description: "Charts inside your ERP, CRM, or customer portal when needed.",
      },
    ],
    capabilities: [
      "Data pipeline & warehousing hooks",
      "Custom dashboards",
      "SQL & no-code explorers",
      "Alerts & thresholds",
      "PDF / email reports",
      "API for embedded charts",
    ],
    useCases: [
      {
        title: "Executive reporting",
        description: "Monday morning dashboards with fresh numbers, not stale decks.",
      },
      {
        title: "Operations monitoring",
        description: "SLAs, throughput, and exception queues in real time.",
      },
      {
        title: "Product analytics",
        description: "Feature usage, funnels, and cohort retention.",
      },
    ],
    highlights: [
      {
        title: "Right-sized stack",
        description: "From lightweight Metabase-style views to full data warehouse integration.",
      },
      {
        title: "Governed access",
        description: "Row-level security so teams see only what they should.",
      },
      {
        title: "Maintainable models",
        description: "Documented metrics your team can evolve without vendor tickets.",
      },
    ],
    approach: [
      { step: "01", title: "Metrics", description: "Define KPIs and data sources with stakeholders." },
      { step: "02", title: "Pipeline", description: "Ingest, clean, and model data reliably." },
      { step: "03", title: "Visualize", description: "Dashboards and reports per audience." },
      { step: "04", title: "Adopt", description: "Training and iteration from user feedback." },
    ],
  },
  {
    slug: "workflow-automation",
    label: "Workflow Automation",
    category: "AI & Automation",
    icon: Boxes,
    tagline: "Replace manual handoffs with reliable, auditable workflows.",
    description:
      "Custom workflow engines for approvals, onboarding, ticketing, and cross-system automation—visual builders optional, rock-solid execution required.",
    metaDescription:
      "Workflow automation software for approvals and business processes. Built by Software Development Company Software.",
    heroImage: img(
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=75",
      "Business planning and workflow diagrams"
    ),
    summary: ["Approval chains", "System integrations", "Audit trails"],
    features: [
      {
        title: "Visual process design",
        description: "Map steps, branches, and SLAs so non-developers can understand flows.",
      },
      {
        title: "Integration-native",
        description: "Trigger actions in email, Slack, ERP, CRM, and custom APIs.",
      },
      {
        title: "Exception handling",
        description: "Escalations, retries, and human tasks when automation cannot proceed.",
      },
    ],
    capabilities: [
      "Form-driven requests",
      "Multi-step approvals",
      "Conditional routing",
      "Webhooks & REST actions",
      "Scheduled jobs",
      "Full execution history",
    ],
    useCases: [
      {
        title: "Procurement",
        description: "Purchase requests, budget checks, and vendor onboarding.",
      },
      {
        title: "Employee onboarding",
        description: "IT provisioning, training tasks, and manager sign-offs.",
      },
      {
        title: "Compliance reviews",
        description: "Document collection, review queues, and sign-off trails.",
      },
    ],
    highlights: [
      {
        title: "Transparent runs",
        description: "See exactly what ran, when, and why a step failed.",
      },
      {
        title: "Versioned flows",
        description: "Ship process changes safely with rollback.",
      },
      {
        title: "Scales with volume",
        description: "Queue-based workers for high-throughput environments.",
      },
    ],
    approach: [
      { step: "01", title: "Document", description: "As-is processes and automation candidates." },
      { step: "02", title: "Automate", description: "Build highest-impact flows first." },
      { step: "03", title: "Integrate", description: "Wire systems and notifications." },
      { step: "04", title: "Govern", description: "Ownership, monitoring, and change control." },
    ],
  },
];
