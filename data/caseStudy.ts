import type { FaqItem, ImageAsset } from "@/data/landingPage";
import { projects } from "@/data/landingPage";
import { caseStudyPath, contactPath } from "@/lib/landing/constants";
import { undashList, undashText } from "@/lib/case-study-text";

/** Visual slides shared with project pages (passed in to avoid circular imports). */
export type CaseStudySlide = {
  label: string;
  caption: string;
  image: ImageAsset;
};

export type CaseStudyProjectVisuals = {
  slug: string;
  title: string;
  image: ImageAsset;
  slides: CaseStudySlide[];
};

export type ProjectTechnologyStack = {
  frontend: string[];
  backend: string[];
  database: string[];
  cloud?: string[];
};

export type ProjectCaseStudyMeta = {
  clientName: string;
  cardTitle: string;
  industry: string;
  duration: string;
  technologiesUsed: string[];
  technologyStack: ProjectTechnologyStack;
  keyFeatures: string[];
  solutionApproach: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  cardTitle: string;
  clientName: string;
  category: string;
  status: string;
  problem: string;
  solution: string;
  summary: string;
  technologies: string[];
  outcomes: string[];
  image: ImageAsset;
};

const webStack = (
  extras: Partial<ProjectTechnologyStack> = {},
): ProjectTechnologyStack => ({
  frontend: extras.frontend ?? [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  backend: extras.backend ?? ["Node.js", "REST APIs"],
  database: extras.database ?? ["PostgreSQL"],
  cloud: extras.cloud ?? ["Vercel", "Cloud hosting"],
});

export const projectCaseStudyMeta: Record<string, ProjectCaseStudyMeta> = {
  "prime-lead-crm": {
    clientName: "Prime Leads",
    cardTitle:
      "Unifying Lead Ownership and Sales Visibility for a Call Center Floor",
    industry: "Call Center, Sales Operations",
    duration: "12 weeks",
    technologiesUsed: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Role-based access",
    ],
    technologyStack: webStack({
      backend: ["Node.js", "REST APIs", "Role-based auth"],
    }),
    keyFeatures: [
      "Live sales and conversion dashboard",
      "Lead capture, assignment, and pipeline tracking",
      "Staff roles, permissions, and attendance visibility",
      "In-app team chat beside the sales workflow",
      "Structured agent training modules",
      "Secure role-based login for admins, managers, and agents",
    ],
    solutionApproach:
      "We mapped the Prime Leads call-center floor, lead intake, ownership, coaching, and attendance, then shipped Prime Lead CRM so managers and agents run daily sales from one workspace instead of spreadsheets and side chats.",
  },
  "ai-school-erp": {
    clientName: "BrightPath Academy Network",
    cardTitle:
      "Modernizing School Operations with AI Attendance and Unified Portals",
    industry: "Education, School Administration",
    duration: "16 weeks",
    technologiesUsed: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "AI face recognition",
    ],
    technologyStack: webStack({
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "REST APIs", "AI attendance services"],
      database: ["PostgreSQL"],
      cloud: ["Cloud hosting", "Camera / CCTV integrations"],
    }),
    keyFeatures: [
      "AI face recognition attendance via webcam, mobile, and CCTV",
      "Admin, teacher, parent, and student portals",
      "Fees, exams, timetable, and academics in one ERP",
      "Live attendance monitoring and recognition logs",
      "Role-based access across school operations",
      "Central student and teacher management",
    ],
    solutionApproach:
      "We replaced paper registers and disconnected school tools with one ERP, starting with role-based portals and layering AI attendance so attendance, fees, and academics stay visible in real time.",
  },
  "travel-and-tour-website": {
    clientName: "Horizon Trails Travel Co",
    cardTitle: "Launching a Booking Ready Travel Website with Admin Control",
    industry: "Travel, Tourism, Booking",
    duration: "10 weeks",
    technologiesUsed: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Admin CMS",
    ],
    technologyStack: webStack(),
    keyFeatures: [
      "Public homepage search and package catalog",
      "Destination detail pages with booking widgets",
      "Admin package create and edit workflows",
      "Booking and customer management",
      "Rental inquiry handling",
      "SEO-ready package and destination pages",
    ],
    solutionApproach:
      "We built a public booking website and admin panel together so travelers can browse packages while the agency manages destinations, bookings, customers, and rental inquiries in one platform.",
  },
  "restaurant-pos": {
    clientName: "Harbor Table Hospitality",
    cardTitle:
      "Streamlining Restaurant Orders Inventory and Front of House Speed",
    industry: "Hospitality, Restaurant Operations",
    duration: "12 weeks",
    technologiesUsed: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "POS workflows",
    ],
    technologyStack: webStack({
      backend: ["Node.js", "REST APIs", "POS order services"],
    }),
    keyFeatures: [
      "Order and table management",
      "Menu and inventory control",
      "Customer and employee modules",
      "Sales and operations reporting",
      "Day-to-day business settings",
      "Unified restaurant dashboard",
    ],
    solutionApproach:
      "We designed the POS around front-of-house speed and back-office control, connecting orders, menus, inventory, staff, and reports so restaurant teams run service from one system.",
  },
  "travel-and-tours-management": {
    clientName: "Atlas Journeys Operations",
    cardTitle: "Centralizing Tour Bookings Flights Hotels and Payments",
    industry: "Travel, Tour Operations",
    duration: "14 weeks",
    technologiesUsed: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Invoicing",
    ],
    technologyStack: webStack({
      backend: ["Node.js", "REST APIs", "Payment & invoice services"],
    }),
    keyFeatures: [
      "Bookings and customer management",
      "Tours and packages administration",
      "Flights, hotels, and transport modules",
      "Payments and invoices",
      "Agent and business reporting",
      "Secure operations login",
    ],
    solutionApproach:
      "We unified tour operations, packages, bookings, flights, hotels, transport, payments, and invoices, into one management system so agencies stop juggling disconnected tools.",
  },
  "hotel-management-system": {
    clientName: "Grand Meridian Hotels",
    cardTitle:
      "Connecting Reservations Housekeeping Finance and Hotel Security",
    industry: "Hospitality, Hotels",
    duration: "16 weeks",
    technologiesUsed: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "AI attendance",
      "AI camera monitoring",
    ],
    technologyStack: webStack({
      backend: ["Node.js", "REST APIs", "AI attendance & camera services"],
      cloud: ["Cloud hosting", "CCTV / camera integrations"],
    }),
    keyFeatures: [
      "Reservations and front-desk check-in",
      "Rooms and housekeeping status",
      "Guest, finance, and reporting modules",
      "Employee management",
      "AI attendance tracking",
      "AI camera security monitoring",
    ],
    solutionApproach:
      "We mapped hotel front desk, housekeeping, finance, and security needs into one HMS, then added AI attendance and camera monitoring for operational and safety visibility.",
  },
  "royal-pos": {
    clientName: "Royal Retail Collective",
    cardTitle:
      "Powering Multi Branch Retail Checkout Inventory and AI Monitoring",
    industry: "Retail, Point of Sale",
    duration: "14 weeks",
    technologiesUsed: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "AI camera monitoring",
    ],
    technologyStack: webStack({
      backend: ["Node.js", "REST APIs", "POS & inventory services"],
      cloud: ["Cloud hosting", "AI camera integrations"],
    }),
    keyFeatures: [
      "Fast retail checkout and sale details",
      "Inventory and product management",
      "Customer and multi-branch operations",
      "Sales and business reporting",
      "Live AI camera monitoring",
      "Store settings and secure sign-in",
    ],
    solutionApproach:
      "We built an AI-ready retail POS that connects checkout, inventory, customers, and reporting, then layered live camera monitoring for store operations and loss prevention.",
  },
  "hospital-management-system": {
    clientName: "CareBridge Medical Group",
    cardTitle: "Unifying Appointments Patients Billing and Doctor Workflows",
    industry: "Healthcare, Hospitals & Clinics",
    duration: "16 weeks",
    technologiesUsed: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Doctor portal",
    ],
    technologyStack: webStack({
      backend: ["Node.js", "REST APIs", "Billing & pharmacy services"],
    }),
    keyFeatures: [
      "Appointments, patients, and doctors",
      "Departments and bed management",
      "Billing, payments, and pharmacy",
      "Hospital reports and dashboards",
      "Dedicated doctor portal",
      "Users, roles, and system settings",
    ],
    solutionApproach:
      "We delivered a full hospital operations platform covering appointments, clinical workflows, beds, billing, pharmacy, and a doctor portal so staff work from one secure system.",
  },
  "cash-management-system": {
    clientName: "Northline Finance Ops",
    cardTitle: "Giving Finance Teams Clear Cash Flow Control and Audit Trails",
    industry: "Finance, Cash Operations",
    duration: "10 weeks",
    technologiesUsed: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Audit trails",
    ],
    technologyStack: webStack({
      backend: ["Node.js", "REST APIs", "Transaction & audit services"],
    }),
    keyFeatures: [
      "Multi-account cash overview",
      "Income, expense, and transfer tracking",
      "Categories, payees, and budgets",
      "Cash-flow reporting",
      "Full audit trails",
      "Secure role-based sign-in",
    ],
    solutionApproach:
      "We centralized accounts, transactions, budgets, and reporting so finance teams control cash flow with clear visibility and audit history instead of scattered ledgers.",
  },
  "hr-management-software": {
    clientName: "PeopleFirst Workforce Ltd",
    cardTitle:
      "Running Hire to Exit HR Payroll and Performance in One Platform",
    industry: "Human Resources, Workforce",
    duration: "16 weeks",
    technologiesUsed: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "AI HR workflows",
    ],
    technologyStack: webStack({
      backend: ["Node.js", "REST APIs", "Payroll & ATS services"],
    }),
    keyFeatures: [
      "Employee and organization management",
      "Attendance and leave workflows",
      "Payroll processing",
      "Recruitment and onboarding (ATS)",
      "Performance, training, assets, and expenses",
      "Exit management end to end",
    ],
    solutionApproach:
      "We built an AI-assisted HRMS covering the full employee lifecycle, hire to exit, so HR teams run attendance, payroll, recruitment, and performance from one platform.",
  },
  "medicine-inventory-system": {
    clientName: "MediStock Pharmacy Chain",
    cardTitle:
      "Improving Pharmacy Stock Accuracy Expiry Control and Purchasing",
    industry: "Healthcare, Pharmacy Inventory",
    duration: "10 weeks",
    technologiesUsed: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Batch & expiry tracking",
    ],
    technologyStack: webStack({
      backend: ["Node.js", "REST APIs", "Inventory & purchase services"],
    }),
    keyFeatures: [
      "Medicine catalog and stock control",
      "Supplier and purchase order management",
      "Stock in, stock out, and adjustments",
      "Batch and expiry tracking",
      "Low-stock and valuation reports",
      "Pharmacy inventory dashboard",
    ],
    solutionApproach:
      "We designed inventory around pharmacy realities, batches, expiry, suppliers, and purchase orders, so stock movement stays accurate and near-expiry losses are caught early.",
  },
  "e-learning-portal": {
    clientName: "EduLearn Training Institute",
    cardTitle:
      "Delivering Courses Enrollments Assessments and Attendance in One LMS",
    industry: "Education, E-Learning, LMS",
    duration: "12 weeks",
    technologiesUsed: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "LMS workflows",
    ],
    technologyStack: webStack({
      backend: ["Node.js", "REST APIs", "Enrollment & assessment services"],
    }),
    keyFeatures: [
      "Admin and instructor dashboards",
      "Courses, categories, and lessons",
      "Enrollments and attendance",
      "Assignments and quizzes",
      "User and role management",
      "System settings and certificate-ready operations",
    ],
    solutionApproach:
      "We built EduLearn as one LMS for admins and instructors, courses, enrollments, lessons, assessments, and attendance, so learning teams stop running training across emails and folders.",
  },
};

