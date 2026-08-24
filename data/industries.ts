export type IndustryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type IndustryBlock = {
  title: string;
  description: string;
};

export type IndustryStep = {
  step: string;
  title: string;
  description: string;
};

export type IndustryFaq = {
  question: string;
  answer: string;
};

export type IndustryPageContent = {
  slug: string;
  label: string;
  tagline: string;
  description: string;
  overview: string[];
  metaDescription: string;
  pageTitle: string;
  tags: string[];
  heroImage: IndustryImage;
  whoWeServe: string[];
  challenges: IndustryBlock[];
  capabilities: IndustryBlock[];
  useCases: IndustryBlock[];
  solutions: string[];
  integrations: string[];
  outcomes: IndustryBlock[];
  highlights: IndustryBlock[];
  approach: IndustryStep[];
  faqs: IndustryFaq[];
};

type IndustryDraft = Omit<
  IndustryPageContent,
  "whoWeServe" | "useCases" | "integrations" | "outcomes"
>;

function img(src: string, alt: string): IndustryImage {
  return { src, alt, width: 1200, height: 800 };
}

function approachFor(label: string): IndustryStep[] {
  const sector = label.toLowerCase();
  return [
    {
      step: "01",
      title: "Discover the workflow",
      description: `We map how your ${sector} teams actually work, including constraints, systems of record, and what success looks like before any build starts.`,
    },
    {
      step: "02",
      title: "Design the product",
      description:
        "Architecture, UX, and compliance needs are agreed up front so engineering is building the right system, not a guess.",
    },
    {
      step: "03",
      title: "Build in sprints",
      description:
        "Two-week sprints with working software, visible demos, and a backlog you can steer as priorities change.",
    },
    {
      step: "04",
      title: "Launch and support",
      description:
        "Go-live, training, and ongoing support so the product stays reliable as your operations grow.",
    },
  ];
}

