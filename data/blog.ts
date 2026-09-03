import type { BlogAuthor, BlogBodyBlock, BlogPost, BlogReviewer, FaqItem } from "./homepage-content";
import { siteBrand } from "@/lib/landing/brand";

export type { BlogAuthor, BlogBodyBlock, BlogPost, BlogReviewer };

/** Credentials match published team profiles — do not invent titles or tenure. */
const authors = {
	shahvaizAhmed: {
		name: "Shahvaiz Ahmed",
		role: "Senior Full-stack Developer",
		bio: "Senior full-stack engineer specializing in scalable Node.js and React applications, with a strong focus on clean architecture, performance, and production reliability.",
		image: {
			src: "/team/shahvaiz-ahmed.webp",
			alt: "shahvaiz-ahmed",
			width: 600,
			height: 600,
		},
	},
	abdullahMehdi: {
		name: "Abdullah Mehdi",
		role: "Machine Learning Engineer",
		bio: "Machine learning engineer focused on designing, training, and deploying practical ML models that support intelligent product features and data-driven decisions.",
		image: {
			src: "/team/abdullah-mehdi.webp",
			alt: "abdullah-mehdi",
			width: 600,
			height: 600,
		},
	},
	izaanAli: {
		name: "Izaan Ali",
		role: "DevOps Engineer",
		bio: "DevOps engineer responsible for cloud infrastructure, CI/CD pipelines, and secure deployment workflows that keep environments stable and releases predictable.",
		image: {
			src: "/team/izaan-ali.webp",
			alt: "izaan-ali",
			width: 600,
			height: 600,
		},
	},
} as const satisfies Record<string, BlogAuthor>;

const technicalReviewer: BlogReviewer = {
	name: "Technical Team",
	role: siteBrand.name,
};

function faq(
	question: string,
	answer: string,
	tag: string,
	column: "left" | "right"
): FaqItem {
	return { question, answer, tag, column };
}

