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

const hotelManagementSystemSlides: ProjectSlide[] = [
  {
    label: "System overview",
    caption:
      "A complete hotel platform covering reservations, rooms, housekeeping, guests, finance, reports, staff, and AI-powered operations.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Overview.jpeg",
      "Hotel management system overview",
    ),
  },
  {
    label: "Hotel dashboard",
    caption:
      "Live bookings, guests, revenue, occupancy, ADR, RevPAR, room status, and today's front-desk summary in one overview.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Dashboard.jpeg",
      "Hotel management system dashboard",
    ),
  },
  {
    label: "Reservations",
    caption:
      "Search, filter, and manage reservations with guest details, room assignment, payment status, and reservation actions.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Reservations.jpeg",
      "Hotel management system reservations",
    ),
  },
  {
    label: "Reservation list",
    caption:
      "Track confirmed, pending, checked-in, and cancelled bookings with sources, amounts, and guest counts.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Reservations-List.jpeg",
      "Hotel management system reservation list",
    ),
  },
  {
    label: "Front desk check-in",
    caption:
      "Guided check-in workflow for guest details, stay information, room assignment, amenities, and payment summary.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Check-In.jpeg",
      "Hotel management system check-in",
    ),
  },
  {
    label: "Rooms",
    caption:
      "Manage room inventory, types, floors, rates, occupancy status, amenities, and current guest assignments.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Rooms.jpeg",
      "Hotel management system rooms",
    ),
  },
  {
    label: "Housekeeping",
    caption:
      "Assign cleaning tasks, monitor staff workload, track room readiness, and manage linen and inspection workflows.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Housekeeping.jpeg",
      "Hotel management system housekeeping",
    ),
  },
  {
    label: "Housekeeping status",
    caption:
      "Room-by-room clean, dirty, cleaning, inspection, and out-of-service status with staff assignments and priorities.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Housekeeping-Status.jpeg",
      "Hotel management system housekeeping status",
    ),
  },
  {
    label: "Finance",
    caption:
      "Track revenue, expenses, net profit, invoices, cash flow, and category-level hotel financial performance.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Finance.jpeg",
      "Hotel management system finance",
    ),
  },
  {
    label: "Reports",
    caption:
      "Occupancy, revenue, ADR, RevPAR, guest volume, and department performance with exportable operational reports.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Reports.jpeg",
      "Hotel management system reports",
    ),
  },
  {
    label: "Employees",
    caption:
      "Maintain employee profiles, departments, designations, payroll context, leave status, and role details.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Employees.jpeg",
      "Hotel management system employees",
    ),
  },
  {
    label: "AI attendance",
    caption:
      "Face-recognition attendance with present, late, and absent tracking, live camera recognition, and department summaries.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Ai-Attendance.jpeg",
      "Hotel management system AI attendance",
    ),
  },
  {
    label: "AI camera",
    caption:
      "Live camera feeds, event detection, alerts, storage overview, and AI analytics for hotel security operations.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Ai-Camera.jpeg",
      "Hotel management system AI camera dashboard",
    ),
  },
  {
    label: "Secure sign-in",
    caption:
      "Role-based hotel login for owners, managers, front desk, housekeeping, finance, restaurant, and security teams.",
    image: img(
      "/projects/hotel-management-system/Hotel-Management-System-Sign-In.jpeg",
      "Hotel management system sign-in",
    ),
  },
];

const royalPosSlides: ProjectSlide[] = [
  {
    label: "System overview",
    caption:
      "An AI-powered retail POS suite covering checkout, inventory, products, customers, analytics, and live camera monitoring.",
    image: img(
      "/projects/royal-pos/Royal-Pos-Overview.jpeg",
      "Royal POS system overview",
    ),
  },
  {
    label: "POS checkout",
    caption:
      "Fast product search, category filters, cart management, taxes, discounts, and multi-method payment checkout.",
    image: img(
      "/projects/royal-pos/Royal-Pos-Checkout.jpeg",
      "Royal POS checkout screen",
    ),
  },
  {
    label: "Sale details",
    caption:
      "Completed sale invoices with itemized products, payment summary, change calculation, and print or share actions.",
    image: img(
      "/projects/royal-pos/Royal-Pos-Sale-Details.jpeg",
      "Royal POS sale details and invoice",
    ),
  },
  {
    label: "Inventory",
    caption:
      "Track stock levels, warehouses, low-stock alerts, stock value, and product movement across branches.",
    image: img(
      "/projects/royal-pos/Royal-Pos-Inventory.jpeg",
      "Royal POS inventory management",
    ),
  },
  {
    label: "AI monitoring",
    caption:
      "Live store camera feeds with people counting, dwell time, conversion insights, alerts, and heat maps.",
    image: img(
      "/projects/royal-pos/Royal-Pos-Ai-Monitoring.jpeg",
      "Royal POS AI camera monitoring",
    ),
  },
  {
    label: "Reports",
    caption:
      "Sales, orders, profit, payment methods, top products, and branch performance with export-ready analytics.",
    image: img(
      "/projects/royal-pos/Royal-Pos-Reports.jpeg",
      "Royal POS reports and analytics",
    ),
  },
  {
    label: "Settings",
    caption:
      "Configure business details, branches, users, payments, receipts, taxes, backups, integrations, and security.",
    image: img(
      "/projects/royal-pos/Royal-Pos-Settings.jpeg",
      "Royal POS system settings",
    ),
  },
  {
    label: "Secure sign-in",
    caption:
      "Branded retail login with secure authentication so store teams can access POS and operations modules.",
    image: img(
      "/projects/royal-pos/Royal-Pos-Sign-In.jpeg",
      "Royal POS sign-in",
    ),
  },
];

const hospitalManagementSystemSlides: ProjectSlide[] = [
  {
    label: "Secure sign-in",
    caption:
      "Login and registration flows with role and department selection for secure hospital access.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Sign-In.png",
      "Hospital management system sign-in",
    ),
  },
  {
    label: "System overview",
    caption:
      "A complete hospital platform covering appointments, patients, doctors, beds, billing, pharmacy, reports, and staff operations.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Overview.png",
      "Hospital management system overview",
    ),
  },
  {
    label: "Hospital dashboard",
    caption:
      "Live patients, appointments, doctors, bed availability, revenue, department mix, and hospital alerts in one overview.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Dashboard.png",
      "Hospital management system dashboard",
    ),
  },
  {
    label: "Appointments",
    caption:
      "Schedule and track upcoming, completed, and cancelled appointments by doctor, department, and visit purpose.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Appointments.png",
      "Hospital management system appointments",
    ),
  },
  {
    label: "Patients",
    caption:
      "Maintain patient profiles, demographics, departments, last visits, and active status across the hospital.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Patients.png",
      "Hospital management system patients",
    ),
  },
  {
    label: "Doctors",
    caption:
      "Manage doctor records, specialties, departments, contact details, experience, and on-duty status.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Doctors.png",
      "Hospital management system doctors",
    ),
  },
  {
    label: "Departments",
    caption:
      "Organize hospital departments with heads, floors, assigned doctors, staff counts, and active status.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Departments.png",
      "Hospital management system departments",
    ),
  },
  {
    label: "Bed management",
    caption:
      "Track occupied, available, cleaning, and out-of-service beds by ward, floor, and bed type.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Bed-Management.png",
      "Hospital management system bed management",
    ),
  },
  {
    label: "Billing & invoices",
    caption:
      "Create and manage invoices with paid, pending, and overdue status plus payment method summaries.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Billing.png",
      "Hospital management system billing and invoices",
    ),
  },
  {
    label: "Payments",
    caption:
      "Record collections across cash, card, transfer, wallet, and insurance with refunds and daily totals.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Payments.png",
      "Hospital management system payments",
    ),
  },
  {
    label: "Pharmacy",
    caption:
      "Monitor medicine inventory, low-stock and expiry alerts, top-selling drugs, and pharmacy sales.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Pharmacy.png",
      "Hospital management system pharmacy",
    ),
  },
  {
    label: "Reports & analytics",
    caption:
      "Review patients, appointments, revenue, occupancy, department performance, and monthly hospital KPIs.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Reports.png",
      "Hospital management system reports and analytics",
    ),
  },
  {
    label: "Doctor portal",
    caption:
      "Doctor workspace for schedules, consultations, prescriptions, lab orders, patients, and messages.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Doctor-Portal.png",
      "Hospital management system doctor portal",
    ),
  },
  {
    label: "Users & roles",
    caption:
      "Control hospital users, roles, permissions, departments, and active access across clinical and admin teams.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Users-Roles.png",
      "Hospital management system users and roles",
    ),
  },
  {
    label: "Settings",
    caption:
      "Configure hospital profile, preferences, security, backups, system information, and theme options.",
    image: img(
      "/projects/hospital-management-system/Hospital-Management-System-Settings.png",
      "Hospital management system settings",
    ),
  },
];

