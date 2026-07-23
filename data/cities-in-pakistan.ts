import {
  pakistanCities,
  pakistanLocation,
  type LocationCity,
  type LocationPageContent,
} from "@/data/locations";
import { contactPath, teamPath } from "@/lib/landing/constants";

const pakistanHref = pakistanLocation.href;

/** Shared hero image for all Pakistan city location pages */
const cityHeroImageSrc = "/locations/Location-Pakistan.png";

type CityCopy = {
  aboutTitle: string;
  paragraphs: [string, string, string];
  factDetail: string;
  heroImageSrc: string;
  heroLead: string;
  /** Edit per city — used as <title> / Open Graph title */
  metaTitle: string;
  /** Edit per city — used as meta description / Open Graph description */
  metaDescription: string;
};

const cityCopy: Record<string, CityCopy> = {
  Islamabad: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Islamabad",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Islamabad. Custom HMS, ERP, and digital products for the capital.",
    aboutTitle: "A top-rated software house and software development company in Islamabad",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Islamabad. As a trusted software house and software company, we deliver HMS, clinic ERP, government workflows, and digital products for capital-region clinics, schools, and enterprises.",
      "As an experienced software company in Islamabad, our senior engineers and designers work closely with operators who need Urdu-ready staff tools, compliance-aware systems, and reliable English-first communication from a proven software development company.",
      "Whether you are launching a clinic platform in the twin cities or hiring a software house and software company in Islamabad for a longer product partnership, you get transparent scoping, senior-only delivery, and support after go-live.",
    ],
    factDetail:
      "Software house delivery for clinics, schools, and enterprises across Islamabad and the twin cities.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Islamabad. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Islamabad and the twin cities.",
  },
  Rawalpindi: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Rawalpindi",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Rawalpindi. Custom software for clinics, schools, and twin-city teams.",
    aboutTitle: "A top-rated software house and software development company in Rawalpindi",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Rawalpindi. As a local software house and software company, we build custom software for clinics, schools, and service businesses, paired with Islamabad delivery capacity for twin-city teams.",
      "From appointments and billing to school portals and ops tools, our software development company ships systems that match how Rawalpindi teams actually work day to day.",
      "Hire a software house and software company in Rawalpindi that stays involved after launch with clear milestones, fixed-price options, and senior engineers on every engagement.",
    ],
    factDetail:
      "Twin-city software company coverage for Rawalpindi operators who want Islamabad-grade engineering nearby.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Rawalpindi. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Rawalpindi and the twin cities.",
  },
  Lahore: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Lahore",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Lahore. Custom HMS, ERP, MVPs, and digital products for Punjab businesses.",
    aboutTitle: "A top-rated software house and software development company in Lahore",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Lahore. Founders and operators work with our software house and software company for product MVPs, school platforms, ERP, and growth-stage SaaS delivered by senior Pakistani engineers.",
      "We understand Punjab’s tech hub: fast iteration for startups, multi-campus education systems, and enterprise workflows that need clean architecture and strong QA from a proven software development company.",
      "Choose a software house and software company in Lahore that combines local market understanding with the same delivery standards we use on global engagements.",
    ],
    factDetail:
      "Product, education, and enterprise software from a Lahore software house for startups and growing companies.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Lahore. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, startups, and growing businesses in Lahore and across Punjab.",
  },
  Faisalabad: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Faisalabad",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Faisalabad. Custom ERP, ops software, and digital products for industry.",
    aboutTitle: "A top-rated software house and software development company in Faisalabad",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Faisalabad. Manufacturers and growing businesses use our software company for ERP, inventory, and custom ops software that replaces spreadsheets and fragmented tools.",
      "As a practical software house in Faisalabad, we design workflows around local production and trade realities: role-based access, reporting owners can trust, and systems staff can learn quickly.",
      "Partner with a software house and software development company in Faisalabad that ships senior delivery, fixed scope when you need it, and ongoing support after go-live.",
    ],
    factDetail:
      "ERP and operations platforms from a Faisalabad software house for industrial and commercial teams.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Faisalabad. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for manufacturers, clinics, schools, and growing businesses in Faisalabad.",
  },
  Multan: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Multan",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Multan. Custom web, mobile, HMS, and ERP for south Punjab businesses.",
    aboutTitle: "A top-rated software house and software development company in Multan",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Multan. Regional companies hire our software house for custom web apps, mobile tools, and internal systems that help teams scale without bloated enterprise software.",
      "Our software development company focuses on practical delivery, clear requirements, usable interfaces, and systems that work for south Punjab operators.",
      "Work with a software house and software company in Multan that stays accountable from discovery through launch and maintenance.",
    ],
    factDetail:
      "Custom web and mobile systems from a Multan software company for regional companies and institutions.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Multan. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Multan and south Punjab.",
  },
  Gujranwala: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Gujranwala",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Gujranwala. Custom ERP and trade software for manufacturers.",
    aboutTitle: "A top-rated software house and software development company in Gujranwala",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Gujranwala. Manufacturers and trading houses partner with our software company to digitize production, inventory, and sales workflows built for local operators.",
      "As a hands-on software house in Gujranwala, we replace manual tracking with systems that fit your shop floor and office, without forcing a one-size-fits-all ERP.",
      "Hire a software house and software development company in Gujranwala that delivers senior engineering, transparent pricing, and support after go-live.",
    ],
    factDetail:
      "Manufacturing and trade digitization from a Gujranwala software house for industrial operators.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Gujranwala. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for manufacturers, traders, clinics, and growing businesses in Gujranwala.",
  },
  Karachi: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Karachi",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Karachi. Custom retail, logistics, fintech, HMS, and ERP solutions.",
    aboutTitle: "A top-rated software house and software development company in Karachi",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Karachi. Businesses need a software house and software company that keeps up with volume: retail POS, logistics visibility, fintech workflows, and multi-branch operations.",
      "Our software development company builds cloud systems with real-time reporting, role-based access, and architecture ready for Pakistan’s largest market.",
      "Choose a software house and software company in Karachi that combines senior delivery with competitive pricing and post-launch support.",
    ],
    factDetail:
      "High-scale retail, logistics, and fintech builds from a Karachi software development company.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Karachi. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, retailers, and growing businesses in Karachi and beyond.",
  },
  Peshawar: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Peshawar",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Peshawar. Custom web apps, HMS, and ERP for KPK organizations.",
    aboutTitle: "A top-rated software house and software development company in Peshawar",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Peshawar. Organizations work with our software company for reliable web applications and internal tools that improve service delivery without unnecessary complexity.",
      "As a dependable software house in Peshawar, we focus on stable delivery, clear documentation, and systems KPK teams can operate confidently day to day.",
      "Partner with a software house and software development company in Peshawar for senior engineering, transparent proposals, and ongoing support.",
    ],
    factDetail:
      "Web apps and internal tools from a Peshawar software house for organizations across KPK.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Peshawar. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Peshawar and across KPK.",
  },
  Bahawalpur: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Bahawalpur",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Bahawalpur. Custom education, commerce, HMS, and ERP software.",
    aboutTitle: "A top-rated software house and software development company in Bahawalpur",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Bahawalpur. Schools and regional businesses use our software company platforms for fees, attendance, parent communication, and practical commerce workflows.",
      "As a lean software house in Bahawalpur, we keep delivery useful: software that solves real admin and ops problems without overbuilding.",
      "Work with a software house and software development company in Bahawalpur that offers senior teams, clear timelines, and support after launch.",
    ],
    factDetail:
      "Education and regional commerce systems from a Bahawalpur software house for institutions and SMEs.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Bahawalpur. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Bahawalpur.",
  },
  Abbottabad: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Abbottabad",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Abbottabad. Lean HMS, school platforms, and digital products.",
    aboutTitle: "A top-rated software house and software development company in Abbottabad",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Abbottabad. Clinics, schools, and local services hire our software company for lean digital products: management systems and mobile-friendly tools sized for their teams.",
      "As a practical software house in Abbottabad, we prioritize clarity and usability so staff adopt the system quickly and operations stay simple.",
      "Choose a software house and software development company in Abbottabad that delivers senior craft with practical scope and post-launch care.",
    ],
    factDetail:
      "Lean clinic, school, and local-service products from an Abbottabad software development company.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Abbottabad. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and local services in Abbottabad.",
  },
  "Rahim Yar Khan": {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Rahim Yar Khan",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Rahim Yar Khan. Custom ops, inventory, HMS, and ERP software.",
    aboutTitle: "A top-rated software house and software development company in Rahim Yar Khan",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Rahim Yar Khan. Businesses partner with our software company for operations and inventory systems that replace manual tracking and improve day-to-day visibility.",
      "As a hands-on software house in Rahim Yar Khan, we build practical tools for south Punjab teams: stock, sales, and reporting that owners can trust.",
      "Hire a software house and software development company in Rahim Yar Khan for senior delivery, transparent pricing, and support after go-live.",
    ],
    factDetail:
      "Operations and inventory platforms from a Rahim Yar Khan software house for SMEs and traders.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Rahim Yar Khan. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Rahim Yar Khan.",
  },
  Okara: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Okara",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Okara. Affordable custom software for SMEs and agribusiness.",
    aboutTitle: "A top-rated software house and software development company in Okara",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Okara. SMEs and agribusiness teams work with our software company for affordable custom software: ops tools, portals, and workflows tailored to local businesses.",
      "As a practical software house in Okara, we keep scope honest and delivery senior so you get reliable systems without enterprise bloat.",
      "Partner with a software house and software development company in Okara that stays involved after launch with clear support options.",
    ],
    factDetail:
      "SME and agribusiness software from an Okara software house for operators who need practical digital tools.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Okara. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for SMEs, agribusiness teams, clinics, and growing businesses in Okara.",
  },
  Sialkot: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Best software house and top rated software company in Sialkot",
    metaDescription:
      "Next Software Development Company is the best software house and top-rated software development company in Sialkot. Export-ready platforms, HMS, ERP, and custom software.",
    aboutTitle: "A top-rated software house and software development company in Sialkot",
    paragraphs: [
      "Next Software Development Company is the best software house and top-rated software development company in Sialkot. Manufacturers and trading houses hire our software company for export-ready platforms: order workflows, inventory, and client portals built for global commerce.",
      "As an industrial-focused software house in Sialkot, we design systems that match manufacturing and export ops, with reporting that leadership can use immediately.",
      "Choose a software house and software development company in Sialkot that delivers senior engineering, fixed-scope options, and long-term support.",
    ],
    factDetail:
      "Export and manufacturing platforms from a Sialkot software development company for industrial and trading houses.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is the best software house and top-rated software development company in Sialkot. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for manufacturers, traders, clinics, and growing businesses in Sialkot.",
  },
};

