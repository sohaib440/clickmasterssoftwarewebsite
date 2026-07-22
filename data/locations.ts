import type { FaqItem } from "@/data/landing/types";
import type { ImageAsset } from "@/data/landingPage";
import type { ShowcaseProject } from "@/data/projectShowcase";
import { contactPath, teamPath } from "@/lib/landing/constants";

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

export type LocationPageContent = {
  slug: string;
  country: string;
  href: string;
  eyebrow: string;
  title: string;
  description: string;
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
];

export const pakistanLocation: LocationPageContent = {
  slug: "software-house-and-software-company-in-pakistan",
  country: "Pakistan",
  href: "/location/software-house-and-software-company-in-pakistan",
  eyebrow: "Locations · Pakistan",
  title: "Software house and top rated software company in Pakistan",
  description:
    "Next Software Development Company builds custom software, HMS, ERP, and digital products for clinics, schools, and growing businesses across Pakistan—from Islamabad and Lahore to Karachi and beyond.",
  coverageTitle: "Cities we serve across Pakistan",
  coverageDescription:
    "We partner with founders and operators nationwide—building HMS for Islamabad clinics, school platforms in Lahore, and retail systems in Karachi. Pick your city to see how a dedicated software house can support your market.",
  about: {
    overlineText: "About us",
    title: "A top-rated software house in Pakistan",
    paragraphs: [
      "Next Software Development Company is headquartered in Islamabad with delivery teams across Lahore, Karachi, and major cities nationwide. We build custom software, HMS, ERP, mobile apps, and SaaS for clinics, schools, retailers, and growing enterprises in Pakistan—and for international clients who want senior Pakistani engineering at scale.",
      "Our 60+ engineers, designers, and QA specialists have shipped 250+ projects over more than a decade. From Urdu-ready clinic workflows in Islamabad to multi-campus school platforms in Lahore and retail POS across Karachi, we combine local market understanding with the same delivery standards we apply on global engagements.",
      "Whether you are a founder in Pakistan or an overseas company hiring a software house in Pakistan, you get English-first communication, timezone-friendly collaboration, transparent fixed pricing, and post-launch support that does not disappear after go-live.",
    ],
    values: [
      {
        title: "Pakistan-wide coverage",
        description:
          "Active delivery from Islamabad, Lahore, and Karachi to 13+ cities across the country.",
      },
      {
        title: "Senior-only teams",
        description:
          "Senior developers, designers, and QA on every project—no junior-only delivery squads.",
      },
      {
        title: "Local + global clients",
        description:
          "HMS, ERP, and product builds for Pakistani operators and international teams hiring in Pakistan.",
      },
      {
        title: "Transparent pricing",
        description:
          "Fixed-price contracts with clear scope—no surprise invoices mid-project.",
      },
      {
        title: "Post-launch support",
        description:
          "We stay involved after go-live with maintenance, updates, and ongoing improvements.",
      },
      {
        title: "Secure delivery",
        description:
          "ISO-aligned processes, code reviews, and data security best practices on every engagement.",
      },
    ],
    image: {
      src: "/about us/software development company.png",
      alt: "Next Software Development Company team in Pakistan",
      width: 1000,
      height: 700,
    },
    teamLink: teamPath,
    teamCta: "Meet our Pakistan team",
  },
  caseWork: {
    overlineText: "Case work",
    title: "Case studies from Pakistan",
    description:
      "Selected builds for clinics, schools, and retailers across Pakistani cities—same delivery standard as our global case studies.",
  },
  heroImage: {
    src: "/services/Software development.png",
    alt: "Software development team in Pakistan",
    width: 800,
    height: 800,
  },
  cities: pakistanCities,
  projects: [
    {
      slug: "clinic-erp-islamabad",
      title: "Clinic ERP Islamabad",
      category: "Healthcare · Islamabad",
      description:
        "A unified HMS/ERP for a multi-doctor Islamabad clinic—appointments, billing, pharmacy, and patient records in one Urdu-ready workflow.",
      highlights: ["Single clinic system", "Faster check-ins", "Local compliance ready"],
      slides: [
        {
          label: "Patient records",
          caption: "Complete histories, visits, and notes in one place.",
          image: {
            src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Clinic management dashboard for Islamabad healthcare",
            width: 1200,
            height: 750,
          },
        },
        {
          label: "Scheduling",
          caption: "Doctor calendars and check-in flows for busy clinics.",
          image: {
            src: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Clinic appointment scheduling software",
            width: 1200,
            height: 750,
          },
        },
        {
          label: "Billing & pharmacy",
          caption: "Invoices and stock tied to each patient visit.",
          image: {
            src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Healthcare billing and pharmacy module",
            width: 1200,
            height: 750,
          },
        },
      ],
    },
    {
      slug: "school-lms-lahore",
      title: "School platform Lahore",
      category: "Education · Lahore",
      description:
        "Admissions, fees, attendance, and parent portals for a private school network in Lahore—cutting admin load and improving parent communication.",
      highlights: ["Multi-campus rollout", "Clearer fee tracking", "Parent app access"],
      slides: [
        {
          label: "Campus hub",
          caption: "Admissions and student records across campuses.",
          image: {
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "School management software for Lahore",
            width: 1200,
            height: 750,
          },
        },
        {
          label: "Fee collection",
          caption: "Transparent fee status for parents and accounts.",
          image: {
            src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "School fee management interface",
            width: 1200,
            height: 750,
          },
        },
        {
          label: "Parent portal",
          caption: "Attendance, notices, and updates on mobile.",
          image: {
            src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Parent portal for school communication",
            width: 1200,
            height: 750,
          },
        },
      ],
    },
    {
      slug: "retail-pos-karachi",
      title: "Retail POS Karachi",
      category: "Retail · Karachi",
      description:
        "Cloud POS with real-time inventory sync, stock alerts, and role-based reporting for multi-branch retail across Karachi.",
      highlights: ["Live stock sync", "Branch-level reports", "Faster checkout"],
      slides: [
        {
          label: "Checkout flow",
          caption: "Faster counters across every outlet.",
          image: {
            src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Retail POS checkout for Karachi stores",
            width: 1200,
            height: 750,
          },
        },
        {
          label: "Inventory sync",
          caption: "Stock levels updated across branches in real time.",
          image: {
            src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Retail inventory sync dashboard",
            width: 1200,
            height: 750,
          },
        },
        {
          label: "Branch analytics",
          caption: "Owner and manager views per location.",
          image: {
            src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Multi-branch retail analytics",
            width: 1200,
            height: 750,
          },
        },
      ],
    },
  ],
  facts: {
    title: "Pakistan software house facts & figures",
    subtitle:
      "A national footprint with senior delivery from Islamabad—serving clinics, schools, startups, and enterprises across major Pakistani cities.",
    items: [
      {
        value: "13+",
        label: "Cities covered",
        detail:
          "Active delivery and sales coverage from Islamabad and Lahore to Karachi, Faisalabad, Multan, and more.",
      },
      {
        value: "250+",
        label: "Projects delivered",
        detail:
          "Custom software, HMS, ERP, mobile apps, and SaaS platforms shipped for local and global clients.",
      },
      {
        value: "60+",
        label: "Engineers in Pakistan",
        detail:
          "Senior developers, designers, and QA specialists based in Pakistan with English-first communication.",
      },
      {
        value: "20+",
        label: "Industries served",
        detail:
          "Healthcare, education, retail, logistics, fintech, and manufacturing workflows built for Pakistani ops.",
      },
      {
        value: "10+",
        label: "Years building",
        detail:
          "A decade of product engineering experience headquartered in Pakistan for worldwide delivery.",
      },
      {
        value: "100%",
        label: "Senior delivery",
        detail:
          "Client projects staffed with experienced engineers—no junior-only teams on production work.",
      },
    ],
  },
  industries: {
    title: "Industries we serve in Pakistan",
    subtitle:
      "From healthcare HMS and school platforms to fintech, retail, and logistics—software tailored to Pakistani workflows, compliance, and growth.",
    items: [
      {
        slug: "healthcare",
        title: "Healthcare",
        description:
          "HMS, clinic ERP, telehealth, and compliance-ready workflows for hospitals and private practices across Pakistan.",
        href: "/industries",
      },
      {
        slug: "education",
        title: "Schools & education",
        description:
          "School management, LMS, fee portals, and parent apps built for colleges and academies in major cities.",
        href: "/industries",
      },
    ],
  },
  faqIntro:
    "Common questions about hiring a software house in Pakistan and delivering HMS, ERP, and custom products locally.",
  faqs: [
    {
      question: "Why choose a software house in Pakistan?",
      answer:
        "Pakistan offers strong engineering talent, competitive delivery costs, and overlapping time zones with the Middle East and Europe—ideal for long-term product partnerships.",
      tag: "Pakistan",
      column: "left",
    },
    {
      question: "Do you build HMS for Islamabad clinics?",
      answer:
        "Yes. We design hospital and clinic management systems covering appointments, EMR, billing, pharmacy, and reporting—scoped to your specialty and staff size.",
      tag: "Healthcare",
      column: "right",
    },
    {
      question: "Which Pakistani cities do you work with?",
      answer:
        "We support clients nationwide, including Islamabad, Lahore, Karachi, Rawalpindi, Faisalabad, Multan, Peshawar, and other major business centers.",
      tag: "Locations",
      column: "left",
    },
    {
      question: "Can you deliver school management software?",
      answer:
        "We build school and college platforms for admissions, attendance, fees, exams, and parent communication—on web and mobile.",
      tag: "Education",
      column: "right",
    },
    {
      question: "How do projects usually start?",
      answer:
        "A short discovery call, then a scoped proposal with timeline and milestones. Most engagements begin with a fixed discovery or MVP phase.",
      tag: "Process",
      column: "left",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes—maintenance, feature iterations, hosting guidance, and SLA-based support so your Pakistan-based product stays reliable as you grow.",
      tag: "Support",
      column: "right",
    },
  ],
  cta: {
    title: "Ready to build with a software company in Pakistan?",
    description:
      "Tell us about your clinic, school, or product idea—we’ll reply within one business day.",
    buttonLabel: "Get a Free Quote",
    buttonHref: contactPath,
  },
};

export const locationPages: LocationPageContent[] = [pakistanLocation];

export function getLocationBySlug(slug: string): LocationPageContent | undefined {
  return locationPages.find((page) => page.slug === slug);
}
