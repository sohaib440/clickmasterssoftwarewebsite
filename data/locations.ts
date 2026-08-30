import {
  Boxes,
  HeartPulse,
  ShoppingCart,
  Users,
  Warehouse,
  Workflow,
} from "lucide-react";

import type { FaqItem } from "@/data/landing/types";
import { companyStats } from "@/data/landing/trust";
import { processSteps as baseProcessSteps } from "@/data/landing/process";
import { teamIntro as baseTeamIntro } from "@/data/landing/team";
import { techStackIntro as baseTechIntro } from "@/data/landing/tech-stack";
import type { ImageAsset } from "@/data/landingPage";
import { industries as baseIndustries, type Industry } from "@/data/industriesPage";
import { caseStudies, type CaseStudy } from "@/data/caseStudy";
import { showcaseProjects, type ShowcaseProject } from "@/data/projects";
import { services as baseServices, type ServiceCard } from "@/data/services";
import { solutionPath } from "@/lib/content/solutions";
import { contactPath, teamPath } from "@/lib/landing/constants";

/** Market-unique copy for location hub + country pages (services / process / why-choose / projects). */

export type LocationMarketKey =
  | "hub"
  | "Pakistan"
  | "United States"
  | "Canada"
  | "Australia"
  | "United Kingdom"
  | "United Arab Emirates";

export const SERVICE_TITLES = [
  "Software Development",
  "Mobile App Development",
  "Web Development",
  "Ecommerce Development",
  "UI/UX Design",
  "Artificial Intelligence",
  "Machine Learning",
  "Automation Services",
  "Cloud & DevOps",
  "Data & Business Intelligence",
  "Cybersecurity",
  "Enterprise Solutions",
  "Blockchain Development",
  "Healthcare Software Development",
  "AR/VR Development",
  "Testing & QA",
] as const;

export type ServiceTitle = (typeof SERVICE_TITLES)[number];

export type MarketProcessStep = {
  step: "01" | "02" | "03" | "04" | "05" | "06";
  shortLabel: string;
  title: string;
  description: string;
};

export type MarketWhyChooseItem = {
  title: string;
  description: string;
};

export type MarketSectionCopy = {
  services: {
    overlineText: string;
    title: string;
    description: string;
    /** Display order; every title should appear once */
    order: ServiceTitle[];
    descriptions: Record<ServiceTitle, string>;
    tags?: Partial<Record<ServiceTitle, string>>;
  };
  whyChoose: {
    overlineText: string;
    title: string;
    description: string;
    values: MarketWhyChooseItem[];
  };
  process: {
    overlineText: string;
    title: string;
    titleItalic: string;
    description: string;
    ctaLabel: string;
    steps: MarketProcessStep[];
  };
  projects: {
    overlineText: string;
    title: string;
    description: string;
    slugs: string[];
  };
};

const ALL_SERVICES = [...SERVICE_TITLES] as ServiceTitle[];

function orderFirst(priority: ServiceTitle[]): ServiceTitle[] {
  const rest = ALL_SERVICES.filter((t) => !priority.includes(t));
  return [...priority, ...rest];
}

