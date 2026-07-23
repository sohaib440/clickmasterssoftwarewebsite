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
  /** Optional second hero paragraph (rendered below description) */
  descriptionSecondary?: string;
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
  title: "Best software house and top rated software company in Pakistan",
  description:
    "Next Software Development Company is the best software house and top-rated software development company in Pakistan. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Islamabad, Lahore, Karachi, and beyond.",
  descriptionSecondary:
    "Our experienced team of developers, designers, and engineers combines technical expertise with deep local market insight to deliver scalable, secure, and affordable solutions that streamline operations and drive sustainable growth. Whether you are a startup building your first MVP or an enterprise seeking a full scale ERP system, we turn your vision into reliable, high performing software.",
  coverageTitle: "Cities we serve across Pakistan",
  coverageDescription:
    "As a nationwide software house and software development company, we partner with founders and operators across Pakistan, building HMS for Islamabad clinics, school platforms in Lahore, and retail systems in Karachi. Pick your city to see how our software company can support your market.",
  about: {
    overlineText: "About us",
    title: "A top-rated software house and software development company in Pakistan",
    paragraphs: [
      "Next Software Development Company is a leading software house and software development company headquartered in Islamabad, with delivery teams across Lahore, Karachi, and major cities nationwide. Our software company builds custom software, HMS, ERP, mobile apps, and SaaS for clinics, schools, retailers, and growing enterprises in Pakistan, and for international clients who want senior Pakistani engineering at scale.",
      "As an experienced software house in Pakistan, our 60+ engineers, designers, and QA specialists have shipped 250+ projects over more than a decade. From Urdu-ready clinic workflows in Islamabad to multi-campus school platforms in Lahore and retail POS across Karachi, this software development company combines local market understanding with the same delivery standards we apply on global engagements.",
      "Whether you are a founder in Pakistan or an overseas company hiring a software house and software company in Pakistan, you get English-first communication, timezone-friendly collaboration, transparent fixed pricing, and post-launch support that does not disappear after go-live.",
    ],
    values: [
      {
        title: "Pakistan-wide coverage",
        description:
          "A software house serving Islamabad, Lahore, Karachi, and 13+ cities across the country.",
      },
      {
        title: "Senior-only teams",
        description:
          "Every software development company engagement is staffed with senior developers, designers, and QA, with no junior-only delivery squads.",
      },
      {
        title: "Local + global clients",
        description:
          "HMS, ERP, and product builds from a Pakistan software company for local operators and international teams.",
      },
      {
        title: "Transparent pricing",
        description:
          "Fixed-price contracts from a reliable software house with clear scope and no surprise invoices mid-project.",
      },
      {
        title: "Post-launch support",
        description:
          "Our software development company stays involved after go-live with maintenance, updates, and ongoing improvements.",
      },
      {
        title: "Secure delivery",
        description:
          "ISO-aligned processes, code reviews, and data security best practices on every software house engagement.",
      },
    ],
    image: {
      src: "/about us/software development company.png",
      alt: "Next Software Development Company, a top software house and software company in Pakistan",
      width: 1000,
      height: 700,
    },
    teamLink: teamPath,
    teamCta: "Meet our Pakistan software house team",
  },
  caseWork: {
    overlineText: "Case work",
    title: "Software house case studies from Pakistan",
    description:
      "Selected builds from our software development company for clinics, schools, and retailers across Pakistani cities, with the same delivery standard as our global software company case studies.",
  },
  heroImage: {
    src: "/about us/software development company.png",
    alt: "Best software house and top rated software company in Pakistan",
    width: 800,
    height: 440,
  },
  cities: pakistanCities,
  projects: [
    {
      slug: "clinic-erp-islamabad",
      title: "Clinic ERP Islamabad",
      category: "Healthcare · Islamabad",
      description:
        "A unified HMS/ERP built by our software house for a multi-doctor Islamabad clinic with appointments, billing, pharmacy, and patient records in one Urdu-ready workflow.",
      highlights: ["Single clinic system", "Faster check-ins", "Local compliance ready"],
      slides: [
        {
          label: "Patient records",
          caption: "Complete histories, visits, and notes in one place.",
          image: {
            src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Clinic management dashboard by a software company in Islamabad",
            width: 1200,
            height: 750,
          },
        },
        {
          label: "Scheduling",
          caption: "Doctor calendars and check-in flows for busy clinics.",
          image: {
            src: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Clinic appointment scheduling software from a Pakistan software house",
            width: 1200,
            height: 750,
          },
        },
        {
          label: "Billing & pharmacy",
          caption: "Invoices and stock tied to each patient visit.",
          image: {
            src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Healthcare billing module by a software development company",
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
        "Admissions, fees, attendance, and parent portals delivered by our software development company for a private school network in Lahore, cutting admin load and improving parent communication.",
      highlights: ["Multi-campus rollout", "Clearer fee tracking", "Parent app access"],
      slides: [
        {
          label: "Campus hub",
          caption: "Admissions and student records across campuses.",
          image: {
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "School management software by a software house in Lahore",
            width: 1200,
            height: 750,
          },
        },
        {
          label: "Fee collection",
          caption: "Transparent fee status for parents and accounts.",
          image: {
            src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "School fee management software from a software company",
            width: 1200,
            height: 750,
          },
        },
        {
          label: "Parent portal",
          caption: "Attendance, notices, and updates on mobile.",
          image: {
            src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Parent portal built by a software development company in Pakistan",
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
        "Cloud POS from our software company with real-time inventory sync, stock alerts, and role-based reporting for multi-branch retail across Karachi.",
      highlights: ["Live stock sync", "Branch-level reports", "Faster checkout"],
      slides: [
        {
          label: "Checkout flow",
          caption: "Faster counters across every outlet.",
          image: {
            src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Retail POS built by a software house in Karachi",
            width: 1200,
            height: 750,
          },
        },
        {
          label: "Inventory sync",
          caption: "Stock levels updated across branches in real time.",
          image: {
            src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Retail inventory sync by a software development company",
            width: 1200,
            height: 750,
          },
        },
        {
          label: "Branch analytics",
          caption: "Owner and manager views per location.",
          image: {
            src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=750&q=80",
            alt: "Multi-branch retail analytics from a Pakistan software company",
            width: 1200,
            height: 750,
          },
        },
      ],
    },
  ],
  facts: {
    title: "Pakistan software house and software company facts",
    subtitle:
      "Next Software Development Company is a national software house with senior delivery from Islamabad, serving clinics, schools, startups, and enterprises across major Pakistani cities.",
    items: [
      {
        value: "13+",
        label: "Cities covered",
        detail:
          "Software house delivery and sales coverage from Islamabad and Lahore to Karachi, Faisalabad, Multan, and more.",
      },
      {
        value: "250+",
        label: "Projects delivered",
        detail:
          "Custom software, HMS, ERP, mobile apps, and SaaS platforms shipped by our software development company for local and global clients.",
      },
      {
        value: "60+",
        label: "Engineers in Pakistan",
        detail:
          "Senior developers, designers, and QA specialists in our Pakistan software company with English-first communication.",
      },
      {
        value: "20+",
        label: "Industries served",
        detail:
          "Healthcare, education, retail, logistics, fintech, and manufacturing workflows built by a trusted software house for Pakistani ops.",
      },
      {
        value: "10+",
        label: "Years building",
        detail:
          "A decade as a software development company headquartered in Pakistan for worldwide delivery.",
      },
      {
        value: "100%",
        label: "Senior delivery",
        detail:
          "Every software house project is staffed with experienced engineers with no junior-only teams on production work.",
      },
    ],
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
    "Common questions about hiring a software house, software company, or software development company in Pakistan for HMS, ERP, and custom products.",
  faqs: [
    {
      question: "Why choose a software house in Pakistan?",
      answer:
        "A Pakistan software house and software development company offers strong engineering talent, competitive delivery costs, and overlapping time zones with the Middle East and Europe, making Next Software Development Company ideal for long-term product partnerships.",
      tag: "Pakistan",
      column: "left",
    },
    {
      question: "Do you build HMS for Islamabad clinics?",
      answer:
        "Yes. As a software company in Pakistan, we design hospital and clinic management systems covering appointments, EMR, billing, pharmacy, and reporting, scoped to your specialty and staff size.",
      tag: "Healthcare",
      column: "right",
    },
    {
      question: "Which Pakistani cities does your software house serve?",
      answer:
        "Our software development company supports clients nationwide, including Islamabad, Lahore, Karachi, Rawalpindi, Faisalabad, Multan, Peshawar, and other major business centers.",
      tag: "Locations",
      column: "left",
    },
    {
      question: "Can your software company deliver school management software?",
      answer:
        "Yes. Our software house builds school and college platforms for admissions, attendance, fees, exams, and parent communication, on web and mobile.",
      tag: "Education",
      column: "right",
    },
    {
      question: "How do software house projects usually start?",
      answer:
        "With Next Software Development Company, a short discovery call leads to a scoped proposal with timeline and milestones. Most software company engagements begin with a fixed discovery or MVP phase.",
      tag: "Process",
      column: "left",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes. Our software development company provides maintenance, feature iterations, hosting guidance, and SLA-based support so your Pakistan-based product stays reliable as you grow.",
      tag: "Support",
      column: "right",
    },
  ],
  cta: {
    title: "Ready to hire a software house and software company in Pakistan?",
    description:
      "Tell Next Software Development Company about your clinic, school, or product idea. Our software house will reply within one business day.",
    buttonLabel: "Get a Free Quote",
    buttonHref: contactPath,
  },
};

export const locationPages: LocationPageContent[] = [pakistanLocation];

export function getLocationBySlug(slug: string): LocationPageContent | undefined {
  return locationPages.find((page) => page.slug === slug);
}
