import type { FaqItem, ImageAsset } from "@/data/landingPage";
import { projects } from "@/data/landingPage";
import { projectPath } from "@/lib/landing/constants";

export type ProjectSlide = {
  label: string;
  caption: string;
  image: ImageAsset;
};

export type ShowcaseProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  slides: ProjectSlide[];
};

export type ProjectProcedureStep = {
  step: number;
  title: string;
  description: string;
};

export type ProjectVideo = {
  title: string;
  youtubeId: string;
  poster?: ImageAsset;
};

export type ProjectWhyNeed = {
  title: string;
  paragraphs: string[];
  reasons: string[];
};

export type ProjectDetail = ShowcaseProject & {
  metaTitle: string;
  metaDescription: string;
  image: ImageAsset;
  overview: string[];
  problem: string;
  solutions: string[];
  whyNeedProduct: ProjectWhyNeed;
  procedure: ProjectProcedureStep[];
  clientFeedback: string;
  modulePictures: ProjectSlide[];
  video: ProjectVideo;
  outcome: string[];
  faqs: FaqItem[];
};

function img(src: string, alt: string, width = 1200, height = 750): ImageAsset {
  return { src, alt, width, height };
}

function faq(
  question: string,
  answer: string,
  tag: string,
  column: "left" | "right",
): FaqItem {
  return { question, answer, tag, column };
}

const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

function base(slug: string) {
  const project = bySlug[slug];
  if (!project) {
    throw new Error(`Missing landing project for slug: ${slug}`);
  }
  return project;
}

const primeLeadSlides: ProjectSlide[] = [
  {
    label: "Dashboard",
    caption:
      "Live KPIs for staff, license agents, active leads, revenue, conversion rate, and attendance.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Dashboard.jpeg",
      "Prime Lead CRM dashboard",
      1536,
      1024,
    ),
  },
  {
    label: "Leads panel",
    caption:
      "Search, qualify, assign, and track every lead with status, earnings, and ownership in one table.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Leads-Panel.jpeg",
      "Prime Lead CRM leads panel",
      1600,
      889,
    ),
  },
  {
    label: "Chat module",
    caption:
      "Team and agent messaging with conversation history kept beside the sales workflow.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Chat-Module.jpeg",
      "Prime Lead CRM chat module",
      1536,
      1024,
    ),
  },
  {
    label: "Staff management",
    caption:
      "Manage roles, agents, permissions, and performance so follow-ups never fall through.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Staff-Management.jpeg",
      "Prime Lead CRM staff management",
      1528,
      1029,
    ),
  },
  {
    label: "Training panel",
    caption:
      "Internal and external training modules with status, categories, and file attachments for agent onboarding.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Training-Pannel.jpeg",
      "Prime Lead CRM training panel",
      1600,
      874,
    ),
  },
  {
    label: "Secure login",
    caption:
      "Role-based sign-in so admins, managers, and agents only access what they need.",
    image: img(
      "/projects/prime-leads-project/Prime-Lead-Crm-Login.jpeg",
      "Prime Lead CRM login screen",
      1536,
      1024,
    ),
  },
];

const aiSchoolErpSlides: ProjectSlide[] = [
  {
    label: "Product showcase",
    caption:
      "Complete smart school management solution with AI-powered face recognition attendance, academics, finance, and multi-role portals.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Showcase.jpeg",
      "AI School ERP product showcase",
    ),
  },
  {
    label: "Administrator dashboard",
    caption:
      "System overview with student counts, fee collection, expenses, and quick access to every school module.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Administrator-Dashboard.jpeg",
      "AI School ERP administrator dashboard",
    ),
  },
  {
    label: "Public website",
    caption:
      "Marketing homepage for the educational institution with programs, admissions, and portal login access.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Homepage.jpeg",
      "AI School ERP public website homepage",
    ),
  },
  {
    label: "Role-based login",
    caption:
      "Secure sign-in for administrators, teachers, students, accountants, and parents from one branded portal.",
    image: img("/projects/ai-school-erp/AI-School-Erp-Login.jpeg", "AI School ERP login screen"),
  },
  {
    label: "Sessions & timetable",
    caption:
      "Manage academic sessions, active terms, and timetable configuration from a centralized admin view.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Sessions-Timetable.jpeg",
      "AI School ERP sessions and timetable",
    ),
  },
  {
    label: "AI attendance enrollment",
    caption:
      "Enroll student and staff faces with webcam or phone camera so recognition is ready for daily attendance.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Ai-Attendance-Enrolled.jpeg",
      "AI School ERP attendance enrollment",
    ),
  },
  {
    label: "Live monitor",
    caption:
      "Real-time face recognition with present, late, and absent status plus recent recognition history.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Live-Monitor.jpeg",
      "AI School ERP live attendance monitor",
    ),
  },
  {
    label: "AI CCTV attendance",
    caption:
      "Multi-camera CCTV feeds with live AI recognition, daily attendance summary, and recognition logs.",
    image: img(
      "/projects/ai-school-erp/AI-School-Erp-Ai-Cctv-Attendance.jpeg",
      "AI School ERP CCTV attendance",
    ),
  },
];

