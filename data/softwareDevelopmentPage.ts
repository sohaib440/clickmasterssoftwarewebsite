import type { FaqItem } from "@/data/landingPage";
import { contactPath, projectPath, teamPath } from "@/lib/landing/constants";

export const softwareDevelopmentMeta = {
  title: "Software Development Company | Next Software Dev",
  description:
    "Custom software development for startups & enterprises in the USA, UK, UAE, Canada & Australia. Fixed-price, senior-only delivery from Pakistan. Get a free quote.",
} as const;

export const softwareDevelopmentHero = {
  eyebrow: "Software Development Company",
  headline: "Software Development That Solves Real Business Problems",
  subheading:
    "We design, build, and maintain custom software for startups, SMBs, and enterprises across the USA, UK, UAE, Canada, and Australia as well as businesses here in Pakistan. From your first line of code to post-launch support, one senior team owns the outcome.",
  bullets: [
    "Fixed-price & dedicated-team engagements",
    "Senior engineers only no junior hand-offs",
    "Timezone overlap with US, UK & UAE business hours",
  ],
  primaryCta: "Get a Free Quote",
  primaryHref: contactPath,
  secondaryCta: "See Our Work",
  secondaryHref: projectPath,
  heroImage: {
    src: "/about us/software development company.png",
    alt: "Software development team at work",
    width: 1000,
    height: 700,
  },
} as const;

export const softwareDevelopmentStats = [
  { value: "50+", label: "Software Projects Delivered", icon: "users" as const },
  { value: "4+", label: "Years Building Custom Software", icon: "briefcase" as const },
  { value: "10+", label: "Countries Served", icon: "layers" as const },
  { value: "98%", label: "Client Satisfaction Rate", icon: "shield-check" as const },
];

export const softwareDevelopmentAbout = {
  overline: "About Us",
  title: "A Pakistan-Based Software Development Company Built for International Clients",
  paragraphs: [
    "Next Software Development is a software development company headquartered in Islamabad, Pakistan, working with clients across the United States, United Kingdom, United Arab Emirates, Canada, Australia, and Pakistan itself.",
    "We were built around a simple idea: businesses outside the traditional tech hubs deserve the same quality of software as a Silicon Valley startup without the Silicon Valley invoice. Every engagement is led hands-on, so you're not passed between account managers before your project reaches an actual engineer.",
    "We specialize in the MERN stack (React, Next.js, Node.js, Express) along with Django, Python, PostgreSQL, and MongoDB the same stack used to build production SaaS platforms, ERP systems, CRMs, and enterprise-grade dashboards for clients across four continents.",
  ],
  reasons: [
    {
      title: "Direct communication, no middlemen.",
      description: "You work directly with the engineer building your product.",
    },
    {
      title: "Timezone-flexible delivery.",
      description: "Overlapping hours with US, UK, and UAE business days.",
    },
    {
      title: "Transparent, fixed-price contracts.",
      description: "No hidden costs, clear milestones.",
    },
    {
      title: "Real production experience.",
      description:
        "Every project listed on this site is live, deployed software not a mockup.",
    },
    {
      title: "Post-launch support included.",
      description: "We don't disappear after go-live.",
    },
  ],
  cta: "Get in touch",
  ctaHref: contactPath,
} as const;

export type SoftwareDevServiceItem = {
  label: string;
  description: string;
  href: string;
};

export const softwareDevelopmentServices = {
  overline: "What We Do",
  title: "Software Development Services",
  intro:
    "Software development isn't one service it's a discipline with several specialties. Here's how we break it down, and where to go deeper on each.",
  items: [
    {
      label: "Custom Software Development",
      description:
        "Bespoke applications and platforms engineered around your exact workflows not shoehorned into off-the-shelf software.",
      href: "/software-development/custom-software-development",
    },
    {
      label: "Web Application Development",
      description:
        "Modern, responsive web apps built on React, Next.js, and Node.js, engineered for performance and SEO from day one.",
      href: "/software-development/web-development",
    },
    {
      label: "Mobile App Development",
      description: "Native and cross-platform iOS/Android apps for startups and enterprises.",
      href: "/software-development/mobile-app-development",
    },
    {
      label: "Enterprise Software Development (ERP & CRM)",
      description:
        "Custom ERP, CRM, and internal operations platforms that replace spreadsheets and disconnected tools with one system of record.",
      href: "#enterprise-software",
    },
    {
      label: "SaaS Product Development",
      description:
        "End-to-end SaaS builds multi-tenant architecture, subscription billing, and scalable infrastructure from MVP to growth stage.",
      href: "#saas-development",
    },
    {
      label: "API Development & Third-Party Integrations",
      description:
        "REST and GraphQL APIs, plus integrations with payment gateways, CRMs, and internal tools.",
      href: "/software-development/api-development",
    },
    {
      label: "Legacy System Modernization",
      description:
        "Migrating aging platforms to modern, maintainable architecture without disrupting live operations.",
      href: "#legacy-modernization",
    },
    {
      label: "Dedicated Development Teams",
      description:
        "Hire a dedicated developer or full team that works exclusively on your product, integrated with your existing workflow.",
      href: "#dedicated-teams",
    },
    {
      label: "UI/UX Design",
      description: "Research-led interface design and design systems for products that convert.",
      href: "/design-ux",
    },
    {
      label: "Cloud & DevOps",
      description: "Cloud architecture, CI/CD, and reliable production operations.",
      href: "/cloud-devops",
    },
    {
      label: "QA & Testing",
      description: "Manual and automated QA to ship production-ready software.",
      href: "/testing-and-qa",
    },
    {
      label: "AI & Automation",
      description: "Intelligent automation, agents, and ML integrations for modern products.",
      href: "/artificial-intelligence-ai",
    },
  ] satisfies SoftwareDevServiceItem[],
} as const;

