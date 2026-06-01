import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Code2,
  Database,
  Layers,
  Mail,
  Share2,
} from "lucide-react";

import { contactPath } from "@/lib/landing/constants";

export const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faqs" },
  { label: "Contact", href: contactPath },
] as const;

export const contactInfo = {
  email: "umerkhayam1717@gmail.com",
  responseTime: "Within one business day",
  hours: "Monday – Friday, 9:00 – 18:00",
  location: "Remote-first · Worldwide",
} as const;

export type ContactSelectOption = {
  value: string;
  label: string;
};

export const contactProjectTypes: ContactSelectOption[] = [
  { value: "custom-software", label: "Custom software / product" },
  { value: "erp", label: "ERP system" },
  { value: "crm", label: "CRM platform" },
  { value: "ai-agent", label: "AI agent / automation" },
  { value: "mobile-app", label: "Mobile app" },
  { value: "ecommerce", label: "E-commerce platform" },
  { value: "integration", label: "Integration / API work" },
  { value: "other", label: "Other" },
];

export const contactBudgetRanges: ContactSelectOption[] = [
  { value: "under-25k", label: "Under $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "100k-250k", label: "$100,000 – $250,000" },
  { value: "250k-plus", label: "$250,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export const contactTimelineOptions: ContactSelectOption[] = [
  { value: "asap", label: "ASAP / within 1 month" },
  { value: "1-3-months", label: "1 – 3 months" },
  { value: "3-6-months", label: "3 – 6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "flexible", label: "Flexible / exploring" },
];

export type ContactFormData = {
  name: string;
  email: string;
  contact: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const heroImages: ImageAsset[] = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=75",
    alt: "Laptop with code on a bright desk",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=480&q=75",
    alt: "Developer working at a monitor",
    width: 480,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=480&q=75",
    alt: "Analytics dashboard on screen",
    width: 480,
    height: 360,
  },
];

export type ServiceSubItem = { label: string; slug: string; href: string };
export type ServiceCategory = {
  label: string;
  slug: string;
  href: string;
  description?: string;
  items: ServiceSubItem[];
};

import { getServiceNavCategories } from "@/lib/content";

/** Nav dropdown — auto-generated from lib/content/categories.data.ts */
export const serviceCategories = getServiceNavCategories();

export const processSteps = [
  {
    step: "1",
    title: "Discover",
    description: "Goals, users, and constraints—mapped before we write code.",
  },
  {
    step: "2",
    title: "Design",
    description: "Architecture and interfaces aligned with your timeline.",
  },
  {
    step: "3",
    title: "Build",
    description: "Weekly demos, transparent progress, room to refine.",
  },
  {
    step: "4",
    title: "Launch",
    description: "Deploy, handoff, and partnership beyond go-live.",
  },
];

export const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "98%", label: "Client retention" },
  { value: "9yr+", label: "Avg. experience" },
  { value: "24", label: "Team members" },
];

export const aboutSection = {
  paragraphs: [
    "Nexus is a boutique software studio founded on a simple belief: great products should feel as clear as the horizon—open, calm, and forward-looking.",
    "We partner with founders and product teams who need senior talent without the overhead of a large agency. From first prototype to production scale, we stay close to the work and accountable to outcomes.",
  ],
  values: [
    {
      title: "Clarity first",
      description: "We reduce noise in requirements, architecture, and interfaces so teams can move with confidence.",
    },
    {
      title: "Craft & care",
      description: "Quality is a habit—code reviews, design systems, and documentation are part of every engagement.",
    },
    {
      title: "True partnership",
      description: "We embed with your team, share context openly, and build software you can own long after we ship.",
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=75",
    alt: "Team collaborating in a bright studio space",
    width: 1000,
    height: 700,
  },
};

export type Technology = {
  name: string;
  color: string;
};

export type TechStackCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "sky" | "peach" | "navy" | "cream";
  technologies: Technology[];
};

export const techStackCategories: TechStackCategory[] = [
  {
    title: "Frontend",
    description: "Fast, accessible interfaces with design systems that scale.",
    icon: Layers,
    accent: "sky",
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#0D1B2A" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#38BDF8" },
      { name: "React Native", color: "#61DAFB" },
    ],
  },
  {
    title: "Backend",
    description: "APIs and services with clear contracts and room to grow.",
    icon: Code2,
    accent: "navy",
    technologies: [
      { name: "Node.js", color: "#339933" },
      { name: "Python", color: "#3776AB" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "Redis", color: "#DC382D" },
      { name: "GraphQL", color: "#E10098" },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure as code, observability, and reliable delivery.",
    icon: Cloud,
    accent: "peach",
    technologies: [
      { name: "AWS", color: "#FF9900" },
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "Terraform", color: "#844FBA" },
      { name: "GitHub Actions", color: "#2088FF" },
    ],
  },
  {
    title: "Data & AI",
    description: "Pipelines, analytics, and ML where they add real value.",
    icon: Database,
    accent: "cream",
    technologies: [
      { name: "dbt", color: "#FF694B" },
      { name: "Snowflake", color: "#29B5E8" },
      { name: "OpenAI", color: "#412991" },
      { name: "LangChain", color: "#1C3C3C" },
      { name: "BigQuery", color: "#669DF6" },
    ],
  },
];