const industryDrafts: IndustryDraft[] = [
  {
    slug: "manufacturing",
    label: "Manufacturing",
    tags: ["ERP", "IoT", "Operations"],
    tagline: "Production software that keeps the floor moving",
    description:
      "Automate production lines and streamline factory operations with intelligent control systems built around how your plant actually runs.",
    overview: [
      "Manufacturing software only helps when it matches the floor: machines, shifts, quality checks, and the people who keep orders moving. We build operations platforms, ERP modules, and IoT dashboards that reduce downtime instead of adding another screen nobody opens.",
      "From job tracking and inventory to maintenance and quality, we connect the data you already collect so supervisors see issues early and planners stop working from spreadsheets.",
    ],
    pageTitle: "Manufacturing Software Development",
    metaDescription:
      "Custom manufacturing software for production, inventory, quality, and IoT operations. Built by a software house that ships plant-ready systems.",
    heroImage: img("/industries/manufacturing.webp", "Manufacturing software and factory operations"),
    challenges: [
      {
        title: "Disconnected shop-floor data",
        description:
          "Machines, inventory, and quality live in different tools, so delays show up after the shift is already behind.",
      },
      {
        title: "Paper and spreadsheet planning",
        description:
          "Work orders and material lists drift from reality, which creates shortages, overtime, and missed ship dates.",
      },
      {
        title: "Maintenance after failure",
        description:
          "Unplanned downtime is expensive. Without sensor history and job context, teams fix symptoms instead of patterns.",
      },
    ],
    capabilities: [
      {
        title: "Production and MES workflows",
        description:
          "Job tracking, routing, and status visibility from release to finished goods, including exceptions and rework.",
      },
      {
        title: "Inventory and materials",
        description:
          "Stock, lots, and consumption tied to actual orders so purchasing and the floor share one picture.",
      },
      {
        title: "Quality and traceability",
        description:
          "Checks, holds, and genealogy so you can trace a defect without reconstructing history by hand.",
      },
      {
        title: "IoT and machine signals",
        description:
          "Sensor and PLC data into dashboards operators can use, not a science project that never leaves the lab.",
      },
    ],
    solutions: [
      "Manufacturing ERP and operations hubs",
      "Shop-floor job tracking and OEE dashboards",
      "Preventive maintenance and work-order apps",
      "Quality management and lot traceability",
      "Inventory, BOM, and procurement workflows",
      "IoT monitoring for lines and utilities",
    ],
    highlights: [
      {
        title: "Built for the plant, not a demo",
        description:
          "We design around shifts, noisy environments, and operators who need speed more than decoration.",
      },
      {
        title: "Integrations that stick",
        description:
          "ERP, machines, and warehouses stay in sync with clear ownership of what is system of record.",
      },
      {
        title: "Visible delivery",
        description:
          "You see working modules every sprint, so process owners can correct the workflow before it is locked in.",
      },
    ],
    approach: approachFor("Manufacturing"),
    faqs: [
      {
        question: "Can you work with our existing ERP?",
        answer:
          "Yes. We often extend or sit beside SAP, Oracle, Microsoft, or custom ERPs rather than forcing a rip-and-replace.",
      },
      {
        question: "Do you support factory IoT and machines?",
        answer:
          "We connect sensors, PLCs, and gateways when the data has a clear operational use, such as downtime, energy, or quality alerts.",
      },
      {
        question: "How long does a manufacturing platform take?",
        answer:
          "A focused production or inventory module can ship in a few months. A broader MES or ERP program is phased so the floor gets value before the last module is done.",
      },
    ],
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    tags: ["HMS", "Telehealth", "Compliance"],
    tagline: "Clinical software care teams can trust",
    description:
      "Build intelligent diagnostic tools and automated patient management systems to improve care accuracy and streamline clinical workflows.",
    overview: [
      "Healthcare software has to respect how clinicians work: interruptions, handoffs, privacy, and the cost of a wrong click. We build hospital systems, patient portals, and telehealth products that reduce admin load instead of adding it.",
      "As a software house with healthcare delivery experience, we treat access control, audit trails, and reliable uptime as part of the product, not a late checklist.",
    ],
    pageTitle: "Healthcare Software Development",
    metaDescription:
      "Custom healthcare software for hospitals, clinics, telehealth, and patient portals. Privacy-aware delivery from a trusted software house.",
    heroImage: img("/industries/healthcare.webp", "Healthcare software for clinics and hospitals"),
    challenges: [
      {
        title: "Admin work crowding out care",
        description:
          "Staff bounce between charts, billing, and messaging tools, which slows rooms and burns out teams.",
      },
      {
        title: "Fragmented patient history",
        description:
          "Labs, imaging, and visit notes do not travel with the patient, so decisions are made with partial context.",
      },
      {
        title: "Privacy without slowing clinics",
        description:
          "Access rules and audit needs are real, but they cannot make every task take three extra screens.",
      },
    ],
    capabilities: [
      {
        title: "Hospital and clinic operations",
        description:
          "Scheduling, encounters, orders, and billing flows shaped around how your departments actually run.",
      },
      {
        title: "Patient engagement",
        description:
          "Portals, reminders, and follow-up tools that patients will use and staff can manage.",
      },
      {
        title: "Telehealth and remote care",
        description:
          "Video, intake, and documentation that connect to the same record as in-person visits.",
      },
      {
        title: "Interoperability",
        description:
          "HL7, FHIR, and lab or imaging interfaces when they serve a real clinical or operational need.",
      },
    ],
    solutions: [
      "Hospital and clinic management systems",
      "Electronic records and encounter workflows",
      "Telemedicine and remote monitoring",
      "Patient portals and appointment apps",
      "Pharmacy and inventory for care sites",
      "Analytics for operations and quality",
    ],
    highlights: [
      {
        title: "Workflow before features",
        description:
          "We sit with front desk, nursing, and billing so the product matches the day, not a generic HIS brochure.",
      },
      {
        title: "Security designed in",
        description:
          "Roles, least privilege, and audit logs are part of architecture, not a plugin added before go-live.",
      },
      {
        title: "Support after launch",
        description:
          "Clinics cannot pause when a release goes wrong. We plan training, rollback, and post-launch care.",
      },
    ],
    approach: approachFor("Healthcare"),
    faqs: [
      {
        question: "Do you build HIPAA-aware systems?",
        answer:
          "We design access, logging, encryption, and hosting patterns around your compliance requirements and legal review, including HIPAA-aligned controls when that is in scope.",
      },
      {
        question: "Can you integrate with our current EMR?",
        answer:
          "Yes, when APIs or interface engines exist. We map what must stay in the EMR versus what belongs in a purpose-built workflow app.",
      },
      {
        question: "Is telehealth included?",
        answer:
          "We can add video, scheduling, and documentation into the same product so remote visits are not a disconnected island.",
      },
    ],
  },
  {
    slug: "retail",
    label: "Retail",
    tags: ["POS", "E-commerce", "Inventory"],
    tagline: "Store and commerce systems that convert",
    description:
      "Modernize storefronts and online shops with smart inventory, checkout, and loyalty experiences.",
    overview: [
      "Retail software has to keep catalog, stock, and checkout honest across stores and the web. We build POS, ecommerce, and inventory platforms that reduce stockouts and speed the queue instead of adding another dashboard.",
      "Whether you run a single brand or many locations, we design for promotions, returns, and the messy reality of omnichannel orders.",
    ],
    pageTitle: "Retail Software Development",
    metaDescription:
      "Custom retail software for POS, ecommerce, inventory, and loyalty. Built by a software house that ships store-ready systems.",
    heroImage: img("/industries/retail.webp", "Retail POS and ecommerce software"),
    challenges: [
      {
        title: "Stock that never matches the shelf",
        description:
          "Online, warehouse, and store counts disagree, so customers wait or staff oversell.",
      },
      {
        title: "Checkout friction",
        description:
          "Slow POS, weak promotions, or failed payments turn a ready buyer into an abandoned cart.",
      },
      {
        title: "Loyalty that nobody uses",
        description:
          "Points and offers live in a separate system, so associates cannot apply them when it matters.",
      },
    ],
    capabilities: [
      {
        title: "Point of sale",
        description:
          "Fast checkout, returns, and staff roles that work on the floor, including offline-tolerant patterns when needed.",
      },
      {
        title: "Ecommerce and catalog",
        description:
          "Product data, search, and checkout aligned with how you merchandise, not a generic theme.",
      },
      {
        title: "Inventory across channels",
        description:
          "One picture of stock for stores, warehouse, and web, with receiving and transfers you can audit.",
      },
      {
        title: "Loyalty and CRM",
        description:
          "Offers and history available at till and online so the program is part of selling, not a side app.",
      },
    ],
    solutions: [
      "Retail POS and store operations",
      "Ecommerce storefronts and marketplaces",
      "Inventory, transfers, and replenishment",
      "Loyalty, gift cards, and promotions",
      "Order management for click-and-collect",
      "Retail analytics and loss-prevention views",
    ],
    highlights: [
      {
        title: "Speed at the till",
        description:
          "We optimize the path a cashier actually takes, including returns and split tenders, not only the happy path.",
      },
      {
        title: "Catalog discipline",
        description:
          "Variants, prices, and availability stay consistent so marketing does not promise what operations cannot fulfill.",
      },
      {
        title: "Payments you can trust",
        description:
          "Gateways, receipts, and reconciliation are designed with finance, not bolted on after launch.",
      },
    ],
    approach: approachFor("Retail"),
    faqs: [
      {
        question: "Do you build both store POS and online shops?",
        answer:
          "Yes. We often connect them so inventory, customers, and orders are not two separate businesses.",
      },
      {
        question: "Can you work with Shopify or a custom stack?",
        answer:
          "We implement Shopify, headless storefronts, or fully custom commerce when the catalog and checkout rules need it.",
      },
      {
        question: "How do you handle multiple locations?",
        answer:
          "Location-level stock, permissions, and reporting are part of the data model from the start, not a later patch.",
      },
    ],
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    tags: ["CRM", "Listings", "Agents"],
    tagline: "Property platforms agents and owners will use",
    description:
      "Manage listings, contracts, and tenant relationships with unified property platforms.",
    overview: [
      "Real estate teams lose deals when listings, leads, and documents live in chats and shared drives. We build CRM, listing, and property management software that keeps the pipeline and the portfolio in one place.",
      "From agency desks to landlords and developers, we focus on the tasks people repeat every day: matching buyers, tracking viewings, and keeping contracts current.",
    ],
    pageTitle: "Real Estate Software Development",
    metaDescription:
      "Custom real estate software for listings, agent CRM, and property management. Built by a software development company that ships usable platforms.",
    heroImage: img("/industries/realestate.webp", "Real estate listings and property management software"),
    challenges: [
      {
        title: "Leads that go cold",
        description:
          "Inquiries arrive from portals, WhatsApp, and walk-ins with no owner, so follow-up is luck.",
      },
      {
        title: "Listings out of date",
        description:
          "Photos, prices, and availability drift, which wastes viewings and damages trust.",
      },
      {
        title: "Tenancy admin by inbox",
        description:
          "Leases, maintenance, and collections are tracked in email, so nothing is auditable.",
      },
    ],
    capabilities: [
      {
        title: "Listing and portal sites",
        description:
          "Search, maps, and inquiry flows that match how buyers actually shortlist properties.",
      },
      {
        title: "Agent CRM",
        description:
          "Lead capture, viewing schedules, and commission-friendly pipelines with clear ownership.",
      },
      {
        title: "Property and tenant operations",
        description:
          "Units, leases, maintenance tickets, and collections for landlords and facility teams.",
      },
      {
        title: "Documents and e-sign",
        description:
          "Offers, contracts, and KYC packs stored with the deal instead of a personal laptop.",
      },
    ],
    solutions: [
      "Property listing websites and apps",
      "Agency CRM and lead routing",
      "Viewing and offer management",
      "Property and tenant management",
      "Broker and developer portals",
      "Reporting for inventory and conversion",
    ],
    highlights: [
      {
        title: "Designed for agents",
        description:
          "Mobile-first capture and fast search so the CRM is used between viewings, not only at the desk.",
      },
      {
        title: "One inventory",
        description:
          "Listings, status, and media stay consistent across the public site and internal tools.",
      },
      {
        title: "Clear handoffs",
        description:
          "From inquiry to contract, we make ownership and next action obvious so deals do not stall.",
      },
    ],
    approach: approachFor("Real Estate"),
    faqs: [
      {
        question: "Can you connect portal feeds and our website?",
        answer:
          "Yes. We sync listings, media, and inquiries so agents are not updating three places by hand.",
      },
      {
        question: "Do you build tenant or owner portals?",
        answer:
          "We add portals for rent, maintenance, and statements when they reduce call volume and keep a proper audit trail.",
      },
      {
        question: "Is this only for agencies?",
        answer:
          "No. We also build for developers, landlords, and property managers with different unit and lease models.",
      },
    ],
  },
  {
    slug: "education",
    label: "Education",
    tags: ["LMS", "EdTech", "Portals"],
    tagline: "Learning systems that schools can run every day",
    description:
      "Deliver adaptive learning experiences and digital classrooms that scale with every student.",
    overview: [
      "Education software fails when it ignores how schools actually operate: timetables, parents, fees, and teachers with limited time. We build LMS, school ERP, and student apps that reduce admin and make progress visible.",
      "From admissions to attendance and assessments, we keep roles clear so students, faculty, and back office are not fighting the same form.",
    ],
    pageTitle: "Education Software Development",
    metaDescription:
      "Custom education software for LMS, school ERP, student portals, and digital classrooms. Built by a software house for schools and EdTech teams.",
    heroImage: img("/industries/education.webp", "Education LMS and school management software"),
    challenges: [
      {
        title: "Admin in too many tools",
        description:
          "Attendance, fees, and grades live apart, so leadership cannot see a student clearly.",
      },
      {
        title: "Content that does not travel",
        description:
          "Lessons and assessments are hard to reuse, version, or deliver on phones students actually have.",
      },
      {
        title: "Parents left guessing",
        description:
          "Without a reliable portal, every question becomes a phone call to the front office.",
      },
    ],
    capabilities: [
      {
        title: "Learning platforms",
        description:
          "Courses, assignments, and progress tracking that work on the devices your students use.",
      },
      {
        title: "School operations",
        description:
          "Admissions, timetables, attendance, and fees in one operational backbone.",
      },
      {
        title: "Portals for every role",
        description:
          "Student, parent, and teacher views with only the actions each person needs.",
      },
      {
        title: "Assessments and reporting",
        description:
          "Quizzes, gradebooks, and leadership dashboards that match your academic calendar.",
      },
    ],
    solutions: [
      "Learning management systems",
      "School and campus ERP",
      "Student information systems",
      "Online classrooms and content libraries",
      "Fee, admissions, and attendance modules",
      "Parent and teacher mobile apps",
    ],
    highlights: [
      {
        title: "Academic calendar first",
        description:
          "Terms, exams, and holidays are in the data model so the product does not fight the school year.",
      },
      {
        title: "Low-friction for teachers",
        description:
          "We minimize clicks for attendance and marking because unused software helps nobody.",
      },
      {
        title: "Safe by default",
        description:
          "Student data, age-appropriate access, and clear admin controls are part of delivery.",
      },
    ],
    approach: approachFor("Education"),
    faqs: [
      {
        question: "Do you build for schools or EdTech products?",
        answer:
          "Both. We deliver campus systems for institutions and multi-tenant products for education startups.",
      },
      {
        question: "Can parents and students use it on mobile?",
        answer:
          "Yes. We typically ship responsive web plus native or PWA apps when usage is mostly on phones.",
      },
      {
        question: "How do you handle fees and admissions?",
        answer:
          "We implement structured workflows, receipts, and role-based access so finance and academics stay aligned.",
      },
    ],
  },
  {
    slug: "finance",
    label: "Finance",
    tags: ["FinTech", "Analytics", "Security"],
    tagline: "Financial software built for accuracy and control",
    description:
      "Secure trading platforms and analytics dashboards built for speed, accuracy, and compliance.",
    overview: [
      "Finance products live or die on correctness, latency, and auditability. We build trading, portfolio, and analytics platforms with clear controls so operations and risk teams can trust what they see.",
      "As a software development company used to regulated delivery, we treat permissions, logging, and reconciliation as core product work.",
    ],
    pageTitle: "Finance Software Development",
    metaDescription:
      "Custom finance and fintech software for trading, analytics, and operations. Secure delivery from a leading software house.",
    heroImage: img("/industries/finance.webp", "Finance and fintech analytics software"),
    challenges: [
      {
        title: "Numbers that do not reconcile",
        description:
          "Positions, cash, and reports disagree, which burns trust with clients and internal risk.",
      },
      {
        title: "Slow, opaque workflows",
        description:
          "Onboarding, approvals, and exceptions hide in email, so cycles stretch and errors multiply.",
      },
      {
        title: "Security as an afterthought",
        description:
          "Sensitive data and privileged actions need stronger design than a login screen.",
      },
    ],
    capabilities: [
      {
        title: "Trading and operations",
        description:
          "Order capture, status, and ops tools with the audit trail your middle office needs.",
      },
      {
        title: "Portfolio and analytics",
        description:
          "Holdings, P&L, and risk views tied to source data you can explain.",
      },
      {
        title: "Client and advisor portals",
        description:
          "Secure self-serve for statements, documents, and service requests.",
      },
      {
        title: "Integrations",
        description:
          "Market data, custody, payments, and core systems connected with retries and monitoring.",
      },
    ],
    solutions: [
      "Trading and order-management tools",
      "Portfolio and wealth dashboards",
      "KYC and onboarding workflows",
      "Payments and ledger services",
      "Risk and compliance reporting",
      "Client portals for statements and documents",
    ],
    highlights: [
      {
        title: "Accuracy over theatre",
        description:
          "We would rather ship a smaller, reconcilable surface than a flashy chart nobody can defend.",
      },
      {
        title: "Controls in the workflow",
        description:
          "Maker-checker, entitlements, and immutable logs are designed with your risk team.",
      },
      {
        title: "Observed in production",
        description:
          "Latency, errors, and data freshness are monitored so issues show up before clients do.",
      },
    ],
    approach: approachFor("Finance"),
    faqs: [
      {
        question: "Do you work with regulated financial firms?",
        answer:
          "Yes. We plan access, hosting, and audit needs with your compliance owners rather than treating them as a later surprise.",
      },
      {
        question: "Can you connect to our core or custody systems?",
        answer:
          "We integrate through APIs, files, or message buses depending on what the institution already runs.",
      },
      {
        question: "Is this only for trading desks?",
        answer:
          "No. We also build lending ops, wealth portals, and internal finance tools where accuracy and control matter.",
      },
    ],
  },
  {
    slug: "logistics",
    label: "Logistics",
    tags: ["Tracking", "Fleet", "Warehousing"],
    tagline: "Shipment and fleet software with live visibility",
    description:
      "Track shipments end-to-end and optimize fleets with real-time routing intelligence.",
    overview: [
      "Logistics software has to survive messy reality: delayed trucks, split consignments, and customers who want a status now. We build tracking, warehouse, and fleet systems that give operations a live picture instead of a trail of phone calls.",
      "From first mile to last, we connect orders, vehicles, and warehouses so exceptions are handled as a process, not a crisis.",
    ],
    pageTitle: "Logistics Software Development",
    metaDescription:
      "Custom logistics software for shipment tracking, fleet, and warehouse operations. Built by a software house for transport and 3PL teams.",
    heroImage: img("/industries/logistics.webp", "Logistics tracking and fleet management software"),
    challenges: [
      {
        title: "Status only by phone",
        description:
          "Customers and ops cannot see where a shipment is, so every delay becomes a support ticket.",
      },
      {
        title: "Routes that ignore the day",
        description:
          "Plans made in the morning collapse after the first exception, with no tool to replan.",
      },
      {
        title: "Warehouse and transport split",
        description:
          "Inventory says one thing, the dock says another, and billing waits on both.",
      },
    ],
    capabilities: [
      {
        title: "Shipment tracking",
        description:
          "Milestones, scans, and customer-facing status with a history ops can defend.",
      },
      {
        title: "Fleet and routing",
        description:
          "Vehicle, driver, and trip tools that support replanning when the day changes.",
      },
      {
        title: "Warehouse operations",
        description:
          "Receiving, putaway, picking, and dispatch tied to the same orders as transport.",
      },
      {
        title: "Customer and partner portals",
        description:
          "Self-serve tracking, documents, and appointment booking that cut inbound calls.",
      },
    ],
    solutions: [
      "End-to-end shipment tracking",
      "Fleet and driver apps",
      "Warehouse management",
      "Route planning and dispatch",
      "3PL customer portals",
      "Proof of delivery and billing support",
    ],
    highlights: [
      {
        title: "Exception-first design",
        description:
          "The product assumes delays and splits will happen, and gives ops a way to act.",
      },
      {
        title: "Mobile for the road",
        description:
          "Drivers and warehouse staff get fast, offline-tolerant flows, not a desktop form on a phone.",
      },
      {
        title: "Integrations that move freight",
        description:
          "Carriers, GPS, and ERP hooks are built with retries so a dropped message is visible.",
      },
    ],
    approach: approachFor("Logistics"),
    faqs: [
      {
        question: "Can customers track their own shipments?",
        answer:
          "Yes. We typically add a branded tracking page or portal with the milestones you want to expose.",
      },
      {
        question: "Do you support GPS and handheld scanners?",
        answer:
          "We integrate device feeds and barcode or RFID scans when they improve the operational picture.",
      },
      {
        question: "Is this suitable for 3PL businesses?",
        answer:
          "Yes. Multi-client inventory, billing rules, and portals are a common part of our logistics work.",
      },
    ],
  },
  {
    slug: "media",
    label: "Media",
    tags: ["Streaming", "CMS", "Workflows"],
    tagline: "Content platforms built for production teams",
    description:
      "Power broadcasting, streaming, and content workflows with high-performance production tools.",
    overview: [
      "Media companies need software that respects deadlines, rights, and the way editors actually work. We build CMS, streaming, and production workflow tools that move assets from ingest to publish without a tangle of shared folders.",
      "Whether you run newsroom, OTT, or brand content, we focus on metadata, approvals, and delivery that can keep up with the schedule.",
    ],
    pageTitle: "Media Software Development",
    metaDescription:
      "Custom media software for CMS, streaming, and production workflows. Built by a software development company for publishers and broadcasters.",
    heroImage: img("/industries/media.webp", "Media streaming and content production software"),
    challenges: [
      {
        title: "Assets lost in folders",
        description:
          "Versions, rights, and who approved what live in chat, so publishing is slower than it should be.",
      },
      {
        title: "Rights and regions",
        description:
          "What can air where, and for how long, is not encoded in the system that actually publishes.",
      },
      {
        title: "Fragile streaming ops",
        description:
          "Playback issues and encoding queues are invisible until viewers complain.",
      },
    ],
    capabilities: [
      {
        title: "Content systems",
        description:
          "Editorial CMS, media libraries, and publishing pipelines with roles that match your desk.",
      },
      {
        title: "Streaming and delivery",
        description:
          "Player, packaging, and catalog experiences designed with your CDN and encoding stack.",
      },
      {
        title: "Production workflows",
        description:
          "Ingest, review, and approval states so work does not stall in someone's inbox.",
      },
      {
        title: "Monetization hooks",
        description:
          "Subscriptions, ads, or licensing flows connected to the same identity and catalog.",
      },
    ],
    solutions: [
      "Publishing and newsroom CMS",
      "OTT and video platforms",
      "Digital asset management",
      "Rights and scheduling tools",
      "Live and on-demand workflows",
      "Audience and catalog analytics",
    ],
    highlights: [
      {
        title: "Metadata that pays off",
        description:
          "Search, recommendations, and rights all depend on structured data we design early.",
      },
      {
        title: "Deadlines in the product",
        description:
          "We model embargoes, slots, and last-minute changes instead of pretending the day is linear.",
      },
      {
        title: "Ops visibility",
        description:
          "Encode jobs, publish status, and player errors are observable, not tribal knowledge.",
      },
    ],
    approach: approachFor("Media"),
    faqs: [
      {
        question: "Do you build OTT and video products?",
        answer:
          "Yes. We work on catalogs, players, subscriptions, and the workflow that gets titles live.",
      },
      {
        question: "Can you integrate our existing DAM or CMS?",
        answer:
          "We connect or extend what you already use when it is healthier than a full replacement.",
      },
      {
        question: "How do you handle large media files?",
        answer:
          "Uploads, transcoding, and storage are designed with your cloud and CDN, including progress and failure handling.",
      },
    ],
  },
  {
    slug: "banking",
    label: "Banking",
    tags: ["Core banking", "KYC", "Fraud"],
    tagline: "Digital banking that operations can run",
    description:
      "Modern core banking, digital onboarding, and fraud protection for next-generation institutions.",
    overview: [
      "Banking software has to be correct under scrutiny: onboarding, ledgers, and customer channels cannot drift. We build digital banking, KYC, and operations tools with the controls your risk and audit teams expect.",
      "We work as a software house that can sit with product, ops, and security so the release is usable in branches and on mobile, not only in a slide deck.",
    ],
    pageTitle: "Banking Software Development",
    metaDescription:
      "Custom banking software for digital onboarding, core workflows, and fraud controls. Secure delivery from a trusted software house.",
    heroImage: img("/industries/banking.webp", "Digital banking and onboarding software"),
    challenges: [
      {
        title: "Onboarding that leaks customers",
        description:
          "KYC steps are slow or unclear, so good applicants drop and ops drown in incomplete files.",
      },
      {
        title: "Channels that do not match the core",
        description:
          "Mobile shows one balance, the branch another, and support cannot explain the difference.",
      },
      {
        title: "Fraud and ops in separate worlds",
        description:
          "Alerts exist, but there is no clean case workflow, so response is delayed and inconsistent.",
      },
    ],
    capabilities: [
      {
        title: "Digital onboarding",
        description:
          "KYC, document capture, and decisioning with a case file ops can complete without email threads.",
      },
      {
        title: "Customer channels",
        description:
          "Mobile and web banking flows aligned with core products, limits, and notifications.",
      },
      {
        title: "Operations and cases",
        description:
          "Queues, SLAs, and maker-checker for the work that still needs humans.",
      },
      {
        title: "Fraud and monitoring hooks",
        description:
          "Signals, cases, and audit trails designed with your fraud and security owners.",
      },
    ],
    solutions: [
      "Digital account opening and KYC",
      "Retail and business banking apps",
      "Internal ops and case management",
      "Payments and transfer workflows",
      "Fraud case and alert handling",
      "Customer notification and limit tools",
    ],
    highlights: [
      {
        title: "Audit-ready by design",
        description:
          "Who did what, when, and why is stored with the case, not reconstructed later.",
      },
      {
        title: "Core-aware delivery",
        description:
          "We plan around your core, middleware, and batch windows instead of pretending they do not exist.",
      },
      {
        title: "Security as a product requirement",
        description:
          "Device, session, and privilege design is part of the backlog, not a penetration test surprise.",
      },
    ],
    approach: approachFor("Banking"),
    faqs: [
      {
        question: "Do you replace the core bank system?",
        answer:
          "Usually not. We build channels, onboarding, and ops around the core you already run, unless a greenfield product is the brief.",
      },
      {
        question: "Can you meet our security review?",
        answer:
          "We work with your information security team on architecture, access, and evidence. Scope is agreed before build.",
      },
      {
        question: "Is this only for retail banks?",
        answer:
          "We also support digital banks, lending ops, and credit unions with similar control needs.",
      },
    ],
  },
  {
    slug: "agriculture",
    label: "Agriculture",
    tags: ["IoT", "Sensors", "Analytics"],
    tagline: "Farm and agribusiness software grounded in field data",
    description:
      "Precision farming software that turns sensor data into higher yields and lower waste.",
    overview: [
      "Agriculture software has to work with seasons, connectivity, and people who are not sitting at a desk. We build farm management, sensor, and supply-chain tools that turn field data into decisions instead of unused charts.",
      "From cooperatives to agribusiness, we connect plots, inventory, and logistics so agronomy and operations share the same numbers.",
    ],
    pageTitle: "Agriculture Software Development",
    metaDescription:
      "Custom agriculture software for farm management, IoT sensors, and agribusiness operations. Built by a practical software house.",
    heroImage: img("/industries/agriculture.webp", "Agriculture and precision farming software"),
    challenges: [
      {
        title: "Field data that never becomes action",
        description:
          "Sensors and scouting notes exist, but nobody has a simple next step for irrigation or input.",
      },
      {
        title: "Traceability gaps",
        description:
          "Buyers want lot history; the farm still tracks harvest in notebooks.",
      },
      {
        title: "Offline reality",
        description:
          "Connectivity drops in the field, so a cloud-only app fails when it is needed most.",
      },
    ],
    capabilities: [
      {
        title: "Farm and plot management",
        description:
          "Seasons, activities, inputs, and yields against the land units you actually manage.",
      },
      {
        title: "Sensor and IoT",
        description:
          "Soil, weather, and equipment signals with alerts that agronomists will not ignore.",
      },
      {
        title: "Supply and traceability",
        description:
          "Lots, storage, and offtake records that stand up to a buyer audit.",
      },
      {
        title: "Advisory and reporting",
        description:
          "Simple recommendations and seasonal reports for managers and cooperatives.",
      },
    ],
    solutions: [
      "Farm management systems",
      "IoT dashboards for soil and climate",
      "Harvest and inventory tracking",
      "Cooperative and grower portals",
      "Machinery and maintenance logs",
      "Traceability for buyers and exporters",
    ],
    highlights: [
      {
        title: "Field-first UX",
        description:
          "Large targets, offline capture, and language that matches how farm teams talk.",
      },
      {
        title: "Data with a job",
        description:
          "We only instrument what changes a decision, not a wall of unused telemetry.",
      },
      {
        title: "Seasonal delivery",
        description:
          "We plan releases around planting and harvest so go-live is not in the busiest week.",
      },
    ],
    approach: approachFor("Agriculture"),
    faqs: [
      {
        question: "Can the app work with poor connectivity?",
        answer:
          "Yes. We often design offline capture with later sync so field staff are not blocked.",
      },
      {
        question: "Do you integrate weather and IoT devices?",
        answer:
          "We connect the sensors and feeds that have a clear agronomic or operational use.",
      },
      {
        question: "Is this only for large farms?",
        answer:
          "We also build for cooperatives, processors, and input companies that serve many growers.",
      },
    ],
  },
  {
    slug: "hospitality",
    label: "Hospitality",
    tags: ["Bookings", "Guest apps", "Ops"],
    tagline: "Hotel and guest systems that stay calm at peak",
    description:
      "Reservation, guest experience, and operations platforms for premium hotel brands.",
    overview: [
      "Hospitality software is judged at check-in, not in a demo. We build reservation, PMS-adjacent, and guest apps that keep front desk, housekeeping, and F&B aligned when the house is full.",
      "From independent hotels to groups, we focus on the guest journey and the staff tools that make it possible.",
    ],
    pageTitle: "Hospitality Software Development",
    metaDescription:
      "Custom hospitality software for reservations, guest experience, and hotel operations. Built by a software house for hotels and venues.",
    heroImage: img("/industries/hospitality.webp", "Hospitality reservation and hotel operations software"),
    challenges: [
      {
        title: "Front desk vs housekeeping",
        description:
          "Room status, requests, and arrivals live in different tools, so guests wait and staff argue.",
      },
      {
        title: "Bookings that do not match ops",
        description:
          "OTAs, direct, and walk-ins collide without a clean inventory and rate picture.",
      },
      {
        title: "Guest requests by WhatsApp",
        description:
          "Nothing is tracked, so VIP notes and complaints disappear at shift change.",
      },
    ],
    capabilities: [
      {
        title: "Reservations and inventory",
        description:
          "Rooms, rates, and channels with the rules your revenue team actually uses.",
      },
      {
        title: "In-house operations",
        description:
          "Housekeeping, maintenance, and front-office queues that update in real time.",
      },
      {
        title: "Guest experience",
        description:
          "Pre-arrival, in-stay requests, and feedback loops staff can close.",
      },
      {
        title: "F&B and outlets",
        description:
          "Orders, menus, and charges that post back to the stay when that is how you run.",
      },
    ],
    solutions: [
      "Booking engines and reservation tools",
      "Hotel operations and room status",
      "Guest mobile and concierge apps",
      "Housekeeping and maintenance",
      "POS for F&B and outlets",
      "Group and event management",
    ],
    highlights: [
      {
        title: "Shift-proof design",
        description:
          "Handovers, notes, and open tickets survive shift change so guests are not repeating themselves.",
      },
      {
        title: "Channel reality",
        description:
          "We plan for OTAs, direct, and corporate rates instead of a single happy path.",
      },
      {
        title: "Calm at peak",
        description:
          "Performance and simple screens matter most on a sold-out Saturday, so we test for that.",
      },
    ],
    approach: approachFor("Hospitality"),
    faqs: [
      {
        question: "Do you replace our PMS?",
        answer:
          "Sometimes we extend it. Sometimes we build a focused layer for bookings, guest apps, or ops. We decide after mapping your current stack.",
      },
      {
        question: "Can guests request service from their phone?",
        answer:
          "Yes. We build request flows that land in staff queues with room, time, and status.",
      },
      {
        question: "Do you support multiple properties?",
        answer:
          "Group-level inventory, reporting, and shared guest profiles are a common requirement we design for.",
      },
    ],
  },
  {
    slug: "health-fitness",
    label: "Health & Fitness",
    tags: ["Membership", "Mobile", "Scheduling"],
    tagline: "Member apps that keep clubs full",
    description:
      "Member apps, class booking, and performance tracking to grow modern fitness communities.",
    overview: [
      "Fitness businesses grow when booking, membership, and coaching are easy on a phone. We build club apps, class systems, and trainer tools that reduce no-shows and make retention measurable.",
      "From boutique studios to multi-site gyms, we connect payments, schedules, and access so the front desk is not the bottleneck.",
    ],
    pageTitle: "Health and Fitness Software Development",
    metaDescription:
      "Custom fitness software for memberships, class booking, and member apps. Built by a software house for gyms and wellness brands.",
    heroImage: img("/industries/fitness.webp", "Fitness membership and class booking software"),
    challenges: [
      {
        title: "Classes that overbook or empty out",
        description:
          "Without waitlists, reminders, and trainer tools, the timetable fights you.",
      },
      {
        title: "Membership admin by spreadsheet",
        description:
          "Freezes, upgrades, and failed payments are handled too late, which hurts cash and goodwill.",
      },
      {
        title: "Coaching notes that vanish",
        description:
          "Trainers keep progress in their heads or chats, so members do not feel known.",
      },
    ],
    capabilities: [
      {
        title: "Memberships and billing",
        description:
          "Plans, pauses, and dunning that finance can explain and members can self-serve.",
      },
      {
        title: "Class and PT booking",
        description:
          "Schedules, capacity, waitlists, and check-in that work on the gym floor.",
      },
      {
        title: "Member mobile apps",
        description:
          "Book, pay, and track in one place instead of three different logins.",
      },
      {
        title: "Trainer and club ops",
        description:
          "Rosters, notes, and access control for staff who are moving, not sitting.",
      },
    ],
    solutions: [
      "Gym and studio membership systems",
      "Class and personal-training booking",
      "Member iOS and Android apps",
      "Access control and check-in",
      "Trainer coaching notes",
      "Retail and supplement POS for clubs",
    ],
    highlights: [
      {
        title: "Retention in the product",
        description:
          "We surface attendance and payment risk so staff can intervene before a member ghosts.",
      },
      {
        title: "Fast booking",
        description:
          "The book-a-class path is short, because friction is the competitor's best friend.",
      },
      {
        title: "Multi-site ready",
        description:
          "Permissions and reporting work for one studio or a group without a rewrite.",
      },
    ],
    approach: approachFor("Health & Fitness"),
    faqs: [
      {
        question: "Do you integrate access gates and payments?",
        answer:
          "Yes, when those vendors have APIs. We map membership status to access so unpaid accounts are handled consistently.",
      },
      {
        question: "Can trainers log sessions on mobile?",
        answer:
          "We build trainer views for notes, attendance, and programming that work between sessions.",
      },
      {
        question: "Is this only for gyms?",
        answer:
          "We also build for yoga, physio-adjacent wellness, and hybrid coaching businesses.",
      },
    ],
  },
  {
    slug: "technology",
    label: "Technology",
    tags: ["SaaS", "APIs", "Platforms"],
    tagline: "Product engineering for software-first companies",
    description:
      "Cutting-edge platforms, APIs, and infrastructure for software-first technology companies.",
    overview: [
      "Technology companies need a software house that can join an existing codebase, not only start greenfield. We build SaaS products, APIs, and internal platforms with the engineering standards your team can inherit.",
      "From MVP to scale-up, we focus on architecture, observability, and delivery cadence so you are not stuck with a prototype that cannot grow.",
    ],
    pageTitle: "Technology Company Software Development",
    metaDescription:
      "Custom software, APIs, and SaaS platforms for technology companies. Senior product engineering from a top rated software house.",
    heroImage: img("/industries/technology.webp", "SaaS and technology platform software development"),
    challenges: [
      {
        title: "MVP that cannot scale",
        description:
          "The first version worked for a demo. Production load, tenants, and support tools were never designed.",
      },
      {
        title: "API sprawl",
        description:
          "Integrations grew ad hoc, so every new customer means a fragile one-off.",
      },
      {
        title: "Delivery without visibility",
        description:
          "Releases are risky because tests, environments, and ownership are unclear.",
      },
    ],
    capabilities: [
      {
        title: "SaaS product engineering",
        description:
          "Multi-tenant apps, billing hooks, and admin tools built for how your customers actually operate.",
      },
      {
        title: "API platforms",
        description:
          "Versioned APIs, auth, and developer-facing docs when partners are part of the product.",
      },
      {
        title: "Internal tools",
        description:
          "Ops consoles and support workflows so your team is not living in the database.",
      },
      {
        title: "Cloud and reliability",
        description:
          "CI/CD, observability, and environments that match how you want to ship.",
      },
    ],
    solutions: [
      "SaaS product development",
      "Public and partner APIs",
      "Admin and support consoles",
      "Data pipelines for product analytics",
      "Cloud infrastructure and CI/CD",
      "Security reviews for product surfaces",
    ],
    highlights: [
      {
        title: "Code your team can own",
        description:
          "Clear structure, tests, and documentation so you are not locked to the original authors.",
      },
      {
        title: "Product sense",
        description:
          "We push back on features that create support load without moving the metric you care about.",
      },
      {
        title: "Senior delivery",
        description:
          "You work with engineers who have shipped production systems, not a bait-and-switch bench.",
      },
    ],
    approach: approachFor("Technology"),
    faqs: [
      {
        question: "Can you join our existing repo?",
        answer:
          "Yes. Dedicated engineers can work in your stack, process, and tools, or we can run a scoped workstream.",
      },
      {
        question: "Do you help with architecture?",
        answer:
          "Discovery includes architecture and a plan for tenancy, data, and release risk before we scale the team.",
      },
      {
        question: "What stacks do you use?",
        answer:
          "We typically ship web and API products in modern TypeScript, Node, and cloud platforms, and we adapt to your stack when that is the better path.",
      },
    ],
  },
  {
    slug: "insurance",
    label: "Insurance",
    tags: ["Underwriting", "Claims", "Automation"],
    tagline: "Policy and claims software that shortens the cycle",
    description:
      "Quote, underwrite, and service policies faster with automated insurance workflows.",
    overview: [
      "Insurance operations stall when quotes, underwriting, and claims live in disconnected tools. We build policy admin, FNOL, and broker portals that make the file the system of record.",
      "We design for rules, documents, and exceptions so automation helps examiners instead of hiding decisions.",
    ],
    pageTitle: "Insurance Software Development",
    metaDescription:
      "Custom insurance software for quoting, underwriting, and claims. Built by a software house for carriers and MGAs.",
    heroImage: img("/industries/insurance.webp", "Insurance quoting and claims software"),
    challenges: [
      {
        title: "Quotes that cannot be explained",
        description:
          "Rating lives in spreadsheets, so brokers wait and audit is painful.",
      },
      {
        title: "Claims by inbox",
        description:
          "FNOL, photos, and reserves are scattered, so cycle time and leakage grow.",
      },
      {
        title: "Broker and customer silence",
        description:
          "Status is a phone call because there is no trustworthy portal.",
      },
    ],
    capabilities: [
      {
        title: "Quote and bind",
        description:
          "Intake, rating hooks, and referral rules with a history underwriters can defend.",
      },
      {
        title: "Policy administration",
        description:
          "Endorsements, billing events, and documents tied to the policy record.",
      },
      {
        title: "Claims",
        description:
          "FNOL, assignment, reserves, and payments with a case file that does not fall apart.",
      },
      {
        title: "Broker and insured portals",
        description:
          "Self-serve status and documents that reduce inbound operations load.",
      },
    ],
    solutions: [
      "Digital quoting and underwriting workbenches",
      "Policy administration modules",
      "Claims and FNOL systems",
      "Broker and agent portals",
      "Document generation and e-delivery",
      "Reporting for loss and operations",
    ],
    highlights: [
      {
        title: "Rules you can change",
        description:
          "We separate configuration from code where your product team needs to move without a release.",
      },
      {
        title: "The file is the product",
        description:
          "Every quote, claim, and note has an owner, timestamp, and next action.",
      },
      {
        title: "Integration with reality",
        description:
          "Core, payments, and data vendors are connected with monitoring, not a hopeful nightly job.",
      },
    ],
    approach: approachFor("Insurance"),
    faqs: [
      {
        question: "Can you work with our core policy system?",
        answer:
          "Yes. We often build digital layers and workbenches around a core rather than replacing it on day one.",
      },
      {
        question: "Do you automate underwriting?",
        answer:
          "We automate straight-through paths and keep referral queues for the cases that still need humans.",
      },
      {
        question: "Is this for carriers only?",
        answer:
          "We also build for MGAs, brokers, and insurtech products with similar quote-bind-claim journeys.",
      },
    ],
  },
  {
    slug: "consulting",
    label: "Consulting",
    tags: ["Portals", "Reporting", "CRM"],
    tagline: "Client delivery software for professional firms",
    description:
      "Client portals, analytics, and engagement tooling tailored for high-performing consultancies.",
    overview: [
      "Consulting firms sell trust and time. Software should make delivery visible, not add another status meeting. We build client portals, CRM, and resource tools that keep engagements, documents, and billing aligned.",
      "Partners get a picture of pipeline and utilization; clients get a professional place to collaborate instead of a messy shared drive.",
    ],
    pageTitle: "Consulting Firm Software Development",
    metaDescription:
      "Custom software for consulting firms: client portals, CRM, and delivery analytics. Built by a software house for professional services.",
    heroImage: img("/industries/consulting.webp", "Consulting client portal and delivery software"),
    challenges: [
      {
        title: "Delivery in slides and inboxes",
        description:
          "Work plans, files, and decisions are not in one place, so onboarding a new consultant is slow.",
      },
      {
        title: "Clients in the dark",
        description:
          "Status is a weekly email, which creates surprise invoices and weak perceived value.",
      },
      {
        title: "Utilization guessed",
        description:
          "Staffing and pipeline live in different tools, so staffing is reactive.",
      },
    ],
    capabilities: [
      {
        title: "Client portals",
        description:
          "Secure spaces for files, milestones, and approvals that match how you run an engagement.",
      },
      {
        title: "CRM and origination",
        description:
          "Opportunities, proposals, and handoff into delivery without retyping the brief.",
      },
      {
        title: "Resourcing and time",
        description:
          "Staffing, time, and simple profitability views partners will actually open.",
      },
      {
        title: "Knowledge and IP",
        description:
          "Reusable assets and project history so the firm does not restart from zero every time.",
      },
    ],
    solutions: [
      "Client collaboration portals",
      "Professional-services CRM",
      "Project and milestone tracking",
      "Time, expense, and billing support",
      "Resource planning",
      "Internal knowledge bases",
    ],
    highlights: [
      {
        title: "Partner-grade presentation",
        description:
          "The client-facing product looks like your firm, not a generic project tool.",
      },
      {
        title: "Less status theatre",
        description:
          "Milestones and risks are visible so meetings can decide, not recap.",
      },
      {
        title: "Fits how you sell",
        description:
          "We map proposal to kickoff to close so CRM and delivery are not two companies.",
      },
    ],
    approach: approachFor("Consulting"),
    faqs: [
      {
        question: "Can this sit beside Salesforce or HubSpot?",
        answer:
          "Yes. We integrate or extend the CRM you already use when that is healthier than replacing it.",
      },
      {
        question: "Do clients get their own login?",
        answer:
          "Typically yes, with permissions per engagement so they only see their work.",
      },
      {
        question: "Is this only for large firms?",
        answer:
          "Boutique firms often need this most: a professional portal without enterprise bloat.",
      },
    ],
  },
];

