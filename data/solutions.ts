/**
 * Solution page content.
 *
 * Add or edit solution entries here. Each entry powers:
 * - /solutions (the solution index)
 * - /solutions/{slug} (the detail page)
 */

import {
	BarChart3,
	Boxes,
	Brain,
	ShoppingCart,
	Users,
	Warehouse,
	Workflow,
} from "lucide-react";

import type { SolutionContent } from "@/lib/content/solutions.types";

const img = (src: string, alt: string, width = 800, height = 500) => ({
	src,
	alt,
	width,
	height,
});

export const solutions: SolutionContent[] = [
	{
		slug: "custom-erp-software-development",
		label: "Custom ERP Software Development",
		category: "Enterprise",
		icon: Workflow,
		tagline: "Bring Your Business Operations Into One Connected System",
		metaTitle: "Custom ERP Software Development Company | Enterprise ERP",
		description:
			"As a custom ERP development company, we provide custom ERP software development for businesses that need more than a standard, off-the-shelf platform. As a custom ERP software development company, our team designs and develops ERP systems around your processes, departments, users, data, reporting requirements, and long-term growth plans.\n\nInstead of managing finance, procurement, inventory, sales, HR, operations, and reporting across disconnected applications and spreadsheets, a custom ERP brings your critical business workflows together in one centralized platform.\n\nWith the right ERP architecture, your teams can work from the same data, automate repetitive processes, manage approvals, monitor performance, and give leadership a clear view of business operations.",
		metaDescription:
			"Custom ERP software for finance, inventory, procurement, sales, HR, and operations. Build scalable enterprise systems tailored to your business needs.",
		heroImage: img(
			"/projects/cash-management-system/cash-management-system-dashboard.webp",
			"Enterprise dashboard with charts and KPIs"
		),
		summary: ["Finance & accounting", "Procurement & inventory", "Operations & reporting"],
		projectSlugs: ["ai-school-erp", "cash-management-system", "hospital-management-system", "hotel-management-system"],
		features: [
			{ title: "Unified Data Model", description: "Connect departments through a centralized data model so employees can work from consistent and up-to-date information." },
			{ title: "Workflow Automation", description: "Automate repetitive processes, approvals, notifications, assignments, and business rules to reduce manual work." },
			{ title: "Role-Based Access", description: "Give users access to the modules, records, actions, and reports relevant to their responsibilities." },
			{ title: "Multi-Branch Management", description: "Manage multiple locations, departments, warehouses, or business units from a centralized platform." },
			{ title: "Approval Workflows", description: "Create configurable approval chains for procurement, expenses, payments, purchases, transfers, and other business processes." },
			{ title: "Audit Trails", description: "Track important actions and changes to improve accountability and operational visibility." },
			{ title: "Real-Time Reporting", description: "Give decision-makers access to current business information through dashboards, reports, filters, exports, and analytics." },
			{ title: "Modular Architecture", description: "Start with the most important modules and expand the ERP as your operational requirements grow." },
		],
		capabilities: [
			"Finance and accounting workflows",
			"Procurement, supplier management, and purchase orders",
			"Inventory, warehouse, and stock movement control",
			"Sales, order management, and customer tracking",
			"Human resources, attendance, leave, and employee records",
			"Manufacturing, project, and operational planning",
			"Custom dashboards, reports, and export workflows",
			"Role-based permissions, audit trails, and approval flows",
			"CRM, accounting, payment, logistics, and third-party integrations",
		],
		useCases: [
			{ title: "ERP for Manufacturing", description: "Connect production planning, raw materials, suppliers, inventory, purchasing, warehouse operations, and finance." },
			{ title: "ERP for Retail", description: "Manage products, purchasing, inventory, sales, branches, customers, employees, and financial information through one platform." },
			{ title: "ERP for Distribution", description: "Coordinate procurement, warehouses, stock transfers, suppliers, customers, orders, deliveries, and financial operations." },
			{ title: "ERP for Professional Services", description: "Connect projects, employees, time tracking, expenses, procurement, customers, invoicing, and reporting." },
			{ title: "ERP for Healthcare", description: "Build systems that connect patients, appointments, departments, billing, inventory, staff, reporting, and operational workflows." },
			{ title: "ERP for Education", description: "Connect students, teachers, attendance, fees, examinations, timetables, communication, and administration." },
			{ title: "ERP for Hospitality", description: "Manage reservations, guests, rooms, employees, purchasing, inventory, finance, reporting, and operational activities." },
			{ title: "ERP for Logistics", description: "Coordinate fleet movement, warehouse activity, route planning, supplier coordination, and operational visibility across the network." },
			{ title: "ERP for Construction", description: "Link projects, subcontractors, procurement, site activity, workforce planning, equipment tracking, and financial reporting." },
			{ title: "ERP for Real Estate", description: "Connect property operations, leasing, maintenance, vendors, finance, tenant records, and service workflows across portfolios." },
			{ title: "ERP for Agriculture", description: "Manage crop cycles, inventory, procurement, farm operations, equipment, supply chains, and financial planning in one system." },
			{ title: "ERP for Transportation", description: "Track vehicles, routes, fuel, maintenance, loads, dispatch operations, and real-time transport performance." },
		],
		highlights: [
			{ title: "Built around your process", description: "Our ERP is configured to fit the way your company works, not the other way around, with custom workflows, permissions, forms, and reporting." },
			{ title: "Modular and scalable", description: "Start with the functions you need most and expand the platform with additional modules, branches, users, and capabilities as the business grows." },
			{ title: "Long-term accountability", description: "Role-based access, approval trails, and audit-friendly architecture help your teams operate with more control and visibility." },
		],
		approach: [
			{ step: "01", title: "Discover", description: "Analyze your current processes, systems, departments, users, pain points, reporting needs, integrations, and growth goals." },
			{ step: "02", title: "Design", description: "Define the ERP architecture, modules, roles, workflows, data model, interfaces, security rules, and phased roadmap." },
			{ step: "03", title: "Build", description: "Develop the platform in iterations with regular demos, UAT checkpoints, and stakeholder validation of critical business logic." },
			{ step: "04", title: "Deploy", description: "Migrate data, configure the production environment, train users, support launch, and continue optimizing the platform after go-live." },
		],
	},
	{
		slug: "crm-development",
		label: "CRM Platform",
		category: "Customer",
		icon: Users,
		tagline: "Turn lead flow, account history, and team activity into one high-converting customer engine.",
		description:
			"Our CRM platforms give sales, customer success, and account teams a single place to manage relationships, monitor sales activity, and forecast revenue. Instead of scattered notes and disconnected tools, your team gets a clear process for every deal and customer touchpoint.",
		metaDescription:
			"Custom CRM development for sales pipelines, customer data, and revenue tracking. Next Software Development Company builds customer relationship platforms.",
		heroImage: img("/projects/prime-leads-project/prime-lead-crm-dashboard.webp", "Sales team reviewing CRM dashboard"),
		summary: ["Lead management", "Sales pipeline", "Customer timelines"],
		projectSlugs: ["prime-lead-crm", "travel-and-tours-management"],
		features: [
			{ title: "Pipeline clarity", description: "Track opportunities by stage, owner, probability, and forecast milestone with a dashboard your team can trust." },
			{ title: "Customer 360 view", description: "Unify contacts, deals, notes, emails, tasks, and support threads into a single profile for each account." },
			{ title: "Smart automation", description: "Automate reminders, lead assignment, follow-ups, and lifecycle tasks so your teams spend less time on admin and more on revenue." },
		],
		capabilities: [
			"Lead capture, scoring, and routing",
			"Deal tracking, stages, and forecasting",
			"Activity logs, task assignment, and reminder workflows",
			"Sales documents, quotes, and approval flows",
			"Email, calendar, and communication integrations",
			"Role-based dashboards and team performance tracking",
		],
		useCases: [
			{ title: "B2B sales organizations", description: "Manage longer sales cycles, multiple stakeholders, and custom quoting processes without losing momentum." },
			{ title: "Marketing-led lead systems", description: "Move leads from inbound forms to sales ownership with clear rules, records, and follow-up paths." },
			{ title: "Customer success teams", description: "Track renewals, onboarding, churn risks, and stakeholder engagement in one reliable workspace." },
		],
		highlights: [
			{ title: "Adoption-first design", description: "Create a CRM that sales teams actually enjoy using, with clean views, fewer clicks, and clearer ownership." },
			{ title: "Flexible data model", description: "Add custom fields, object types, views, and reporting structures aligned to your specific process and customer segments." },
			{ title: "Secure and governable", description: "Control role access, activity history, and enterprise security policies so sensitive customer data stays protected." },
		],
		approach: [
			{ step: "01", title: "Align", description: "Map your current funnel, customer stages, handoffs, and reporting gaps with real sales input." },
			{ step: "02", title: "Prototype", description: "Design pipeline views, account activities, and workflows so teams can validate the experience before build begins." },
			{ step: "03", title: "Integrate", description: "Connect email, calendars, communication tools, and your existing system landscape without disrupting current work." },
			{ step: "04", title: "Scale", description: "Roll out by team, measure adoption, and improve processes based on actual usage and delight." },
		],
	},
	{
		slug: "hr-management-software-development",
		label: "HRMS",
		category: "Enterprise",
		icon: Brain,
		tagline: "Simplify hiring, leave, performance, and employee service under one HR operating layer.",
		description:
			"Our human resource management systems replace scattered HR records, approval chains, and repetitive admin work with an organized platform for employees, managers, and HR teams. The experience becomes smoother for everyone and far more transparent for leadership.",
		metaDescription:
			"Custom HRMS software for employee management, leave management, performance, and HR workflows. Next Software Development Company builds people platforms.",
		heroImage: img("/projects/hr-management-software/hr-management-software-dashboard.webp", "HR team in a modern office"),
		summary: ["Employee lifecycle", "Attendance & leave", "Manager workflows"],
		projectSlugs: ["hr-management-software"],
		features: [
			{ title: "Employee self-service", description: "Employees can update contact details, request leave, track attendance, and access payslips without waiting on HR admin." },
			{ title: "Policy-aware approvals", description: "Configure leave types, accrual rules, approvals, and exceptions to fit your company rules and local compliance requirements." },
			{ title: "Performance visibility", description: "Support manager check-ins, goals, appraisals, and internal workflows with a structured record for each cycle." },
		],
		capabilities: [
			"Employee directory, profiles, and org structure",
			"Leave, attendance, and shift tracking",
			"Onboarding, offboarding, and checklist workflows",
			"Performance reviews and goal tracking",
			"Document and policy management",
			"Payroll and benefits integrations",
		],
		useCases: [
			{ title: "Mid-size organizations", description: "Replace spreadsheets and disconnected systems with a structured HR platform that scales as the team grows." },
			{ title: "Distributed workforces", description: "Support remote teams with time-zone aware approvals, digital forms, and policy handling across multiple regions." },
			{ title: "Compliance-heavy teams", description: "Keep employee records, approvals, and documentation with clear visibility for audits and internal review." },
		],
		highlights: [
			{ title: "Security-conscious design", description: "Protect sensitive employee records with access controls, secure data handling, and role-based permissions by function." },
			{ title: "Flexible policy engine", description: "Support complex leave types, regional holidays, multi-country rules, and custom approval paths without workarounds." },
			{ title: "System-ready integrations", description: "Connect your HR data with payroll, communication tools, identity systems, and internal applications without breaking workflows." },
		],
		approach: [
			{ step: "01", title: "Map HR flows", description: "Review how employee data moves across hiring, onboarding, leave, performance, and management approvals today." },
			{ step: "02", title: "Configure", description: "Set up policies, employee groups, approvals, and self-service functions around the way your HR team operates." },
			{ step: "03", title: "Migrate", description: "Import employee records and validate them carefully to reduce errors before launch." },
			{ step: "04", title: "Train", description: "Roll out the system to HR administrators and employees with guidance for adoption and governance." },
		],
	},
	{
		slug: "inventory-management-software-development",
		label: "Inventory Management",
		category: "Operations",
		icon: Warehouse,
		tagline: "Keep stock, replenishment, and fulfillment accurate even when operations move quickly.",
		description:
			"Our inventory systems help teams track products, monitor movement across locations, and automate reorder signals before stockouts affect revenue. From receiving and picking to transfer and cycle count, the workflow becomes transparent and controlled.",
		metaDescription:
			"Inventory management software for warehouses, distribution, and retail. Real-time stock tracking and fulfillment by Next Software Development Company.",
		heroImage: img("/projects/medicine-inventory-system/medicine-inventory-system-dashboard.webp", "Warehouse shelves and logistics"),
		summary: ["Stock control", "Warehouse workflows", "Reorder intelligence"],
		projectSlugs: ["medicine-inventory-system"],
		features: [
			{ title: "Real-time stock visibility", description: "Every stock movement, receipt, dispatch, and adjustment is reflected instantly across your warehouses and sales channels." },
			{ title: "Operational picking workflows", description: "Support order fulfillment with picking lists, packing steps, transfer rules, and status visibility for every item." },
			{ title: "Smart replenishment", description: "Use reorder levels, lead times, and demand trends to reduce overstocks and prevent revenue-draining stockouts." },
		],
		capabilities: [
			"SKU, variant, and batch management",
			"Incoming stock, transfer, and dispatch workflows",
			"Barcode and QR-based stock operations",
			"Cycle counts, adjustments, and audit trails",
			"Supplier orders and replenishment planning",
			"Integration with ERP, e-commerce, and warehouse systems",
		],
		useCases: [
			{ title: "E-commerce operations", description: "Align inventory counts across online orders, warehouse pickups, and returns so customers get faster and more reliable fulfillment." },
			{ title: "Distribution networks", description: "Manage multi-location demand, transfers, and stock allocation without creating blind spots between warehouses." },
			{ title: "Field service and retail", description: "Track item usage, service stock, replenishment needs, and inventory health across distributed teams or stores." },
		],
		highlights: [
			{ title: "Mobile-first execution", description: "Allow warehouse and stock teams to scan items, update movements, and check inventory from mobile devices on the floor." },
			{ title: "Cost-aware controls", description: "Support FIFO, average costing, and valuation methods that match your operational and financial practices." },
			{ title: "Resilient workflows", description: "Queue changes when connectivity is limited and sync data automatically once the connection returns." },
		],
		approach: [
			{ step: "01", title: "Audit", description: "Review current SKUs, stock locations, transaction patterns, and operational gaps across storage and fulfillment." },
			{ step: "02", title: "Model", description: "Design the item master, bin structure, movement logic, and approval rules based on how your business actually handles inventory." },
			{ step: "03", title: "Deploy", description: "Roll out the system at one warehouse or branch first, then expand to new locations with data validation and team training." },
			{ step: "04", title: "Optimize", description: "Tune alerts, reorder points, and performance reports as your stock patterns become clearer over time." },
		],
	},
	{
		slug: "ecommerce-platform-development",
		label: "E-commerce Platform",
		category: "Customer",
		icon: ShoppingCart,
		tagline: "Deliver a storefront, checkout flow, and admin experience built around conversion and growth.",
		description:
			"We build custom e-commerce platforms that match your product model, customer journey, and operational needs. From catalog and promotions to checkout and fulfillment, the platform is designed to scale with your brand instead of limiting it.",
		metaDescription:
			"Custom e-commerce platform development for storefronts, checkout, and catalog management. Next Software Development Company builds conversion-focused digital commerce systems.",
		heroImage: img("/projects/royal-pos/royal-pos-checkout.webp", "Online shopping on laptop and phone"),
		summary: ["Catalog control", "Conversion design", "Sales operations"],
		projectSlugs: ["restaurant-pos", "royal-pos", "travel-and-tour-website"],
		features: [
			{ title: "Brand-aligned storefronts", description: "Create custom storefronts that are fast, accessible, and tailored to your customer experience instead of default templates." },
			{ title: "Flexible product logic", description: "Support bundles, subscriptions, B2B pricing, inventory-aware catalogs, and complex product variants without forcing workarounds." },
			{ title: "Operational admin layer", description: "Give your team a clean backend for order management, refund handling, discounts, promotions, and product updates." },
		],
		capabilities: [
			"Product catalog and category management",
			"Cart, checkout, and payment processing",
			"Shipping, tax, and fulfillment rules",
			"Discounts, loyalty, and promotions",
			"Order management and customer service workflows",
			"Analytics and conversion tracking",
		],
		useCases: [
			{ title: "Direct-to-consumer brands", description: "Create premium buying experiences with product storytelling, performance, and data-driven merchandising." },
			{ title: "B2B commerce", description: "Manage account-specific pricing, minimum order rules, approval-based ordering, and custom catalogs for buyers." },
			{ title: "Multi-channel retail", description: "Connect storefronts, offline selling, and fulfillment operations into one commerce layer as the business expands." },
		],
		highlights: [
			{ title: "Peak performance", description: "Optimize speed, caching, and checkout flows for launch campaigns, seasonal peaks, and sudden traffic surges." },
			{ title: "Own your platform", description: "Avoid vendor lock-in by owning your storefront, admin layer, rules, and data flows as your business evolves." },
			{ title: "Connected commerce", description: "Integrate POS, ERP, payment gateways, inventory systems, and marketing tools to keep operations aligned." },
		],
		approach: [
			{ step: "01", title: "Define", description: "Review product complexity, customer journeys, fulfillment models, and conversion goals to shape the roadmap." },
			{ step: "02", title: "Design", description: "Map storefront UX, product experiences, and admin workflows to balance customer flow with operational speed." },
			{ step: "03", title: "Build", description: "Launch the first practical commerce system with orders, catalog, and payment flow, then refine the experience." },
			{ step: "04", title: "Grow", description: "Introduce promotions, segmentation, cross-sell logic, and integrations as business volume and complexity increase." },
		],
	},
	{
		slug: "business-analytics-software-development",
		label: "Business Analytics",
		category: "Operations",
		icon: BarChart3,
		tagline: "Turn scattered data into dashboards, decisions, and confident forecasting.",
		description:
			"We build analytics platforms that bring together KPIs, operational signals, and reporting across your tech stack. The goal is not just beautiful charts, but clearer decisions based on live numbers your business can trust.",
		metaDescription:
			"Custom business analytics dashboards, reports, and KPI software. Next Software Development Company builds data-driven decision tools.",
		heroImage: img("/projects/cash-management-system/cash-management-system-dashboard.webp", "Analytics charts on a monitor"),
		summary: ["Live reporting", "KPI visibility", "Decision support"],
		projectSlugs: ["cash-management-system", "hotel-management-system"],
		features: [
			{ title: "Operational KPIs", description: "Define the metrics that matter most to your business and surface them consistently across finance, sales, and operations." },
			{ title: "Live drilldown", description: "Let teams filter, explore, and share insights without waiting on spreadsheet exports or manual reporting cycles." },
			{ title: "Embedded intelligence", description: "Use dashboards inside your core apps so the data arrives where users already work instead of in a disconnected report." },
		],
		capabilities: [
			"Data integration from business systems and SaaS tools",
			"Custom dashboards and executive reporting",
			"SQL-based transformation and data modeling",
			"Schedule-based reports and alerts",
			"Drill-down views and self-serve exploration",
			"Embedded analytics for internal tools and customer portals",
		],
		useCases: [
			{ title: "Executive performance reviews", description: "Provide leadership with trusted leadership dashboards that update on a daily or real-time basis instead of stale slide decks." },
			{ title: "Operations monitoring", description: "Track fulfillment, service levels, throughput, and exceptions with direct visibility for managers and coordinators." },
			{ title: "Product and customer insight", description: "Connect usage, retention, and engagement trends to product decisions and customer growth strategies." },
		],
		highlights: [
			{ title: "Metric governance", description: "Standardize definitions for the same KPI across business units so leadership decisions are based on the same numbers." },
			{ title: "Flexible reporting model", description: "Choose lightweight dashboards or more advanced data warehouse-driven reporting depending on your data maturity and speed requirements." },
			{ title: "Secure access control", description: "Apply row-level permissions and role-based access so every team sees the relevant data without compromising sensitive information." },
		],
		approach: [
			{ step: "01", title: "Metrics", description: "Work with stakeholders to define the KPIs, logic, and sources that matter most to business decisions." },
			{ step: "02", title: "Pipeline", description: "Connect your data sources, validate quality, and build the structure needed for consistent reporting." },
			{ step: "03", title: "Visualize", description: "Design dashboards and exports for board, manager, and department-level needs with practical drilldown paths." },
			{ step: "04", title: "Adopt", description: "Train teams, review usage, and refine metrics so dashboards become a decision engine rather than a static report." },
		],
	},
	{
		slug: "workflow-automation-software-development",
		label: "Workflow Automation",
		category: "AI & Automation",
		icon: Boxes,
		tagline: "Automate the busywork and keep every approval, task, and exception traceable.",
		description:
			"Our workflow automation systems help teams replace repetitive manual handoffs with structured, auditable processes. Whether it is onboarding, invoicing, approvals, or cross-system notifications, the system ensures the work moves smoothly with built-in accountability.",
		metaDescription:
			"Workflow automation software for approvals, business processes, and cross-system automation. Built by Next Software Development Company.",
		heroImage: img("/projects/cash-management-system/cash-management-system-reports.webp", "Business planning and workflow diagrams"),
		summary: ["Approval flows", "Task automation", "Traceable execution"],
		projectSlugs: ["cash-management-system", "hospital-management-system", "travel-and-tours-management"],
		features: [
			{ title: "Process visibility", description: "Map steps, owners, SLA thresholds, and branching logic so teams can understand and improve process design clearly." },
			{ title: "System-native automation", description: "Trigger actions across email, Slack, ERP, CRM, databases, and custom APIs without requiring manual handoffs." },
			{ title: "Exception handling", description: "Escalate issues automatically, pause risky steps, and keep a clear path for human review when conditions need attention." },
		],
		capabilities: [
			"Multi-step approval chains",
			"Conditional routing and task assignment",
			"Webhook and API-based system actions",
			"Scheduled triggers and recurring jobs",
			"Audit history and execution logs",
			"Forms, escalations, and exception management",
		],
		useCases: [
			{ title: "Procurement operations", description: "Move purchase requests, budget checks, and approvals from email chains into controlled, trackable workflow paths." },
			{ title: "Employee onboarding", description: "Coordinate IT setup, documentation, training, and manager sign-off in one structured process." },
			{ title: "Compliance reviews", description: "Collect documentation, route it for review, and ensure sign-off records are retained and easy to audit." },
		],
		highlights: [
			{ title: "Transparent execution", description: "See exactly which step ran, who approved it, and why a request was delayed or escalated." },
			{ title: "Safe process changes", description: "Version workflows and roll back changes confidently without disrupting ongoing business operations." },
			{ title: "Built for scale", description: "Handle high-volume automation with queue-based workers, retries, and dependable monitoring for operations teams." },
		],
		approach: [
			{ step: "01", title: "Document", description: "Map the current process, identify bottlenecks, and shortlist the workflows with the highest impact for automation." },
			{ step: "02", title: "Automate", description: "Deliver the highest-value workflows first, then refine logic, conditions, and exceptions based on live results." },
			{ step: "03", title: "Integrate", description: "Connect systems, notifications, handlers, and approvals so the process works end to end rather than in isolated steps." },
			{ step: "04", title: "Govern", description: "Assign ownership, monitor outcomes, and evolve the process as the business needs change." },
		],
	},
];