function projectsForCity(city: string): LocationPageContent["projects"] {
  const matched = pakistanLocation.projects.filter((project) =>
    project.category.toLowerCase().includes(city.toLowerCase())
  );
  return matched.length > 0 ? matched : pakistanLocation.projects;
}

function buildCityPage(cityMeta: LocationCity): LocationPageContent {
  const copy =
    cityCopy[cityMeta.city] ??
    ({
      aboutTitle: `A top-rated software house and software development company in ${cityMeta.city}`,
      paragraphs: [
        `Next Software Development Company is the best software house and top-rated software development company in ${cityMeta.city}. As a trusted software house and software company, we build ${cityMeta.blurb ?? "digital products for growing local businesses."}`,
        `Our software development company delivers HMS, ERP, web, and mobile systems with the same standards we apply across Pakistan.`,
        `Hire a software house and software company in ${cityMeta.city} for transparent scoping, senior-only teams, and support after go-live.`,
      ],
      factDetail: `Dedicated software house delivery for businesses and institutions in ${cityMeta.city}.`,
      heroImageSrc: cityHeroImageSrc,
      heroLead: `Next Software Development Company is the best software house and top-rated software development company in ${cityMeta.city}. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in ${cityMeta.city}.`,
      metaTitle: `Best software house and top rated software company in ${cityMeta.city}`,
      metaDescription: `Next Software Development Company is the best software house and top-rated software development company in ${cityMeta.city}. Custom HMS, ERP, and digital products for local businesses.`,
    } satisfies CityCopy);

  return {
    slug: cityMeta.slug,
    country: "Pakistan",
    href: cityMeta.href,
    eyebrow: `Locations · Pakistan · ${cityMeta.city}`,
    title: copy.metaTitle,
    description: copy.heroLead,
    descriptionSecondary: pakistanLocation.descriptionSecondary,
    metaTitle: copy.metaTitle,
    metaDescription: copy.metaDescription,
    coverageTitle: `Explore more cities across Pakistan`,
    coverageDescription: `Looking beyond ${cityMeta.city}? Next Software Development Company is a nationwide software house and software company delivering from Islamabad and Lahore to Karachi and regional hubs. Pick another city to see how our software development company supports that market.`,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Locations", href: "/location" },
      { label: "Pakistan", href: pakistanHref },
      { label: cityMeta.city },
    ],
    about: {
      overlineText: "About us",
      title: copy.aboutTitle,
      paragraphs: [...copy.paragraphs],
      values: [
        {
          title: `${cityMeta.city} focus`,
          description: copy.factDetail,
        },
        {
          title: "Senior-only teams",
          description:
            "Every software development company engagement is staffed with senior developers, designers, and QA, with no junior-only delivery squads.",
        },
        {
          title: "Pakistan + global clients",
          description:
            "Local market understanding from a Pakistan software house with the same delivery standard we use on international software company builds.",
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
        ...pakistanLocation.about.image,
        alt: `Next Software Development Company, a top software house and software company in ${cityMeta.city}`,
      },
      teamLink: teamPath,
      teamCta: `Meet our ${cityMeta.city} software house team`,
    },
    caseWork: {
      overlineText: "Recent projects",
      title: `Recent projects from ${cityMeta.city}`,
      description: `Selected builds from our software development company for ${cityMeta.city} and nearby Pakistani markets, with the same delivery standard as our national software company recent projects.`,
    },
    heroImage: {
      src: copy.heroImageSrc,
      alt: `Best software house and top rated software company in ${cityMeta.city}, Pakistan`,
      width: 1536,
      height: 1024,
    },
    cities: pakistanCities,
    projects: projectsForCity(cityMeta.city),
    facts: {
      title: `${cityMeta.city} software house and software company facts`,
      subtitle: `Next Software Development Company is a software house delivering senior engineering for ${cityMeta.city} with national software company capacity across Pakistan.`,
      items: [
        {
          value: "13+",
          label: "Cities covered",
          detail: copy.factDetail,
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
            "Senior developers, designers, and QA specialists in our software house with English-first communication.",
        },
        {
          value: "20+",
          label: "Industries served",
          detail:
            "Healthcare, education, retail, logistics, fintech, and manufacturing workflows from a trusted software company.",
        },
        {
          value: "10+",
          label: "Years building",
          detail: "A decade as a software development company headquartered in Pakistan.",
        },
        {
          value: "100%",
          label: "Senior delivery",
          detail:
            "Every software house project is staffed with experienced engineers with no junior-only production teams.",
        },
      ],
    },
    industries: {
      title: `Industries our software house serves in ${cityMeta.city}`,
      subtitle: `As a software development company and software house in ${cityMeta.city}, we deliver healthcare, education, retail, and ops software tailored to how local businesses work.`,
      items: pakistanLocation.industries.items.map((item) => ({
        ...item,
        description: item.description.replace("across Pakistan", `in ${cityMeta.city}`),
      })),
    },
    faqIntro: `Common questions about hiring a software house, software company, or software development company in ${cityMeta.city}.`,
    faqs: [
      {
        question: `Why hire a software house in ${cityMeta.city}?`,
        answer: `Next Software Development Company is the best software house and top-rated software development company in ${cityMeta.city}, with senior Pakistani engineering, competitive delivery costs, and nationwide software company coverage.`,
        tag: cityMeta.city,
        column: "left",
      },
      {
        question: `What software does your software company build for ${cityMeta.city}?`,
        answer: `Our software house builds HMS, ERP, school platforms, retail/POS, web and mobile apps, and custom internal tools scoped to ${cityMeta.city} operators and growth-stage products.`,
        tag: "Services",
        column: "right",
      },
      {
        question: "Do you only work in this city?",
        answer:
          "No. This page focuses on local software house delivery, but our software development company supports clients across Pakistan and collaborates with international teams hiring a Pakistan software company.",
        tag: "Coverage",
        column: "left",
      },
      {
        question: "How do software house projects usually start?",
        answer:
          "With Next Software Development Company, a short discovery call leads to a scoped proposal with timeline and milestones. Most software company engagements begin with a fixed discovery or MVP phase.",
        tag: "Process",
        column: "right",
      },
      {
        question: "Can your software development company support us after launch?",
        answer:
          "Yes. Maintenance, feature iterations, hosting guidance, and SLA-based support from our software house so your product stays reliable as you grow.",
        tag: "Support",
        column: "left",
      },
      {
        question: "Do you offer fixed-price contracts?",
        answer:
          "Yes. Many software house builds use transparent fixed-price scopes with clear milestones. Time-and-materials is available when requirements need to evolve with our software company.",
        tag: "Pricing",
        column: "right",
      },
    ],
    cta: {
      title: `Ready to hire a software house and software company in ${cityMeta.city}?`,
      description: `Tell Next Software Development Company about your ${cityMeta.city} project: clinic, school, retail, or custom product. Our software house will reply within one business day.`,
      buttonLabel: "Get a Free Quote",
      buttonHref: contactPath,
    },
  };
}

export const pakistanCityPages: LocationPageContent[] =
  pakistanCities.map(buildCityPage);

export function getAllPakistanCitySlugs(): string[] {
  return pakistanCityPages.map((page) => page.slug);
}

export function getPakistanCityBySlug(slug: string): LocationPageContent | undefined {
  return pakistanCityPages.find((page) => page.slug === slug);
}