const cashManagementSystemSlides: ProjectSlide[] = [
  {
    label: "Secure sign-in",
    caption:
      "Login access for finance teams to manage cash accounts, transactions, budgets, and reports securely.",
    image: img(
      "/projects/cash-management-system/Cash-Management-System-Sign-In.png",
      "Cash management system sign-in",
    ),
  },
  {
    label: "Cash dashboard",
    caption:
      "Live overview of balances, income, expenses, transfers, and cash-flow trends across accounts.",
    image: img(
      "/projects/cash-management-system/Cash-Management-System-Dashboard.png",
      "Cash management system dashboard",
    ),
  },
  {
    label: "Accounts",
    caption:
      "Maintain cash, bank, and wallet accounts with balances, statuses, and account-level visibility.",
    image: img(
      "/projects/cash-management-system/Cash-Management-System-Accounts.png",
      "Cash management system accounts",
    ),
  },
  {
    label: "Transactions",
    caption:
      "Track every cash movement with filters by account, type, date, payee, and category.",
    image: img(
      "/projects/cash-management-system/Cash-Management-System-Transactions.png",
      "Cash management system transactions",
    ),
  },
  {
    label: "Income",
    caption:
      "Record and categorize incoming cash with sources, accounts, and recurring income patterns.",
    image: img(
      "/projects/cash-management-system/Cash-Management-System-Income.png",
      "Cash management system income",
    ),
  },
  {
    label: "Expenses",
    caption:
      "Capture outgoing spend by category, payee, account, and approval-ready expense history.",
    image: img(
      "/projects/cash-management-system/Cash-Management-System-Expenses.png",
      "Cash management system expenses",
    ),
  },
  {
    label: "Transfers",
    caption:
      "Move funds between accounts with clear from/to records and transfer history.",
    image: img(
      "/projects/cash-management-system/Cash-Management-System-Transfers.png",
      "Cash management system transfers",
    ),
  },
  {
    label: "Categories",
    caption:
      "Organize income and expense categories so reporting stays consistent across the business.",
    image: img(
      "/projects/cash-management-system/Cash-Management-System-Categories.png",
      "Cash management system categories",
    ),
  },
  {
    label: "Payees",
    caption:
      "Manage vendors, recipients, and payee profiles linked to expenses and transfers.",
    image: img(
      "/projects/cash-management-system/Cash-Management-System-Payees.png",
      "Cash management system payees",
    ),
  },
  {
    label: "Budgets",
    caption:
      "Set budgets by category or period and monitor spend against planned limits.",
    image: img(
      "/projects/cash-management-system/Cash-Management-System-Budgets.png",
      "Cash management system budgets",
    ),
  },
  {
    label: "Reports",
    caption:
      "Review cash-flow, income vs expense, account summaries, and period performance reports.",
    image: img(
      "/projects/cash-management-system/Cash-Management-System-Reports.png",
      "Cash management system reports",
    ),
  },
  {
    label: "Audit log",
    caption:
      "Trace user actions, edits, and financial changes with a clear audit trail.",
    image: img(
      "/projects/cash-management-system/Cash-Management-System-Audit-Log.png",
      "Cash management system audit log",
    ),
  },
];

const hrManagementSoftwareSlides: ProjectSlide[] = [
  {
    label: "System overview",
    caption:
      "An AI-powered HRMS covering employees, attendance, leave, payroll, recruitment, performance, and more.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Overview.jpeg",
      "HR management software overview",
    ),
  },
  {
    label: "Secure sign-in",
    caption:
      "Role-based login for HR admins, managers, and employees across the HRMS workspace.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Sign-In.jpeg",
      "HR management software sign-in",
    ),
  },
  {
    label: "HR dashboard",
    caption:
      "Live headcount, attendance, leave, payroll, recruitment, and workforce KPIs in one overview.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Dashboard.jpeg",
      "HR management software dashboard",
    ),
  },
  {
    label: "Employee management",
    caption:
      "Maintain employee profiles, departments, roles, status, and employment details in one directory.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Employee-Management.jpeg",
      "HR management software employee management",
    ),
  },
  {
    label: "Organizational structure",
    caption:
      "Map departments, reporting lines, and team hierarchy for clear org visibility.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Organizational-Structure.jpeg",
      "HR management software organizational structure",
    ),
  },
  {
    label: "Recruitment ATS",
    caption:
      "Run job openings, candidate pipelines, interviews, and hiring stages from an ATS workspace.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Recruitment-Ats.jpeg",
      "HR management software recruitment ATS",
    ),
  },
  {
    label: "Employee onboarding",
    caption:
      "Guide new hires through checklists, documents, and onboarding tasks from day one.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Employee-Onboarding.jpeg",
      "HR management software employee onboarding",
    ),
  },
  {
    label: "Attendance management",
    caption:
      "Track daily attendance, late marks, absences, and workforce presence across teams.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Attendance-Management.jpeg",
      "HR management software attendance management",
    ),
  },
  {
    label: "Leave management",
    caption:
      "Handle leave requests, balances, approvals, and policy-based leave types.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Leave-Management.jpeg",
      "HR management software leave management",
    ),
  },
  {
    label: "Payroll management",
    caption:
      "Process salaries, deductions, allowances, and payroll runs with clear employee pay records.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Payroll-Management.jpeg",
      "HR management software payroll management",
    ),
  },
  {
    label: "Performance management",
    caption:
      "Set goals, run reviews, and track employee performance cycles over time.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Performance-Management.jpeg",
      "HR management software performance management",
    ),
  },
  {
    label: "Training & learning",
    caption:
      "Assign training programs, track completion, and build learning paths for staff.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Training-Learning.jpeg",
      "HR management software training and learning",
    ),
  },
  {
    label: "Asset management",
    caption:
      "Assign and track company assets issued to employees with return and status history.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Asset-Management.jpeg",
      "HR management software asset management",
    ),
  },
  {
    label: "Expense reimbursement",
    caption:
      "Submit, approve, and reimburse employee expenses with clear claim status tracking.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Expense-Reimbursement.jpeg",
      "HR management software expense reimbursement",
    ),
  },
  {
    label: "Disciplinary management",
    caption:
      "Record warnings, incidents, and disciplinary actions with audit-ready history.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Disciplinary-Management.jpeg",
      "HR management software disciplinary management",
    ),
  },
  {
    label: "Exit management",
    caption:
      "Manage resignations, clearances, final settlements, and offboarding checklists.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Exit-Management.jpeg",
      "HR management software exit management",
    ),
  },
  {
    label: "Employee documents",
    caption:
      "Store contracts, IDs, certificates, and HR documents with employee-linked access.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Employee-Documents.jpeg",
      "HR management software employee documents",
    ),
  },
  {
    label: "Shift roster",
    caption:
      "Plan shifts, rosters, and staffing coverage across teams and working periods.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Shift-Roster.jpeg",
      "HR management software shift roster",
    ),
  },
  {
    label: "Settings",
    caption:
      "Configure company profile, HR policies, roles, preferences, and system options.",
    image: img(
      "/projects/hr-management-software/Hr-Management-Software-Settings.jpeg",
      "HR management software settings",
    ),
  },
];