export const allTechnologies = techStackCategories.flatMap((category) =>
  category.technologies.map((tech) => ({ ...tech, category: category.title }))
);

export type Client = {
  slug: string;
  name: string;
  logo: string;
};

export const clients: Client[] = [
  { slug: "meridian-bank", name: "Meridian Bank", logo: "/clients/meridian-bank.svg" },
  { slug: "northline-health", name: "Northline Health", logo: "/clients/northline-health.svg" },
  { slug: "cargo-pulse", name: "CargoPulse", logo: "/clients/cargo-pulse.svg" },
  { slug: "ledgerly", name: "Ledgerly", logo: "/clients/ledgerly.svg" },
  { slug: "aurora-retail", name: "Aurora Retail", logo: "/clients/aurora-retail.svg" },
  { slug: "vela-analytics", name: "Vela Analytics", logo: "/clients/vela-analytics.svg" },
  { slug: "harbor-mutual", name: "Harbor Mutual", logo: "/clients/harbor-mutual.svg" },
  { slug: "prism-edtech", name: "Prism EdTech", logo: "/clients/prism-edtech.svg" },
];

export const projects = [
  {
    slug: "meridian-bank",
    title: "Meridian Bank",
    category: "Fintech · Platform",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75",
      alt: "Financial analytics dashboard on screen",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "northline-health",
    title: "Northline Health",
    category: "Healthcare · Portal",
    image: {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=75",
      alt: "Clinician using a tablet in a healthcare setting",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "cargo-pulse",
    title: "CargoPulse",
    category: "Logistics · Mobile",
    image: {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=75",
      alt: "Warehouse logistics and shipping operations",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "ledgerly",
    title: "Ledgerly",
    category: "SaaS · Dashboard",
    image: {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=75",
      alt: "Team collaborating around a SaaS product demo",
      width: 1200,
      height: 750,
    },
  },
];

export const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founding Engineer",
    image: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Sarah Chen",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Marcus Webb",
    role: "Lead Architect",
    image: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Marcus Webb",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Elena Ruiz",
    role: "Product Design",
    image: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Elena Ruiz",
      width: 600,
      height: 600,
    },
  },
  {
    name: "James Okonkwo",
    role: "DevOps",
    image: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of James Okonkwo",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Priya Sharma",
    role: "Engineering",
    image: {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Priya Sharma",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Alex Morgan",
    role: "Delivery",
    image: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Alex Morgan",
      width: 600,
      height: 600,
    },
  },
];