export const LOCATION_MARKET_COPY: Record<LocationMarketKey, MarketSectionCopy> = {
  hub: {
    services: {
      overlineText: "Services across markets",
      title: "Software Development Services Across Our Locations",
      description:
        "One delivery bench spanning Pakistan HQ and partner markets in the USA, UK, UAE, Canada, and Australia. Pick a country page for market-specific scope; here is how we cover the core stack worldwide.",
      order: orderFirst([
        "Software Development",
        "Web Development",
        "Mobile App Development",
        "Enterprise Solutions",
        "Healthcare Software Development",
        "Artificial Intelligence",
      ]),
      descriptions: {
        "Software Development":
          "End-to-end product builds for teams that need one accountable partner across discovery, architecture, launch, and maintenance, whether the buyer sits in Karachi or California.",
        "Mobile App Development":
          "iOS and Android apps for field staff, customers, and branch teams who need the same workflow offline and online, with shared APIs behind local-facing experiences.",
        "Web Development":
          "Browser-based platforms that stay fast under real traffic, with SEO-aware structure when the product is a public site and hardened auth when it is an internal tool.",
        "Ecommerce Development":
          "Catalog, checkout, and order ops for retailers selling across borders, including local payment habits and multi-warehouse inventory rules.",
        "UI/UX Design":
          "Interfaces designed for operators under time pressure and buyers who judge trust in the first session, with prototypes reviewed before major build spend.",
        "Artificial Intelligence":
          "Applied AI for intake, classification, and assistive workflows where automation cuts hours without inventing unsupported claims.",
        "Machine Learning":
          "Forecasting and prioritization models that sit beside existing ERP or CRM data so teams act on scores they can explain to stakeholders.",
        "Automation Services":
          "Approval chains, notifications, and system handoffs that replace spreadsheet ping-pong between offices in different time zones.",
        "Cloud & DevOps":
          "Hosting, CI/CD, and environment discipline so releases stay boring and uptime holds when demand spikes in any market we serve.",
        "Data & Business Intelligence":
          "Reporting layers that give founders and ops leads one trusted view of revenue, utilization, and backlog instead of conflicting exports.",
        Cybersecurity:
          "Access control, review habits, and hardening for products that touch customer, patient, or payment data across jurisdictions.",
        "Enterprise Solutions":
          "CRM, ERP, and internal platforms with role-based access for multi-department companies coordinating work across cities or countries.",
        "Blockchain Development":
          "Selective ledger work when auditability or shared records are a real requirement, not a buzzword slide.",
        "Healthcare Software Development":
          "Clinic and hospital workflows spanning appointments, records, billing, and pharmacy with the same senior bar we use on commercial SaaS.",
        "AR/VR Development":
          "Training and spatial demos where immersion improves outcomes enough to justify the build cost.",
        "Testing & QA":
          "Release testing across roles, devices, and peak paths so go-live is not the first time real users stress the system.",
      },
    },
    whyChoose: {
      overlineText: "Why choose us",
      title: "Why teams across our locations work with us",
      description:
        "Shared delivery standards with market-aware scoping, so country pages are not clones of each other with a flag swapped in.",
      values: [
        {
          title: "One senior bench, six markets",
          description:
            "Pakistan HQ engineering supports buyers in the USA, UK, UAE, Canada, and Australia with named ownership instead of an anonymous ticket queue.",
        },
        {
          title: "Market pages with real intent",
          description:
            "Each country page focuses on a different buyer problem: HMS and ERP depth in Pakistan, SaaS product work in the US, regulated B2B in the UK, and so on.",
        },
        {
          title: "Scope you can audit",
          description:
            "Written milestones, out-of-scope lists, and demo cadence so finance and product leads know what they are buying before code starts.",
        },
        {
          title: "Timezone-friendly collaboration",
          description:
            "English-first communication and overlapping call windows so stakeholders in Islamabad, London, Dubai, or Toronto stay in the loop.",
        },
        {
          title: "Post-launch continuity",
          description:
            "The same people who shipped the release stay available for fixes, iterations, and the issues that only appear in live operations.",
        },
        {
          title: "Security as default practice",
          description:
            "Role-based access, code review, and careful data handling on builds that touch customer or operational records.",
        },
      ],
    },
    process: {
      overlineText: "How we work across locations",
      title: "A shared delivery process",
      titleItalic: "adapted to each market",
      description:
        "The same six stages on every engagement, with discovery and compliance emphasis tuned on each country page rather than copy-pasted filler.",
      ctaLabel: "Start your project",
      steps: [
        {
          step: "01",
          shortLabel: "Discover",
          title: "Market and workflow discovery",
          description:
            "We clarify who the buyer is, which location page intent applies, and what success looks like before recommending a build path.",
        },
        {
          step: "02",
          shortLabel: "Plan",
          title: "Architecture and commercial plan",
          description:
            "Stack, integrations, timeline, and cost are written down so stakeholders across time zones share one source of truth.",
        },
        {
          step: "03",
          shortLabel: "Design",
          title: "Prototype before heavy build",
          description:
            "Wireframes and clickable flows are reviewed with operators and decision-makers so UX issues die early.",
        },
        {
          step: "04",
          shortLabel: "Build",
          title: "Sprint delivery with demos",
          description:
            "Two-week cycles with working software to inspect, not status slides that hide risk until the end.",
        },
        {
          step: "05",
          shortLabel: "Assure",
          title: "QA and release readiness",
          description:
            "Functional, security, and device checks before go-live so production is not the first stress test.",
        },
        {
          step: "06",
          shortLabel: "Support",
          title: "Launch and ongoing ownership",
          description:
            "Handover docs, training, and maintenance options keep the product reliable after day one.",
        },
      ],
    },
    projects: {
      overlineText: "Recent projects",
      title: "Selected work across our markets",
      description:
        "A cross-section of HMS, CRM, hospitality, education, retail, and travel systems that show the kinds of products we ship for location-page buyers.",
      slugs: [
        "hospital-management-system",
        "prime-lead-crm",
        "hotel-management-system",
        "ai-school-erp",
        "royal-pos",
        "travel-and-tours-management",
      ],
    },
  },

  Pakistan: {
    services: {
      overlineText: "Services across Pakistan",
      title: "Software Development Services for Pakistani Businesses",
      description:
        "From Islamabad HQ to Lahore, Karachi, and cities nationwide: HMS, ERP, JazzCash-ready commerce, Urdu-capable workflows, and custom products for clinics, schools, and retailers.",
      order: orderFirst([
        "Healthcare Software Development",
        "Enterprise Solutions",
        "Ecommerce Development",
        "Software Development",
        "Mobile App Development",
        "Data & Business Intelligence",
      ]),
      tags: {
        "Healthcare Software Development": "HMS · Clinics",
        "Enterprise Solutions": "ERP · CRM",
        "Ecommerce Development": "Local payments",
      },
      descriptions: {
        "Software Development":
          "Custom platforms for Pakistani clinics, campuses, and retailers that need HMS, ERP, or ops software matched to how staff actually work on the floor.",
        "Mobile App Development":
          "Android-first and iOS apps for field sales, delivery riders, and branch managers who live on WhatsApp and need structured mobile workflows instead.",
        "Web Development":
          "Fast, maintainable web apps for Pakistani businesses that still take most payments and inquiries across desk, phone, and counter in the same day.",
        "Ecommerce Development":
          "Storefronts with JazzCash, Easypaisa, and card checkout, plus inventory that holds up when Karachi and Lahore warehouses disagree on stock.",
        "UI/UX Design":
          "Screens that stay clear for busy reception desks and shop floors, including bilingual layouts when Urdu and English both appear in the same product.",
        "Artificial Intelligence":
          "Practical AI for attendance, document sorting, and demand hints where Pakistani operators need hours back without a research lab.",
        "Machine Learning":
          "Models for stock risk, no-show prediction, and lead scoring trained on the messy operational data SMEs already collect in Excel.",
        "Automation Services":
          "Approvals, SMS or WhatsApp alerts, and handoffs that cut the chase between accounts, warehouse, and front desk.",
        "Cloud & DevOps":
          "Reliable hosting and release pipelines for products that must stay up during peak clinic hours and festival retail spikes.",
        "Data & Business Intelligence":
          "Owner dashboards for daily sales, fee recovery, bed occupancy, and branch performance without waiting on month-end exports.",
        Cybersecurity:
          "Access control and hardening for patient, student, and payment data under Pakistani operating realities.",
        "Enterprise Solutions":
          "ERP and CRM suites for multi-branch retailers, manufacturers, and service firms that outgrew spreadsheets years ago.",
        "Blockchain Development":
          "Audit trails and shared records only when Pakistani supply or credential use cases need them, not as decoration.",
        "Healthcare Software Development":
          "Hospital and clinic HMS covering appointments, EMR, billing, pharmacy, and doctor portals used across Pakistani cities.",
        "AR/VR Development":
          "Training and demo experiences for education and industrial teams when immersion beats slide decks.",
        "Testing & QA":
          "Device and role testing before launch so Islamabad pilots do not break the first week in Faisalabad or Karachi.",
      },
    },
    whyChoose: {
      overlineText: "Why choose us",
      title: "Why teams across Pakistan work with us",
      description:
        "Differentiators that matter when you hire a nationwide software house headquartered in Islamabad, not a slide-deck agency.",
      values: [
        {
          title: "Islamabad HQ, nationwide delivery",
          description:
            "We scope and ship for clinics, schools, and retailers from the capital belt through Lahore, Karachi, and dozens of Pakistani cities with one accountable team.",
        },
        {
          title: "HMS and ERP depth",
          description:
            "Hospital, clinic, school, and retail systems are a core practice, not a side menu. Local payment and bilingual workflow experience comes with the build.",
        },
        {
          title: "Senior-only staffing",
          description:
            "Engineers, designers, and QA who can sit with Pakistani operators, understand counter reality, and still write maintainable code.",
        },
        {
          title: "Fixed scope when you need it",
          description:
            "Clear milestones and written out-of-scope lists so PKR budgets stay predictable for founders and hospital admins alike.",
        },
        {
          title: "On-ground and remote hybrids",
          description:
            "Workshops in Islamabad or major cities when needed, with remote sprint cadence that still respects local business hours.",
        },
        {
          title: "Support after go-live",
          description:
            "The team that launched your HMS or ERP stays available for the pharmacy edge case and the festival sales spike.",
        },
      ],
    },
    process: {
      overlineText: "How we work in Pakistan",
      title: "Our delivery process",
      titleItalic: "built for Pakistani operators",
      description:
        "A clear path from discovery to launch for founders and administrators hiring a software house that understands Pakistani clinics, campuses, and retail floors.",
      ctaLabel: "Start your Pakistan project",
      steps: [
        {
          step: "01",
          shortLabel: "Discover",
          title: "On-site and remote discovery",
          description:
            "We map counter workflows, paper registers, WhatsApp handoffs, and success metrics with clinic, school, or retail stakeholders before any build starts.",
        },
        {
          step: "02",
          shortLabel: "Architecture",
          title: "Local-fit architecture and pricing",
          description:
            "Stack, JazzCash or bank integrations, Urdu UI needs, timeline, and PKR-friendly milestones are agreed in writing up front.",
        },
        {
          step: "03",
          shortLabel: "Design",
          title: "Operator-first prototypes",
          description:
            "Wireframes are reviewed with the people who will click them all day: reception, cashiers, teachers, and branch managers.",
        },
        {
          step: "04",
          shortLabel: "Build",
          title: "Sprints with live demos",
          description:
            "Two-week increments your Pakistan stakeholders can steer, with working modules instead of progress theater.",
        },
        {
          step: "05",
          shortLabel: "QA",
          title: "Role and peak-hour testing",
          description:
            "We test doctor portals, fee counters, and checkout paths under realistic load before the first city go-live.",
        },
        {
          step: "06",
          shortLabel: "Launch",
          title: "City rollout and support",
          description:
            "Training, handover docs, and maintenance options so Islamabad pilots expand cleanly to other Pakistani cities.",
        },
      ],
    },
    projects: {
      overlineText: "Recent projects",
      title: "Recent projects from Pakistan",
      description:
        "HMS, school ERP, pharmacy inventory, retail POS, cash control, and learning platforms that mirror how Pakistani institutions actually run.",
      slugs: [
        "hospital-management-system",
        "ai-school-erp",
        "medicine-inventory-system",
        "royal-pos",
        "cash-management-system",
        "e-learning-portal",
      ],
    },
  },

  "United States": {
    services: {
      overlineText: "Services in the United States",
      title: "Software Development Services for US Product Teams",
      description:
        "SaaS platforms, workflow software, and scalable web systems for US founders and mid-market operators who want senior product engineering without agency bloat.",
      order: orderFirst([
        "Software Development",
        "Web Development",
        "Artificial Intelligence",
        "Cloud & DevOps",
        "UI/UX Design",
        "Testing & QA",
      ]),
      tags: {
        "Software Development": "SaaS · Product",
        "Web Development": "Product web",
        "Cloud & DevOps": "AWS-ready",
      },
      descriptions: {
        "Software Development":
          "Product platforms and internal tools for US SaaS teams that need roadmap clarity, maintainable architecture, and ship cadence investors can trust.",
        "Mobile App Development":
          "Customer and field apps that plug into your existing US product stack, with analytics and release discipline suitable for App Store review cycles.",
        "Web Development":
          "Next-generation web apps optimized for conversion, multi-tenant SaaS patterns, and the performance budgets US buyers expect.",
        "Ecommerce Development":
          "Subscription and catalog experiences with Stripe-friendly checkout flows and ops tooling for US fulfillment realities.",
        "UI/UX Design":
          "Product UX that survives buyer demos and daily operator use, with design systems your US engineers can extend without a redesign every quarter.",
        "Artificial Intelligence":
          "Feature-level AI inside US products: assistive workflows, document intake, and scoring that product managers can explain on a sales call.",
        "Machine Learning":
          "Models wired to your warehouse or product events so growth and ops teams prioritize work with measurable lift, not vanity accuracy.",
        "Automation Services":
          "Back-office and customer-success automations that cut ticket volume between Slack, CRM, and billing tools common in US stacks.",
        "Cloud & DevOps":
          "AWS-oriented pipelines, staging discipline, and observability so US releases stay reversible and auditable.",
        "Data & Business Intelligence":
          "Product and revenue dashboards for founders and RevOps who are tired of conflicting Looker, Sheets, and warehouse exports.",
        Cybersecurity:
          "Practical hardening and access reviews for US products handling PII, PHI-adjacent workflows, or payment metadata.",
        "Enterprise Solutions":
          "CRM and ops platforms that integrate with Salesforce, HubSpot, or custom US mid-market stacks without forcing a rip-and-replace.",
        "Blockchain Development":
          "Ledger features only when US compliance or multi-party audit needs justify the complexity.",
        "Healthcare Software Development":
          "Scheduling, charting adjuncts, and clinic ops software respectful of US care-team workflows and privacy expectations.",
        "AR/VR Development":
          "Training and spatial demos for US industrial and education buyers when immersion is part of the product thesis.",
        "Testing & QA":
          "Regression and release gates aligned to US sprint rituals so demos never ship on hope.",
      },
    },
    whyChoose: {
      overlineText: "Why choose us",
      title: "Why US product teams work with us",
      description:
        "Senior product engineering for SaaS and mid-market operators who want demos, milestones, and ownership, not a black-box offshore queue.",
      values: [
        {
          title: "Product-minded delivery",
          description:
            "We staff like an embedded product team: discovery, architecture, UX, and QA that speak roadmap language with US founders and PMs.",
        },
        {
          title: "SaaS and workflow focus",
          description:
            "Multi-tenant patterns, subscription ops, and internal tools are core work, not a generic custom-software brochure claim.",
        },
        {
          title: "USD-clear commercial terms",
          description:
            "Fixed-price when requirements are stable, or time-and-materials with burn visibility when the US product is still finding shape.",
        },
        {
          title: "Overlap-friendly collaboration",
          description:
            "English-first standups and written decisions that respect Eastern and Pacific working windows without overnight surprises.",
        },
        {
          title: "No junior bait-and-switch",
          description:
            "The seniors who scoped the engagement stay on the critical path through launch, not just the sales call.",
        },
        {
          title: "Launch and iterate",
          description:
            "Post-launch capacity for the features your US users request once real usage data shows up.",
        },
      ],
    },
    process: {
      overlineText: "How we work with United States teams",
      title: "Delivery process for US projects",
      titleItalic: "demo-driven and roadmap-aware",
      description:
        "Discovery through launch for US stakeholders who want sprint demos, explicit risk, and architecture that survives the next funding round.",
      ctaLabel: "Start your USA project",
      steps: [
        {
          step: "01",
          shortLabel: "Discover",
          title: "Product discovery and success metrics",
          description:
            "We align on ICP, workflow pain, and North Star metrics with US founders or ops leads before recommending MVP vs modernization.",
        },
        {
          step: "02",
          shortLabel: "Architecture",
          title: "Scalable architecture and estimate",
          description:
            "Multi-tenant choices, integrations (Stripe, CRM, auth), timeline, and budget are documented for technical and commercial stakeholders.",
        },
        {
          step: "03",
          shortLabel: "Design",
          title: "Prototype for buyers and users",
          description:
            "Clickable flows validated with the people who buy the product and the people who live in it daily.",
        },
        {
          step: "04",
          shortLabel: "Build",
          title: "Two-week product sprints",
          description:
            "Working software every sprint, with backlog hygiene your US PM can defend in a board or customer meeting.",
        },
        {
          step: "05",
          shortLabel: "QA",
          title: "Release-quality gates",
          description:
            "Automated and manual checks on the paths that break SaaS trust: auth, billing edges, permissions, and peak load.",
        },
        {
          step: "06",
          shortLabel: "Launch",
          title: "Ship, hand over, iterate",
          description:
            "Runbooks, monitoring basics, and a maintenance lane so US go-live is the start of learning, not the end of attention.",
        },
      ],
    },
    projects: {
      overlineText: "Recent projects",
      title: "Projects relevant to US product buyers",
      description:
        "CRM, healthcare ops, HR, finance control, learning, and retail systems that map to SaaS and mid-market product patterns US teams recognize.",
      slugs: [
        "prime-lead-crm",
        "hospital-management-system",
        "hr-management-software",
        "cash-management-system",
        "e-learning-portal",
        "royal-pos",
      ],
    },
  },

  Canada: {
    services: {
      overlineText: "Services in Canada",
      title: "Software Development Services for Canadian Businesses",
      description:
        "Custom platforms, automation, and operational software for Canadian product companies and service businesses modernizing how they deliver and report.",
      order: orderFirst([
        "Software Development",
        "Automation Services",
        "Cloud & DevOps",
        "Data & Business Intelligence",
        "Healthcare Software Development",
        "Web Development",
      ]),
      tags: {
        "Automation Services": "Ops modernization",
        "Data & Business Intelligence": "Reporting",
        "Healthcare Software Development": "Clinic ops",
      },
      descriptions: {
        "Software Development":
          "Bespoke platforms for Canadian service firms and product teams that need bilingual-ready architecture options and sober operational scope.",
        "Mobile App Development":
          "Field and customer apps for Canadian provinces where staff move between sites and need reliable offline-tolerant workflows.",
        "Web Development":
          "Accessible, performant web products for Canadian buyers who care about clarity, privacy posture, and long-term maintainability.",
        "Ecommerce Development":
          "Commerce builds aware of Canadian shipping zones, tax display expectations, and payment habits beyond a single gateway.",
        "UI/UX Design":
          "Calm, usable interfaces for Canadian operators in healthcare, education, and professional services who reject cluttered dashboards.",
        "Artificial Intelligence":
          "Assistive AI for document and scheduling load in Canadian offices where staffing is tight and accuracy still matters.",
        "Machine Learning":
          "Demand and risk models that respect the data quality of mid-market Canadian ops systems rather than assuming perfect warehouses.",
        "Automation Services":
          "Workflow automation that replaces email chains between Canadian branches, clinics, or client-success teams.",
        "Cloud & DevOps":
          "Cloud setups with clear residency and backup conversations when Canadian stakeholders ask where data lives.",
        "Data & Business Intelligence":
          "Unified reporting for founders who operate across provinces and are tired of three different spreadsheet truths.",
        Cybersecurity:
          "Hardening and access reviews aligned to the privacy expectations Canadian clients raise in procurement.",
        "Enterprise Solutions":
          "CRM and ERP layers for Canadian organizations that need role clarity across departments without enterprise bloat.",
        "Blockchain Development":
          "Shared-record designs only when Canadian supply or credential use cases require them.",
        "Healthcare Software Development":
          "Clinic scheduling, records adjuncts, and billing-adjacent workflows designed with Canadian care-team realities in mind.",
        "AR/VR Development":
          "Training experiences for Canadian industrial and education teams when practice-in-simulation reduces live risk.",
        "Testing & QA":
          "Cross-device and role QA so bilingual or multi-province rollouts do not surprise you in production.",
      },
    },
    whyChoose: {
      overlineText: "Why choose us",
      title: "Why Canadian businesses work with us",
      description:
        "Digital transformation and SaaS delivery with clear scope, privacy-aware practices, and seniors who stay on the engagement.",
      values: [
        {
          title: "Ops and product balance",
          description:
            "We build for Canadian companies that need both customer-facing product quality and back-office reliability in the same roadmap.",
        },
        {
          title: "Privacy-aware defaults",
          description:
            "Access control, least privilege, and clear data-handling conversations when Canadian buyers ask procurement questions early.",
        },
        {
          title: "CAD-friendly commercial clarity",
          description:
            "Written milestones and change control so finance teams in Toronto, Vancouver, or Calgary can forecast without drama.",
        },
        {
          title: "Overlap with Canadian hours",
          description:
            "Standups and written updates that fit Eastern and Pacific schedules without forcing midnight decisions.",
        },
        {
          title: "Senior continuity",
          description:
            "Named engineers and designers from kickoff through maintenance, not a rotating cast after the contract is signed.",
        },
        {
          title: "Modernization without theater",
          description:
            "We replace fragile tools with systems staff will use, not a transformation deck that never reaches production.",
        },
      ],
    },
    process: {
      overlineText: "How we work with Canada",
      title: "Delivery process for Canadian projects",
      titleItalic: "clear, calm, and auditable",
      description:
        "A delivery path for Canadian product and service leaders who want discovery discipline, privacy questions answered early, and demos they can show internally.",
      ctaLabel: "Start your Canada project",
      steps: [
        {
          step: "01",
          shortLabel: "Discover",
          title: "Workflow and compliance discovery",
          description:
            "We document how Canadian teams actually operate, including privacy constraints and success metrics, before proposing architecture.",
        },
        {
          step: "02",
          shortLabel: "Plan",
          title: "Architecture and commercial plan",
          description:
            "Hosting posture, integrations, timeline, and cost are agreed so technical and finance stakeholders share one plan.",
        },
        {
          step: "03",
          shortLabel: "Design",
          title: "Inclusive, practical UX",
          description:
            "Prototypes reviewed with operators and managers until the flow fits bilingual or multi-site realities where they apply.",
        },
        {
          step: "04",
          shortLabel: "Build",
          title: "Visible sprint delivery",
          description:
            "Two-week demos your Canadian stakeholders can critique, with backlog decisions written down.",
        },
        {
          step: "05",
          shortLabel: "Assure",
          title: "QA before provincial rollout",
          description:
            "Role, device, and permissions testing so a Toronto pilot does not break the Vancouver week-one experience.",
        },
        {
          step: "06",
          shortLabel: "Support",
          title: "Launch and steady support",
          description:
            "Handover, training, and maintenance options that keep Canadian operations stable after go-live.",
        },
      ],
    },
    projects: {
      overlineText: "Recent projects",
      title: "Projects relevant to Canadian buyers",
      description:
        "Education, learning, travel, finance, HR, and healthcare systems that mirror the modernization work Canadian service and product teams commission.",
      slugs: [
        "ai-school-erp",
        "e-learning-portal",
        "travel-and-tour-website",
        "cash-management-system",
        "hr-management-software",
        "hospital-management-system",
      ],
    },
  },

  Australia: {
    services: {
      overlineText: "Services in Australia",
      title: "Software Development Services for Australian Operators",
      description:
        "Automation and ops platforms for Australian service businesses and digital-first teams who need fewer manual steps across hospitality, retail, and field operations.",
      order: orderFirst([
        "Automation Services",
        "Enterprise Solutions",
        "Mobile App Development",
        "Ecommerce Development",
        "Cloud & DevOps",
        "Healthcare Software Development",
      ]),
      tags: {
        "Automation Services": "Ops · Field",
        "Ecommerce Development": "Retail · Payments",
        "Enterprise Solutions": "Multi-site",
      },
      descriptions: {
        "Software Development":
          "Practical systems for Australian operators who need rostering, inventory, and customer workflows to stop living in shared inboxes.",
        "Mobile App Development":
          "Field and venue apps for Australian teams working across sites, with offline-tolerant patterns for patchy connectivity.",
        "Web Development":
          "Reliable web platforms for Australian service brands that need speed on mobile and clear booking or ops journeys.",
        "Ecommerce Development":
          "Retail and hospitality commerce with Australian payment and shipping expectations, plus inventory that survives multi-site reality.",
        "UI/UX Design":
          "Straightforward interfaces for busy Australian floor staff who will abandon any tool that slows a service rush.",
        "Artificial Intelligence":
          "Assistive AI for roster hints, intake sorting, and demand signals where Australian venues and clinics feel staffing pressure.",
        "Machine Learning":
          "Forecasting for perishable stock, bookings, and labour demand using the operational data Australian teams already capture.",
        "Automation Services":
          "Approvals, alerts, and system handoffs that cut double entry between POS, rostering, and accounting tools.",
        "Cloud & DevOps":
          "Hosting and release discipline suited to Australian peak periods, from tourism seasons to retail campaigns.",
        "Data & Business Intelligence":
          "Site and region dashboards so Australian owners see utilisation and margin without waiting on weekly manual packs.",
        Cybersecurity:
          "Access control and hardening for customer and payment data under the expectations Australian buyers raise in vendor reviews.",
        "Enterprise Solutions":
          "Multi-site ERP and CRM patterns for Australian groups running venues, clinics, or warehouses under one brand.",
        "Blockchain Development":
          "Selective ledger use when Australian supply-chain audit needs are real.",
        "Healthcare Software Development":
          "Clinic and allied-health ops software focused on scheduling, records adjuncts, and less front-desk friction.",
        "AR/VR Development":
          "Training simulations for Australian industrial and safety contexts when practice reduces live-site risk.",
        "Testing & QA":
          "Peak-path and device testing so Friday night service or Monday clinic open is not when defects appear.",
      },
    },
    whyChoose: {
      overlineText: "Why choose us",
      title: "Why Australian businesses work with us",
      description:
        "Automation-first delivery for operators who measure success in fewer manual hours, cleaner handoffs, and systems staff will actually use.",
      values: [
        {
          title: "Built for multi-site ops",
          description:
            "We design for Australian groups running venues, clinics, or warehouses across cities, not single-desk demos.",
        },
        {
          title: "Automation over admin theater",
          description:
            "Integrations and workflow rules come before vanity dashboards that nobody opens during a rush.",
        },
        {
          title: "AUD-clear scoping",
          description:
            "Milestones and change control written so Australian finance leads can approve without decoding agency fluff.",
        },
        {
          title: "AEST-friendly collaboration",
          description:
            "Call windows and written updates that respect Australian business days while keeping delivery moving.",
        },
        {
          title: "Floor-tested UX",
          description:
            "Prototypes reviewed with the people taking orders, checking guests in, or moving stock, not only executives.",
        },
        {
          title: "Steady after launch",
          description:
            "Support through peak seasons when Australian operators cannot afford a fragile go-live.",
        },
      ],
    },
    process: {
      overlineText: "How we work with Australia",
      title: "Delivery process for Australian projects",
      titleItalic: "ops-first and peak-aware",
      description:
        "Discovery through launch for Australian stakeholders who care about roster reality, payment reliability, and demos that survive a busy Friday.",
      ctaLabel: "Start your Australia project",
      steps: [
        {
          step: "01",
          shortLabel: "Discover",
          title: "Operations discovery on the floor",
          description:
            "We map how Australian venues, clinics, or warehouses actually move work during peak hours before proposing automation.",
        },
        {
          step: "02",
          shortLabel: "Plan",
          title: "Integrations and commercial plan",
          description:
            "POS, payments, rostering, timeline, and cost are locked in writing so surprises do not land mid-season.",
        },
        {
          step: "03",
          shortLabel: "Design",
          title: "Staff-speed prototypes",
          description:
            "Flows validated with floor and admin staff until tap paths are short enough for real service pressure.",
        },
        {
          step: "04",
          shortLabel: "Build",
          title: "Sprint delivery with live demos",
          description:
            "Working increments Australian stakeholders can trial on a quiet day before trusting a peak weekend.",
        },
        {
          step: "05",
          shortLabel: "Assure",
          title: "Peak-path QA",
          description:
            "We test the booking, checkout, and roster paths that break when volume spikes.",
        },
        {
          step: "06",
          shortLabel: "Launch",
          title: "Go-live with seasonal support",
          description:
            "Training and hypercare options timed around Australian peak trading or tourism windows.",
        },
      ],
    },
    projects: {
      overlineText: "Recent projects",
      title: "Projects relevant to Australian operators",
      description:
        "Hotel, restaurant, travel, retail POS, cash control, and pharmacy inventory systems aligned to Australian hospitality and multi-site ops.",
      slugs: [
        "hotel-management-system",
        "restaurant-pos",
        "travel-and-tours-management",
        "royal-pos",
        "cash-management-system",
        "medicine-inventory-system",
      ],
    },
  },

  "United Kingdom": {
    services: {
      overlineText: "Services in the United Kingdom",
      title: "Software Development Services for UK B2B Teams",
      description:
        "B2B SaaS and regulated-operator software for UK founders and professional services teams who need clear auditability, GDPR-aware design, and senior delivery.",
      order: orderFirst([
        "Software Development",
        "Cybersecurity",
        "Enterprise Solutions",
        "Data & Business Intelligence",
        "Cloud & DevOps",
        "Testing & QA",
      ]),
      tags: {
        Cybersecurity: "GDPR-aware",
        "Software Development": "B2B SaaS",
        "Enterprise Solutions": "Regulated ops",
      },
      descriptions: {
        "Software Development":
          "B2B platforms for UK SaaS and professional services teams that need contractual clarity, maintainable code, and features procurement can defend.",
        "Mobile App Development":
          "Client and field apps for UK service firms with secure auth patterns and offline-tolerant work where sites demand it.",
        "Web Development":
          "Web products with accessibility and performance expectations common in UK enterprise and public-adjacent buying cycles.",
        "Ecommerce Development":
          "Commerce and billing experiences for UK sellers who need VAT-aware display, dependable checkout, and sober ops tooling.",
        "UI/UX Design":
          "Interfaces that survive UK buyer demos and day-two admin use, with clarity favored over decorative complexity.",
        "Artificial Intelligence":
          "Assistive AI with documented limitations for UK buyers who will ask how decisions are made before signing.",
        "Machine Learning":
          "Scoring and forecasting models that plug into UK ops data with explainability suitable for internal audit questions.",
        "Automation Services":
          "Controlled automations across CRM, billing, and support tools with human checkpoints where UK process owners require them.",
        "Cloud & DevOps":
          "Environments and release gates that support UK change-management habits and rollback expectations.",
        "Data & Business Intelligence":
          "Reporting UK leadership can trust in board packs without reconciling three conflicting exports the night before.",
        Cybersecurity:
          "GDPR-aware access control, retention conversations, and hardening for products processing UK personal data.",
        "Enterprise Solutions":
          "CRM and internal platforms for UK firms juggling client confidentiality, roles, and multi-office delivery.",
        "Blockchain Development":
          "Audit-oriented ledger features only when UK multi-party trust problems need them.",
        "Healthcare Software Development":
          "Care-ops software respectful of UK clinic workflows and the privacy bar healthcare buyers set.",
        "AR/VR Development":
          "Training experiences for UK industrial and education contexts when simulation reduces live risk.",
        "Testing & QA":
          "Regression discipline aligned to UK release boards that will not accept hope as a test strategy.",
      },
    },
    whyChoose: {
      overlineText: "Why choose us",
      title: "Why UK businesses work with us",
      description:
        "Senior delivery for B2B SaaS and regulated operators who need GDPR-aware design, written scope, and people who can answer procurement questions.",
      values: [
        {
          title: "Regulated-buyer fluency",
          description:
            "We expect UK security questionnaires, DPIA conversations, and access reviews, and we design with those constraints visible from day one.",
        },
        {
          title: "B2B SaaS craft",
          description:
            "Multi-tenant patterns, role models, and audit logs are treated as product requirements, not afterthoughts.",
        },
        {
          title: "GBP-clear commercials",
          description:
            "Fixed phases and change control that UK finance and legal can read without translating agency jargon.",
        },
        {
          title: "UK-hours collaboration",
          description:
            "Overlap with London time for decisions that should not wait overnight, plus written records for everything else.",
        },
        {
          title: "Named senior ownership",
          description:
            "The people who answer the RFP stay accountable through build and launch.",
        },
        {
          title: "Evidence over slogans",
          description:
            "Demos, test notes, and runbooks so UK stakeholders can show governance they are doing real diligence.",
        },
      ],
    },
    process: {
      overlineText: "How we work with the United Kingdom",
      title: "Delivery process for UK projects",
      titleItalic: "audit-ready and milestone-clear",
      description:
        "A path for UK B2B and regulated buyers who want discovery notes, security conversations early, and sprint evidence they can file.",
      ctaLabel: "Start your UK project",
      steps: [
        {
          step: "01",
          shortLabel: "Discover",
          title: "Requirements and risk discovery",
          description:
            "We capture user journeys, personal-data touchpoints, and success metrics UK stakeholders will later defend in procurement.",
        },
        {
          step: "02",
          shortLabel: "Plan",
          title: "Architecture and controls plan",
          description:
            "Hosting, auth, retention, integrations, timeline, and cost are documented before build spend ramps.",
        },
        {
          step: "03",
          shortLabel: "Design",
          title: "Accessible, reviewable UX",
          description:
            "Prototypes checked with operators and compliance-minded reviewers until flows are clear and least-privilege ready.",
        },
        {
          step: "04",
          shortLabel: "Build",
          title: "Evidence-producing sprints",
          description:
            "Working software plus written sprint outcomes UK PMs can share with sponsors without theatre.",
        },
        {
          step: "05",
          shortLabel: "Assure",
          title: "Security and regression QA",
          description:
            "Permission, data, and peak-path testing before go-live, with defects tracked to closure.",
        },
        {
          step: "06",
          shortLabel: "Launch",
          title: "Controlled launch and support",
          description:
            "Runbooks, access handover, and maintenance options aligned to UK change windows.",
        },
      ],
    },
    projects: {
      overlineText: "Recent projects",
      title: "Projects relevant to UK B2B buyers",
      description:
        "CRM, finance control, HR, healthcare ops, learning, and travel systems that map to UK professional services and SaaS buying patterns.",
      slugs: [
        "prime-lead-crm",
        "cash-management-system",
        "hr-management-software",
        "hospital-management-system",
        "e-learning-portal",
        "travel-and-tour-website",
      ],
    },
  },

  "United Arab Emirates": {
    services: {
      overlineText: "Services in the United Arab Emirates",
      title: "Software Development Services for UAE Businesses",
      description:
        "CRM, ERP, mobile apps, and business automation for UAE growth teams in retail, hospitality, logistics, and enterprise operations across Dubai and beyond.",
      order: orderFirst([
        "Enterprise Solutions",
        "Mobile App Development",
        "Ecommerce Development",
        "Automation Services",
        "Software Development",
        "Cloud & DevOps",
      ]),
      tags: {
        "Enterprise Solutions": "CRM · ERP",
        "Ecommerce Development": "Retail · Gulf",
        "Mobile App Development": "Field · Guest",
      },
      descriptions: {
        "Software Development":
          "Custom platforms for UAE operators who need CRM, ERP, and customer journeys that keep up with fast retail and hospitality growth.",
        "Mobile App Development":
          "Guest, driver, and staff apps for UAE businesses coordinating work across malls, warehouses, and multi-emirate sites.",
        "Web Development":
          "High-performance web products for UAE brands that sell and operate in bilingual environments and expect polished presentation.",
        "Ecommerce Development":
          "Retail and marketplace builds aware of Gulf payment habits, multi-warehouse stock, and campaign-driven traffic spikes.",
        "UI/UX Design":
          "Premium, clear interfaces for UAE customer-facing journeys and the ops screens that keep those journeys stocked and staffed.",
        "Artificial Intelligence":
          "Assistive AI for inventory hints, guest messaging triage, and document intake where UAE teams feel volume pressure.",
        "Machine Learning":
          "Demand and risk models for UAE retail and logistics patterns that swing hard around seasons and events.",
        "Automation Services":
          "Approval and notification flows that connect CRM, warehouse, and finance teams across emirates without WhatsApp chaos.",
        "Cloud & DevOps":
          "Release and hosting discipline for UAE products that must stay up through launches, sales, and peak travel periods.",
        "Data & Business Intelligence":
          "Executive and branch dashboards for UAE groups comparing site performance without waiting on manual consolidations.",
        Cybersecurity:
          "Access control and hardening for customer and payment data under the vendor expectations UAE enterprises set.",
        "Enterprise Solutions":
          "CRM and ERP cores for UAE retailers, hospitality groups, and logistics operators scaling past spreadsheet control.",
        "Blockchain Development":
          "Shared-record designs when UAE supply or multi-party audit needs are explicit.",
        "Healthcare Software Development":
          "Clinic and hospital ops software for UAE care providers who need scheduling, billing, and pharmacy coordination.",
        "AR/VR Development":
          "Showroom and training experiences for UAE retail and industrial buyers when immersion supports sales or safety.",
        "Testing & QA":
          "Campaign and peak-path testing so Dubai launch weeks are not the first real load test.",
      },
    },
    whyChoose: {
      overlineText: "Why choose us",
      title: "Why UAE businesses work with us",
      description:
        "CRM, ERP, and automation delivery for growth teams who need bilingual-ready experiences, multi-site ops, and seniors who move at UAE pace.",
      values: [
        {
          title: "CRM and ERP that fit Gulf ops",
          description:
            "We build around retail, hospitality, and logistics realities across emirates, not generic Western templates pasted onto Dubai.",
        },
        {
          title: "Bilingual-ready product thinking",
          description:
            "Arabic and English journey needs are considered in UX and content structure when your UAE customers expect both.",
        },
        {
          title: "AED-clear commercial terms",
          description:
            "Milestones and change control written for UAE finance approvers who move quickly but still want a paper trail.",
        },
        {
          title: "Gulf-hours collaboration",
          description:
            "Overlap with UAE business days for decisions that unblock vendors, malls, and launch calendars.",
        },
        {
          title: "Launch-week reliability",
          description:
            "QA and hypercare options aimed at the campaign and tourism peaks that define UAE trading.",
        },
        {
          title: "One accountable senior team",
          description:
            "Named ownership from discovery through support so UAE stakeholders are not bounced between vendors.",
        },
      ],
    },
    process: {
      overlineText: "How we work with the United Arab Emirates",
      title: "Delivery process for UAE projects",
      titleItalic: "fast, clear, and launch-ready",
      description:
        "Discovery through launch for UAE growth teams who need CRM/ERP clarity, bilingual UX checks, and demos that survive campaign week.",
      ctaLabel: "Start your UAE project",
      steps: [
        {
          step: "01",
          shortLabel: "Discover",
          title: "Growth and ops discovery",
          description:
            "We map how UAE retail, hospitality, or logistics teams sell, stock, and serve across sites before proposing CRM or ERP scope.",
        },
        {
          step: "02",
          shortLabel: "Plan",
          title: "Architecture and launch plan",
          description:
            "Integrations, bilingual needs, timeline, and cost are agreed around the real launch calendar, not an abstract roadmap.",
        },
        {
          step: "03",
          shortLabel: "Design",
          title: "Customer and ops prototypes",
          description:
            "Flows reviewed for guest-facing polish and back-office speed until both sides of the UAE operation work.",
        },
        {
          step: "04",
          shortLabel: "Build",
          title: "Sprint delivery with stakeholder demos",
          description:
            "Working increments UAE decision-makers can trial before committing a campaign or multi-site rollout.",
        },
        {
          step: "05",
          shortLabel: "Assure",
          title: "Campaign-path QA",
          description:
            "We pressure-test checkout, booking, and inventory paths that fail first when Gulf traffic spikes.",
        },
        {
          step: "06",
          shortLabel: "Launch",
          title: "Go-live with hypercare",
          description:
            "Training, monitoring habits, and support coverage through the UAE launch window and the weeks after.",
        },
      ],
    },
    projects: {
      overlineText: "Recent projects",
      title: "Projects relevant to UAE growth teams",
      description:
        "Hospitality, travel, retail POS, healthcare, CRM, and restaurant systems that mirror CRM/ERP and guest-ops work common in the UAE.",
      slugs: [
        "hotel-management-system",
        "travel-and-tours-management",
        "royal-pos",
        "hospital-management-system",
        "prime-lead-crm",
        "restaurant-pos",
      ],
    },
  },
};

