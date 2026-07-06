import { contactPath } from "@/lib/landing/constants";

export type Industry = {
  slug: string;
  name: string;
  industry: string;
  description: string;
  tags: string[];
};

export const industriesPageMeta = {
  title: "Industries We Serve",
  description:
    "Custom software for healthcare, fintech, retail, logistics, education, and more built around your industry's workflows, compliance needs, and growth goals.",
  hero: {
    eyebrow: "Industries",
    title: "Software built for your sector",
    description:
      "We design and ship custom platforms for regulated, fast-moving, and operationally complex industries from hospitals and banks to retailers and logistics fleets.",
  },
  cta: {
    title: "Don't see your industry listed?",
    description:
      "Most of our work starts with a niche workflow problem. Tell us your sector and we'll share relevant case experience.",
    button: "Discuss your industry",
    href: contactPath,
  },
} as const;

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "TechCorp",
    industry: "Manufacturing",
    description:
      "Automate production lines and streamline factory operations with intelligent control systems.",
    tags: ["ERP", "IoT", "Operations"],
  },
  {
    slug: "healthcare",
    name: "HealthPlus",
    industry: "Healthcare",
    description:
      "Build intelligent diagnostic tools and automated patient management systems to improve care accuracy and streamline clinical workflows.",
    tags: ["HMS", "Telehealth", "Compliance"],
  },
  {
    slug: "retail",
    name: "RetailHub",
    industry: "Retail",
    description:
      "Modernize storefronts and online shops with smart inventory, checkout, and loyalty experiences.",
    tags: ["POS", "E-commerce", "Inventory"],
  },
  {
    slug: "real-estate",
    name: "EstatePro",
    industry: "Real Estate",
    description:
      "Manage listings, contracts, and tenant relationships with unified property platforms.",
    tags: ["CRM", "Listings", "Agents"],
  },
  {
    slug: "education",
    name: "EduSmart",
    industry: "Education",
    description:
      "Deliver adaptive learning experiences and digital classrooms that scale with every student.",
    tags: ["LMS", "EdTech", "Portals"],
  },
  {
    slug: "finance",
    name: "FinTrust",
    industry: "Finance",
    description:
      "Secure trading platforms and analytics dashboards built for speed, accuracy, and compliance.",
    tags: ["FinTech", "Analytics", "Security"],
  },
  {
    slug: "logistics",
    name: "LogiFlow",
    industry: "Logistics",
    description:
      "Track shipments end-to-end and optimize fleets with real-time routing intelligence.",
    tags: ["Tracking", "Fleet", "Warehousing"],
  },
  {
    slug: "media",
    name: "MediaWave",
    industry: "Media",
    description:
      "Power broadcasting, streaming, and content workflows with high-performance production tools.",
    tags: ["Streaming", "CMS", "Workflows"],
  },
  {
    slug: "banking",
    name: "NovaBank",
    industry: "Banking",
    description:
      "Modern core banking, digital onboarding, and fraud protection for next-generation institutions.",
    tags: ["Core banking", "KYC", "Fraud"],
  },
  {
    slug: "agriculture",
    name: "GreenField",
    industry: "Agriculture",
    description:
      "Precision farming software that turns sensor data into higher yields and lower waste.",
    tags: ["IoT", "Sensors", "Analytics"],
  },
  {
    slug: "hospitality",
    name: "Skyline Hotels",
    industry: "Hospitality",
    description:
      "Reservation, guest experience, and operations platforms for premium hotel brands.",
    tags: ["Bookings", "Guest apps", "Ops"],
  },
  {
    slug: "health-fitness",
    name: "Pulse Fitness",
    industry: "Health & Fitness",
    description:
      "Member apps, class booking, and performance tracking to grow modern fitness communities.",
    tags: ["Membership", "Mobile", "Scheduling"],
  },
  {
    slug: "technology",
    name: "Quantum Dynamics",
    industry: "Technology",
    description:
      "Cutting-edge platforms, APIs, and infrastructure for software-first technology companies.",
    tags: ["SaaS", "APIs", "Platforms"],
  },
  {
    slug: "insurance",
    name: "Lumina Insurance",
    industry: "Insurance",
    description:
      "Quote, underwrite, and service policies faster with automated insurance workflows.",
    tags: ["Underwriting", "Claims", "Automation"],
  },
  {
    slug: "consulting",
    name: "Vertex Solutions",
    industry: "Consulting",
    description:
      "Client portals, analytics, and engagement tooling tailored for high-performing consultancies.",
    tags: ["Portals", "Reporting", "CRM"],
  },
];
