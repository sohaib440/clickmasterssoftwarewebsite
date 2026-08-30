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
import { testimonials as baseTestimonials } from "@/data/landing/testimonials";
import { teamIntro as baseTeamIntro } from "@/data/landing/team";
import { techStackIntro as baseTechIntro } from "@/data/landing/tech-stack";
import type { ImageAsset } from "@/data/landingPage";
import { industries as baseIndustries, type Industry } from "@/data/industriesPage";
import { caseStudies, type CaseStudy } from "@/data/caseStudy";
import { showcaseProjects, type ShowcaseProject } from "@/data/projects";
import { services as baseServices, type ServiceCard } from "@/data/services";
import { solutionPath } from "@/lib/content/solutions";
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

function serviceDescription(title: string, place: string, focus: PlaceFocus): string {
  void place;
  const map: Record<string, string> = {
    "Software Development":
      `Custom software scoped around ${focus.serviceAngle}, with senior engineering from discovery through launch.`,
    "Mobile App Development":
      "iOS and Android apps for field teams, counters, and customers who need reliable workflows on the go.",
    "Web Development":
      "Modern web platforms that are fast, maintainable, and built for the browsers and devices your staff actually use.",
    "Ecommerce Development":
      "Online stores and marketplaces with catalog control, local payment options, and dependable order operations.",
    "UI/UX Design":
      "Interfaces clear enough for busy operators and polished enough to build trust with end users.",
    "Artificial Intelligence":
      "Practical AI features for document intake, forecasting, and automation where it saves real hours.",
    "Machine Learning":
      "ML models that help teams predict demand, flag risk, and prioritize work without black-box complexity.",
    "Automation Services":
      "Workflow automation for back-office approvals, notifications, and handoffs that used to live in chat and spreadsheets.",
    "Cloud & DevOps":
      "Cloud hosting and release pipelines so deploys stay safe and systems stay available during peak hours.",
    "Data & Business Intelligence":
      "Dashboards and reporting that give owners one trusted view of sales, stock, and performance.",
    Cybersecurity:
      "Security hardening for systems that handle customer, patient, or financial data, with practical access controls and reviews.",
    "Enterprise Solutions":
      "ERP, CRM, and internal platforms with role-based access for multi-department operations.",
    "Blockchain Development":
      "Selective blockchain builds where audit trails and shared ledgers create clear business value.",
    "Healthcare Software Development":
      "HMS and clinic software covering appointments, EMR, billing, and pharmacy in one practical flow.",
    "AR/VR Development":
      "Immersive experiences for training, product demos, and spatial workflows where AR/VR improves outcomes.",
    "Testing & QA":
      "QA and release testing so launches hold up across devices, roles, and peak traffic.",
  };
  return (
    map[title] ??
    `${title} delivered with the same senior standards we use on every engagement.`
  );
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

function processStepDescription(
  step: (typeof baseProcessSteps)[number],
  place: string,
  focus: PlaceFocus
): string {
  void place;
  const byStep: Record<string, string> = {
    "01": `We map how ${focus.economy} actually work: users, constraints, and success metrics before any build starts.`,
    "02": "Architecture and milestones stay explicit: stack choices, integrations, timeline, and cost agreed upfront.",
    "03": "Wireframes and prototypes reviewed with your stakeholders until the flow feels right for staff and customers.",
    "04": "Two-week sprints with demos your team can see and steer, so progress stays visible instead of disappearing into a black box.",
    "05": "Functional, security, and device testing before go-live so operators are not debugging in production.",
    "06": "Launch support, handover docs, and maintenance options so your system stays reliable after day one.",
  };
  return byStep[step.step] ?? `${step.description} Delivered with clear ownership through launch.`;
}

function whyChooseValues(place: string, focus: PlaceFocus): LocationWhyChooseContent["values"] {
  return [
    {
      title: `Built for Businesses in ${place}`,
      description: `We design around ${focus.economy}: ${focus.serviceAngle} that match real operations, not generic templates.`,
    },
    {
      title: "Senior-only delivery",
      description:
        "Engagements are staffed with senior engineers, designers, and QA. No junior-only bait-and-switch after the contract.",
    },
    {
      title: "Clear scope & pricing",
      description:
        "Fixed-price options when requirements are clear, with written out-of-scope lists so invoices stay predictable.",
    },
    {
      title: "Local + remote collaboration",
      description:
        "English-first communication and timezone-friendly calls, whether you are on-site or coordinating remotely.",
    },
    {
      title: "Post-launch accountability",
      description:
        "After go-live, we stay available for maintenance, iterations, and the issues that only show up in real operations.",
    },
    {
      title: "Secure by default",
      description:
        "Access control, code review, and data-handling practices on every build that touches customer or operational data.",
    },
  ];
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

/** Pakistan hub + Pakistan city pages use anonymized engagement composites , not international countries. */
function usesCaseBlurbs(place: string) {
  const key = place.toLowerCase();
  return key === "pakistan" || CASE_BLURB_CITIES.has(key);
}

const countrySpecificTestimonials: Record<string, LocationSocialProofItem[]> = {
  "United States": [
    {
      quote:
        "We needed a more reliable product partner for a SaaS workflow that had grown beyond our internal tools. The team brought structure, fast iteration, and a thoughtful product process that made launch and handoff far smoother than our previous agency relationships.",
      author: "Operations Lead",
      role: "New York",
    },
    {
      quote:
        "Our healthcare delivery workflow had too many manual steps and too much spreadsheet dependence. The build gave us clearer scheduling, lower admin overhead, and much better visibility for staff and management.",
      author: "Clinic Director",
      role: "Los Angeles",
    },
    {
      quote:
        "The project was delivered with clear milestones and direct communication, so our team always knew what had changed and what was coming next. It felt like working with an embedded senior product team, not a remote vendor.",
      author: "Product Manager",
      role: "Chicago",
    },
  ],
  Canada: [
    {
      quote:
        "We needed a custom system for service scheduling and client follow-up without a bloated platform. The result was faster internal operations, better communication with customers, and a cleaner system our team could actually maintain.",
      author: "Founder",
      role: "Toronto",
    },
    {
      quote:
        "Their team took the time to understand our workflow before writing code. The final product matched our operational reality and gave us better visibility across staff and client touchpoints.",
      author: "Director",
      role: "Vancouver",
    },
    {
      quote:
        "The process was disciplined, transparent, and fast. We got a product that was easier to run and easier to expand as the business grew.",
      author: "Operations Manager",
      role: "Montreal",
    },
  ],
  Australia: [
    {
      quote:
        "They helped us replace fragmented internal workflows with a clearer system and better reporting. The process was organized, the communication was strong, and the final product felt built around our real operating model.",
      author: "Business Owner",
      role: "Sydney",
    },
    {
      quote:
        "Our old software had become a bottleneck. The new platform simplified scheduling, reporting, and team coordination without disrupting the business while we were switching over.",
      author: "Healthcare Manager",
      role: "Melbourne",
    },
    {
      quote:
        "The team understood the need for practical, scalable software rather than decorative features. We got something reliable that our staff could use immediately.",
      author: "COO",
      role: "Brisbane",
    },
  ],
  "United Kingdom": [
    {
      quote:
        "The team gave us a clear roadmap and kept communication tight throughout the build. The outcome was a better product, a better project rhythm, and a more confident internal team.",
      author: "Head of Product",
      role: "London",
    },
    {
      quote:
        "We needed a partner to untangle manual processes and create a cleaner operational system. The build improved productivity quickly and gave us new confidence in our internal tooling.",
      author: "Operations Director",
      role: "Manchester",
    },
    {
      quote:
        "Their structured delivery approach gave us visibility at every milestone. We always knew what was being built, why it mattered, and what the next decision point was.",
      author: "Founder",
      role: "Birmingham",
    },
  ],
  "United Arab Emirates": [
    {
      quote:
        "We needed software that could handle real operations and not just look good in a demo. The final system gave us stronger visibility, better process control, and smoother day-to-day execution.",
      author: "General Manager",
      role: "Dubai",
    },
    {
      quote:
        "The project felt organized from the start. Scope, responsibilities, and delivery milestones were clear, and the system we received fit the pace of our real business operations.",
      author: "Operations Lead",
      role: "Abu Dhabi",
    },
    {
      quote:
        "We wanted a software partner that would stay accountable after launch. That is exactly what happened, and the system kept improving as our team adapted to it.",
      author: "Founder",
      role: "Sharjah",
    },
  ],
};

function pickTestimonials(place: string): LocationSocialProofItem[] {
  if (countrySpecificTestimonials[place]) return countrySpecificTestimonials[place];
  const blurbs = caseBlurbsForPlace(place);
  const matched = baseTestimonials.filter(
    (t) =>
      t.role.toLowerCase().includes(place.toLowerCase()) ||
      t.quote.toLowerCase().includes(place.toLowerCase())
  );
  const named =
    matched.length >= 3
      ? matched
      : rotate([...baseTestimonials], place).slice(0, 6);

  if (blurbs.length === 0) return named;
  // City/Pakistan pages: lead with honest anonymized blurbs, then other city blurbs for depth
  if (place.toLowerCase() === "pakistan") return blurbs;
  const otherBlurbs = pakistanCityCaseBlurbs.filter(
    (item) => !blurbs.includes(item)
  );
  return [...blurbs, ...otherBlurbs];
}

function pickCaseStudies(place: string): CaseStudy[] {
  return rotate([...caseStudies], place).slice(0, 6);
}

export function buildLocationSections(
  place: string,
  options?: { isPakistan?: boolean }
): LocationPageSections {
  const isPakistan = options?.isPakistan ?? place.toLowerCase() === "pakistan";
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

  const placeLabel = isPakistan ? "Pakistan" : place;

  const servicesTitles: Record<string, string> = {
    Pakistan: "Software Development Services for Pakistani Businesses",
    "United States": "Software Development Services for US Businesses",
    Canada: "Software Development Services for Canadian Businesses",
    Australia: "Software Development Services for Australian Businesses",
    "United Kingdom": "Software Development Services for UK Businesses",
    "United Arab Emirates": "Software Development Services for UAE Businesses",
  };

  return {
    trust: {
      ariaLabel: `Trust numbers for our software house in ${placeLabel}`,
    },
    services: {
      overlineText: isPakistan ? "Services across Pakistan" : `Services in ${placeLabel}`,
      title:
        servicesTitles[placeLabel] ??
        `Software Development Services for ${placeLabel} Businesses`,
      description: isPakistan
        ? `From Islamabad to Karachi, we ship ${focus.serviceAngle} for ${focus.economy}.`
        : `We deliver ${focus.serviceAngle} for ${focus.economy}.`,
      items: baseServices.map((service) => ({
        title: service.title,
        tag: service.tag,
        accent: service.accent,
        description: serviceDescription(service.title, placeLabel, focus),
      })),
    },
    whyChoose: {
      overlineText: "Why choose us",
      title: isPakistan
        ? "Why teams across Pakistan work with us"
        : `Why businesses in ${placeLabel} work with us`,
      description: isPakistan
        ? "Differentiators that matter when you hire a nationwide software house, not a slide-deck agency."
        : "Accountability from discovery through support, without the black-box delivery model.",
      values: whyChooseValues(placeLabel, focus),
    },
    projects: {
      overlineText: "Recent projects",
      title: isPakistan
        ? "Recent projects from Pakistan"
        : `Recent projects relevant to ${placeLabel}`,
      description: isPakistan
        ? "Selected builds showing how we ship for Pakistani clinics, schools, retailers, and product teams."
        : `Selected product work that mirrors the systems ${placeLabel} ${focus.economy} typically need.`,
    },
    industries: {
      overlineText: isPakistan ? "Industries nationwide" : `Industries in ${placeLabel}`,
      title: isPakistan
        ? "Industries we serve in Pakistan"
        : `Industries we serve in ${placeLabel}`,
      description: isPakistan
        ? "All 15 sectors we support , healthcare, education, retail, manufacturing, finance, logistics, and more , with copy tailored to Pakistani workflows and growth."
        : `All 15 industries we serve, with ${placeLabel}-specific software focus across healthcare, education, retail, technology, finance, logistics, and more.`,
      items: pickIndustries(placeLabel, focus),
    },
    tech: {
      overlineText: isPakistan ? "Technology stack" : `${placeLabel} tech stack`,
      title: isPakistan
        ? "Built with proven, modern tools"
        : `Modern tools for ${placeLabel} products`,
      titleItalic: "proven, modern tools",
      description: isPakistan
        ? `${baseTechIntro} Chosen for nationwide delivery reliability across Pakistani markets.`
        : `We pick stacks that ${placeLabel} teams can maintain: modern, proven, and matched to ${focus.serviceAngle}.`,
      intro: isPakistan
        ? `${baseTechIntro} Applied consistently from capital projects to regional launches.`
        : `Frontend, backend, mobile, database, and cloud choices for ${placeLabel} builds that need longevity, not fashion.`,
    },
    process: {
      overlineText: isPakistan ? "How we work in Pakistan" : `How we work with ${placeLabel}`,
      title: isPakistan
        ? "Our delivery process"
        : `Delivery process for ${placeLabel} projects`,
      titleItalic: "transparent, agile, and built around you",
      description: isPakistan
        ? "A clear path from discovery to launch for founders and operators hiring a Pakistan software house."
        : `Discovery through launch for ${placeLabel} stakeholders who want demos, milestones, and no black-box delivery.`,
      steps: baseProcessSteps.map((step) => ({
        ...step,
        description: processStepDescription(step, placeLabel, focus),
      })),
      ctaLabel: isPakistan ? "Start your Pakistan project" : "Start your project",
    },
    caseStudies: {
      overlineText: "Case studies",
      title: isPakistan
        ? "Results from real engagements"
        : `Case studies for ${placeLabel} buyers`,
      description: isPakistan
        ? "Outcomes from clinics, schools, retailers, and product teams across Pakistan."
        : `Outcome stories that help ${placeLabel} decision-makers see how similar systems go live.`,
      items: pickCaseStudies(placeLabel),
    },
    testimonials: {
      overlineText: usesCaseBlurbs(placeLabel)
        ? "How we've helped businesses like yours"
        : isPakistan
          ? "Client feedback"
          : `${placeLabel} client feedback`,
      title: usesCaseBlurbs(placeLabel)
        ? "Local engagement examples"
        : "What Our Clients Say",
      titleItalic: usesCaseBlurbs(placeLabel) ? "engagement" : "Clients",
      description: usesCaseBlurbs(placeLabel)
        ? isPakistan
          ? "Illustrative composites based on project types we deliver across Pakistani cities , not attributed customer reviews."
          : `An anonymized engagement example for ${placeLabel}, plus similar work in other Pakistani cities , not attributed customer reviews.`
        : isPakistan
          ? "Feedback from founders and operators who hired us for Pakistani and international delivery."
          : `Feedback from founders and operators who worked with us on ${placeLabel} product and operations software.`,
      items: pickTestimonials(placeLabel),
    },
    team: {
      overlineText: isPakistan
        ? "Pakistan software house team"
        : `${placeLabel} delivery team`,
      title: isPakistan ? "A senior team" : `The team behind ${placeLabel} delivery`,
      titleItalic: "team",
      description: isPakistan
        ? "Senior engineers and designers shipping for clients across Pakistan and overseas."
        : `The same senior bench that supports ${placeLabel} projects from kickoff through maintenance.`,
      intro: isPakistan
        ? `${baseTeamIntro} We deliver for cities nationwide with one accountable team.`
        : `${baseTeamIntro} For ${placeLabel}, you get named senior ownership, not an anonymous offshore queue.`,
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
  all: ShowcaseProject[] = showcaseProjects
): ShowcaseProject[] {
  const matched = all.filter((project) =>
    project.category.toLowerCase().includes(place.toLowerCase())
  );
  if (matched.length > 0) return matched;
  return rotate(all, place);
}

const pakistanSections = buildLocationSections("Pakistan", { isPakistan: true });

export const pakistanLocation: LocationPageContent = {
  slug: "software-house-and-software-company-in-pakistan",
  country: "Pakistan",
  href: "/location/software-house-and-software-company-in-pakistan",
  title: "Software House in Pakistan",
  description:
    "A software house in Pakistan helping clinics, schools, retailers, and enterprises ship HMS, ERP, and custom digital products that improve operations and support long-term growth.",
  descriptionSecondary:
    "We build custom software, web and mobile apps, SaaS, AI features, ERP and CRM, Hospital Management Systems (HMS), and business automation. Our senior [[team]] stays with you from discovery through launch and ongoing support.",
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
  projects: showcaseProjects,
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
      "Next Software Development Company works with growing businesses, clinic groups, SaaS founders, and service organizations across the United States. Our software company brings senior product engineering, UI/UX design, and technical planning to help teams build the right system without the usual agency delays.",
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
    teamLink: "/team",
    teamCta: "Meet our US delivery team",
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
  projects: showcaseProjects,
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
      "From website platforms and SaaS products to internal operations software and workflow automation, our team builds software around the realities of Canadian SMEs and growth-stage founders.",
      "We focus on business clarity, maintainable engineering, and strong collaboration so each release brings measurable improvement instead of just a feature list.",
    ],
    values: canadaSections.whyChoose.values,
    image: {
      src: "/about-us/software-development-company.webp",
      alt: "Software company in Canada",
      width: 1000,
      height: 700,
    },
    teamLink: "/team",
    teamCta: "Meet our Canada software team",
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
  projects: showcaseProjects,
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
      "Whether you need a custom web platform, CRM/ERP support, a mobile app, or a senior technical team for system modernization, we help clarify the build and deliver with accountability.",
      "Our focus is on products and workflows that solve real business problems,improving service delivery, reducing manual overhead, and creating more dependable operations.",
    ],
    values: australiaSections.whyChoose.values,
    image: {
      src: "/about-us/software-development-company.webp",
      alt: "Software company in Australia",
      width: 1000,
      height: 700,
    },
    teamLink: "/team",
    teamCta: "Meet our Australia team",
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
  projects: showcaseProjects,
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
      "As a software company in the UK, we support startups, service businesses, and growing organizations with strategy, product design, custom web development, and documentation-driven execution.",
      "Our goal is to make technology feel like a strategic advantage: clear communication, well-scoped work, and systems that support long-term growth.",
    ],
    values: ukSections.whyChoose.values,
    image: {
      src: "/about-us/software-development-company.webp",
      alt: "Software company in the UK",
      width: 1000,
      height: 700,
    },
    teamLink: "/team",
    teamCta: "Meet our UK delivery team",
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
  projects: showcaseProjects,
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
      "Our work spans property, healthcare, retail, service businesses, and startup product teams that need clear strategy, delivery structure, and senior technical execution.",
      "We partner with you to design, build, and refine digital systems that improve service delivery, visibility, and growth without unnecessary overhead.",
    ],
    values: uaeSections.whyChoose.values,
    image: {
      src: "/about-us/software-development-company.webp",
      alt: "Software company in the UAE",
      width: 1000,
      height: 700,
    },
    teamLink: "/team",
    teamCta: "Meet our UAE delivery team",
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
  projects: showcaseProjects,
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