const travelAndTourSlides: ProjectSlide[] = [
  {
    label: "Homepage",
    caption:
      "Public travel website with hero search, popular destinations, trust badges, and package discovery for travelers.",
    image: img(
      "/projects/travel-and-tour-website/Travel-And-Tour-Website-Homepage.jpeg",
      "Travel and tour website homepage",
    ),
  },
  {
    label: "Packages listing",
    caption:
      "Filterable package catalog with destinations, duration, budget range, and package type for easy trip planning.",
    image: img(
      "/projects/travel-and-tour-website/Travel-And-Tour-Website-Packages.jpeg",
      "Travel and tour website packages listing",
    ),
  },
  {
    label: "Destination page",
    caption:
      "Rich destination detail pages with overview, attractions, packages, travel tips, and booking widgets.",
    image: img(
      "/projects/travel-and-tour-website/Travel-And-Tour-Website-Destination-Page.jpeg",
      "Travel and tour website destination page",
    ),
  },
  {
    label: "Bookings",
    caption:
      "Admin bookings table with status, destination, travel dates, payment state, and export controls.",
    image: img(
      "/projects/travel-and-tour-website/Travel-And-Tour-Website-Bookings.jpeg",
      "Travel and tour website bookings panel",
    ),
  },
  {
    label: "Booking details",
    caption:
      "Full booking view with customer info, trip summary, package details, payment status, itinerary, and timeline.",
    image: img(
      "/projects/travel-and-tour-website/Travel-And-Tour-Website-Booking-Details.jpeg",
      "Travel and tour website booking details",
    ),
  },
  {
    label: "Customers",
    caption:
      "Customer directory with contact details, country, join date, total bookings, spend, and account status.",
    image: img(
      "/projects/travel-and-tour-website/Travel-And-Tour-Website-Customers.jpeg",
      "Travel and tour website customers panel",
    ),
  },
  {
    label: "Add package",
    caption:
      "Create travel packages with pricing, availability, inclusions, highlights, itinerary days, and SEO settings.",
    image: img(
      "/projects/travel-and-tour-website/Travel-And-Tour-Website-Add-Package.jpeg",
      "Travel and tour website add package form",
    ),
  },
  {
    label: "Edit package",
    caption:
      "Update package content, gallery images, publish settings, featured status, and display order from admin.",
    image: img(
      "/projects/travel-and-tour-website/Travel-And-Tour-Website-Edit-Package.jpeg",
      "Travel and tour website edit package form",
    ),
  },
  {
    label: "Rental inquiries",
    caption:
      "Manage vacation rental inquiries with destination filters, guest details, status tracking, and export tools.",
    image: img(
      "/projects/travel-and-tour-website/Travel-And-Tour-Website-Rental-Inquiries.jpeg",
      "Travel and tour website rental inquiries",
    ),
  },
  {
    label: "Admin booking view",
    caption:
      "Dark-themed admin booking detail screen with payment summary, itinerary, and booking timeline.",
    image: img(
      "/projects/travel-and-tour-website/Travel-And-Tour-Website-Admin-Booking-Details.jpeg",
      "Travel and tour website admin booking details",
    ),
  },
];

const restaurantPosSlides: ProjectSlide[] = [
  {
    label: "System overview",
    caption:
      "A complete restaurant POS workspace for order management, inventory control, customers, analytics, and operational reporting.",
    image: img(
      "/projects/restaurant-pos/Restaurant-Pos-Overview.png",
      "Restaurant POS system overview",
      1024,
      683,
    ),
  },
  {
    label: "Dashboard",
    caption:
      "Live sales, order, customer, payment, table, and top-selling-item metrics give managers an immediate view of restaurant performance.",
    image: img(
      "/projects/restaurant-pos/Restaurant-Pos-Dashboard.png",
      "Restaurant POS dashboard",
      1024,
      683,
    ),
  },
  {
    label: "Order management",
    caption:
      "Track dine-in, takeaway, and delivery orders with customer details, item totals, kitchen handoff, and completion status.",
    image: img(
      "/projects/restaurant-pos/Restaurant-Pos-Orders.png",
      "Restaurant POS order management",
      1024,
      683,
    ),
  },
  {
    label: "Menu management",
    caption:
      "Manage menu categories, pricing, availability, item details, and images from one searchable catalog.",
    image: img(
      "/projects/restaurant-pos/Restaurant-Pos-Menu.png",
      "Restaurant POS menu management",
      1024,
      683,
    ),
  },
  {
    label: "Customer management",
    caption:
      "Maintain customer profiles, loyalty groups, visit history, total spend, contact details, and account status.",
    image: img(
      "/projects/restaurant-pos/Restaurant-Pos-Customers.png",
      "Restaurant POS customer management",
      1024,
      683,
    ),
  },
  {
    label: "Inventory management",
    caption:
      "Monitor ingredients, stock levels, unit costs, suppliers, low-stock alerts, and total inventory value.",
    image: img(
      "/projects/restaurant-pos/Restaurant-Pos-Inventory.png",
      "Restaurant POS inventory management",
      1024,
      683,
    ),
  },
  {
    label: "Employee management",
    caption:
      "Manage employee records, roles, departments, employment status, contact details, and salary information.",
    image: img(
      "/projects/restaurant-pos/Restaurant-Pos-Employees.png",
      "Restaurant POS employee management",
      1024,
      683,
    ),
  },
  {
    label: "Reports & analytics",
    caption:
      "Analyze sales, orders, customers, products, payment methods, and daily performance with export-ready reports.",
    image: img(
      "/projects/restaurant-pos/Restaurant-Pos-Reports.png",
      "Restaurant POS reports and analytics",
      1024,
      683,
    ),
  },
  {
    label: "System settings",
    caption:
      "Configure business information, taxes, payments, receipts, roles, notifications, backups, integrations, and security.",
    image: img(
      "/projects/restaurant-pos/Restaurant-Pos-Settings.png",
      "Restaurant POS system settings",
      1024,
      683,
    ),
  },
];