const COUNTRY_KEYS: LocationMarketKey[] = [
  "Pakistan",
  "United States",
  "Canada",
  "Australia",
  "United Kingdom",
  "United Arab Emirates",
];

/** Map any place label (country or Pakistan city) to a market copy key. */
export function resolveLocationMarketKey(
  place: string,
  options?: { isPakistan?: boolean; hub?: boolean }
): LocationMarketKey {
  if (options?.hub) return "hub";
  if (options?.isPakistan) return "Pakistan";
  if ((COUNTRY_KEYS as string[]).includes(place)) return place as LocationMarketKey;
  // Pakistan city pages and unknown places inherit Pakistan market substance
  return "Pakistan";
}

export function getLocationMarketCopy(
  place: string,
  options?: { isPakistan?: boolean; hub?: boolean }
): MarketSectionCopy {
  return LOCATION_MARKET_COPY[resolveLocationMarketKey(place, options)];
}

export type LocationCity = {
  slug: string;
  label: string;
  href: string;
  city: string;
  blurb?: string;
};

/** Location case work uses the recent-projects showcase shape */
export type LocationProject = ShowcaseProject;

export type LocationFact = {
  value: string;
  label: string;
  detail?: string;
};

export type LocationIndustryFocus = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export type LocationAboutContent = {
  overlineText?: string;
  title: string;
  paragraphs: string[];
  values: {
    title: string;
    description: string;
  }[];
  image: ImageAsset;
  teamLink: string;
  teamCta: string;
};

export type LocationSectionHeading = {
  overlineText: string;
  title: string;
  titleItalic?: string;
  description: string;
};

export type LocationServicesContent = LocationSectionHeading & {
  items: Array<Pick<ServiceCard, "title" | "description" | "tag"> & { accent?: string }>;
};

export type LocationIndustriesContent = LocationSectionHeading & {
  items: Industry[];
};

export type LocationProcessContent = LocationSectionHeading & {
  steps: typeof baseProcessSteps;
  ctaLabel: string;
};

export type LocationTechContent = LocationSectionHeading & {
  intro: string;
};

export type LocationTeamContent = LocationSectionHeading & {
  intro: string;
};

export type LocationSocialProofItem = {
  quote: string;
  author: string;
  role: string;
  /** Omit for anonymized case blurbs , never invent Google/Clutch/Trustpilot tags */
  source?: string;
};

export type LocationTestimonialsContent = LocationSectionHeading & {
  items: LocationSocialProofItem[];
};

export type LocationCaseStudiesContent = LocationSectionHeading & {
  items: CaseStudy[];
};

export type LocationProjectsContent = {
  overlineText: string;
  title: string;
  description?: string;
};

export type LocationWhyChooseContent = LocationSectionHeading & {
  values: Array<{ title: string; description: string }>;
};

export type LocationTrustContent = {
  ariaLabel: string;
};

export type LocationPageSections = {
  trust: LocationTrustContent;
  services: LocationServicesContent;
  whyChoose: LocationWhyChooseContent;
  projects: LocationProjectsContent;
  industries: LocationIndustriesContent;
  tech: LocationTechContent;
  process: LocationProcessContent;
  caseStudies: LocationCaseStudiesContent;
  testimonials: LocationTestimonialsContent;
  team: LocationTeamContent;
};

export type LocationSoftwareSolution = {
  title: string;
  description: string;
  href: string;
  Icon: typeof Users;
};

/** Product solutions highlighted on Pakistan + city location pages */
export const locationSoftwareSolutions: LocationSoftwareSolution[] = [
  {
    title: "CRM",
    description:
      "Lead capture, pipeline visibility, and sales follow-ups in one system your team will actually use.",
    href: solutionPath("crm"),
    Icon: Users,
  },
  {
    title: "ERP",
    description:
      "Finance, inventory, production, and reporting connected so owners see one operational truth.",
    href: solutionPath("erp"),
    Icon: Workflow,
  },
  {
    title: "HMS",
    description:
      "Hospital and clinic management covering appointments, EMR, billing, pharmacy, and staff workflows.",
    href: "/healthcare-software-development",
    Icon: HeartPulse,
  },
  {
    title: "POS",
    description:
      "Retail and restaurant checkout with inventory sync, invoices, and multi-branch reporting.",
    href: "/projects/royal-pos",
    Icon: ShoppingCart,
  },
  {
    title: "Inventory",
    description:
      "Stock control, purchasing, and warehouse visibility built around how your warehouse actually runs.",
    href: solutionPath("inventory-management"),
    Icon: Warehouse,
  },
  {
    title: "HRMS",
    description:
      "Attendance, payroll, leave, and employee records without spreadsheet chaos across departments.",
    href: solutionPath("hrms"),
    Icon: Boxes,
  },
];

export type LocationPageContent = {
  slug: string;
  country: string;
  href: string;
  eyebrow?: string;
  title: string;
  description: string;
  /** Optional hero paragraphs rendered below the main description */
  descriptionSecondary?: string;
  descriptionTertiary?: string;
  /** SEO meta title (falls back to title). Avoid brand suffix; layout template adds it. */
  metaTitle?: string;
  /** SEO meta description (~150,160 chars). Falls back to description. */
  metaDescription?: string;
  coverageTitle?: string;
  coverageDescription?: string;
  about: LocationAboutContent;
  caseWork?: {
    overlineText?: string;
    title?: string;
    description?: string;
  };
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
  heroImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  cities: LocationCity[];
  projects: LocationProject[];
  facts: {
    title: string;
    subtitle: string;
    items: LocationFact[];
  };
  industries: {
    title: string;
    subtitle: string;
    items: LocationIndustryFocus[];
  };
  faqs: FaqItem[];
  faqIntro: string;
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
  /** Per-place copy for every marketing section on location pages */
  sections: LocationPageSections;
};

/** City pages live at /location/software-house-and-software-company-in-{city} */
const locationBasePath = "/location";

function cityLocationSlug(citySlug: string) {
  return `software-house-and-software-company-in-${citySlug}`;
}

function cityLocationHref(citySlug: string) {
  return `${locationBasePath}/${cityLocationSlug(citySlug)}`;
}