export const testimonials = [
  {
    quote:
      "They delivered our MVP in eleven weeks with zero drama. Weekly demos kept everyone aligned and we shipped on schedule.",
    author: "Sarah Chen",
    role: "CTO, Ledgerly",
    image: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=96&q=75",
      alt: "Sarah Chen",
      width: 200,
      height: 200,
    },
  },
  {
    quote:
      "The team rebuilt our legacy stack without downtime. Communication was clear, documentation excellent, outcomes measurable.",
    author: "Marcus Webb",
    role: "VP Engineering, Northline",
    image: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&q=75",
      alt: "Marcus Webb",
      width: 200,
      height: 200,
    },
  },
  {
    quote:
      "Best studio experience we've had—senior talent on every call and a product our users genuinely love using.",
    author: "Elena Ruiz",
    role: "Product Director, CargoPulse",
    image: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=96&q=75",
      alt: "Elena Ruiz",
      width: 200,
      height: 200,
    },
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: ImageAsset;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "drawing-the-horizon",
    title: "Drawing the horizon: planning products that last",
    excerpt: "How we align roadmaps with the lightest path to value.",
    date: "May 12, 2026",
    readTime: "6 min",
    category: "Studio",
    image: {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=640&q=75",
      alt: "Team planning session at a whiteboard",
      width: 800,
      height: 500,
    },
    body: [
      "The best roadmaps are not the longest—they are the clearest. We start every engagement by separating must-haves from nice-to-haves, then sequencing work so stakeholders see value early without mortgaging the architecture.",
      "That means defining thin vertical slices: a user can complete a meaningful action end-to-end, even if the polish comes later. It also means writing down assumptions and revisiting them after each demo, not after each quarter.",
      "When teams skip this discipline, they accumulate parallel initiatives that compete for the same engineers and design attention. The horizon drifts. Our job is to keep it visible—what we are building now, what we are deferring, and why.",
      "Products that last are planned in layers: a stable core, extension points for integrations, and UX that can grow without redesigning from scratch every year. That is the horizon we draw with partners.",
    ],
  },
  {
    slug: "calm-interfaces",
    title: "Calm interfaces for complex workflows",
    excerpt: "Design patterns we use when the domain is anything but simple.",
    date: "Apr 28, 2026",
    readTime: "8 min",
    category: "Design",
    image: {
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=640&q=75",
      alt: "UI design sketches and interface components",
      width: 800,
      height: 500,
    },
    body: [
      "Complex domains—healthcare, logistics, finance—do not become simple because we wish them so. The interface can still feel calm if information hierarchy, progressive disclosure, and consistent patterns do the heavy lifting.",
      "We favor fewer primary actions per screen, clear status for async work, and language that matches how practitioners talk—not how databases are shaped. Empty states and error messages get the same attention as happy paths.",
      "Design systems help, but only when tokens and components map to real product concepts. Otherwise teams bolt on one-off screens and the calm erodes. We document decisions alongside Figma files so engineering and design stay aligned.",
      "Accessibility is part of calm, not an audit at the end. Keyboard flows, contrast, and screen reader labels are designed in from the first prototype, especially when compliance is non-negotiable.",
    ],
  },
  {
    slug: "shipping-weekly",
    title: "Shipping weekly without burning out",
    excerpt: "Trunk-based development and demos that actually help.",
    date: "Apr 3, 2026",
    readTime: "5 min",
    category: "Engineering",
    image: {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9530aa2f?auto=format&fit=crop&w=640&q=75",
      alt: "Developer laptop showing code in an IDE",
      width: 800,
      height: 500,
    },
    body: [
      "Weekly shipping is a rhythm, not a heroics contest. Trunk-based development, small pull requests, and automated checks keep main green so merges are boring—in a good way.",
      "Demos should show working software, not slide decks. We timebox prep, focus on user-visible changes, and capture decisions in writing right after the call. That reduces rework and midnight pings.",
      "Sustainable pace also means protecting focus: reasonable WIP limits, clear ownership, and saying no to scope that does not serve the current milestone. Burnout is a process smell, not a badge of honor.",
      "When the rhythm works, stakeholders trust the team, engineers trust the plan, and launches feel like the next step—not a miracle.",
    ],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
  tag: string;
};

export const faqs: FaqItem[] = [
  {
    tag: "Getting started",
    question: "What kinds of projects do you take on?",
    answer:
      "We partner on greenfield products, platform rebuilds, and focused feature work—typically web, mobile, and cloud-backed systems. If you need a senior team that can own design through deployment, we're a good fit.",
  },
  {
    tag: "Timeline",
    question: "How long does a typical engagement last?",
    answer:
      "Discovery sprints run two to three weeks. MVPs often ship in eight to fourteen weeks depending on scope. Many clients stay on for ongoing product development after launch.",
  },
  {
    tag: "Collaboration",
    question: "Do you work with our existing team?",
    answer:
      "Yes. We embed alongside your engineers and designers, join your rituals, and document decisions so knowledge stays in-house. We can also lead delivery end-to-end when you need extra capacity.",
  },
  {
    tag: "Pricing",
    question: "How do you price projects?",
    answer:
      "We offer fixed-scope phases after discovery, monthly retainers for ongoing work, and time-boxed sprints for exploratory efforts. You'll get a clear proposal with milestones before we start building.",
  },
  {
    tag: "Process",
    question: "What does your process look like week to week?",
    answer:
      "You'll see working software every week—demos, written updates, and a shared backlog. We favor short feedback loops, trunk-based development, and designs validated against real technical constraints.",
  },
  {
    tag: "Technology",
    question: "Can you work with our tech stack?",
    answer:
      "We specialize in modern JavaScript and cloud-native stacks (React, Next.js, Node, Python, AWS, and common data tools) and adapt to what you already run when it makes sense for the product.",
  },
  {
    tag: "Support",
    question: "What happens after launch?",
    answer:
      "We hand off runbooks, monitoring, and documentation, and can stay on for maintenance, performance work, or the next roadmap phase. Our goal is software your team can own confidently.",
  },
];

export const footerColumns = [
  {
    title: "Studio",
    links: [
      { label: "About", href: "/about" },
      { label: "Solutions", href: "/solutions" },
      { label: "Work", href: "#projects" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faqs" },
      { label: "Contact", href: contactPath },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Engineering", href: "/software-development" },
      { label: "Design", href: "/design-ux" },
      { label: "Cloud", href: "/cloud-devops" },
      { label: "Security", href: "/data-security" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Email", href: "mailto:umerkhayam1717@gmail.com" },
    ],
  },
];

export const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Share2 },
  { label: "GitHub", href: "https://github.com", icon: Code2 },
  { label: "Email", href: "mailto:umerkhayam1717@gmail.com", icon: Mail },
];
