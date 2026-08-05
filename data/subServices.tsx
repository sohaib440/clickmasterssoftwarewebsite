import { contactPath } from "@/lib/landing/constants";
import type { SubCategoryContent } from "@/lib/content/types";

export type SubServicesMap = Record<string, SubCategoryContent[]>;

/** Default CTA copy for sub-category pages at /{mainSlug}/{subSlug} */
export const defaultSubCategorySections = {
  cta: {
    description: (label: string) =>
      `Share your goals for ${label.toLowerCase()}, we'll reply within one business day.`,
    buttonLabel: "Get in touch",
    buttonHref: contactPath,
  },
} as const;

type SubInput = {
  slug: string;
  label: string;
  description: string;
  tagline: string;
  metaDescription: string;
  pageTitle: string;
  content: string[];
  image?: SubCategoryContent["image"];
};

function sub(input: SubInput): SubCategoryContent {
  const { image, ...rest } = input;
  return image ? { ...rest, image } : rest;
}

const mainServiceLabels: Record<string, string> = {
  "software-development": "Software Development",
  "mobile-development": "Mobile App Development",
  "web-development": "Web Development",
  "ecommerce-development": "Ecommerce Development",
  "ui-ux-design": "UI/UX Design",
  "artificial-intelligence": "Artificial Intelligence",
  "machine-learning": "Machine Learning",
  "automation-services": "Automation Services",
  "cloud-devops": "Cloud & DevOps",
  "data-business-intelligence": "Data & Business Intelligence",
  cybersecurity: "Cybersecurity",
  "enterprise-solutions": "Enterprise Solutions",
  "blockchain-development": "Blockchain Development",
  "healthcare-software-development": "Healthcare Software Development",
  "ar-vr-development": "AR/VR Development",
  "testing-and-qa": "Testing & QA",
};

/** Alternate phrases that should also point at the parent main service (longest first). */
const mainLinkAliases: Record<string, string[]> = {
  "software-development": ["software development services"],
  "mobile-development": ["mobile app development services", "mobile development services"],
  "web-development": ["web development services"],
  "ecommerce-development": ["ecommerce development services", "e-commerce development"],
  "ui-ux-design": ["UI/UX design services"],
  "artificial-intelligence": ["artificial intelligence services"],
  "machine-learning": ["machine learning services"],
  "automation-services": ["automation services"],
  "cloud-devops": ["cloud & devops", "cloud and devops"],
  "data-business-intelligence": ["data & business intelligence", "business intelligence services"],
  cybersecurity: ["cybersecurity services"],
  "enterprise-solutions": ["enterprise solutions"],
  "blockchain-development": ["blockchain development services"],
  "healthcare-software-development": ["healthcare software development"],
  "ar-vr-development": ["AR/VR development", "ar/vr development"],
  "testing-and-qa": ["testing & QA", "testing and QA"],
};

/** First bare phrase → `[phrase](href)` markdown used in page copy */
function linkPhrase(text: string, phrase: string, href: string): string {
  if (!phrase) return text;
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Avoid splitting brand phrases like "software development company"
  const pattern = new RegExp(`${escaped}(?!\\s+(?:company|house)\\b)`, "i");
  const match = pattern.exec(text);
  if (!match || match.index === undefined) return text;
  if (match.index > 0 && text[match.index - 1] === "[") return text;
  const after = match.index + match[0].length;
  if (text.slice(after, after + 2) === "](") return text;
  return `${text.slice(0, match.index)}[${match[0]}](${href})${text.slice(after)}`;
}

function withParentMainLinks(text: string, mainSlug: string, mainLabel: string): string {
  const mainHref = `/${mainSlug}`;
  if (text.includes(`](${mainHref})`)) return text;

  let next = linkPhrase(text, mainLabel, mainHref);
  if (next.includes(`](${mainHref})`)) return next;

  const aliases = [...(mainLinkAliases[mainSlug] ?? [])].sort((a, b) => b.length - a.length);
  for (const alias of aliases) {
    next = linkPhrase(next, alias, mainHref);
    if (next.includes(`](${mainHref})`)) return next;
  }
  return next;
}

/** Extra overview paragraphs (plain text; natural linking applied separately). */
function extraOverviewParagraphs(
  mainSlug: string,
  label: string,
  description: string,
  mainLabel: string
): string[] {
  const service = label.trim();
  const focus = description.replace(/\.$/, "").trim();
  const parent = mainLabel.trim();
  const focusLower = focus.charAt(0).toLowerCase() + focus.slice(1);

  const discoveryByCategory: Record<string, string> = {
    "software-development":
      "We map workflows, data ownership, and integration points before writing production code, so architecture choices support growth instead of blocking it later.",
    "mobile-development":
      "We clarify platforms, offline needs, store policies, and analytics early so the app ships with a path to updates, not a one-off build.",
    "web-development":
      "We align on performance, SEO, accessibility, and CMS or app boundaries so the site or web product stays fast and editable after launch.",
    "ecommerce-development":
      "We review catalog complexity, checkout, payments, and fulfillment rules so the storefront converts without fragile customizations.",
    "ui-ux-design":
      "We validate journeys with research and prototypes so engineering builds interfaces users can complete without friction or guesswork.",
    "artificial-intelligence":
      "We define data sources, evaluation criteria, and human oversight so AI features stay useful, measurable, and safe in production.",
    "machine-learning":
      "We assess data quality, labeling, and serving constraints so models move from experiments into reliable inference pipelines.",
    "automation-services":
      "We inventory repetitive tasks, systems of record, and exception paths so automation reduces work without hiding failures.",
    "cloud-devops":
      "We review environments, release cadence, and observability so cloud and pipelines support secure, repeatable delivery.",
    "data-business-intelligence":
      "We align metrics definitions, sources, and consumers so dashboards and pipelines reflect decisions, not conflicting spreadsheets.",
    cybersecurity:
      "We prioritize assets, threat models, and compliance needs so security work reduces real risk instead of checkbox theater.",
    "enterprise-solutions":
      "We map roles, approvals, and system-of-record boundaries so ERP, CRM, and internal platforms reinforce each other.",
    "blockchain-development":
      "We clarify on-chain vs off-chain responsibilities, custody, and audit needs so Web3 features serve a real business workflow.",
    "healthcare-software-development":
      "We account for clinical workflows, privacy expectations, and reliable access so care teams can trust the software day to day.",
    "ar-vr-development":
      "We define devices, environments, and training or retail goals so immersive experiences stay practical to deploy and maintain.",
    "testing-and-qa":
      "We cover critical paths, regression risk, and environments so releases stay confident across web, mobile, and APIs.",
  };

  const discovery =
    discoveryByCategory[mainSlug] ??
    "We clarify goals, users, and constraints before build work begins so delivery stays aligned with what success looks like.";

  return [
    `How we approach ${service.toLowerCase()} starts with discovery: stakeholders, priorities, and success metrics. ${discovery}`,
    `During delivery you work with senior owners and visible checkpoints. Designs and increments are shared early, QA runs alongside development, and we prepare handoff notes so your team can operate and extend what we ship.`,
    `A typical ${service.toLowerCase()} engagement includes architecture, implementation, integrations where needed, launch support, and a clear backlog for what comes next. That keeps ${focusLower} connected to outcomes inside our ${parent} practice.`,
  ];
}

/** Bake sub-service overview copy with one natural link to the parent main service */
function withInternalLinks(map: SubServicesMap): SubServicesMap {
  return Object.fromEntries(
    Object.entries(map).map(([mainSlug, items]) => {
      const mainLabel = mainServiceLabels[mainSlug] ?? mainSlug;

      return [
        mainSlug,
        items.map((item) => {
          // Hero tagline stays plain text (keywords only, no links)
          const tagline = (item.tagline ?? item.description)
            .replace(/\s*Explore our \[[^\]]+\]\([^)]+\) services\.?/gi, "")
            .trim();

          const body = (item.content ?? [item.description])
            .map((paragraph) =>
              paragraph
                .replace(/^This page is part of our \[[^\]]+\]\([^)]+\) services\.[^.]*\.\s*/i, "")
                .trim(),
            )
            .filter(Boolean);

          const expanded =
            body.length >= 5
              ? body
              : [
                  ...body,
                  ...extraOverviewParagraphs(
                    mainSlug,
                    item.label,
                    item.description,
                    mainLabel
                  ).slice(0, Math.max(0, 5 - body.length)),
                ];

          // Exactly one natural parent link across the whole overview body
          let linked = false;
          const content = expanded.map((paragraph) => {
            if (linked) return paragraph;
            const next = withParentMainLinks(paragraph, mainSlug, mainLabel);
            if (next !== paragraph) linked = true;
            return next;
          });

          return { ...item, tagline, content };
        }),
      ];
    }),
  ) as SubServicesMap;
}

/**
 * Sub-service pages grouped by main category slug.
 * Routes: /{mainSlug}/{subSlug}
 * Internal links (homepage + parent main) are applied in this file.
 */