export const pakistanCities: LocationCity[] = [
  {
    slug: cityLocationSlug("islamabad"),
    label: "Software house and software company in Islamabad",
    href: cityLocationHref("islamabad"),
    city: "Islamabad",
    blurb: "HMS, clinic ERP, and government-ready platforms in the capital.",
  },
  {
    slug: cityLocationSlug("rawalpindi"),
    label: "Software house and software company in Rawalpindi",
    href: cityLocationHref("rawalpindi"),
    city: "Rawalpindi",
    blurb: "Twin-city delivery for clinics, schools, and service businesses.",
  },
  {
    slug: cityLocationSlug("lahore"),
    label: "Software house and software company in Lahore",
    href: cityLocationHref("lahore"),
    city: "Lahore",
    blurb: "Product teams, startups, and enterprise builds in Punjab’s tech hub.",
  },
  {
    slug: cityLocationSlug("faisalabad"),
    label: "Software house and software company in Faisalabad",
    href: cityLocationHref("faisalabad"),
    city: "Faisalabad",
    blurb: "ERP and ops software for industry and growing local businesses.",
  },
  {
    slug: cityLocationSlug("multan"),
    label: "Software house and software company in Multan",
    href: cityLocationHref("multan"),
    city: "Multan",
    blurb: "Custom web and mobile systems for regional companies scaling up.",
  },
  {
    slug: cityLocationSlug("gujranwala"),
    label: "Software house and software company in Gujranwala",
    href: cityLocationHref("gujranwala"),
    city: "Gujranwala",
    blurb: "Manufacturing and trade workflows digitized for local operators.",
  },
  {
    slug: cityLocationSlug("karachi"),
    label: "Software house and software company in Karachi",
    href: cityLocationHref("karachi"),
    city: "Karachi",
    blurb: "High-scale retail, logistics, and fintech systems for Pakistan’s largest city.",
  },
  {
    slug: cityLocationSlug("peshawar"),
    label: "Software house and software company in Peshawar",
    href: cityLocationHref("peshawar"),
    city: "Peshawar",
    blurb: "Reliable web apps and internal tools for KPK organizations.",
  },
  {
    slug: cityLocationSlug("bahawalpur"),
    label: "Software house and software company in Bahawalpur",
    href: cityLocationHref("bahawalpur"),
    city: "Bahawalpur",
    blurb: "Practical software for education and regional commerce.",
  },
  {
    slug: cityLocationSlug("abbottabad"),
    label: "Software house and software company in Abbottabad",
    href: cityLocationHref("abbottabad"),
    city: "Abbottabad",
    blurb: "Lean digital products for schools, clinics, and local services.",
  },
  {
    slug: cityLocationSlug("rahim-yar-khan"),
    label: "Software house and software company in Rahim Yar Khan",
    href: cityLocationHref("rahim-yar-khan"),
    city: "Rahim Yar Khan",
    blurb: "Ops and inventory systems for south Punjab businesses.",
  },
  {
    slug: cityLocationSlug("okara"),
    label: "Software house and software company in Okara",
    href: cityLocationHref("okara"),
    city: "Okara",
    blurb: "Affordable custom software for SMEs and agribusiness teams.",
  },
  {
    slug: cityLocationSlug("sialkot"),
    label: "Software house and software company in Sialkot",
    href: cityLocationHref("sialkot"),
    city: "Sialkot",
    blurb: "Export-ready platforms for manufacturers and trading houses.",
  },
  {
    slug: cityLocationSlug("hyderabad"),
    label: "Software house and software company in Hyderabad",
    href: cityLocationHref("hyderabad"),
    city: "Hyderabad",
    blurb: "Custom web, ERP, and digital products for Sindh’s second-largest city.",
  },
  {
    slug: cityLocationSlug("quetta"),
    label: "Software house and software company in Quetta",
    href: cityLocationHref("quetta"),
    city: "Quetta",
    blurb: "Reliable HMS, ERP, and ops software for Balochistan’s capital.",
  },
  {
    slug: cityLocationSlug("sargodha"),
    label: "Software house and software company in Sargodha",
    href: cityLocationHref("sargodha"),
    city: "Sargodha",
    blurb: "Practical software for agribusiness, clinics, and growing SMEs.",
  },
  {
    slug: cityLocationSlug("sukkur"),
    label: "Software house and software company in Sukkur",
    href: cityLocationHref("sukkur"),
    city: "Sukkur",
    blurb: "Ops, inventory, and commerce systems for upper Sindh businesses.",
  },
  {
    slug: cityLocationSlug("mardan"),
    label: "Software house and software company in Mardan",
    href: cityLocationHref("mardan"),
    city: "Mardan",
    blurb: "Web apps and internal tools for organizations across KPK.",
  },
  {
    slug: cityLocationSlug("gujrat"),
    label: "Software house and software company in Gujrat",
    href: cityLocationHref("gujrat"),
    city: "Gujrat",
    blurb: "Manufacturing and trade platforms for industrial operators.",
  },
  {
    slug: cityLocationSlug("sahiwal"),
    label: "Software house and software company in Sahiwal",
    href: cityLocationHref("sahiwal"),
    city: "Sahiwal",
    blurb: "Affordable custom software for SMEs, clinics, and education.",
  },
  {
    slug: cityLocationSlug("dera-ghazi-khan"),
    label: "Software house and software company in Dera Ghazi Khan",
    href: cityLocationHref("dera-ghazi-khan"),
    city: "Dera Ghazi Khan",
    blurb: "Regional ops and institutional software for south Punjab.",
  },
  {
    slug: cityLocationSlug("sheikhupura"),
    label: "Software house and software company in Sheikhupura",
    href: cityLocationHref("sheikhupura"),
    city: "Sheikhupura",
    blurb: "Industrial and commercial workflows for Lahore’s industrial belt.",
  },
  {
    slug: cityLocationSlug("jhang"),
    label: "Software house and software company in Jhang",
    href: cityLocationHref("jhang"),
    city: "Jhang",
    blurb: "Lean digital products for agribusiness and local services.",
  },
  {
    slug: cityLocationSlug("kasur"),
    label: "Software house and software company in Kasur",
    href: cityLocationHref("kasur"),
    city: "Kasur",
    blurb: "Practical ERP and ops tools for trade and manufacturing teams.",
  },
  {
    slug: cityLocationSlug("larkana"),
    label: "Software house and software company in Larkana",
    href: cityLocationHref("larkana"),
    city: "Larkana",
    blurb: "Custom web and admin systems for Sindh regional organizations.",
  },
  {
    slug: cityLocationSlug("mingora"),
    label: "Software house and software company in Mingora",
    href: cityLocationHref("mingora"),
    city: "Mingora",
    blurb: "Lean software for clinics, schools, and tourism businesses in Swat.",
  },
  {
    slug: cityLocationSlug("nawabshah"),
    label: "Software house and software company in Nawabshah",
    href: cityLocationHref("nawabshah"),
    city: "Nawabshah",
    blurb: "Ops and institutional platforms for Benazirabad / Nawabshah.",
  },
  {
    slug: cityLocationSlug("mirpur"),
    label: "Software house and software company in Mirpur",
    href: cityLocationHref("mirpur"),
    city: "Mirpur",
    blurb: "Product and business software for AJK teams and diaspora-linked firms.",
  },
  {
    slug: cityLocationSlug("muzaffarabad"),
    label: "Software house and software company in Muzaffarabad",
    href: cityLocationHref("muzaffarabad"),
    city: "Muzaffarabad",
    blurb: "Reliable digital systems for AJK institutions and local businesses.",
  },
  // Gujranwala region
  {
    slug: cityLocationSlug("jhelum"),
    label: "Software house and software company in Jhelum",
    href: cityLocationHref("jhelum"),
    city: "Jhelum",
    blurb: "Practical software for clinics, schools, and regional businesses.",
  },
  {
    slug: cityLocationSlug("chakwal"),
    label: "Software house and software company in Chakwal",
    href: cityLocationHref("chakwal"),
    city: "Chakwal",
    blurb: "Lean digital products for SMEs, clinics, and local services.",
  },
  {
    slug: cityLocationSlug("wazirabad"),
    label: "Software house and software company in Wazirabad",
    href: cityLocationHref("wazirabad"),
    city: "Wazirabad",
    blurb: "Manufacturing and trade workflows for industrial operators.",
  },
  // Central Punjab
  {
    slug: cityLocationSlug("chiniot"),
    label: "Software house and software company in Chiniot",
    href: cityLocationHref("chiniot"),
    city: "Chiniot",
    blurb: "Ops and commerce software for furniture trade and local SMEs.",
  },
  {
    slug: cityLocationSlug("toba-tek-singh"),
    label: "Software house and software company in Toba Tek Singh",
    href: cityLocationHref("toba-tek-singh"),
    city: "Toba Tek Singh",
    blurb: "Affordable custom software for agribusiness and growing SMEs.",
  },
  {
    slug: cityLocationSlug("khanewal"),
    label: "Software house and software company in Khanewal",
    href: cityLocationHref("khanewal"),
    city: "Khanewal",
    blurb: "Regional ops and institutional software for central Punjab.",
  },
  {
    slug: cityLocationSlug("vehari"),
    label: "Software house and software company in Vehari",
    href: cityLocationHref("vehari"),
    city: "Vehari",
    blurb: "Practical ERP and web tools for agribusiness and local trade.",
  },
  {
    slug: cityLocationSlug("muzaffargarh"),
    label: "Software house and software company in Muzaffargarh",
    href: cityLocationHref("muzaffargarh"),
    city: "Muzaffargarh",
    blurb: "Custom web and ops systems for south Punjab businesses.",
  },
  // Khyber Pakhtunkhwa
  {
    slug: cityLocationSlug("nowshera"),
    label: "Software house and software company in Nowshera",
    href: cityLocationHref("nowshera"),
    city: "Nowshera",
    blurb: "Reliable web apps and internal tools for KPK organizations.",
  },
  {
    slug: cityLocationSlug("kohat"),
    label: "Software house and software company in Kohat",
    href: cityLocationHref("kohat"),
    city: "Kohat",
    blurb: "Lean HMS, school platforms, and ops software for regional teams.",
  },
  {
    slug: cityLocationSlug("swabi"),
    label: "Software house and software company in Swabi",
    href: cityLocationHref("swabi"),
    city: "Swabi",
    blurb: "Practical digital products for clinics, schools, and SMEs.",
  },
  {
    slug: cityLocationSlug("charsadda"),
    label: "Software house and software company in Charsadda",
    href: cityLocationHref("charsadda"),
    city: "Charsadda",
    blurb: "Affordable custom software for trade, education, and local services.",
  },
  {
    slug: cityLocationSlug("dera-ismail-khan"),
    label: "Software house and software company in Dera Ismail Khan",
    href: cityLocationHref("dera-ismail-khan"),
    city: "Dera Ismail Khan",
    blurb: "Regional ops and institutional platforms for southern KPK.",
  },
  // Sindh
  {
    slug: cityLocationSlug("mirpur-khas"),
    label: "Software house and software company in Mirpur Khas",
    href: cityLocationHref("mirpur-khas"),
    city: "Mirpur Khas",
    blurb: "Ops, inventory, and commerce systems for lower Sindh businesses.",
  },
  {
    slug: cityLocationSlug("khairpur"),
    label: "Software house and software company in Khairpur",
    href: cityLocationHref("khairpur"),
    city: "Khairpur",
    blurb: "Custom web and admin systems for upper Sindh organizations.",
  },
  {
    slug: cityLocationSlug("jacobabad"),
    label: "Software house and software company in Jacobabad",
    href: cityLocationHref("jacobabad"),
    city: "Jacobabad",
    blurb: "Practical software for clinics, schools, and regional commerce.",
  },
  {
    slug: cityLocationSlug("dadu"),
    label: "Software house and software company in Dadu",
    href: cityLocationHref("dadu"),
    city: "Dadu",
    blurb: "Lean digital products for SMEs, clinics, and local institutions.",
  },
  {
    slug: cityLocationSlug("thatta"),
    label: "Software house and software company in Thatta",
    href: cityLocationHref("thatta"),
    city: "Thatta",
    blurb: "Affordable custom software for coastal Sindh businesses.",
  },
  // Balochistan
  {
    slug: cityLocationSlug("gwadar"),
    label: "Software house and software company in Gwadar",
    href: cityLocationHref("gwadar"),
    city: "Gwadar",
    blurb: "Port, logistics, and commerce platforms for the coastal hub.",
  },
  {
    slug: cityLocationSlug("turbat"),
    label: "Software house and software company in Turbat",
    href: cityLocationHref("turbat"),
    city: "Turbat",
    blurb: "Reliable HMS, ERP, and ops software for Makran businesses.",
  },
  {
    slug: cityLocationSlug("khuzdar"),
    label: "Software house and software company in Khuzdar",
    href: cityLocationHref("khuzdar"),
    city: "Khuzdar",
    blurb: "Practical digital systems for regional institutions and SMEs.",
  },
  // AJK / Gilgit-Baltistan
  {
    slug: cityLocationSlug("kotli"),
    label: "Software house and software company in Kotli",
    href: cityLocationHref("kotli"),
    city: "Kotli",
    blurb: "Product and business software for AJK teams and local firms.",
  },
  {
    slug: cityLocationSlug("rawalakot"),
    label: "Software house and software company in Rawalakot",
    href: cityLocationHref("rawalakot"),
    city: "Rawalakot",
    blurb: "Lean software for clinics, schools, and tourism in Poonch.",
  },
  {
    slug: cityLocationSlug("gilgit"),
    label: "Software house and software company in Gilgit",
    href: cityLocationHref("gilgit"),
    city: "Gilgit",
    blurb: "Reliable digital systems for GB institutions and tourism businesses.",
  },
  {
    slug: cityLocationSlug("skardu"),
    label: "Software house and software company in Skardu",
    href: cityLocationHref("skardu"),
    city: "Skardu",
    blurb: "Hospitality, tourism, and ops software for Baltistan operators.",
  },
  // Islamabad metro
  {
    slug: cityLocationSlug("wah-cantt"),
    label: "Software house and software company in Wah Cantt",
    href: cityLocationHref("wah-cantt"),
    city: "Wah Cantt",
    blurb: "Industrial and institutional software for the metro belt.",
  },
  {
    slug: cityLocationSlug("taxila"),
    label: "Software house and software company in Taxila",
    href: cityLocationHref("taxila"),
    city: "Taxila",
    blurb: "Practical software for industry, education, and local services.",
  },
  {
    slug: cityLocationSlug("attock"),
    label: "Software house and software company in Attock",
    href: cityLocationHref("attock"),
    city: "Attock",
    blurb: "Custom web and ops tools for northern Punjab businesses.",
  },
];

type PlaceFocus = {
  economy: string;
  priorityIndustrySlugs: string[];
  serviceAngle: string;
};

const DEFAULT_FOCUS: PlaceFocus = {
  economy: "growing businesses, clinics, and schools",
  priorityIndustrySlugs: ["healthcare", "education", "retail", "manufacturing", "finance", "logistics"],
  serviceAngle: "practical custom software and ops platforms",
};

const CITY_FOCUS: Record<string, PlaceFocus> = {
  Islamabad: {
    economy: "capital-region clinics, institutions, and enterprises",
    priorityIndustrySlugs: ["healthcare", "education", "finance", "banking", "real-estate", "media"],
    serviceAngle: "HMS, compliance-aware systems, and government-ready workflows",
  },
  Rawalpindi: {
    economy: "twin-city clinics, schools, and service businesses",
    priorityIndustrySlugs: ["healthcare", "education", "real-estate", "retail", "logistics", "finance"],
    serviceAngle: "clinic platforms, school portals, and ops tools",
  },
  Lahore: {
    economy: "startups, schools, and growth-stage product teams",
    priorityIndustrySlugs: ["education", "healthcare", "retail", "finance", "media", "hospitality"],
    serviceAngle: "product MVPs, SaaS platforms, and education software",
  },
  Faisalabad: {
    economy: "textile manufacturers, traders, and industrial operators",
    priorityIndustrySlugs: ["manufacturing", "retail", "logistics", "agriculture", "healthcare", "education"],
    serviceAngle: "ERP, inventory, and production workflows",
  },
  Multan: {
    economy: "south Punjab commerce, clinics, and regional companies",
    priorityIndustrySlugs: ["retail", "agriculture", "healthcare", "education", "logistics", "hospitality"],
    serviceAngle: "web apps, POS, and multi-branch ops systems",
  },
  Gujranwala: {
    economy: "manufacturers, trading houses, and industrial SMEs",
    priorityIndustrySlugs: ["manufacturing", "retail", "logistics", "healthcare", "education", "finance"],
    serviceAngle: "shop-floor ERP and trade digitization",
  },
  Karachi: {
    economy: "retail, logistics, fintech, and high-volume operators",
    priorityIndustrySlugs: ["retail", "logistics", "finance", "banking", "healthcare", "media"],
    serviceAngle: "scalable retail, payments, and logistics platforms",
  },
  Peshawar: {
    economy: "KPK organizations, logistics, and local institutions",
    priorityIndustrySlugs: ["logistics", "healthcare", "education", "retail", "agriculture", "hospitality"],
    serviceAngle: "reliable web apps and fleet/ops tools",
  },
  Sialkot: {
    economy: "export manufacturers and trading companies",
    priorityIndustrySlugs: ["manufacturing", "logistics", "retail", "education", "healthcare", "finance"],
    serviceAngle: "export-ready platforms and production systems",
  },
  Sargodha: {
    economy: "agribusiness teams, clinics, and regional SMEs",
    priorityIndustrySlugs: ["agriculture", "healthcare", "education", "retail", "logistics", "manufacturing"],
    serviceAngle: "agri ops, clinic HMS, and lean business tools",
  },
  Quetta: {
    economy: "Balochistan institutions and regional businesses",
    priorityIndustrySlugs: ["healthcare", "education", "logistics", "retail", "agriculture", "hospitality"],
    serviceAngle: "stable HMS, ERP, and institutional systems",
  },
  Hyderabad: {
    economy: "Sindh clinics, retailers, and growing enterprises",
    priorityIndustrySlugs: ["healthcare", "retail", "education", "finance", "logistics", "manufacturing"],
    serviceAngle: "HMS, retail systems, and custom web platforms",
  },
  Gwadar: {
    economy: "port, logistics, and coastal commerce operators",
    priorityIndustrySlugs: ["logistics", "retail", "hospitality", "healthcare", "finance", "manufacturing"],
    serviceAngle: "port visibility, bookings, and commerce platforms",
  },
  Gilgit: {
    economy: "GB institutions and tourism businesses",
    priorityIndustrySlugs: ["hospitality", "healthcare", "education", "retail", "logistics", "agriculture"],
    serviceAngle: "tourism ops and institutional digital systems",
  },
  Skardu: {
    economy: "Baltistan hospitality and tourism operators",
    priorityIndustrySlugs: ["hospitality", "healthcare", "education", "retail", "logistics", "agriculture"],
    serviceAngle: "bookings, guest ops, and mobile-first tools",
  },
  "Wah Cantt": {
    economy: "industrial and institutional teams on the Islamabad metro belt",
    priorityIndustrySlugs: ["manufacturing", "education", "healthcare", "logistics", "finance", "retail"],
    serviceAngle: "industrial ERP and institutional platforms",
  },
};

