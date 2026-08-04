import type { FaqItem } from "@/data/landing/types";
import type { ImageAsset } from "@/data/landingPage";
import { showcaseProjects, type ShowcaseProject } from "@/data/projects";
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
  /** SEO meta title (falls back to title). Avoid brand suffix; layout template adds it. */
  metaTitle?: string;
  /** SEO meta description (~150–160 chars). Falls back to description. */
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
  metaTitle: "Best Software House and Top Rated Software Company in Pakistan",
  metaDescription:
    "Next Software Development Company is the best software house and top-rated software development company in Pakistan. Custom HMS, ERP, and digital products for businesses nationwide.",
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
          "A software house serving Islamabad, Lahore, Karachi, and 57+ cities across the country.",
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
    overlineText: "Recent projects",
    title: "Recent projects from Pakistan",
    description:
      "Selected builds from our software development company for clinics, schools, and retailers across Pakistani cities, with the same delivery standard as our global software company recent projects.",
  },
  heroImage: {
    src: "/locations/Location-Pakistan.png",
    alt: "Best software house and top rated software company in Pakistan",
    width: 1536,
    height: 1024,
  },
  cities: pakistanCities,
  projects: showcaseProjects,
  facts: {
    title: "Pakistan software house and software company facts",
    subtitle:
      "Next Software Development Company is a national software house with senior delivery from Islamabad, serving clinics, schools, startups, and enterprises across major Pakistani cities.",
    items: [
      {
        value: "57+",
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