export const softwareDevelopmentProjects = {
  overline: "Our Work",
  title: "Recent Projects",
  intro:
    "A sample of the platforms we've designed, built, and shipped for clients internationally and in Pakistan.",
  items: [
    {
      title: "SaaS ERP Platform",
      industry: "Manufacturing / Operations",
      description:
        "A multi-tenant SaaS ERP built to replace manual spreadsheet-based operations for a growing manufacturing business, covering inventory, procurement, and reporting in one dashboard.",
      highlights: [
        "Multi-tenant architecture",
        "Real-time inventory sync",
        "Role-based access control",
      ],
    },
    {
      title: "CRM for an International Client",
      industry: "Sales / Services",
      description:
        "A custom CRM built for an overseas client to manage leads, pipelines, and client communication in one place replacing three disconnected tools.",
      highlights: [
        "Custom pipeline stages",
        "Automated follow-up reminders",
        "Reporting dashboard",
      ],
    },
    {
      title: "Hospital Management System",
      industry: "Healthcare",
      description:
        "An HMS covering patient records, appointment scheduling, billing, and staff management for a healthcare provider.",
      highlights: [
        "Patient record management",
        "Appointment scheduling",
        "Role-based staff access",
      ],
    },
    {
      title: "POS Platform for Electronics Retailers",
      industry: "Retail",
      description:
        "A point-of-sale SaaS built for mobile and electronics retailers, with IMEI tracking and multi-currency support.",
      highlights: [
        "IMEI-level inventory tracking",
        "Multi-currency support",
        "Sales & stock reporting",
      ],
    },
  ],
  cta: "View all projects",
  ctaHref: projectPath,
} as const;

export const softwareDevelopmentTestimonials = {
  overline: "Testimonials",
  title: "What Clients Say",
  fallback:
    "We're early in building our public review profile but you can see our delivered work above, or ask us to connect you directly with a past client for a reference call.",
  referenceCta: "Request a client reference",
  referenceHref: contactPath,
} as const;

export const softwareDevelopmentCaseStudies = {
  overline: "Case Studies",
  title: "In-Depth Case Studies",
  intro:
    "For a closer look at how we approach discovery, architecture, and delivery, explore our full case studies.",
  fallbackTitle: "Want the full story behind one of our builds?",
  fallbackBody:
    "Book a call and we'll walk you through the architecture, challenges, and outcomes of a project similar to yours.",
  fallbackCta: "Book a call",
  fallbackHref: contactPath,
} as const;

export const softwareDevelopmentTeam = {
  overline: "Our People",
  title: "The People Behind the Code",
  intro:
    "Every project on this site is delivered by a small, senior, hands-on team based in Islamabad, Pakistan not outsourced further, not handed to juniors. When you work with us, you work with the people actually writing your code.",
  cta: "Meet the full team",
  ctaHref: teamPath,
} as const;

export const softwareDevelopmentFaqs: FaqItem[] = [
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
      "A focused MVP can typically be delivered in 6–10 weeks. A mid-complexity web or mobile application usually takes 3–5 months. Larger enterprise systems with multiple modules and integrations can take 6+ months. You'll receive a realistic, milestone-based timeline during the planning phase not an optimistic one that slips.",
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
];

export const softwareDevelopmentFaqSection = {
  overline: "Frequently Asked Questions",
  title: "Software Development Services Common Questions",
  intro:
    "Everything you need to know before starting a custom software project with us. Still have questions? We're happy to walk you through everything on a free call.",
  footerCta: "Still have questions? Talk to us",
  footerHref: contactPath,
} as const;

export const softwareDevelopmentClosingCta = {
  title: "Let's build your next big thing",
  body: "Tell us about your project. We'll get back to you within one business day with a clear path forward no obligation, no sales pressure.",
  cta: "Get Started",
  ctaHref: contactPath,
  subtext:
    "Free consultation · No commitment · Based in Islamabad, Pakistan, working worldwide",
} as const;