type IndustryExtras = {
  extraOverview: string[];
  whoWeServe: string[];
  useCases: IndustryBlock[];
  integrations: string[];
  outcomes: IndustryBlock[];
  extraFaqs: IndustryFaq[];
};

const extrasBySlug: Record<string, IndustryExtras> = {
  manufacturing: {
    extraOverview: [
      "A typical engagement starts on the floor: we walk the line, watch a changeover, and sit with planners and quality so the software matches the real constraints of machines, shifts, and materials. That discovery is what keeps the first release useful instead of theoretical.",
      "We then phase delivery around the bottleneck you feel most: work-order visibility, inventory truth, quality holds, or maintenance. Each phase goes live with training for supervisors and operators, plus a backlog for the next cell or plant.",
    ],
    whoWeServe: [
      "Discrete and process manufacturers",
      "Job shops and make-to-order plants",
      "Multi-site production groups",
      "Contract manufacturers",
      "Maintenance and reliability teams",
      "Quality and compliance owners",
    ],
    useCases: [
      {
        title: "Live job status on the line",
        description:
          "Operators and supervisors see which jobs are running, blocked, or waiting on materials without walking the floor or calling the planner.",
      },
      {
        title: "Material that matches the order",
        description:
          "Pick lists, lots, and backflushing stay tied to the work order so purchasing and production stop arguing from different spreadsheets.",
      },
      {
        title: "Downtime you can explain",
        description:
          "Stops are coded, timestamped, and visible against the job, so maintenance and operations share one history instead of competing stories.",
      },
    ],
    integrations: [
      "ERP and finance systems",
      "PLCs, SCADA, and machine gateways",
      "Barcode and RFID scanners",
      "WMS and shipping carriers",
      "Quality lab instruments",
      "Identity and plant-floor kiosks",
    ],
    outcomes: [
      {
        title: "Fewer surprises at shift change",
        description:
          "Incoming supervisors inherit open jobs, holds, and shortages instead of reconstructing the day from paper.",
      },
      {
        title: "Faster root-cause on quality",
        description:
          "Lot genealogy and check history cut the time it takes to isolate a defect and decide what to quarantine.",
      },
      {
        title: "Maintenance that is scheduled, not heroic",
        description:
          "Work orders and sensor trends support planned work so the plant is not living on breakdowns.",
      },
    ],
    extraFaqs: [
      {
        question: "Will operators actually use it?",
        answer:
          "We design for kiosks, scanners, and short tasks. If a flow takes too many taps on the line, we cut it before go-live.",
      },
      {
        question: "Can we start with one plant or one line?",
        answer:
          "Yes. Most manufacturers start with a cell, a warehouse, or a single site, then roll the same model to the next plant.",
      },
      {
        question: "Do you replace our MES or sit beside it?",
        answer:
          "Either path is fine. We extend what already works and only replace modules that are blocking the floor.",
      },
    ],
  },
  healthcare: {
    extraOverview: [
      "Clinical software is judged in a busy clinic, not a quiet workshop. We prototype the encounter, intake, and handoff flows with the people who will live in them, then harden access, audit, and hosting before a wider rollout.",
      "After launch we stay for training, hypercare, and the first reporting cycle. That is usually when real edge cases appear: locums, dual coverage, or a lab that sends results in a format nobody warned us about.",
    ],
    whoWeServe: [
      "Hospitals and specialty clinics",
      "Primary care and outpatient groups",
      "Diagnostic and imaging centers",
      "Telehealth and virtual-care teams",
      "Pharmacy and care-coordination units",
      "Health-tech product companies",
    ],
    useCases: [
      {
        title: "One chart across visits",
        description:
          "Notes, orders, and results follow the patient so the next clinician is not reconstructing history from attachments.",
      },
      {
        title: "Front desk that is not the bottleneck",
        description:
          "Scheduling, eligibility, and check-in reduce the pile of clipboards and the queue at 8 a.m.",
      },
      {
        title: "Remote visits in the same record",
        description:
          "Telehealth is documented like an in-person encounter, with the same billing and follow-up path.",
      },
    ],
    integrations: [
      "EMR and hospital information systems",
      "Lab and imaging interfaces (HL7 / FHIR)",
      "Pharmacy and e-prescribing where in scope",
      "Payment and insurance eligibility",
      "Identity, SSO, and directory services",
      "SMS and appointment reminder providers",
    ],
    outcomes: [
      {
        title: "Less after-hours charting",
        description:
          "Templates, orders, and handoffs are designed so documentation finishes closer to the visit.",
      },
      {
        title: "Fewer missing follow-ups",
        description:
          "Tasks, referrals, and recalls sit in a queue with an owner instead of a sticky note.",
      },
      {
        title: "A privacy model you can explain",
        description:
          "Roles, break-glass, and audit logs are documented for your compliance and legal reviewers.",
      },
    ],
    extraFaqs: [
      {
        question: "How do you handle clinical safety?",
        answer:
          "We keep decision support conservative, log overrides, and involve clinical owners in UAT. We do not ship 'clever' features that hide risk.",
      },
      {
        question: "Can we roll out department by department?",
        answer:
          "Yes. Outpatient, then inpatient, then a specialty clinic is a common path so training stays manageable.",
      },
      {
        question: "What about data migration from paper or an old HIS?",
        answer:
          "We plan mapping, sampling, and a freeze window. History that cannot be trusted stays labeled rather than silently imported.",
      },
    ],
  },
  retail: {
    extraOverview: [
      "Retail systems fail in the last meter: a barcode that will not scan, a promotion that will not apply, a click-and-collect order that never reaches the store. We test those paths with real SKUs and real staff, not only a demo catalog.",
      "We also plan for peak. Black Friday, Ramadan, or a viral drop should stress the same checkout and inventory model you use on a Tuesday, with monitoring that tells you which store or channel is in trouble.",
    ],
    whoWeServe: [
      "Multi-store retail chains",
      "Specialty and boutique brands",
      "Omnichannel ecommerce teams",
      "Wholesale and showroom operations",
      "Franchise networks",
      "Retail operations and merchandising",
    ],
    useCases: [
      {
        title: "One stock number, every channel",
        description:
          "Stores, warehouse, and web share availability so you stop overselling and stop hiding inventory 'just in case'.",
      },
      {
        title: "Checkout in seconds, not minutes",
        description:
          "POS paths cover split tenders, returns, and staff discounts without sending the cashier into a back office screen.",
      },
      {
        title: "Click-and-collect that the store can run",
        description:
          "Pick lists, staging, and customer SMS are part of the order, not a side spreadsheet.",
      },
    ],
    integrations: [
      "Payment gateways and acquiring banks",
      "Ecommerce platforms and marketplaces",
      "WMS and 3PL partners",
      "Accounting and ERP",
      "Loyalty and marketing automation",
      "Scanners, printers, and cash drawers",
    ],
    outcomes: [
      {
        title: "Fewer stockouts and fewer surprises",
        description:
          "Receiving, transfers, and cycle counts keep the number on screen closer to the shelf.",
      },
      {
        title: "Promotions that actually ring",
        description:
          "Offers are configured once and apply at till and online with the same rules.",
      },
      {
        title: "Finance that can close the day",
        description:
          "Tenders, tips, and refunds reconcile instead of living as a night-end mystery.",
      },
    ],
    extraFaqs: [
      {
        question: "Do you support offline POS?",
        answer:
          "When stores have unreliable connectivity we queue sales and sync with conflict rules you approve, so the till is not dead during an outage.",
      },
      {
        question: "Can we start with one flagship store?",
        answer:
          "Yes. Prove checkout and inventory in one location, then copy the model to the next stores.",
      },
      {
        question: "How do returns work across channels?",
        answer:
          "We design buy-online-return-in-store and the reverse when your operations can support it, with inventory and refund paths that match.",
      },
    ],
  },
  "real-estate": {
    extraOverview: [
      "Agencies lose money in the gaps: a portal lead with no owner, a listing with last month's price, a viewing that never got logged. We make those events first-class so the CRM is the desk, not a graveyard of forgotten records.",
      "For landlords and developers the same idea applies to units, tenants, and snag lists. The product should tell you what is vacant, what is in dispute, and what is waiting on a contractor.",
    ],
    whoWeServe: [
      "Residential and commercial agencies",
      "Property developers and sales galleries",
      "Landlords and asset managers",
      "Property management companies",
      "Broker networks and teams",
      "Facility and leasing offices",
    ],
    useCases: [
      {
        title: "Lead to viewing in one thread",
        description:
          "Portal, web, and walk-in inquiries become owned records with viewing slots, notes, and a next action.",
      },
      {
        title: "Listings that match the street",
        description:
          "Price, status, and media update the public site and internal board together so agents are not selling a ghost unit.",
      },
      {
        title: "Tenancy without the inbox archive",
        description:
          "Leases, deposits, and maintenance tickets sit on the unit so a new property manager can take over.",
      },
    ],
    integrations: [
      "Property portals and listing feeds",
      "Maps and geocoding",
      "WhatsApp, email, and SMS",
      "E-sign and document storage",
      "Accounting and payment collection",
      "Identity and agent directories",
    ],
    outcomes: [
      {
        title: "Follow-up that is not luck",
        description:
          "Unworked leads and stale listings are visible to managers instead of hiding in personal chats.",
      },
      {
        title: "Faster time to offer",
        description:
          "Shared calendars, feedback, and document packs shorten the path from viewing to paperwork.",
      },
      {
        title: "A portfolio you can audit",
        description:
          "Occupancy, arrears, and open jobs are reports, not a monthly reconstruction.",
      },
    ],
    extraFaqs: [
      {
        question: "Can agents capture leads on mobile between viewings?",
        answer:
          "Yes. Mobile-first capture and search are usually in the first release because that is when the CRM either wins or dies.",
      },
      {
        question: "Do you support multiple languages or markets?",
        answer:
          "We can localize listing fields, contracts, and portals when you sell across cities or languages.",
      },
      {
        question: "How do commissions and splits work?",
        answer:
          "We model team splits and referral rules when they are part of how you pay, rather than forcing a single-agent assumption.",
      },
    ],
  },
  education: {
    extraOverview: [
      "Schools do not pause for a software cutover. We plan around terms, exams, and fee cycles, with a parallel run so the old register is not deleted on day one.",
      "Teachers only adopt what saves them time. Attendance, gradebooks, and messaging are designed to be faster than paper, or they will not be used after the training week.",
    ],
    whoWeServe: [
      "K-12 schools and school groups",
      "Colleges and universities",
      "Coaching and test-prep institutes",
      "EdTech product companies",
      "Training academies and corporates",
      "Registrars and academic operations",
    ],
    useCases: [
      {
        title: "Admissions that do not drown admin",
        description:
          "Applications, documents, and offers flow through statuses parents can see, instead of a pile of printed forms.",
      },
      {
        title: "Attendance in the first five minutes",
        description:
          "Teachers mark a class quickly, and absences notify the right people without a separate process.",
      },
      {
        title: "Fees without the argument",
        description:
          "Invoices, receipts, and concessions are on the student record so accounts and the front office share one truth.",
      },
    ],
    integrations: [
      "Payment gateways for fees",
      "SMS and parent messaging",
      "Google / Microsoft classroom tools",
      "ID cards and access control",
      "Accounting packages",
      "Video and content CDNs for LMS",
    ],
    outcomes: [
      {
        title: "Parents stop calling for basics",
        description:
          "Timetable, homework, and fee status are self-serve, which frees the office for exceptions.",
      },
      {
        title: "Leadership sees the term, not a sample",
        description:
          "Attendance, results, and fee collection are dashboards, not a term-end scramble.",
      },
      {
        title: "Teachers keep teaching",
        description:
          "The product is judged by whether marking and planning got easier, not by how many modules were sold.",
      },
    ],
    extraFaqs: [
      {
        question: "Can we run two campuses on one system?",
        answer:
          "Yes. Shared policies with campus-level timetables, fees, and staff permissions are a common design.",
      },
      {
        question: "How do you handle exam seasons?",
        answer:
          "We freeze risky releases around boards and internals, and we load-test parent portals before result day.",
      },
      {
        question: "Is student data stored in-region?",
        answer:
          "Hosting and backups follow your policy. We agree region, retention, and who can export before go-live.",
      },
    ],
  },
  finance: {
    extraOverview: [
      "In finance, a pretty dashboard that cannot reconcile is a liability. We start from source systems, corporate actions, and the close calendar, then design screens that ops and risk can defend in a review.",
      "Entitlements are not a footer. Who can see a book, approve a payment, or export a file is specified with your control owners and tested like any other feature.",
    ],
    whoWeServe: [
      "Asset and wealth managers",
      "Broker-dealers and trading ops",
      "Fintech product teams",
      "Treasury and corporate finance",
      "Lending and credit operations",
      "Risk, compliance, and middle office",
    ],
    useCases: [
      {
        title: "A book that matches the custodian",
        description:
          "Positions and cash have a daily break process so differences are cases, not folklore.",
      },
      {
        title: "Onboarding without the email chain",
        description:
          "KYC files, checklists, and decisions live on the applicant so ops can complete work in one place.",
      },
      {
        title: "Client reporting you can stand behind",
        description:
          "Statements pull from the same ledger the desk uses, with an export trail.",
      },
    ],
    integrations: [
      "Custodians and fund administrators",
      "Market data and pricing vendors",
      "Payment rails and banks",
      "Core ledgers and accounting",
      "Identity, SSO, and secrets management",
      "Surveillance and case tools",
    ],
    outcomes: [
      {
        title: "Shorter, calmer close",
        description:
          "Breaks are owned and aged. The close is a process, not a weekend of heroics.",
      },
      {
        title: "Fewer 'who changed this' moments",
        description:
          "Privileged actions are logged with maker-checker when your policy requires it.",
      },
      {
        title: "Clients who can self-serve safely",
        description:
          "Portals show what you intend to show, with the same numbers as internal ops.",
      },
    ],
    extraFaqs: [
      {
        question: "How do you test financial calculations?",
        answer:
          "We agree fixtures with your ops team, lock golden files, and regression-test valuation and fee logic on every release that touches them.",
      },
      {
        question: "Can you work inside our change-management process?",
        answer:
          "Yes. CAB, environments, and release evidence are part of how we ship in regulated firms.",
      },
      {
        question: "Do you build customer-facing trading UIs?",
        answer:
          "We can. We are equally often hired for the ops, reporting, and control plane behind the UI.",
      },
    ],
  },
  logistics: {
    extraOverview: [
      "A tracking page is useless if the scan never happened. We design the handheld and dock flows first, then the customer status, so the milestone is earned in the warehouse or on the truck.",
      "Exceptions are the product. Missed windows, split consignments, and damaged freight get a workflow with an owner, not a comment in a group chat.",
    ],
    whoWeServe: [
      "3PL and warehouse operators",
      "Fleet and last-mile companies",
      "Manufacturers with private fleets",
      "Importers, exporters, and freight forwarders",
      "Dispatch and control-tower teams",
      "Customer service for shipments",
    ],
    useCases: [
      {
        title: "Scan to customer status",
        description:
          "A dock scan updates the consignment and the branded tracking page without a clerk retyping the event.",
      },
      {
        title: "Replan after the first delay",
        description:
          "Dispatchers see capacity, remaining stops, and SLA risk so they can move work instead of hoping.",
      },
      {
        title: "Proof of delivery that billing can use",
        description:
          "Photos, signatures, and geo time-stamps attach to the job that invoices against.",
      },
    ],
    integrations: [
      "GPS and telematics",
      "Handheld scanners and printers",
      "Carrier APIs and EDI",
      "ERP and order management",
      "Maps and geocoding",
      "Customer notification (SMS / email)",
    ],
    outcomes: [
      {
        title: "Fewer 'where is my shipment' calls",
        description:
          "Customers see the milestones you choose to expose, and ops sees the rest.",
      },
      {
        title: "Dock and truck talking to each other",
        description:
          "Inventory and transport share the same consignment IDs, which cuts double entry.",
      },
      {
        title: "SLA conversations with evidence",
        description:
          "Timestamps and exceptions are in the system, so disputes are not a memory contest.",
      },
    ],
    extraFaqs: [
      {
        question: "Do drivers need a native app?",
        answer:
          "Often yes for background location and camera POD. Some fleets start with a mobile web flow if the job is simpler.",
      },
      {
        question: "Can we onboard a new customer warehouse without a rewrite?",
        answer:
          "Multi-client 3PL models (locations, SKUs, billing rules) are designed in when that is your business.",
      },
      {
        question: "How do you handle bad GPS or missed scans?",
        answer:
          "We show gaps, allow supervised corrections, and keep an audit of who fixed what.",
      },
    ],
  },
  media: {
    extraOverview: [
      "Publishers and broadcasters miss slots when ingest, rights, and approval are informal. We put those states in the system so an editor can see what is blocked and why, at 4 p.m. as well as in the morning meeting.",
      "Playback quality is an operations problem. We wire encoding, CDN, and player errors into the same ops view as the catalog, so a bad title is a ticket, not a social-media surprise.",
    ],
    whoWeServe: [
      "Broadcasters and streaming services",
      "Newsrooms and digital publishers",
      "Studios and post-production teams",
      "Brand and agency content units",
      "Rights and scheduling desks",
      "OTT product teams",
    ],
    useCases: [
      {
        title: "Ingest to air without a scavenger hunt",
        description:
          "Assets pick up metadata, rights, and an approval chain so publishing is a state change, not a folder search.",
      },
      {
        title: "Regional rights that the player respects",
        description:
          "Geo, window, and package rules live with the title, not in a spreadsheet next to the CMS.",
      },
      {
        title: "A newsroom that can still move fast",
        description:
          "Embargoes, breaking updates, and last-minute swaps are modeled instead of fought by the CMS.",
      },
    ],
    integrations: [
      "Transcoding and media processing",
      "CDN and origin storage",
      "Existing CMS or DAM",
      "Ad servers and subscription billing",
      "Analytics and QoE tools",
      "Identity for staff and subscribers",
    ],
    outcomes: [
      {
        title: "Fewer missed slots",
        description:
          "Scheduling sees what is actually ready, including rights and encode status.",
      },
      {
        title: "Faster reuse of archives",
        description:
          "Searchable metadata and rights status make old assets usable instead of scary.",
      },
      {
        title: "Support that can diagnose playback",
        description:
          "Player and packaging errors are correlated with the title and device, not a generic 'try again'.",
      },
    ],
    extraFaqs: [
      {
        question: "Do you build the player or only the catalog?",
        answer:
          "Either. Many teams need catalog, CMS, and workflow more than a custom player. We decide after looking at your stack.",
      },
      {
        question: "How do live and VOD share a system?",
        answer:
          "We keep a common identity and rights model, with live-specific ingest and alerting where you need it.",
      },
      {
        question: "Can freelancers work in the same workflow?",
        answer:
          "Yes, with tighter permissions and watermarked review when that is your policy.",
      },
    ],
  },
  banking: {
    extraOverview: [
      "Digital banking is a chain: onboarding, core, channels, and ops. We map that chain with your architects so a mobile screen never promises a product the core cannot post.",
      "Fraud and operations need cases, not only alerts. We build queues, SLAs, and evidence packs so investigators are not exporting CSVs at midnight.",
    ],
    whoWeServe: [
      "Retail and digital banks",
      "Credit unions and microfinance",
      "Lending and cards operations",
      "Onboarding and KYC teams",
      "Fraud and financial crime units",
      "Channel and mobile product owners",
    ],
    useCases: [
      {
        title: "Account opening that completes",
        description:
          "Applicants see progress; ops sees missing documents and aging, so files do not die in a shared mailbox.",
      },
      {
        title: "Balances that match the branch",
        description:
          "Channel caching and core posting rules are agreed so support is not explaining two truths.",
      },
      {
        title: "A fraud alert that becomes a case",
        description:
          "Signals open a file with an owner, timeline, and customer communication log.",
      },
    ],
    integrations: [
      "Core banking and middleware",
      "KYC, KYB, and screening vendors",
      "Card, switch, and payment schemes",
      "SMS, email, and push notifications",
      "Device intelligence and fraud tools",
      "SSO, secrets, and SIEM logging",
    ],
    outcomes: [
      {
        title: "Higher completion on onboarding",
        description:
          "Clear steps and ops follow-up reduce abandoned applications without weakening checks.",
      },
      {
        title: "Channels that ops can explain",
        description:
          "Limits, holds, and pending states are visible to support with the same language as the app.",
      },
      {
        title: "Evidence for audit without a scramble",
        description:
          "Access, changes, and case notes are exportable when reviewers ask.",
      },
    ],
    extraFaqs: [
      {
        question: "How long does a channel or onboarding program take?",
        answer:
          "A focused onboarding or service request flow can land in a few months. Full retail app replacement is phased behind the core and vendor lead times.",
      },
      {
        question: "Do you work with our existing vendor stack?",
        answer:
          "Yes. Most banks already have a core, a switch, and a KYC vendor. We integrate rather than inventing a parallel bank.",
      },
      {
        question: "Can you support dual control and four-eyes checks?",
        answer:
          "Maker-checker is a first-class pattern for payments, limits, and sensitive customer changes.",
      },
    ],
  },
  agriculture: {
    extraOverview: [
      "Farm software that needs perfect Wi-Fi will lose to a notebook. We design capture that syncs later, with plots and activities that match how agronomists and farm managers already talk.",
      "Buyers and exporters care about lots. We keep harvest, storage, and dispatch in a chain that can survive an audit without recreating history from memory.",
    ],
    whoWeServe: [
      "Commercial farms and estates",
      "Cooperatives and grower networks",
      "Processors and packhouses",
      "Input and equipment companies",
      "Agronomy and advisory teams",
      "Export and traceability managers",
    ],
    useCases: [
      {
        title: "A season plan you can update",
        description:
          "Planting, inputs, and labor sit on the plot so the plan is not a slide that died in week three.",
      },
      {
        title: "Irrigation and weather that recommend, not overwhelm",
        description:
          "Alerts are tied to a field and a suggested action, not a raw sensor dump.",
      },
      {
        title: "From harvest bin to buyer lot",
        description:
          "Weights, grades, and storage locations stay attached so a quality issue has a boundary.",
      },
    ],
    integrations: [
      "Soil, weather, and equipment sensors",
      "Satellite or drone imagery providers",
      "Weighbridges and packhouse scales",
      "Accounting and inventory",
      "SMS for field teams",
      "Buyer and certification portals",
    ],
    outcomes: [
      {
        title: "Less wasted input",
        description:
          "Activity and inventory records make over-application and missing stock visible.",
      },
      {
        title: "Faster answers to buyers",
        description:
          "Lot history is a report, not a week of calling farm managers.",
      },
      {
        title: "Advice that reaches the field",
        description:
          "Agronomists leave tasks on the plot; farm staff close them on the phone.",
      },
    ],
    extraFaqs: [
      {
        question: "What if workers are not literate in the software language?",
        answer:
          "We use simple icons, local language, and voice or photo capture where that is how the team already works.",
      },
      {
        question: "Do we need sensors on day one?",
        answer:
          "No. Many farms start with plots, activities, and harvest, then add IoT where it changes a decision.",
      },
      {
        question: "Can a cooperative see many growers?",
        answer:
          "Yes, with permissions so a grower sees their farms and the co-op sees the roll-up.",
      },
    ],
  },
  hospitality: {
    extraOverview: [
      "Hotels feel software at the desk and in the room. We time-box discovery on a busy evening so we see real arrivals, not a quiet Tuesday morning.",
      "Housekeeping, maintenance, and F&B only help the guest if status is shared. We treat room state as a product: dirty, inspected, out of order, with a history staff can trust at 11 p.m.",
    ],
    whoWeServe: [
      "Independent hotels and boutiques",
      "Hotel groups and brands",
      "Serviced apartments",
      "Resorts and venue operations",
      "Revenue and front-office teams",
      "F&B and guest-experience leads",
    ],
    useCases: [
      {
        title: "Arrival that is not a surprise",
        description:
          "ETA, notes, and room readiness are on one board so the desk is not hunting WhatsApp.",
      },
      {
        title: "A guest request that gets closed",
        description:
          "Extra towels or a late checkout become a ticket with an owner and a timestamp, not a verbal promise.",
      },
      {
        title: "Housekeeping that matches the rack",
        description:
          "Room status updates as rooms are cleaned and inspected, which is what lets the desk assign with confidence.",
      },
    ],
    integrations: [
      "PMS and channel managers",
      "Booking engines and OTAs",
      "Door locks and access control",
      "Payment and folio posting",
      "POS for F&B",
      "SMS and guest messaging",
    ],
    outcomes: [
      {
        title: "Shorter check-in lines",
        description:
          "Pre-arrival data and room status reduce the scramble when two coaches arrive at once.",
      },
      {
        title: "Fewer missed guest promises",
        description:
          "Open requests survive shift change and show up in the morning briefing.",
      },
      {
        title: "Revenue that is not leaked at the desk",
        description:
          "Rates, packages, and incidentals post consistently instead of living as a night-audit correction.",
      },
    ],
    extraFaqs: [
      {
        question: "Will this fight our current PMS?",
        answer:
          "We integrate or sit beside it. Replacing PMS is a last resort unless you already planned that program.",
      },
      {
        question: "Can we start with guest app only?",
        answer:
          "Yes, if requests and pre-arrival have a staff queue to land in. An app without ops behind it just creates anger.",
      },
      {
        question: "Do you support multiple properties and brands?",
        answer:
          "Group reporting, shared guests, and property-level permissions are a usual requirement.",
      },
    ],
  },
  "health-fitness": {
    extraOverview: [
      "Members book on their phone standing in a corridor. If class booking takes more than a few taps, they will screenshot a timetable and message the front desk. We design that path first.",
      "Failed payments and frozen memberships are where gyms leak quietly. We make dunning and access rules explicit so staff are not guessing who can walk through the gate.",
    ],
    whoWeServe: [
      "Multi-site gym groups",
      "Boutique studios",
      "Personal training businesses",
      "Wellness and physio-adjacent clinics",
      "Franchise fitness brands",
      "Membership and retention teams",
    ],
    useCases: [
      {
        title: "Class booking with waitlists that work",
        description:
          "Cancellations free the next person automatically, with reminders that cut no-shows.",
      },
      {
        title: "Access that matches the membership",
        description:
          "Gates and front desk see the same status so arguments at the door are rare.",
      },
      {
        title: "A trainer who remembers the member",
        description:
          "Notes and programs follow the person across sites and substitutes.",
      },
    ],
    integrations: [
      "Payment and card-on-file billing",
      "Access control and turnstiles",
      "Email and push notifications",
      "Accounting",
      "Retail POS for the club shop",
      "Wearables where members opt in",
    ],
    outcomes: [
      {
        title: "Higher class fill without chaos",
        description:
          "Capacity, waitlists, and trainer rosters are one timetable, not three.",
      },
      {
        title: "Cash that matches the member list",
        description:
          "Failed payments and pauses are visible before they become a surprise at month-end.",
      },
      {
        title: "Retention conversations with data",
        description:
          "Attendance drop-off is a list staff can act on, not a feeling.",
      },
    ],
    extraFaqs: [
      {
        question: "Can members belong to more than one club?",
        answer:
          "Yes. We model home club, visit rights, and freeze rules the way your product actually sells.",
      },
      {
        question: "Do you build native iOS and Android apps?",
        answer:
          "Often. Some studios start with a high-quality web app if the booking surface is small.",
      },
      {
        question: "How do intro offers and PT packs work?",
        answer:
          "We treat them as products with remaining sessions and expiry, not a note on the member.",
      },
    ],
  },
  technology: {
    extraOverview: [
      "Software companies usually do not need another agency pitch. They need engineers who can read the repo, leave it better, and explain trade-offs to product. That is how we staff technology-industry work.",
      "We are explicit about tenancy, observability, and the support tools your CS team will use on day 30. Those are the pieces that turn an MVP into a product you can sell without fear.",
    ],
    whoWeServe: [
      "SaaS founders and product teams",
      "Scale-ups modernizing an MVP",
      "Platform and API companies",
      "Internal tools for tech firms",
      "CTO / VP engineering needing extra senior capacity",
      "Startups preparing for due diligence",
    ],
    useCases: [
      {
        title: "Multi-tenant without a rewrite later",
        description:
          "Isolation, billing, and admin are designed before the fifth customer, not after the fiftieth.",
      },
      {
        title: "APIs partners can actually use",
        description:
          "Auth, versioning, and docs are part of the delivery, not a Notion page that drifted.",
      },
      {
        title: "Support that is not SSH",
        description:
          "An internal console lets CS fix the common cases without engineering on every ticket.",
      },
    ],
    integrations: [
      "Stripe and other billing providers",
      "Auth0, Cognito, or your IdP",
      "Data warehouses and product analytics",
      "Slack, Linear, and PagerDuty",
      "Cloud (AWS, GCP, Azure)",
      "Feature flags and experiment tools",
    ],
    outcomes: [
      {
        title: "A codebase your team can inherit",
        description:
          "Tests, structure, and READMEs are part of done, not a cleanup 'later'.",
      },
      {
        title: "Releases you can reverse",
        description:
          "Pipelines, flags, and monitoring make shipping a habit instead of an event.",
      },
      {
        title: "Diligence that is less painful",
        description:
          "Architecture notes and access reviews exist when investors or enterprise security ask.",
      },
    ],
    extraFaqs: [
      {
        question: "Can you work in our sprint process?",
        answer:
          "Yes. Dedicated engineers join your standups and tickets, or we run a scoped stream with a single owner on your side.",
      },
      {
        question: "What if our stack is not Next.js?",
        answer:
          "We match the stack you already have when that is the right call. We are not here to rewrite for fashion.",
      },
      {
        question: "Do you take equity or only fee-for-service?",
        answer:
          "We are a software house on commercial contracts. Equity is not the default engagement model.",
      },
    ],
  },
  insurance: {
    extraOverview: [
      "Insurance files are long-lived. A quote, a policy, and a claim have to remain explainable years later. We design the record so underwriters and examiners are not reconstructing intent from email.",
      "Straight-through processing is earned. We automate the boring, well-understood paths and keep referral queues honest for everything else, with reasons the next person can see.",
    ],
    whoWeServe: [
      "Carriers and MGAs",
      "Brokers and aggregators",
      "Insurtech product teams",
      "Claims and FNOL operations",
      "Underwriting and product teams",
      "Compliance and audit functions",
    ],
    useCases: [
      {
        title: "A quote a broker can trust",
        description:
          "Rating inputs, referrals, and bind packages are stored so 'how did we get this premium?' has an answer.",
      },
      {
        title: "FNOL that starts a real file",
        description:
          "Photos, first notice, and assignment land in a claim with reserves and a handler, not a mailbox.",
      },
      {
        title: "Endorsements without a side process",
        description:
          "Mid-term changes follow the same policy record as bind, with documents regenerated from source.",
      },
    ],
    integrations: [
      "Core policy and billing systems",
      "Rating and rules engines",
      "Document generation and e-sign",
      "Payment and premium finance",
      "FNOL and photo intake",
      "Data vendors (credit, vehicle, property)",
    ],
    outcomes: [
      {
        title: "Shorter quote-to-bind",
        description:
          "Brokers see status; underwriters see only what needs a human.",
      },
      {
        title: "Claims cycle time you can measure",
        description:
          "Aging, handoffs, and leakage indicators are on the file, not in a team's head.",
      },
      {
        title: "Audit that is a report, not a project",
        description:
          "Who decided, on what data, is retained with the quote or claim.",
      },
    ],
    extraFaqs: [
      {
        question: "Can we configure products without a developer?",
        answer:
          "Where your team needs that, we put rates, forms, and referral rules in configuration with guardrails. Not everything belongs in a CMS.",
      },
      {
        question: "Do you handle multi-country products?",
        answer:
          "We can, with tax, language, and regulatory variation modeled explicitly. That is a discovery item, not an assumption.",
      },
      {
        question: "How do you treat AI in claims or underwriting?",
        answer:
          "Assistive, with human sign-off on material decisions, and a log of what the model suggested versus what was accepted.",
      },
    ],
  },
  consulting: {
    extraOverview: [
      "Professional services firms are allergic to tools that look amateur in front of a client. We design portals and status views that match how you already present: calm, structured, and specific to the engagement.",
      "Internally, the pain is usually staffing and knowledge. We connect origination to delivery so the brief does not get retyped, and so a new consultant can find the last similar project.",
    ],
    whoWeServe: [
      "Management and strategy consultancies",
      "Boutique specialist firms",
      "IT and transformation practices",
      "Audit-adjacent advisory teams",
      "Partners and delivery leads",
      "Knowledge and operations managers",
    ],
    useCases: [
      {
        title: "A client space that replaces the shared drive",
        description:
          "Milestones, files, and decisions live per engagement with permissions the partner can explain.",
      },
      {
        title: "From proposal to kickoff without copy-paste",
        description:
          "Won deals carry scope, team, and documents into delivery so the first week is not archaeology.",
      },
      {
        title: "Utilization that is good enough to staff from",
        description:
          "Simple views of who is free, on what, beat a perfect model nobody updates.",
      },
    ],
    integrations: [
      "Salesforce, HubSpot, or your CRM",
      "Microsoft 365 / Google Workspace",
      "Time and billing tools",
      "SSO for staff and clients",
      "E-sign for SOWs and change orders",
      "Slack or Teams for internal alerts",
    ],
    outcomes: [
      {
        title: "Clients who see progress without a status meeting",
        description:
          "Milestones and open questions are visible, so live time is for decisions.",
      },
      {
        title: "Less 'where is that file'",
        description:
          "Engagement records outlive the consultant who created them.",
      },
      {
        title: "Partners with a pipeline they trust",
        description:
          "Origination and delivery are not two different stories in two different tools.",
      },
    ],
    extraFaqs: [
      {
        question: "Will this replace our PSA tool?",
        answer:
          "Not always. Many firms keep time/billing and add a client portal plus CRM glue. We only replace what is clearly failing.",
      },
      {
        question: "How do you handle confidentiality between clients?",
        answer:
          "Hard tenancy at engagement level. Staff see only what their role and staffing allow.",
      },
      {
        question: "Can alumni or contractors get limited access?",
        answer:
          "Yes, with expiry and a smaller permission set so a contractor cannot browse the whole firm.",
      },
    ],
  },
};

function mergeIndustry(draft: IndustryDraft): IndustryPageContent {
  const extras = extrasBySlug[draft.slug];
  if (!extras) {
    throw new Error(`Missing extra industry details for slug: ${draft.slug}`);
  }

  return {
    ...draft,
    overview: [...draft.overview, ...extras.extraOverview],
    whoWeServe: extras.whoWeServe,
    useCases: extras.useCases,
    integrations: extras.integrations,
    outcomes: extras.outcomes,
    faqs: [...draft.faqs, ...extras.extraFaqs],
  };
}

export const industries: IndustryPageContent[] = industryDrafts.map(mergeIndustry);

const bySlug = new Map(industries.map((industry) => [industry.slug, industry]));

export function getAllIndustrySlugs() {
  return industries.map((industry) => industry.slug);
}

export function getIndustryBySlug(slug: string) {
  return bySlug.get(slug);
}

export function isIndustrySlug(slug: string) {
  return bySlug.has(slug);
}

export function industryPath(slug: string) {
  return `/industries/${slug}`;
}

export function getRelatedIndustries(slug: string, limit = 3) {
  return industries.filter((industry) => industry.slug !== slug).slice(0, limit);
}