type CaseStudyNarrative = {
  metaTitle: string;
  metaDescription: string;
  /** Hero lede, business outcome framing, not product brochure copy */
  lede: string;
  /** Short tags shown under the hero */
  highlights: string[];
  overview: string[];
  /** Detailed business problem, shown as multiple paragraphs */
  challenge: string[];
  approach: string;
  approachPoints: string[];
  /** Business results, distinct from project “outcome” feature list */
  outcomes: string[];
  /** What we learned / decisions that shaped delivery */
  insights: string[];
  clientQuote: string;
  faqs: FaqItem[];
};

function faq(
  question: string,
  answer: string,
  tag: string,
  column: "left" | "right",
): FaqItem {
  return { question, answer, tag, column };
}

/**
 * Unique case-study copy per engagement.
 * Intentionally different from `/projects/[slug]` product pages (overview, modules, FAQs).
 */
const caseStudyNarratives: Record<string, CaseStudyNarrative> = {
  "prime-lead-crm": {
    metaTitle: "Prime Lead CRM Case Study | Call Center Lead Ownership",
    metaDescription:
      "Case study: how we built Prime Lead CRM for Prime Leads, replacing spreadsheet lead tracking with one call center CRM for ownership, coaching, attendance, and live conversion visibility in 12 weeks.",
    lede: "Prime Leads was closing deals, but leadership could not see who owned which lead or why conversion slipped mid-shift. This engagement built Prime Lead CRM so their sales floor runs from one source of truth.",
    highlights: [
      "12-week engagement",
      "Prime Leads floor discovery",
      "Role-based CRM rollout",
      "Live conversion KPIs",
    ],
    overview: [
      "The brief was not “build another generic CRM.” Prime Leads needed Prime Lead CRM: a sales operating system that mirrored how their call center already worked, including licensed agents, shift coverage, coaching, and fast handoffs.",
      "We spent the first two weeks shadowing Prime Leads managers and agents, mapping every place a lead could disappear: WhatsApp threads, shared sheets, and personal notebooks.",
      "Delivery focused on decision clarity: every inquiry got an owner, every role got a bounded workspace, and every morning standup started from the same Prime Lead CRM dashboard.",
      "The result is a call-center-shaped CRM the Prime Leads team actually opens first thing, not a generic pipeline tool they work around.",
    ],
    challenge: [
      "At Prime Leads, lead ownership was tribal knowledge. Agents on overlapping shifts chased the same prospects because WhatsApp threads, shared sheets, and personal notebooks never agreed on who had spoken last. Managers spent evenings rebuilding conversion reports by hand while the floor kept selling from incomplete lists.",
      "Day to day, licensed agents lost time confirming assignment before they dialed. Team leads could not see which pipeline stages stalled mid-shift, so coaching arrived as hallway advice instead of evidence tied to a specific lead. New hires shadowed veterans without a checklist, which stretched ramp time and diluted script consistency.",
      "Prior tools failed because generic CRM labels did not match Prime Leads call scripts, and side chats never enforced a single owner. Spreadsheets updated after the fact, so morning standups argued about whose file was current. Attendance and licensed-agent counts lived apart from conversion, so staffing decisions were gut feel.",
      "What was at stake was not only monthly totals that still looked acceptable. Duplicate outreach damaged prospect trust, managers burned hours on reconciliation instead of coaching, and leadership lacked a shared vocabulary for pipeline stages across shifts. Without one source of truth, scaling the floor would multiply the same chaos.",
      "Prime Leads needed Prime Lead CRM to make every inquiry have an owner, every role a bounded workspace, and every standup start from the same live dashboard. Conversion had to become visible in daily operations, not only in end-of-month summaries.",
    ],
    approach:
      "We treated Prime Lead CRM as a floor redesign for Prime Leads: intake states, assignment rules, attendance signals, and coaching content were modeled together so the product matched the shift, not the other way around.",
    approachPoints: [
      "Ran discovery workshops with Prime Leads managers and top closers to define lead states that match real conversations.",
      "Prioritized dashboard and assignment before chat so ownership shipped in the first Prime Lead CRM release.",
      "Embedded training next to the pipeline so coaching is part of selling, not a separate LMS login.",
      "Piloted with one Prime Leads team for two weeks, then rolled out role packs for agents, team leads, and admins.",
    ],
    outcomes: [
      "Prime Leads managers review pipeline health in one morning view instead of rebuilding spreadsheet reports",
      "Lead assignment disputes dropped because ownership is visible on every Prime Lead CRM record",
      "New agents ramp with structured modules instead of shadowing without a checklist",
      "Team chat stays beside the deal, cutting context loss across side apps",
      "Attendance and licensed-agent counts sit next to conversion so staffing decisions are evidence-based",
      "Leadership finally has a shared vocabulary for pipeline stages across shifts",
    ],
    insights: [
      "Call centers reject generic CRM labels; states must sound like their scripts.",
      "Shipping chat before clear ownership would have amplified chaos, not collaboration.",
      "Training adoption rose when modules appeared inside the daily Prime Lead CRM workspace.",
    ],
    clientQuote:
      "For the first time our morning huddle starts from the same Prime Lead CRM screen. Owners are clear, coaching is attached to the work, and we stopped arguing about whose spreadsheet was right.",
    faqs: [
      faq(
        "How is this case study different from the product page?",
        "This page covers the Prime Leads business problem, engagement decisions, and outcomes for Prime Lead CRM. The project page documents modules, procedure, and product FAQs for buyers evaluating the software itself.",
        "Scope",
        "left",
      ),
      faq(
        "How long did discovery take?",
        "Two weeks of floor observation and workshops with Prime Leads before the first build sprint, so lead states and roles matched real shift work.",
        "Process",
        "right",
      ),
      faq(
        "What changed for managers first?",
        "A live Prime Lead CRM dashboard and assignment rules shipped early so leadership could trust ownership before we expanded chat and training.",
        "Rollout",
        "left",
      ),
      faq(
        "Who was involved from the Prime Leads side?",
        "Managers, team leads, and top closers joined discovery; admins defined role packs. Agents from the pilot team validated lead states against real conversations.",
        "Roles",
        "right",
      ),
      faq(
        "What was the overall timeline?",
        "The engagement ran 12 weeks: two weeks of discovery, then build sprints with a two-week pilot before wider role-pack rollout across the floor.",
        "Timeline",
        "left",
      ),
      faq(
        "Were WhatsApp or email integrated?",
        "We focused on ownership inside Prime Lead CRM first. Side-channel capture was mapped in discovery; deeper messaging integrations can follow once assignment is trusted.",
        "Integrations",
        "right",
      ),
      faq(
        "How was agent training handled?",
        "Structured training modules shipped inside the CRM workspace so coaching sits beside the pipeline. Pilot agents ramped with checklists instead of shadowing alone.",
        "Training",
        "left",
      ),
      faq(
        "Can a similar engagement fit a smaller sales team?",
        "Yes. We scale role packs and modules to team size while keeping the same ownership and visibility principles used for Prime Leads.",
        "Fit",
        "right",
      ),
      faq(
        "How did you measure outcomes?",
        "Prime Leads tracked morning report rebuild time, assignment dispute frequency, and new-agent ramp against the pre-CRM baseline from discovery workshops.",
        "Outcomes",
        "left",
      ),
      faq(
        "Was historical lead data migrated?",
        "Active pipeline and ownership-critical records were mapped into Prime Lead CRM with manager sign-off. Stale sheet archives stayed reference-only where they added noise.",
        "Migration",
        "right",
      ),
      faq(
        "What support continued after launch?",
        "After floor-wide rollout we stayed available for role-pack tweaks, coaching module updates, and dashboard KPI refinements based on standup feedback.",
        "Support",
        "left",
      ),
      faq(
        "What engagement model did Prime Leads use?",
        "A fixed 12-week delivery with discovery, pilot, and phased role packs. Scope stayed tied to call-center ownership, attendance visibility, and conversion dashboards.",
        "Engagement",
        "right",
      ),
    ],
  },

  "ai-school-erp": {
    metaTitle: "AI School ERP Case Study | Attendance & Portal Unification",
    metaDescription:
      "Case study of modernizing a school network with AI attendance, unified portals, and shared academics so admins, teachers, and parents work from one system.",
    lede: "BrightPath Academy Network was running attendance, fees, and parent updates across paper registers and disconnected tools. We replaced that patchwork with one ERP anchored on AI attendance.",
    highlights: [
      "16-week engagement",
      "Multi-campus readiness",
      "AI attendance first",
      "Role-based portals",
    ],
    overview: [
      "School leaders wanted fewer morning bottlenecks, not a longer feature checklist. Parents needed timely updates; teachers needed one place for classes, exams, and attendance.",
      "We sequenced delivery around trust: accurate attendance first, then fees and academics, then richer parent and student experiences.",
      "AI recognition was introduced carefully with human override paths so staff stayed in control during the transition from paper registers.",
      "Today BrightPath runs daily school operations from portals that match each role instead of forcing everyone through a single overloaded admin screen.",
    ],
    challenge: [
      "BrightPath Academy Network ran attendance, fees, and parent updates across paper registers and disconnected tools. Campus admins spent the first hour of each morning reconciling who was present before teachers could start lessons with confidence.",
      "Parents heard different answers depending on who they called at the front office. Fee follow-ups were manual lists that lagged classroom reality, so billing conversations often started from incomplete rosters. Teachers juggled class lists, exam marks, and attendance in separate places.",
      "Prior school tools failed because they forced everyone through overloaded admin screens or treated AI attendance as a bolt-on without human override. Paper registers stayed late; recognition without audit paths made staff distrust the numbers. Multi-campus leadership could not see patterns across sites.",
      "What was at stake was instructional time, parent trust, and the ability to grow the network without multiplying morning bottlenecks. Incomplete attendance also poisoned fee and academic records, creating disputes that absorbed leadership attention.",
      "BrightPath needed one ERP with role-based portals and carefully introduced AI attendance so admins, teachers, parents, and students shared the same student truth in real time.",
    ],
    approach:
      "We built a shared student and staff data model first, then layered AI attendance channels (webcam, mobile, CCTV) and role portals so each audience sees only what they need.",
    approachPoints: [
      "Mapped admin, teacher, parent, and student journeys before UI polish.",
      "Validated recognition accuracy on-site with fallback manual marking.",
      "Released fees and timetable modules once attendance data was stable.",
      "Trained campus champions so each school could support day-one questions.",
    ],
    outcomes: [
      "Morning attendance closes faster with fewer manual register corrections",
      "Parents see consistent status without calling the front office for basics",
      "Teachers work from one portal for classes, exams, and attendance signals",
      "Fee and academic records stay attached to the same student profile",
      "Campuses share a common operating model while keeping role boundaries",
      "Leadership gains live visibility into attendance patterns across sites",
    ],
    insights: [
      "AI attendance only sticks when override and audit paths feel safe to staff.",
      "Parent trust rises from consistent data more than from flashy portal design.",
      "Sequencing fees after attendance prevented billing fights over incomplete rosters.",
    ],
    clientQuote:
      "Attendance used to steal the first hour of every day. Now recognition and portals give us a clean start, and parents finally see the same information we do.",
    faqs: [
      faq(
        "Was AI attendance mandatory from day one?",
        "No. We ran parallel manual marking during pilots so BrightPath campuses could adopt recognition at a comfortable pace.",
        "Adoption",
        "left",
      ),
      faq(
        "How did you handle parent communication?",
        "Parent portals show attendance and academic status from the same student record admins use, reducing conflicting updates across the network.",
        "Parents",
        "right",
      ),
      faq(
        "Can this model work for a single campus first?",
        "Yes. BrightPath proved attendance and portals on a lead campus, then expanded the same data model to additional sites.",
        "Rollout",
        "left",
      ),
      faq(
        "What is covered on the project page vs this case study?",
        "The project page details ERP modules and product FAQs. This case study focuses on the BrightPath engagement story, sequencing, and school outcomes.",
        "Scope",
        "right",
      ),
      faq(
        "Who participated in discovery?",
        "School leaders, campus admins, teachers, and parent-communication owners mapped journeys before UI polish. Campus champions later supported day-one questions.",
        "Roles",
        "left",
      ),
      faq(
        "What was the engagement timeline?",
        "Sixteen weeks: shared data model and portals first, AI attendance validation on-site, then fees and timetable once attendance was stable.",
        "Timeline",
        "right",
      ),
      faq(
        "Which camera or device integrations were in scope?",
        "Webcam, mobile, and CCTV channels were configured where infrastructure was ready, always with manual override and recognition logs for staff review.",
        "Integrations",
        "left",
      ),
      faq(
        "How were staff trained?",
        "We trained campus champions at each school so local teams could answer day-one questions without waiting on a central helpdesk.",
        "Training",
        "right",
      ),
      faq(
        "Does this fit a smaller single-school team?",
        "Yes. The same role portals and attendance sequencing apply at smaller scale; you can defer multi-campus reporting until you need it.",
        "Fit",
        "left",
      ),
      faq(
        "How were outcomes measured?",
        "BrightPath compared morning register close time, parent call volume for basic status, and attendance correction rates against the paper-register baseline.",
        "Outcomes",
        "right",
      ),
      faq(
        "Was student historical data migrated?",
        "Core student and staff records were loaded into the shared model before go-live. Fee history followed once attendance identity was trusted.",
        "Migration",
        "left",
      ),
      faq(
        "What support continued after launch?",
        "Post-launch we refined recognition thresholds, portal permissions, and fee workflows based on campus champion feedback across the network.",
        "Support",
        "right",
      ),
    ],
  },

  "travel-and-tour-website": {
    metaTitle: "Travel Booking Website Case Study | Package Catalog Launch",
    metaDescription:
      "How a travel brand launched a booking-ready website with package search, destination pages, and admin tools so marketing and operations stay aligned.",
    lede: "Horizon Trails needed a public site travelers would trust and an admin panel the agency would actually update, delivered together so content never drifted from bookings.",
    highlights: [
      "10-week launch",
      "Public + admin together",
      "SEO-ready destinations",
      "Booking workflows",
    ],
    overview: [
      "The agency’s brochure site could not capture demand. Packages lived in PDFs; booking questions landed in inboxes that nobody owned overnight.",
      "We paired the marketing website with admin workflows from sprint one so every published package had a maintainable backend path.",
      "Destination and package templates were designed for search visibility without forcing editors to touch code.",
      "Launch meant travelers could browse and inquire while staff managed bookings, customers, and rental questions in one place.",
    ],
    challenge: [
      "Horizon Trails Travel Co marketed trips from a brochure-style site that could not capture demand. Packages lived in PDFs and shared drives, so marketing promised itineraries the operations team could not update quickly when dates, pricing, or availability changed.",
      "Booking questions landed in shared inboxes that nobody owned overnight. Travelers waited while staff forwarded emails; rental inquiries mixed with package requests and disappeared. Destination pages were thin or frozen until a developer was free.",
      "Prior tools failed because the public site and admin work were disconnected. Editors could not publish without engineering help, and ops tracked customers in separate lists from what the website showed. Seasonal campaigns amplified the gap between advertised trips and what the desk could confirm.",
      "What was at stake was lost inquiries during peak interest windows, damaged trust when the site lagged reality, and an inability to scale organic search or paid traffic on a stable catalog. Marketing and operations needed one booking-ready content model.",
      "Horizon Trails needed a public booking website and admin panel delivered together so every published package had a maintainable backend path, and inquiries never vanished into email.",
    ],
    approach:
      "We shipped a booking-oriented content model: packages, destinations, and inquiries as first-class records, with public templates fed directly from admin data.",
    approachPoints: [
      "Defined package and destination fields with SEO titles and media in mind.",
      "Built public search and detail pages against the same data admins edit.",
      "Added rental inquiry handling so non-package requests stay tracked.",
      "Trained editors on publish workflows before paid traffic campaigns.",
    ],
    outcomes: [
      "Package updates publish without waiting on a developer queue",
      "Inquiries route into a managed list instead of shared inboxes",
      "Destination pages support organic search with consistent structure",
      "Marketing and operations share one catalog of live trips",
      "Rental questions are tracked alongside package bookings",
      "The agency can scale seasonal campaigns on a stable content model",
    ],
    insights: [
      "A pretty homepage without admin ownership recreates the PDF problem online.",
      "Editors adopt tools faster when publish steps mirror how they already describe trips.",
      "Separating rental inquiries prevented package pipelines from getting noisy.",
    ],
    clientQuote:
      "We finally stop rewriting the same itinerary in three places. The site sells what ops can deliver, and inquiries no longer vanish into email.",
    faqs: [
      faq(
        "Did you redesign brand visuals from scratch?",
        "We focused on conversion and maintainable templates first, then aligned visual polish with Horizon Trails existing brand direction.",
        "Design",
        "left",
      ),
      faq(
        "How soon could the team edit packages?",
        "Admin create and edit flows were usable before public launch so Horizon Trails content was ready on day one.",
        "Admin",
        "right",
      ),
      faq(
        "Is online payment required in this case study scope?",
        "This engagement prioritized catalog, inquiry, and booking management. Payments can layer on once booking volume justifies it.",
        "Scope",
        "left",
      ),
      faq(
        "Where do I see module screenshots?",
        "Product screenshots and module detail live on the travel website project page. This case study covers the Horizon Trails launch story.",
        "Scope",
        "right",
      ),
      faq(
        "Who owned discovery and content decisions?",
        "Marketing and operations leads defined package fields together. Editors validated publish workflows before any paid traffic campaigns.",
        "Roles",
        "left",
      ),
      faq(
        "What was the launch timeline?",
        "Ten weeks from discovery through public launch, with admin tools ready early so the catalog was populated before go-live.",
        "Timeline",
        "right",
      ),
      faq(
        "Were payment gateways or OTAs integrated?",
        "Not in this engagement. We kept the spine on packages, destinations, bookings, customers, and rental inquiries; supplier or payment APIs can follow.",
        "Integrations",
        "left",
      ),
      faq(
        "How were editors trained?",
        "We trained Horizon Trails editors on create, edit, and publish steps that mirror how they already describe trips, before campaigns drove traffic.",
        "Training",
        "right",
      ),
      faq(
        "Can a smaller agency use the same model?",
        "Yes. A leaner catalog and smaller admin team still benefit from public pages fed by the same records ops maintain.",
        "Fit",
        "left",
      ),
      faq(
        "How did you measure launch success?",
        "Horizon Trails tracked inquiry response ownership, time to publish a package change, and whether marketing and ops shared one live catalog.",
        "Outcomes",
        "right",
      ),
      faq(
        "Was existing package content migrated?",
        "Yes. PDF and sheet itineraries were structured into package and destination records with SEO fields before public launch.",
        "Migration",
        "left",
      ),
      faq(
        "What support continued after launch?",
        "We supported early seasonal campaign tweaks, rental inquiry routing refinements, and editor workflow adjustments after go-live.",
        "Support",
        "right",
      ),
    ],
  },

  "restaurant-pos": {
    metaTitle:
      "Restaurant POS Case Study | Front-of-House Speed & Stock Control",
    metaDescription:
      "Case study: how a hospitality group unified orders, menus, inventory, and staff reporting so service speed and stock accuracy improved together.",
    lede: "Harbor Table Hospitality was losing tickets between the floor and the kitchen while inventory lived in a separate habit. We connected service and stock in one POS rhythm.",
    highlights: [
      "12-week engagement",
      "Service-first UX",
      "Inventory linked",
      "Shift reporting",
    ],
    overview: [
      "Peak hours exposed every gap: slow modifiers, unclear table status, and stock counts that never matched the night’s sales.",
      "We designed around ticket velocity, fewer taps to fire an order, then wired inventory so popular items could not silently stock out.",
      "Staff and reporting modules followed once the order path felt natural to servers and managers.",
      "Harbor Table now runs front-of-house and back-office decisions from the same nightly picture.",
    ],
    challenge: [
      "Harbor Table Hospitality was losing tickets between the floor and the kitchen while inventory lived in a separate habit. Peak hours exposed every gap: slow modifiers, unclear table status, and stock counts that never matched the night’s sales.",
      "Orders were fast only when veterans remembered workarounds. Newer servers slowed the line hunting taps, and managers discovered missing stock after the rush, too late to fix the shift. Front-of-house speed and back-office control never shared one nightly picture.",
      "Prior POS and stock tools failed because inventory lagged the ticket path. Staff treated stock counts as a chore after close, so low inventory never warned the dinner rush. Reporting required exports that managers did not trust during service.",
      "What was at stake was guest wait times, food cost waste from silent stockouts, and an expensive training burden every time a new server joined. Multi-outlet growth would copy the same fragmented habits without a shared playbook.",
      "Harbor Table needed a POS designed around ticket velocity first, then menus, inventory, staff, and reports wired so numbers matched what the floor actually sold.",
    ],
    approach:
      "We instrumented the real ticket path first, simplified modifiers and table flow, then attached inventory and employee modules so numbers matched what the floor sold.",
    approachPoints: [
      "Timed order entry with floor staff before locking the interaction model.",
      "Linked menu items to stock movements to surface low inventory early.",
      "Gave managers shift reports that reconcile sales and stock without export gymnastics.",
      "Rolled out station by station so training never stopped service.",
    ],
    outcomes: [
      "Average ticket entry time dropped for complex modifiers",
      "Low-stock warnings appear before the dinner rush, not after",
      "Managers close shifts with sales and inventory in one report set",
      "New servers follow the same path veterans already trusted",
      "Customer and employee records stay attached to operational history",
      "Multi-outlet expansion can reuse the same POS playbook",
    ],
    insights: [
      "Restaurants punish extra taps, UX testing on live shifts beats lab prototypes.",
      "Inventory adoption failed historically because it lagged the ticket; we reversed that.",
      "Reporting only matters if it matches what managers already argue about at close.",
    ],
    clientQuote:
      "The POS finally feels like how we run a busy floor. Stock stops surprising us mid-service, and close-out is a review, not a scavenger hunt.",
    faqs: [
      faq(
        "Did you replace hardware?",
        "Software and workflows were the focus for Harbor Table. Existing station setups were adapted where possible to reduce disruption.",
        "Hardware",
        "left",
      ),
      faq(
        "How did staff training work?",
        "We trained on live stations in off-peak windows and kept a parallel path until Harbor Table teams were confident.",
        "Training",
        "right",
      ),
      faq(
        "Can menu changes happen mid-season?",
        "Yes. Managers can update menus and pricing without waiting on a development cycle.",
        "Menus",
        "left",
      ),
      faq(
        "How is this case study different from the project page?",
        "Use the project page for module lists and product FAQs. This case study explains the Harbor Table hospitality engagement and results.",
        "Scope",
        "right",
      ),
      faq(
        "Who joined discovery on the floor?",
        "Servers, kitchen leads, and shift managers timed order entry with us before we locked the interaction model and inventory links.",
        "Roles",
        "left",
      ),
      faq(
        "What was the delivery timeline?",
        "Twelve weeks with a service-first order path early, then inventory, staff, and reporting modules once ticket velocity was proven.",
        "Timeline",
        "right",
      ),
      faq(
        "Were printers or payment terminals integrated?",
        "We adapted existing station setups where possible. Deep hardware swaps were out of scope unless a station could not support the new ticket path.",
        "Integrations",
        "left",
      ),
      faq(
        "How did rollout avoid stopping service?",
        "We rolled out station by station so training never halted a full floor. Off-peak windows carried the heaviest coaching.",
        "Rollout",
        "right",
      ),
      faq(
        "Does this fit a single restaurant?",
        "Yes. Harbor Table’s playbook scales down to one outlet; multi-outlet reporting is optional until you expand.",
        "Fit",
        "left",
      ),
      faq(
        "How were outcomes measured?",
        "We timed complex modifier entry, tracked low-stock warning timing versus rush hours, and reviewed close-out report usage with managers.",
        "Outcomes",
        "right",
      ),
      faq(
        "Was menu and stock history migrated?",
        "Active menus, modifiers, and on-hand stock baselines were loaded before cutover. Historical sheet archives stayed available for reference.",
        "Migration",
        "left",
      ),
      faq(
        "What support continued after launch?",
        "Post-launch we refined modifiers, inventory thresholds, and shift report layouts based on real service feedback.",
        "Support",
        "right",
      ),
    ],
  },

  "travel-and-tours-management": {
    metaTitle: "Tour Operations Case Study | Bookings Flights & Payments Hub",
    metaDescription:
      "How a tour operator centralized bookings, packages, flights, hotels, transport, and invoicing so agents stop juggling disconnected tools.",
    lede: "Atlas Journeys Operations ran trips successfully, but confirmations, supplier pieces, and payments lived in too many places. We built one operations hub for the whole journey.",
    highlights: [
      "14-week engagement",
      "Ops consolidation",
      "Supplier modules",
      "Invoice clarity",
    ],
    overview: [
      "Growth made fragmentation expensive: agents retyped traveler details into flights, hotels, and payment trackers.",
      "We modeled a booking as a spine, packages, transport, stays, and invoices hang off one customer journey.",
      "Reporting followed the money and the movement so leadership could see both occupancy of packages and cash position.",
      "Atlas agents now open one system to move a traveler from inquiry to invoice.",
    ],
    challenge: [
      "Atlas Journeys Operations ran trips successfully, but confirmations, supplier pieces, and payments lived in too many places. Growth made fragmentation expensive: agents retyped traveler details into flights, hotels, and payment trackers for every booking.",
      "Each supplier step had its own spreadsheet. When a flight changed, hotel and invoice updates lagged, creating traveler friction and reconciliation pain at month end. Agents could not see the whole journey without opening several files.",
      "Prior tools failed because “booking” meant different things in each module, and payments sat apart from the trip record. Finance fought month-end merges while agents sold from incomplete confirmations. Peak season multiplied spreadsheet risk instead of capacity.",
      "What was at stake was traveler trust on last-minute changes, cash visibility for leadership, and the cost of onboarding new agents into five file-naming schemes. Atlas needed one operations hub from inquiry to invoice.",
      "Without a booking spine that carried packages, transport, stays, payments, and invoices together, every change would keep creating parallel work and month-end surprises.",
    ],
    approach:
      "We centralized the booking record first, then attached flights, hotels, transport, payments, and invoices so every change propagated from one place.",
    approachPoints: [
      "Unified customer and booking identity across modules.",
      "Prioritized payment and invoice linkage to reduce month-end surprises.",
      "Gave agents package tools that mirror how they sell itineraries.",
      "Phased supplier modules so the team was never learning everything at once.",
    ],
    outcomes: [
      "Traveler details are entered once and reused across supplier steps",
      "Invoice status stays tied to the same booking agents already manage",
      "Package changes ripple without retyping across tools",
      "Leadership reports cover bookings and cash without manual merges",
      "New agents learn one operations language instead of five file naming schemes",
      "Peak season volume no longer multiplies spreadsheet risk",
    ],
    insights: [
      "Tour ops tools fail when “booking” means different things in each module, we forced one definition.",
      "Payments without booking context create finance fights; we refused that split.",
      "Phased supplier rollout protected service levels during training.",
    ],
    clientQuote:
      "We stopped being a company of parallel spreadsheets. When a trip changes, the booking, suppliers, and invoice finally move together.",
    faqs: [
      faq(
        "Did you integrate every airline API on day one?",
        "No. For Atlas Journeys we focused on operational control and records first. Deeper supplier APIs can follow once processes are stable.",
        "Integrations",
        "left",
      ),
      faq(
        "How do agents handle last-minute changes?",
        "They update the central booking. Related modules stay attached so confirmations and invoices can be revised from the same record.",
        "Changes",
        "right",
      ),
      faq(
        "Is this suitable for multi-agent teams?",
        "Yes. Roles and reporting support shared queues while preserving accountability on each Atlas booking.",
        "Teams",
        "left",
      ),
      faq(
        "Where are deep product FAQs?",
        "Module-level FAQs live on the tour management project page. This case study stays on the Atlas operational turnaround story.",
        "Scope",
        "right",
      ),
      faq(
        "Who was involved in discovery?",
        "Operations leads, agents, and finance stakeholders defined a single booking meaning across packages, suppliers, and invoices.",
        "Roles",
        "left",
      ),
      faq(
        "What was the engagement timeline?",
        "Fourteen weeks with the booking spine first, then phased supplier modules so the team was never learning everything at once.",
        "Timeline",
        "right",
      ),
      faq(
        "How was rollout staged?",
        "We phased flights, hotels, transport, and payment modules after the central booking record was trusted in daily agent work.",
        "Rollout",
        "left",
      ),
      faq(
        "How were agents trained?",
        "Training followed each module wave. Agents practiced package and booking updates before supplier and invoice complexity expanded.",
        "Training",
        "right",
      ),
      faq(
        "Can a smaller tour desk use this approach?",
        "Yes. A smaller team still benefits from one booking record; you can delay advanced supplier modules until volume requires them.",
        "Fit",
        "left",
      ),
      faq(
        "How were outcomes measured?",
        "Atlas tracked retyping of traveler details, invoice linkage to bookings, and whether leadership reports needed manual merges at month end.",
        "Outcomes",
        "right",
      ),
      faq(
        "Was booking history migrated?",
        "Active and upcoming bookings were centralized with customer identity intact. Legacy sheets remained available for historical reference during cutover.",
        "Migration",
        "left",
      ),
      faq(
        "What support continued after launch?",
        "After go-live we refined invoice workflows, reporting views, and agent role permissions based on peak-season feedback.",
        "Support",
        "right",
      ),
    ],
  },

  "hotel-management-system": {
    metaTitle: "Hotel HMS Case Study | Front Desk Housekeeping & Security",
    metaDescription:
      "Case study of connecting reservations, housekeeping, finance, AI attendance, and camera monitoring for a hotel group’s daily operations.",
    lede: "Grand Meridian Hotels needed the front desk, housekeeping, and security signals to stop living in separate worlds. We connected the guest journey with staff and safety visibility.",
    highlights: [
      "16-week engagement",
      "Front desk + HK",
      "Finance linked",
      "AI safety layer",
    ],
    overview: [
      "Guest experience suffered when room status lagged check-in and finance closed books on delayed data.",
      "We mapped the stay lifecycle, reservation to checkout, and made housekeeping and finance consume the same room state.",
      "AI attendance and camera monitoring were added as operational layers, not gimmicks, with clear staff workflows.",
      "Meridian teams now coordinate rooms, people, and incidents from one HMS backbone.",
    ],
    challenge: [
      "Grand Meridian Hotels needed the front desk, housekeeping, and security signals to stop living in separate worlds. Guest experience suffered when room status lagged check-in and finance closed books on delayed data.",
      "Front desk promised rooms housekeeping had not released. Housekeeping worked from boards that did not match reservation state. Finance chased folios while security reviewed footage in isolation. Guests felt the gaps even when staff worked hard.",
      "Prior hotel tools failed because AI attendance and cameras arrived as side systems without room-state context, and finance reporting was not tied to stay events. Staff argued from different truths; multi-property expansion would copy the same silos.",
      "What was at stake was check-in waits, housekeeping turnaround quality, folio accuracy at close, and safety visibility that managers could act on inside daily ops. Meridian needed one HMS backbone for rooms, people, and incidents.",
      "Without unified reservation and room status first, adding more monitoring or reports would only create noise. The engagement had to sequence operational truth before AI layers.",
    ],
    approach:
      "We unified room and reservation state, then connected housekeeping boards, finance modules, and AI monitoring so exceptions surface where staff already work.",
    approachPoints: [
      "Stabilized reservation and room status before adding AI layers.",
      "Designed housekeeping views around turnaround priorities, not generic task lists.",
      "Connected finance reporting to stay events to shrink close delays.",
      "Configured camera and attendance alerts with human review paths.",
    ],
    outcomes: [
      "Check-in waits drop when room readiness is visible in real time",
      "Housekeeping prioritizes turns from the same status front desk trusts",
      "Finance closes with fewer missing folio surprises",
      "Attendance and camera alerts sit inside ops, not a separate silo",
      "Managers coach with shared occupancy and staffing context",
      "Multi-property playbooks reuse the same HMS model",
    ],
    insights: [
      "AI monitoring without room-state context becomes noise; we sequenced it last.",
      "Housekeeping adoption depends on board clarity more than feature count.",
      "Finance trust follows stay-event accuracy, not prettier charts.",
    ],
    clientQuote:
      "Front desk and housekeeping finally argue less because they see the same room truth. Security alerts show up in the operational flow instead of a side system.",
    faqs: [
      faq(
        "Was property Wi-Fi a blocker for AI features?",
        "We assessed Grand Meridian on-site connectivity early and staged camera features where infrastructure was ready.",
        "Infra",
        "left",
      ),
      faq(
        "How disruptive was go-live?",
        "We piloted on selected floors and shifts, then expanded once room-status accuracy was proven.",
        "Rollout",
        "right",
      ),
      faq(
        "Can finance keep existing chart of accounts?",
        "Yes. We map stay events into reporting structures the Meridian finance team already understands.",
        "Finance",
        "left",
      ),
      faq(
        "How is this different from the project page?",
        "Full module inventory and product FAQs are on the Hotel Management System project page. This case study covers the Meridian engagement and outcomes.",
        "Scope",
        "right",
      ),
      faq(
        "Who participated from the hotel side?",
        "Front desk, housekeeping leads, finance, and security stakeholders mapped the stay lifecycle before AI monitoring was configured.",
        "Roles",
        "left",
      ),
      faq(
        "What was the engagement timeline?",
        "Sixteen weeks: reservation and room status first, then housekeeping and finance, with AI attendance and cameras sequenced last.",
        "Timeline",
        "right",
      ),
      faq(
        "Which systems were integrated?",
        "Camera monitoring and AI attendance were connected where infrastructure allowed, always with human review paths inside the HMS workflow.",
        "Integrations",
        "left",
      ),
      faq(
        "How were teams trained?",
        "Floor and shift pilots carried training. Housekeeping boards and front desk status were coached together so both sides trusted the same room truth.",
        "Training",
        "right",
      ),
      faq(
        "Does this fit a smaller property?",
        "Yes. A single property can run the same room-status and housekeeping model; multi-property playbooks reuse it when you expand.",
        "Fit",
        "left",
      ),
      faq(
        "How were outcomes measured?",
        "Meridian reviewed check-in wait feedback, room-status disputes between desks, folio close delays, and whether security alerts appeared in ops workflows.",
        "Outcomes",
        "right",
      ),
      faq(
        "Was reservation history migrated?",
        "Active reservations and room inventory were stabilized in the HMS before cutover. Folio mapping followed stay-event definitions finance signed off.",
        "Migration",
        "left",
      ),
      faq(
        "What support continued after launch?",
        "Post-launch we tuned housekeeping board priorities, finance mappings, and alert rules based on pilot-floor feedback.",
        "Support",
        "right",
      ),
    ],
  },

  "royal-pos": {
    metaTitle: "Retail POS Case Study | Multi-Branch Checkout & AI Monitoring",
    metaDescription:
      "How a retail collective standardized checkout, inventory, and AI camera monitoring across branches without slowing the till.",
    lede: "Royal Retail Collective needed faster checkouts and tighter inventory, plus loss-prevention visibility that did not interrupt cashiers. We delivered an AI-ready POS for multi-branch reality.",
    highlights: [
      "14-week engagement",
      "Multi-branch ops",
      "Checkout speed",
      "AI monitoring",
    ],
    overview: [
      "Branches ran slightly different till habits, so inventory never matched HQ expectations.",
      "We standardized the sale path first, then inventory and customer modules, then AI camera monitoring for exception review.",
      "Branch managers got reports that compare cleanly because the underlying sale events match.",
      "Royal now scales playbooks across stores without forcing cashiers through clumsy extra steps.",
    ],
    challenge: [
      "Royal Retail Collective needed faster checkouts and tighter inventory, plus loss-prevention visibility that did not interrupt cashiers. Branches ran slightly different till habits, so inventory never matched HQ expectations.",
      "Shrink and stockouts were debated with anecdotes instead of shared sale events. Checkout customizations per branch made training expensive, and HQ reporting was unreliable because each store defined a sale differently.",
      "Prior retail tools failed when AI camera features added friction at the till, or when HQ forced uniformity that cashiers worked around. Inventory movements lagged checkout, so low-stock and product issues surfaced late across locations.",
      "What was at stake was cashier speed during peak hours, trustworthy multi-branch comparisons, and loss-prevention review that managers could use without slowing the critical path. New branches would inherit chaos without a known POS playbook.",
      "Royal needed one sale event model across branches, local configuration within guardrails, and AI monitoring that reviews exceptions after the sale, not during it.",
    ],
    approach:
      "One sale event model across branches, local configuration within guardrails, and AI monitoring that reviews exceptions after the sale, not during it.",
    approachPoints: [
      "Unified SKU and sale events so HQ reporting stops fighting branch variants.",
      "Protected cashier speed as a non-negotiable acceptance criterion.",
      "Rolled AI monitoring as a manager review layer, not a till blocker.",
      "Trained branch leads who could coach peers without waiting on HQ.",
    ],
    outcomes: [
      "Cashiers keep a fast path while inventory movements stay consistent",
      "HQ compares branches on the same sale definitions",
      "Low-stock and product issues surface earlier across locations",
      "Camera exceptions are reviewed beside operational context",
      "New branches launch with a known POS playbook",
      "Customer history follows the shopper across participating stores",
    ],
    insights: [
      "Retail AI fails when it adds friction at the till, we kept monitoring off the critical path.",
      "Multi-branch success is mostly data discipline, not more buttons.",
      "Branch champions beat central training alone for lasting adoption.",
    ],
    clientQuote:
      "We got consistency without punishing cashiers. Inventory finally matches what left the till, and monitoring helps managers without slowing checkout.",
    faqs: [
      faq(
        "Do all branches go live together?",
        "For Royal Retail we prefer a pilot branch, then a coordinated wave once the sale path is proven.",
        "Rollout",
        "left",
      ),
      faq(
        "Will AI flag every camera event?",
        "No. Rules focus on exceptions for manager review so branch teams are not flooded.",
        "AI",
        "right",
      ),
      faq(
        "Can pricing differ by branch?",
        "Yes, within policies Royal defines, while sale events remain comparable for HQ.",
        "Pricing",
        "left",
      ),
      faq(
        "Where is the product walkthrough?",
        "Screenshots and module detail are on the Royal POS project page. This case study covers the multi-branch engagement story.",
        "Scope",
        "right",
      ),
      faq(
        "Who owned acceptance criteria?",
        "Branch managers and HQ ops jointly protected cashier speed as non-negotiable. Loss-prevention leads scoped AI as a post-sale review layer.",
        "Roles",
        "left",
      ),
      faq(
        "What was the engagement timeline?",
        "Fourteen weeks: unify sale events and inventory first, then customer modules, then AI camera monitoring for exception review.",
        "Timeline",
        "right",
      ),
      faq(
        "What integrations were included?",
        "AI camera monitoring was layered for manager review beside operational context. Deeper ERP links can follow once sale definitions are stable.",
        "Integrations",
        "left",
      ),
      faq(
        "How were cashiers and leads trained?",
        "We trained branch leads who could coach peers without waiting on HQ, after the pilot sale path was proven.",
        "Training",
        "right",
      ),
      faq(
        "Does this fit a smaller retail group?",
        "Yes. Even a few stores benefit from one sale event model; AI monitoring can wait until you need exception review at scale.",
        "Fit",
        "left",
      ),
      faq(
        "How were outcomes measured?",
        "Royal compared checkout path timing, HQ branch report consistency, low-stock signal timing, and manager exception-review load.",
        "Outcomes",
        "right",
      ),
      faq(
        "Was SKU and inventory data migrated?",
        "SKU catalogs and on-hand baselines were unified into the shared sale event model before pilot cutover, with HQ reconciliation checks.",
        "Migration",
        "left",
      ),
      faq(
        "What support continued after launch?",
        "After the branch wave we refined pricing guardrails, inventory alerts, and AI exception rules from store-lead feedback.",
        "Support",
        "right",
      ),
    ],
  },

  "hospital-management-system": {
    metaTitle: "Hospital HMS Case Study | Appointments Billing & Doctor Portal",
    metaDescription:
      "Case study: unifying appointments, patients, beds, billing, pharmacy, and a doctor portal so clinical and admin teams share one operational backbone.",
    lede: "CareBridge Medical Group’s clinical care was strong, but appointments, beds, billing, and pharmacy updates lagged each other. We unified the hospital day around one HMS.",
    highlights: [
      "16-week engagement",
      "Clinical + admin",
      "Doctor portal",
      "Billing alignment",
    ],
    overview: [
      "Patients felt delays that were really handoff problems between desks and departments.",
      "We aligned appointment, patient, and bed records first so clinical teams stopped reconciling identity mid-visit.",
      "Billing and pharmacy were connected next so charges and medicines followed the same encounter story.",
      "A dedicated doctor portal reduced workarounds that previously lived in chat apps and paper notes.",
    ],
    challenge: [
      "CareBridge Medical Group’s clinical care was strong, but appointments, beds, billing, and pharmacy updates lagged each other. Patients felt delays that were really handoff problems between desks and departments.",
      "Front desk, wards, pharmacy, and billing each held partial truth. Doctors wasted time reconstructing context from chat apps and paper notes. Patients waited while staff hunted records that should have been one timeline.",
      "Prior hospital tools failed when “patient” meant different IDs per desk, or when doctor portals were as heavy as admin consoles and got abandoned. Billing leakage and pharmacy mismatches followed from parallel encounter stories.",
      "What was at stake was throughput, bed visibility without phone chains, end-of-day billing gaps, and clinician time spent on reconstruction instead of care. Leadership could not trust occupancy and throughput reports.",
      "CareBridge needed an encounter-centric HMS so appointments, admissions, billing, pharmacy, and the doctor portal consumed one shared patient day instead of inventing parallel ones.",
    ],
    approach:
      "Encounter-centric design: appointments and admissions create a shared timeline; billing, pharmacy, and the doctor portal consume that timeline instead of inventing parallel ones.",
    approachPoints: [
      "Stabilized patient identity and appointment flows before specialty modules.",
      "Introduced bed management with clear occupancy status for ward teams.",
      "Connected billing events to encounters to reduce leakage and disputes.",
      "Shipped a doctor portal focused on daily clinical tasks, not admin clutter.",
    ],
    outcomes: [
      "Front desk and clinical teams share one patient timeline",
      "Bed availability is visible without phone chains between wards",
      "Billing follows encounters more closely, shrinking end-of-day gaps",
      "Pharmacy fulfills against the same patient context clinicians see",
      "Doctors spend less time reconstructing history from side channels",
      "Leadership reports occupancy and throughput from trusted operational data",
    ],
    insights: [
      "Hospital software fails when “patient” means different IDs per desk, identity came first.",
      "Doctor portals must be thinner than admin consoles or they get abandoned.",
      "Billing accuracy is an encounter-design problem, not only a finance UI problem.",
    ],
    clientQuote:
      "We stopped running a hospital of parallel charts. Appointments, beds, billing, and the doctor portal finally describe the same patient day.",
    faqs: [
      faq(
        "How did you handle clinical change management?",
        "Department champions, short floor training, and phased module activation kept CareBridge care moving during rollout.",
        "Change",
        "left",
      ),
      faq(
        "Is this a full EMR replacement?",
        "This engagement focused on hospital operations: appointments, beds, billing, pharmacy, and doctor workflows, scoped to CareBridge priorities.",
        "Scope",
        "right",
      ),
      faq(
        "Can roles separate clinical and billing access?",
        "Yes. Role-based access keeps sensitive clinical and financial actions appropriately bounded across CareBridge teams.",
        "Access",
        "left",
      ),
      faq(
        "Where are product module FAQs?",
        "See the Hospital Management System project page for module lists and product FAQs. This case study covers the CareBridge engagement.",
        "Scope",
        "right",
      ),
      faq(
        "Who joined discovery?",
        "Front desk, ward leads, pharmacy, billing, and physicians mapped identity and encounter flows before specialty modules expanded.",
        "Roles",
        "left",
      ),
      faq(
        "What was the engagement timeline?",
        "Sixteen weeks: patient identity and appointments first, then beds, then billing and pharmacy, with the doctor portal focused on daily clinical tasks.",
        "Timeline",
        "right",
      ),
      faq(
        "Were lab or imaging systems integrated?",
        "Not as a primary scope. We stabilized the operational backbone first; specialty system links can follow once encounter identity is trusted.",
        "Integrations",
        "left",
      ),
      faq(
        "How were clinicians trained?",
        "Short floor sessions with department champions. The doctor portal stayed thinner than admin consoles so daily clinical tasks remained usable.",
        "Training",
        "right",
      ),
      faq(
        "Does this fit a smaller clinic group?",
        "Yes. The same encounter spine works at smaller scale; bed and multi-ward complexity can be lighter until you need it.",
        "Fit",
        "left",
      ),
      faq(
        "How were outcomes measured?",
        "CareBridge tracked record hunt time, bed phone-chain frequency, end-of-day billing gaps, and doctor use of side channels versus the portal.",
        "Outcomes",
        "right",
      ),
      faq(
        "Was patient data migrated?",
        "Patient identity and active appointments were stabilized before go-live. Billing and pharmacy history followed encounter definitions clinical and finance leads signed off.",
        "Migration",
        "left",
      ),
      faq(
        "What support continued after launch?",
        "Post-launch we refined role permissions, bed status rules, and doctor portal task lists from department champion feedback.",
        "Support",
        "right",
      ),
    ],
  },

  "cash-management-system": {
    metaTitle: "Cash Management Case Study | Flow Control & Audit Trails",
    metaDescription:
      "How a finance ops team replaced scattered ledgers with multi-account cash control, budgets, reporting, and audit-ready history.",
    lede: "Northline Finance Ops could move money, they just could not explain it quickly. We gave them multi-account clarity, budgets, and audit trails in one cash system.",
    highlights: [
      "10-week engagement",
      "Audit-ready",
      "Multi-account",
      "Budget control",
    ],
    overview: [
      "Month-end meant exporting, reconciling, and arguing about which file was authoritative.",
      "We centered accounts, categories, payees, and transfers in one model so every movement left a trail.",
      "Budgets and reports were designed for how Northline already decided, not a textbook accounting fantasy.",
      "The team now answers cash questions from the system during the week, not only after close.",
    ],
    challenge: [
      "Northline Finance Ops could move money, they just could not explain it quickly. Month-end meant exporting, reconciling, and arguing about which file was authoritative across multi-account cash activity.",
      "Income and expenses were tracked, but transfers, payee history, and approvals were uneven. Audits required archaeology across sheets and chat approvals. Weekly cash questions forced rebuilds instead of answers from a living system.",
      "Prior ledgers and sheet habits failed because transfers vanished between account files and budgets ignored how leadership already reviewed cash. Audit trails, if they existed, were not readable by managers without IT help.",
      "What was at stake was close-cycle length, audit readiness, and the ability to flag budget overruns while teams could still act. Without attributable cash events, Northline would keep proving history instead of operating from it.",
      "Northline needed every cash movement as a first-class event, with budgets and reports that read those events without parallel books.",
    ],
    approach:
      "Make every cash movement a first-class, attributable event. Then layer budgets and reports that read those events without parallel books.",
    approachPoints: [
      "Migrated accounts with reconciliation checkpoints before cutting over.",
      "Enforced category and payee discipline to keep reports meaningful.",
      "Built audit logs managers can filter without IT help.",
      "Aligned budget views with how leadership already reviewed cash.",
    ],
    outcomes: [
      "Weekly cash questions answered without rebuilding spreadsheets",
      "Transfers no longer vanish between account files",
      "Audit requests pull history instead of reconstructed narratives",
      "Budgets flag overruns while teams can still act",
      "Payee and category consistency improves report trust",
      "Close cycles shrink because evidence already lives in-system",
    ],
    insights: [
      "Finance teams adopt tools that shorten arguments, not ones that add coding steps.",
      "Audit trails must be readable by humans, not only stored as raw logs.",
      "Budget UX fails if it ignores how leaders already run reviews.",
    ],
    clientQuote:
      "We used to spend close week proving what happened. Now the trail is the work itself, accounts, transfers, and budgets finally agree.",
    faqs: [
      faq(
        "Did you replace the accounting package?",
        "This Northline engagement focuses on cash operations control and auditability. Broader GL strategy can stay complementary.",
        "Scope",
        "left",
      ),
      faq(
        "How was historical data handled?",
        "We migrated critical account history with reconciliation sign-off before freezing legacy sheets.",
        "Migration",
        "right",
      ),
      faq(
        "Who can approve sensitive movements?",
        "Role-based access separates day-to-day entry from higher-risk actions according to Northline policy.",
        "Controls",
        "left",
      ),
      faq(
        "Where is the product modules list?",
        "See the Cash Management System project page for module-level detail and FAQs. This case study covers the engagement outcomes.",
        "Scope",
        "right",
      ),
      faq(
        "Who participated in discovery?",
        "Finance ops leads and managers who already run cash reviews defined categories, payees, and budget views before cutover.",
        "Roles",
        "left",
      ),
      faq(
        "What was the engagement timeline?",
        "Ten weeks: account migration with reconciliation checkpoints, then budgets, reporting, and readable audit logs.",
        "Timeline",
        "right",
      ),
      faq(
        "Were bank feeds integrated?",
        "Operational control and attributable events came first. Bank feed automation can layer on once category and payee discipline holds.",
        "Integrations",
        "left",
      ),
      faq(
        "How was the team trained?",
        "Northline users practiced entry, transfer, and audit filter workflows against migrated accounts before legacy sheets were frozen.",
        "Training",
        "right",
      ),
      faq(
        "Does this fit a smaller finance team?",
        "Yes. Smaller teams still need attributable transfers and readable history; budget complexity can stay light until reviews demand more.",
        "Fit",
        "left",
      ),
      faq(
        "How were outcomes measured?",
        "Northline compared weekly cash answer time, transfer visibility across accounts, audit request turnaround, and close-cycle length.",
        "Outcomes",
        "right",
      ),
      faq(
        "How was rollout staged?",
        "Accounts went live after reconciliation checkpoints. Budgets and advanced reports followed once daily movements were trusted in-system.",
        "Rollout",
        "left",
      ),
      faq(
        "What support continued after launch?",
        "Post-launch we refined categories, approval roles, and budget views from the first close cycles under the new system.",
        "Support",
        "right",
      ),
    ],
  },

  "hr-management-software": {
    metaTitle: "HRMS Case Study | Hire-to-Exit Workforce Platform",
    metaDescription:
      "Case study of consolidating recruitment, attendance, payroll, performance, and exit into one HR platform for a growing workforce team.",
    lede: "PeopleFirst Workforce Ltd hired quickly, and outgrew a maze of HR tools. We connected hire-to-exit so people data stopped fragmenting at every stage.",
    highlights: [
      "16-week engagement",
      "ATS to payroll",
      "Lifecycle design",
      "Manager self-serve",
    ],
    overview: [
      "Recruitment lived in one place, attendance in another, payroll in a third. Employee truth was a merge job.",
      "We designed an employee lifecycle spine: candidate → employee → changes → exit, with payroll and performance consuming the same identity.",
      "Managers got self-serve paths for common requests so HR could focus on exceptions.",
      "PeopleFirst now runs people operations as one system of record instead of a monthly reconciliation project.",
    ],
    challenge: [
      "PeopleFirst Workforce Ltd hired quickly and outgrew a maze of HR tools. Recruitment lived in one place, attendance in another, payroll in a third. Employee truth became a monthly merge job instead of a living record.",
      "Headcount reports disagreed depending on who exported. Onboarding missed IT and payroll steps; exits left access and asset trails incomplete. Managers ping-ponged tickets for routine requests HR should have self-served.",
      "Prior HR stacks failed because payroll was bolted on late, portals only notified without actionable steps, and exit was treated as a final form rather than a lifecycle stage. Double entry from ATS offers into employee systems created constant drift.",
      "What was at stake was pay accuracy, security on exit, manager time, and leadership trust in workforce numbers. Scaling headcount without one hire-to-exit spine would multiply reconciliation, not capacity.",
      "PeopleFirst needed one employee record across ATS, attendance, payroll, performance, assets, and exit, with workflows that force handoffs to complete, not just notify.",
    ],
    approach:
      "One employee record across ATS, attendance, payroll, performance, assets, and exit, with workflows that force handoffs to complete, not just notify.",
    approachPoints: [
      "Mapped hire-to-exit states with HR, payroll, and hiring managers together.",
      "Connected ATS offers to employee creation to kill double entry.",
      "Sequenced payroll after attendance stability to protect pay accuracy.",
      "Added exit checklists that include assets and access as first-class steps.",
    ],
    outcomes: [
      "Hiring no longer retypes the same person into payroll systems",
      "Attendance and leave feed a cleaner payroll cycle",
      "Managers handle routine requests without ticket ping-pong",
      "Performance and training history stay on the employee timeline",
      "Exit processes close access and assets with clearer accountability",
      "Leadership trusts headcount and workforce reports from one source",
    ],
    insights: [
      "HR platforms stall when payroll is bolted on late, we sequenced pay carefully.",
      "Managers ignore portals that only notify; they need actionable self-serve steps.",
      "Exit quality is a lifecycle design problem, not a final form.",
    ],
    clientQuote:
      "We stopped merging people data at month end. From offer to exit, HR, managers, and payroll finally share one employee story.",
    faqs: [
      faq(
        "How disruptive was payroll cutover?",
        "For PeopleFirst we ran parallel checks on attendance and pay inputs before switching, with HR sign-off gates.",
        "Payroll",
        "left",
      ),
      faq(
        "Can existing job boards still feed candidates?",
        "ATS workflows can ingest from PeopleFirst channels. The key is that offers create the same employee spine.",
        "ATS",
        "right",
      ),
      faq(
        "Is AI required to get value?",
        "No. Lifecycle clarity delivers the core win. AI-assisted workflows can layer where they help.",
        "AI",
        "left",
      ),
      faq(
        "Where is the full module list?",
        "See the HR Management Software project page for product modules and FAQs. This case study covers the PeopleFirst engagement.",
        "Scope",
        "right",
      ),
      faq(
        "Who mapped hire-to-exit states?",
        "HR, payroll, and hiring managers defined states together so handoffs completed instead of only sending notifications.",
        "Roles",
        "left",
      ),
      faq(
        "What was the engagement timeline?",
        "Sixteen weeks: lifecycle spine and ATS-to-employee connection first, attendance stability next, then payroll, performance, and exit checklists.",
        "Timeline",
        "right",
      ),
      faq(
        "Were identity or SSO tools integrated?",
        "Access and asset steps on exit were first-class in the workflow. Deeper identity provider links can follow once the employee spine is trusted.",
        "Integrations",
        "left",
      ),
      faq(
        "How were managers trained?",
        "Managers learned self-serve paths for common requests so HR could focus on exceptions. Training emphasized actionable steps, not notification-only portals.",
        "Training",
        "right",
      ),
      faq(
        "Does this fit a smaller HR team?",
        "Yes. Smaller teams gain even more from one employee record; you can phase performance and advanced ATS features after core hire-to-pay flows.",
        "Fit",
        "left",
      ),
      faq(
        "How were outcomes measured?",
        "PeopleFirst compared headcount report agreement, onboarding step completion, payroll input rework, and exit access or asset closure rates.",
        "Outcomes",
        "right",
      ),
      faq(
        "Was employee history migrated?",
        "Active employees and critical attendance or pay inputs were migrated with reconciliation before payroll cutover. Legacy tool exports stayed for audit reference.",
        "Migration",
        "left",
      ),
      faq(
        "What support continued after launch?",
        "After go-live we refined manager self-serve flows, exit checklists, and payroll sign-off gates from the first full cycles.",
        "Support",
        "right",
      ),
    ],
  },

  "medicine-inventory-system": {
    metaTitle: "Pharmacy Inventory Case Study | Batch Expiry & Purchasing",
    metaDescription:
      "How a pharmacy chain reduced near-expiry waste and stock blind spots with batch tracking, purchasing, and inventory reporting built for medicine realities.",
    lede: "MediStock Pharmacy Chain did not have a generic inventory problem, they had a medicine problem: batches, expiry, and purchasing lag. We built stock control around those constraints.",
    highlights: [
      "10-week engagement",
      "Batch & expiry",
      "Purchase orders",
      "Valuation reports",
    ],
    overview: [
      "Shelves looked full while near-expiry units silently became write-offs.",
      "We modeled stock movements with batch identity and expiry as mandatory, not optional fields.",
      "Purchasing tied to real on-hand and inbound so orders stopped being guesswork between branches.",
      "MediStock now sees what will expire, what to transfer, and what to buy, before waste happens.",
    ],
    challenge: [
      "MediStock Pharmacy Chain did not have a generic inventory problem. They had a medicine problem: batches, expiry, and purchasing lag. Shelves looked full while near-expiry units silently became write-offs.",
      "Quantity-only stock counts hid which batches were aging out. Purchase orders lagged sales reality between branches, and valuation reports required painful manual cleanup. Pharmacists lacked actionable expiry alerts in daily ops.",
      "Prior inventory tools failed because they treated SKUs like retail widgets. Batch and expiry were optional fields, transfers lost identity, and alerts were monthly spreadsheet exercises staff ignored. Purchasing guessed instead of reading on-hand and inbound truth.",
      "What was at stake was write-off cost, branch transfer effectiveness, regulatory-friendly audit trails, and inventory valuation leadership could trust. Without batch-aware movements, growth would multiply waste and cleanup work.",
      "MediStock needed inventory events that always carry batch and expiry, with purchasing, stock-in/out, and reports enforcing pharmacy rules in the system.",
    ],
    approach:
      "Inventory events always carry batch and expiry. Purchasing, stock-in/out, and reports read that model so pharmacy rules are enforced by the system.",
    approachPoints: [
      "Designed medicine catalog fields around regulatory and shelf realities.",
      "Made expiry-aware alerts part of daily ops, not a monthly spreadsheet.",
      "Connected suppliers and POs to on-hand truth across locations.",
      "Trained pharmacists on exception handling for damaged or returned stock.",
    ],
    outcomes: [
      "Near-expiry risk is visible early enough to transfer or discount",
      "Purchase orders reflect real consumption and inbound stock",
      "Stock-in and stock-out leave a cleaner audit for each batch",
      "Valuation reports need less manual correction",
      "Branches share a consistent medicine catalog and movement language",
      "Write-off conversations become data-led instead of anecdotal",
    ],
    insights: [
      "Pharmacy inventory software that treats SKUs like retail widgets fails on day one.",
      "Alerts must be actionable on the floor or staff ignore them.",
      "Purchasing accuracy depends on trusting stock-in discipline first.",
    ],
    clientQuote:
      "We finally manage medicines as batches with dates, not just counts. Purchasing and expiry conversations are calmer because the system shows the same truth.",
    faqs: [
      faq(
        "Did you barcode every shelf on week one?",
        "For MediStock we prioritized high-risk and high-velocity items first, then expanded coverage with the pharmacy team.",
        "Rollout",
        "left",
      ),
      faq(
        "Can transfers between branches be tracked?",
        "Yes. Movements keep batch identity so receiving MediStock branches inherit expiry truth.",
        "Transfers",
        "right",
      ),
      faq(
        "How are damaged goods handled?",
        "Adjustment workflows with reasons keep valuation and audit history intact for each batch.",
        "Adjustments",
        "left",
      ),
      faq(
        "Where are product FAQs?",
        "Module details live on the Medicine Inventory System project page. This case study covers the MediStock engagement.",
        "Scope",
        "right",
      ),
      faq(
        "Who defined catalog and alert rules?",
        "Pharmacists and purchasing leads designed medicine fields and expiry-aware alerts so floor actions stayed practical.",
        "Roles",
        "left",
      ),
      faq(
        "What was the engagement timeline?",
        "Ten weeks: batch and expiry catalog model first, then stock movements, purchasing, valuation reports, and branch expansion of coverage.",
        "Timeline",
        "right",
      ),
      faq(
        "Were supplier portals integrated?",
        "Suppliers and purchase orders connect to on-hand truth in-system. Deeper supplier portal APIs can follow once stock-in discipline is solid.",
        "Integrations",
        "left",
      ),
      faq(
        "How were pharmacists trained?",
        "We trained exception handling for damaged or returned stock and daily expiry alert workflows, not only count entry.",
        "Training",
        "right",
      ),
      faq(
        "Does this fit a smaller pharmacy group?",
        "Yes. Batch and expiry discipline matters at any size; multi-branch transfer complexity can grow as locations are added.",
        "Fit",
        "left",
      ),
      faq(
        "How were outcomes measured?",
        "MediStock tracked near-expiry visibility lead time, PO alignment with consumption, valuation cleanup effort, and write-off conversations backed by batch data.",
        "Outcomes",
        "right",
      ),
      faq(
        "Was existing stock migrated?",
        "On-hand stock was loaded with batch and expiry where known. High-risk items were verified first before broader shelf coverage expanded.",
        "Migration",
        "left",
      ),
      faq(
        "What support continued after launch?",
        "Post-launch we refined alert thresholds, transfer workflows, and purchasing views from pharmacist and buyer feedback.",
        "Support",
        "right",
      ),
    ],
  },

  "e-learning-portal": {
    metaTitle: "E-Learning LMS Case Study | Courses Enrollments & Assessments",
    metaDescription:
      "Case study: delivering an LMS for courses, enrollments, lessons, assessments, and attendance so training teams stop running programs across email and folders.",
    lede: "EduLearn Training Institute’s programs were strong, but delivery was scattered across drives and inboxes. We put courses, enrollments, and assessments into one LMS rhythm.",
    highlights: [
      "12-week engagement",
      "Admin + instructor",
      "Assessment flow",
      "Attendance linked",
    ],
    overview: [
      "Instructors spent more time hunting materials than teaching. Admins could not see enrollment health without exporting sheets.",
      "We built role-aware dashboards: admins operate the catalog; instructors run lessons, assessments, and attendance.",
      "Assignments and quizzes were designed as part of the course path, not bolted-on forms.",
      "EduLearn now runs cohorts from one portal, from enrollment to certificate-ready completion tracking.",
    ],
    challenge: [
      "EduLearn Training Institute’s programs were strong, but delivery was scattered across drives and inboxes. Instructors spent more time hunting materials than teaching. Admins could not see enrollment health without exporting sheets.",
      "Course files, attendance lists, and quiz results lived apart. Learners got inconsistent experiences depending on which folder or email thread their cohort used. Progress reporting was a manual rebuild for every program.",
      "Prior tools failed when instructors inherited admin complexity, or when assessments were bolted-on forms disconnected from enrollment and attendance. Certificate readiness became a PDF exercise without honest completion data.",
      "What was at stake was instructor time, learner consistency, and leadership visibility into training throughput. Scaling cohorts without a course-centric LMS would multiply improvisation instead of reusable program structure.",
      "EduLearn needed lessons, enrollments, assessments, and attendance hanging off the same course record, with clear admin catalog work and instructor delivery duties.",
    ],
    approach:
      "A course-centric LMS: lessons, enrollments, assessments, and attendance hang off the same course record with clear admin and instructor duties.",
    approachPoints: [
      "Separated admin catalog work from instructor delivery work early.",
      "Made enrollment status visible before building advanced assessments.",
      "Tied attendance to cohorts so completion stories stay honest.",
      "Prepared certificate-ready status fields once assessment paths were stable.",
    ],
    outcomes: [
      "Instructors launch lessons without digging through shared drives",
      "Admins see enrollments and cohort health without spreadsheet exports",
      "Assessments live inside the course path learners already follow",
      "Attendance supports completion decisions instead of sitting in side lists",
      "New cohorts reuse a proven course structure",
      "Leadership gets consistent training throughput metrics",
    ],
    insights: [
      "LMS adoption dies when instructors inherit admin complexity, roles must split.",
      "Assessments only matter when enrollment and attendance definitions are clear.",
      "Certificate readiness is a data discipline, not a PDF template alone.",
    ],
    clientQuote:
      "Training finally feels operated, not improvised. Courses, enrollments, and assessments live together, and we stopped running cohorts from inboxes.",
    faqs: [
      faq(
        "Can existing course videos be reused?",
        "Yes. For EduLearn we connect existing media into lesson structures rather than forcing a full remake.",
        "Content",
        "left",
      ),
      faq(
        "Do learners get a separate portal experience?",
        "Learners follow enrolled courses with clear lesson and assessment paths. Admins and instructors keep operational dashboards.",
        "Roles",
        "right",
      ),
      faq(
        "Is live class tooling included?",
        "This engagement focused on catalog, enrollment, lessons, assessments, and attendance. Live class tools can integrate when needed.",
        "Scope",
        "left",
      ),
      faq(
        "Where are product module FAQs?",
        "On the E-Learning Portal project page. This case study stays on the EduLearn training-operations story.",
        "Scope",
        "right",
      ),
      faq(
        "Who defined admin vs instructor duties?",
        "Training admins and instructors separated catalog work from delivery early so instructors never inherited full admin complexity.",
        "Roles",
        "left",
      ),
      faq(
        "What was the engagement timeline?",
        "Twelve weeks: catalog and enrollment visibility first, then lessons and attendance, then assessments and certificate-ready status fields.",
        "Timeline",
        "right",
      ),
      faq(
        "Were video hosting or SSO integrated?",
        "Existing media was structured into lessons. Deeper SSO or live-class integrations can follow once enrollment and assessment paths are stable.",
        "Integrations",
        "left",
      ),
      faq(
        "How were instructors trained?",
        "Instructors practiced launching lessons, recording attendance, and running assessments inside the course path before new cohorts went fully live.",
        "Training",
        "right",
      ),
      faq(
        "Does this fit a smaller training team?",
        "Yes. A leaner catalog still benefits from one course record. Advanced assessment types can wait until enrollment operations are smooth.",
        "Fit",
        "left",
      ),
      faq(
        "How were outcomes measured?",
        "EduLearn tracked instructor material hunt time, admin export dependency, assessment completion inside the course path, and consistency of throughput metrics.",
        "Outcomes",
        "right",
      ),
      faq(
        "Was existing course content migrated?",
        "Yes. Drive and inbox materials were structured into courses and lessons. Enrollment lists for active cohorts were loaded before assessments expanded.",
        "Migration",
        "left",
      ),
      faq(
        "What support continued after launch?",
        "Post-launch we refined enrollment views, attendance rules, and certificate-ready fields from the first cohorts on the new portal.",
        "Support",
        "right",
      ),
      faq(
        "How did discovery shape the LMS?",
        "Discovery showed EduLearn pain was operational scatter, not lack of courses. That drove a course-centric model before advanced assessment features.",
        "Engagement",
        "left",
      ),
    ],
  },
};