export const blogPosts: BlogPost[] = [
	{
		slug: "choose-software-development-company-pakistan",
		title: "How to Choose the Right Software Development Company in Pakistan",
		excerpt:
			"There are hundreds of agencies offering software development services across Pakistan. Here is the honest framework we recommend for evaluating any software company including us.",
		author: authors.shahvaizAhmed,
		reviewedBy: technicalReviewer,
		publishedAt: "May 12, 2026",
		updatedAt: "May 20, 2026",
		readTime: "14 min",
		category: "Software Development",
		image: {
			src: "/blog/software-development.webp",
			alt: "software-development",
			width: 1200,
			height: 750,
		},
		body: [
			{
				type: "p",
				text: "Choosing a software development company in Pakistan is not about picking the lowest quote or the flashiest portfolio. It is about finding a partner who will still answer the phone six months after launch.",
			},
			{
				type: "p",
				text: "The market is crowded. Islamabad, Lahore, Karachi, and remote-first teams all compete on price, stack, and delivery claims. That noise makes it easy to confuse a polished pitch with a reliable engineering practice. A clear evaluation framework cuts through that.",
			},
			{ type: "h2", text: "Start with delivery proof" },
			{
				type: "p",
				text: "Start with delivery proof: case studies with measurable outcomes, references you can call, and code you can inspect if you have a technical advisor. Ask how they handle scope changes, who owns the IP, and what happens when timelines slip.",
			},
			{
				type: "p",
				text: "Ask for specifics, not slogans. How many releases shipped in the last quarter? Who was the product owner on the client side? What tools do they use for tickets, CI, and staging? Vague answers usually mean vague delivery.",
			},
			{ type: "h2", text: "Process, timezone, and senior involvement" },
			{
				type: "p",
				text: "Look for a team that writes specifications before coding, demos working software every two weeks, and documents handoff. A good software company in Islamabad should overlap with your timezone if you are in the UK or UAE and communicate in plain language.",
			},
			{
				type: "p",
				text: "Timezone overlap matters more than most buyers admit. A four-hour daily window for decisions prevents week-long email chains. If your stakeholders are in Europe or the Gulf, Pakistan-based teams often have a natural advantage over farther-east outsourcing hubs.",
			},
			{
				type: "p",
				text: "Evaluate senior involvement early. Who writes the architecture? Who joins discovery calls? If you only meet sales until the contract is signed, expect junior-heavy staffing later. Ask for named roles on the proposal and confirm those people appear in kickoff.",
			},
			{ type: "h2", text: "Pricing, security, and risk" },
			{
				type: "p",
				text: "Pricing models tell you how risk is shared. Fixed price works when scope is clear after discovery. Time and materials works when you need flexibility. Hybrid models with a discovery fixed fee and a build estimate range often protect both sides better than a single inflated lump sum.",
			},
			{
				type: "p",
				text: "Security and compliance should be ordinary conversation, not a surprise. Ask about access control, secrets management, backup policy, and how production credentials are handled. For fintech, health, or government-adjacent work, ask which standards they have already shipped against.",
			},
			{ type: "h2", text: "Use discovery before you commit" },
			{
				type: "p",
				text: "Finally, run a small paid discovery phase before committing to a six-figure build. The best firms will encourage that. It protects both sides and surfaces fit early.",
			},
			{
				type: "p",
				text: "A strong discovery should produce user stories, an architecture sketch, a milestone plan, and an explicit out-of-scope list. If a company resists writing that down, they are asking you to buy uncertainty.",
			},
			{
				type: "p",
				text: "Use the discovery output to compare vendors fairly. Same scope, same assumptions, same success metrics. The cheapest bid is rarely the cheapest outcome once rework, delays, and support are included.",
			},
			{ type: "h2", text: "What happens after launch" },
			{
				type: "p",
				text: "After launch, support quality separates partners from project shops. Clarify response times, who owns bugs versus enhancements, and how knowledge is transferred if your internal team takes over. Handoff documentation should be part of the definition of done, not an optional extra.",
			},
			{
				type: "p",
				text: "If you apply this checklist consistently, you will filter out most of the market quickly. The remaining shortlist will look quieter on marketing and stronger on process, which is usually where good software comes from.",
			},
		],
		faqs: [
			faq(
				"What matters most when choosing a software company in Pakistan?",
				"Delivery proof matters more than pitch decks. Ask for case studies with measurable outcomes, named seniors on the proposal, timezone overlap for decisions, and a clear discovery phase before a large build commitment.",
				"Evaluation",
				"left"
			),
			faq(
				"Should I choose fixed price or time and materials?",
				"Fixed price works when scope is clear after discovery. Time and materials fits evolving product work. Many teams use a fixed discovery fee plus a build estimate range so risk is shared fairly.",
				"Pricing",
				"right"
			),
			faq(
				"Why does timezone overlap matter?",
				"A few hours of daily overlap prevents week-long email chains. Pakistan-based teams often align well with UK and UAE stakeholders, which keeps decisions moving without overnight delays.",
				"Delivery",
				"left"
			),
			faq(
				"How do I know seniors will stay involved after the contract?",
				"Ask who writes the architecture and joins discovery calls before signing. Confirm named roles appear in kickoff. If you only meet sales until the contract is signed, expect junior-heavy staffing later.",
				"Team",
				"right"
			),
			faq(
				"Is a paid discovery phase worth it?",
				"Yes. A short discovery produces user stories, an architecture sketch, a milestone plan, and an out-of-scope list. It surfaces fit early and is cheaper than rework on a six-figure build.",
				"Process",
				"left"
			),
			faq(
				"What should I ask about after launch support?",
				"Clarify response times, who owns bugs versus enhancements, and how knowledge is transferred if your internal team takes over. Handoff documentation should be part of the definition of done.",
				"Support",
				"right"
			),
		],
	},
	{
		slug: "discovery-structure-prevents-problems",
		title: "A little structure now prevents a lot of problems later",
		excerpt:
			"The most expensive software projects we have ever seen were not the complex ones. They were simple projects that skipped discovery. Here is what a proper discovery phase actually looks like.",
		author: authors.abdullahMehdi,
		reviewedBy: technicalReviewer,
		publishedAt: "Apr 28, 2026",
		updatedAt: "May 5, 2026",
		readTime: "12 min",
		category: "Product Strategy",
		image: {
			src: "/blog/product-strategy.webp",
			alt: "product-strategy",
			width: 1200,
			height: 750,
		},
		body: [
			{
				type: "p",
				text: "Discovery is not a sales exercise. It is a short, structured phase where we map users, workflows, integrations, risks and success metrics then agree on a fixed scope and price before build.",
			},
			{
				type: "p",
				text: "Teams skip discovery for familiar reasons: urgency, budget pressure, or confidence that the idea is already clear. Urgency rarely survives the first integration surprise. Budget pressure often creates larger spend later. Confidence without shared documents is usually optimism, not alignment.",
			},
			{ type: "h2", text: "What a proper discovery delivers" },
			{
				type: "p",
				text: "A proper discovery deliverable includes user stories, a technical architecture sketch, milestone plan, and explicit out-of-scope list. Stakeholders sign off so there is one shared truth.",
			},
			{ type: "h3", text: "User stories and workflow mapping" },
			{
				type: "p",
				text: "User stories force the conversation onto outcomes. Instead of debating screens in isolation, you describe who needs what and why. That clarity reduces feature bloat and makes acceptance criteria testable.",
			},
			{
				type: "p",
				text: "Workflow mapping catches hidden steps that never appear in a pitch deck. Approvals, exception paths, offline scenarios, and role permissions often decide whether a system feels smooth or frustrating in week one of real use.",
			},
			{ type: "h3", text: "Integrations, risks, and success metrics" },
			{
				type: "p",
				text: "Integration inventory should be written early. Payment gateways, ERPs, CRMs, SMS providers, and legacy databases each bring constraints. Discovering them mid-build is how timelines quietly double.",
			},
			{
				type: "p",
				text: "Risks belong on paper too. Data migration quality, third-party API limits, regulatory review, and key-person dependency are not pessimism. They are planning inputs. A mature discovery names them and proposes mitigations.",
			},
			{
				type: "p",
				text: "Success metrics keep the project honest. Decide what good looks like before coding: conversion lift, ticket reduction, faster fulfillment, fewer manual reconciliations. Without metrics, every demo becomes a taste debate.",
			},
			{ type: "h2", text: "The cost of skipping discovery" },
			{
				type: "p",
				text: "Skipping discovery feels faster until rework piles up: wrong database choices, missing compliance requirements, or features nobody actually uses. That is when budgets blow past PKR estimates and trust erodes.",
			},
			{ type: "h2", text: "How discovery should be priced" },
			{
				type: "p",
				text: "The commercial shape of discovery should be simple. A fixed fee, a fixed window, and a concrete pack of deliverables. At the end, you either proceed with a clear build proposal or stop with useful artifacts and no sunk-build cost.",
			},
			{
				type: "p",
				text: "Stakeholders should leave discovery able to answer the same five questions: Who is this for? What is in scope? What is out of scope? What is the architecture direction? How will we measure success?",
			},
			{ type: "h2", text: "Why structure still matters" },
			{
				type: "p",
				text: "Whether you work with Software Development Company or another firm, invest in discovery. It is the cheapest insurance on any custom software project.",
			},
			{
				type: "p",
				text: "If a vendor says discovery is unnecessary because they have built something similar before, treat that as a yellow flag. Similarity helps, but your users, data, and constraints are still yours. Structure is how those differences get respected.",
			},
		],
		faqs: [
			faq(
				"What does a proper discovery phase include?",
				"User stories, a technical architecture sketch, a milestone plan, and an explicit out-of-scope list. Stakeholders sign off so there is one shared truth before build starts.",
				"Discovery",
				"left"
			),
			faq(
				"How long should discovery take?",
				"It should be a fixed window with a fixed fee and concrete deliverables. Long enough to map users, workflows, integrations, and risks, short enough to protect budget before coding begins.",
				"Timeline",
				"right"
			),
			faq(
				"Why do teams skip discovery?",
				"Urgency, budget pressure, or confidence that the idea is already clear. Those reasons rarely survive the first integration surprise, and skipped discovery often creates larger spend later.",
				"Risk",
				"left"
			),
			faq(
				"What questions should stakeholders answer after discovery?",
				"Who is this for? What is in scope? What is out of scope? What is the architecture direction? How will we measure success? If those answers disagree, the build is not ready.",
				"Alignment",
				"right"
			),
			faq(
				"Can discovery stop without starting a full build?",
				"Yes. A mature discovery ends with either a clear build proposal or useful artifacts and no sunk-build cost. Stopping early is often the cheapest outcome.",
				"Commercial",
				"left"
			),
			faq(
				"Is prior similar work a reason to skip discovery?",
				"No. Similarity helps, but your users, data, and constraints are still yours. Treat a vendor who refuses structure as a yellow flag.",
				"Vendors",
				"right"
			),
		],
	},
	{
		slug: "weekly-demos-keep-software-on-track",
		title: "Why weekly demos keep software projects on track",
		excerpt:
			"Long gaps between demos hide problems until they are expensive. A simple weekly rhythm keeps stakeholders aligned and teams shipping visible progress.",
		author: authors.izaanAli,
		reviewedBy: technicalReviewer,
		publishedAt: "Mar 15, 2026",
		updatedAt: "Mar 22, 2026",
		readTime: "11 min",
		category: "Engineering",
		image: {
			src: "/blog/engeenring.webp",
			alt: "engeenring",
			width: 1200,
			height: 750,
		},
		body: [
			{
				type: "p",
				text: "Weekly demos are not status meetings. They are working sessions where the team shows real software even if rough and collects feedback before the next sprint.",
			},
			{
				type: "p",
				text: "Status slides can say green while the product is wrong. A live build cannot hide that for long. Demos force truth into the open while changes are still cheap.",
			},
			{ type: "h2", text: "Why monthly demos hide problems" },
			{
				type: "p",
				text: "When demos slip to monthly, assumptions pile up. Product owners discover misaligned UI late. Integrations fail quietly. Budget conversations get harder because nobody saw progress.",
			},
			{ type: "h2", text: "What a good weekly demo looks like" },
			{
				type: "p",
				text: "A good demo cadence includes a short agenda: what shipped, what is blocked, what is next. Recordings help remote stakeholders. Notes become the living changelog.",
			},
			{ type: "h3", text: "Audience and honesty" },
			{
				type: "p",
				text: "Keep the demo audience intentional. Decision makers should attend often enough to steer. Subject-matter experts should join when their workflows are on screen. Large silent audiences slow feedback and dilute ownership.",
			},
			{
				type: "p",
				text: "Show working paths, not polished fiction. Incomplete UI is fine if the flow is real. Fake happy-path walkthroughs create false confidence and delay hard conversations about edge cases.",
			},
			{ type: "h3", text: "Feedback and blockers" },
			{
				type: "p",
				text: "Feedback should be captured in one place and prioritized the same day. Untracked comments in a call become forgotten preferences. Tracked notes become the backlog the team can actually execute.",
			},
			{
				type: "p",
				text: "Blockers deserve daylight. If an API key, content decision, or legal review is stuck, the demo is the right moment to escalate. Waiting until a milestone review turns a one-week delay into a four-week surprise.",
			},
			{ type: "h2", text: "Remote delivery and team morale" },
			{
				type: "p",
				text: "Remote-friendly habits matter for Pakistan-based teams serving UK, UAE, and US clients. Stable staging links, short recordings, and clear timestamps let async reviewers stay close without forcing every stakeholder into every call.",
			},
			{
				type: "p",
				text: "Weekly rhythm also improves team morale. Engineers ship visible increments. Clients see movement. Trust compounds because progress is demonstrated, not promised.",
			},
			{ type: "h2", text: "Make the cadence contractual" },
			{
				type: "p",
				text: "If your vendor resists regular demos, treat that as a signal. Transparency should be default, not a premium add-on.",
			},
			{
				type: "p",
				text: "Some teams worry that weekly demos create thrash. The opposite is usually true. Small course corrections each week prevent large pivots later. Thrash comes from silence, not from short feedback loops.",
			},
			{
				type: "p",
				text: "Make demos part of the contract language: cadence, attendees, staging environment, and how feedback enters the backlog. When the process is explicit, delivery quality stops depending on goodwill alone.",
			},
		],
		faqs: [
			faq(
				"Are weekly demos just status meetings?",
				"No. They are working sessions where the team shows real software, even if rough, and collects feedback before the next sprint. Status slides can say green while the product is wrong.",
				"Process",
				"left"
			),
			faq(
				"What happens when demos slip to monthly?",
				"Assumptions pile up. Product owners discover misaligned UI late, integrations fail quietly, and budget conversations get harder because nobody saw progress while changes were still cheap.",
				"Risk",
				"right"
			),
			faq(
				"Who should attend weekly demos?",
				"Decision makers should attend often enough to steer. Subject-matter experts should join when their workflows are on screen. Large silent audiences slow feedback and dilute ownership.",
				"Audience",
				"left"
			),
			faq(
				"Do incomplete UI screens belong in a demo?",
				"Yes, if the flow is real. Incomplete UI is fine. Fake happy-path walkthroughs create false confidence and delay hard conversations about edge cases.",
				"Quality",
				"right"
			),
			faq(
				"How should demo feedback be handled?",
				"Capture notes in one place and prioritize the same day. Untracked comments become forgotten preferences. Tracked notes become the backlog the team can execute.",
				"Feedback",
				"left"
			),
			faq(
				"Should demo cadence be written into the contract?",
				"Yes. Make cadence, attendees, staging environment, and backlog rules explicit. When the process is contractual, delivery quality stops depending on goodwill alone.",
				"Contract",
				"right"
			),
		],
	},
	{
		slug: "what-is-software-development",
		title: "What Is Software Development? A Practical Guide",
		excerpt:
			"Software development is the process of turning a business problem or idea into reliable digital software. Learn how the process works and what to plan before building.",
		author: authors.shahvaizAhmed,
		reviewedBy: technicalReviewer,
		publishedAt: "Sep 3, 2026",
		updatedAt: "Sep 3, 2026",
		readTime: "8 min",
		category: "Software Development",
		image: {
			src: "/blog/software-development.webp",
			alt: "Software development planning and delivery",
			width: 1200,
			height: 750,
		},
		body: [
			{
				type: "p",
				text: "Software development is the process of designing, building, testing, releasing, and maintaining software. It can produce a website, mobile app, internal business system, or platform used by customers around the world. Successful development begins with understanding the problem, not simply writing code.",
			},
			{
				type: "p",
				text: "For a business, software development turns an idea or manual process into a dependable digital product. That product might help customers place orders, help staff manage operations, or give leaders better information for decisions.",
			},
			{ type: "h2", text: "What does software development include?" },
			{
				type: "p",
				text: "Software development includes discovery, requirements, user experience, system architecture, programming, quality assurance, deployment, security, monitoring, and ongoing improvements. Each stage reduces a different risk, from building the wrong feature to releasing a system that cannot scale.",
			},
			{ type: "h2", text: "The software development lifecycle" },
			{
				type: "p",
				text: "Discovery defines the users, goals, constraints, and measures of success. Planning turns those findings into a roadmap. Design maps the experience and technical approach. Development creates working software, while testing checks that it behaves correctly and securely.",
			},
			{
				type: "p",
				text: "After testing, the team deploys the product and monitors how it performs in real use. Strong teams treat launch as the beginning of a feedback cycle, not the end of the project.",
			},
			{ type: "h2", text: "Common types of software development" },
			{
				type: "p",
				text: "Web development creates browser-based websites and applications. Mobile development produces apps for phones and tablets. Backend development handles APIs, business rules, databases, and integrations. Desktop and embedded development support installed applications and connected devices.",
			},
			{ type: "h2", text: "Who works on a software project?" },
			{
				type: "p",
				text: "A project may include a product owner, business analyst, UX or UI designer, software engineers, QA specialists, and delivery lead. Smaller projects often combine roles. What matters is clear ownership of product decisions, user experience, technical quality, and delivery.",
			},
			{ type: "h2", text: "How much does software development cost?" },
			{
				type: "p",
				text: "There is no single useful price. Cost depends on scope, platforms, integrations, design depth, security requirements, team size, and support. A short discovery phase improves estimates by defining the first release, milestones, assumptions, and work that can wait.",
			},
			{ type: "h2", text: "How should you start?" },
			{
				type: "p",
				text: "Start with the problem rather than a preferred technology. Describe who has the problem, how they handle it today, and what a better outcome looks like. Then prioritise the smallest set of capabilities that can prove the idea or improve the operation.",
			},
			{
				type: "p",
				text: "Good software development connects business goals with thoughtful design and disciplined engineering. The result is software people can use, a team can maintain, and a business can improve as its needs change.",
			},
		],
		faqs: [
			faq(
				"What is software development in simple terms?",
				"It is the process of turning a problem or idea into a digital product through planning, design, programming, testing, deployment, and maintenance.",
				"Definition",
				"left"
			),
			faq(
				"What is the first step in software development?",
				"The first step is discovery: define the users, problem, business goal, constraints, and smallest useful release before choosing technologies.",
				"Process",
				"right"
			),
			faq(
				"How long does software development take?",
				"Timelines depend on scope, integrations, platforms, and team size. A focused first release may take weeks or months, while a complex platform needs a phased roadmap.",
				"Planning",
				"left"
			),
			faq(
				"What is the difference between software development and software engineering?",
				"Software development focuses on creating and improving software. Software engineering applies broader practices such as architecture, testing, security, reliability, and maintainability.",
				"Engineering",
				"right"
			),
		],
	},
];