const medicineInventorySystemSlides: ProjectSlide[] = [
  {
    label: "System overview",
    caption:
      "A pharmacy inventory platform for medicines, suppliers, purchases, stock movement, batches, and expiry control.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Overview.png",
      "Medicine inventory system overview",
    ),
  },
  {
    label: "Secure sign-in",
    caption:
      "Secure login for pharmacy and inventory staff managing medicine stock and purchases.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Sign-In.png",
      "Medicine inventory system sign-in",
    ),
  },
  {
    label: "Inventory dashboard",
    caption:
      "Live stock levels, low-stock alerts, expiry warnings, purchases, and inventory KPIs in one view.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Dashboard.png",
      "Medicine inventory system dashboard",
    ),
  },
  {
    label: "Medicines",
    caption:
      "Maintain medicine catalogs with SKUs, strengths, pack sizes, categories, and stock status.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Medicines.png",
      "Medicine inventory system medicines",
    ),
  },
  {
    label: "Suppliers",
    caption:
      "Manage supplier contacts, lead times, and purchase relationships for pharmacy replenishment.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Suppliers.png",
      "Medicine inventory system suppliers",
    ),
  },
  {
    label: "Purchase orders",
    caption:
      "Create and track purchase orders from request through receiving against supplier catalogs.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Purchase-Orders.png",
      "Medicine inventory system purchase orders",
    ),
  },
  {
    label: "Stock in",
    caption:
      "Receive medicines into inventory with quantities, batches, and receiving references.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Stock-In.png",
      "Medicine inventory system stock in",
    ),
  },
  {
    label: "Stock out",
    caption:
      "Issue stock for sales, transfers, or consumption with clear outbound movement records.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Stock-Out.png",
      "Medicine inventory system stock out",
    ),
  },
  {
    label: "Adjustments",
    caption:
      "Correct inventory with controlled adjustments for damage, recount, or variance fixes.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Adjustments.png",
      "Medicine inventory system adjustments",
    ),
  },
  {
    label: "Batch tracking",
    caption:
      "Track medicine batches by lot number, quantity, and location for full traceability.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Batch-Tracking.png",
      "Medicine inventory system batch tracking",
    ),
  },
  {
    label: "Expiry management",
    caption:
      "Monitor near-expiry and expired stock so pharmacy teams can act before losses grow.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Expiry-Management.png",
      "Medicine inventory system expiry management",
    ),
  },
  {
    label: "Stock reports",
    caption:
      "Review stock on hand, movement history, low stock, and inventory valuation reports.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Stock-Reports.png",
      "Medicine inventory system stock reports",
    ),
  },
  {
    label: "Purchase reports",
    caption:
      "Analyze purchase orders, supplier spend, and receiving performance over time.",
    image: img(
      "/projects/medicine-inventory-system/Medicine-Inventory-System-Purchase-Reports.png",
      "Medicine inventory system purchase reports",
    ),
  },
];

