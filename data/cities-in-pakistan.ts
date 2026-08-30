import {
  pakistanCities,
  pakistanLocation,
  buildLocationFacts,
  buildLocationSections,
  filterProjectsForPlace,
  type LocationCity,
  type LocationPageContent,
} from "@/data/locations";
import { contactPath, teamPath } from "@/lib/landing/constants";

const pakistanHref = pakistanLocation.href;

/** Shared hero image for all Pakistan city location pages */
const cityHeroImageSrc = "/locations/location-pakistan.webp";

type CityCopy = {
  aboutTitle: string;
  paragraphs: [string, string, string] | [string, string, string, string];
  factDetail: string;
  heroImageSrc: string;
  heroLead: string;
  /** Optional second hero paragraph; falls back to Pakistan shared secondary copy */
  descriptionSecondary?: string;
  /** Optional Why Choose Us cards for this city */
  whyChoose?: Array<{ title: string; description: string }>;
  /** Edit per city, used as <title> / Open Graph title */
  metaTitle: string;
  /** Edit per city, used as meta description / Open Graph description */
  metaDescription: string;
};

const cityCopy: Record<string, CityCopy> = {
  Islamabad: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Software House in Islamabad",
    metaDescription:
      "Next Software Development Company is a software house in Islamabad. Custom HMS, ERP, and digital products for the capital.",
    aboutTitle: "A software house in Islamabad",
    paragraphs: [
      "Next Software Development Company is a software house in Islamabad. We deliver HMS, clinic ERP, government workflows, and digital products for capital-region clinics, schools, and enterprises.",
      "As an experienced software company in Islamabad, our senior engineers and designers work closely with operators who need Urdu-ready staff tools, compliance-aware systems, and reliable English-first communication from a senior delivery team.",
      "Whether you are launching a clinic platform with [[Rawalpindi]] twin-city teams or hiring a software house and software company in Islamabad for a longer product partnership, you get transparent scoping, senior-only delivery, and support after go-live from a [[software house in Pakistan]].",
    ],
    factDetail:
      "Software house delivery for clinics, schools, and enterprises across Islamabad and the twin cities.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Islamabad. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Islamabad and twin-city Rawalpindi.",
  },
  Rawalpindi: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Rawalpindi Software Company",
    metaDescription:
      "Next Software Development Company is a software house in Rawalpindi. Custom software for clinics, schools, and twin-city teams.",
    aboutTitle: "A software house in Rawalpindi",
    paragraphs: [
      "Next Software Development Company is a software house in Rawalpindi. We build custom software for clinics, schools, and service businesses, paired with [[Islamabad]] delivery capacity for twin-city teams.",
      "From appointments and billing to school portals and ops tools, our software development company ships systems that match how Rawalpindi teams actually work day to day.",
      "Work with a software house in Rawalpindi that stays involved after launch with clear milestones, fixed-price options, and senior engineers on every engagement, with the same standards as our [[software house in Pakistan]].",
    ],
    factDetail:
      "Twin-city software company coverage for Rawalpindi operators who want Islamabad-grade engineering nearby.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Rawalpindi. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Rawalpindi and nearby Islamabad.",
  },
  Lahore: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Software Development Company in Lahore",
    metaDescription:
      "Next Software Development Company is a software house in Lahore. Custom HMS, ERP, MVPs, and digital products for Punjab businesses.",
    aboutTitle: "A software house in Lahore",
    paragraphs: [
      "Next Software Development Company is a software house in Lahore. Founders and operators work with our software house and software company for product MVPs, school platforms, ERP, and growth-stage SaaS delivered by senior Pakistani engineers.",
      "We understand Punjab’s tech hub: fast iteration for startups, multi-campus education systems, and enterprise workflows that need clean architecture and strong QA from a senior delivery team.",
      "Choose a software house in Lahore that combines local market understanding with the same delivery standards we use on global engagements as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Product, education, and enterprise software from a Lahore software house for startups and growing companies.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Lahore. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, startups, and growing businesses in Lahore and across Punjab.",
  },
  Faisalabad: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Software House in Faisalabad",
    metaDescription:
      "If you are looking for a top-rated software house & software company in Faisalabad for custom software development, app development, web development, or AI automation, and you want to take your business to the next level, then you are at the right place. We are Next Software Development Company in Faisalabad, helping many Faisalabad businesses, organisations, institutes, and industries make their businesses smarter and more advanced with our different products like CMS, HMS, ERPs, websites, and automation workflows.",
    aboutTitle: "Who We Are?",
    paragraphs: [
      "Next Software Development Company is the [[certified software house and top-rated software development company in Pakistan]], serving across Pakistan for a decade since 2019. We work with thousands of businesses, startups, and organisations on different software development projects, app development, and other software projects that help them make their businesses advanced and smart.",
      "We are top-rated and loved by Pakistani business owners and the top-chosen software development company and software house in Pakistan, having an experienced team of software engineers, software designers, creative teams, and experienced strategists and planners who understand your requirements, the problems you face, and make plans that work best for you. We believe in quality work. Our first focus is to solve the problems that businesses face. Our vision is to make Next Software Development a leading software house in Pakistan that helps businesses with a customer-first approach.",
      "For Faisalabad businesses, we have a dedicated [[team]] that helps Faisalabad businesses make their businesses or companies better with our multiple services that are listed below.",
    ],
    factDetail:
      "ERP and operations platforms from a Faisalabad software house for industrial and commercial teams.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "If you are looking for a top-rated software house & software company in Faisalabad for custom software development, app development, web development, or AI automation, and you want to take your business to the next level, then you are at the right place. We are Next Software Development Company in Faisalabad, helping many Faisalabad businesses, organisations, institutes, and industries make their businesses smarter and more advanced with our different products like CMS, HMS, ERPs, websites, and automation workflows.",
    descriptionSecondary:
      "We have an experienced & certified team of software developers and software designers who understand, plan, and execute strategies for Faisalabad businesses that suit them best. We are top-rated on Google and Clutch & trusted by Faisalabad business owners. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for manufacturers, clinics, schools, and growing businesses in Faisalabad. Whether you are a startup building your first MVP or an enterprise seeking a full-scale ERP system, we turn your vision into reliable, high-performing software.",
    whyChoose: [
      {
        title: "Faisalabad Focus",
        description:
          "We have surveyed and worked with many startups and businesses. We know what challenges Faisalabad businesses and companies face. We have custom solutions for every business in Faisalabad that overcome challenges with Faisalabad-focused plans.",
      },
      {
        title: "Experienced and Certified Software Development Team",
        description:
          "We have different teams of software engineers, software designers, creative teams, and research teams that are led by experienced and expert developers.",
      },
      {
        title: "Pakistan + Global Clients",
        description:
          "We have successfully completed thousands of software development projects with international and national clients, startups, and businesses across the globe. We have thousands of happy customers across the world that choose Next Software Development.",
      },
      {
        title: "Transparent Pricing",
        description:
          "We are not like other software houses, with hidden pricing and charges. We have pre-planned pricing plans according to your requirements that best suit your budget. Because our focus is on quality first. First, we deliver; if you are happy, then we charge for our efforts.",
      },
      {
        title: "Post-Launch Support",
        description:
          "Firstly, we listen to and understand your requirements, what clients face, and what challenges and problems you are facing. Then, after meetings and planning, we recommend solutions. We provide ongoing support and maintenance services, pre-launch support, and post-launch support, and give training to your staff to better understand your software.",
      },
      {
        title: "Secure Delivery",
        description:
          "We have ISO-aligned processes. We write code with our hearts, not just using AI to write code that contains security issues and bugs. We understand, we write, and we deliver secure code without bugs and security issues.",
      },
    ],
  },
  Multan: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Multan Software Development",
    metaDescription:
      "Next Software Development Company is a software house in Multan. Custom web, mobile, HMS, and ERP for south Punjab businesses.",
    aboutTitle: "A software house in Multan",
    paragraphs: [
      "Next Software Development Company is a software house in Multan. Regional companies hire our software house for custom web apps, mobile tools, and internal systems that help teams scale without bloated enterprise software.",
      "Our software development company focuses on practical delivery, clear requirements, usable interfaces, and systems that work for south Punjab operators.",
      "Work with a software house in Multan that stays accountable from discovery through launch and maintenance as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Custom web and mobile systems from a Multan software company for regional companies and institutions.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Multan. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Multan and south Punjab.",
  },
  Gujranwala: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Software House in Gujranwala",
    metaDescription:
      "Next Software Development Company is a software house in Gujranwala. Custom ERP and trade software for manufacturers.",
    aboutTitle: "A software house in Gujranwala",
    paragraphs: [
      "Next Software Development Company is a software house in Gujranwala. Manufacturers and trading houses partner with our software company to digitize production, inventory, and sales workflows built for local operators.",
      "As a hands-on software house in Gujranwala, we replace manual tracking with systems that fit your shop floor and office, without forcing a one-size-fits-all ERP.",
      "Work with a software house in Gujranwala that delivers senior engineering, transparent pricing, and support after go-live as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Manufacturing and trade digitization from a Gujranwala software house for industrial operators.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Gujranwala. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for manufacturers, traders, clinics, and growing businesses in Gujranwala.",
  },
  Karachi: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Karachi Software Company",
    metaDescription:
      "Next Software Development Company is a software house in Karachi. Custom retail, logistics, fintech, HMS, and ERP solutions.",
    aboutTitle: "A software house in Karachi",
    paragraphs: [
      "Next Software Development Company is a software house in Karachi. Businesses need a software house and software company that keeps up with volume: retail POS, logistics visibility, fintech workflows, and multi-branch operations.",
      "Our software development company builds cloud systems with real-time reporting, role-based access, and architecture ready for Pakistan’s largest market.",
      "Choose a software house in Karachi that combines senior delivery with competitive pricing and post-launch support from a [[software house in Pakistan]].",
    ],
    factDetail:
      "High-scale retail, logistics, and fintech builds from a Karachi software development company.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Karachi. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, retailers, and growing businesses in Karachi and beyond.",
  },
  Peshawar: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Software Development Company in Peshawar",
    metaDescription:
      "Next Software Development Company is a software house in Peshawar. Custom web apps, HMS, and ERP for KPK organizations.",
    aboutTitle: "A software house in Peshawar",
    paragraphs: [
      "Next Software Development Company is a software house in Peshawar. Organizations work with our software company for reliable web applications and internal tools that improve service delivery without unnecessary complexity.",
      "As a dependable software house in Peshawar, we focus on stable delivery, clear documentation, and systems KPK teams can operate confidently day to day.",
      "Partner with a software house in Peshawar for senior engineering, transparent proposals, and ongoing support from [[software house in Pakistan]].",
    ],
    factDetail:
      "Web apps and internal tools from a Peshawar software house for organizations across KPK.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Peshawar. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Peshawar and across KPK.",
  },
  Bahawalpur: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Software House in Bahawalpur",
    metaDescription:
      "Next Software Development Company is a software house in Bahawalpur. Custom education, commerce, HMS, and ERP software.",
    aboutTitle: "A software house in Bahawalpur",
    paragraphs: [
      "Next Software Development Company is a software house in Bahawalpur. Schools and regional businesses use our software company platforms for fees, attendance, parent communication, and practical commerce workflows.",
      "As a lean software house in Bahawalpur, we keep delivery useful: software that solves real admin and ops problems without overbuilding.",
      "Work with a software house in Bahawalpur that offers senior teams, clear timelines, and support after launch as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Education and regional commerce systems from a Bahawalpur software house for institutions and SMEs.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Bahawalpur. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Bahawalpur.",
  },
  Abbottabad: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Abbottabad Software Development",
    metaDescription:
      "Next Software Development Company is a software house in Abbottabad. Lean HMS, school platforms, and digital products.",
    aboutTitle: "A software house in Abbottabad",
    paragraphs: [
      "Next Software Development Company is a software house in Abbottabad. Clinics, schools, and local services hire our software company for lean digital products: management systems and mobile-friendly tools sized for their teams.",
      "As a practical software house in Abbottabad, we prioritize clarity and usability so staff adopt the system quickly and operations stay simple.",
      "Choose a software house in Abbottabad that delivers senior craft with practical scope and post-launch care from our [[software house in Pakistan]].",
    ],
    factDetail:
      "Lean clinic, school, and local-service products from an Abbottabad software development company.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Abbottabad. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and local services in Abbottabad.",
  },
  "Rahim Yar Khan": {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Software House in Rahim Yar Khan",
    metaDescription:
      "Next Software Development Company is a software house in Rahim Yar Khan. Custom ops, inventory, HMS, and ERP software.",
    aboutTitle: "A software house in Rahim Yar Khan",
    paragraphs: [
      "Next Software Development Company is a software house in Rahim Yar Khan. Businesses partner with our software company for operations and inventory systems that replace manual tracking and improve day-to-day visibility.",
      "As a hands-on software house in Rahim Yar Khan, we build practical tools for south Punjab teams: stock, sales, and reporting that owners can trust.",
      "Work with a software house in Rahim Yar Khan for senior delivery, transparent pricing, and support after go-live as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Operations and inventory platforms from a Rahim Yar Khan software house for SMEs and traders.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Rahim Yar Khan. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Rahim Yar Khan.",
  },
  Okara: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Okara Software Company",
    metaDescription:
      "Next Software Development Company is a software house in Okara. Affordable custom software for SMEs and agribusiness.",
    aboutTitle: "A software house in Okara",
    paragraphs: [
      "Next Software Development Company is a software house in Okara. SMEs and agribusiness teams work with our software company for affordable custom software: ops tools, portals, and workflows tailored to local businesses.",
      "As a practical software house in Okara, we keep scope honest and delivery senior so you get reliable systems without enterprise bloat.",
      "Partner with a software house in Okara that stays involved after launch with clear support options from a [[software house in Pakistan]].",
    ],
    factDetail:
      "SME and agribusiness software from an Okara software house for operators who need practical digital tools.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Okara. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for SMEs, agribusiness teams, clinics, and growing businesses in Okara.",
  },
  Sialkot: {
    // --- SEO: edit these two fields for this city page ---
    metaTitle: "Software Development Company in Sialkot",
    metaDescription:
      "Next Software Development Company is a software house in Sialkot. Export-ready platforms, HMS, ERP, and custom software.",
    aboutTitle: "A software house in Sialkot",
    paragraphs: [
      "Next Software Development Company is a software house in Sialkot. Manufacturers and trading houses hire our software company for export-ready platforms: order workflows, inventory, and client portals built for global commerce.",
      "As an industrial-focused software house in Sialkot, we design systems that match manufacturing and export ops, with reporting that leadership can use immediately.",
      "Choose a software house in Sialkot that delivers senior engineering, fixed-scope options, and long-term support as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Export and manufacturing platforms from a Sialkot software development company for industrial and trading houses.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Sialkot. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for manufacturers, traders, clinics, and growing businesses in Sialkot.",
  },
  Hyderabad: {
    metaTitle: "Software House in Hyderabad",
    metaDescription:
      "Next Software Development Company is a software house in Hyderabad. Custom HMS, ERP, and digital products for Sindh businesses.",
    aboutTitle: "A software house in Hyderabad",
    paragraphs: [
      "Next Software Development Company is a software house in Hyderabad. We deliver HMS, ERP, web apps, and digital products for clinics, schools, retailers, and growing enterprises across Sindh’s second-largest city.",
      "As an experienced software company in Hyderabad, our senior engineers and designers build systems that match local ops: role-based access, clear reporting, Urdu-ready staff tools where needed, and interfaces teams can adopt quickly without long training cycles.",
      "From multi-branch retail and logistics visibility to school portals and clinic workflows, our software development company scopes products around how Hyderabad operators actually work day to day.",
      "Whether you are launching a regional platform or hiring a software house and software company in Hyderabad for a longer product partnership, you get transparent scoping, senior-only delivery, and support after go-live from a [[software house in Pakistan]].",
    ],
    factDetail:
      "Software house delivery for clinics, schools, retailers, and enterprises across Hyderabad and surrounding Sindh.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Hyderabad. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Hyderabad and across Sindh.",
  },
  Quetta: {
    metaTitle: "Quetta Software Development",
    metaDescription:
      "Next Software Development Company is a software house in Quetta. Custom HMS, ERP, and digital products for Balochistan.",
    aboutTitle: "A software house in Quetta",
    paragraphs: [
      "Next Software Development Company is a software house in Quetta. Organizations and growing businesses partner with our software house and software company for reliable HMS, ERP, and custom ops systems built for Balochistan’s capital.",
      "As a dependable software company in Quetta, we focus on stable delivery, clear documentation, offline-friendly patterns where connectivity varies, and practical workflows teams can run day to day.",
      "Public-sector adjacent tools, clinic management, and SME ops platforms are common engagements: we keep scope honest so Quetta teams get software they can operate and maintain.",
      "Work with a software house in Quetta that stays involved after launch with clear milestones, fixed-price options, and senior engineers on every engagement, with the same standards as our [[software house in Pakistan]].",
    ],
    factDetail:
      "HMS, ERP, and ops platforms from a Quetta software house for institutions and businesses across Balochistan.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Quetta. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Quetta and across Balochistan.",
  },
  Sargodha: {
    metaTitle: "Software House in Sargodha",
    metaDescription:
      "Next Software Development Company is a software house in Sargodha. Custom software for agribusiness, clinics, and SMEs.",
    aboutTitle: "A software house in Sargodha",
    paragraphs: [
      "Next Software Development Company is a software house in Sargodha. Agribusiness teams, clinics, and SMEs work with our software house and software company for practical digital products that replace spreadsheets and fragmented tools.",
      "As a hands-on software company in Sargodha, we design workflows around local trade and citrus-region operations: inventory, billing, seasonal reporting, and systems staff can learn quickly.",
      "Whether you need a lean ops portal, a clinic HMS, or a school admin platform, our software development company keeps delivery senior and scoped to what Sargodha businesses actually need.",
      "Choose a software house in Sargodha that combines local market understanding with the same delivery standards we use on global engagements as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Agribusiness, clinic, and SME software from a Sargodha software house for central Punjab operators.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Sargodha. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for agribusiness teams, clinics, schools, and growing businesses in Sargodha.",
  },
  Sukkur: {
    metaTitle: "Sukkur Software Company",
    metaDescription:
      "Next Software Development Company is a software house in Sukkur. Custom ops, inventory, HMS, and ERP for upper Sindh.",
    aboutTitle: "A software house in Sukkur",
    paragraphs: [
      "Next Software Development Company is a software house in Sukkur. Businesses and institutions hire our software house for ops, inventory, and commerce systems that improve day-to-day visibility across upper Sindh.",
      "As a practical software company in Sukkur, we keep delivery useful: stock, sales, transport-linked admin workflows, and reporting owners can trust without enterprise bloat.",
      "From trading houses along the Indus corridor to clinics and schools, our software development company builds tools that fit regional pace and staffing realities.",
      "Partner with a software house in Sukkur that ships senior delivery, fixed scope when you need it, and ongoing support after go-live from a [[software house in Pakistan]].",
    ],
    factDetail:
      "Ops and commerce platforms from a Sukkur software company for traders, SMEs, and institutions in upper Sindh.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Sukkur. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Sukkur and upper Sindh.",
  },
  Mardan: {
    metaTitle: "Software Development Company in Mardan",
    metaDescription:
      "Next Software Development Company is a software house in Mardan. Custom web apps, HMS, and ERP for KPK organizations.",
    aboutTitle: "A software house in Mardan",
    paragraphs: [
      "Next Software Development Company is a software house in Mardan. Organizations work with our software company for reliable web applications and internal tools that improve service delivery without unnecessary complexity.",
      "As a dependable software house in Mardan, we focus on stable delivery, clear documentation, and systems KPK teams can operate confidently after a short handover.",
      "Education platforms, clinic workflows, and municipal-adjacent admin tools are frequent requests: we prioritize usability so Mardan staff adopt software in the first weeks, not months.",
      "Work with a software house in Mardan that stays accountable from discovery through launch and maintenance as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Web apps and internal tools from a Mardan software house for organizations across KPK.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Mardan. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Mardan and across KPK.",
  },
  Gujrat: {
    metaTitle: "Software House in Gujrat",
    metaDescription:
      "Next Software Development Company is a software house in Gujrat. Custom ERP and manufacturing software for industrial teams.",
    aboutTitle: "A software house in Gujrat",
    paragraphs: [
      "Next Software Development Company is a software house in Gujrat. Manufacturers and trading houses partner with our software company to digitize production, inventory, and sales workflows built for local operators.",
      "As a hands-on software house in Gujrat, we replace manual tracking with systems that fit your shop floor and office, without forcing a one-size-fits-all ERP.",
      "Order pipelines, warehouse visibility, and dealer portals help Gujrat industrial teams move faster while leadership gets reporting they can act on.",
      "Work with a software house in Gujrat that delivers senior engineering, transparent pricing, and support after go-live as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Manufacturing and trade digitization from a Gujrat software house for industrial operators.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Gujrat. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for manufacturers, traders, clinics, and growing businesses in Gujrat.",
  },
  Sahiwal: {
    metaTitle: "Sahiwal Software Development",
    metaDescription:
      "Next Software Development Company is a software house in Sahiwal. Affordable custom software for SMEs, clinics, and schools.",
    aboutTitle: "A software house in Sahiwal",
    paragraphs: [
      "Next Software Development Company is a software house in Sahiwal. SMEs, clinics, and education teams work with our software company for affordable custom software tailored to central Punjab businesses.",
      "As a practical software house in Sahiwal, we keep scope honest and delivery senior so you get reliable systems without enterprise bloat or surprise change-orders mid-build.",
      "Dairy and agri-linked ops tools, school fee portals, and clinic management are common Sahiwal engagements: we ship what operators will actually use.",
      "Choose a software house in Sahiwal that combines senior delivery with competitive pricing and post-launch support from a [[software house in Pakistan]].",
    ],
    factDetail:
      "SME, clinic, and education software from a Sahiwal software house for operators who need practical digital tools.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Sahiwal. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for SMEs, clinics, schools, and growing businesses in Sahiwal.",
  },
  "Dera Ghazi Khan": {
    metaTitle: "Software House in Dera Ghazi Khan",
    metaDescription:
      "Next Software Development Company is a software house in Dera Ghazi Khan. Custom ops, HMS, and ERP for south Punjab.",
    aboutTitle: "A software house in Dera Ghazi Khan",
    paragraphs: [
      "Next Software Development Company is a software house in Dera Ghazi Khan. Regional companies and institutions hire our software house for custom web apps, mobile tools, and internal systems that help teams scale.",
      "Our software development company focuses on practical delivery: clear requirements, usable interfaces, and systems that work for south Punjab operators with lean IT teams.",
      "From district-level admin workflows to clinic and school platforms, we keep architecture simple enough to maintain while still ready to grow with your organization.",
      "Partner with a software house in Dera Ghazi Khan for senior engineering, transparent proposals, and ongoing support from [[software house in Pakistan]].",
    ],
    factDetail:
      "Custom web and ops systems from a Dera Ghazi Khan software company for regional companies and institutions.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Dera Ghazi Khan. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Dera Ghazi Khan and south Punjab.",
  },
  Sheikhupura: {
    metaTitle: "Sheikhupura Software Company",
    metaDescription:
      "Next Software Development Company is a software house in Sheikhupura. Custom ERP and industrial software near Lahore.",
    aboutTitle: "A software house in Sheikhupura",
    paragraphs: [
      "Next Software Development Company is a software house in Sheikhupura. Manufacturers and commercial teams partner with our software company for ERP, inventory, and ops software across Lahore’s industrial belt.",
      "As a practical software house in Sheikhupura, we design workflows around production and trade realities: role-based access, reporting owners can trust, and systems staff can learn quickly on the floor.",
      "Proximity to Lahore markets means many Sheikhupura clients need integration-ready tools: we build with clean APIs and phased rollouts so plants stay running during go-live.",
      "Work with a software house in Sheikhupura that offers senior teams, clear timelines, and support after launch as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Industrial and commercial platforms from a Sheikhupura software house for manufacturers and growing SMEs.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Sheikhupura. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for manufacturers, traders, clinics, and growing businesses in Sheikhupura.",
  },
  Jhang: {
    metaTitle: "Software Development Company in Jhang",
    metaDescription:
      "Next Software Development Company is a software house in Jhang. Lean software for agribusiness and local services.",
    aboutTitle: "A software house in Jhang",
    paragraphs: [
      "Next Software Development Company is a software house in Jhang. Agribusiness teams and local services hire our software company for lean digital products sized for their operations.",
      "As a practical software house in Jhang, we prioritize clarity and usability so staff adopt the system quickly and operations stay simple through peak seasons.",
      "Farm-linked inventory, fee collection for schools, and small clinic workflows are typical Jhang builds: we avoid over-engineering and ship the features that matter first.",
      "Choose a software house in Jhang that delivers senior craft with practical scope and post-launch care from our [[software house in Pakistan]].",
    ],
    factDetail:
      "Lean agribusiness and local-service products from a Jhang software development company.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Jhang. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for agribusiness teams, clinics, schools, and local services in Jhang.",
  },
  Kasur: {
    metaTitle: "Software House in Kasur",
    metaDescription:
      "Next Software Development Company is a software house in Kasur. Custom ERP and ops software for trade and manufacturing.",
    aboutTitle: "A software house in Kasur",
    paragraphs: [
      "Next Software Development Company is a software house in Kasur. Trade and manufacturing teams partner with our software company for ERP and ops tools that replace manual tracking.",
      "As a hands-on software house in Kasur, we build practical systems for stock, sales, and reporting that owners can trust from day one.",
      "Whether you run a workshop, wholesale trade desk, or multi-site store, our software development company scopes software around Kasur’s pace of business, not a generic enterprise template.",
      "Work with a software house in Kasur for senior delivery, transparent pricing, and support after go-live as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Trade and manufacturing platforms from a Kasur software house for SMEs and industrial operators.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Kasur. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for traders, manufacturers, clinics, and growing businesses in Kasur.",
  },
  Larkana: {
    metaTitle: "Larkana Software Development",
    metaDescription:
      "Next Software Development Company is a software house in Larkana. Custom web apps, HMS, and ERP for Sindh organizations.",
    aboutTitle: "A software house in Larkana",
    paragraphs: [
      "Next Software Development Company is a software house in Larkana. Organizations and regional businesses use our software company for web applications and admin systems that improve service delivery.",
      "As a lean software house in Larkana, we keep delivery useful: software that solves real admin and ops problems without overbuilding or locking you into unused modules.",
      "Education offices, clinics, and local commerce platforms are common Larkana engagements: we document clearly so your team can run the system after launch.",
      "Partner with a software house in Larkana that stays involved after launch with clear support options from a [[software house in Pakistan]].",
    ],
    factDetail:
      "Web and admin systems from a Larkana software house for institutions and SMEs across Sindh.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Larkana. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Larkana.",
  },
  Mingora: {
    metaTitle: "Software House in Mingora",
    metaDescription:
      "Next Software Development Company is a software house in Mingora. Lean HMS, school platforms, and tourism software for Swat.",
    aboutTitle: "A software house in Mingora",
    paragraphs: [
      "Next Software Development Company is a software house in Mingora. Clinics, schools, and tourism businesses in Swat hire our software company for lean digital products and mobile-friendly tools sized for their teams.",
      "As a practical software house in Mingora, we prioritize clarity and usability so staff adopt the system quickly and operations stay simple through busy tourist seasons.",
      "Booking and guest ops for hospitality, school portals, and clinic scheduling are frequent Swat requests: we ship mobile-first where field teams work on phones first.",
      "Choose a software house in Mingora that delivers senior engineering, fixed-scope options, and long-term support as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Lean clinic, school, and tourism products from a Mingora software development company for Swat.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Mingora. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and tourism businesses in Mingora and across Swat.",
  },
  Nawabshah: {
    metaTitle: "Nawabshah Software Company",
    metaDescription:
      "Next Software Development Company is a software house in Nawabshah. Custom ops, HMS, and ERP for Benazirabad.",
    aboutTitle: "A software house in Nawabshah",
    paragraphs: [
      "Next Software Development Company is a software house in Nawabshah. Businesses and institutions in Benazirabad partner with our software company for operations and institutional platforms that improve day-to-day visibility.",
      "As a hands-on software house in Nawabshah, we build practical tools for stock, admin, and reporting that owners can trust without hiring a large IT department.",
      "Agriculture-linked commerce, campus admin, and clinic management are typical Benazirabad builds: we keep roadmaps phased so value shows up early.",
      "Work with a software house in Nawabshah that delivers senior engineering, transparent pricing, and support after go-live as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Ops and institutional platforms from a Nawabshah software house for Benazirabad businesses and organizations.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Nawabshah. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Nawabshah (Benazirabad).",
  },
  Mirpur: {
    metaTitle: "Software Development Company in Mirpur",
    metaDescription:
      "Next Software Development Company is a software house in Mirpur. Custom software for AJK teams and diaspora-linked firms.",
    aboutTitle: "A software house in Mirpur",
    paragraphs: [
      "Next Software Development Company is a software house in Mirpur. Local teams and diaspora-linked firms in AJK work with our software company for product builds, business platforms, and practical digital tools.",
      "As an experienced software house in Mirpur, our senior engineers deliver English-first communication, clear milestones, and systems built for growth across local and overseas stakeholders.",
      "Remittance-adjacent business tools, education platforms, and SME ops software are common Mirpur engagements: we design for timezone-friendly collaboration with UK and Gulf partners when needed.",
      "Partner with a software house and software company in Mirpur that stays accountable from discovery through launch and maintenance as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Product and business software from a Mirpur software house for AJK teams and diaspora-linked firms.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Mirpur. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Mirpur (AJK).",
  },
  Muzaffarabad: {
    metaTitle: "Software House in Muzaffarabad",
    metaDescription:
      "Next Software Development Company is a software house in Muzaffarabad. Custom digital systems for AJK institutions and businesses.",
    aboutTitle: "A software house in Muzaffarabad",
    paragraphs: [
      "Next Software Development Company is a software house in Muzaffarabad. Institutions and local businesses hire our software company for reliable digital systems that improve service delivery across AJK’s capital region.",
      "As a dependable software house in Muzaffarabad, we focus on stable delivery, clear documentation, and practical workflows teams can run confidently with limited IT staff.",
      "Government-adjacent admin tools, campus platforms, and clinic systems are frequent requests: we emphasize security basics, audit-friendly logs, and handover training for Muzaffarabad operators.",
      "Choose a software house in Muzaffarabad that delivers senior craft with practical scope and post-launch care from [[software house in Pakistan]].",
    ],
    factDetail:
      "Institutional and business platforms from a Muzaffarabad software development company for AJK organizations.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Muzaffarabad. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Muzaffarabad (AJK).",
  },
  Jhelum: {
    metaTitle: "Jhelum Software Development",
    metaDescription:
      "Next Software Development Company is a software house in Jhelum. Custom HMS, ERP, and digital products for regional businesses.",
    aboutTitle: "A software house in Jhelum",
    paragraphs: [
      "Next Software Development Company is a software house in Jhelum. Clinics, schools, and regional businesses partner with our software company for practical digital systems sized for local teams.",
      "As a hands-on software house in Jhelum, we replace spreadsheets and fragmented tools with clear workflows for appointments, fees, inventory, and reporting.",
      "Work with a software house in Jhelum that delivers senior engineering, transparent pricing, and support after go-live as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Practical clinic, school, and SME platforms from a Jhelum software house for the Gujranwala region.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Jhelum. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Jhelum.",
  },
  Chakwal: {
    metaTitle: "Software House in Chakwal",
    metaDescription:
      "Next Software Development Company is a software house in Chakwal. Lean software for SMEs, clinics, and local services.",
    aboutTitle: "A software house in Chakwal",
    paragraphs: [
      "Next Software Development Company is a software house in Chakwal. SMEs, clinics, and local services hire our software company for lean digital products that fit how Potohar teams actually work.",
      "As a practical software house in Chakwal, we prioritize clarity and usability so staff adopt systems quickly without a large IT department.",
      "Choose a software house in Chakwal that stays accountable from discovery through launch as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Lean SME and service platforms from a Chakwal software development company for the Potohar belt.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Chakwal. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Chakwal.",
  },
  Wazirabad: {
    metaTitle: "Wazirabad Software Company",
    metaDescription:
      "Next Software Development Company is a software house in Wazirabad. Custom ERP and trade software for manufacturers.",
    aboutTitle: "A software house in Wazirabad",
    paragraphs: [
      "Next Software Development Company is a software house in Wazirabad. Manufacturers and trading houses partner with our software company to digitize production, inventory, and sales workflows.",
      "As a hands-on software house in Wazirabad, we build systems that fit the shop floor and office without forcing a one-size-fits-all ERP.",
      "Work with a software house in Wazirabad for senior delivery, fixed scope when you need it, and ongoing support from a [[software house in Pakistan]].",
    ],
    factDetail:
      "Manufacturing and trade digitization from a Wazirabad software house for industrial operators.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Wazirabad. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for manufacturers, traders, and growing businesses in Wazirabad.",
  },
  Chiniot: {
    metaTitle: "Software Development Company in Chiniot",
    metaDescription:
      "Next Software Development Company is a software house in Chiniot. Custom ops and commerce software for furniture trade and SMEs.",
    aboutTitle: "A software house in Chiniot",
    paragraphs: [
      "Next Software Development Company is a software house in Chiniot. Furniture workshops and growing SMEs use our software company for inventory, orders, and ops tools that replace manual tracking.",
      "As a practical software house in Chiniot, we design workflows around local trade realities: role-based access, clear reporting, and systems staff can learn quickly.",
      "Partner with a software house in Chiniot that ships senior delivery and post-launch support as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Ops and commerce platforms from a Chiniot software house for furniture trade and local SMEs.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Chiniot. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for traders, workshops, clinics, and growing businesses in Chiniot.",
  },
  "Toba Tek Singh": {
    metaTitle: "Software House in Toba Tek Singh",
    metaDescription:
      "Next Software Development Company is a software house in Toba Tek Singh. Custom software for agribusiness and growing SMEs.",
    aboutTitle: "A software house in Toba Tek Singh",
    paragraphs: [
      "Next Software Development Company is a software house in Toba Tek Singh. Agribusiness teams and SMEs hire our software company for affordable custom software sized for central Punjab operations.",
      "As a lean software house in Toba Tek Singh, we keep delivery useful: stock, billing, and admin tools without overbuilding unused modules.",
      "Choose a software house in Toba Tek Singh that delivers senior craft with practical scope from our [[software house in Pakistan]].",
    ],
    factDetail:
      "Affordable agribusiness and SME platforms from a Toba Tek Singh software development company.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Toba Tek Singh. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for agribusiness teams, clinics, schools, and SMEs in Toba Tek Singh.",
  },
  Khanewal: {
    metaTitle: "Khanewal Software Development",
    metaDescription:
      "Next Software Development Company is a software house in Khanewal. Custom ops, HMS, and ERP for central Punjab.",
    aboutTitle: "A software house in Khanewal",
    paragraphs: [
      "Next Software Development Company is a software house in Khanewal. Regional businesses and institutions partner with our software company for operations and institutional platforms.",
      "As a hands-on software house in Khanewal, we build practical tools for stock, admin, and reporting that owners can trust without hiring a large IT team.",
      "Work with a software house in Khanewal for transparent pricing and support after go-live as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Regional ops and institutional platforms from a Khanewal software house for central Punjab.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Khanewal. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Khanewal.",
  },
  Vehari: {
    metaTitle: "Software House in Vehari",
    metaDescription:
      "Next Software Development Company is a software house in Vehari. Custom ERP and web tools for agribusiness and local trade.",
    aboutTitle: "A software house in Vehari",
    paragraphs: [
      "Next Software Development Company is a software house in Vehari. Agribusiness and local trade teams use our software company for ERP and web tools that improve day-to-day visibility.",
      "As a practical software house in Vehari, we prioritize phased roadmaps so value shows up early for cotton-belt operators and SMEs.",
      "Work with a software house in Vehari that stays involved after launch as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Agribusiness and trade platforms from a Vehari software house for central and south Punjab.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Vehari. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for agribusiness teams, traders, clinics, and growing businesses in Vehari.",
  },
  Muzaffargarh: {
    metaTitle: "Muzaffargarh Software Company",
    metaDescription:
      "Next Software Development Company is a software house in Muzaffargarh. Custom web and ops systems for south Punjab.",
    aboutTitle: "A software house in Muzaffargarh",
    paragraphs: [
      "Next Software Development Company is a software house in Muzaffargarh. South Punjab businesses hire our software company for custom web apps and ops systems that help teams scale.",
      "As a dependable software house in Muzaffargarh, we focus on clear requirements, usable interfaces, and systems that work for regional operators.",
      "Partner with a software house in Muzaffargarh for senior delivery and post-launch care from a [[software house in Pakistan]].",
    ],
    factDetail:
      "Custom web and ops systems from a Muzaffargarh software development company for south Punjab.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Muzaffargarh. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Muzaffargarh.",
  },
  Nowshera: {
    metaTitle: "Software Development Company in Nowshera",
    metaDescription:
      "Next Software Development Company is a software house in Nowshera. Custom web apps, HMS, and ERP for KPK organizations.",
    aboutTitle: "A software house in Nowshera",
    paragraphs: [
      "Next Software Development Company is a software house in Nowshera. Organizations and local businesses use our software company for reliable web apps and internal tools across KPK.",
      "As a lean software house in Nowshera, we keep delivery useful: software that solves real admin and ops problems without overbuilding.",
      "Choose a software house in Nowshera that delivers English-first communication and clear milestones as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Reliable web apps and internal tools from a Nowshera software house for KPK organizations.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Nowshera. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Nowshera.",
  },
  Kohat: {
    metaTitle: "Software House in Kohat",
    metaDescription:
      "Next Software Development Company is a software house in Kohat. Lean HMS, school platforms, and ops software for regional teams.",
    aboutTitle: "A software house in Kohat",
    paragraphs: [
      "Next Software Development Company is a software house in Kohat. Clinics, schools, and regional teams hire our software company for lean HMS, education platforms, and ops software.",
      "As a practical software house in Kohat, we prioritize clarity so staff adopt the system quickly with limited IT support.",
      "Work with a software house in Kohat that stays accountable after go-live as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Lean HMS, school, and ops platforms from a Kohat software development company for southern KPK.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Kohat. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Kohat.",
  },
  Swabi: {
    metaTitle: "Swabi Software Development",
    metaDescription:
      "Next Software Development Company is a software house in Swabi. Practical digital products for clinics, schools, and SMEs.",
    aboutTitle: "A software house in Swabi",
    paragraphs: [
      "Next Software Development Company is a software house in Swabi. Clinics, schools, and SMEs partner with our software company for practical digital products sized for local teams.",
      "As a hands-on software house in Swabi, we replace manual tracking with systems that fit day-to-day operations without unused enterprise modules.",
      "Work with a software house in Swabi for senior delivery and transparent scoping as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Practical clinic, school, and SME products from a Swabi software house across KPK.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Swabi. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Swabi.",
  },
  Charsadda: {
    metaTitle: "Software House in Charsadda",
    metaDescription:
      "Next Software Development Company is a software house in Charsadda. Affordable custom software for trade, education, and local services.",
    aboutTitle: "A software house in Charsadda",
    paragraphs: [
      "Next Software Development Company is a software house in Charsadda. Trade, education, and local services hire our software company for affordable custom software that improves visibility.",
      "As a lean software house in Charsadda, we ship phased roadmaps so owners see value early without locking into bloated platforms.",
      "Choose a software house in Charsadda that delivers senior craft with practical scope from our [[software house in Pakistan]].",
    ],
    factDetail:
      "Affordable trade, education, and service platforms from a Charsadda software development company.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Charsadda. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for traders, clinics, schools, and local services in Charsadda.",
  },
  "Dera Ismail Khan": {
    metaTitle: "Dera Ismail Khan Software Company",
    metaDescription:
      "Next Software Development Company is a software house in Dera Ismail Khan. Custom ops and institutional platforms for southern KPK.",
    aboutTitle: "A software house in Dera Ismail Khan",
    paragraphs: [
      "Next Software Development Company is a software house in Dera Ismail Khan. Regional businesses and institutions partner with our software company for ops and institutional platforms across southern KPK.",
      "As a dependable software house in Dera Ismail Khan, we focus on stable delivery, clear documentation, and workflows teams can run confidently.",
      "Work with a software house in Dera Ismail Khan for transparent pricing and long-term support as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Regional ops and institutional platforms from a Dera Ismail Khan software house for southern KPK.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Dera Ismail Khan. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Dera Ismail Khan.",
  },
  "Mirpur Khas": {
    metaTitle: "Software Development Company in Mirpur Khas",
    metaDescription:
      "Next Software Development Company is a software house in Mirpur Khas. Custom ops, inventory, and commerce systems for lower Sindh.",
    aboutTitle: "A software house in Mirpur Khas",
    paragraphs: [
      "Next Software Development Company is a software house in Mirpur Khas. Lower Sindh businesses use our software company for ops, inventory, and commerce systems that replace fragmented tools.",
      "As a practical software house in Mirpur Khas, we design around agriculture-linked trade and regional commerce realities.",
      "Partner with a software house in Mirpur Khas that stays involved after launch as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Ops, inventory, and commerce systems from a Mirpur Khas software house for lower Sindh.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Mirpur Khas. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for traders, clinics, schools, and growing businesses in Mirpur Khas.",
  },
  Khairpur: {
    metaTitle: "Software House in Khairpur",
    metaDescription:
      "Next Software Development Company is a software house in Khairpur. Custom web and admin systems for upper Sindh.",
    aboutTitle: "A software house in Khairpur",
    paragraphs: [
      "Next Software Development Company is a software house in Khairpur. Organizations and regional businesses hire our software company for web applications and admin systems that improve service delivery.",
      "As a lean software house in Khairpur, we keep delivery useful: software that solves real admin and ops problems without overbuilding.",
      "Choose a software house in Khairpur for senior delivery and clear support options as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Web and admin systems from a Khairpur software house for institutions and SMEs in upper Sindh.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Khairpur. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Khairpur.",
  },
  Jacobabad: {
    metaTitle: "Jacobabad Software Development",
    metaDescription:
      "Next Software Development Company is a software house in Jacobabad. Practical software for clinics, schools, and regional commerce.",
    aboutTitle: "A software house in Jacobabad",
    paragraphs: [
      "Next Software Development Company is a software house in Jacobabad. Clinics, schools, and regional commerce teams partner with our software company for practical digital systems.",
      "As a hands-on software house in Jacobabad, we prioritize usability so staff adopt tools quickly through peak seasons.",
      "Work with a software house in Jacobabad that delivers senior engineering and post-launch care from a [[software house in Pakistan]].",
    ],
    factDetail:
      "Practical clinic, school, and commerce platforms from a Jacobabad software development company.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Jacobabad. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Jacobabad.",
  },
  Dadu: {
    metaTitle: "Software House in Dadu",
    metaDescription:
      "Next Software Development Company is a software house in Dadu. Lean digital products for SMEs, clinics, and local institutions.",
    aboutTitle: "A software house in Dadu",
    paragraphs: [
      "Next Software Development Company is a software house in Dadu. SMEs, clinics, and local institutions hire our software company for lean digital products sized for their teams.",
      "As a practical software house in Dadu, we avoid over-engineering and ship the features that matter first.",
      "Work with a software house in Dadu for transparent scoping and ongoing support as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Lean SME, clinic, and institutional products from a Dadu software house across Sindh.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Dadu. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for SMEs, clinics, schools, and local institutions in Dadu.",
  },
  Thatta: {
    metaTitle: "Thatta Software Company",
    metaDescription:
      "Next Software Development Company is a software house in Thatta. Affordable custom software for coastal Sindh businesses.",
    aboutTitle: "A software house in Thatta",
    paragraphs: [
      "Next Software Development Company is a software house in Thatta. Coastal Sindh businesses partner with our software company for affordable custom software that improves day-to-day ops.",
      "As a lean software house in Thatta, we build practical tools for stock, admin, and reporting without a large IT overhead.",
      "Choose a software house in Thatta that stays accountable from discovery through maintenance as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Affordable custom software from a Thatta software development company for coastal Sindh businesses.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Thatta. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Thatta.",
  },
  Gwadar: {
    metaTitle: "Software Development Company in Gwadar",
    metaDescription:
      "Next Software Development Company is a software house in Gwadar. Custom port, logistics, and commerce platforms for the coastal hub.",
    aboutTitle: "A software house in Gwadar",
    paragraphs: [
      "Next Software Development Company is a software house in Gwadar. Port, logistics, and commerce operators hire our software company for platforms built for the coastal hub’s growth.",
      "As an experienced software house in Gwadar, we design for visibility: inventory, bookings, reporting, and role-based access suited to multi-stakeholder operations.",
      "Partner with a software house in Gwadar that delivers senior engineering and English-first collaboration as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Port, logistics, and commerce platforms from a Gwadar software house for Balochistan’s coastal hub.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Gwadar. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for logistics, commerce, clinics, and growing businesses in Gwadar.",
  },
  Turbat: {
    metaTitle: "Software House in Turbat",
    metaDescription:
      "Next Software Development Company is a software house in Turbat. Reliable HMS, ERP, and ops software for Makran businesses.",
    aboutTitle: "A software house in Turbat",
    paragraphs: [
      "Next Software Development Company is a software house in Turbat. Makran businesses and institutions use our software company for reliable HMS, ERP, and ops software.",
      "As a dependable software house in Turbat, we focus on stable delivery and practical workflows teams can run with limited IT staff.",
      "Work with a software house in Turbat for transparent pricing and support after go-live from a [[software house in Pakistan]].",
    ],
    factDetail:
      "Reliable HMS, ERP, and ops software from a Turbat software development company for Makran.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Turbat. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Turbat.",
  },
  Khuzdar: {
    metaTitle: "Khuzdar Software Development",
    metaDescription:
      "Next Software Development Company is a software house in Khuzdar. Practical digital systems for regional institutions and SMEs.",
    aboutTitle: "A software house in Khuzdar",
    paragraphs: [
      "Next Software Development Company is a software house in Khuzdar. Regional institutions and SMEs partner with our software company for practical digital systems that improve service delivery.",
      "As a lean software house in Khuzdar, we keep delivery useful without overbuilding or locking you into unused modules.",
      "Choose a software house in Khuzdar that delivers senior craft with practical scope as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Practical institutional and SME platforms from a Khuzdar software house across Balochistan.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Khuzdar. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Khuzdar.",
  },
  Kotli: {
    metaTitle: "Software House in Kotli",
    metaDescription:
      "Next Software Development Company is a software house in Kotli. Custom software for AJK teams and local firms.",
    aboutTitle: "A software house in Kotli",
    paragraphs: [
      "Next Software Development Company is a software house in Kotli. Local teams and firms in AJK work with our software company for product builds, business platforms, and practical digital tools.",
      "As an experienced software house in Kotli, our senior engineers deliver English-first communication, clear milestones, and systems built for growth.",
      "Partner with a software house and software company in Kotli that stays accountable from discovery through launch as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Product and business software from a Kotli software house for AJK teams and local firms.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Kotli. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Kotli (AJK).",
  },
  Rawalakot: {
    metaTitle: "Rawalakot Software Company",
    metaDescription:
      "Next Software Development Company is a software house in Rawalakot. Lean software for clinics, schools, and tourism in Poonch.",
    aboutTitle: "A software house in Rawalakot",
    paragraphs: [
      "Next Software Development Company is a software house in Rawalakot. Clinics, schools, and tourism businesses in Poonch hire our software company for lean digital products and mobile-friendly tools.",
      "As a practical software house in Rawalakot, we prioritize clarity and usability so staff adopt systems quickly through busy seasons.",
      "Choose a software house in Rawalakot that delivers senior engineering and long-term support from our [[software house in Pakistan]].",
    ],
    factDetail:
      "Lean clinic, school, and tourism products from a Rawalakot software development company for Poonch.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Rawalakot. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and tourism businesses in Rawalakot (AJK).",
  },
  Gilgit: {
    metaTitle: "Software Development Company in Gilgit",
    metaDescription:
      "Next Software Development Company is a software house in Gilgit. Reliable digital systems for GB institutions and tourism.",
    aboutTitle: "A software house in Gilgit",
    paragraphs: [
      "Next Software Development Company is a software house in Gilgit. Institutions and tourism businesses in Gilgit-Baltistan hire our software company for reliable digital systems that improve service delivery.",
      "As a dependable software house in Gilgit, we focus on stable delivery, clear documentation, and mobile-first tools suited to mountain-region operations.",
      "Work with a software house in Gilgit for transparent pricing and post-launch care as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Institutional and tourism platforms from a Gilgit software house for Gilgit-Baltistan.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Gilgit. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and tourism businesses in Gilgit.",
  },
  Skardu: {
    metaTitle: "Software House in Skardu",
    metaDescription:
      "Next Software Development Company is a software house in Skardu. Hospitality, tourism, and ops software for Baltistan.",
    aboutTitle: "A software house in Skardu",
    paragraphs: [
      "Next Software Development Company is a software house in Skardu. Hospitality and tourism operators in Baltistan partner with our software company for bookings, guest ops, and practical digital tools.",
      "As a practical software house in Skardu, we ship mobile-first where field teams work on phones first and keep systems simple through peak tourist seasons.",
      "Work with a software house in Skardu that delivers senior craft with practical scope as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Hospitality, tourism, and ops software from a Skardu software development company for Baltistan.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Skardu. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for hospitality, tourism, clinics, and growing businesses in Skardu.",
  },
  "Wah Cantt": {
    metaTitle: "Wah Cantt Software Development",
    metaDescription:
      "Next Software Development Company is a software house in Wah Cantt. Custom industrial and institutional software for the Islamabad metro belt.",
    aboutTitle: "A software house in Wah Cantt",
    paragraphs: [
      "Next Software Development Company is a software house in Wah Cantt. Industrial and institutional teams on the [[Islamabad]] metro belt hire our software company for custom software paired with capital-region delivery capacity.",
      "As a hands-on software house in Wah Cantt, we build ERP, ops, and admin systems that match how local factories and organizations actually work.",
      "Choose a software house in Wah Cantt that combines proximity to [[Islamabad]] and [[Rawalpindi]] with senior nationwide standards as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Industrial and institutional platforms from a Wah Cantt software house for the Islamabad metro belt.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Wah Cantt. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for industry, institutions, clinics, and growing businesses in Wah Cantt.",
  },
  Taxila: {
    metaTitle: "Software House in Taxila",
    metaDescription:
      "Next Software Development Company is a software house in Taxila. Practical software for industry, education, and local services.",
    aboutTitle: "A software house in Taxila",
    paragraphs: [
      "Next Software Development Company is a software house in Taxila. Industry, education, and local services partner with our software company for practical digital systems near the [[Islamabad]] capital corridor.",
      "As a lean software house in Taxila, we replace manual tracking with clear workflows for inventory, campus admin, and service ops.",
      "Work with a software house in Taxila for senior delivery and support after go-live from a [[software house in Pakistan]].",
    ],
    factDetail:
      "Industry, education, and service platforms from a Taxila software development company for the metro belt.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Taxila. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for industry, education, clinics, and local services in Taxila.",
  },
  Attock: {
    metaTitle: "Attock Software Company",
    metaDescription:
      "Next Software Development Company is a software house in Attock. Custom web and ops tools for northern Punjab businesses.",
    aboutTitle: "A software house in Attock",
    paragraphs: [
      "Next Software Development Company is a software house in Attock. Northern Punjab businesses hire our software company for custom web apps and ops tools with [[Islamabad]]-metro delivery proximity.",
      "As a practical software house in Attock, we design around local commerce and institutional realities without forcing bloated enterprise software.",
      "Partner with a software house in Attock that stays involved after launch as a [[software house in Pakistan]].",
    ],
    factDetail:
      "Custom web and ops tools from an Attock software house for northern Punjab businesses.",
    heroImageSrc: cityHeroImageSrc,
    heroLead:
      "Next Software Development Company is a software house in Attock. We build custom software, Hospital Management Systems (HMS), Enterprise Resource Planning (ERP) solutions, and digital products for clinics, schools, and growing businesses in Attock.",
  },
};

function projectsForCity(city: string): LocationPageContent["projects"] {
  return filterProjectsForPlace(city);
}

function buildCityPage(cityMeta: LocationCity): LocationPageContent {
  const copy =
    cityCopy[cityMeta.city] ??
    ({
      aboutTitle: `A software house in ${cityMeta.city} for local operators`,
      paragraphs: [
        `Next Software Development Company is a software house serving ${cityMeta.city}. We build ${cityMeta.blurb ?? "digital products for growing local businesses."}`,
        `We deliver HMS, ERP, web, and mobile systems with the same standards we apply across Pakistan.`,
        `Work with a software house in ${cityMeta.city} for transparent scoping, senior-only teams, and support after go-live.`,
      ],
      factDetail: `Dedicated delivery for businesses and institutions in ${cityMeta.city}.`,
      heroImageSrc: cityHeroImageSrc,
      heroLead: `A software house in ${cityMeta.city} building custom software, HMS, ERP, and digital products for clinics, schools, and growing local businesses.`,
      metaTitle: `Software House in ${cityMeta.city}`,
      metaDescription: `Software house in ${cityMeta.city} for custom HMS, ERP, web and mobile apps, and digital products for local businesses.`,
    } satisfies CityCopy);

  const sections = buildLocationSections(cityMeta.city);
  if (copy.whyChoose?.length) {
    sections.whyChoose = {
      ...sections.whyChoose,
      values: copy.whyChoose,
    };
  }

  return {
    slug: cityMeta.slug,
    country: "Pakistan",
    href: cityMeta.href,
    title: copy.metaTitle,
    description: copy.heroLead,
    descriptionSecondary: copy.descriptionSecondary ?? pakistanLocation.descriptionSecondary,
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
      overlineText: "Who we are",
      title: copy.aboutTitle,
      paragraphs: [...copy.paragraphs],
      values: sections.whyChoose.values,
      image: {
        ...pakistanLocation.about.image,
        alt: `Next Software Development Company, a software house in ${cityMeta.city}`,
      },
      teamLink: teamPath,
      teamCta: `Meet our ${cityMeta.city} software house team`,
    },
    caseWork: {
      overlineText: sections.projects.overlineText,
      title: sections.projects.title,
      description: sections.projects.description,
    },
    heroImage: {
      src: copy.heroImageSrc,
      alt: `Best software house and top rated software company in ${cityMeta.city}, Pakistan`,
      width: 1536,
      height: 1024,
    },
    cities: pakistanCities,
    projects: projectsForCity(cityMeta.city),
    facts: buildLocationFacts(cityMeta.city),
    industries: {
      title: sections.industries.title,
      subtitle: sections.industries.description,
      items: pakistanLocation.industries.items.map((item) => ({
        ...item,
        description: item.description.replace("across Pakistan", `in ${cityMeta.city}`),
      })),
    },
    faqIntro: "Common questions about our services, process, pricing, and support.",
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
          "Yes. Maintenance, feature iterations, hosting guidance, and SLA-based support so your product stays reliable as you grow.",
        tag: "Support",
        column: "right",
      },
      {
        question: "Do you only work in this city?",
        answer:
          "No. This page focuses on local delivery, but we support clients across Pakistan and collaborate with international teams.",
        tag: "Coverage",
        column: "left",
      },
      {
        question: "Who will work on my project?",
        answer:
          "Senior engineers, designers, and QA stay on the engagement. You get named ownership, not a junior-only handoff after the contract.",
        tag: "Team",
        column: "right",
      },
    ],
    cta: {
      title: "Have a software project in mind?",
      description: `Tell us what you're building, what problem you're trying to solve, and where you want to take it. We'll help you define the right technical approach.\n\nLooking for a software house in ${cityMeta.city} to build and support your product? Let's talk.`,
      buttonLabel: "Get a Free Quote",
      buttonHref: contactPath,
    },
    sections,
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