export type CaseStudyDetail = {
  slug: string;
  title: string;
  headline: string;
  clientName: string;
  industry: string;
  duration: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;
  highlights: string[];
  overview: string[];
  challenge: string[];
  approach: string;
  approachPoints: string[];
  keyFeatures: string[];
  technologiesUsed: string[];
  technologyStack: ProjectTechnologyStack;
  outcomes: string[];
  insights: string[];
  clientQuote: string;
  faqs: FaqItem[];
  image: ImageAsset;
  slides: CaseStudySlide[];
  modulePictures: CaseStudySlide[];
};

/**
 * Build a case-study detail from narrative/meta + project visuals.
 * Visuals are passed in so this file never imports `projects.ts` (avoids a circular init crash).
 */
export function getCaseStudyDetailBySlug(
  slug: string,
  project: CaseStudyProjectVisuals,
): CaseStudyDetail | undefined {
  const narrative = caseStudyNarratives[slug];
  const meta = projectCaseStudyMeta[slug];

  if (!narrative || !meta || project.slug !== slug) {
    return undefined;
  }

  const modulePictures =
    project.slug === "hr-management-software"
      ? project.slides.filter(
          (slide) =>
            !slide.image.src.includes("Hr-Management-Software-Overview"),
        )
      : project.slides;

  return {
    slug,
    title: undashText(project.title),
    headline: undashText(meta.cardTitle),
    clientName: undashText(meta.clientName),
    industry: undashText(meta.industry),
    duration: undashText(meta.duration),
    lede: undashText(narrative.lede),
    metaTitle: undashText(narrative.metaTitle),
    metaDescription: undashText(narrative.metaDescription),
    highlights: undashList(narrative.highlights),
    overview: undashList(narrative.overview),
    challenge: undashList(narrative.challenge),
    approach: undashText(narrative.approach),
    approachPoints: undashList(narrative.approachPoints),
    keyFeatures: undashList(meta.keyFeatures),
    technologiesUsed: undashList(meta.technologiesUsed),
    technologyStack: {
      frontend: undashList(meta.technologyStack.frontend),
      backend: undashList(meta.technologyStack.backend),
      database: undashList(meta.technologyStack.database),
      cloud: meta.technologyStack.cloud
        ? undashList(meta.technologyStack.cloud)
        : undefined,
    },
    outcomes: undashList(narrative.outcomes),
    insights: undashList(narrative.insights),
    clientQuote: undashText(narrative.clientQuote),
    faqs: narrative.faqs.map((item) => ({
      ...item,
      question: undashText(item.question),
      answer: undashText(item.answer),
    })),
    image: project.image,
    slides: project.slides.map((slide) => ({
      ...slide,
      label: undashText(slide.label),
      caption: undashText(slide.caption),
    })),
    modulePictures: modulePictures.map((slide) => ({
      ...slide,
      label: undashText(slide.label),
      caption: undashText(slide.caption),
    })),
  };
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudyNarratives);
}