const subServicesByCategoryRaw: SubServicesMap = {
  "software-development": [
    sub({
      slug: "custom-software-development",
      label: "Custom Software Development",
      description:
        "Tailored applications aligned to your workflows, integrations, and growth roadmap.",
      tagline:
        "Work with a leading software development company to design and build custom software that fits how your business actually operates, not a generic off-the-shelf template.",
      pageTitle: "Custom Software Development Company | Next Software Development Company",
      metaDescription:
        "Custom software development company for tailored apps, integrations, and internal tools. Senior-led delivery for startups and enterprises. Get a free quote.",
      content: [
        "Custom software development gives you products and internal systems shaped around your processes, customers, and growth plans. As a software house focused on custom builds, we cover discovery, architecture, UI, engineering, QA, and launch so you are not stitching together disconnected freelancers.",
        "Whether you need a customer-facing platform, an operations tool, or a complex integration layer, our team delivers maintainable code, clear milestones, and documentation your staff can own after go-live. Share your requirements and we will outline scope, timeline, and investment before any build starts.",
      ],
      image: {
        src: "/services/software-development.webp",
        alt: "Custom software development services",
        width: 800,
        height: 500,
      },
    }),
    sub({
      slug: "enterprise-software-development",
      label: "Enterprise Software Development",
      description:
        "Large-scale systems for complex operations, governance, and multi-team delivery.",
      tagline:
        "Enterprise software development from a trusted software development company that understands governance, security, integrations, and multi-team delivery at scale.",
      pageTitle: "Enterprise Software Development Services | Next Software Development Company",
      metaDescription:
        "Enterprise software development services for complex operations, security, and integrations. Built by a senior software house. Request a consultation.",
      content: [
        "Enterprise software development requires more than features. You need role-based access, audit trails, uptime targets, and integrations with ERP, CRM, identity, and legacy systems. We design platforms that operations, IT, and business units can run together without constant firefighting.",
        "Our enterprise delivery model includes architecture reviews, staged rollouts, and knowledge transfer so your internal teams stay in control. From modernization of aging systems to greenfield platforms, we build for longevity and measurable business outcomes.",
      ],
    }),
    sub({
      slug: "saas-application-development",
      label: "SaaS Application Development",
      description:
        "Multi-tenant products with billing, onboarding, and infrastructure built to scale.",
      tagline:
        "Launch a scalable SaaS product with a top rated software development company experienced in multi-tenant architecture, billing, onboarding, and cloud operations.",
      pageTitle: "SaaS Application Development Company | Next Software Development Company",
      metaDescription:
        "SaaS application development company for multi-tenant products, subscriptions, and cloud scale. From MVP to growth. Get a free quote.",
      content: [
        "SaaS application development is about product, infrastructure, and recurring revenue mechanics working as one system. We build multi-tenant apps with secure tenancy, subscription billing hooks, admin tooling, and analytics so you can onboard customers and iterate after launch.",
        "As your software house partner, we help you move from idea or early MVP to a production SaaS that handles real usage, support workflows, and release cadence. You get a roadmap that balances speed to market with the foundations you will need when usage grows.",
      ],
    }),
    sub({
      slug: "software-product-development",
      label: "Software Product Development",
      description:
        "End-to-end product engineering from discovery through launch and iteration.",
      tagline:
        "End-to-end software product development with a best software development company approach: discovery, design, build, launch, and continuous improvement.",
      pageTitle: "Software Product Development Services | Next Software Development Company",
      metaDescription:
        "Software product development services from discovery to launch and iteration. Partner with a leading software house. Talk to our team today.",
      content: [
        "Software product development succeeds when strategy and engineering stay aligned. We help founders and product leaders define the problem, prioritize the roadmap, and ship releases that users actually adopt, instead of bloated first versions that miss the mark.",
        "Our product engineering teams combine UX, backend, frontend, and QA under one delivery process. You get transparent progress, usable increments every sprint, and a partner who can continue supporting the product after release.",
      ],
    }),
    sub({
      slug: "mvp-development",
      label: "MVP Development",
      description:
        "Focused first releases that validate demand quickly without overbuilding.",
      tagline:
        "Ship a focused MVP with a leading software house so you can validate demand, collect real user feedback, and invest in the right features next.",
      pageTitle: "MVP Development Company | Next Software Development Company",
      metaDescription:
        "MVP development company for fast, focused first releases. Validate demand without overbuilding. Senior team, clear scope, free quote.",
      content: [
        "MVP development is about learning quickly with the smallest useful product. We help you cut scope to the outcomes that matter, choose a pragmatic tech stack, and deliver a release you can put in front of customers or investors without months of delay.",
        "As a software development company that regularly ships first versions, we protect the path to version two: clean structure, basic analytics, and a backlog ready for iteration once signals come in from the market.",
      ],
    }),
    sub({
      slug: "api-development-integration",
      label: "API Development & Integration",
      description:
        "APIs and third-party integrations that connect products, partners, and internal tools.",
      tagline:
        "Reliable API development and system integration from a software development company that connects products, partners, payments, and internal tools securely.",
      pageTitle: "API Development & Integration Services | Next Software Development Company",
      metaDescription:
        "API development and integration services for secure, scalable connections across products and systems. Expert software house. Get a free quote.",
      content: [
        "API development and integration turn separate systems into one working operation. We design and build REST and event-driven APIs, wrap third-party services, and document contracts so your frontend, mobile, and partner teams can move fast without breaking each other.",
        "Security, versioning, monitoring, and error handling are part of every build. Whether you need a public developer API or private enterprise integrations, we deliver connections that stay maintainable as your stack grows.",
      ],
    }),
  ],
  "mobile-development": [
    sub({
      slug: "android-app-development",
      label: "Android App Development",
      description:
        "Native Android apps engineered for performance, reliability, and Play Store delivery.",
      tagline:
        "Native Android app development from a leading software development company, built for performance, Play Store quality, and long-term maintainability.",
      pageTitle: "Android App Development Company | Next Software Development Company",
      metaDescription:
        "Android app development company for native, high-performance Play Store apps. Senior mobile engineers. Get a free quote.",
      content: [
        "Android app development succeeds when UX, device coverage, and backend integration are planned together. We build native Android applications with modern architecture, solid offline behavior where needed, and release processes that keep you compliant with Play Store requirements.",
        "From consumer products to field and enterprise apps, our software house delivers tested builds, clear documentation, and support for updates after launch so your Android product keeps pace with OS changes.",
      ],
      image: {
        src: "/services/mobile-development.webp",
        alt: "Android app development services",
        width: 800,
        height: 500,
      },
    }),
    sub({
      slug: "ios-app-development",
      label: "iOS App Development",
      description:
        "Native iOS apps with App Store ready quality, polish, and security.",
      tagline:
        "Native iOS app development with App Store ready quality from a top rated software development company trusted by startups and growing brands.",
      pageTitle: "iOS App Development Company | Next Software Development Company",
      metaDescription:
        "iOS app development company for native iPhone and iPad apps. App Store ready quality, security, and polish. Request a free quote.",
      content: [
        "iOS app development demands attention to detail, privacy guidelines, and smooth performance on Apple devices. We design and engineer native iOS apps that feel polished, handle secure auth and data carefully, and pass App Store review with fewer surprises.",
        "Our team partners with you on UX, development, testing, and submission. You get a production-ready iOS product and a path for feature releases after your first version ships.",
      ],
    }),
    sub({
      slug: "flutter-development",
      label: "Flutter Development",
      description:
        "Cross-platform Flutter apps with shared UI and near-native performance.",
      tagline:
        "Flutter development from a best software development company approach: one codebase, beautiful UI, and near-native performance on iOS and Android.",
      pageTitle: "Flutter App Development Company | Next Software Development Company",
      metaDescription:
        "Flutter app development company for cross-platform iOS and Android apps. Faster delivery with shared UI. Get a free quote.",
      content: [
        "Flutter development is ideal when you want one team shipping to iOS and Android without sacrificing visual quality. We build Flutter apps with clean architecture, reusable widgets, and CI pipelines that keep both platforms in sync.",
        "As your software house, we help you decide when Flutter is the right fit, then deliver a maintainable app with store releases, analytics, and a roadmap for ongoing improvements.",
      ],
    }),
    sub({
      slug: "react-native-development",
      label: "React Native Development",
      description:
        "React Native apps that share logic across iOS and Android without sacrificing feel.",
      tagline:
        "React Native development from a leading software house so you can share logic across iOS and Android while keeping a native feel and faster release cycles.",
      pageTitle: "React Native Development Company | Next Software Development Company",
      metaDescription:
        "React Native development company for cross-platform mobile apps with shared logic and native feel. Senior team. Free consultation.",
      content: [
        "React Native development lets product teams move faster when web and mobile skills overlap. We build production React Native apps with thoughtful navigation, native modules when needed, and performance profiling so the experience stays smooth.",
        "You get a single product codebase where it matters, plus clear boundaries for platform-specific work. That balance keeps delivery efficient without locking you into fragile shortcuts.",
      ],
    }),
    sub({
      slug: "cross-platform-app-development",
      label: "Cross-Platform App Development",
      description:
        "One codebase strategies that balance speed, quality, and platform reach.",
      tagline:
        "Cross-platform app development with a software development company that balances speed, quality, and reach across iOS, Android, and beyond.",
      pageTitle: "Cross-Platform App Development Services | Next Software Development Company",
      metaDescription:
        "Cross-platform app development services for iOS and Android with shared codebases. Faster launch, strong quality. Get a free quote.",
      content: [
        "Cross-platform app development is a strategy decision, not only a framework choice. We help you pick Flutter, React Native, or a hybrid approach based on product goals, team skills, and long-term cost of ownership.",
        "Then we deliver: shared foundations, platform polish where users notice, and a release process that keeps both stores updated. The result is wider reach without doubling every engineering hour.",
      ],
    }),
    sub({
      slug: "progressive-web-app-development",
      label: "Progressive Web App (PWA) Development",
      description:
        "Installable, offline-capable web apps that behave like native mobile experiences.",
      tagline:
        "Progressive web app development from a leading software development company: installable, fast, and offline-capable experiences without full native cost.",
      pageTitle: "Progressive Web App Development Company | Next Software Development Company",
      metaDescription:
        "PWA development company for installable, offline-capable web apps that feel native. Performance-focused software house. Get a quote.",
      content: [
        "Progressive web app development brings app-like engagement to the browser with service workers, install prompts, and responsive design. We build PWAs that load quickly, work on flaky networks, and fit into your existing web stack.",
        "For many products, a PWA is the smartest path to mobile reach before or alongside native apps. We scope the right offline and push capabilities so you invest only where users benefit.",
      ],
    }),
  ],
  "web-development": [
    sub({
      slug: "custom-website-development",
      label: "Custom Website Development",
      description:
        "Marketing and brand sites built for performance, SEO, and conversion.",
      tagline:
        "Custom website development from a leading software development company, built for speed, SEO, accessibility, and conversions that support your sales pipeline.",
      pageTitle: "Custom Website Development Company | Next Software Development Company",
      metaDescription:
        "Custom website development company for fast, SEO-friendly marketing sites. Conversion-focused builds. Get a free quote.",
      content: [
        "Custom website development should do more than look good. We engineer marketing and brand sites with clean structure, Core Web Vitals in mind, and content models your team can update without breaking the design.",
        "As a software house, we connect design, frontend, and technical SEO so your site supports discovery and lead generation from day one, with room to grow into richer web experiences later.",
      ],
      image: {
        src: "/services/Web-Development.webp",
        alt: "Custom website development services",
        width: 800,
        height: 500,
      },
    }),
    sub({
      slug: "web-application-development",
      label: "Web Application Development",
      description:
        "Complex browser apps with secure auth, workflows, and scalable architecture.",
      tagline:
        "Web application development for secure, scalable browser products from a top rated software development company serving startups and enterprises.",
      pageTitle: "Web Application Development Company | Next Software Development Company",
      metaDescription:
        "Web application development company for secure workflows, dashboards, and scalable browser products. Senior engineers. Free quote.",
      content: [
        "Web application development powers portals, dashboards, SaaS UIs, and internal tools that teams use every day. We build these apps with solid auth, role permissions, API layers, and UX that keeps complex work understandable.",
        "You get a production architecture that can grow with users and features, plus a delivery process with demos, tests, and documentation so handoff or ongoing partnership stays smooth.",
      ],
    }),
    sub({
      slug: "frontend-development",
      label: "Frontend Development",
      description:
        "Accessible, responsive interfaces with modern component systems and performance budgets.",
      tagline:
        "Frontend development from a best software development company mindset: accessible, responsive interfaces with performance budgets and maintainable component systems.",
      pageTitle: "Frontend Development Services | Next Software Development Company",
      metaDescription:
        "Frontend development services for modern, accessible, high-performance interfaces. React and Next.js specialists. Get a free quote.",
      content: [
        "Frontend development shapes how users judge your product. We implement responsive layouts, design systems, and interactive flows with attention to accessibility, state management, and load performance.",
        "Whether you need a new UI on an existing API or a full redesign, our frontend engineers collaborate with design and backend so the interface stays consistent and shippable.",
      ],
    }),
    sub({
      slug: "backend-development",
      label: "Backend Development",
      description:
        "APIs, services, and data layers that keep products reliable under real traffic.",
      tagline:
        "Backend development from a leading software house: APIs, services, and data layers built for security, reliability, and real production traffic.",
      pageTitle: "Backend Development Services | Next Software Development Company",
      metaDescription:
        "Backend development services for scalable APIs, services, and data layers. Reliable software development company. Request a quote.",
      content: [
        "Backend development is the foundation of every serious product. We design APIs, domain services, queues, and databases that enforce business rules, protect data, and stay observable when something goes wrong.",
        "Our software development company approach favors clear boundaries, automated tests, and deployment practices that let you release often without gambling on uptime.",
      ],
    }),
    sub({
      slug: "full-stack-development",
      label: "Full Stack Development",
      description:
        "Unified frontend and backend delivery from one senior engineering team.",
      tagline:
        "Full stack development with one senior team covering UI, APIs, and infrastructure so your software development company partner ships complete features end to end.",
      pageTitle: "Full Stack Development Company | Next Software Development Company",
      metaDescription:
        "Full stack development company for end-to-end web products. Frontend, backend, and delivery in one team. Get a free quote.",
      content: [
        "Full stack development removes the friction of separate UI and API vendors. One team owns the feature from screen to database, which means fewer gaps, faster decisions, and clearer accountability.",
        "We staff projects with engineers who can move across the stack while still applying specialist depth where it matters, so you get velocity without shallow shortcuts.",
      ],
    }),
    sub({
      slug: "cms-development",
      label: "CMS Development",
      description:
        "Content platforms and headless CMS setups your marketing and product teams can own.",
      tagline:
        "CMS development from a software development company that gives marketing and product teams editable content without sacrificing performance or design quality.",
      pageTitle: "CMS Development Services | Next Software Development Company",
      metaDescription:
        "CMS development services and headless CMS setups for editable, fast websites. Expert software house. Talk to us today.",
      content: [
        "CMS development should free your content team, not trap developers in every copy change. We implement traditional and headless CMS setups with structured content models, previews, and publishing workflows that match how your organization works.",
        "The result is a site or content hub that stays on-brand, loads quickly, and scales as channels and locales grow.",
      ],
    }),
  ],
  "ecommerce-development": [
    sub({
      slug: "shopify-development",
      label: "Shopify Development",
      description:
        "Custom Shopify storefronts, themes, and apps tuned for conversion and ops.",
      tagline:
        "Shopify development from a leading software development company: custom themes, apps, and storefronts tuned for conversion, speed, and day-to-day operations.",
      pageTitle: "Shopify Development Company | Next Software Development Company",
      metaDescription:
        "Shopify development company for custom themes, apps, and high-converting storefronts. Expert ecommerce team. Get a free quote.",
      content: [
        "Shopify development is more than installing a theme. We customize storefronts, checkout-adjacent experiences, and Shopify apps so catalog, promotions, and fulfillment match how you sell.",
        "As your ecommerce software house, we focus on performance, conversion paths, and maintainable customizations that survive platform updates.",
      ],
    }),
    sub({
      slug: "woocommerce-development",
      label: "WooCommerce Development",
      description:
        "WordPress ecommerce builds with catalogs, checkout, and payment flexibility.",
      tagline:
        "WooCommerce development with a top rated software development company for flexible WordPress ecommerce, catalogs, checkout, and payment integrations.",
      pageTitle: "WooCommerce Development Services | Next Software Development Company",
      metaDescription:
        "WooCommerce development services for WordPress stores with custom catalogs, checkout, and payments. Get a free quote.",
      content: [
        "WooCommerce development suits brands that want WordPress content and ecommerce in one ecosystem. We build and extend stores with clean themes, reliable plugins or custom modules, and payment setups that match your markets.",
        "Security updates, performance, and admin usability are part of delivery so your team can manage products and orders without constant developer help.",
      ],
    }),
    sub({
      slug: "magento-development",
      label: "Magento Development",
      description:
        "Enterprise Magento storefronts for complex catalogs and B2B workflows.",
      tagline:
        "Magento development for complex catalogs and B2B workflows from a software house experienced with enterprise ecommerce requirements.",
      pageTitle: "Magento Development Company | Next Software Development Company",
      metaDescription:
        "Magento development company for enterprise and B2B storefronts with complex catalogs. Senior ecommerce engineers. Free consultation.",
      content: [
        "Magento development is a strong fit when catalog rules, pricing, and B2B flows outgrow simpler platforms. We implement and customize Magento storefronts with attention to performance, extensions, and operational tooling.",
        "Our software development company team plans upgrades and integrations carefully so your store stays stable while sales and product teams keep moving.",
      ],
    }),
    sub({
      slug: "custom-ecommerce-development",
      label: "Custom Ecommerce Development",
      description:
        "Bespoke ecommerce platforms built around your catalog, pricing, and fulfillment.",
      tagline:
        "Custom ecommerce development from a best software development company approach when off-the-shelf platforms cannot match your catalog, pricing, or fulfillment model.",
      pageTitle: "Custom Ecommerce Development Services | Next Software Development Company",
      metaDescription:
        "Custom ecommerce development services for bespoke storefronts, pricing, and fulfillment. Leading software house. Get a quote.",
      content: [
        "Custom ecommerce development is right when unique workflows are your advantage. We design platforms around your product rules, customer types, and logistics so checkout and operations feel native to your business.",
        "You still get the essentials shoppers expect: search, carts, payments, and admin tools, engineered as a coherent product rather than a pile of plugins.",
      ],
    }),
    sub({
      slug: "multi-vendor-marketplace-development",
      label: "Multi-Vendor Marketplace Development",
      description:
        "Marketplaces with seller tooling, commissions, and multi-party payments.",
      tagline:
        "Multi-vendor marketplace development from a leading software development company, covering seller onboarding, commissions, catalogs, and multi-party payments.",
      pageTitle: "Multi-Vendor Marketplace Development | Next Software Development Company",
      metaDescription:
        "Multi-vendor marketplace development for seller tooling, commissions, and payments. Expert software development company. Free quote.",
      content: [
        "Multi-vendor marketplace development means building for buyers and sellers at once. We implement vendor dashboards, listing workflows, commission logic, dispute paths, and payouts that keep the marketplace trustworthy.",
        "Architecture choices matter early. We help you scope MVP marketplace features that prove demand while leaving room for search, ratings, and growth tooling later.",
      ],
    }),
    sub({
      slug: "payment-gateway-integration",
      label: "Payment Gateway Integration",
      description:
        "Secure payment flows and gateway integrations that protect conversion and trust.",
      tagline:
        "Secure payment gateway integration from a software development company that protects conversion, compliance, and customer trust at checkout.",
      pageTitle: "Payment Gateway Integration Services | Next Software Development Company",
      metaDescription:
        "Payment gateway integration services for secure checkout and multi-provider payments. Reliable software house. Get a free quote.",
      content: [
        "Payment gateway integration sits at the center of ecommerce revenue. We connect providers, handle webhooks and reconciliation hooks, and design checkout flows that reduce drop-off without weakening security.",
        "Whether you need a single regional gateway or multi-provider routing, our team documents edge cases and failure states so support and finance teams are not left guessing.",
      ],
    }),
  ],
  "ui-ux-design": [
    sub({
      slug: "ui-design",
      label: "UI Design",
      description:
        "High-fidelity interfaces that stay consistent across product and marketing surfaces.",
      tagline:
        "UI design from a leading software development company: high-fidelity interfaces that stay consistent across product screens and marketing surfaces.",
      pageTitle: "UI Design Services | Next Software Development Company",
      metaDescription:
        "UI design services for polished, consistent product and marketing interfaces. Designers paired with engineering. Get a free quote.",
      content: [
        "UI design turns structure into a clear visual system users can navigate quickly. We craft layouts, typography, and components that match your brand and work across breakpoints without feeling fragile.",
        "Because we sit inside a software house, designs are built for implementation, reducing rework when engineering starts and keeping the shipped UI faithful to the intent.",
      ],
      image: {
        src: "/services/ui-ux-design.webp",
        alt: "UI design services",
        width: 800,
        height: 500,
      },
    }),
    sub({
      slug: "ux-design",
      label: "UX Design",
      description:
        "User journeys and interaction design grounded in research and real task flows.",
      tagline:
        "UX design grounded in real tasks and user journeys, delivered by a top rated software development company that builds what it designs.",
      pageTitle: "UX Design Services | Next Software Development Company",
      metaDescription:
        "UX design services for research-led journeys, flows, and interaction design. Product-focused software house. Free consultation.",
      content: [
        "UX design reduces friction before code locks in the wrong flow. We map journeys, define interaction patterns, and prioritize clarity for the jobs users need to finish.",
        "Insights feed directly into engineering backlog items, so UX improvements become shipped product changes rather than slide decks that stall.",
      ],
    }),
    sub({
      slug: "wireframing",
      label: "Wireframing",
      description:
        "Low-fidelity structures that clarify information architecture before visual design.",
      tagline:
        "Wireframing services that clarify information architecture early, from a software development company that prevents expensive redesign later.",
      pageTitle: "Wireframing Services | Next Software Development Company",
      metaDescription:
        "Wireframing services for clear information architecture before visual design. Faster alignment, less rework. Get a quote.",
      content: [
        "Wireframing aligns stakeholders on structure before color and imagery distract the conversation. We produce low-fidelity screens that show hierarchy, navigation, and content priority.",
        "Teams move into UI design and development with fewer surprises, because the skeleton of the product is already agreed.",
      ],
    }),
    sub({
      slug: "prototyping",
      label: "Prototyping",
      description:
        "Clickable prototypes that validate flows before engineering commits.",
      tagline:
        "Clickable prototyping from a best software development company workflow so you validate flows with users before engineering commits full build cost.",
      pageTitle: "Product Prototyping Services | Next Software Development Company",
      metaDescription:
        "Prototyping services for clickable flows that validate UX before development. Reduce risk and rework. Talk to our team.",
      content: [
        "Prototyping turns ideas into something people can click and critique. We build interactive prototypes that test navigation, forms, and critical paths without writing production code yet.",
        "Feedback at this stage is cheaper and clearer, which keeps your software development budget focused on the flows that already work.",
      ],
    }),
    sub({
      slug: "design-systems",
      label: "Design Systems",
      description:
        "Tokens, components, and documentation that keep teams shipping consistently.",
      tagline:
        "Design systems with tokens, components, and docs from a leading software house so product teams ship consistent UI at speed.",
      pageTitle: "Design System Development | Next Software Development Company",
      metaDescription:
        "Design system services for tokens, components, and documentation. Consistent UI at scale. Expert software development company.",
      content: [
        "Design systems keep growing products coherent. We define tokens, reusable components, and lightweight documentation that designers and engineers share.",
        "The payoff is faster feature work, fewer one-off styles, and a brand experience that stays recognizable as the product expands.",
      ],
    }),
    sub({
      slug: "usability-testing",
      label: "Usability Testing",
      description:
        "Evidence-based tests that find friction early and prioritize UX improvements.",
      tagline:
        "Usability testing from a software development company that turns evidence into prioritized UX fixes before and after launch.",
      pageTitle: "Usability Testing Services | Next Software Development Company",
      metaDescription:
        "Usability testing services to find friction early and prioritize UX improvements. Research paired with delivery. Get a quote.",
      content: [
        "Usability testing replaces opinions with observed behavior. We plan tasks, run sessions, and summarize findings into actionable changes your product team can schedule.",
        "Because we also build software, recommendations stay realistic for your stack and release timeline.",
      ],
    }),
  ],
  "artificial-intelligence": [
    sub({
      slug: "ai-software-development",
      label: "AI Software Development",
      description:
        "Production AI features integrated into products with guardrails and monitoring.",
      tagline:
        "AI software development from a leading software development company: production features with guardrails, evaluation, and monitoring, not demos that stall.",
      pageTitle: "AI Software Development Company | Next Software Development Company",
      metaDescription:
        "AI software development company for production-ready AI features with guardrails and monitoring. Get a free quote.",
      content: [
        "AI software development should improve a real workflow inside your product. We integrate models and pipelines with auth, data access rules, and UX so users trust the output.",
        "Our software house approach includes evaluation, fallbacks, and observability so AI features remain useful after the launch demo fades.",
      ],
      image: {
        src: "/services/Artificial-Intelligence.webp",
        alt: "AI software development services",
        width: 800,
        height: 500,
      },
    }),
    sub({
      slug: "generative-ai-solutions",
      label: "Generative AI Solutions",
      description:
        "LLM-powered generation for content, support, and internal knowledge workflows.",
      tagline:
        "Generative AI solutions for content, support, and knowledge work, built by a top rated software development company with secure data grounding.",
      pageTitle: "Generative AI Solutions Company | Next Software Development Company",
      metaDescription:
        "Generative AI solutions for content, support, and internal knowledge workflows. Secure, grounded LLM builds. Free consultation.",
      content: [
        "Generative AI solutions create leverage when they sit on your own data and policies. We design RAG and generation workflows for support, content, and internal search with clear human review points where needed.",
        "You get practical automation that reduces repetitive work while staying aligned with brand voice and compliance expectations.",
      ],
    }),
    sub({
      slug: "ai-chatbot-development",
      label: "AI Chatbot Development",
      description:
        "Conversational assistants grounded in your data, policies, and brand voice.",
      tagline:
        "AI chatbot development grounded in your data and brand voice, delivered by a software development company that focuses on accuracy and handoff to humans.",
      pageTitle: "AI Chatbot Development Company | Next Software Development Company",
      metaDescription:
        "AI chatbot development company for accurate, grounded assistants with human handoff. Customer support and internal use. Get a quote.",
      content: [
        "AI chatbot development works when answers are grounded and escalation is clear. We build assistants for websites, apps, and internal tools with retrieval, tooling, and analytics.",
        "The goal is fewer repetitive tickets and faster answers, without trapping users in loops when a person should take over.",
      ],
    }),
    sub({
      slug: "ai-agent-development",
      label: "AI Agent Development",
      description:
        "Task-oriented agents that automate multi-step work across your tools.",
      tagline:
        "AI agent development for multi-step automation across your tools, from a leading software house that designs safe, auditable agent workflows.",
      pageTitle: "AI Agent Development Services | Next Software Development Company",
      metaDescription:
        "AI agent development services that automate multi-step work across business tools. Safe, auditable workflows. Free quote.",
      content: [
        "AI agent development goes beyond chat. Agents plan steps, call tools, and complete tasks such as research, ticket triage, or data entry with supervision rules you define.",
        "We engineer permissions, logging, and failure handling so automation stays useful and reviewable inside real operations.",
      ],
    }),
    sub({
      slug: "computer-vision-solutions",
      label: "Computer Vision Solutions",
      description:
        "Image and video analysis for inspection, moderation, identity, and search.",
      tagline:
        "Computer vision solutions for inspection, moderation, identity, and visual search from a best software development company engineering mindset.",
      pageTitle: "Computer Vision Solutions | Next Software Development Company",
      metaDescription:
        "Computer vision solutions for image and video analysis in inspection, moderation, and search. Expert AI software house.",
      content: [
        "Computer vision solutions extract signal from images and video at scale. We build pipelines for classification, detection, and search that fit your latency and accuracy targets.",
        "From industrial inspection to content moderation, we pair models with product UX and ops processes so results drive action.",
      ],
    }),
    sub({
      slug: "natural-language-processing",
      label: "Natural Language Processing (NLP)",
      description:
        "Search, summarization, classification, and language understanding for your domain.",
      tagline:
        "Natural language processing services for search, summarization, and classification, built by a software development company that understands your domain language.",
      pageTitle: "NLP Development Services | Next Software Development Company",
      metaDescription:
        "NLP development services for search, summarization, classification, and language understanding. Domain-focused builds. Get a quote.",
      content: [
        "Natural language processing turns unstructured text into searchable, classifiable, actionable data. We implement pipelines for tickets, documents, chats, and knowledge bases.",
        "Domain vocabulary and evaluation sets are part of the work, so models stay accurate for your industry rather than generic demos.",
      ],
    }),
  ],
  "machine-learning": [
    sub({
      slug: "predictive-analytics",
      label: "Predictive Analytics",
      description:
        "Forecasting and risk models that turn historical data into forward-looking decisions.",
      tagline:
        "Predictive analytics from a leading software development company: forecasting and risk models that turn historical data into decisions you can act on.",
      pageTitle: "Predictive Analytics Services | Next Software Development Company",
      metaDescription:
        "Predictive analytics services for forecasting and risk models. Data-driven software house. Request a free consultation.",
      content: [
        "Predictive analytics helps teams plan inventory, demand, churn, and risk with evidence instead of gut feel. We build models tied to clear business metrics and the data you already collect.",
        "Delivery includes feature pipelines, validation, and dashboards or APIs so predictions show up where decisions are made.",
      ],
      image: {
        src: "/services/machine-learning.webp",
        alt: "Predictive analytics services",
        width: 800,
        height: 500,
      },
    }),
    sub({
      slug: "deep-learning-solutions",
      label: "Deep Learning Solutions",
      description:
        "Neural models for complex pattern recognition across text, images, and signals.",
      tagline:
        "Deep learning solutions for complex pattern recognition across text, images, and signals, engineered by a top rated software development company.",
      pageTitle: "Deep Learning Solutions Company | Next Software Development Company",
      metaDescription:
        "Deep learning solutions for text, image, and signal pattern recognition. Production-minded ML team. Get a free quote.",
      content: [
        "Deep learning solutions fit problems where classical models struggle. We select architectures carefully, train with your data constraints, and package inference for production latency and cost.",
        "You get more than a notebook: deployment paths, monitoring, and a plan for retraining as data drifts.",
      ],
    }),
    sub({
      slug: "mlops",
      label: "MLOps",
      description:
        "Training pipelines, registries, and deployment automation for repeatable ML delivery.",
      tagline:
        "MLOps from a software house that makes training, registry, and deployment repeatable so machine learning stays reliable after the first model ships.",
      pageTitle: "MLOps Services | Next Software Development Company",
      metaDescription:
        "MLOps services for training pipelines, model registries, and automated deployment. Repeatable ML delivery. Talk to us.",
      content: [
        "MLOps is how machine learning survives contact with production. We set up pipelines, experiment tracking, registries, and promotion flows that your team can run without heroics.",
        "The result is faster iteration with clearer auditability, which matters for both engineering quality and business trust.",
      ],
    }),
    sub({
      slug: "image-recognition",
      label: "Image Recognition",
      description:
        "Classification and detection systems built for production accuracy and latency.",
      tagline:
        "Image recognition systems built for production accuracy and latency by a leading software development company with end-to-end ML delivery.",
      pageTitle: "Image Recognition Software Development | Next Software Development Company",
      metaDescription:
        "Image recognition software for classification and detection with production accuracy. Expert ML software house. Free quote.",
      content: [
        "Image recognition powers product tagging, quality checks, and visual search. We train and tune classification and detection models against your labeled data and edge cases.",
        "Integration into apps and workflows is included so predictions become part of operations, not a separate science project.",
      ],
    }),
    sub({
      slug: "recommendation-systems",
      label: "Recommendation Systems",
      description:
        "Personalized ranking for products, content, and offers tied to business KPIs.",
      tagline:
        "Recommendation systems that personalize products, content, and offers, built by a best software development company focused on business KPIs.",
      pageTitle: "Recommendation System Development | Next Software Development Company",
      metaDescription:
        "Recommendation system development for personalized product and content ranking. KPI-focused ML. Get a free quote.",
      content: [
        "Recommendation systems increase engagement and revenue when ranking reflects real user intent and business rules. We design candidate generation, ranking, and feedback loops tied to the metrics you care about.",
        "Cold start, fairness constraints, and explainability are considered early so recommendations stay useful as catalogs and audiences grow.",
      ],
    }),
    sub({
      slug: "model-deployment",
      label: "Model Deployment",
      description:
        "Batch and real-time inference serving sized for your traffic and cost targets.",
      tagline:
        "Model deployment for batch and real-time inference, sized for traffic and cost by a software development company that runs production systems.",
      pageTitle: "ML Model Deployment Services | Next Software Development Company",
      metaDescription:
        "ML model deployment services for batch and real-time inference with monitoring. Reliable software house. Request a quote.",
      content: [
        "Model deployment is where accuracy meets latency, cost, and reliability. We package models for batch jobs or online APIs, add health checks, and plan rollbacks.",
        "Your data science work becomes a service other teams can call with confidence, backed by monitoring when drift or errors appear.",
      ],
    }),
  ],
  "automation-services": [
    sub({
      slug: "business-process-automation",
      label: "Business Process Automation",
      description:
        "End-to-end automation that removes manual handoffs across operations teams.",
      tagline:
        "Business process automation from a leading software development company that removes manual handoffs and shortens cycle time across operations.",
      pageTitle: "Business Process Automation Services | Next Software Development Company",
      metaDescription:
        "Business process automation services to remove manual handoffs and speed operations. Expert software house. Free quote.",
      content: [
        "Business process automation maps the real workflow first, then replaces repetitive steps with reliable systems. We connect forms, approvals, notifications, and systems of record into one path.",
        "Teams keep visibility and exceptions handling, while routine work stops living in spreadsheets and email threads.",
      ],
    }),
    sub({
      slug: "robotic-process-automation",
      label: "Robotic Process Automation (RPA)",
      description:
        "Bots that execute repetitive desktop and system tasks with auditability.",
      tagline:
        "Robotic process automation (RPA) bots for repetitive desktop and system tasks, built by a top rated software development company with audit trails.",
      pageTitle: "RPA Development Company | Next Software Development Company",
      metaDescription:
        "RPA development company for auditable bots that automate repetitive desktop and system tasks. Get a free consultation.",
      content: [
        "RPA is effective when legacy UIs block API integrations. We build bots that follow defined steps, log outcomes, and fail safely when screens or data change.",
        "Governance matters: we help you choose processes worth automating and keep humans in the loop for exceptions.",
      ],
    }),
    sub({
      slug: "workflow-automation",
      label: "Workflow Automation",
      description:
        "Triggered workflows that connect tools, approvals, and notifications reliably.",
      tagline:
        "Workflow automation that connects tools, approvals, and notifications reliably, delivered by a software house focused on maintainable integrations.",
      pageTitle: "Workflow Automation Services | Next Software Development Company",
      metaDescription:
        "Workflow automation services for triggered approvals, notifications, and tool connections. Reliable software development company.",
      content: [
        "Workflow automation keeps work moving without constant chasing. We design triggers, conditions, and escalations across CRMs, ticketing, chat, and custom apps.",
        "Clear ownership and monitoring mean automated workflows stay trustworthy as your tool stack evolves.",
      ],
    }),
    sub({
      slug: "crm-automation",
      label: "CRM Automation",
      description:
        "Lead routing, nurturing, and CRM sync that keep sales pipelines clean.",
      tagline:
        "CRM automation for lead routing, nurturing, and clean pipelines from a leading software development company that integrates sales tools properly.",
      pageTitle: "CRM Automation Services | Next Software Development Company",
      metaDescription:
        "CRM automation services for lead routing, nurturing, and pipeline sync. Sales-focused software house. Get a quote.",
      content: [
        "CRM automation stops leads from stalling in inboxes. We implement routing rules, enrichment, task creation, and lifecycle sync so sales and marketing share one truth.",
        "Clean data and sensible alerts matter as much as the automations themselves, and we design both.",
      ],
    }),
    sub({
      slug: "erp-automation",
      label: "ERP Automation",
      description:
        "Automated ERP processes for finance, inventory, and order operations.",
      tagline:
        "ERP automation for finance, inventory, and order operations from a best software development company experienced with enterprise systems.",
      pageTitle: "ERP Automation Services | Next Software Development Company",
      metaDescription:
        "ERP automation services for finance, inventory, and order workflows. Reduce manual ERP work. Talk to our team.",
      content: [
        "ERP automation reduces manual posting, reconciliation, and status updates that slow finance and operations. We automate high-volume processes while preserving controls and audit needs.",
        "Integrations with ecommerce, WMS, and banking tools are planned carefully so automation does not create silent data drift.",
      ],
    }),
    sub({
      slug: "ai-workflow-automation",
      label: "AI Workflow Automation",
      description:
        "AI-assisted workflows for classification, extraction, and decision support.",
      tagline:
        "AI workflow automation for classification, extraction, and decision support, built by a software development company that pairs AI with clear human oversight.",
      pageTitle: "AI Workflow Automation Services | Next Software Development Company",
      metaDescription:
        "AI workflow automation for document extraction, classification, and decision support. Practical AI software house. Free quote.",
      content: [
        "AI workflow automation accelerates steps that used to need full human reading or sorting. We add classification and extraction into existing processes with confidence thresholds and review queues.",
        "The outcome is faster throughput without giving up accountability when the model is unsure.",
      ],
    }),
  ],
  "cloud-devops": [
    sub({
      slug: "aws-cloud-services",
      label: "AWS Cloud Services",
      description:
        "AWS architecture, migration, and managed services tuned for cost and reliability.",
      tagline:
        "AWS cloud services from a leading software development company: architecture, migration, and operations tuned for reliability and cost control.",
      pageTitle: "AWS Cloud Services Company | Next Software Development Company",
      metaDescription:
        "AWS cloud services for architecture, migration, and managed operations. Cost-aware, reliable software house. Get a free quote.",
      content: [
        "AWS cloud services succeed when architecture matches workload patterns. We design landing zones, networking, and application platforms with security baselines and sensible spend.",
        "Migrations and greenfield builds include observability and runbooks so your team can operate the environment after go-live.",
      ],
      image: {
        src: "/services/cloud-devops.webp",
        alt: "AWS cloud services",
        width: 800,
        height: 500,
      },
    }),
    sub({
      slug: "microsoft-azure-services",
      label: "Microsoft Azure Services",
      description:
        "Azure landing zones, apps, and identity patterns for enterprise workloads.",
      tagline:
        "Microsoft Azure services for enterprise workloads, landing zones, and identity, delivered by a top rated software development company.",
      pageTitle: "Microsoft Azure Services Company | Next Software Development Company",
      metaDescription:
        "Microsoft Azure services for landing zones, apps, and identity. Enterprise-ready cloud software house. Free consultation.",
      content: [
        "Microsoft Azure services fit organizations already invested in Microsoft identity and tooling. We implement Azure apps, data services, and governance patterns that satisfy IT and business owners.",
        "Security, cost management, and deployment automation are built in from the first environment, not bolted on later.",
      ],
    }),
    sub({
      slug: "google-cloud-platform",
      label: "Google Cloud Platform (GCP)",
      description:
        "GCP infrastructure and data platforms with secure, scalable defaults.",
      tagline:
        "Google Cloud Platform (GCP) engineering from a software house that builds secure, scalable infrastructure and data platforms with clean defaults.",
      pageTitle: "Google Cloud Platform Services | Next Software Development Company",
      metaDescription:
        "GCP cloud services for secure, scalable infrastructure and data platforms. Expert software development company. Get a quote.",
      content: [
        "Google Cloud Platform work spans compute, Kubernetes, and data services. We help you choose the right primitives and wire IAM, networking, and monitoring correctly.",
        "Whether you are migrating or starting fresh, we keep environments reproducible and documented for your engineering team.",
      ],
    }),
    sub({
      slug: "docker-containerization",
      label: "Docker Containerization",
      description:
        "Containerized apps with reproducible builds and portable environments.",
      tagline:
        "Docker containerization for reproducible builds and portable environments from a leading software development company.",
      pageTitle: "Docker Containerization Services | Next Software Development Company",
      metaDescription:
        "Docker containerization services for reproducible builds and portable app environments. DevOps-focused software house.",
      content: [
        "Docker containerization removes works-on-my-machine surprises. We containerize apps with lean images, secure defaults, and clear local-to-cloud parity.",
        "Your CI pipelines and developers share the same runtime contract, which shortens onboarding and reduces environment bugs.",
      ],
    }),
    sub({
      slug: "kubernetes-deployment",
      label: "Kubernetes Deployment",
      description:
        "Cluster setup, Helm delivery, and operations for production Kubernetes.",
      tagline:
        "Kubernetes deployment and operations from a best software development company approach: clusters, Helm delivery, and production-ready reliability.",
      pageTitle: "Kubernetes Deployment Services | Next Software Development Company",
      metaDescription:
        "Kubernetes deployment services for production clusters, Helm delivery, and ops. Reliable cloud software house. Free quote.",
      content: [
        "Kubernetes deployment is powerful when operated with discipline. We set up clusters, workloads, ingress, and autoscaling with the observability you need to sleep at night.",
        "Helm charts, secrets handling, and rollout strategies are part of delivery so releases stay predictable as services multiply.",
      ],
    }),
    sub({
      slug: "ci-cd-pipeline-setup",
      label: "CI/CD Pipeline Setup",
      description:
        "Automated build, test, and deploy pipelines that shorten release cycles.",
      tagline:
        "CI/CD pipeline setup that shortens release cycles with automated build, test, and deploy from a trusted software development company.",
      pageTitle: "CI/CD Pipeline Setup Services | Next Software Development Company",
      metaDescription:
        "CI/CD pipeline setup for automated build, test, and deploy. Faster, safer releases. Expert DevOps software house.",
      content: [
        "CI/CD pipeline setup turns releases from a weekend event into a routine. We automate tests, quality gates, and environment promotions with clear ownership of failures.",
        "Your team ships smaller changes more often, with rollback paths and audit history when something needs investigation.",
      ],
    }),
  ],
  "data-business-intelligence": [
    sub({
      slug: "power-bi-development",
      label: "Power BI Development",
      description:
        "Power BI models and dashboards executives and operators can trust.",
      tagline:
        "Power BI development from a leading software development company: trusted models and dashboards for executives and operators.",
      pageTitle: "Power BI Development Company | Next Software Development Company",
      metaDescription:
        "Power BI development company for trusted dashboards and semantic models. Decision-ready reporting. Get a free quote.",
      content: [
        "Power BI development is only useful when numbers match the business definition of truth. We build semantic models, row-level security, and dashboards that leadership can defend in meetings.",
        "Data refresh, performance, and governance are planned so reports stay accurate as sources change.",
      ],
      image: {
        src: "/services/data-business-intelligence.webp",
        alt: "Power BI development services",
        width: 800,
        height: 500,
      },
    }),
    sub({
      slug: "tableau-development",
      label: "Tableau Development",
      description:
        "Tableau visualizations and workbooks aligned to your KPI definitions.",
      tagline:
        "Tableau development aligned to your KPI definitions, delivered by a top rated software development company for analytics teams.",
      pageTitle: "Tableau Development Services | Next Software Development Company",
      metaDescription:
        "Tableau development services for KPI-aligned visualizations and workbooks. Clear analytics for teams. Free consultation.",
      content: [
        "Tableau development turns complex datasets into interactive views people actually use. We design workbooks around decisions, not decorative charts.",
        "Performance extraction strategies and consistent metrics keep Tableau a trusted layer in your BI stack.",
      ],
    }),
    sub({
      slug: "data-analytics",
      label: "Data Analytics",
      description:
        "Analysis and reporting that turn raw data into clear business decisions.",
      tagline:
        "Data analytics services that turn raw data into clear decisions, from a software house that connects analysis to product and operations outcomes.",
      pageTitle: "Data Analytics Services | Next Software Development Company",
      metaDescription:
        "Data analytics services for reporting and insight that drive business decisions. Expert software development company. Get a quote.",
      content: [
        "Data analytics should answer specific questions: what changed, why it matters, and what to do next. We help you define metrics, explore patterns, and publish reporting that teams understand.",
        "Findings connect back to systems and processes so analysis leads to action, not another unread dashboard.",
      ],
    }),
    sub({
      slug: "data-engineering",
      label: "Data Engineering",
      description:
        "Pipelines, warehouses, and quality checks for reliable analytics foundations.",
      tagline:
        "Data engineering for pipelines, warehouses, and quality checks from a leading software development company that builds reliable analytics foundations.",
      pageTitle: "Data Engineering Services | Next Software Development Company",
      metaDescription:
        "Data engineering services for pipelines, warehouses, and data quality. Solid foundations for BI and ML. Free quote.",
      content: [
        "Data engineering makes analytics and ML possible. We build ingestion, transformation, and warehouse layers with tests and lineage so consumers trust the tables they query.",
        "Scalable design keeps cost and latency under control as sources and consumers multiply.",
      ],
    }),
    sub({
      slug: "data-visualization",
      label: "Data Visualization",
      description:
        "Clear charts and interactive views that make complex metrics easy to act on.",
      tagline:
        "Data visualization that makes complex metrics easy to act on, crafted by a best software development company design and analytics practice.",
      pageTitle: "Data Visualization Services | Next Software Development Company",
      metaDescription:
        "Data visualization services for clear charts and interactive views. Metrics your teams can act on. Talk to us.",
      content: [
        "Data visualization succeeds when the audience grasps the story in seconds. We design charts, filters, and layouts that highlight exceptions and trends without clutter.",
        "Whether embedded in products or published as BI, visuals stay consistent with your metric definitions.",
      ],
    }),
    sub({
      slug: "business-intelligence-solutions",
      label: "Business Intelligence Solutions",
      description:
        "End-to-end BI platforms with semantic models and self-serve reporting.",
      tagline:
        "Business intelligence solutions with semantic models and self-serve reporting from a software development company that owns the full BI stack.",
      pageTitle: "Business Intelligence Solutions Company | Next Software Development Company",
      metaDescription:
        "Business intelligence solutions with semantic models and self-serve reporting. End-to-end BI software house. Free quote.",
      content: [
        "Business intelligence solutions connect warehouses, semantic layers, and tools into one decision system. We implement end-to-end BI that finance, ops, and product teams can use without waiting weeks for custom extracts.",
        "Governance and training are included so self-serve does not become metric chaos.",
      ],
    }),
  ],
  cybersecurity: [
    sub({
      slug: "penetration-testing",
      label: "Penetration Testing",
      description:
        "Authorized attack simulations that surface real exploitable risks before attackers do.",
      tagline:
        "Penetration testing from a leading software development company: authorized attack simulations that surface real exploitable risks before attackers do.",
      pageTitle: "Penetration Testing Services | Next Software Development Company",
      metaDescription:
        "Penetration testing services that find exploitable risks in apps and infrastructure. Actionable reports. Get a free consultation.",
      content: [
        "Penetration testing validates security under realistic attack conditions. We scope targets carefully, test with authorization, and report findings with severity and remediation guidance engineers can follow.",
        "Retests confirm fixes landed, so security work closes the loop instead of sitting in a PDF.",
      ],
    }),
    sub({
      slug: "vulnerability-assessment",
      label: "Vulnerability Assessment",
      description:
        "Systematic scanning and prioritization of weaknesses across apps and infrastructure.",
      tagline:
        "Vulnerability assessment with systematic scanning and prioritization across apps and infrastructure from a top rated software house.",
      pageTitle: "Vulnerability Assessment Services | Next Software Development Company",
      metaDescription:
        "Vulnerability assessment services for apps and infrastructure with clear prioritization. Practical security software company.",
      content: [
        "Vulnerability assessment finds weaknesses early and ranks what to fix first. We combine scanning with context so teams are not drowning in low-value noise.",
        "Results map to owners and release plans, which is how assessments actually reduce risk.",
      ],
    }),
    sub({
      slug: "application-security",
      label: "Application Security",
      description:
        "Secure coding reviews, dependency checks, and hardening for web and APIs.",
      tagline:
        "Application security for web and APIs: secure reviews, dependency checks, and hardening from a software development company that ships products.",
      pageTitle: "Application Security Services | Next Software Development Company",
      metaDescription:
        "Application security services for secure coding, dependency checks, and API hardening. Built-in by a software house. Get a quote.",
      content: [
        "Application security belongs in the development lifecycle. We review code and architecture, check dependencies, and harden auth, input handling, and secrets management.",
        "Developers get concrete guidance, not abstract policy, so secure defaults stick in day-to-day delivery.",
      ],
    }),
    sub({
      slug: "cloud-security",
      label: "Cloud Security",
      description:
        "Identity, network, and configuration controls that protect cloud workloads.",
      tagline:
        "Cloud security controls for identity, network, and configuration from a best software development company cloud practice.",
      pageTitle: "Cloud Security Services | Next Software Development Company",
      metaDescription:
        "Cloud security services for identity, network, and configuration hardening. Protect AWS, Azure, and GCP workloads.",
      content: [
        "Cloud security fails most often on misconfiguration and identity sprawl. We harden IAM, network boundaries, logging, and baseline policies for your cloud accounts.",
        "Controls are designed to work with how your teams deploy, so security does not become a blocker no one follows.",
      ],
    }),
    sub({
      slug: "security-compliance",
      label: "Security Compliance",
      description:
        "SOC 2, HIPAA, and GDPR-aligned controls integrated into how you build and operate.",
      tagline:
        "Security compliance support for SOC 2, HIPAA, and GDPR-aligned controls, integrated into how a software house builds and operates products.",
      pageTitle: "Security Compliance Services | Next Software Development Company",
      metaDescription:
        "Security compliance services for SOC 2, HIPAA, and GDPR-aligned controls in software delivery. Talk to our team.",
      content: [
        "Security compliance is easier when controls live in your pipelines and processes. We help map requirements to technical and operational practices your team can sustain.",
        "Evidence collection becomes part of normal work, reducing last-minute audit scrambles.",
      ],
    }),
    sub({
      slug: "security-monitoring",
      label: "Security Monitoring",
      description:
        "Detection, alerting, and response workflows that keep production environments watched.",
      tagline:
        "Security monitoring with detection, alerting, and response workflows from a leading software development company that runs production systems.",
      pageTitle: "Security Monitoring Services | Next Software Development Company",
      metaDescription:
        "Security monitoring services for detection, alerting, and response in production. Stay ahead of incidents. Free quote.",
      content: [
        "Security monitoring keeps production watched after launch. We set up logging, detections, and alert paths that reach the right people with enough context to act.",
        "Noise is filtered so genuine incidents get attention, and playbooks guide the first response minutes.",
      ],
    }),
  ],
  "enterprise-solutions": [
    sub({
      slug: "erp-development",
      label: "ERP Development",
      description:
        "Custom ERP platforms that unify finance, inventory, and operations.",
      tagline:
        "Custom ERP development from a leading software development company to unify finance, inventory, and operations around how your business really works.",
      pageTitle: "ERP Development Company | Next Software Development Company",
      metaDescription:
        "ERP development company for custom finance, inventory, and operations platforms. Senior enterprise team. Get a free quote.",
      content: [
        "ERP development replaces fragmented spreadsheets and disconnected tools with one operational system. We design modules for the processes that differentiate you, with integrations for the rest.",
        "Rollouts are phased so teams adopt change without freezing the business, and training materials travel with the software.",
      ],
    }),
    sub({
      slug: "crm-development",
      label: "CRM Development",
      description:
        "Sales and customer platforms shaped around your pipeline and service model.",
      tagline:
        "CRM development shaped around your pipeline and service model by a top rated software development company, not a forced generic template.",
      pageTitle: "CRM Development Company | Next Software Development Company",
      metaDescription:
        "CRM development company for custom sales and customer platforms. Pipelines that match your process. Free consultation.",
      content: [
        "CRM development should mirror how you sell and support customers. We build pipelines, activities, and customer views that sales and success teams will actually keep updated.",
        "Integrations with email, marketing, and billing keep the CRM the system of record instead of a neglected database.",
      ],
    }),
    sub({
      slug: "hrm-software-development",
      label: "HRM Software Development",
      description:
        "HR systems for hiring, attendance, payroll workflows, and employee lifecycle.",
      tagline:
        "HRM software development for hiring, attendance, payroll workflows, and employee lifecycle from a software house that understands people operations.",
      pageTitle: "HRM Software Development Company | Next Software Development Company",
      metaDescription:
        "HRM software development for hiring, attendance, and employee lifecycle systems. Custom HR platforms. Get a quote.",
      content: [
        "HRM software development centralizes people processes that outgrow spreadsheets. We build modules for recruitment, attendance, leave, and employee records with role-based access.",
        "Workflows respect local policies and approval chains so HR and managers spend less time chasing paperwork.",
      ],
    }),
    sub({
      slug: "supply-chain-management",
      label: "Supply Chain Management (SCM)",
      description:
        "Procurement, inventory, and logistics systems that improve visibility and control.",
      tagline:
        "Supply chain management software for procurement, inventory, and logistics visibility from a best software development company enterprise practice.",
      pageTitle: "Supply Chain Management Software | Next Software Development Company",
      metaDescription:
        "Supply chain management software for procurement, inventory, and logistics control. Improve visibility. Free quote.",
      content: [
        "Supply chain management systems improve visibility from purchase to delivery. We build tools for inventory positions, vendor coordination, and exception handling.",
        "Data from warehouses, carriers, and sales channels comes together so planners act on one picture of reality.",
      ],
    }),
    sub({
      slug: "enterprise-integration",
      label: "Enterprise Integration",
      description:
        "Reliable integrations across ERP, CRM, and legacy systems of record.",
      tagline:
        "Enterprise integration across ERP, CRM, and legacy systems from a leading software development company that keeps data flowing reliably.",
      pageTitle: "Enterprise Integration Services | Next Software Development Company",
      metaDescription:
        "Enterprise integration services for ERP, CRM, and legacy systems. Reliable data sync. Expert software house.",
      content: [
        "Enterprise integration removes swivel-chair work between systems of record. We design APIs, middleware, and event flows with retries, mapping, and monitoring.",
        "Master data rules are clarified up front so integrations do not quietly create conflicting truths across departments.",
      ],
    }),
    sub({
      slug: "document-management-systems",
      label: "Document Management Systems",
      description:
        "Secure document storage, versioning, and workflow for enterprise teams.",
      tagline:
        "Document management systems with secure storage, versioning, and workflow from a software development company built for enterprise teams.",
      pageTitle: "Document Management System Development | Next Software Development Company",
      metaDescription:
        "Document management system development for secure storage, versioning, and approvals. Enterprise-ready. Get a quote.",
      content: [
        "Document management systems organize files with permissions, versions, and approval trails. We build repositories that search well and fit how departments collaborate.",
        "Retention and access policies are implemented in software so compliance is not a manual filing exercise.",
      ],
    }),
  ],
  "blockchain-development": [
    sub({
      slug: "smart-contract-development",
      label: "Smart Contract Development",
      description:
        "Auditable smart contracts for business workflows and on-chain logic.",
      tagline:
        "Smart contract development for auditable on-chain business logic from a leading software development company with security-minded delivery.",
      pageTitle: "Smart Contract Development Company | Next Software Development Company",
      metaDescription:
        "Smart contract development company for secure, auditable on-chain business logic. Security-first builds. Free consultation.",
      content: [
        "Smart contract development encodes rules that must execute without a middleman. We write and test contracts carefully, with clarity around upgrades, access control, and failure modes.",
        "Documentation and verification support help your stakeholders trust what goes on-chain.",
      ],
    }),
    sub({
      slug: "dapp-development",
      label: "dApp Development",
      description:
        "Decentralized apps with wallets, on-chain state, and usable product UX.",
      tagline:
        "dApp development with wallets, on-chain state, and usable product UX from a top rated software development company.",
      pageTitle: "dApp Development Company | Next Software Development Company",
      metaDescription:
        "dApp development company for wallet-connected decentralized apps with usable UX. Get a free quote.",
      content: [
        "dApp development has to feel usable to people who are not blockchain experts. We build interfaces, wallet flows, and on-chain interactions that communicate status clearly.",
        "Backend indexing and error handling round out the product so users are not left staring at cryptic transaction failures.",
      ],
    }),
    sub({
      slug: "web3-development",
      label: "Web3 Development",
      description:
        "Web3 product features and integrations for modern blockchain networks.",
      tagline:
        "Web3 development for modern blockchain networks from a software house that ships product features, not only proof-of-concept demos.",
      pageTitle: "Web3 Development Services | Next Software Development Company",
      metaDescription:
        "Web3 development services for blockchain product features and integrations. Practical software development company. Talk to us.",
      content: [
        "Web3 development adds blockchain capabilities into real products: identity, assets, settlements, or community features. We choose networks and patterns that match your threat model and user base.",
        "Delivery includes testing across wallets and networks so launches are not a surprise for support teams.",
      ],
    }),
    sub({
      slug: "defi-development",
      label: "DeFi Development",
      description:
        "Decentralized finance protocols and interfaces built for security and clarity.",
      tagline:
        "DeFi development for protocols and interfaces built for security and clarity by a best software development company blockchain practice.",
      pageTitle: "DeFi Development Company | Next Software Development Company",
      metaDescription:
        "DeFi development company for secure protocols and clear user interfaces. Security-minded software house. Free quote.",
      content: [
        "DeFi development demands rigorous security and transparent UX around risk. We build protocol logic and frontends that show users what they are signing and why.",
        "Auditing readiness, testing, and monitoring are planned into the roadmap, not treated as optional extras.",
      ],
    }),
    sub({
      slug: "cryptocurrency-wallet-development",
      label: "Cryptocurrency Wallet Development",
      description:
        "Secure wallet experiences for sending, receiving, and managing digital assets.",
      tagline:
        "Cryptocurrency wallet development focused on secure send, receive, and asset management from a leading software development company.",
      pageTitle: "Cryptocurrency Wallet Development | Next Software Development Company",
      metaDescription:
        "Cryptocurrency wallet development for secure send, receive, and asset management. Security-first builds. Get a quote.",
      content: [
        "Cryptocurrency wallet development puts key management and transaction clarity first. We design wallet experiences that protect users while remaining understandable.",
        "Multi-chain support, activity history, and recovery flows are engineered with security reviews in mind.",
      ],
    }),
    sub({
      slug: "nft-marketplace-development",
      label: "NFT Marketplace Development",
      description:
        "Marketplaces for minting, listing, and trading NFTs with reliable payments.",
      tagline:
        "NFT marketplace development for minting, listing, and trading with reliable payments from a software development company that cares about UX.",
      pageTitle: "NFT Marketplace Development Company | Next Software Development Company",
      metaDescription:
        "NFT marketplace development for minting, listing, and trading with reliable payments. End-to-end software house. Free quote.",
      content: [
        "NFT marketplace development covers creator tools, listings, bids, and settlement. We build marketplaces that handle media, metadata, and wallet interactions smoothly.",
        "Fees, royalties, and moderation hooks are designed early so the marketplace can operate as a real business.",
      ],
    }),
  ],
  "healthcare-software-development": [
    sub({
      slug: "electronic-health-records",
      label: "Electronic Health Records (EHR)",
      description:
        "EHR platforms that support clinical documentation and care coordination.",
      tagline:
        "Electronic health records (EHR) platforms for clinical documentation and care coordination from a leading software development company.",
      pageTitle: "EHR Software Development Company | Next Software Development Company",
      metaDescription:
        "EHR software development for clinical documentation and care coordination. Healthcare-focused software house. Get a quote.",
      content: [
        "EHR software must fit clinical reality: documentation speed, role permissions, and care coordination across teams. We build EHR platforms with workflows clinicians can complete under time pressure.",
        "Security, auditability, and integration with labs or billing systems are treated as core requirements from day one.",
      ],
    }),
    sub({
      slug: "electronic-medical-records",
      label: "Electronic Medical Records (EMR)",
      description:
        "EMR systems tailored to clinic workflows, charting, and medical history.",
      tagline:
        "Electronic medical records (EMR) tailored to clinic workflows, charting, and history from a top rated healthcare software development company.",
      pageTitle: "EMR Software Development Services | Next Software Development Company",
      metaDescription:
        "EMR software development for clinic workflows, charting, and medical history. Practical healthcare systems. Free consultation.",
      content: [
        "EMR systems succeed when charting matches how a clinic actually runs. We customize templates, scheduling links, and history views for outpatient and specialty settings.",
        "Training and phased rollout keep adoption high while protecting continuity of care.",
      ],
    }),
    sub({
      slug: "telemedicine-development",
      label: "Telemedicine Development",
      description:
        "Secure video, messaging, and remote care platforms for patients and clinicians.",
      tagline:
        "Telemedicine development for secure video, messaging, and remote care from a software house experienced with patient and clinician needs.",
      pageTitle: "Telemedicine App Development Company | Next Software Development Company",
      metaDescription:
        "Telemedicine development for secure video and remote care platforms. Patient-ready healthcare software. Get a free quote.",
      content: [
        "Telemedicine development connects patients and clinicians with reliable video, messaging, and scheduling. We build platforms that handle consent, identity, and session quality carefully.",
        "Integrations with records and prescriptions keep remote visits part of the care continuum, not an isolated chat app.",
      ],
    }),
    sub({
      slug: "hospital-management-systems",
      label: "Hospital Management Systems",
      description:
        "Hospital ops platforms for appointments, billing, wards, and administration.",
      tagline:
        "Hospital management systems for appointments, billing, wards, and administration from a best software development company healthcare practice.",
      pageTitle: "Hospital Management System Development | Next Software Development Company",
      metaDescription:
        "Hospital management system development for appointments, billing, and ward operations. Enterprise healthcare software house.",
      content: [
        "Hospital management systems coordinate appointments, admissions, billing, and ward operations. We implement modules that reduce administrative load while keeping clinical priorities visible.",
        "Role-based access and reporting help leadership see utilization and bottlenecks without manual spreadsheets.",
      ],
    }),
    sub({
      slug: "patient-portal-development",
      label: "Patient Portal Development",
      description:
        "Patient portals for records access, scheduling, and care communication.",
      tagline:
        "Patient portal development for records access, scheduling, and care communication from a leading software development company.",
      pageTitle: "Patient Portal Development Services | Next Software Development Company",
      metaDescription:
        "Patient portal development for records, scheduling, and care communication. Secure patient experience. Free quote.",
      content: [
        "Patient portals give people self-service access to appointments, results, and messages. We design portals that are simple for patients and integrable for clinic IT.",
        "Accessibility and privacy controls are central so portals improve engagement without creating support or compliance risk.",
      ],
    }),
    sub({
      slug: "healthcare-mobile-app-development",
      label: "Healthcare Mobile App Development",
      description:
        "Mobile health apps for patients, providers, and care teams.",
      tagline:
        "Healthcare mobile app development for patients, providers, and care teams from a software development company that takes clinical workflows seriously.",
      pageTitle: "Healthcare Mobile App Development | Next Software Development Company",
      metaDescription:
        "Healthcare mobile app development for patients and care teams. Secure, workflow-aware builds. Get a free quote.",
      content: [
        "Healthcare mobile apps extend care beyond the clinic: reminders, remote monitoring, provider tools, and education. We build apps with clear consent, secure data handling, and usable clinical or patient flows.",
        "Store compliance, device coverage, and backend integration are planned so the app remains maintainable after launch.",
      ],
    }),
  ],
  "ar-vr-development": [
    sub({
      slug: "augmented-reality-apps",
      label: "Augmented Reality (AR) Apps",
      description:
        "AR experiences for product visualization, retail, and on-site guidance.",
      tagline:
        "Augmented reality (AR) apps for product visualization, retail, and on-site guidance from a leading software development company.",
      pageTitle: "Augmented Reality App Development | Next Software Development Company",
      metaDescription:
        "AR app development for product visualization, retail, and on-site guidance. Immersive software house. Free quote.",
      content: [
        "AR apps overlay digital guidance and product visuals onto the real world. We build experiences that are stable on target devices and useful for sales, training, or field work.",
        "Performance and UX get equal attention so AR feels like a tool, not a gimmick.",
      ],
    }),
    sub({
      slug: "virtual-reality-apps",
      label: "Virtual Reality (VR) Apps",
      description:
        "Immersive VR applications for simulation, education, and entertainment.",
      tagline:
        "Virtual reality (VR) apps for simulation, education, and entertainment from a top rated software development company.",
      pageTitle: "Virtual Reality App Development Company | Next Software Development Company",
      metaDescription:
        "VR app development for simulation, education, and entertainment. Immersive experiences that perform. Get a quote.",
      content: [
        "VR apps create immersive spaces for learning, simulation, and entertainment. We design interaction, comfort, and performance for the headsets your audience uses.",
        "Content pipelines and update processes are set up so experiences can evolve after the first release.",
      ],
    }),
    sub({
      slug: "mixed-reality-solutions",
      label: "Mixed Reality (MR) Solutions",
      description:
        "Mixed reality products that blend digital overlays with physical environments.",
      tagline:
        "Mixed reality (MR) solutions that blend digital overlays with physical environments, built by a software house with spatial computing experience.",
      pageTitle: "Mixed Reality Development Services | Next Software Development Company",
      metaDescription:
        "Mixed reality development for digital overlays in physical environments. Spatial computing software company. Free consultation.",
      content: [
        "Mixed reality solutions support work where people still need their hands and surroundings. We prototype and ship MR experiences with spatial anchors, UI that stays readable, and device constraints in mind.",
        "Use cases range from guided assembly to collaborative design reviews with remote experts.",
      ],
    }),
    sub({
      slug: "metaverse-development",
      label: "Metaverse Development",
      description:
        "Shared virtual spaces and experiences for brand, training, and community use.",
      tagline:
        "Metaverse development for shared virtual spaces used in brand, training, and community experiences from a best software development company approach.",
      pageTitle: "Metaverse Development Company | Next Software Development Company",
      metaDescription:
        "Metaverse development for shared virtual spaces, brand experiences, and training. Practical immersive software house.",
      content: [
        "Metaverse development is about shared presence and purpose, not hype. We build virtual spaces with identity, interaction, and content workflows that match your brand or training goals.",
        "Platform choices are made for reach and maintainability so the experience can be operated after launch.",
      ],
    }),
    sub({
      slug: "3d-visualization",
      label: "3D Visualization",
      description:
        "Interactive 3D visuals for products, spaces, and technical demonstrations.",
      tagline:
        "3D visualization for products, spaces, and technical demos from a leading software development company that pairs visuals with real web or app delivery.",
      pageTitle: "3D Visualization Services | Next Software Development Company",
      metaDescription:
        "3D visualization services for interactive product and space demos on web and apps. Get a free quote.",
      content: [
        "3D visualization helps buyers and stakeholders understand products and spaces before they exist in the physical world. We create interactive scenes optimized for web and device performance.",
        "Assets and viewers are engineered for reuse across marketing, sales, and training channels.",
      ],
    }),
    sub({
      slug: "vr-training-simulations",
      label: "VR Training Simulations",
      description:
        "VR training environments that teach skills safely before real-world practice.",
      tagline:
        "VR training simulations that teach skills safely before real-world practice, delivered by a software development company focused on measurable learning outcomes.",
      pageTitle: "VR Training Simulation Development | Next Software Development Company",
      metaDescription:
        "VR training simulation development for safe skill practice before real-world work. Training-focused software house.",
      content: [
        "VR training simulations let people practice hazardous or rare scenarios without real-world risk. We design scenarios, scoring, and feedback loops that reinforce correct procedure.",
        "Deployment and headset logistics are planned with your L&D stakeholders so programs scale beyond a pilot room.",
      ],
    }),
  ],
  "testing-and-qa": [
    sub({
      slug: "manual-testing",
      label: "Manual Testing",
      description:
        "Structured and exploratory testing that catches edge cases automation misses.",
      tagline:
        "Manual testing from a leading software development company: structured and exploratory QA that catches edge cases automation still misses.",
      pageTitle: "Manual Testing Services | Next Software Development Company",
      metaDescription:
        "Manual testing services with structured and exploratory QA. Catch edge cases before release. Expert software house. Free quote.",
      content: [
        "Manual testing remains essential for usability, visual polish, and odd edge cases. We design test charters and cases that cover critical journeys across browsers and devices.",
        "Findings are reported with reproduction steps and severity so developers can fix quickly before release.",
      ],
      image: {
        src: "/services/Testing-and-QA.webp",
        alt: "Manual testing services",
        width: 800,
        height: 500,
      },
    }),
    sub({
      slug: "automation-testing",
      label: "Automation Testing",
      description:
        "Automated UI and regression suites integrated into your CI/CD pipeline.",
      tagline:
        "Automation testing with UI and regression suites integrated into CI/CD from a top rated software development company QA practice.",
      pageTitle: "Test Automation Services | Next Software Development Company",
      metaDescription:
        "Test automation services for UI and regression suites in CI/CD. Faster, safer releases. Get a free quote.",
      content: [
        "Automation testing protects regressions as you ship more often. We build maintainable UI and API suites with clear ownership and stable selectors or contracts.",
        "Pipelines fail fast on real issues, with reports that tell you what broke and where, not a wall of flaky noise.",
      ],
    }),
    sub({
      slug: "performance-testing",
      label: "Performance Testing",
      description:
        "Load and stress tests that surface bottlenecks before high-traffic events.",
      tagline:
        "Performance testing with load and stress scenarios that surface bottlenecks before high-traffic events, from a software house that builds scalable systems.",
      pageTitle: "Performance Testing Services | Next Software Development Company",
      metaDescription:
        "Performance testing services for load and stress before peak traffic. Find bottlenecks early. Expert QA software company.",
      content: [
        "Performance testing answers whether your system holds under real concurrency. We design load profiles, measure latency and error rates, and pinpoint bottlenecks in app or infrastructure layers.",
        "Recommendations are practical: caching, query fixes, scaling rules, or code paths that need attention before a campaign or launch.",
      ],
    }),
    sub({
      slug: "security-testing",
      label: "Security Testing",
      description:
        "Security-focused QA that validates auth, input handling, and common exploit paths.",
      tagline:
        "Security testing that validates auth, input handling, and common exploit paths from a best software development company security-aware QA team.",
      pageTitle: "Security Testing Services | Next Software Development Company",
      metaDescription:
        "Security testing services for auth, input handling, and common exploit paths. Release with more confidence. Free quote.",
      content: [
        "Security testing in QA catches issues before attackers do. We validate authentication, authorization, injection risks, and sensitive data exposure in your application flows.",
        "Results prioritize fixes that matter for your threat model and release timeline.",
      ],
    }),
    sub({
      slug: "api-testing",
      label: "API Testing",
      description:
        "Contract, functional, and negative tests that keep APIs reliable across releases.",
      tagline:
        "API testing with contract, functional, and negative cases from a leading software development company so integrations stay reliable across releases.",
      pageTitle: "API Testing Services | Next Software Development Company",
      metaDescription:
        "API testing services for contract, functional, and negative tests. Keep integrations reliable. Software house QA experts.",
      content: [
        "API testing keeps services trustworthy for mobile, web, and partners. We cover happy paths, auth failures, validation errors, and contract drift between versions.",
        "Suites plug into CI so breaking API changes are caught before they reach consumers.",
      ],
    }),
    sub({
      slug: "mobile-app-testing",
      label: "Mobile App Testing",
      description:
        "Device and OS coverage for iOS and Android apps before store or production release.",
      tagline:
        "Mobile app testing across devices and OS versions for iOS and Android from a software development company that ships store-ready apps.",
      pageTitle: "Mobile App Testing Services | Next Software Development Company",
      metaDescription:
        "Mobile app testing for iOS and Android across devices and OS versions. Store-ready QA. Get a free quote.",
      content: [
        "Mobile app testing covers real devices, OS versions, and network conditions users face. We test installs, permissions, offline behavior, and store compliance checklists.",
        "You get release confidence for both platforms, with clear bugs and regression coverage for the next build.",
      ],
    }),
  ],
};

export const subServicesByCategory: SubServicesMap = withInternalLinks(subServicesByCategoryRaw);