function getFocus(place: string): PlaceFocus {
  return (
    CITY_FOCUS[place] ??
    COUNTRY_FOCUS[place] ?? {
      ...DEFAULT_FOCUS,
      economy: `${place} businesses, clinics, and schools`,
    }
  );
}

function hashPlace(place: string): number {
  let h = 0;
  for (let i = 0; i < place.length; i++) h = (h * 31 + place.charCodeAt(i)) >>> 0;
  return h;
}

function rotate<T>(items: T[], place: string): T[] {
  if (items.length === 0) return items;
  const offset = hashPlace(place) % items.length;
  return [...items.slice(offset), ...items.slice(0, offset)];
}

function serviceDescription(
  title: string,
  place: string,
  focus: PlaceFocus,
  options?: { isPakistan?: boolean; hub?: boolean }
): string {
  const market = getLocationMarketCopy(place, options);
  const fromMarket =
    market.services.descriptions[title as keyof typeof market.services.descriptions];
  if (fromMarket) return fromMarket;
  return `${title} scoped around ${focus.serviceAngle}, with senior engineering from discovery through launch.`;
}

const COUNTRY_FOCUS: Record<string, PlaceFocus> = {
  Pakistan: {
    economy: "clinics, schools, retailers, and enterprises nationwide",
    priorityIndustrySlugs: [
      "healthcare",
      "education",
      "retail",
      "manufacturing",
      "finance",
      "logistics",
    ],
    serviceAngle: "HMS, ERP, and custom digital products across major cities",
  },
  "United States": {
    economy: "startups, SaaS teams, clinics, and mid-market operators",
    priorityIndustrySlugs: [
      "technology",
      "healthcare",
      "finance",
      "logistics",
      "retail",
      "consulting",
    ],
    serviceAngle: "product platforms, workflow software, and scalable web systems",
  },
  Canada: {
    economy: "growing product companies, clinics, and service businesses",
    priorityIndustrySlugs: [
      "healthcare",
      "education",
      "technology",
      "finance",
      "retail",
      "real-estate",
    ],
    serviceAngle: "custom platforms, automation, and operational software",
  },
  Australia: {
    economy: "service businesses, healthcare providers, and digital-first teams",
    priorityIndustrySlugs: [
      "healthcare",
      "logistics",
      "retail",
      "hospitality",
      "education",
      "technology",
    ],
    serviceAngle: "practical digital transformation and ops platforms",
  },
  "United Kingdom": {
    economy: "SaaS founders, professional services, and regulated operators",
    priorityIndustrySlugs: [
      "finance",
      "banking",
      "healthcare",
      "technology",
      "consulting",
      "insurance",
    ],
    serviceAngle: "secure product engineering and compliance-aware systems",
  },
  "United Arab Emirates": {
    economy: "retail, hospitality, logistics, and fast-scaling enterprises",
    priorityIndustrySlugs: [
      "retail",
      "hospitality",
      "logistics",
      "real-estate",
      "finance",
      "healthcare",
    ],
    serviceAngle: "CRM, ERP, mobile apps, and business automation",
  },
};

/** Fully unique industry blurbs for each country location page (all 15 industries). */
const COUNTRY_INDUSTRY_COPY: Record<string, Record<string, string>> = {
  Pakistan: {
    manufacturing:
      "Factory ERP, production tracking, and inventory control for Pakistani manufacturers who need shop-floor numbers they can trust every shift.",
    healthcare:
      "HMS, clinic ERP, and patient workflows for hospitals and private practices across Pakistan , appointments, EMR, billing, and pharmacy in one system.",
    retail:
      "POS, multi-branch inventory, and storefront tools for Pakistani retailers who want daily sales visibility without chasing every manager on WhatsApp.",
    "real-estate":
      "Listings, lead CRM, and tenant workflows for property teams in Pakistan tired of deals dying in scattered chats and spreadsheets.",
    education:
      "School portals, fee systems, attendance, and parent apps for campuses nationwide that need software staff and families will actually use.",
    finance:
      "Secure finance ops and analytics for Pakistani firms that need accurate books, controlled access, and audit-ready records.",
    logistics:
      "Fleet, shipment, and warehouse visibility for logistics operators moving goods across Pakistani cities and corridors.",
    media:
      "Publishing and content workflow tools for Pakistani media teams that need faster handoffs without broken production pipelines.",
    banking:
      "Digital onboarding, ops tooling, and compliance-minded journeys for financial institutions modernizing how Pakistanis bank.",
    agriculture:
      "Agri inventory, buyer/seller tooling, and seasonal ops software for farms and traders who need clearer market and stock visibility.",
    hospitality:
      "Bookings, guest ops, and property tools for hotels and tourism businesses across Pakistan through peak travel seasons.",
    "health-fitness":
      "Membership apps, class booking, and gym ops platforms for fitness brands growing communities in major Pakistani cities.",
    technology:
      "SaaS platforms, APIs, and product infrastructure for Pakistani startups and software companies shipping to local and global users.",
    insurance:
      "Quote, claims, and policy servicing workflows for insurers and brokers who need faster turnaround without messy manual queues.",
    consulting:
      "Client portals, delivery tracking, and reporting tools for consultancies managing engagements across Pakistan and overseas clients.",
  },
  "United States": {
    manufacturing:
      "Production planning, inventory truth, and plant ops software for US manufacturers replacing fragile spreadsheets and disconnected shop-floor tools.",
    healthcare:
      "Scheduling, billing, and care-ops platforms for US clinics and care groups that need fewer manual steps and clearer staff visibility.",
    retail:
      "Inventory, checkout, and multi-location retail systems for US brands that need reliable daily numbers across stores and online channels.",
    "real-estate":
      "Listing CRM, agent pipelines, and property ops software for US brokerages and property managers scaling lead-to-lease workflows.",
    education:
      "Student portals, admin dashboards, and learning platforms for US schools and training providers modernizing enrollment and engagement.",
    finance:
      "Secure finance workflows, reporting, and analytics for US firms that need accuracy, permissions, and clean audit trails.",
    logistics:
      "Routing, warehouse, and shipment visibility for US logistics and fulfillment teams coordinating high-volume operations.",
    media:
      "Content ops, CMS, and publishing workflows for US media and digital teams that need speed without broken handoffs.",
    banking:
      "Onboarding, customer journeys, and ops tooling for US financial institutions tightening KYC, fraud checks, and digital service.",
    agriculture:
      "Farm ops, supply tracking, and buyer tooling for US agribusinesses that need clearer inventory and seasonal planning data.",
    hospitality:
      "Reservations, guest experience, and property ops software for US hotels and hospitality groups running multi-property portfolios.",
    "health-fitness":
      "Member apps, class scheduling, and studio ops platforms for US fitness brands growing retention and digital engagement.",
    technology:
      "Product MVPs, SaaS platforms, and API infrastructure for US startups and software companies shipping faster with senior engineering.",
    insurance:
      "Quote-to-bind, claims, and policy servicing systems for US insurers and MGAs reducing cycle time and manual rework.",
    consulting:
      "Client portals, engagement tracking, and delivery dashboards for US consultancies that need clearer project and client visibility.",
  },
  Canada: {
    manufacturing:
      "Shop-floor inventory, production tracking, and ops platforms for Canadian manufacturers who need dependable plant data day to day.",
    healthcare:
      "Clinic scheduling, patient workflows, and practice systems for Canadian care teams reducing admin load without disrupting care.",
    retail:
      "POS, catalog, and inventory tools for Canadian retailers coordinating stores, online orders, and seasonal demand.",
    "real-estate":
      "Listings, lead follow-up, and property management software for Canadian brokerages and landlords running cleaner pipelines.",
    education:
      "Student administration, portals, and learning tools for Canadian schools and institutions improving staff and family workflows.",
    finance:
      "Finance ops, reporting, and access-controlled systems for Canadian companies that need trustworthy numbers and clear approvals.",
    logistics:
      "Fleet, fulfillment, and shipment tracking for Canadian logistics teams managing regional and cross-border movement.",
    media:
      "Editorial and content production tools for Canadian media organizations that need reliable publishing workflows.",
    banking:
      "Digital onboarding and customer-ops tooling for Canadian financial services teams modernizing secure client journeys.",
    agriculture:
      "Agri inventory, supply coordination, and reporting for Canadian farms and food businesses planning around seasonal cycles.",
    hospitality:
      "Booking, guest ops, and property tools for Canadian hotels and hospitality operators through peak travel periods.",
    "health-fitness":
      "Membership, booking, and studio platforms for Canadian fitness brands building stronger member retention.",
    technology:
      "Custom SaaS, product platforms, and integrations for Canadian startups and tech teams shipping maintainable software.",
    insurance:
      "Policy, claims, and broker workflows for Canadian insurers simplifying intake, status tracking, and customer updates.",
    consulting:
      "Client portals and delivery reporting for Canadian consultancies managing multi-stakeholder engagements cleanly.",
  },
  Australia: {
    manufacturing:
      "Production and inventory systems for Australian manufacturers who need clearer factory visibility and fewer spreadsheet reconciliations.",
    healthcare:
      "Practice management, scheduling, and patient ops software for Australian healthcare providers improving day-to-day delivery.",
    retail:
      "Store and e-commerce operations tools for Australian retailers balancing inventory, fulfillment, and customer experience.",
    "real-estate":
      "Listings CRM and property workflows for Australian agencies and property managers keeping leads and tenancies organized.",
    education:
      "Campus portals, admin systems, and learning platforms for Australian schools and training providers.",
    finance:
      "Secure finance and reporting platforms for Australian businesses that need accurate ops data and controlled access.",
    logistics:
      "Warehouse, routing, and shipment visibility for Australian logistics operators coordinating national delivery networks.",
    media:
      "Content and broadcast workflow tools for Australian media teams producing and publishing at pace.",
    banking:
      "Digital service and ops tooling for Australian financial institutions strengthening onboarding and customer journeys.",
    agriculture:
      "Farm ops and supply software for Australian agribusinesses needing better seasonal planning and stock visibility.",
    hospitality:
      "Reservations and guest operations platforms for Australian hotels, venues, and tourism operators.",
    "health-fitness":
      "Class booking and member apps for Australian fitness studios growing digital engagement and retention.",
    technology:
      "Product engineering and platform builds for Australian startups and tech companies shipping practical SaaS.",
    insurance:
      "Claims and policy workflow software for Australian insurers reducing turnaround and manual status chasing.",
    consulting:
      "Engagement portals and reporting tools for Australian consultancies keeping clients and delivery teams aligned.",
  },
  "United Kingdom": {
    manufacturing:
      "Plant ops and inventory platforms for UK manufacturers replacing fragmented tools with one operational source of truth.",
    healthcare:
      "Care scheduling, intake, and practice systems for UK providers that need clearer operational visibility and less admin friction.",
    retail:
      "Inventory, checkout, and omnichannel tools for UK retailers coordinating stores, online orders, and stock accuracy.",
    "real-estate":
      "Agency CRM, listings, and property ops software for UK estate agents and managers running disciplined pipelines.",
    education:
      "Student portals and administrative platforms for UK schools, colleges, and training organisations.",
    finance:
      "Finance ops and analytics for UK firms that need secure workflows, permissions, and audit-ready reporting.",
    logistics:
      "Fleet and fulfillment visibility for UK logistics teams managing dense urban and national delivery networks.",
    media:
      "Publishing and production workflows for UK media organisations that need reliable content operations.",
    banking:
      "Onboarding, KYC-minded journeys, and ops tooling for UK financial institutions modernising digital service.",
    agriculture:
      "Agri supply and inventory tooling for UK farms and food businesses that need clearer operational reporting.",
    hospitality:
      "Booking and guest ops platforms for UK hotels, hospitality groups, and venue operators.",
    "health-fitness":
      "Membership and class platforms for UK fitness brands improving booking, retention, and studio operations.",
    technology:
      "SaaS product builds and platform engineering for UK startups and software companies shipping with senior delivery.",
    insurance:
      "Underwriting support, claims, and policy servicing systems for UK insurers and brokers.",
    consulting:
      "Client portals and delivery dashboards for UK consultancies managing complex stakeholder engagements.",
  },
  "United Arab Emirates": {
    manufacturing:
      "Production and inventory systems for UAE manufacturers and industrial operators needing clearer plant and stock control.",
    healthcare:
      "Clinic and care-ops software for UAE healthcare providers streamlining appointments, billing, and patient workflows.",
    retail:
      "POS, inventory, and commerce platforms for UAE retailers operating across malls, online channels, and multi-branch networks.",
    "real-estate":
      "Listings, lead CRM, and property management tools for UAE brokerages and developers managing high-volume pipelines.",
    education:
      "School portals and administrative systems for UAE campuses coordinating admissions, fees, and parent communication.",
    finance:
      "Secure finance and ops platforms for UAE businesses that need controlled access, accurate reporting, and clean approvals.",
    logistics:
      "Warehouse, fleet, and shipment tools for UAE logistics teams coordinating regional and cross-border movement.",
    media:
      "Content and campaign workflow tools for UAE media and marketing teams producing at pace across channels.",
    banking:
      "Digital onboarding and customer-ops tooling for UAE financial institutions modernising secure client journeys.",
    agriculture:
      "Supply and inventory software for UAE agri and food businesses coordinating sourcing, stock, and distribution.",
    hospitality:
      "Reservations, guest experience, and property ops platforms for UAE hotels and hospitality groups.",
    "health-fitness":
      "Member apps and studio platforms for UAE fitness brands growing bookings, memberships, and retention.",
    technology:
      "Custom SaaS, CRM, and product platforms for UAE startups and enterprises shipping digital products quickly.",
    insurance:
      "Quote, policy, and claims workflows for UAE insurers and brokers reducing turnaround and manual follow-up.",
    consulting:
      "Client portals and delivery tracking for UAE consultancies and professional services firms.",
  },
};

/** Multiple city-specific angles per industry so each Pakistan city page gets distinct copy. */
const CITY_INDUSTRY_ANGLES: Record<string, string[]> = {
  manufacturing: [
    "Production tracking, inventory, and factory ops software for manufacturers who need shop-floor truth instead of spreadsheet chaos , especially for {economy}.",
    "ERP-style inventory and production workflows for industrial teams, scoped around {serviceAngle}.",
    "Plant and warehouse systems for manufacturers coordinating materials, output, and billing without daily reconciliation fights.",
  ],
  healthcare: [
    "HMS, clinic ERP, and patient workflows for hospitals and practices that need reliable appointments, EMR, billing, and pharmacy in one flow.",
    "Care-ops software for clinics serving {economy}, built around {serviceAngle}.",
    "Scheduling, records, and front-desk systems for healthcare operators tired of paper registers and disconnected tools.",
  ],
  retail: [
    "POS, inventory, and multi-branch tools for retailers who want daily sales visibility without calling every manager.",
    "Store and catalog systems for retail teams in {economy}, aligned with {serviceAngle}.",
    "Checkout and stock platforms for shop owners coordinating counters, warehouses, and online orders.",
  ],
  "real-estate": [
    "Listings, lead CRM, and agent workflows for property teams tired of leads dying in WhatsApp threads.",
    "Property and tenant systems for agencies supporting {economy}, with {serviceAngle} where they fit.",
    "Deal pipelines and listing tools for real-estate operators who need one place for leads, viewings, and follow-up.",
  ],
  education: [
    "School portals, fees, attendance, and parent apps for campuses that need systems staff and families will actually use.",
    "Education platforms for schools and institutes within {economy}, scoped to {serviceAngle}.",
    "Admissions, fee, and classroom admin software for education teams replacing fragmented campus tools.",
  ],
  finance: [
    "Secure finance and analytics platforms for firms that need accuracy, access control, and audit-ready records.",
    "Finance ops tooling for businesses in {economy}, designed around {serviceAngle}.",
    "Reporting and approval workflows for finance teams who need one trusted view of numbers and permissions.",
  ],
  logistics: [
    "Fleet, shipment, and warehouse visibility for logistics operators moving goods across the region.",
    "Routing and fulfillment systems for operators supporting {economy}, with {serviceAngle}.",
    "Dispatch and tracking tools for logistics teams who need live status instead of phone-chain updates.",
  ],
  media: [
    "Content and publishing workflows for media teams that need speed without broken handoffs.",
    "Production and CMS tools for creators and publishers in {economy}, matched to {serviceAngle}.",
    "Editorial ops software for media organisations coordinating briefs, assets, and publish schedules.",
  ],
  banking: [
    "Onboarding, ops, and compliance-minded tools for financial institutions modernizing customer journeys.",
    "Digital banking workflows for finance teams within {economy}, focused on {serviceAngle}.",
    "Customer journey and ops platforms for institutions tightening KYC steps and service turnaround.",
  ],
  agriculture: [
    "Agri ops, inventory, and buyer/seller tooling for farms and traders who need seasonal clarity.",
    "Farm and trade systems for agri businesses in {economy}, supporting {serviceAngle}.",
    "Stock and buyer coordination software for agriculture operators replacing seasonal spreadsheet chaos.",
  ],
  hospitality: [
    "Bookings, guest ops, and property tools for hotels and tourism businesses through peak seasons.",
    "Hospitality platforms for venues serving {economy}, built around {serviceAngle}.",
    "Reservation and guest-experience software for hotels that need smoother front-desk and room ops.",
  ],
  "health-fitness": [
    "Member apps, class booking, and gym ops platforms for fitness brands growing local communities.",
    "Studio and membership systems for fitness operators in {economy}, aligned with {serviceAngle}.",
    "Scheduling and member retention tools for gyms and studios that need cleaner booking operations.",
  ],
  technology: [
    "SaaS platforms, APIs, and product infrastructure for startups and software teams shipping to real users.",
    "Product engineering for tech companies within {economy}, focused on {serviceAngle}.",
    "Custom platforms and integrations for technology teams that need senior delivery without agency churn.",
  ],
  insurance: [
    "Quote, underwrite, and claims workflows for insurers and brokers who need faster turnaround.",
    "Policy and claims systems for insurance teams in {economy}, supporting {serviceAngle}.",
    "Intake and servicing tools for brokers reducing manual status chasing across policies and claims.",
  ],
  consulting: [
    "Client portals, analytics, and engagement tooling for consultancies managing delivery cleanly.",
    "Engagement and reporting platforms for professional services teams in {economy}, with {serviceAngle}.",
    "Delivery dashboards and client portals for consultancies that need clearer project visibility.",
  ],
};