export function caseStudyDetailPath(slug: string): string {
  return `${caseStudyPath}/${slug}`;
}

function techTags(slug: string): string[] {
  const meta = projectCaseStudyMeta[slug];
  if (!meta) return [];

  const tags = [
    ...meta.technologyStack.frontend.slice(0, 2),
    meta.technologyStack.backend[0],
    meta.technologyStack.database[0],
  ].filter(Boolean);

  return undashList(tags)
    .filter((tech, index, arr) => arr.indexOf(tech) === index)
    .slice(0, 4);
}

function toCaseStudy(project: (typeof projects)[number]): CaseStudy {
  const meta = projectCaseStudyMeta[project.slug];
  const narrative = caseStudyNarratives[project.slug];
  if (!meta) {
    throw new Error(`Missing case study meta for slug: ${project.slug}`);
  }
  if (!narrative) {
    throw new Error(`Missing case study narrative for slug: ${project.slug}`);
  }

  const summary = undashText(narrative.lede);

  return {
    slug: project.slug,
    title: undashText(project.title),
    cardTitle: undashText(meta.cardTitle),
    clientName: undashText(meta.clientName),
    category: undashText(meta.industry),
    status: "Completed",
    problem: undashText(narrative.challenge.join(" ")),
    solution: undashText(narrative.approach),
    summary,
    technologies: techTags(project.slug),
    outcomes: undashList(narrative.outcomes.slice(0, 4)),
    image: project.image,
  };
}

export const caseStudies: CaseStudy[] = projects.map(toCaseStudy);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

export const caseStudyPageMeta = {
  title: "Software Case Studies | Challenges, Approach & Outcomes",
  description:
    "Engagement case studies covering business challenges, delivery approach, and outcomes for CRM, ERP, POS, HMS, and custom software clients, distinct from our product project pages.",
  hero: {
    eyebrow: "Case Studies",
    title: "How we solve real product problems",
    description:
      "Each case study focuses on the business challenge, how we sequenced delivery, and what changed for the client. For module-level product detail, visit the matching project page.",
  },
  bookCall: {
    title: "Want the full story behind one of our builds?",
    description:
      "Book a call and we'll walk you through the architecture, challenges, and outcomes of a project similar to yours.",
    cta: "Book a call",
    href: contactPath,
  },
  closing: {
    title: "Planning something similar?",
    description:
      "Tell us about your product goals. We'll share relevant experience and respond within one business day.",
    cta: "Get a free quote",
    href: contactPath,
  },
} as const;
