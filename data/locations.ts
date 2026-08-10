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

export type LocationTestimonialsContent = LocationSectionHeading & {
  items: typeof baseTestimonials;
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
  return CITY_FOCUS[place] ?? {
    ...DEFAULT_FOCUS,
    economy: `${place} businesses, clinics, and schools`,
  };
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
  const map: Record<string, string> = {
    "Software Development":
      `Custom software development for ${place} ${focus.economy}, scoped around ${focus.serviceAngle} with senior engineering from discovery to launch.`,
    "Mobile App Development":
      `iOS and Android apps for ${place} teams who need mobile workflows in the field, at the counter, or for customers on the go.`,
    "Web Development":
      `Modern web platforms for ${place} businesses: fast, SEO-ready, and built for the browsers and devices your staff and customers actually use.`,
    "Ecommerce Development":
      `Online stores and marketplaces for ${place} retailers, with local payment options, catalog control, and reliable order operations.`,
    "UI/UX Design":
      `Interfaces designed for ${place} operators and end users, clear enough for busy staff and polished enough to build trust.`,
    "Artificial Intelligence":
      `Practical AI features for ${place} operations: document intake, forecasting, and automation where it saves real hours.`,
    "Machine Learning":
      `ML models that help ${place} teams predict demand, flag risk, and prioritize work without black-box complexity.`,
    "Automation Services":
      `Workflow automation for ${place} back offices: approvals, notifications, and handoffs that used to live in WhatsApp and spreadsheets.`,
    "Cloud & DevOps":
      `Cloud hosting and release pipelines for ${place} products, so deploys stay safe and systems stay available during peak hours.`,
    "Data & Business Intelligence":
      `Dashboards and reporting for ${place} owners who need one trusted view of sales, stock, and performance.`,
    Cybersecurity:
      `Security hardening for ${place} systems handling customer, patient, or financial data, with practical access controls and reviews.`,
    "Enterprise Solutions":
      `ERP, CRM, and internal platforms for ${place} enterprises that need role-based access and multi-department workflows.`,
    "Blockchain Development":
      `Selective blockchain builds for ${place} use cases where audit trails and shared ledgers create clear business value.`,
    "Healthcare Software Development":
      `HMS and clinic software for ${place} hospitals and practices: appointments, EMR, billing, and pharmacy in one flow.`,
    "AR/VR Development":
      `Immersive experiences for ${place} training, product demos, and spatial workflows where AR/VR improves outcomes.`,
    "Testing & QA":
      `QA and release testing for ${place} products so launches hold up across devices, roles, and peak traffic.`,
  };
  return (
    map[title] ??
    `${title} for ${place} organizations, delivered with the same senior standards we use nationwide.`
  );
}

function industryDescription(industry: Industry, place: string, focus: PlaceFocus): string {
  const local: Record<string, string> = {
    Manufacturing: `Production, inventory, and factory ops software for ${place} manufacturers who need shop-floor truth, not spreadsheet chaos.`,
    Healthcare: `HMS, clinic ERP, and patient workflows for ${place} hospitals and private practices that need reliable day-to-day systems.`,
    Retail: `POS, inventory, and multi-branch retail tools for ${place} store owners who want daily sales visibility without calling every manager.`,
    "Real Estate": `Listings, lead CRM, and agent workflows for ${place} property teams tired of leads dying in WhatsApp threads.`,
    Education: `School portals, fees, attendance, and parent apps for ${place} campuses that need systems staff and families will actually use.`,
    Finance: `Secure finance and analytics platforms for ${place} firms that need accuracy, access control, and audit-ready records.`,
    Logistics: `Fleet, shipment, and warehouse visibility for ${place} logistics operators moving goods across the region.`,
    Media: `Content and publishing workflows for ${place} media teams that need speed without broken handoffs.`,
    Banking: `Onboarding, ops, and compliance-minded tools for ${place} financial institutions modernizing customer journeys.`,
    Agriculture: `Agri ops, inventory, and buyer/seller tooling for ${place} farms and traders who need seasonal clarity.`,
    Hospitality: `Bookings, guest ops, and property tools for ${place} hotels and tourism businesses through peak seasons.`,
  };
  const base = local[industry.industry] ?? `${industry.description} Built for how ${place} teams work.`;
  if (focus.priorityIndustrySlugs.includes(industry.slug)) {
    return `${base} A priority focus for ${place} ${focus.economy}.`;
  }
  return base;
}

function processStepDescription(
  step: (typeof baseProcessSteps)[number],
  place: string,
  focus: PlaceFocus
): string {
  const byStep: Record<string, string> = {
    "01": `We map how ${place} ${focus.economy} actually work: users, constraints, and success metrics before any build starts.`,
    "02": `Architecture and milestones for ${place} projects stay explicit: stack choices, integrations, timeline, and cost agreed upfront.`,
    "03": `Wireframes and prototypes for ${place} staff and customers, reviewed with your stakeholders until the flow feels right.`,
    "04": `Two-week sprints with demos your ${place} team can see and steer, so progress stays visible instead of disappearing into a black box.`,
    "05": `Functional, security, and device testing before go-live so ${place} operators are not debugging in production.`,
    "06": `Launch support, handover docs, and maintenance options so your ${place} system stays reliable after day one.`,
  };
  return byStep[step.step] ?? `${step.description} Delivered for ${place} teams.`;
}