function fillIndustryTemplate(
  template: string,
  place: string,
  focus: PlaceFocus
): string {
  return template
    .replaceAll("{place}", place)
    .replaceAll("{economy}", focus.economy)
    .replaceAll("{serviceAngle}", focus.serviceAngle);
}

function industryDescription(industry: Industry, place: string, focus: PlaceFocus): string {
  const countryCopy = COUNTRY_INDUSTRY_COPY[place]?.[industry.slug];
  if (countryCopy) return countryCopy;

  const angles = CITY_INDUSTRY_ANGLES[industry.slug];
  if (angles?.length) {
    const idx = hashPlace(`${place}:${industry.slug}`) % angles.length;
    return fillIndustryTemplate(angles[idx]!, place, focus);
  }

  return `${industry.description} Scoped around ${focus.serviceAngle}.`;
}

function processStepsForPlace(
  place: string,
  options?: { isPakistan?: boolean; hub?: boolean }
): typeof baseProcessSteps {
  const market = getLocationMarketCopy(place, options);
  return market.process.steps.map((step) => ({
    step: step.step,
    shortLabel: step.shortLabel,
    title: step.title,
    description: step.description,
  })) as typeof baseProcessSteps;
}

function whyChooseValues(
  place: string,
  _focus: PlaceFocus,
  options?: { isPakistan?: boolean; hub?: boolean }
): LocationWhyChooseContent["values"] {
  return getLocationMarketCopy(place, options).whyChoose.values;
}

function pickIndustries(place: string, focus: PlaceFocus): Industry[] {
  const prioritized = focus.priorityIndustrySlugs
    .map((slug) => baseIndustries.find((i) => i.slug === slug))
    .filter((i): i is Industry => Boolean(i));
  const rest = baseIndustries.filter((i) => !focus.priorityIndustrySlugs.includes(i.slug));
  const ordered = [...prioritized, ...rotate(rest, place)];
  return ordered.map((item) => ({
    ...item,
    description: industryDescription(item, place, focus),
  }));
}

/**
 * Anonymized city engagement blurbs for Pakistan location pages.
 * Illustrative composites from real project types , not attributed customer reviews.
 */
export const pakistanCityCaseBlurbs: LocationSocialProofItem[] = [
  {
    quote:
      "A multi-doctor clinic in Islamabad needed a single system to replace paper registers and three separate spreadsheets for billing and inventory. We delivered a unified HMS/ERP with Urdu-ready workflows, cutting patient check-in time and giving the front desk one place to manage appointments, pharmacy stock, and invoicing.",
    author: "Clinic engagement",
    role: "Islamabad",
  },
  {
    quote:
      "A retail business in Lahore was losing leads between phone calls, WhatsApp, and a shared spreadsheet with no visibility into who owned which conversation. We built a CRM that consolidated lead tracking, staff assignment, and conversion reporting into one dashboard the sales floor actually uses daily.",
    author: "Retail engagement",
    role: "Lahore",
  },
  {
    quote:
      "An online retailer in Karachi was running checkout on a patchwork of outdated plugins causing regular payment failures. We rebuilt the storefront with JazzCash and Easypaisa integration and a streamlined checkout flow, resolving the payment failures and reducing cart abandonment.",
    author: "Ecommerce engagement",
    role: "Karachi",
  },
  {
    quote:
      "A real estate agency in Rawalpindi was managing listings and tenant communication across email and paper files. We delivered a property management platform unifying listings, contracts, and tenant relationships in one system.",
    author: "Real estate engagement",
    role: "Rawalpindi",
  },
  {
    quote:
      "A textile manufacturing unit in Faisalabad was tracking inventory across Excel sheets maintained by multiple people, leading to frequent stock discrepancies. We built an ERP connecting inventory directly to billing, eliminating the manual reconciliation that caused the discrepancies.",
    author: "Manufacturing engagement",
    role: "Faisalabad",
  },
];

const CASE_BLURB_CITIES = new Set(
  pakistanCityCaseBlurbs.map((item) => item.role.trim().toLowerCase())
);

function caseBlurbsForPlace(place: string): LocationSocialProofItem[] {
  const key = place.toLowerCase();
  if (key === "pakistan") return [...pakistanCityCaseBlurbs];
  return pakistanCityCaseBlurbs.filter((item) =>
    item.role.toLowerCase().includes(key)
  );
}

/** Pakistan hub, Pakistan cities, and all country pages use anonymized engagement composites. */
function usesCaseBlurbs(place: string) {
  const key = place.toLowerCase();
  return (
    key === "pakistan" ||
    CASE_BLURB_CITIES.has(key) ||
    key === "united states" ||
    key === "canada" ||
    key === "australia" ||
    key === "united kingdom" ||
    key === "united arab emirates"
  );
}

/**
 * Anonymized engagement composites for international country pages.
 * Not attributed customer reviews — illustrative of project types we deliver.
 */
const countryEngagementBlurbs: Record<string, LocationSocialProofItem[]> = {
  "United States": [
    {
      quote:
        "A US SaaS team needed a more reliable product partner after their workflow had grown beyond internal tools. We brought structure, fast iteration, and a clear product process that made launch and handoff smoother than their previous agency relationships.",
      author: "SaaS engagement",
      role: "United States",
    },
    {
      quote:
        "A healthcare operator was stuck with too many manual steps and spreadsheet dependence. We delivered clearer scheduling, lower admin overhead, and better visibility for staff and management.",
      author: "Healthcare engagement",
      role: "United States",
    },
    {
      quote:
        "A mid-market product team needed milestone clarity and direct communication throughout the build. The engagement felt like working with an embedded senior product team, not a remote vendor.",
      author: "Product engagement",
      role: "United States",
    },
  ],
  Canada: [
    {
      quote:
        "A Canadian service business needed custom scheduling and client follow-up without a bloated platform. The result was faster operations, clearer customer communication, and a system their team could maintain.",
      author: "Operations engagement",
      role: "Canada",
    },
    {
      quote:
        "A growth-stage company needed software matched to real workflows before code started. Discovery-first delivery produced better visibility across staff and client touchpoints.",
      author: "Workflow engagement",
      role: "Canada",
    },
    {
      quote:
        "A digital transformation project needed disciplined, transparent delivery. The team received a product that was easier to run and easier to expand as the business grew.",
      author: "Digital transformation engagement",
      role: "Canada",
    },
  ],
  Australia: [
    {
      quote:
        "An Australian operator needed fragmented internal workflows replaced with clearer systems and reporting. Organized delivery produced a platform built around their real operating model.",
      author: "Ops platform engagement",
      role: "Australia",
    },
    {
      quote:
        "A healthcare provider was bottlenecked by aging software. The new platform simplified scheduling, reporting, and team coordination without disrupting day-to-day service.",
      author: "Healthcare engagement",
      role: "Australia",
    },
    {
      quote:
        "A service business needed practical, scalable software rather than decorative features. Staff could use the delivered system immediately with reliable day-to-day operations.",
      author: "Automation engagement",
      role: "Australia",
    },
  ],
  "United Kingdom": [
    {
      quote:
        "A UK product team needed a clear roadmap and tight communication throughout the build. The outcome was a stronger product rhythm and a more confident internal team.",
      author: "B2B SaaS engagement",
      role: "United Kingdom",
    },
    {
      quote:
        "A regulated operations group needed manual processes untangled into a cleaner system. Productivity improved quickly and internal tooling became more trustworthy.",
      author: "Operations engagement",
      role: "United Kingdom",
    },
    {
      quote:
        "A professional services firm needed visibility at every milestone. Structured delivery kept scope, decisions, and next steps clear from kickoff through launch.",
      author: "Delivery engagement",
      role: "United Kingdom",
    },
  ],
  "United Arab Emirates": [
    {
      quote:
        "A UAE operator needed software that could handle real operations, not just look good in a demo. The system improved visibility, process control, and day-to-day execution.",
      author: "ERP engagement",
      role: "United Arab Emirates",
    },
    {
      quote:
        "A growing enterprise needed organized scope, responsibilities, and milestones from day one. The delivered system matched the pace of their real business operations.",
      author: "CRM engagement",
      role: "United Arab Emirates",
    },
    {
      quote:
        "A hospitality and retail team wanted a partner accountable after launch. Post-go-live support kept the system improving as staff adapted to new workflows.",
      author: "Automation engagement",
      role: "United Arab Emirates",
    },
  ],
};

function pickTestimonials(place: string): LocationSocialProofItem[] {
  const countryBlurbs = countryEngagementBlurbs[place];
  if (countryBlurbs) return countryBlurbs;

  const blurbs = caseBlurbsForPlace(place);
  if (place.toLowerCase() === "pakistan") return blurbs;
  if (blurbs.length > 0) {
    const otherBlurbs = pakistanCityCaseBlurbs.filter((item) => !blurbs.includes(item));
    return [...blurbs, ...otherBlurbs];
  }

  // Never fall back to homepage-style attributed reviews on location pages.
  return pakistanCityCaseBlurbs;
}

function pickCaseStudies(place: string): CaseStudy[] {
  return rotate([...caseStudies], place).slice(0, 6);
}