const travelAndToursManagementSlides: ProjectSlide[] = [
  {
    label: "System overview",
    caption:
      "An all-in-one travel platform covering bookings, customers, transport, hotels, invoices, reports, and daily agency operations.",
    image: img(
      "/projects/travel-and-tours-management/Travel-And-Tours-Management-Overview.png",
      "Travel and tours management system overview",
      1024,
      683,
    ),
  },
  {
    label: "Dashboard",
    caption:
      "Live bookings, customers, tours, revenue, status charts, upcoming packages, and quick actions for daily travel operations.",
    image: img(
      "/projects/travel-and-tours-management/Travel-And-Tours-Management-Dashboard.png",
      "Travel and tours management dashboard",
      1024,
      683,
    ),
  },
  {
    label: "Bookings",
    caption:
      "Search, filter, and manage tour bookings with traveler details, package assignment, amounts, and status tracking.",
    image: img(
      "/projects/travel-and-tours-management/Travel-And-Tours-Management-Bookings.png",
      "Travel and tours management bookings",
      1024,
      683,
    ),
  },
  {
    label: "Customers",
    caption:
      "Maintain customer profiles, contact details, country, loyalty type, spend history, booking counts, and account status.",
    image: img(
      "/projects/travel-and-tours-management/Travel-And-Tours-Management-Customers.png",
      "Travel and tours management customers",
      1024,
      683,
    ),
  },
  {
    label: "Tours & packages",
    caption:
      "Create and manage tour packages with destinations, duration, pricing, categories, availability, and booking volume.",
    image: img(
      "/projects/travel-and-tours-management/Travel-And-Tours-Management-Tours-Packages.png",
      "Travel and tours management packages",
      1024,
      683,
    ),
  },
  {
    label: "Flights",
    caption:
      "Track flight schedules, routes, airlines, seat availability, fares, delays, and booking performance in one module.",
    image: img(
      "/projects/travel-and-tours-management/Travel-And-Tours-Management-Flights.png",
      "Travel and tours management flights",
      1024,
      683,
    ),
  },
  {
    label: "Hotels",
    caption:
      "Manage hotel inventory by city, type, rating, rooms, nightly rates, booking volume, and active status.",
    image: img(
      "/projects/travel-and-tours-management/Travel-And-Tours-Management-Hotels.png",
      "Travel and tours management hotels",
      1024,
      683,
    ),
  },
  {
    label: "Transport",
    caption:
      "Coordinate coaches, vans, drivers, capacity, trip status, locations, and vehicle maintenance from one fleet view.",
    image: img(
      "/projects/travel-and-tours-management/Travel-And-Tours-Management-Transport.png",
      "Travel and tours management transport",
      1024,
      683,
    ),
  },
  {
    label: "Payments",
    caption:
      "Monitor successful, pending, failed, and refunded payments with method breakdowns and transaction history.",
    image: img(
      "/projects/travel-and-tours-management/Travel-And-Tours-Management-Payments.png",
      "Travel and tours management payments",
      1024,
      683,
    ),
  },
  {
    label: "Invoices",
    caption:
      "Create and track invoices for flights, hotels, packages, and transport with paid, pending, and overdue visibility.",
    image: img(
      "/projects/travel-and-tours-management/Travel-And-Tours-Management-Invoices.png",
      "Travel and tours management invoices",
      1024,
      683,
    ),
  },
  {
    label: "Reports",
    caption:
      "Analyze revenue, bookings, customers, destinations, and category performance with exportable operational reports.",
    image: img(
      "/projects/travel-and-tours-management/Travel-And-Tours-Management-Reports.png",
      "Travel and tours management reports",
      1024,
      683,
    ),
  },
  {
    label: "Secure login",
    caption:
      "Role-ready authentication with login and account creation so agency teams can access the platform securely.",
    image: img(
      "/projects/travel-and-tours-management/Travel-And-Tours-Management-Login.png",
      "Travel and tours management login",
      1024,
      683,
    ),
  },
];