function whyChooseValues(place: string, focus: PlaceFocus): LocationWhyChooseContent["values"] {
  return [
    {
      title: `${place} market focus`,
      description: `We design around ${focus.economy} in ${place}: ${focus.serviceAngle} that match local operations, not generic templates.`,
    },
    {
      title: "Senior-only delivery",
      description: `${place} engagements are staffed with senior engineers, designers, and QA. No junior-only bait-and-switch after the contract.`,
    },
    {
      title: "Clear scope & pricing",
      description: `Fixed-price options for ${place} projects when requirements are clear, with written out-of-scope lists so invoices stay predictable.`,
    },
    {
      title: "Local + remote collaboration",
      description: `English-first communication and timezone-friendly calls for ${place} stakeholders, whether you are on-site or coordinating remotely.`,
    },
    {
      title: "Post-launch accountability",
      description: `After go-live in ${place}, we stay available for maintenance, iterations, and the issues that only show up in real operations.`,
    },
    {
      title: "Secure by default",
      description: `Access control, code review, and data-handling practices on every ${place} build that touches customer or operational data.`,
    },
  ];
}

function pickIndustries(place: string, focus: PlaceFocus): Industry[] {
  const prioritized = focus.priorityIndustrySlugs
    .map((slug) => baseIndustries.find((i) => i.slug === slug))
    .filter((i): i is Industry => Boolean(i));
  const rest = baseIndustries.filter((i) => !focus.priorityIndustrySlugs.includes(i.slug));
  const ordered = [...prioritized, ...rotate(rest, place)].slice(0, 9);
  return ordered.map((item) => ({
    ...item,
    description: industryDescription(item, place, focus),
  }));
}

function pickTestimonials(place: string) {
  const matched = baseTestimonials.filter(
    (t) =>
      t.role.toLowerCase().includes(place.toLowerCase()) ||
      t.quote.toLowerCase().includes(place.toLowerCase())
  );
  if (matched.length >= 3) return matched;
  return rotate([...baseTestimonials], place).slice(0, 6);
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

  return {
    trust: {
      ariaLabel: `Trust numbers for our software house in ${placeLabel}`,
    },
    services: {
      overlineText: isPakistan ? "Services across Pakistan" : `Services in ${placeLabel}`,
      title: isPakistan ? "What we deliver" : `Software services for ${placeLabel}`,
      titleItalic: isPakistan ? "digital future" : "local teams",
      description: isPakistan
        ? `From Islamabad to Karachi, we ship ${focus.serviceAngle} for ${focus.economy}.`
        : `As a software house serving ${placeLabel}, we deliver ${focus.serviceAngle} for ${focus.economy}.`,
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
        : `Genuine differentiators for ${placeLabel} operators who need accountability from discovery through support.`,
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
        ? `Healthcare, education, retail, manufacturing, and more, tailored to Pakistani workflows and growth.`
        : `Sector-focused software for ${placeLabel}, prioritized around ${focus.economy}.`,
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
      ctaLabel: isPakistan ? "Start your Pakistan project" : `Start your ${placeLabel} project`,
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
      overlineText: isPakistan
        ? "Reviews from Google, Clutch & Trustpilot"
        : `${placeLabel} client reviews`,
      title: isPakistan ? "What partners say" : `What clients say about work near ${placeLabel}`,
      titleItalic: "partners",
      description: isPakistan
        ? "Feedback from founders and operators who hired us for Pakistani and international delivery."
        : `Reviews relevant to teams evaluating a software house for ${placeLabel}.`,
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
  eyebrow: "Locations · Pakistan",
  title: "Software House in Pakistan",
  description:
    "Next Software Development Company is the best software house and top-rated software development company in Pakistan. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Islamabad, Lahore, Karachi, and beyond.",
  descriptionSecondary:
    "Our experienced team of developers, designers, and engineers combines technical expertise with deep local market insight to deliver scalable, secure, and affordable solutions that streamline operations and drive sustainable growth. Whether you are a startup building your first MVP or an enterprise seeking a full scale ERP system, we turn your vision into reliable, high performing software.",
  metaTitle: "Software House in Pakistan",
  metaDescription:
    "Next Software Development Company is the best software house and top-rated software development company in Pakistan. Custom HMS, ERP, and digital products for businesses nationwide.",
  coverageTitle: "Cities we serve across Pakistan",
  coverageDescription:
    "As a nationwide software house and software development company, we partner with founders and operators across Pakistan, building HMS for Islamabad clinics, school platforms in Lahore, and retail systems in Karachi. Pick your city to see how our software company can support your market.",
  about: {
    overlineText: "Who we are",
    title: "A top-rated software house and software development company in Pakistan",
    paragraphs: [
      "Next Software Development Company is a leading software house and software development company headquartered in Islamabad, with delivery teams across Lahore, Karachi, and major cities nationwide. Our software company builds custom software, HMS, ERP, mobile apps, and SaaS for clinics, schools, retailers, and growing enterprises in Pakistan, and for international clients who want senior Pakistani engineering at scale.",
      "As an experienced software house in Pakistan, we bring 7+ years of experience since our founding in 2019, 500+ happy clients, and a team of 20+ software engineers across 10+ countries. From Urdu-ready clinic workflows in Islamabad to multi-campus school platforms in Lahore and retail POS across Karachi, this software development company combines local market understanding with the same delivery standards we apply on global engagements.",
      "Whether you are a founder in Pakistan or an overseas company hiring a software house and software company in Pakistan, you get English-first communication, timezone-friendly collaboration, transparent fixed pricing, and post-launch support that does not disappear after go-live.",
    ],
    values: pakistanSections.whyChoose.values,
    image: {
      src: "/about us/software-development-company.webp",
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
    src: "/locations/Location-Pakistan.webp",
    alt: "Best software house and top rated software company in Pakistan",
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
  sections: pakistanSections,
};

export const locationPages: LocationPageContent[] = [pakistanLocation];

export function getLocationBySlug(slug: string): LocationPageContent | undefined {
  return locationPages.find((page) => page.slug === slug);
}