export function buildLocationSections(
  place: string,
  options?: { isPakistan?: boolean; hub?: boolean }
): LocationPageSections {
  const isHub = Boolean(options?.hub);
  const isPakistan =
    !isHub && (options?.isPakistan ?? place.toLowerCase() === "pakistan");
  const marketPlace = isHub ? "Pakistan" : isPakistan ? "Pakistan" : place;
  const marketOpts = { isPakistan, hub: isHub };
  const sectionMarket = getLocationMarketCopy(marketPlace, marketOpts);

  const focus = isPakistan
    ? {
        economy: "clinics, schools, retailers, and enterprises nationwide",
        priorityIndustrySlugs: [
          "healthcare",
          "education",
          "retail",
          "manufacturing",
          "finance",
          "logistics",
        ],
        serviceAngle: "HMS, ERP, and custom digital products across major cities",
      }
    : getFocus(place);

  const displayPlace = isPakistan ? "Pakistan" : place;
  const serviceByTitle = new Map(baseServices.map((service) => [service.title, service]));
  const serviceItems = sectionMarket.services.order
    .map((title) => {
      const service = serviceByTitle.get(title);
      if (!service) return null;
      return {
        title: service.title,
        tag: sectionMarket.services.tags?.[title] ?? service.tag,
        accent: service.accent,
        description: serviceDescription(title, marketPlace, focus, marketOpts),
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return {
    trust: {
      ariaLabel: isHub
        ? "Trust numbers for Next Software Development locations"
        : `Trust numbers for our software house in ${displayPlace}`,
    },
    services: {
      overlineText: sectionMarket.services.overlineText,
      title: sectionMarket.services.title,
      description: sectionMarket.services.description,
      items: serviceItems,
    },
    whyChoose: {
      overlineText: sectionMarket.whyChoose.overlineText,
      title: sectionMarket.whyChoose.title,
      description: sectionMarket.whyChoose.description,
      values: whyChooseValues(marketPlace, focus, marketOpts),
    },
    projects: {
      overlineText: sectionMarket.projects.overlineText,
      title: sectionMarket.projects.title,
      description: sectionMarket.projects.description,
    },
    industries: {
      overlineText: isPakistan ? "Industries nationwide" : `Industries in ${displayPlace}`,
      title: isPakistan
        ? "Industries we serve in Pakistan"
        : `Industries we serve in ${displayPlace}`,
      description: isPakistan
        ? "All 15 sectors we support , healthcare, education, retail, manufacturing, finance, logistics, and more , with copy tailored to Pakistani workflows and growth."
        : `All 15 industries we serve, with ${displayPlace}-specific software focus across healthcare, education, retail, technology, finance, logistics, and more.`,
      items: pickIndustries(displayPlace, focus),
    },
    tech: {
      overlineText: isPakistan ? "Technology stack" : `${displayPlace} tech stack`,
      title: "Built with Proven, Modern Tools",
      titleItalic: "Proven, Modern Tools",
      description: isPakistan
        ? `${baseTechIntro} Chosen for nationwide delivery reliability across Pakistani markets.`
        : `We pick stacks that ${displayPlace} teams can maintain: modern, proven, and matched to ${focus.serviceAngle}.`,
      intro: isPakistan
        ? `${baseTechIntro} Applied consistently from capital projects to regional launches.`
        : `Frontend, backend, mobile, database, and cloud choices for ${displayPlace} builds that need longevity, not fashion.`,
    },
    process: {
      overlineText: sectionMarket.process.overlineText,
      title: sectionMarket.process.title,
      titleItalic: sectionMarket.process.titleItalic,
      description: sectionMarket.process.description,
      steps: processStepsForPlace(marketPlace, marketOpts),
      ctaLabel: sectionMarket.process.ctaLabel,
    },
    caseStudies: {
      overlineText: "Case studies",
      title: isPakistan
        ? "Results from real engagements"
        : `Case studies for ${displayPlace} buyers`,
      description: isPakistan
        ? "Outcomes from clinics, schools, retailers, and product teams across Pakistan."
        : `Outcome stories that help ${displayPlace} decision-makers see how similar systems go live.`,
      items: pickCaseStudies(displayPlace),
    },
    testimonials: {
      overlineText: "How we've helped businesses like yours",
      title: "Local engagement examples",
      titleItalic: "engagement",
      description: isPakistan
        ? "Illustrative composites based on project types we deliver across Pakistani cities, not attributed customer reviews."
        : displayPlace === "United States" ||
            displayPlace === "Canada" ||
            displayPlace === "Australia" ||
            displayPlace === "United Kingdom" ||
            displayPlace === "United Arab Emirates"
          ? `Illustrative composites based on project types we deliver for ${displayPlace} markets, not attributed customer reviews.`
          : `An anonymized engagement example for ${displayPlace}, plus similar work in other Pakistani cities, not attributed customer reviews.`,
      items: pickTestimonials(displayPlace),
    },
    team: {
      overlineText: isPakistan ? "Pakistan software house team" : "Delivery team",
      title: isPakistan
        ? "A senior team"
        : `The Team Behind Our ${
            displayPlace === "United States"
              ? "USA"
              : displayPlace === "United Kingdom"
                ? "UK"
                : displayPlace === "United Arab Emirates"
                  ? "UAE"
                  : displayPlace
          } Delivery`,
      titleItalic: isPakistan ? "team" : undefined,
      description: isPakistan
        ? "Senior engineers and designers shipping for clients across Pakistan and overseas."
        : `The same senior bench that supports ${displayPlace} projects from kickoff through maintenance.`,
      intro: isPakistan
        ? `${baseTeamIntro} We deliver for cities nationwide with one accountable team.`
        : `${baseTeamIntro} For ${displayPlace}, you get named senior ownership, not an anonymous offshore queue.`,
    },
  };
}

export function buildLocationFacts(place: string) {
  return {
    title: `${place} software house and software company facts`,
    subtitle: `Next Software Development Company delivers for ${place} with the same company-wide track record we publish on our homepage.`,
    items: companyStats.map(({ value, label, detail }) => ({
      value,
      label,
      detail:
        label === "Happy Clients"
          ? `${detail} Including teams we support in ${place}.`
          : `${detail} Applied on ${place} engagements with the same delivery bar.`,
    })),
  };
}

export function filterProjectsForPlace(
  place: string,
  all: ShowcaseProject[] = showcaseProjects,
  options?: { isPakistan?: boolean; hub?: boolean }
): ShowcaseProject[] {
  const market = getLocationMarketCopy(place, options);
  const bySlug = new Map(all.map((project) => [project.slug, project]));
  const curated = market.projects.slugs
    .map((slug) => bySlug.get(slug))
    .filter((project): project is ShowcaseProject => Boolean(project));
  if (curated.length > 0) return curated;

  const matched = all.filter((project) =>
    project.category.toLowerCase().includes(place.toLowerCase())
  );
  if (matched.length > 0) return matched;
  return rotate(all, place);
}

/** Hub page section copy (services / why-choose / process / projects headings). */
export const locationHubSections = buildLocationSections("Pakistan", { hub: true });
export const locationHubProjects = filterProjectsForPlace("Pakistan", showcaseProjects, {
  hub: true,
});

const pakistanSections = buildLocationSections("Pakistan", { isPakistan: true });

export const pakistanLocation: LocationPageContent = {
  slug: "software-house-and-software-company-in-pakistan",
  country: "Pakistan",
  href: "/location/software-house-and-software-company-in-pakistan",
  title: "Software House in Pakistan",
  description:
    "A software house in Pakistan helping clinics, schools, retailers, and enterprises ship HMS, ERP, and custom digital products that improve operations and support long-term growth.",
  descriptionSecondary:
    "We build custom software, web and mobile apps, SaaS, AI features, ERP and CRM, Hospital Management Systems (HMS), and business automation. Our senior team stays with you from discovery through launch and ongoing support.",
  descriptionTertiary:
    "Whether you are launching a product, replacing outdated systems, or automating workflows across Islamabad, Lahore, Karachi, and beyond, we focus on practical systems that stay maintainable as you grow.",
  metaTitle: "Software House in Pakistan | Next Software Development",
  metaDescription:
    "Software house in Pakistan providing custom software, web and mobile app development, AI, SaaS, ERP, and business automation solutions.",
  coverageTitle: "Cities we serve across Pakistan",
  coverageDescription:
    "We partner with founders and operators nationwide, building HMS for Islamabad clinics, school platforms in Lahore, and retail systems in Karachi. Pick your city to see local focus.",
  about: {
    overlineText: "Who we are",
    title: "A software house in Pakistan built for real operations",
    paragraphs: [
      "Next Software Development Company is a software house in Pakistan headquartered in Islamabad, with delivery across Lahore, Karachi, and major cities nationwide. We build HMS, ERP, mobile apps, and SaaS for clinics, schools, retailers, and growing enterprises, and for international clients who want senior Pakistani engineering.",
      "Since 2019 we have delivered for 500+ clients with a [[team]] of 20+ engineers across 6 countries. From Urdu-ready clinic workflows in Islamabad to multi-campus school platforms in Lahore and retail POS in Karachi, we combine local market understanding with the same delivery standards we apply globally.",
      "You get English-first communication, timezone-friendly collaboration, transparent pricing, and post-launch support that does not disappear after go-live.",
    ],
    values: pakistanSections.whyChoose.values,
    image: {
      src: "/about-us/software-development-company.webp",
      alt: "Next Software Development Company software house in Pakistan",
      width: 1000,
      height: 700,
    },
    teamLink: teamPath,
    teamCta: "Meet our delivery team",
  },
  caseWork: {
    overlineText: "Recent projects",
    title: "Recent projects from Pakistan",
    description:
      "Selected builds from our software development company for clinics, schools, and retailers across Pakistani cities, with the same delivery standard as our global software company recent projects.",
  },
  heroImage: {
    src: "/locations/location-pakistan.webp",
    alt: "Software house in Pakistan, Next Software Development Company",
    width: 1536,
    height: 1024,
  },
  cities: pakistanCities,
  projects: filterProjectsForPlace("Pakistan", showcaseProjects, { isPakistan: true }),
  facts: {
    title: "Pakistan software house and software company facts",
    subtitle:
      "Next Software Development Company is a national software house with senior delivery from Islamabad. The same company stats we publish on the homepage.",
    items: companyStats.map(({ value, label, detail }) => ({
      value,
      label,
      detail,
    })),
  },
  industries: {
    title: "Industries our software house serves in Pakistan",
    subtitle:
      "As a software development company and software house in Pakistan, we deliver healthcare HMS, school platforms, fintech, retail, and logistics software tailored to Pakistani workflows, compliance, and growth.",
    items: [
      {
        slug: "healthcare",
        title: "Healthcare",
        description:
          "HMS, clinic ERP, telehealth, and compliance-ready workflows from our software company for hospitals and private practices across Pakistan.",
        href: "/industries",
      },
      {
        slug: "education",
        title: "Schools & education",
        description:
          "School management, LMS, fee portals, and parent apps built by our software house for colleges and academies in major cities.",
        href: "/industries",
      },
    ],
  },
  faqIntro:
    "Common questions about our services, process, pricing, and support.",
  faqs: [
    {
      question: "What types of software do you develop?",
      answer:
        "We build custom web applications, mobile apps, SaaS platforms, HMS, CRM and ERP systems, APIs, and AI-powered solutions based on your business requirements.",
      tag: "Services",
      column: "left",
    },
    {
      question: "How do projects usually start?",
      answer:
        "A short discovery call leads to a scoped proposal with timeline and milestones. Most engagements begin with a fixed discovery or MVP phase.",
      tag: "Process",
      column: "right",
    },
    {
      question: "Do you offer fixed-price contracts?",
      answer:
        "Yes. Many builds use transparent fixed-price scopes with clear milestones. Time-and-materials is available when requirements need to evolve.",
      tag: "Pricing",
      column: "left",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer maintenance, feature iterations, hosting guidance, and SLA-based support so your product stays reliable as you grow.",
      tag: "Support",
      column: "right",
    },
    {
      question: "Can you modernize legacy systems?",
      answer:
        "Yes. We review old workflows, identify bottlenecks, and redesign them into maintainable software without unnecessary disruption.",
      tag: "Modernization",
      column: "left",
    },
    {
      question: "Who will work on my project?",
      answer:
        "Senior engineers, designers, and QA stay on the engagement. You get named ownership, not a junior-only handoff after the contract.",
      tag: "Team",
      column: "right",
    },
    {
      question: "Which cities across Pakistan do you serve?",
      answer:
        "We support clients nationwide, including Islamabad, Lahore, Karachi, Rawalpindi, Faisalabad, Multan, Peshawar, and other major business centers.",
      tag: "Coverage",
      column: "left",
    }
  ],
  cta: {
    title: "Have a software project in mind?",
    description:
      "Tell us what you're building, what problem you're trying to solve, and where you want to take it. We'll help you define the right technical approach.\n\nLooking for a software house in Pakistan to build and support your product? Let's talk.",
    buttonLabel: "Get a Free Quote",
    buttonHref: contactPath,
  },
  sections: pakistanSections,
};

const usaSections = buildLocationSections("United States");
const canadaSections = buildLocationSections("Canada");
const australiaSections = buildLocationSections("Australia");
const ukSections = buildLocationSections("United Kingdom");
const uaeSections = buildLocationSections("United Arab Emirates");

export const usaLocation: LocationPageContent = {
  slug: "software-house-and-software-company-in-usa",
  country: "United States",
  href: "/location/software-house-and-software-company-in-usa",
  title: "Software Development Company in the USA",
  description:
    "A software development company in the USA for SaaS founders, product teams, and mid-market operators who need senior product engineering without agency bloat.",
  descriptionSecondary:
    "We build SaaS platforms, custom web apps, mobile products, AI features, and workflow software. Senior engineers work with your stakeholders from discovery through launch and support.",
  descriptionTertiary:
    "Whether you are shipping an MVP, modernizing a legacy stack, or scaling an internal platform, we focus on clear scope, maintainable architecture, and outcomes your team can measure.",
  metaTitle: "Software Development Company in the USA | Next Software Development",
  metaDescription:
    "Software development company in the USA for SaaS platforms, product engineering, web and mobile apps, and scalable business systems.",
  coverageTitle: "Software house coverage across the USA",
  coverageDescription:
    "We work with teams in the U.S. on product strategy, custom web platforms, healthcare workflows, and business systems built for speed, security, and scale.",
  about: {
    overlineText: "Who we are",
    title: "A software company in the USA for product and operational software",
    paragraphs: [
      "Next Software Development Company works with growing businesses, clinic groups, SaaS founders, and service organizations across the United States. Our [[team]] brings senior product engineering, UI/UX design, and technical planning to help teams build the right system without the usual agency delays.",
      "As a software company in the USA, we cover custom web development, SaaS platforms, ERP and CRM integrations, mobile apps, and workflow automation that support operations in healthcare, logistics, education, and professional services.",
      "Whether you need a new product MVP, a legacy modernization project, or a partner to maintain a mission-critical system, our team focuses on clear scope, business alignment, and post-launch accountability.",
    ],
    values: usaSections.whyChoose.values,
    image: {
      src: "/about-us/software-development-company.webp",
      alt: "Software company in the USA",
      width: 1000,
      height: 700,
    },
    teamLink: teamPath,
    teamCta: "Meet our delivery team",
  },
  heroImage: {
    src: "/locations/location-pakistan.webp",
    alt: "Software company in the USA",
    width: 1536,
    height: 1024,
  },
  cities: [
    { slug: "new-york", label: "Main city in United States", href: "#", city: "New York", blurb: "Software for ambitious teams, SaaS products, and digital operations in New York." },
    { slug: "los-angeles", label: "Main city in United States", href: "#", city: "Los Angeles", blurb: "Custom platform work for media, services, SaaS, and growth-stage businesses." },
    { slug: "chicago", label: "Main city in United States", href: "#", city: "Chicago", blurb: "Operations software, CRM, ERP, and web platforms for mid-market teams." },
    { slug: "houston", label: "Main city in United States", href: "#", city: "Houston", blurb: "Business systems for growing enterprises, services, and industrial operations." },
    { slug: "miami", label: "Main city in United States", href: "#", city: "Miami", blurb: "Digital products and automation for service businesses and fast-scaling brands." },
    { slug: "san-francisco", label: "Main city in United States", href: "#", city: "San Francisco", blurb: "Product engineering and software strategy for startup and SaaS teams." },
  ],
  projects: filterProjectsForPlace("United States"),
  facts: buildLocationFacts("United States"),
  industries: {
    title: "Industries we serve in the USA",
    subtitle:
      "We support healthcare, SaaS, logistics, education, retail, and service businesses with software built around real operational workflows and growth goals.",
    items: [
      { slug: "healthcare", title: "Healthcare", description: "Digital systems for clinics, care teams, and healthcare operators needing efficient scheduling, billing, and patient workflows.", href: "/industries" },
      { slug: "saas", title: "SaaS & digital products", description: "MVPs and product platforms for founders building software companies with scalable architecture and clear roadmaps.", href: "/industries" },
    ],
  },
  faqIntro:
    "Common questions about our services, process, pricing, and support.",
  faqs: [
    {
      question: "What types of software do you develop?",
      answer:
        "We build SaaS platforms, custom web apps, mobile products, APIs, workflow software, and AI-powered features based on your product goals.",
      tag: "Services",
      column: "left",
    },
    {
      question: "How do projects usually start?",
      answer:
        "A short discovery call leads to a scoped proposal with timeline and milestones. Most engagements begin with a fixed discovery or MVP phase.",
      tag: "Process",
      column: "right",
    },
    {
      question: "Do you offer fixed-price contracts?",
      answer:
        "Yes. Many builds use transparent fixed-price scopes with clear milestones. Time-and-materials is available when requirements need to evolve.",
      tag: "Pricing",
      column: "left",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer maintenance, feature iterations, hosting guidance, and SLA-based support so your product stays reliable as you grow.",
      tag: "Support",
      column: "right",
    },
    {
      question: "Can you modernize legacy systems?",
      answer:
        "Yes. We review old workflows, identify bottlenecks, and redesign them into maintainable software without unnecessary disruption.",
      tag: "Modernization",
      column: "left",
    },
    {
      question: "Who will work on my project?",
      answer:
        "Senior engineers, designers, and QA stay on the engagement. You get named ownership, not a junior-only handoff after the contract.",
      tag: "Team",
      column: "right",
    },
    {
      question: "Do you work across US time zones with stakeholders?",
      answer:
        "Yes. We run English-first collaboration with timezone-friendly calls so product, ops, and leadership stay aligned throughout delivery.",
      tag: "Collaboration",
      column: "left",
    }
  ],
  cta: {
    title: "Have a software project in mind?",
    description:
      "Tell us what you're building, what problem you're trying to solve, and where you want to take it. We'll help you define the right technical approach.\n\nLooking for a software development company in the USA for SaaS or product engineering? Let's talk.",
    buttonLabel: "Get a Free Quote",
    buttonHref: "/contact",
  },
  sections: usaSections,
};

export const canadaLocation: LocationPageContent = {
  slug: "software-house-and-software-company-in-canada",
  country: "Canada",
  href: "/location/software-house-and-software-company-in-canada",
  title: "Software Development Company in Canada",
  description:
    "A software development company in Canada for product companies and service businesses modernizing operations with SaaS and digital transformation.",
  descriptionSecondary:
    "We build custom platforms, SaaS products, web and mobile apps, and automation that reduce manual work. Senior engineers stay with you from discovery through launch.",
  descriptionTertiary:
    "Whether you are launching a product or replacing fragmented tools, we focus on practical digital transformation that your team can maintain.",
  metaTitle: "Software Development Company in Canada | Next Software Development",
  metaDescription:
    "Software development company in Canada for SaaS builds, digital transformation, custom platforms, and operational software.",
  coverageTitle: "Software house coverage across Canada",
  coverageDescription:
    "We support Canadian businesses with software strategy, custom web build-outs, healthcare workflow tooling, and digital systems that scale with operational needs.",
  about: {
    overlineText: "Who we are",
    title: "A software company in Canada for digital product and operations work",
    paragraphs: [
      "Next Software Development Company helps businesses across Canada launch and improve digital products without the common friction of delayed discovery, unclear scope, or junior-heavy teams.",
      "From website platforms and SaaS products to internal operations software and workflow automation, our [[team]] builds software around the realities of Canadian SMEs and growth-stage founders.",
      "We focus on business clarity, maintainable engineering, and strong collaboration so each release brings measurable improvement instead of just a feature list.",
    ],
    values: canadaSections.whyChoose.values,
    image: {
      src: "/about-us/software-development-company.webp",
      alt: "Software company in Canada",
      width: 1000,
      height: 700,
    },
    teamLink: teamPath,
    teamCta: "Meet our delivery team",
  },
  heroImage: {
    src: "/locations/location-pakistan.webp",
    alt: "Software company in Canada",
    width: 1536,
    height: 1024,
  },
  cities: [
    { slug: "toronto", label: "Main city in Canada", href: "#", city: "Toronto", blurb: "Product engineering and digital business platforms for growing Canadian teams." },
    { slug: "vancouver", label: "Main city in Canada", href: "#", city: "Vancouver", blurb: "SaaS, web, and operations software for founders and scaling businesses." },
    { slug: "montreal", label: "Main city in Canada", href: "#", city: "Montreal", blurb: "Custom software for service businesses, healthcare, and digital operations." },
    { slug: "calgary", label: "Main city in Canada", href: "#", city: "Calgary", blurb: "Business automation and web platforms for operations-focused teams." },
    { slug: "ottawa", label: "Main city in Canada", href: "#", city: "Ottawa", blurb: "Technology and public-service software for growing organizations." },
    { slug: "edmonton", label: "Main city in Canada", href: "#", city: "Edmonton", blurb: "Digital product builds centered on efficiency, operations, and growth." },
  ],
  projects: filterProjectsForPlace("Canada"),
  facts: buildLocationFacts("Canada"),
  industries: {
    title: "Industries we serve in Canada",
    subtitle:
      "Our software company supports healthcare, service businesses, education, logistics, and digital brands with custom platforms tuned to real operational needs.",
    items: [
      { slug: "healthcare", title: "Healthcare", description: "Clinic, scheduling, and operations systems for practices and care teams across Canada.", href: "/industries" },
      { slug: "education", title: "Education", description: "Student portals, administrative dashboards, and learning systems built for schools and institutions.", href: "/industries" },
    ],
  },
  faqIntro:
    "Common questions about our services, process, pricing, and support.",
  faqs: [
    {
      question: "What types of software do you develop?",
      answer:
        "We build SaaS products, custom platforms, web and mobile apps, automation, and operational software based on your business requirements.",
      tag: "Services",
      column: "left",
    },
    {
      question: "How do projects usually start?",
      answer:
        "A short discovery call leads to a scoped proposal with timeline and milestones. Most engagements begin with a fixed discovery or MVP phase.",
      tag: "Process",
      column: "right",
    },
    {
      question: "Do you offer fixed-price contracts?",
      answer:
        "Yes. Many builds use transparent fixed-price scopes with clear milestones. Time-and-materials is available when requirements need to evolve.",
      tag: "Pricing",
      column: "left",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer maintenance, feature iterations, hosting guidance, and SLA-based support so your product stays reliable as you grow.",
      tag: "Support",
      column: "right",
    },
    {
      question: "Can you modernize legacy systems?",
      answer:
        "Yes. We review old workflows, identify bottlenecks, and redesign them into maintainable software without unnecessary disruption.",
      tag: "Modernization",
      column: "left",
    },
    {
      question: "Who will work on my project?",
      answer:
        "Senior engineers, designers, and QA stay on the engagement. You get named ownership, not a junior-only handoff after the contract.",
      tag: "Team",
      column: "right",
    },
    {
      question: "Do you work with Canadian companies?",
      answer:
        "Yes. We partner with Canadian founders and operators on product builds and digital transformation with clear scope and senior delivery.",
      tag: "Coverage",
      column: "left",
    }
  ],
  cta: {
    title: "Have a software project in mind?",
    description:
      "Tell us what you're building, what problem you're trying to solve, and where you want to take it. We'll help you define the right technical approach.\n\nLooking for a software development company in Canada for SaaS or digital transformation? Let's talk.",
    buttonLabel: "Get a Free Quote",
    buttonHref: "/contact",
  },
  sections: canadaSections,
};

export const australiaLocation: LocationPageContent = {
  slug: "software-house-and-software-company-in-australia",
  country: "Australia",
  href: "/location/software-house-and-software-company-in-australia",
  title: "Software Development Company in Australia",
  description:
    "A software development company in Australia for service businesses and digital-first operators who need automation and ops platforms that cut manual work.",
  descriptionSecondary:
    "We build automation, operational software, web and mobile apps, and practical digital upgrades. Senior engineers work with your stakeholders from discovery through support.",
  descriptionTertiary:
    "Whether you are replacing spreadsheets, connecting tools, or launching a customer portal, we focus on systems that improve day-to-day operations.",
  metaTitle: "Software Development Company in Australia | Next Software Development",
  metaDescription:
    "Software development company in Australia for automation, ops platforms, web and mobile apps, and practical digital upgrades.",
  coverageTitle: "Software house coverage across Australia",
  coverageDescription:
    "We support Australian businesses in sectors like healthcare, finance, logistics, education, and service operations with software designed around local workflows and measurable ROI.",
  about: {
    overlineText: "Who we are",
    title: "A software company in Australia for practical digital transformation",
    paragraphs: [
      "Next Software Development Company supports Australian businesses that need reliable software partnerships without the compromises of poorly scoped vendor work.",
      "Whether you need a custom web platform, CRM/ERP support, a mobile app, or a senior technical [[team]] for system modernization, we help clarify the build and deliver with accountability.",
      "Our focus is on products and workflows that solve real business problems, improving service delivery, reducing manual overhead, and creating more dependable operations.",
    ],
    values: australiaSections.whyChoose.values,
    image: {
      src: "/about-us/software-development-company.webp",
      alt: "Software company in Australia",
      width: 1000,
      height: 700,
    },
    teamLink: teamPath,
    teamCta: "Meet our delivery team",
  },
  heroImage: {
    src: "/locations/location-pakistan.webp",
    alt: "Software company in Australia",
    width: 1536,
    height: 1024,
  },
  cities: [
    { slug: "sydney", label: "Main city in Australia", href: "#", city: "Sydney", blurb: "Product and business software for growing Australian teams and service businesses." },
    { slug: "melbourne", label: "Main city in Australia", href: "#", city: "Melbourne", blurb: "Modern digital platforms for operations, healthcare, and customer experiences." },
    { slug: "brisbane", label: "Main city in Australia", href: "#", city: "Brisbane", blurb: "Custom software for digital transformation and internal workflow improvement." },
    { slug: "perth", label: "Main city in Australia", href: "#", city: "Perth", blurb: "Business automation and product engineering for fast-moving teams." },
    { slug: "adelaide", label: "Main city in Australia", href: "#", city: "Adelaide", blurb: "Reliable software for service businesses, healthcare, and operational scale." },
    { slug: "canberra", label: "Main city in Australia", href: "#", city: "Canberra", blurb: "Technology support for institutions, service teams, and digital delivery." },
  ],
  projects: filterProjectsForPlace("Australia"),
  facts: buildLocationFacts("Australia"),
  industries: {
    title: "Industries we serve in Australia",
    subtitle:
      "We work with Australian organizations in healthcare, service operations, education, logistics, and digital businesses across growth, modernization, and automation needs.",
    items: [
      { slug: "healthcare", title: "Healthcare", description: "Practice management, scheduling, and patient software for healthcare teams and service providers.", href: "/industries" },
      { slug: "logistics", title: "Logistics", description: "Operations dashboards and workflow tools for teams managing movement, fulfillment, and process visibility.", href: "/industries" },
    ],
  },
  faqIntro:
    "Common questions about our services, process, pricing, and support.",
  faqs: [
    {
      question: "What types of software do you develop?",
      answer:
        "We build automation, ops platforms, web and mobile apps, CRM and ERP workflows, and practical digital upgrades based on your operational needs.",
      tag: "Services",
      column: "left",
    },
    {
      question: "How do projects usually start?",
      answer:
        "A short discovery call leads to a scoped proposal with timeline and milestones. Most engagements begin with a fixed discovery or MVP phase.",
      tag: "Process",
      column: "right",
    },
    {
      question: "Do you offer fixed-price contracts?",
      answer:
        "Yes. Many builds use transparent fixed-price scopes with clear milestones. Time-and-materials is available when requirements need to evolve.",
      tag: "Pricing",
      column: "left",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer maintenance, feature iterations, hosting guidance, and SLA-based support so your product stays reliable as you grow.",
      tag: "Support",
      column: "right",
    },
    {
      question: "Can you modernize legacy systems?",
      answer:
        "Yes. We review old workflows, identify bottlenecks, and redesign them into maintainable software without unnecessary disruption.",
      tag: "Modernization",
      column: "left",
    },
    {
      question: "Who will work on my project?",
      answer:
        "Senior engineers, designers, and QA stay on the engagement. You get named ownership, not a junior-only handoff after the contract.",
      tag: "Team",
      column: "right",
    },
    {
      question: "Do you work with Australian businesses?",
      answer:
        "Yes. We support Australian service businesses and digital-first teams that need automation and ops software with measurable ROI.",
      tag: "Coverage",
      column: "left",
    }
  ],
  cta: {
    title: "Have a software project in mind?",
    description:
      "Tell us what you're building, what problem you're trying to solve, and where you want to take it. We'll help you define the right technical approach.\n\nLooking for a software development company in Australia for automation and ops platforms? Let's talk.",
    buttonLabel: "Get a Free Quote",
    buttonHref: "/contact",
  },
  sections: australiaSections,
};

export const ukLocation: LocationPageContent = {
  slug: "software-house-and-software-company-in-uk",
  country: "United Kingdom",
  href: "/location/software-house-and-software-company-in-uk",
  title: "Software Development Company UK",
  description:
    "A software development company UK teams trust for B2B SaaS, professional services platforms, and compliance-aware product engineering.",
  descriptionSecondary:
    "We build secure B2B SaaS, custom web apps, mobile products, and internal systems. Senior engineers work with your stakeholders from discovery through launch and support.",
  descriptionTertiary:
    "Whether you are shipping a regulated workflow, a client portal, or a SaaS MVP, we focus on clear scope, documentation, and systems that support long-term growth.",
  metaTitle: "Software Development Company UK | Next Software Development",
  metaDescription:
    "Software development company UK for secure B2B SaaS, compliance-aware product engineering, and custom platforms for professional services.",
  coverageTitle: "Software house coverage across the UK",
  coverageDescription:
    "We support UK businesses with custom software design and build, digital transformation work, and product engineering for operations, internal systems, and service delivery.",
  about: {
    overlineText: "Who we are",
    title: "A software company in the UK for product and operations software",
    paragraphs: [
      "Next Software Development Company works with businesses across the UK that need a dependable digital partner for custom software, interfaces, and operational improvements.",
      "As a software company in the UK, our [[team]] supports startups, service businesses, and growing organizations with strategy, product design, custom web development, and documentation-driven execution.",
      "Our goal is to make technology feel like a strategic advantage: clear communication, well-scoped work, and systems that support long-term growth.",
    ],
    values: ukSections.whyChoose.values,
    image: {
      src: "/about-us/software-development-company.webp",
      alt: "Software company in the UK",
      width: 1000,
      height: 700,
    },
    teamLink: teamPath,
    teamCta: "Meet our delivery team",
  },
  heroImage: {
    src: "/locations/location-pakistan.webp",
    alt: "Software company in the UK",
    width: 1536,
    height: 1024,
  },
  cities: [
    { slug: "london", label: "Main city in United Kingdom", href: "#", city: "London", blurb: "Product engineering and strategic software partnerships for ambitious UK teams." },
    { slug: "manchester", label: "Main city in United Kingdom", href: "#", city: "Manchester", blurb: "Custom software that supports growth, operations, and customer experience." },
    { slug: "birmingham", label: "Main city in United Kingdom", href: "#", city: "Birmingham", blurb: "Digital systems for service businesses, healthcare, and scaling operations." },
    { slug: "edinburgh", label: "Main city in United Kingdom", href: "#", city: "Edinburgh", blurb: "SaaS and business software support for teams with product ambition." },
    { slug: "glasgow", label: "Main city in United Kingdom", href: "#", city: "Glasgow", blurb: "Custom platforms and operational tools for growing and established teams." },
    { slug: "leeds", label: "Main city in United Kingdom", href: "#", city: "Leeds", blurb: "Product and operations software built around practical business needs." },
  ],
  projects: filterProjectsForPlace("United Kingdom"),
  facts: buildLocationFacts("United Kingdom"),
  industries: {
    title: "Industries we serve in the UK",
    subtitle:
      "We build software for the service sector, digital startups, healthcare, education, logistics, and operations-focused teams that need practical systems to grow.",
    items: [
      { slug: "healthcare", title: "Healthcare", description: "Software that streamlines patient intake, scheduling, and operational visibility for care providers.", href: "/industries" },
      { slug: "finance", title: "Finance", description: "Secure and data-conscious systems for business operations, compliance workflows, and automation.", href: "/industries" },
    ],
  },
  faqIntro:
    "Common questions about our services, process, pricing, and support.",
  faqs: [
    {
      question: "What types of software do you develop?",
      answer:
        "We build secure B2B SaaS, custom web apps, internal tools, APIs, and compliance-aware product systems based on your requirements.",
      tag: "Services",
      column: "left",
    },
    {
      question: "How do projects usually start?",
      answer:
        "A short discovery call leads to a scoped proposal with timeline and milestones. Most engagements begin with a fixed discovery or MVP phase.",
      tag: "Process",
      column: "right",
    },
    {
      question: "Do you offer fixed-price contracts?",
      answer:
        "Yes. Many builds use transparent fixed-price scopes with clear milestones. Time-and-materials is available when requirements need to evolve.",
      tag: "Pricing",
      column: "left",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer maintenance, feature iterations, hosting guidance, and SLA-based support so your product stays reliable as you grow.",
      tag: "Support",
      column: "right",
    },
    {
      question: "Can you modernize legacy systems?",
      answer:
        "Yes. We review old workflows, identify bottlenecks, and redesign them into maintainable software without unnecessary disruption.",
      tag: "Modernization",
      column: "left",
    },
    {
      question: "Who will work on my project?",
      answer:
        "Senior engineers, designers, and QA stay on the engagement. You get named ownership, not a junior-only handoff after the contract.",
      tag: "Team",
      column: "right",
    },
    {
      question: "Do you work with regulated or B2B teams in the UK?",
      answer:
        "Yes. We support UK SaaS founders, professional services, and regulated operators with documentation-driven delivery and clear milestones.",
      tag: "Coverage",
      column: "left",
    }
  ],
  cta: {
    title: "Have a software project in mind?",
    description:
      "Tell us what you're building, what problem you're trying to solve, and where you want to take it. We'll help you define the right technical approach.\n\nLooking for a software development company UK teams can rely on? Let's talk.",
    buttonLabel: "Get a Free Quote",
    buttonHref: "/contact",
  },
  sections: ukSections,
};

export const uaeLocation: LocationPageContent = {
  slug: "software-house-and-software-company-in-uae",
  country: "United Arab Emirates",
  href: "/location/software-house-and-software-company-in-uae",
  title: "Software Development Company UAE",
  description:
    "A software development company UAE businesses hire for CRM, ERP, and automation across retail, hospitality, real estate, and fast-scaling enterprises.",
  descriptionSecondary:
    "We build CRM, ERP, mobile apps, business automation, and customer portals. Senior engineers work with your stakeholders from discovery through launch and support.",
  descriptionTertiary:
    "Whether you are connecting sales and ops, digitizing property workflows, or launching a booking platform, we focus on systems that match Gulf business pace.",
  metaTitle: "Software Development Company UAE | Next Software Development",
  metaDescription:
    "Software development company UAE for CRM, ERP, automation, mobile apps, and systems for retail, hospitality, and real estate.",
  coverageTitle: "Software house coverage across the UAE",
  coverageDescription:
    "We support UAE businesses across sectors like healthcare, property, retail, logistics, and service operations with software built for scale and efficiency.",
  about: {
    overlineText: "Who we are",
    title: "A software company in the UAE for business and product systems",
    paragraphs: [
      "Next Software Development Company supports businesses across the UAE that need software built around operational reality rather than generic templates.",
      "Our [[team]] works across property, healthcare, retail, service businesses, and startup product teams that need clear strategy, delivery structure, and senior technical execution.",
      "We partner with you to design, build, and refine digital systems that improve service delivery, visibility, and growth without unnecessary overhead.",
    ],
    values: uaeSections.whyChoose.values,
    image: {
      src: "/about-us/software-development-company.webp",
      alt: "Software company in the UAE",
      width: 1000,
      height: 700,
    },
    teamLink: teamPath,
    teamCta: "Meet our delivery team",
  },
  heroImage: {
    src: "/locations/location-pakistan.webp",
    alt: "Software company in the UAE",
    width: 1536,
    height: 1024,
  },
  cities: [
    { slug: "dubai", label: "Main city in United Arab Emirates", href: "#", city: "Dubai", blurb: "Business software, CRM, ERP, and mobile systems for UAE growth teams." },
    { slug: "abu-dhabi", label: "Main city in United Arab Emirates", href: "#", city: "Abu Dhabi", blurb: "Digital transformation and operational systems for established organizations." },
    { slug: "sharjah", label: "Main city in United Arab Emirates", href: "#", city: "Sharjah", blurb: "Custom software and workflow automation for growing businesses and service firms." },
    { slug: "ajman", label: "Main city in United Arab Emirates", href: "#", city: "Ajman", blurb: "Reliable software for retail, service, and operations-heavy teams." },
    { slug: "ras-al-khaimah", label: "Main city in United Arab Emirates", href: "#", city: "Ras Al Khaimah", blurb: "Modern business tools for operational efficiency and regional scale." },
    { slug: "fujairah", label: "Main city in United Arab Emirates", href: "#", city: "Fujairah", blurb: "Application design and system improvements for growing business operators." },
  ],
  projects: filterProjectsForPlace("United Arab Emirates"),
  facts: buildLocationFacts("United Arab Emirates"),
  industries: {
    title: "Industries we serve in the UAE",
    subtitle:
      "We support growth-stage businesses and established operators in retail, healthcare, property, logistics, and service operations with modern software systems.",
    items: [
      { slug: "healthcare", title: "Healthcare", description: "Workflow software for clinics, care facilities, and service teams focused on operational efficiency.", href: "/industries" },
      { slug: "retail", title: "Retail", description: "Operations, sales, and inventory software for retail teams building a dependable digital storefront and back office.", href: "/industries" },
    ],
  },
  faqIntro:
    "Common questions about our services, process, pricing, and support.",
  faqs: [
    {
      question: "What types of software do you develop?",
      answer:
        "We build CRM, ERP, mobile apps, business automation, customer portals, and custom platforms based on your operational requirements.",
      tag: "Services",
      column: "left",
    },
    {
      question: "How do projects usually start?",
      answer:
        "A short discovery call leads to a scoped proposal with timeline and milestones. Most engagements begin with a fixed discovery or MVP phase.",
      tag: "Process",
      column: "right",
    },
    {
      question: "Do you offer fixed-price contracts?",
      answer:
        "Yes. Many builds use transparent fixed-price scopes with clear milestones. Time-and-materials is available when requirements need to evolve.",
      tag: "Pricing",
      column: "left",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer maintenance, feature iterations, hosting guidance, and SLA-based support so your product stays reliable as you grow.",
      tag: "Support",
      column: "right",
    },
    {
      question: "Can you modernize legacy systems?",
      answer:
        "Yes. We review old workflows, identify bottlenecks, and redesign them into maintainable software without unnecessary disruption.",
      tag: "Modernization",
      column: "left",
    },
    {
      question: "Who will work on my project?",
      answer:
        "Senior engineers, designers, and QA stay on the engagement. You get named ownership, not a junior-only handoff after the contract.",
      tag: "Team",
      column: "right",
    },
    {
      question: "Do you work with businesses in the UAE?",
      answer:
        "Yes. We support UAE operators in retail, hospitality, real estate, logistics, and services with CRM, ERP, and automation built for scale.",
      tag: "Coverage",
      column: "left",
    }
  ],
  cta: {
    title: "Have a software project in mind?",
    description:
      "Tell us what you're building, what problem you're trying to solve, and where you want to take it. We'll help you define the right technical approach.\n\nLooking for a software development company UAE teams trust for CRM and ERP? Let's talk.",
    buttonLabel: "Get a Free Quote",
    buttonHref: "/contact",
  },
  sections: uaeSections,
};

export const locationPages: LocationPageContent[] = [
  pakistanLocation,
  usaLocation,
  canadaLocation,
  australiaLocation,
  ukLocation,
  uaeLocation,
];

export function getLocationBySlug(slug: string): LocationPageContent | undefined {
  return locationPages.find((page) => page.slug === slug);
}