const eLearningPortalSlides: ProjectSlide[] = [
  {
    label: "Secure sign-in / login",
    caption:
      "Secure sign-in for admins, instructors, and learners accessing the EduLearn portal.",
    image: img(
      "/projects/e-learning-portal/E-Learning-Portal-Sign-In.png",
      "E-Learning Portal secure sign-in login",
    ),
  },
  {
    label: "Admin dashboard",
    caption:
      "Admin overview of courses, enrollments, users, and learning activity across EduLearn.",
    image: img(
      "/projects/e-learning-portal/E-Learning-Portal-Dashboard.png",
      "E-Learning Portal admin dashboard",
    ),
  },
  {
    label: "Instructor dashboard",
    caption:
      "Instructor workspace for teaching load, course progress, and learner engagement.",
    image: img(
      "/projects/e-learning-portal/E-Learning-Portal-Instructor-Dashboard.png",
      "E-Learning Portal instructor dashboard",
    ),
  },
  {
    label: "User management",
    caption:
      "Manage learners, instructors, and admin roles with clear access controls.",
    image: img(
      "/projects/e-learning-portal/E-Learning-Portal-Users.png",
      "E-Learning Portal user management",
    ),
  },
  {
    label: "Course management",
    caption:
      "Create and organize courses with structure, status, and enrollment readiness.",
    image: img(
      "/projects/e-learning-portal/E-Learning-Portal-Courses.png",
      "E-Learning Portal course management",
    ),
  },
  {
    label: "Category management",
    caption:
      "Group courses into categories so learners can browse and discover content faster.",
    image: img(
      "/projects/e-learning-portal/E-Learning-Portal-Categories.png",
      "E-Learning Portal category management",
    ),
  },
  {
    label: "Enrollment management",
    caption:
      "Track learner enrollments, status, and course access from one enrollment workspace.",
    image: img(
      "/projects/e-learning-portal/E-Learning-Portal-Enrollments.png",
      "E-Learning Portal enrollment management",
    ),
  },
  {
    label: "Lesson management",
    caption:
      "Build lessons and learning paths that instructors can publish inside each course.",
    image: img(
      "/projects/e-learning-portal/E-Learning-Portal-Lessons.png",
      "E-Learning Portal lesson management",
    ),
  },
  {
    label: "Assignment management",
    caption:
      "Assign coursework, collect submissions, and keep assignment progress visible.",
    image: img(
      "/projects/e-learning-portal/E-Learning-Portal-Assignments.png",
      "E-Learning Portal assignment management",
    ),
  },
  {
    label: "Quiz management",
    caption:
      "Create quizzes and assessments to measure learning outcomes across courses.",
    image: img(
      "/projects/e-learning-portal/E-Learning-Portal-Quizzes.png",
      "E-Learning Portal quiz management",
    ),
  },
  {
    label: "Attendance management",
    caption:
      "Record and review learner attendance for classes, sessions, and course activity.",
    image: img(
      "/projects/e-learning-portal/E-Learning-Portal-Attendance.png",
      "E-Learning Portal attendance management",
    ),
  },
  {
    label: "System settings",
    caption:
      "Configure EduLearn portal preferences, roles, and platform settings in one place.",
    image: img(
      "/projects/e-learning-portal/E-Learning-Portal-Settings.png",
      "E-Learning Portal system settings",
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
  {
    ...(() => {
      const p = base("hotel-management-system");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "Hotel Management System Case Study | Hotel HMS Software",
    metaDescription:
      "Case study: Hotel Management System for reservations, front desk, rooms, housekeeping, finance, reports, employees, AI attendance, and AI camera monitoring.",
    highlights: [
      "Reservations & front desk",
      "Rooms & housekeeping",
      "Finance & reporting",
      "AI attendance & cameras",
    ],
    slides: hotelManagementSystemSlides,
    overview: [
      "Hotel Management System is an all-in-one hospitality platform built to run reservations, front desk, rooms, housekeeping, guests, finance, reporting, and staff operations from one workspace.",
      "Teams can check guests in, assign rooms, monitor housekeeping status, and manage occupancy while managers track revenue, ADR, RevPAR, and department performance live.",
      "AI attendance and AI camera modules add face recognition, live monitoring, alerts, and operational visibility for modern hotel security and workforce control.",
      "Role-based sign-in keeps owners, managers, front desk, housekeeping, finance, restaurant, and security teams on the modules they need.",
    ],
    problem:
      "Hotel operations were split across spreadsheets, paper front-desk logs, separate billing tools, and disconnected housekeeping updates. Reservation status was hard to trust, room readiness lagged, finance lacked clear category reporting, and managers had no single view of occupancy, staff attendance, or on-property security events.",
    solutions: [
      "Built a live hotel dashboard for bookings, guests, revenue, occupancy, ADR, RevPAR, room status, and today's operational summary.",
      "Delivered reservation and front-desk workflows for booking lists, guest details, check-in, room assignment, and payment summaries.",
      "Created rooms and housekeeping modules for inventory, rates, clean/dirty status, staff assignments, inspections, and linen visibility.",
      "Connected finance and reporting for revenue, expenses, invoices, cash flow, occupancy trends, and department performance.",
      "Implemented employee management with departments, designations, profiles, and operational status tracking.",
      "Added AI attendance and AI camera monitoring for face recognition, live feeds, alerts, storage overview, and security analytics.",
    ],
    whyNeedProduct: {
      title: "Why hotels need an integrated management system",
      paragraphs: [
        "When reservations, rooms, housekeeping, billing, and staff tools live apart, guest experience suffers and managers lose control of occupancy, readiness, and revenue.",
        "Hotel Management System gives every department a shared operational source of truth while giving leadership live hospitality KPIs and AI-assisted oversight.",
      ],
      reasons: [
        "Centralize reservations, check-in, and guest records",
        "Keep room inventory and housekeeping status accurate in real time",
        "Track revenue, expenses, invoices, and cash flow clearly",
        "Monitor occupancy, ADR, RevPAR, and department performance",
        "Manage employees, attendance, and hotel workforce operations",
        "Use AI cameras and attendance to strengthen security and staffing control",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Hotel operations discovery",
        description:
          "Mapped reservation intake, front-desk check-in, room turnover, housekeeping, billing, reporting, and staff workflows.",
      },
      {
        step: 2,
        title: "HMS architecture & roles",
        description:
          "Designed modules, booking states, room status model, permissions, and role-ready navigation for hotel teams.",
      },
      {
        step: 3,
        title: "Front desk & rooms build",
        description:
          "Shipped dashboard, reservations, check-in, rooms, and guest workflows so operations could run core stays quickly.",
      },
      {
        step: 4,
        title: "Housekeeping & workforce",
        description:
          "Connected housekeeping status, assignments, employees, and attendance-ready staff records to daily room operations.",
      },
      {
        step: 5,
        title: "Finance, reports & AI",
        description:
          "Added finance overview, operational reports, AI attendance, and AI camera monitoring for management visibility.",
      },
      {
        step: 6,
        title: "Launch & optimization",
        description:
          "Onboarded hotel roles, validated peak check-in and turnover flows, and tuned dashboards from live usage.",
      },
    ],
    clientFeedback:
      "We needed one hotel system for reservations, rooms, housekeeping, finance, and reporting instead of scattered tools. Next Software Development Company delivered a Hotel Management System with AI attendance and camera monitoring that finally gives our team one operational workspace.",
    modulePictures: [],
    video: {
      title: "Hotel Management System product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One platform for reservations, front desk, rooms, and housekeeping",
      "Faster check-in with clear guest, stay, and payment workflows",
      "Live room readiness and housekeeping assignment visibility",
      "Connected finance and hospitality KPI reporting",
      "Employee and AI attendance control for hotel workforce operations",
      "AI camera monitoring for on-property security and alerts",
    ],
    faqs: [
      faq(
        "Who is Hotel Management System built for?",
        "Hotels, resorts, and hospitality groups that need reservations, front desk, rooms, housekeeping, finance, reporting, and staff operations in one platform.",
        "Scope",
        "left",
      ),
      faq(
        "What modules are included?",
        "Dashboard, reservations, check-in, rooms, housekeeping, finance, reports, employees, AI attendance, AI camera, and secure role-based sign-in.",
        "Modules",
        "right",
      ),
      faq(
        "Can the system manage room inventory?",
        "Yes. Rooms cover types, floors, rates, amenities, occupancy status, current guests, and out-of-service control.",
        "Rooms",
        "left",
      ),
      faq(
        "Does it support housekeeping workflows?",
        "Yes. Housekeeping tracks clean, dirty, cleaning, inspection, and out-of-service status with staff assignments and task visibility.",
        "Housekeeping",
        "right",
      ),
      faq(
        "Is finance and reporting included?",
        "Yes. Finance covers revenue, expenses, profit, invoices, and cash flow. Reports cover occupancy, ADR, RevPAR, guests, bookings, and department performance.",
        "Finance",
        "left",
      ),
      faq(
        "What AI features are included?",
        "AI attendance uses face recognition for present, late, and absent tracking. AI camera monitoring covers live feeds, events, alerts, and storage overview.",
        "AI",
        "right",
      ),
      faq(
        "Can access be limited by hotel role?",
        "Yes. Sign-in supports role-based access for owners, managers, front desk, housekeeping, finance, restaurant, and security teams.",
        "Access",
        "left",
      ),
      faq(
        "Is restaurant POS included?",
        "The hotel platform includes a Restaurant (POS) module path for integrated F&B operations alongside core hotel management.",
        "POS",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("royal-pos");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "Royal POS Case Study | AI-Powered Retail POS Software",
    metaDescription:
      "Case study: Royal POS, an AI-powered retail point-of-sale platform for checkout, inventory, products, customers, sales, reports, and live camera monitoring.",
    highlights: [
      "Fast POS checkout",
      "Inventory & warehouses",
      "Sales & reporting",
      "AI camera monitoring",
    ],
    slides: royalPosSlides,
    overview: [
      "Royal POS is an AI-powered retail point-of-sale and operations platform built for checkout, inventory, products, customers, sales, reporting, and multi-branch retail control.",
      "Cashiers can search or scan products, build carts, apply tax, and take cash, card, UPI, or wallet payments while inventory updates automatically.",
      "Managers get live sales, stock health, low-stock alerts, top products, and branch performance, plus AI camera monitoring for people flow, dwell time, and store alerts.",
      "Business settings cover branches, users, payments, receipts, taxes, backups, integrations, and security so the system fits growing retail teams.",
    ],
    problem:
      "The retailer was running billing, stock counts, customer records, and sales reporting across disconnected tools. Checkout was slow, inventory shortages appeared without warning, multi-branch visibility was weak, and managers lacked reliable sales conversion and in-store traffic insights.",
    solutions: [
      "Built a fast POS checkout with product search, categories, cart controls, taxes, discounts, and multi-method payments.",
      "Delivered sale details and invoice workflows with print, PDF, email, and SMS sharing after payment.",
      "Created inventory management for stock levels, warehouses, low-stock alerts, stock value, and movement analytics.",
      "Added AI camera monitoring for live feeds, people counting, dwell time, conversion insights, alerts, and heat maps.",
      "Connected reports for sales, orders, profit, payment methods, top products, and branch performance.",
      "Implemented settings for business details, branches, users, payments, receipts, taxes, backups, integrations, and security.",
    ],
    whyNeedProduct: {
      title: "Why retailers need an AI-powered POS",
      paragraphs: [
        "When checkout, inventory, customers, and reporting live in separate systems, sales slow down and stock losses hide until it is too late.",
        "Royal POS gives store teams one retail operating system while giving owners AI-assisted visibility into sales, stock, and in-store customer activity.",
      ],
      reasons: [
        "Process checkout faster with search, scan, cart, and multi-payment support",
        "Prevent stockouts with warehouse-level inventory and low-stock alerts",
        "Track sales, profit, payment mix, and top products in real time",
        "Understand store traffic with AI camera people counting and heat maps",
        "Run multi-branch retail from one shared platform",
        "Configure taxes, receipts, users, backups, and security centrally",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Retail workflow discovery",
        description:
          "Mapped checkout, stock control, purchasing, customer records, reporting, and branch operations.",
      },
      {
        step: 2,
        title: "POS architecture & roles",
        description:
          "Designed product catalog, cart lifecycle, inventory model, permissions, and manager analytics.",
      },
      {
        step: 3,
        title: "Checkout & sales build",
        description:
          "Shipped POS checkout, sale details, invoices, and payment flows for daily counter operations.",
      },
      {
        step: 4,
        title: "Inventory & catalog",
        description:
          "Connected products, warehouses, stock movement, low-stock alerts, and inventory valuation.",
      },
      {
        step: 5,
        title: "AI monitoring & reports",
        description:
          "Added AI camera monitoring, sales analytics, branch performance, and export-ready reports.",
      },
      {
        step: 6,
        title: "Configuration & launch",
        description:
          "Configured settings, trained staff by role, validated peak checkout flows, and refined the system after go-live.",
      },
    ],
    clientFeedback:
      "We needed a retail POS that handled checkout, inventory, reporting, and store monitoring together. Next Software Development Company delivered Royal POS with AI camera insights and the operational depth our multi-branch team needed.",
    modulePictures: [],
    video: {
      title: "Royal POS product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One AI-powered platform for checkout, inventory, and retail analytics",
      "Faster counter sales with clear cart, tax, and payment workflows",
      "Better stock control through warehouses and low-stock alerts",
      "Live sales, profit, and branch performance reporting",
      "AI camera monitoring for traffic, dwell time, and store alerts",
      "Configurable settings for growing multi-branch retail teams",
    ],
    faqs: [
      faq(
        "Who is Royal POS built for?",
        "Retail stores, multi-branch shops, and modern commerce teams that need checkout, inventory, customers, sales reporting, and AI store monitoring in one platform.",
        "Scope",
        "left",
      ),
      faq(
        "Which payment methods are supported?",
        "Checkout supports cash, card, UPI, wallet, and additional payment options with tax, discount, and change calculation.",
        "Payments",
        "right",
      ),
      faq(
        "Does Royal POS track inventory?",
        "Yes. Inventory covers stock quantities, warehouses, stock value, stock-in and stock-out movement, and low-stock or out-of-stock alerts.",
        "Inventory",
        "left",
      ),
      faq(
        "What AI features are included?",
        "AI camera monitoring includes live feeds, people counting, dwell time, conversion insights, alerts, demographics, and heat maps.",
        "AI",
        "right",
      ),
      faq(
        "Can managers review sales reports?",
        "Yes. Reports cover sales, orders, average order value, profit, payment methods, top products, and branch performance.",
        "Reports",
        "left",
      ),
      faq(
        "Is multi-branch retail supported?",
        "Yes. Branch selection and branch performance reporting help teams operate Main Branch and additional locations from one system.",
        "Branches",
        "right",
      ),
      faq(
        "Can business settings be customized?",
        "Yes. Settings cover business details, users and roles, payment methods, receipts, taxes, notifications, backups, integrations, and security.",
        "Settings",
        "left",
      ),
      faq(
        "Does the system generate invoices after sale?",
        "Yes. Completed sales create invoices with itemized products, totals, payment details, and options to print, download, email, or SMS.",
        "Invoices",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("hospital-management-system");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "Hospital Management System Case Study | MediCare HMS Software",
    metaDescription:
      "Case study: Hospital Management System for appointments, patients, doctors, beds, billing, pharmacy, reports, users, and a dedicated doctor portal.",
    highlights: [
      "Appointments & patient records",
      "Doctors, departments & beds",
      "Billing, payments & pharmacy",
      "Reports & doctor portal",
    ],
    slides: hospitalManagementSystemSlides,
    overview: [
      "Hospital Management System is an all-in-one healthcare platform built to run appointments, patients, doctors, departments, beds, billing, pharmacy, reporting, and user access from one workspace.",
      "Front-desk and admin teams can schedule visits, manage OPD and IPD records, allot beds, and process invoices while managers track revenue, occupancy, and department performance live.",
      "A dedicated doctor portal gives clinicians schedules, consultations, prescriptions, lab orders, medical records, and messaging without leaving the same hospital ecosystem.",
      "Role-based access keeps administrators, doctors, nurses, pharmacists, billing staff, and other hospital roles on the modules they need.",
    ],
    problem:
      "The hospital was running appointments, patient files, bed allotment, billing, pharmacy stock, and doctor schedules across paper logs and disconnected tools. Status was hard to trust, invoices lagged, stock shortages appeared late, and clinicians lacked a shared view of today’s patients and orders.",
    solutions: [
      "Built a live hospital dashboard for patients, appointments, doctors, beds, revenue, department mix, and operational alerts.",
      "Delivered appointment and patient modules with filters, visit purpose, department assignment, and status tracking.",
      "Created doctors, departments, and bed management for staffing, wards, occupancy, and allotment workflows.",
      "Connected billing, payments, and pharmacy for invoices, collections, refunds, medicine stock, and expiry alerts.",
      "Added reports and analytics for patients, appointments, revenue, occupancy, and department performance.",
      "Implemented a doctor portal plus users, roles, settings, and secure sign-in for clinical and admin teams.",
    ],
    whyNeedProduct: {
      title: "Why hospitals need an integrated management system",
      paragraphs: [
        "When appointments, beds, billing, pharmacy, and clinical work live in separate places, patient flow slows and revenue leaks through delayed invoices and unclear occupancy.",
        "Hospital Management System gives every department a shared operational source of truth while giving doctors a focused portal for daily clinical work.",
      ],
      reasons: [
        "Centralize appointments, patients, and doctor schedules",
        "Keep bed occupancy and ward allotment accurate in real time",
        "Track invoices, payments, refunds, and outstanding receivables",
        "Prevent pharmacy shortages with stock and expiry alerts",
        "Give doctors a portal for consultations, prescriptions, and lab orders",
        "Control access with users, roles, and hospital-wide settings",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Hospital workflow discovery",
        description:
          "Mapped appointments, admissions, bed allotment, billing, pharmacy, reporting, and doctor daily workflows.",
      },
      {
        step: 2,
        title: "HMS architecture & roles",
        description:
          "Designed modules, patient states, bed statuses, permissions, and role-ready navigation for hospital teams.",
      },
      {
        step: 3,
        title: "Clinical operations build",
        description:
          "Shipped dashboard, appointments, patients, doctors, departments, and bed management for core care flow.",
      },
      {
        step: 4,
        title: "Billing & inventory",
        description:
          "Connected invoices, payments, pharmacy stock, and collection summaries to hospital financial operations.",
      },
      {
        step: 5,
        title: "Doctor portal & analytics",
        description:
          "Added doctor workspace, reports, users and roles, settings, and secure authentication.",
      },
      {
        step: 6,
        title: "Launch & optimization",
        description:
          "Onboarded hospital roles, validated peak appointment and discharge flows, and tuned dashboards from live usage.",
      },
    ],
    clientFeedback:
      "We needed one hospital system for appointments, patients, beds, billing, and pharmacy instead of scattered tools. Next Software Development Company delivered a Hospital Management System with a doctor portal that finally keeps clinical and admin teams aligned.",
    modulePictures: [],
    video: {
      title: "Hospital Management System product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One platform for appointments, patients, doctors, and departments",
      "Clearer bed occupancy and allotment across wards and floors",
      "Connected billing, payments, and pharmacy inventory control",
      "Live hospital reporting for patients, revenue, and occupancy",
      "A dedicated doctor portal for schedules, prescriptions, and labs",
      "Role-based access for clinical, billing, and admin teams",
    ],
    faqs: [
      faq(
        "Who is Hospital Management System built for?",
        "Hospitals, clinics, and multi-specialty facilities that need appointments, patients, doctors, beds, billing, pharmacy, reports, and role-based access in one platform.",
        "Scope",
        "left",
      ),
      faq(
        "What modules are included?",
        "Dashboard, appointments, patients, doctors, departments, bed management, billing, payments, pharmacy, reports, doctor portal, users and roles, settings, and secure sign-in.",
        "Modules",
        "right",
      ),
      faq(
        "Can the system manage appointments?",
        "Yes. Appointments can be filtered by department, doctor, and status, with support for upcoming, completed, and cancelled visits.",
        "Appointments",
        "left",
      ),
      faq(
        "Does it support bed management?",
        "Yes. Beds are tracked by ward, floor, type, and status including occupied, available, cleaning, and out of service.",
        "Beds",
        "right",
      ),
      faq(
        "Is billing and pharmacy included?",
        "Yes. Billing covers invoices and receivables. Payments track collections and refunds. Pharmacy monitors stock, low stock, and expiry alerts.",
        "Billing",
        "left",
      ),
      faq(
        "What is the doctor portal for?",
        "Doctors get schedules, consultations, prescriptions, lab orders, patient overview, messages, and quick clinical actions in a dedicated workspace.",
        "Doctors",
        "right",
      ),
      faq(
        "Can access be limited by role?",
        "Yes. Users and roles control permissions for administrators, doctors, nurses, pharmacists, billing staff, and other hospital teams.",
        "Access",
        "left",
      ),
      faq(
        "What reports are available?",
        "Managers can review patients, appointments, consultations, revenue, invoices, payments, bed occupancy, and department performance.",
        "Reports",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("cash-management-system");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "Cash Management System Case Study | Finance Cash Software",
    metaDescription:
      "Case study: Cash Management System for accounts, income, expenses, transfers, payees, budgets, reports, and audit logs.",
    highlights: [
      "Accounts & cash dashboard",
      "Income, expenses & transfers",
      "Budgets, categories & payees",
      "Reports & audit trail",
    ],
    slides: cashManagementSystemSlides,
    overview: [
      "Cash Management System is a finance platform built to run accounts, income, expenses, transfers, categories, payees, budgets, reporting, and audit logging from one workspace.",
      "Finance teams can track balances across cash and bank accounts, record every movement, and keep income and spend categorized for clearer month-end reviews.",
      "Budgets and payee records help control planned spend while reports surface cash-flow trends, account summaries, and period performance.",
      "An audit log gives managers a reliable trail of edits and financial actions so cash operations stay accountable.",
    ],
    problem:
      "The business was tracking cash across spreadsheets, bank statements, and informal chat updates. Balances never matched, expense categories drifted, transfers were hard to reconcile, and managers lacked a trustworthy view of budgets versus actual spend.",
    solutions: [
      "Built a live cash dashboard for balances, income, expenses, transfers, and cash-flow trends.",
      "Delivered account and transaction modules with filters by type, date, payee, and category.",
      "Created income, expense, and transfer workflows so every cash movement is recorded consistently.",
      "Added categories, payees, and budgets for organized spend control and planned limits.",
      "Connected reports for cash-flow, income vs expense, and account performance summaries.",
      "Implemented secure sign-in plus an audit log for accountable financial operations.",
    ],
    whyNeedProduct: {
      title: "Why businesses need a cash management system",
      paragraphs: [
        "When accounts, expenses, and transfers live in separate spreadsheets, cash visibility collapses and budget overruns surface too late.",
        "Cash Management System gives finance teams one source of truth for balances, movements, budgets, and auditability.",
      ],
      reasons: [
        "Centralize cash and bank account balances",
        "Record income, expenses, and transfers in one ledger",
        "Keep categories and payees consistent for reporting",
        "Monitor budgets against actual spend",
        "Generate cash-flow and period performance reports",
        "Trace every change with an audit log",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Cash workflow discovery",
        description:
          "Mapped accounts, income sources, expense paths, transfers, budgets, and reporting needs with finance stakeholders.",
      },
      {
        step: 2,
        title: "Finance architecture",
        description:
          "Designed account structures, transaction types, categories, payee records, and permission-ready navigation.",
      },
      {
        step: 3,
        title: "Core cash modules",
        description:
          "Shipped dashboard, accounts, transactions, income, expenses, and transfers for daily cash operations.",
      },
      {
        step: 4,
        title: "Control & planning",
        description:
          "Added categories, payees, and budgets so spend stays organized against planned limits.",
      },
      {
        step: 5,
        title: "Reports & audit",
        description:
          "Connected cash-flow reports, account summaries, secure sign-in, and a full audit trail.",
      },
      {
        step: 6,
        title: "Launch & optimization",
        description:
          "Onboarded finance users, validated reconciliation flows, and tuned dashboards from live cash usage.",
      },
    ],
    clientFeedback:
      "We needed one place for accounts, expenses, transfers, and budgets instead of scattered sheets. Next Software Development Company delivered a Cash Management System that finally gives us clear cash flow and an audit trail we can trust.",
    modulePictures: [],
    video: {
      title: "Cash Management System product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One platform for accounts, income, expenses, and transfers",
      "Clearer cash balances across cash, bank, and wallet accounts",
      "Organized categories, payees, and budget tracking",
      "Live cash-flow and period performance reporting",
      "Accountable financial operations with an audit log",
      "Secure access for finance and admin teams",
    ],
    faqs: [
      faq(
        "Who is Cash Management System built for?",
        "Finance teams, SMEs, and multi-account businesses that need accounts, income, expenses, transfers, budgets, reports, and audit trails in one platform.",
        "Scope",
        "left",
      ),
      faq(
        "What modules are included?",
        "Dashboard, accounts, transactions, income, expenses, transfers, categories, payees, budgets, reports, audit log, and secure sign-in.",
        "Modules",
        "right",
      ),
      faq(
        "Can the system manage multiple accounts?",
        "Yes. Cash, bank, and wallet accounts can be maintained with balances, statuses, and account-level visibility.",
        "Accounts",
        "left",
      ),
      faq(
        "Does it track income and expenses?",
        "Yes. Income and expenses are recorded with categories, payees, accounts, and history for clear cash movement tracking.",
        "Cash flow",
        "right",
      ),
      faq(
        "Are transfers supported?",
        "Yes. Funds can be moved between accounts with clear from/to records and transfer history.",
        "Transfers",
        "left",
      ),
      faq(
        "Can we set budgets?",
        "Yes. Budgets can be set by category or period so teams monitor spend against planned limits.",
        "Budgets",
        "right",
      ),
      faq(
        "Is there an audit trail?",
        "Yes. The audit log traces user actions, edits, and financial changes for accountability.",
        "Audit",
        "left",
      ),
      faq(
        "What reports are available?",
        "Managers can review cash-flow, income vs expense, account summaries, and period performance reports.",
        "Reports",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("hr-management-software");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "HR Management Software Case Study | AI HRMS Payroll ATS",
    metaDescription:
      "Case study: HR Management Software for employees, attendance, leave, payroll, recruitment ATS, performance, training, assets, and exit management.",
    highlights: [
      "Employees, org & onboarding",
      "Attendance, leave & payroll",
      "Recruitment ATS & performance",
      "Training, assets & exit",
    ],
    slides: hrManagementSoftwareSlides,
    overview: [
      "HR Management Software is an AI-powered HRMS built to run employees, organizational structure, recruitment, onboarding, attendance, leave, payroll, performance, training, assets, expenses, discipline, documents, shifts, and exit workflows from one platform.",
      "HR and managers get a live dashboard for headcount, attendance, leave, payroll readiness, and hiring pipeline health while employees stay connected to the modules they need.",
      "Recruitment ATS, onboarding, and document storage help teams hire and ramp people faster without losing compliance paperwork.",
      "Payroll, performance, training, assets, and exit management keep the full employee lifecycle connected from join to offboarding.",
    ],
    problem:
      "The company was running HR across spreadsheets, email approvals, and disconnected tools for attendance, leave, payroll, hiring, and documents. Managers lacked a shared view of workforce status, onboarding lagged, and exit clearances were easy to miss.",
    solutions: [
      "Built a live HR dashboard for headcount, attendance, leave, payroll, and recruitment KPIs.",
      "Delivered employee, org structure, and document modules for a single workforce directory.",
      "Created recruitment ATS and onboarding flows for hiring and day-one readiness.",
      "Connected attendance, leave, shift roster, and payroll for accurate workforce operations.",
      "Added performance, training, assets, expenses, and disciplinary management.",
      "Implemented exit management, settings, and secure sign-in for complete lifecycle control.",
    ],
    whyNeedProduct: {
      title: "Why organizations need an integrated HRMS",
      paragraphs: [
        "When hiring, attendance, payroll, and documents live in separate tools, HR work slows and people data becomes unreliable.",
        "HR Management Software gives HR, managers, and employees one connected system for the full employee lifecycle.",
      ],
      reasons: [
        "Centralize employee records and organizational structure",
        "Run recruitment ATS and structured onboarding",
        "Track attendance, leave, and shift coverage accurately",
        "Process payroll with connected workforce data",
        "Manage performance, training, assets, and expenses",
        "Complete exit clearances with document and audit readiness",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "HR workflow discovery",
        description:
          "Mapped hiring, onboarding, attendance, leave, payroll, performance, assets, and exit processes with HR stakeholders.",
      },
      {
        step: 2,
        title: "HRMS architecture & roles",
        description:
          "Designed modules, employee states, permissions, and role-ready navigation for HR, managers, and staff.",
      },
      {
        step: 3,
        title: "Core people modules",
        description:
          "Shipped dashboard, employees, org structure, recruitment ATS, onboarding, and documents.",
      },
      {
        step: 4,
        title: "Time & payroll",
        description:
          "Connected attendance, leave, shift roster, and payroll for reliable workforce operations.",
      },
      {
        step: 5,
        title: "Lifecycle & controls",
        description:
          "Added performance, training, assets, expenses, discipline, exit management, settings, and secure sign-in.",
      },
      {
        step: 6,
        title: "Launch & optimization",
        description:
          "Onboarded HR roles, validated payroll and leave cycles, and tuned dashboards from live usage.",
      },
    ],
    clientFeedback:
      "We needed one HRMS for employees, attendance, leave, payroll, and hiring instead of scattered tools. Next Software Development Company delivered HR Management Software that finally keeps HR and managers aligned across the full employee lifecycle.",
    modulePictures: [],
    video: {
      title: "HR Management Software product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One platform for employees, org structure, and documents",
      "Connected recruitment ATS and employee onboarding",
      "Clearer attendance, leave, shifts, and payroll operations",
      "Performance, training, assets, and expense workflows in one place",
      "Structured disciplinary and exit management",
      "Role-based access for HR, managers, and employees",
    ],
    faqs: [
      faq(
        "Who is HR Management Software built for?",
        "Growing companies and HR teams that need employees, attendance, leave, payroll, recruitment, performance, training, assets, and exit management in one HRMS.",
        "Scope",
        "left",
      ),
      faq(
        "What modules are included?",
        "Overview, sign-in, dashboard, employees, org structure, recruitment ATS, onboarding, attendance, leave, payroll, performance, training, assets, expenses, discipline, exit, documents, shift roster, and settings.",
        "Modules",
        "right",
      ),
      faq(
        "Does it include a recruitment ATS?",
        "Yes. Job openings, candidate pipelines, interviews, and hiring stages are managed in a dedicated recruitment ATS workspace.",
        "Recruitment",
        "left",
      ),
      faq(
        "Can it manage attendance and leave?",
        "Yes. Attendance tracks presence and absences, while leave covers requests, balances, approvals, and policy-based leave types.",
        "Time",
        "right",
      ),
      faq(
        "Is payroll included?",
        "Yes. Payroll management covers salaries, deductions, allowances, and payroll runs with employee pay records.",
        "Payroll",
        "left",
      ),
      faq(
        "Does it support performance and training?",
        "Yes. Teams can set goals, run reviews, assign training programs, and track learning completion.",
        "Growth",
        "right",
      ),
      faq(
        "Can assets and expenses be tracked?",
        "Yes. Asset management tracks company equipment issued to staff, and expense reimbursement handles claims and approvals.",
        "Ops",
        "left",
      ),
      faq(
        "Is exit management supported?",
        "Yes. Resignations, clearances, final settlements, and offboarding checklists are managed in the exit module.",
        "Exit",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("medicine-inventory-system");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "Medicine Inventory System Case Study | Pharmacy Stock Software",
    metaDescription:
      "Case study: Medicine Inventory System for medicines, suppliers, purchase orders, stock in/out, batch tracking, expiry management, and reports.",
    highlights: [
      "Medicines & suppliers",
      "Purchase orders & stock movement",
      "Batch & expiry tracking",
      "Stock & purchase reports",
    ],
    slides: medicineInventorySystemSlides,
    overview: [
      "Medicine Inventory System is a pharmacy inventory platform built to run medicines, suppliers, purchase orders, stock in, stock out, adjustments, batch tracking, expiry management, and reporting from one workspace.",
      "Pharmacy teams can maintain catalogs, receive purchases, issue stock, and keep batch-level traceability without relying on paper registers.",
      "Expiry and low-stock visibility help staff act before shortages or wastage disrupt dispensing.",
      "Stock and purchase reports give managers a clear view of inventory health, supplier spend, and receiving performance.",
    ],
    problem:
      "The pharmacy was tracking medicine stock across notebooks, supplier chats, and disconnected sheets. Batches were hard to trace, expiry surprises caused write-offs, purchase orders lagged, and managers lacked reliable stock and purchase reports.",
    solutions: [
      "Built a live inventory dashboard for stock levels, low-stock alerts, expiry warnings, and purchase KPIs.",
      "Delivered medicine and supplier modules for catalog and replenishment control.",
      "Created purchase order workflows from request through receiving.",
      "Connected stock in, stock out, and adjustments for controlled inventory movement.",
      "Added batch tracking and expiry management for pharmacy traceability.",
      "Implemented stock and purchase reports plus secure sign-in for inventory teams.",
    ],
    whyNeedProduct: {
      title: "Why pharmacies need a medicine inventory system",
      paragraphs: [
        "When stock, batches, and purchases live in separate places, expiry losses rise and replenishment decisions become guesswork.",
        "Medicine Inventory System gives pharmacy teams one operational source of truth for stock movement, batches, expiry, and purchasing.",
      ],
      reasons: [
        "Centralize medicine catalogs and supplier records",
        "Run purchase orders with clear receiving status",
        "Track stock in, stock out, and adjustments accurately",
        "Maintain batch-level traceability across inventory",
        "Prevent wastage with expiry and low-stock alerts",
        "Generate stock and purchase performance reports",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Pharmacy workflow discovery",
        description:
          "Mapped medicine catalogs, suppliers, purchasing, receiving, dispensing stock out, and expiry handling.",
      },
      {
        step: 2,
        title: "Inventory architecture",
        description:
          "Designed stock states, batch records, purchase statuses, and permission-ready pharmacy navigation.",
      },
      {
        step: 3,
        title: "Catalog & purchasing",
        description:
          "Shipped dashboard, medicines, suppliers, and purchase orders for core replenishment flow.",
      },
      {
        step: 4,
        title: "Stock movement",
        description:
          "Connected stock in, stock out, and adjustments for controlled inventory changes.",
      },
      {
        step: 5,
        title: "Traceability & reporting",
        description:
          "Added batch tracking, expiry management, stock reports, purchase reports, and secure sign-in.",
      },
      {
        step: 6,
        title: "Launch & optimization",
        description:
          "Onboarded pharmacy roles, validated receiving and expiry alerts, and tuned reports from live inventory usage.",
      },
    ],
    clientFeedback:
      "We needed one system for medicines, purchases, batches, and expiry instead of scattered sheets. Next Software Development Company delivered a Medicine Inventory System that finally keeps our pharmacy stock accurate and report-ready.",
    modulePictures: [],
    video: {
      title: "Medicine Inventory System product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One platform for medicines, suppliers, and purchase orders",
      "Controlled stock in, stock out, and inventory adjustments",
      "Batch-level traceability across pharmacy inventory",
      "Earlier visibility into low stock and near-expiry medicines",
      "Clear stock and purchase reporting for managers",
      "Secure access for pharmacy and inventory teams",
    ],
    faqs: [
      faq(
        "Who is Medicine Inventory System built for?",
        "Pharmacies, clinics, and healthcare inventory teams that need medicines, suppliers, purchase orders, stock movement, batch tracking, expiry control, and reports in one platform.",
        "Scope",
        "left",
      ),
      faq(
        "What modules are included?",
        "Overview, sign-in, dashboard, medicines, suppliers, purchase orders, stock in, stock out, adjustments, batch tracking, expiry management, stock reports, and purchase reports.",
        "Modules",
        "right",
      ),
      faq(
        "Can purchase orders be managed?",
        "Yes. Purchase orders can be created and tracked from request through receiving against supplier catalogs.",
        "Purchasing",
        "left",
      ),
      faq(
        "Does it support stock in and stock out?",
        "Yes. Stock in records receiving quantities and batches, while stock out tracks outbound issues for sales, transfers, or consumption.",
        "Stock",
        "right",
      ),
      faq(
        "Is batch tracking included?",
        "Yes. Medicines can be tracked by lot number, quantity, and location for full batch traceability.",
        "Batches",
        "left",
      ),
      faq(
        "How does expiry management work?",
        "Near-expiry and expired stock are monitored so pharmacy teams can act before losses grow.",
        "Expiry",
        "right",
      ),
      faq(
        "Can inventory be adjusted?",
        "Yes. Controlled adjustments support damage, recount, and variance corrections with clear records.",
        "Adjustments",
        "left",
      ),
      faq(
        "What reports are available?",
        "Managers can review stock on hand, movement history, low stock, inventory valuation, purchase orders, supplier spend, and receiving performance.",
        "Reports",
        "right",
      ),
    ],
  },
  {
    ...(() => {
      const p = base("e-learning-portal");
      return {
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.image,
      };
    })(),
    metaTitle: "E-Learning Portal Case Study | EduLearn LMS Software",
    metaDescription:
      "Case study: EduLearn E-Learning Portal for courses, enrollments, lessons, assignments, quizzes, attendance, instructor dashboards, and admin management.",
    highlights: [
      "Courses, lessons & categories",
      "Enrollments & attendance",
      "Assignments & quizzes",
      "Admin & instructor dashboards",
    ],
    slides: eLearningPortalSlides,
    overview: [
      "EduLearn E-Learning Portal is a complete learning management platform built to run courses, enrollments, lessons, assignments, quizzes, attendance, certificates, instructor dashboards, and admin management from one workspace.",
      "Admins can manage users, categories, and system settings while instructors deliver courses, lessons, and assessments with clear learner visibility.",
      "Enrollment and attendance tools keep learner progress organized without scattered spreadsheets or disconnected tools.",
      "Assignments and quizzes give teams a practical way to measure outcomes and keep learning accountable end to end.",
    ],
    problem:
      "The training team was running courses, enrollments, lessons, and assessments across emails, folders, and disconnected tools. Instructors lacked a clear dashboard, attendance was inconsistent, quizzes and assignments were hard to track, and admins could not manage users, categories, and settings from one reliable portal.",
    solutions: [
      "Built secure sign-in with admin and instructor dashboards for day-to-day learning operations.",
      "Delivered user, course, and category modules for structured catalog and role management.",
      "Created enrollment workflows so learner access stays clear and trackable.",
      "Connected lessons, assignments, and quizzes for complete course delivery and assessment.",
      "Added attendance management for session and course participation records.",
      "Implemented system settings plus certificate-ready learning operations in EduLearn.",
    ],
    whyNeedProduct: {
      title: "Why institutions need an e-learning portal",
      paragraphs: [
        "When courses, enrollments, and assessments live in separate places, instructors lose visibility and learners fall through the cracks.",
        "EduLearn E-Learning Portal gives education teams one operational source of truth for courses, enrollments, lessons, assignments, quizzes, and attendance.",
      ],
      reasons: [
        "Centralize courses, categories, and learner enrollments",
        "Give instructors a dedicated teaching dashboard",
        "Deliver lessons with assignments and quizzes in one flow",
        "Track attendance and learner participation accurately",
        "Manage users and roles with clear admin controls",
        "Configure portal settings without custom workarounds",
      ],
    },
    procedure: [
      {
        step: 1,
        title: "Learning workflow discovery",
        description:
          "Mapped admin, instructor, and learner journeys across courses, enrollments, lessons, assessments, and attendance.",
      },
      {
        step: 2,
        title: "LMS architecture",
        description:
          "Designed role-based navigation, course structures, enrollment states, and assessment-ready module boundaries.",
      },
      {
        step: 3,
        title: "Catalog & users",
        description:
          "Shipped dashboards, users, courses, and categories for core EduLearn catalog control.",
      },
      {
        step: 4,
        title: "Delivery & assessment",
        description:
          "Connected enrollments, lessons, assignments, and quizzes for end-to-end course delivery.",
      },
      {
        step: 5,
        title: "Attendance & settings",
        description:
          "Added attendance management, system settings, and secure sign-in for portal operations.",
      },
      {
        step: 6,
        title: "Launch & optimization",
        description:
          "Onboarded admin and instructor roles, validated enrollment and assessment flows, and tuned dashboards from live usage.",
      },
    ],
    clientFeedback:
      "We needed one EduLearn portal for courses, enrollments, lessons, assignments, and attendance instead of scattered tools. Next Software Development Company delivered an E-Learning Portal that finally keeps our instructors and admins aligned.",
    modulePictures: [],
    video: {
      title: "E-Learning Portal product walkthrough",
      youtubeId: "",
    },
    outcome: [
      "One EduLearn platform for courses, enrollments, and lessons",
      "Admin and instructor dashboards for daily learning operations",
      "Assignments and quizzes connected to course delivery",
      "Attendance tracking for sessions and learner participation",
      "User, category, and settings control for portal admins",
      "Secure sign-in for learners, instructors, and administrators",
    ],
    faqs: [
      faq(
        "Who is E-Learning Portal built for?",
        "Schools, training institutes, and education teams that need courses, enrollments, lessons, assignments, quizzes, attendance, instructor dashboards, and admin management in one EduLearn platform.",
        "Scope",
        "left",
      ),
      faq(
        "What modules are included?",
        "Secure sign-in, admin dashboard, instructor dashboard, users, courses, categories, enrollments, lessons, assignments, quizzes, attendance, and system settings.",
        "Modules",
        "right",
      ),
      faq(
        "Can instructors manage their own courses?",
        "Yes. Instructors get a dedicated dashboard for teaching load, course progress, and learner engagement inside EduLearn.",
        "Instructors",
        "left",
      ),
      faq(
        "Does it support enrollments?",
        "Yes. Enrollment management tracks learner status and course access from one workspace.",
        "Enrollments",
        "right",
      ),
      faq(
        "Are assignments and quizzes included?",
        "Yes. Teams can create assignments and quizzes to collect submissions and measure learning outcomes.",
        "Assessments",
        "left",
      ),
      faq(
        "How does attendance work?",
        "Attendance management records and reviews learner participation for classes, sessions, and course activity.",
        "Attendance",
        "right",
      ),
      faq(
        "Can admins manage users and categories?",
        "Yes. Admins can manage learners, instructors, roles, course categories, and portal settings from the admin modules.",
        "Admin",
        "left",
      ),
      faq(
        "Is the portal ready for certificates?",
        "Yes. EduLearn is designed for certificate-ready learning operations alongside courses, enrollments, and assessments.",
        "Certificates",
        "right",
      ),
    ],
  },
].map((project) => ({
  ...project,
  modulePictures:
    project.slug === "hr-management-software"
      ? project.slides.filter(
          (slide) => !slide.image.src.includes("Hr-Management-Software-Overview")
        )
      : project.slides,
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