export const projectDetails: ProjectDetail[] = [
  {
    ...(() => {
      const p = base("prime-lead-crm");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "Prime Lead CRM Case Study | Call Center CRM Software",
    metaDescription:
      "Case study: Prime Lead CRM, a call center CRM with lead management, staff roles, attendance, chat, training, and live dashboards for sales teams.",
    highlights: [
      "Unified lead pipeline",
      "Staff roles & permissions",
      "Chat, training & attendance",
      "Live conversion dashboard",
    ],
    slides: primeLeadSlides,
    overview: [
      "Prime Lead CRM is a call center CRM built for sales and operations teams that need one system to capture leads, assign ownership, coach agents, and close conversations.",
      "Instead of juggling spreadsheets, inboxes, and separate chat tools, the platform brings dashboard analytics, leads, staff management, training, chat, and secure login into a single workflow.",
      "Managers get real-time visibility into pipeline health, staff activity, revenue, and conversion. Agents get a focused workspace for follow-ups, messaging, and learning the playbook.",
      "We designed the product around day-to-day call center operations: lead intake, license agents, shift and attendance awareness, role-based permissions, and structured training so new hires ramp without slowing the floor.",
    ],
    problem:
      "The sales floor was losing leads and context across disconnected tools. Spreadsheets went stale, chat lived outside the CRM, ownership was unclear, attendance and staffing were hard to track, and new agents had no structured path to learn scripts and processes. Managers could not see conversion, workload, or follow-up gaps in one place.",
    solutions: [
      "Built a live dashboard with KPIs for staff, license agents, active leads, monthly revenue, conversion rate, and daily attendance.",
      "Delivered a leads panel to search, qualify, assign, and update every inquiry with clear status and ownership.",
      "Added staff management with roles, permissions, and performance visibility so the right people own the right leads.",
      "Connected an internal chat module so team conversations stay in the same product as the sales workflow.",
      "Shipped a training panel for internal and external modules, categories, status, and file attachments to speed agent onboarding.",
      "Implemented secure role-based login so admins, managers, and agents only see the modules they need.",
    ],
    whyNeedProduct: {
      title: "Why call centers need Prime Lead CRM",
      paragraphs: [
        "When lead data, staffing, chat, and coaching live in separate places, conversion drops and managers lose control of the floor. A purpose-built call center CRM keeps the full sales motion visible from first contact to close.",
        "Prime Lead CRM is built for teams that need speed, accountability, and coaching in the same system, not another generic CRM that ignores attendance, training, and live agent operations.",
      ],
      reasons: [
        "Stop losing leads across spreadsheets, inboxes, and side chats",
        "Assign clear ownership and permissions on every sales opportunity",
        "Track staff, attendance, revenue, and conversion on one dashboard",
        "Train new agents quickly without slowing experienced closers",
        "Keep full conversation history inside the sales workflow",
        "Give leadership one clear source of truth for pipeline health",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Discovery and workflow mapping",
        description:
          "Mapped lead intake, ownership, shifts, attendance coverage, handoffs, and coaching gaps across the sales floor.",
      },
      {
        step: 2,
        title: "CRM information architecture",
        description:
          "Designed roles, permissions, lead states, chat, training access, and dashboard KPIs on one shared data model.",
      },
      {
        step: 3,
        title: "Core module build",
        description:
          "Shipped login, dashboard, leads, and staff management first so teams could run daily operations quickly.",
      },
      {
        step: 4,
        title: "Collaboration and coaching",
        description:
          "Added chat and training with attachments, categories, and clear structure so agents stay aligned and ramp faster.",
      },
      {
        step: 5,
        title: "QA and pilot rollout",
        description:
          "Tested role boundaries, lead assignment rules, and reporting accuracy with managers and agents before launch.",
      },
      {
        step: 6,
        title: "Launch and continuous tuning",
        description:
          "Onboarded teams, refined dashboard metrics from live usage, and adjusted workflows from real floor feedback.",
      },
    ],
    clientFeedback:
      "We needed call center CRM and custom CRM software that our sales floor would actually use every day. Next Software Development Company delivered Prime Lead CRM with the care of a software development company that understands lead management software, staff management CRM, sales dashboard reporting, agent training software, and how a real software house should support a call center. Assignments are clear, conversion is visible without spreadsheets, and our agents finally work from one system built by a software company that listened to how our floor operates.",
    modulePictures: [],
    video: {
      title: "Prime Lead CRM product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One CRM for leads, staff, chat, training, and attendance visibility",
      "Clear ownership with role based access controls on every lead",
      "Faster agent onboarding through structured training modules",
      "Live dashboard tracking for pipeline, conversion, and team activity",
      "Fewer dropped follow ups from scattered tools and unclear ownership",
      "A scalable foundation ready for growing call center operations",
    ],
    faqs: [
      faq(
        "Who is Prime Lead CRM built for?",
        "Call center and sales operations teams that need lead capture, staff assignment, conversation history, training, and live performance visibility in one product.",
        "Scope",
        "left",
      ),
      faq(
        "What modules are included?",
        "Dashboard, leads panel, staff management, chat, training panel, and secure role-based login. The product is structured around day-to-day call center sales operations.",
        "Modules",
        "right",
      ),
      faq(
        "Can roles limit what staff can see?",
        "Yes. Access is role-based so agents, managers, and admins only see the modules and records they are permitted to use.",
        "Access",
        "left",
      ),
      faq(
        "Does chat stay linked to the sales workflow?",
        "Yes. The chat module keeps team conversations inside the CRM so context is not lost in separate messaging apps.",
        "Chat",
        "right",
      ),
      faq(
        "How does the training panel help new agents?",
        "Managers can publish internal and external training modules with categories, status, and file attachments so onboarding stays consistent and measurable.",
        "Training",
        "left",
      ),
      faq(
        "What does the dashboard show?",
        "Key call center metrics such as total staff, license agents, active leads, monthly revenue, conversion rate, and present-day attendance signals.",
        "Reporting",
        "right",
      ),
      faq(
        "Can leads be assigned to specific staff?",
        "Yes. The leads panel supports assignment, status tracking, and ownership so every inquiry has a clear next owner.",
        "Leads",
        "left",
      ),
      faq(
        "Is this a generic CRM or built for call centers?",
        "It is purpose-built for call center sales operations, with staffing, training, chat, and conversion visibility designed into the core workflow.",
        "Fit",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("ai-school-erp");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "AI School ERP Case Study | School Management & AI Attendance",
    metaDescription:
      "Case study: AI School ERP, a school management system with AI face recognition attendance, fees, exams, timetables, and role-based portals for admins, teachers, parents, and students.",
    highlights: [
      "AI face recognition attendance",
      "Multi-role school portals",
      "Fees, exams & timetables",
      "Webcam, mobile & CCTV support",
    ],
    slides: aiSchoolErpSlides,
    overview: [
      "AI School ERP is a complete school management platform built for institutions that need academics, administration, finance, and attendance in one secure system.",
      "The product combines a public website, administrator panel, and role-based portals for teachers, students, parents, and accountants so every stakeholder works from the right view.",
      "Its standout feature is AI-powered attendance using webcam, mobile camera, and CCTV with live monitoring, enrollment, and real-time recognition logs.",
      "Modules cover sessions, classes, subjects, homework, study materials, lesson plans, exams, fees, reports, and communication so schools can replace scattered tools with one ERP.",
    ],
    problem:
      "The school was managing attendance manually, tracking fees and academics in separate spreadsheets, and giving staff no single dashboard for sessions, classes, or student progress. Attendance was slow, error-prone, and hard to audit. Parents and teachers lacked a unified portal, and leadership had no live view of daily presence across campuses or cameras.",
    solutions: [
      "Built an administrator dashboard with student counts, fee collection, expenses, and module shortcuts for daily school operations.",
      "Delivered role-based login for administrators, teachers, students, accountants, and parents with branded portal access.",
      "Shipped academic setup for sessions, classes, sections, subjects, rooms, teachers, and timetable configuration.",
      "Implemented AI attendance enrollment so faces are captured once and linked to student or staff records.",
      "Added live monitor and AI CCTV views with real-time recognition, present/late/absent status, and recent logs.",
      "Connected fees, exams, homework, study materials, reports, and communication into one school ERP workflow.",
    ],
    whyNeedProduct: {
      title: "Why schools need AI School ERP",
      paragraphs: [
        "When attendance, fees, academics, and parent communication live in separate systems, admin teams waste hours reconciling data and errors slip through every day.",
        "AI School ERP gives leadership one platform for operations while automating attendance with face recognition that works across webcam, mobile, and CCTV feeds.",
      ],
      reasons: [
        "Replace manual registers and spreadsheet attendance with AI recognition",
        "Give admins, teachers, parents, and students the right portal for their role",
        "Manage sessions, classes, timetables, exams, and fees in one ERP",
        "Monitor live attendance across cameras with instant present/late/absent status",
        "Enroll faces once and automate daily recognition at gates and classrooms",
        "Improve reporting with real-time dashboards and attendance history",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "School workflow discovery",
        description:
          "Mapped academic structure, attendance processes, fee cycles, roles, and reporting needs across admin, teaching, and finance teams.",
      },
      {
        step: 2,
        title: "ERP architecture & roles",
        description:
          "Designed modules, permissions, session model, and portal flows for administrators, teachers, students, parents, and accountants.",
      },
      {
        step: 3,
        title: "Core academic modules",
        description:
          "Built sessions, classes, subjects, timetable tools, homework, study materials, and examination workflows first.",
      },
      {
        step: 4,
        title: "AI attendance pipeline",
        description:
          "Integrated face enrollment, live webcam monitoring, and multi-camera CCTV recognition with attendance status rules.",
      },
      {
        step: 5,
        title: "Finance & communication",
        description:
          "Connected fee collection, expenses, reports, and school communication so operations stay inside one product.",
      },
      {
        step: 6,
        title: "Pilot, training & launch",
        description:
          "Onboarded staff, validated recognition accuracy, tuned attendance rules, and launched with ongoing support from live usage.",
      },
    ],
    clientFeedback:
      "We needed school ERP software that could handle academics, fees, and attendance without juggling multiple systems. Next Software Development Company delivered AI School ERP with AI attendance, role-based portals, and the depth of a software development company that understands how schools actually run day to day.",
    modulePictures: [],
    video: {
      title: "AI School ERP product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One ERP for academics, finance, attendance, and school communication",
      "AI face recognition across webcam, mobile camera, and CCTV feeds",
      "Role-based portals for admins, teachers, students, parents, and accountants",
      "Live attendance monitoring with present, late, and absent visibility",
      "Faster admin work through sessions, timetables, exams, and fee modules",
      "Scalable foundation for multi-campus school operations",
    ],
    faqs: [
      faq(
        "Who is AI School ERP built for?",
        "Schools, academies, and educational institutions that need academics, administration, finance, and AI attendance in one secure platform.",
        "Scope",
        "left",
      ),
      faq(
        "How does AI attendance work?",
        "Staff and students enroll faces via webcam or phone camera. The system then recognizes them in live monitor or CCTV feeds and marks present, late, or absent automatically.",
        "Attendance",
        "right",
      ),
      faq(
        "Which roles can access the system?",
        "Administrators, teachers, students, accountants, and parents each get a dedicated portal with permissions matched to their responsibilities.",
        "Roles",
        "left",
      ),
      faq(
        "What modules are included?",
        "Sessions, classes, subjects, timetables, homework, study materials, lesson plans, exams, fees, reports, communication, and AI attendance.",
        "Modules",
        "right",
      ),
      faq(
        "Can attendance run on CCTV cameras?",
        "Yes. The AI CCTV view supports multiple camera feeds with live recognition, daily summaries, and recent recognition logs.",
        "CCTV",
        "left",
      ),
      faq(
        "Does the product include a public website?",
        "Yes. A branded public site supports admissions, programs, and portal login alongside the admin ERP.",
        "Website",
        "right",
      ),
      faq(
        "Can schools manage fees inside the ERP?",
        "Yes. Fee collection, outstanding balances, and monthly expenses are visible from the administrator dashboard and finance modules.",
        "Finance",
        "left",
      ),
      faq(
        "Is this only attendance software?",
        "No. It is a full school ERP with AI attendance as a core module, not a standalone attendance tool.",
        "Fit",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("travel-and-tour-website");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "Travel & Tour Website Case Study | Booking Platform",
    metaDescription:
      "Case study: Travel & Tour Website, a travel booking platform with public package search, destination pages, customer management, bookings, rental inquiries, and admin package tools.",
    highlights: [
      "Public travel booking website",
      "Package & destination pages",
      "Bookings & customer CRM",
      "Rental inquiry management",
    ],
    slides: travelAndTourSlides,
    overview: [
      "Travel & Tour Website is a complete travel platform built for agencies that need a modern public site and a powerful admin panel in one product.",
      "Travelers can browse destinations, filter packages, and start trip planning from a polished homepage, packages catalog, and detailed destination pages.",
      "Behind the scenes, admins manage packages, bookings, customers, inquiries, and rental requests from a structured dashboard built for daily operations.",
      "The system supports pricing, availability, itineraries, payment status, SEO fields, and export workflows so travel teams can run bookings without spreadsheets.",
    ],
    problem:
      "The travel agency had no unified digital presence. Package details lived in documents, inquiries came through calls and messages, and booking status was hard to track. Customers could not self-serve, and staff spent too much time answering repeat questions about destinations, pricing, and availability.",
    solutions: [
      "Built a public travel website with homepage search, destination highlights, and a filterable packages catalog.",
      "Delivered destination detail pages with attractions, travel tips, reviews, and booking call-to-actions.",
      "Shipped an admin bookings module with status filters, payment tracking, and detailed booking views.",
      "Added customer management with contact history, country, spend, bookings count, and account status.",
      "Created package creation and editing flows with images, itinerary days, inclusions, highlights, and SEO metadata.",
      "Implemented rental inquiry management with destination filters, guest details, response status, and exports.",
    ],
    whyNeedProduct: {
      title: "Why travel agencies need this platform",
      paragraphs: [
        "When package content, inquiries, and bookings are scattered across chats and spreadsheets, response times slow down and revenue leaks through missed follow-ups.",
        "A dedicated travel and tour website gives customers confidence while giving your team one system to manage packages, bookings, and inquiries professionally.",
      ],
      reasons: [
        "Let travelers browse packages and destinations online 24/7",
        "Centralize bookings, customers, and inquiries in one admin panel",
        "Publish and update packages with pricing, media, and itineraries quickly",
        "Track booking status, payments, and rental inquiries with clear workflows",
        "Reduce manual work with filters, exports, and structured package data",
        "Scale the agency brand with a polished public website and admin backend",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Travel workflow discovery",
        description:
          "Mapped how the agency sells packages, handles inquiries, confirms bookings, and manages rental requests today.",
      },
      {
        step: 2,
        title: "Website & admin architecture",
        description:
          "Designed the public site structure, package data model, booking states, and admin navigation for daily use.",
      },
      {
        step: 3,
        title: "Public website build",
        description:
          "Shipped homepage, packages listing, and destination pages with search, filters, and booking entry points.",
      },
      {
        step: 4,
        title: "Booking & customer modules",
        description:
          "Built bookings list, booking detail views, customer directory, and operational filters for the admin team.",
      },
      {
        step: 5,
        title: "Package management",
        description:
          "Added create and edit package flows with media uploads, itinerary builder, pricing, and publish controls.",
      },
      {
        step: 6,
        title: "Launch & optimization",
        description:
          "Onboarded staff, refined inquiry handling from live usage, and tuned package content for conversions.",
      },
    ],
    clientFeedback:
      "We needed a travel website and admin system that could handle packages, bookings, and inquiries without chaos. Next Software Development Company delivered a platform that looks premium to customers and gives our team the control of a real software development company behind the scenes.",
    modulePictures: [],
    video: {
      title: "Travel & Tour Website product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One platform for public travel marketing and back-office operations",
      "Filterable package catalog and rich destination pages for travelers",
      "Structured booking management with payment and itinerary visibility",
      "Customer CRM with spend, status, and booking history in one place",
      "Faster package publishing with SEO-ready admin forms",
      "Rental inquiry tracking with clear status and export support",
    ],
    faqs: [
      faq(
        "Who is Travel & Tour Website built for?",
        "Travel agencies, tour operators, and vacation rental businesses that need a public booking site plus admin tools for packages, customers, and inquiries.",
        "Scope",
        "left",
      ),
      faq(
        "Does it include a public-facing website?",
        "Yes. The platform includes homepage search, package listings, destination pages, and booking call-to-actions for travelers.",
        "Website",
        "right",
      ),
      faq(
        "Can admins manage packages?",
        "Yes. Admins can create and edit packages with pricing, availability, images, itinerary days, inclusions, highlights, and SEO fields.",
        "Packages",
        "left",
      ),
      faq(
        "How are bookings handled?",
        "Bookings are managed in an admin panel with filters, detail views, payment status, itinerary, notes, and booking timeline.",
        "Bookings",
        "right",
      ),
      faq(
        "Is customer management included?",
        "Yes. The customer module tracks contact details, country, join date, total bookings, spend, and account status.",
        "Customers",
        "left",
      ),
      faq(
        "Can the system handle rental inquiries?",
        "Yes. Rental inquiries include destination, check-in dates, guest count, status tracking, and export support.",
        "Rentals",
        "right",
      ),
      faq(
        "Does the packages page support filters?",
        "Yes. Travelers can filter by destination, duration, budget, and package type from the public packages catalog.",
        "Filters",
        "left",
      ),
      faq(
        "Is this only a website or a full platform?",
        "It is a full travel platform with both the public website and the admin system needed to run bookings and operations.",
        "Fit",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("restaurant-pos");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "Restaurant POS Case Study | Restaurant Management System",
    metaDescription:
      "Case study: Restaurant POS, an all-in-one point-of-sale and restaurant management system for orders, menus, customers, inventory, staff, settings, and reporting.",
    highlights: [
      "Multi-channel order management",
      "Menu & inventory control",
      "Customer & employee records",
      "Real-time sales analytics",
    ],
    slides: restaurantPosSlides,
    overview: [
      "Restaurant POS is an all-in-one point-of-sale and management platform built to keep front-of-house, kitchen, inventory, customer, and back-office operations connected.",
      "Teams can handle dine-in, takeaway, and delivery orders while maintaining menus, customer profiles, table status, employee records, and stock from one consistent workspace.",
      "Managers get live visibility into sales, order volume, average order value, payment methods, popular items, customer activity, and inventory health.",
      "Flexible settings for taxes, receipts, payments, permissions, notifications, backups, and integrations allow the system to fit the restaurant instead of forcing staff into disconnected tools.",
    ],
    problem:
      "Restaurant operations were fragmented across a basic billing tool, paper tickets, spreadsheets, and manual stock checks. Staff could not see order status consistently, menu updates took too long, inventory shortages appeared without warning, and managers lacked reliable sales, customer, and employee reporting.",
    solutions: [
      "Built a centralized dashboard for sales, orders, customers, payments, table status, and best-selling items.",
      "Delivered an order workflow for dine-in, takeaway, and delivery with itemized bills, kitchen handoff, and status tracking.",
      "Created menu management for categories, prices, availability, item images, and detailed product information.",
      "Added customer and loyalty records with spend, visits, order history, contact details, and account status.",
      "Implemented inventory tracking with stock quantities, units, costs, suppliers, valuation, and low-stock alerts.",
      "Connected employee management, operational reports, exports, permissions, payments, taxes, backups, and security settings.",
    ],
    whyNeedProduct: {
      title: "Why restaurants need an integrated POS",
      paragraphs: [
        "When orders, menus, stock, customers, and reporting live in separate places, service slows down and small errors turn into lost revenue, wasted ingredients, and poor guest experiences.",
        "Restaurant POS gives every team a shared operational system while providing owners with the live information they need to control costs and make faster decisions.",
      ],
      reasons: [
        "Process dine-in, takeaway, and delivery orders from one workflow",
        "Keep menu prices, categories, and availability accurate everywhere",
        "Prevent shortages with live stock levels and low-stock alerts",
        "Build repeat business with customer profiles and loyalty insights",
        "Manage employee roles, departments, and status centrally",
        "Track sales, payments, orders, and product performance in real time",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Restaurant workflow discovery",
        description:
          "Mapped ordering, kitchen handoff, table service, menu updates, stock control, staffing, and end-of-day reporting.",
      },
      {
        step: 2,
        title: "POS architecture & roles",
        description:
          "Designed the order lifecycle, shared restaurant data model, navigation, permissions, and manager workflows.",
      },
      {
        step: 3,
        title: "Orders & menu build",
        description:
          "Built multi-channel ordering, itemized billing, kitchen actions, menu categories, pricing, and availability controls.",
      },
      {
        step: 4,
        title: "Operations modules",
        description:
          "Connected customers, loyalty data, inventory, employees, tables, and reservations to the core POS.",
      },
      {
        step: 5,
        title: "Reporting & configuration",
        description:
          "Added analytics, exports, tax and payment settings, receipts, notifications, backups, integrations, and security.",
      },
      {
        step: 6,
        title: "Testing, training & launch",
        description:
          "Validated peak-service workflows, trained staff by role, migrated operational data, and refined the system after launch.",
      },
    ],
    clientFeedback:
      "We needed more than a billing screen. Next Software Development Company delivered a complete restaurant POS that connects orders, menu management, customers, inventory, employees, and reporting. Our team works faster, managers can see what is happening in real time, and we finally have one system for daily restaurant operations.",
    modulePictures: [],
    video: {
      title: "Restaurant POS product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One connected platform for front-of-house and back-office operations",
      "Faster order processing across dine-in, takeaway, and delivery",
      "Better stock control through live quantities and shortage alerts",
      "Clear sales, payment, customer, and product performance reporting",
      "Consistent employee, menu, customer, and business configuration",
      "A scalable operational foundation for growing restaurant teams",
    ],
    faqs: [
      faq(
        "Who is Restaurant POS built for?",
        "Restaurants, cafés, quick-service businesses, and hospitality teams that need ordering, menu, inventory, customer, employee, and reporting tools in one platform.",
        "Scope",
        "left",
      ),
      faq(
        "Which order types does the system support?",
        "The order workflow supports dine-in, takeaway, and delivery, with status tracking, customer and table details, itemized totals, and kitchen actions.",
        "Orders",
        "right",
      ),
      faq(
        "Can staff manage menu availability?",
        "Yes. Staff can manage categories, prices, descriptions, images, variants, and active or inactive availability for each menu item.",
        "Menu",
        "left",
      ),
      faq(
        "Does Restaurant POS track inventory?",
        "Yes. Inventory includes stock quantities, units, costs, suppliers, total value, and low-stock or out-of-stock alerts.",
        "Inventory",
        "right",
      ),
      faq(
        "Is customer and loyalty management included?",
        "Yes. Customer profiles include contact details, loyalty groups, total spend, visit counts, order history, and account status.",
        "Customers",
        "left",
      ),
      faq(
        "What reports are available?",
        "Managers can review sales, orders, customers, items sold, average order value, payment methods, category analysis, taxes, discounts, and refunds.",
        "Reports",
        "right",
      ),
      faq(
        "Can access be limited by employee role?",
        "Yes. User roles and permissions can restrict access so employees only see the modules and actions required for their responsibilities.",
        "Access",
        "left",
      ),
      faq(
        "Can business and payment settings be customized?",
        "Yes. The settings area covers business details, taxes, service charges, payment methods, receipts, invoices, notifications, backups, integrations, and security.",
        "Settings",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("travel-and-tours-management");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "Travel & Tours Management Case Study | Travel Agency Software",
    metaDescription:
      "Case study: Travel & Tours Management, an all-in-one travel agency system for bookings, packages, flights, hotels, transport, payments, invoices, and reporting.",
    highlights: [
      "Bookings & package management",
      "Flights, hotels & transport",
      "Payments & invoicing",
      "Revenue & destination reports",
    ],
    slides: travelAndToursManagementSlides,
    overview: [
      "Travel & Tours Management is an all-in-one operations platform built for travel agencies that need bookings, customers, packages, flights, hotels, transport, billing, and reporting in one system.",
      "Teams can create packages, confirm reservations, manage traveler records, and coordinate flights, hotels, and ground transport without switching between disconnected tools.",
      "Finance and operations stay connected through payments, invoices, overdue tracking, refunds, and live dashboards for revenue, booking status, and destination performance.",
      "Secure login and role-ready access give agency staff a shared workspace designed for daily travel operations and growth.",
    ],
    problem:
      "The travel agency was running bookings, hotel lists, transport schedules, invoices, and customer records across spreadsheets, chat messages, and separate tools. Package updates were slow, payment status was hard to track, and managers lacked a clear view of revenue, destination demand, and operational bottlenecks.",
    solutions: [
      "Built a live dashboard for bookings, customers, tours, revenue, status charts, upcoming packages, and quick actions.",
      "Delivered booking management with filters, traveler details, package assignment, amounts, and confirmed, pending, cancelled, or refunded status.",
      "Added customer CRM with contact details, country, loyalty type, spend, booking history, and active or inactive status.",
      "Created tours and packages management for destinations, duration, pricing, categories, availability, and booking volume.",
      "Connected flights, hotels, and transport modules for schedules, inventory, drivers, capacity, rates, and trip status.",
      "Implemented payments, invoices, refunds, overdue tracking, analytics, exports, and secure login for agency teams.",
    ],
    whyNeedProduct: {
      title: "Why travel agencies need this management system",
      paragraphs: [
        "When bookings, transport, hotels, invoices, and customer data live in different places, follow-ups get missed and revenue leaks through slow confirmations and unclear payment status.",
        "Travel & Tours Management gives agencies one operational system so sales, operations, and finance teams can work from the same live source of truth.",
      ],
      reasons: [
        "Centralize tour bookings, packages, and customer records",
        "Coordinate flights, hotels, and ground transport in one workflow",
        "Track payments, invoices, refunds, and overdue balances clearly",
        "See revenue, booking status, and destination demand in real time",
        "Reduce manual spreadsheet work across sales and operations teams",
        "Scale the agency with a secure, multi-module travel platform",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Travel operations discovery",
        description:
          "Mapped how the agency sold packages, confirmed bookings, coordinated transport, billed customers, and reported performance.",
      },
      {
        step: 2,
        title: "Platform architecture",
        description:
          "Designed modules, booking states, package data, payment flows, and role-ready navigation for daily agency use.",
      },
      {
        step: 3,
        title: "Bookings & packages build",
        description:
          "Shipped dashboard, bookings, customers, and tours and packages first so sales teams could run core operations quickly.",
      },
      {
        step: 4,
        title: "Travel inventory modules",
        description:
          "Connected flights, hotels, and transport with inventory, schedules, drivers, rates, and status tracking.",
      },
      {
        step: 5,
        title: "Finance & reporting",
        description:
          "Added payments, invoices, refunds, overdue alerts, analytics charts, and exportable operational reports.",
      },
      {
        step: 6,
        title: "Launch & optimization",
        description:
          "Onboarded staff, validated booking and billing workflows, and tuned dashboards from live agency usage.",
      },
    ],
    clientFeedback:
      "We needed one system for bookings, packages, hotels, transport, invoices, and reporting instead of scattered tools. Next Software Development Company delivered Travel & Tours Management with the depth of a software development company that understands how travel agencies actually operate day to day.",
    modulePictures: [],
    video: {
      title: "Travel & Tours Management product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One platform for bookings, packages, customers, and travel inventory",
      "Faster reservation handling with clear booking and payment status",
      "Connected flights, hotels, and transport operations in one workspace",
      "Cleaner invoicing with paid, pending, overdue, and refund visibility",
      "Live reporting for revenue, destinations, and booking performance",
      "A scalable foundation for growing travel agency operations",
    ],
    faqs: [
      faq(
        "Who is Travel & Tours Management built for?",
        "Travel agencies, tour operators, and hospitality businesses that need bookings, packages, flights, hotels, transport, invoicing, and reporting in one platform.",
        "Scope",
        "left",
      ),
      faq(
        "What modules are included?",
        "Dashboard, bookings, customers, tours and packages, flights, hotels, transport, payments, invoices, reports, and secure login.",
        "Modules",
        "right",
      ),
      faq(
        "Can the system manage tour packages?",
        "Yes. Packages include destinations, duration, pricing, categories, availability, booking counts, and package status.",
        "Packages",
        "left",
      ),
      faq(
        "Does it support flights and hotels?",
        "Yes. Dedicated modules track flight schedules, routes, airlines, hotel inventory, ratings, rates, rooms, and booking volume.",
        "Inventory",
        "right",
      ),
      faq(
        "Can transport fleets be managed?",
        "Yes. Transport covers vehicles, drivers, capacity, locations, trip assignments, availability, and maintenance alerts.",
        "Transport",
        "left",
      ),
      faq(
        "How are payments and invoices handled?",
        "Payments track success, pending, failed, and refunded transactions. Invoices cover flights, hotels, packages, and transport with paid, pending, and overdue status.",
        "Finance",
        "right",
      ),
      faq(
        "What reporting is available?",
        "Managers can review revenue trends, booking status, revenue by category, top destinations, and generated operational reports.",
        "Reports",
        "left",
      ),
      faq(
        "Is this only a public travel website?",
        "No. It is a full travel agency management system focused on operations, inventory, billing, and reporting.",
        "Fit",
        "right",
      ),
    ],
  },
].map((project) => ({
  ...project,
  modulePictures: project.slides,
}));

export const showcaseProjects: ShowcaseProject[] = projectDetails
  .filter((project) => project.slides.length > 0)
  .map(({ slug, title, category, description, highlights, slides }) => ({
    slug,
    title,
    category,
    description,
    highlights,
    slides,
  }));

export function getAllProjectSlugs(): string[] {
  return projectDetails.map((project) => project.slug);
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug);
}

export function projectDetailPath(slug: string): string {
  return `${projectPath}/${slug}`;
}

export const projectPageMeta = {
  title: "Our Work & Software Projects",
  description:
    "Explore custom software, SaaS, ERP, CRM, and mobile apps we've designed and shipped for clients worldwide.",
} as const;
