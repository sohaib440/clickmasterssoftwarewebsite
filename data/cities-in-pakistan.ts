import {
  pakistanCities,
  pakistanLocation,
  type LocationCity,
  type LocationPageContent,
} from "@/data/locations";
import { contactPath, teamPath } from "@/lib/landing/constants";

const pakistanHref = pakistanLocation.href;

type CityCopy = {
  focus: string;
  aboutTitle: string;
  paragraphs: [string, string, string];
  factDetail: string;
  heroImageSrc: string;
};

const cityCopy: Record<string, CityCopy> = {
  Islamabad: {
    focus: "HMS, clinic ERP, and government-ready platforms",
    aboutTitle: "A trusted software house in Islamabad",
    paragraphs: [
      "Next Software Development Company is a software house and software development company delivering custom software from Islamabad: HMS, clinic ERP, government workflows, and digital products for capital-region clinics, schools, and enterprises.",
      "As a trusted software company in Islamabad, our senior engineers and designers work closely with operators who need Urdu-ready staff tools, compliance-aware systems, and reliable English-first communication.",
      "Whether you are launching a clinic platform in the twin cities or hiring a software house and software company in Islamabad for a longer product partnership, you get transparent scoping, senior-only delivery, and support after go-live.",
    ],
    factDetail: "Active delivery for clinics, schools, and enterprises across Islamabad and the twin cities.",
    heroImageSrc: "/industries/healthcare.jpg",
  },
  Rawalpindi: {
    focus: "clinic, school, and service-business software",
    aboutTitle: "A practical software house in Rawalpindi",
    paragraphs: [
      "We build custom software for Rawalpindi clinics, schools, and service businesses as a local software house, paired with Islamabad delivery capacity for twin-city teams that need one reliable software company.",
      "From appointments and billing to school portals and ops tools, our software development company ships systems that match how Rawalpindi teams actually work day to day.",
      "Hire a software house and software company in Rawalpindi that stays involved after launch with clear milestones, fixed-price options, and senior engineers on every engagement.",
    ],
    factDetail: "Twin-city coverage for Rawalpindi operators who want Islamabad-grade engineering nearby.",
    heroImageSrc: "/industries/education.jpg",
  },
  Lahore: {
    focus: "product teams, startups, and enterprise builds",
    aboutTitle: "A top software house in Lahore",
    paragraphs: [
      "Lahore founders and operators work with Next Software Development Company, a top software house and software development company, for product MVPs, school platforms, ERP, and growth-stage SaaS delivered by senior Pakistani engineers.",
      "We understand Punjab’s tech hub: fast iteration for startups, multi-campus education systems, and enterprise workflows that need clean architecture and strong QA from a proven software company.",
      "Choose a software house and software company in Lahore that combines local market understanding with the same delivery standards we use on global engagements.",
    ],
    factDetail: "Product, education, and enterprise software for Lahore’s startups and growing companies.",
    heroImageSrc: "/industries/technology.jpg",
  },
  Faisalabad: {
    focus: "ERP and ops software for industry",
    aboutTitle: "A software house for Faisalabad industry",
    paragraphs: [
      "Faisalabad manufacturers and growing businesses use our team for ERP, inventory, and custom ops software that replaces spreadsheets and fragmented tools.",
      "We design workflows around local production and trade realities: role-based access, reporting owners can trust, and systems staff can learn quickly.",
      "Partner with a software house in Faisalabad that ships senior delivery, fixed scope when you need it, and ongoing support after go-live.",
    ],
    factDetail: "ERP and operations platforms for industrial and commercial teams in Faisalabad.",
    heroImageSrc: "/industries/manufacturing.jpg",
  },
  Multan: {
    focus: "custom web and mobile systems for regional companies",
    aboutTitle: "A software house supporting Multan businesses",
    paragraphs: [
      "Regional companies in Multan hire us for custom web apps, mobile tools, and internal systems that help teams scale without bloated enterprise software.",
      "Our engineers focus on practical delivery, clear requirements, usable interfaces, and systems that work for south Punjab operators.",
      "Work with a software house in Multan that stays accountable from discovery through launch and maintenance.",
    ],
    factDetail: "Custom web and mobile systems for Multan’s regional companies and institutions.",
    heroImageSrc: "/services/Mobile Application Development.png",
  },
  Gujranwala: {
    focus: "manufacturing and trade workflow software",
    aboutTitle: "Software for Gujranwala manufacturers and traders",
    paragraphs: [
      "Gujranwala manufacturers and trading houses partner with us to digitize production, inventory, and sales workflows with custom software built for local operators.",
      "We replace manual tracking with systems that fit your shop floor and office, without forcing a one-size-fits-all ERP.",
      "Hire a software house in Gujranwala that delivers senior engineering, transparent pricing, and support after go-live.",
    ],
    factDetail: "Manufacturing and trade digitization for Gujranwala industrial operators.",
    heroImageSrc: "/industries/logistics.jpg",
  },
  Karachi: {
    focus: "retail, logistics, and fintech systems at scale",
    aboutTitle: "A software company for Karachi’s scale",
    paragraphs: [
      "Karachi businesses need a software house and software development company that keeps up with volume: retail POS, logistics visibility, fintech workflows, and multi-branch operations.",
      "Next Software Development Company builds cloud systems with real-time reporting, role-based access, and architecture ready for Pakistan’s largest market as a full-service software company.",
      "Choose a software house and software company in Karachi that combines senior delivery with competitive pricing and post-launch support.",
    ],
    factDetail: "High-scale retail, logistics, and fintech builds for Karachi operators.",
    heroImageSrc: "/industries/retail.jpg",
  },
  Peshawar: {
    focus: "reliable web apps and internal tools",
    aboutTitle: "A dependable software house in Peshawar",
    paragraphs: [
      "Organizations in Peshawar work with us for reliable web applications and internal tools that improve service delivery without unnecessary complexity.",
      "We focus on stable delivery, clear documentation, and systems KPK teams can operate confidently day to day.",
      "Partner with a software house in Peshawar for senior engineering, transparent proposals, and ongoing support.",
    ],
    factDetail: "Web apps and internal tools for organizations across Peshawar and KPK.",
    heroImageSrc: "/services/Web Development.png",
  },
  Bahawalpur: {
    focus: "education and regional commerce software",
    aboutTitle: "Software for Bahawalpur education and commerce",
    paragraphs: [
      "Schools and regional businesses in Bahawalpur use our platforms for fees, attendance, parent communication, and practical commerce workflows.",
      "We keep delivery lean and useful: software that solves real admin and ops problems without overbuilding.",
      "Work with a software house in Bahawalpur that offers senior teams, clear timelines, and support after launch.",
    ],
    factDetail: "Education and regional commerce systems for Bahawalpur institutions and SMEs.",
    heroImageSrc: "/industries/consulting.jpg",
  },
  Abbottabad: {
    focus: "lean digital products for schools and clinics",
    aboutTitle: "A lean software house for Abbottabad",
    paragraphs: [
      "Abbottabad clinics, schools, and local services hire us for lean digital products: management systems and mobile-friendly tools sized for their teams.",
      "We prioritize clarity and usability so staff adopt the system quickly and operations stay simple.",
      "Choose a software house in Abbottabad that delivers senior craft with practical scope and post-launch care.",
    ],
    factDetail: "Lean clinic, school, and local-service products for Abbottabad operators.",
    heroImageSrc: "/services/UI-UX.png",
  },
  "Rahim Yar Khan": {
    focus: "ops and inventory systems for south Punjab",
    aboutTitle: "Ops software for Rahim Yar Khan businesses",
    paragraphs: [
      "Businesses in Rahim Yar Khan partner with us for operations and inventory systems that replace manual tracking and improve day-to-day visibility.",
      "We build practical tools for south Punjab teams: stock, sales, and reporting that owners can trust.",
      "Hire a software house in Rahim Yar Khan for senior delivery, transparent pricing, and support after go-live.",
    ],
    factDetail: "Operations and inventory platforms for Rahim Yar Khan SMEs and traders.",
    heroImageSrc: "/services/Data Services.png",
  },
  Okara: {
    focus: "affordable custom software for SMEs and agribusiness",
    aboutTitle: "Affordable custom software in Okara",
    paragraphs: [
      "Okara SMEs and agribusiness teams work with us for affordable custom software: ops tools, portals, and workflows tailored to local businesses.",
      "We keep scope honest and delivery senior so you get reliable systems without enterprise bloat.",
      "Partner with an Okara software house that stays involved after launch with clear support options.",
    ],
    factDetail: "SME and agribusiness software for Okara operators who need practical digital tools.",
    heroImageSrc: "/industries/agriculture.jpg",
  },
  Sialkot: {
    focus: "export-ready platforms for manufacturers and traders",
    aboutTitle: "Export-ready software for Sialkot industry",
    paragraphs: [
      "Sialkot manufacturers and trading houses hire Next Software Development Company for export-ready platforms: order workflows, inventory, and client portals built for global commerce.",
      "We design systems that match manufacturing and export ops, with reporting that leadership can use immediately.",
      "Choose a software house in Sialkot that delivers senior engineering, fixed-scope options, and long-term support.",
    ],
    factDetail: "Export and manufacturing platforms for Sialkot industrial and trading houses.",
    heroImageSrc: "/industries/finance.jpg",
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
      focus: cityMeta.blurb ?? "custom software for local businesses",
      aboutTitle: `A software house in ${cityMeta.city}`,
      paragraphs: [
        `Next Software Development Company builds custom software for ${cityMeta.city}: ${cityMeta.blurb ?? "digital products for growing local businesses."}`,
        `Our senior engineers deliver HMS, ERP, web, and mobile systems with the same standards we apply across Pakistan.`,
        `Hire a software house in ${cityMeta.city} for transparent scoping, senior-only teams, and support after go-live.`,
      ],
      factDetail: `Dedicated software delivery for businesses and institutions in ${cityMeta.city}.`,
      heroImageSrc: "/services/Software development.png",
    } satisfies CityCopy);

  return {
    slug: cityMeta.slug,
    country: "Pakistan",
    href: cityMeta.href,
    eyebrow: `Locations · Pakistan · ${cityMeta.city}`,
    title: cityMeta.label,
    description: `Next Software Development Company is a software house and software development company serving ${cityMeta.city} with ${copy.focus}. Hire a trusted software company in ${cityMeta.city} for clinics, schools, retailers, and growing enterprises.`,
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
          description: "Fixed-price contracts from a reliable software house with clear scope and no surprise invoices mid-project.",
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
        alt: `Next Software Development Company team serving ${cityMeta.city}`,
      },
      teamLink: teamPath,
      teamCta: `Meet our ${cityMeta.city} software house team`,
    },
    caseWork: {
      overlineText: "Case work",
      title: `Software house case studies from ${cityMeta.city}`,
      description: `Selected builds from our software development company for ${cityMeta.city} and nearby Pakistani markets, with the same delivery standard as our national software company case work.`,
    },
    heroImage: {
      src: copy.heroImageSrc,
      alt: `Software house and software company in ${cityMeta.city}, Pakistan`,
      width: 800,
      height: 640,
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
          detail: "Every software house project is staffed with experienced engineers with no junior-only production teams.",
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
        answer: `Next Software Development Company is a software house and software development company with local market understanding for ${cityMeta.city}, senior Pakistani engineering, competitive delivery costs, and nationwide software company coverage.`,
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
