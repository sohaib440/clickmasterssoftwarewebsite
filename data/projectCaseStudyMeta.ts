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

const webStack = (
  extras: Partial<ProjectTechnologyStack> = {},
): ProjectTechnologyStack => ({
  frontend: extras.frontend ?? ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  backend: extras.backend ?? ["Node.js", "REST APIs"],
  database: extras.database ?? ["PostgreSQL"],
  cloud: extras.cloud ?? ["Vercel", "Cloud hosting"],
});

export const projectCaseStudyMeta: Record<string, ProjectCaseStudyMeta> = {
  "prime-lead-crm": {
    clientName: "Apex Call Center Group",
    cardTitle: "Unifying Lead Ownership and Sales Visibility for Call Center Teams",
    industry: "Call Center · Sales Operations",
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
      "We mapped the full call-center floor — lead intake, ownership, coaching, and attendance — then shipped a single CRM so managers and agents run daily sales from one workspace instead of spreadsheets and side chats.",
  },
  "ai-school-erp": {
    clientName: "BrightPath Academy Network",
    cardTitle: "Modernizing School Operations with AI Attendance and Unified Portals",
    industry: "Education · School Administration",
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
    industry: "Travel · Tourism · Booking",
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
    cardTitle: "Streamlining Restaurant Orders Inventory and Front of House Speed",
    industry: "Hospitality · Restaurant Operations",
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
    industry: "Travel · Tour Operations",
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
      "We unified tour operations — packages, bookings, flights, hotels, transport, payments, and invoices — into one management system so agencies stop juggling disconnected tools.",
  },
  "hotel-management-system": {
    clientName: "Grand Meridian Hotels",
    cardTitle: "Connecting Reservations Housekeeping Finance and Hotel Security",
    industry: "Hospitality · Hotels",
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
    cardTitle: "Powering Multi Branch Retail Checkout Inventory and AI Monitoring",
    industry: "Retail · Point of Sale",
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
    industry: "Healthcare · Hospitals & Clinics",
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
    industry: "Finance · Cash Operations",
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
    cardTitle: "Running Hire to Exit HR Payroll and Performance in One Platform",
    industry: "Human Resources · Workforce",
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
      "We built an AI-assisted HRMS covering the full employee lifecycle — hire to exit — so HR teams run attendance, payroll, recruitment, and performance from one platform.",
  },
  "medicine-inventory-system": {
    clientName: "MediStock Pharmacy Chain",
    cardTitle: "Improving Pharmacy Stock Accuracy Expiry Control and Purchasing",
    industry: "Healthcare · Pharmacy Inventory",
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
      "We designed inventory around pharmacy realities — batches, expiry, suppliers, and purchase orders — so stock movement stays accurate and near-expiry losses are caught early.",
  },
  "e-learning-portal": {
    clientName: "EduLearn Training Institute",
    cardTitle: "Delivering Courses Enrollments Assessments and Attendance in One LMS",
    industry: "Education · E-Learning · LMS",
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
      "We built EduLearn as one LMS for admins and instructors — courses, enrollments, lessons, assessments, and attendance — so learning teams stop running training across emails and folders.",
  },
};
