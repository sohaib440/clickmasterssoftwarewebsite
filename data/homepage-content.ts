/**
 * Complete homepage content — single source of truth for the home page.
 * Edit copy here; landing modules re-export from this file.
 */

import type { LucideIcon } from "lucide-react";
import { BarChart3, Globe, Rocket, Shield } from "lucide-react";
import { projectPath } from "@/lib/landing/constants";
import { siteBrand } from "@/lib/landing/brand";
import { teamPath } from "@/lib/landing/constants";


// ===== data/landing/types.ts =====
// Shared landing page content types


export type NavChild = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type RatingBadge = {
  slug: string;
  name: string;
  /** @deprecated Prefer ReviewPlatform href + rating; kept for older imports */
  logo?: string;
};

export type ContactSelectOption = {
  value: string;
  label: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  contact: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ServiceSubItem = { label: string; slug: string; href: string };

export type ServiceCategory = {
  label: string;
  slug: string;
  href: string;
  description?: string;
  items: ServiceSubItem[];
};

export type Technology = {
  name: string;
  color: string;
};

export type TechStackTab = {
  id: string;
  label: string;
  items: string[];
};

export type TechStackLogoGroup = {
  id: string;
  label: string;
  description: string;
  logoIds: string[];
};

/** @deprecated Used only if legacy stack UI is restored */
export type TechStackCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "sky" | "peach" | "navy" | "cream";
  technologies: Technology[];
};

export type Client = {
  slug: string;
  name: string;
  logo: string;
};

export type BlogBodyBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string };

export type BlogAuthor = {
  name: string;
  role: string;
  bio: string;
  image: ImageAsset;
};

export type BlogReviewer = {
  name: string;
  role: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: BlogAuthor;
  reviewedBy: BlogReviewer;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  category: string;
  image: ImageAsset;
  body: BlogBodyBlock[];
  faqs: FaqItem[];
};

export type FaqItem = {
  question: string;
  answer: string;
  tag: string;
  column: "left" | "right";
};


// ===== data/landing/hero.ts =====
export const homeHero = {
  eyebrow: "Next Software Development",
  headlineEmphasis: "Software Development Company",
  headlineMiddle: "Turning Ambitious Ideas Into",
  headlineAfter: "Scalable Software",
  description: [
    "Next Software Development is a full-service software development company helping startups, small and medium-sized businesses, and enterprises design, build, and scale secure, high-performance software. We combine senior engineering expertise with real business insight to create technology that solves complex problems, improves operations, and supports measurable business growth.",
    "From your first conversation through launch and beyond, our dedicated software consultants and development team work closely with you to turn ambitious ideas into reliable, scalable software built around your goals.",
    "Your idea deserves more than code. It deserves a technology partner who builds it right.",
  ],
  primaryCta: "Get a Free Quote",
  secondaryCta: "View Our Work",
  secondaryHref: projectPath,
} as const;

export const heroFeatures = [
  { icon: Rocket, label: "Scalable Solutions" },
  { icon: Shield, label: "Secure & Reliable" },
  { icon: BarChart3, label: "Business Growth" },
  { icon: Globe, label: "Global Delivery" },
] as const;

export const heroBackgroundVideo = "/herosection/software-development-company.mp4";

export const heroCtaForm = {
  title: "Get a free quote",
  subtitle: "Share your details and we'll respond within one business day.",
  submitLabel: "Send message",
} as const;


// ===== data/landing/about.ts =====
/** Shared About section used on /about, services, etc. — keep distinct from homepage. */
export const aboutSection = {
  teamLink: teamPath,
  teamCta: "Meet our engineering team",
  paragraphs: [
    "Next Software Development is a trusted software partner to founders and operators across the United States, United Kingdom, United Arab Emirates, Canada, and Australia. We were founded in 2019 with one belief: that great software should be accessible to every business, not just the Fortune 500.",
    "Since 2019 we have built 7+ years of experience supporting 500+ happy clients across 6 countries with a team of 20+ software engineers, designers, QA specialists, and project managers. We turn complex business challenges into clean, efficient, and scalable digital products, whether you need a mobile app for your startup, an ERP for manufacturing, or a SaaS platform for recurring revenue.",
    "Clients choose us for senior delivery quality and practical pricing. You get English-speaking, timezone-flexible teams with strong technical craft, clear communication, and ownership that continues after launch.",
  ],
  values: [
    {
      title: "Proven delivery record",
      description:
        "Founded in 2019, with 7+ years of experience, 500+ happy clients, and delivery across 6 countries.",
    },
    {
      title: "20+ software engineers",
      description:
        "A focused team of 20+ software engineers and specialists on client delivery.",
    },
    {
      title: "Timezone overlap",
      description:
        "Timezone-flexible delivery we overlap with United States, United Kingdom, and United Arab Emirates business hours.",
    },
    {
      title: "Transparent pricing",
      description:
        "Transparent, fixed-price contracts with zero hidden costs.",
    },
    {
      title: "Post-launch support",
      description:
        "Post-launch support included in every engagement we do not disappear after go-live.",
    },
    {
      title: "ISO-aligned processes",
      description:
        "Development processes and data security practices aligned with industry standards.",
    },
  ],
  image: {
    src: "/about-us/software-development-company.webp",
    alt: "Next Software Development Company team collaborating on product delivery",
    width: 1000,
    height: 700,
  },
};

/** Homepage-only Who we are copy — not reused on location, service, or about pages. */
export const homepageAbout = {
  overlineText: "About us",
  title: "Who we are?",
  teamLink: teamPath,
  teamCta: "Meet our engineering team",
  paragraphs: [
    "Founded in 2019, Next Software Development is a software development company built on a simple principle: technology should solve real business problems, not simply satisfy technical requirements. We bring together experienced software engineers, user interface and user experience designers, quality assurance specialists, business analysts, and software consultants to deliver complete, end-to-end solutions for startups, small and medium-sized businesses, and enterprises.",
    "Our team has hands on experience building custom web applications, mobile applications, cloud platforms, software as a service products, enterprise software, artificial intelligence solutions, customer relationship management systems, enterprise resource planning software, and business automation platforms. We take the time to understand each client's industry, users, operational challenges, and growth objectives, allowing us to build secure, scalable, and high performance software that improves operations, increases efficiency, and creates measurable business value.",
    "What sets Next Software Development apart is our commitment to technical excellence, transparent communication, and long term partnerships. We do more than write code. We architect scalable solutions, document critical decisions, maintain rigorous engineering standards, and continue supporting our clients after launch. Since 2019, we have focused on turning complex ideas into reliable digital products that help businesses operate better, adapt faster, and grow with confidence.",
  ],
  values: aboutSection.values,
  image: aboutSection.image,
};

/** Homepage-only Why choose us — not reused on location or other pages. */
export const homepageWhyChoose = {
  overlineText: "Why choose us",
  title: "Why businesses choose us",
  description:
    "What you can expect when you partner with Next Software Development for discovery, delivery, and long-term support.",
  values: [
    {
      title: "Experienced Senior Engineering Team",
      description:
        "Work with experienced software engineers and specialists who take ownership of your project from planning through delivery.",
    },
    {
      title: "Transparent Pricing and Communication",
      description:
        "Receive clear pricing, regular progress updates, and straightforward communication throughout the engagement with no unexpected costs.",
    },
    {
      title: "Agile Development and Regular Demos",
      description:
        "Your project is developed in structured sprints with regular demonstrations, giving you continuous visibility into progress and allowing feedback to shape the product.",
    },
    {
      title: "Dedicated Software Consultant",
      description:
        "Every project has a dedicated software consultant who understands your business, coordinates the development team, and remains your primary point of contact.",
    },
    {
      title: "Complete End to End Development",
      description:
        "From business analysis and user experience design to architecture, development, quality assurance, deployment, and support, we manage the complete software development lifecycle.",
    },
    {
      title: "Security Focused Development",
      description:
        "Security is considered throughout planning, development, testing, deployment, and maintenance to help protect your software, systems, and business data.",
    },
    {
      title: "Scalable Software Architecture",
      description:
        "We design software with long term growth in mind, creating architectures that can support increasing users, data, integrations, and business requirements.",
    },
    {
      title: "Quality Assurance at Every Stage",
      description:
        "Our quality assurance process combines functional testing, performance testing, security testing, and cross device testing to help ensure reliable production software.",
    },
    {
      title: "Ongoing Support and Maintenance",
      description:
        "Our relationship does not end at launch. We provide ongoing maintenance, technical support, optimization, and improvements as your software and business evolve.",
    },
    {
      title: "Business Focused Engineering",
      description:
        "We look beyond technical requirements to understand your goals, users, workflows, and challenges so the software delivers meaningful business value.",
    },
    {
      title: "Flexible Global Delivery",
      description:
        "Our team works with businesses across different regions and time zones, providing flexible communication and collaboration for international projects.",
    },
    {
      title: "Proven Development Process",
      description:
        "Our structured development process has been refined since 2019, covering discovery, planning, design, development, testing, deployment, and ongoing support.",
    },
  ],
};


// ===== data/landing/trust.ts =====
export const trustedPartnersSection: { label: string; fallbackText: string } = {
  label: "",
  fallbackText: "",
};

export const ratingBadges: RatingBadge[] = [
  { slug: "facebook", name: "Facebook" },
  { slug: "clutch", name: "Clutch" },
  { slug: "trustpilot", name: "Trustpilot" },
  { slug: "google", name: "Google" },
];

/**
 * Single source of truth for company numbers sitewide (homepage, locations, about).
 * Keep these identical everywhere — do not invent alternate project/engineer counts.
 */
export const companyStats = [
  {
    value: "500+",
    label: "Happy Clients",
    detail:
      "Founders and operators who hired us for custom software, HMS, ERP, and digital products across Pakistan and internationally.",
    icon: "users" as const,
  },
  {
    value: "7+",
    label: "Years of Experience",
    detail:
      "Seven-plus years building production software with senior engineers, designers, and QA since our founding in 2019.",
    icon: "briefcase" as const,
  },
  {
    value: "20+",
    label: "Software Engineers",
    detail:
      "A delivery team of 20+ software engineers, designers, and specialists shipping client products.",
    icon: "code" as const,
  },
  {
    value: "6+",
    label: "Countries Served",
    detail:
      "Delivery for clients in Pakistan, the United States, the United Kingdom, the United Arab Emirates, Canada, and Australia.",
    icon: "globe" as const,
  },
] as const;

/** Homepage / about badge strip — same numbers as companyStats */
export const stats = companyStats.map(({ value, label, icon }) => ({
  value,
  label,
  icon,
}));

export const clients: Client[] = [
  { slug: "google", name: "Google", logo: "/technologies/google.svg" },
  { slug: "microsoft", name: "Microsoft", logo: "/technologies/microsoft.svg" },
  { slug: "amazon", name: "Amazon", logo: "/technologies/amazon.svg" },
  { slug: "apple", name: "Apple", logo: "/technologies/apple.svg" },
  { slug: "meta", name: "Meta", logo: "/technologies/meta.svg" },
  { slug: "netflix", name: "Netflix", logo: "/technologies/netflix.svg" },
  { slug: "adobe", name: "Adobe", logo: "/technologies/adobe.svg" },
  { slug: "salesforce", name: "Salesforce", logo: "/technologies/salesforce.svg" },
  { slug: "ibm", name: "IBM", logo: "/technologies/ibm.svg" },
  { slug: "intel", name: "Intel", logo: "/technologies/intel.svg" },
  { slug: "nvidia", name: "Nvidia", logo: "/technologies/nvidia.svg" },
  { slug: "tesla", name: "Tesla", logo: "/technologies/tesla.svg" },
  { slug: "shopify", name: "Shopify", logo: "/technologies/shopify.svg" },
  { slug: "slack", name: "Slack", logo: "/technologies/slack.svg" },
  { slug: "oracle", name: "Oracle", logo: "/technologies/oracle.svg" },
  { slug: "cisco", name: "Cisco", logo: "/technologies/cisco.svg" },
];


// ===== data/landing/process.ts =====
export const processSteps = [
  {
    step: "01",
    shortLabel: "Discover",
    title: "Discover & Business Analysis",
    description:
      "We start by deeply understanding your business, your users, and your goals. We document functional requirements, define success metrics, and align on scope before any design or code begins.",
  },
  {
    step: "02",
    shortLabel: "Architecture",
    title: "Architecture & Technical Planning",
    description:
      "Our senior engineers define the system architecture, select the optimal technology stack, and create a detailed technical specification. You receive a full project plan with milestones, deliverables, timeline, and cost breakdown all agreed upfront.",
  },
  {
    step: "03",
    shortLabel: "Design",
    title: "UI/UX Design & Prototyping",
    description:
      "Our designers create wireframes and clickable prototypes that bring your product to life before development begins. You review and approve the design at every stage your feedback drives every design decision we make.",
  },
  {
    step: "04",
    shortLabel: "Development",
    title: "Agile Development in Sprints",
    description:
      "We develop your software in 2-week agile sprints, with a working demo shared at the end of each sprint. You see real progress continuously not just at the finish line.",
  },
  {
    step: "05",
    shortLabel: "QA & Security",
    title: "Quality Assurance & Security Testing",
    description:
      "Every feature is tested across functional, performance, security, and cross-device dimensions before release. We use both manual QA and automated testing frameworks to ensure your software is production-ready and resilient.",
  },
  {
    step: "06",
    shortLabel: "Launch",
    title: "Launch, Handover & Ongoing Support",
    description:
      "We manage your go-live smoothly and provide full handover documentation, code access, and team training. After launch, we offer flexible maintenance and support plans so your software evolves as your business grows.",
  },
];


// ===== data/landing/tech-stack.ts =====
export const techStackIntro =
  "We engineer across the full delivery spectrum from polished interfaces and resilient APIs to data platforms, cloud infrastructure, and production AI. Every technology below reflects real project experience, selected for performance, security, team velocity, and long-term maintainability.";


export const techStackLogoGroupMeta: TechStackLogoGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    description:
      "Component-driven UIs, design systems, and modern build pipelines from semantic HTML/CSS and TypeScript through React, Next.js, Vue, Svelte, state management, testing, and accessibility-ready production apps.",
    logoIds: [
      "html5",
      "css3",
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "vuejs",
      "nuxtjs",
      "angular",
      "svelte",
      "redux",
      "zustand",
      "tailwindcss",
      "bootstrap",
      "sass",
      "postcss",
      "vite",
      "webpack",
      "graphql",
      "jest",
      "cypress",
      "storybook",
      "figma",
      "materialui",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description:
      "Secure APIs, microservices, and enterprise backends REST, GraphQL, and event-driven architectures built with Node.js, Python, Java, .NET, Go, PHP, Ruby, Rust, and battle-tested frameworks like Express, NestJS, Django, Laravel, and Spring.",
    logoIds: [
      "nodejs",
      "express",
      "nestjs",
      "python",
      "django",
      "flask",
      "dotnet",
      "csharp",
      "java",
      "spring",
      "kotlin",
      "go",
      "rust",
      "php",
      "laravel",
      "ruby",
      "scala",
      "graphql",
      "apachekafka",
      "nginx",
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    description:
      "Native and cross-platform mobile products React Native and Flutter for shared codebases, plus Swift and Kotlin for platform-native performance, offline support, push notifications, and App Store / Play Store delivery.",
    logoIds: ["reactnative", "flutter", "swift", "kotlin", "android", "dart", "ionic"],
  },
  {
    id: "databases",
    label: "Databases",
    description:
      "Relational, document, cache, and search data layers PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, and Firebase for transactional integrity, real-time sync, analytics, and high-throughput read/write workloads.",
    logoIds: [
      "postgresql",
      "mysql",
      "mariadb",
      "mongodb",
      "redis",
      "sqlite",
      "firebase",
      "elasticsearch",
      "cassandra",
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    description:
      "CI/CD, containers, orchestration, and cloud-native ops Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, GitLab CI, plus AWS, Google Cloud, Azure, Vercel, Netlify, and DigitalOcean for reliable deployments.",
    logoIds: [
      "docker",
      "kubernetes",
      "terraform",
      "jenkins",
      "github",
      "gitlab",
      "linux",
      "nginx",
      "ansible",
      "prometheus",
      "grafana",
      "aws",
      "gcp",
      "azure",
      "vercel",
      "netlify",
      "digitalocean",
      "heroku",
    ],
  },
  {
    id: "ai",
    label: "Models / AI",
    description:
      "Machine learning and intelligent automation TensorFlow, PyTorch, Keras, OpenAI, and the Python data stack (Pandas, Jupyter, SciPy) for predictive models, NLP, computer vision, and production AI integrations.",
    logoIds: [
      "openai",
      "tensorflow",
      "pytorch",
      "keras",
      "opencv",
      "pandas",
      "jupyter",
      "scipy",
      "r",
    ],
  },
];


export const techStackTabs: TechStackTab[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "Next.js",
      "React",
      "Vue.js",
      "Nuxt",
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Vite",
      "Webpack",
      "Jest",
      "Cypress",
      "Storybook",
      "GraphQL",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "Django",
      "Flask",
      "Java",
      "Spring",
      ".NET",
      "C#",
      "Go",
      "Rust",
      "PHP",
      "Laravel",
      "Ruby",
      "Kafka",
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["React Native", "Flutter", "Swift", "Kotlin", "Android", "Dart", "Ionic"],
  },
  {
    id: "database",
    label: "Database",
    items: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Redis",
      "SQLite",
      "Elasticsearch",
      "Cassandra",
      "Firebase",
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    items: [
      "AWS",
      "Google Cloud",
      "Azure",
      "DigitalOcean",
      "Vercel",
      "Netlify",
      "Heroku",
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI",
      "Linux",
      "Nginx",
      "Ansible",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    id: "ai",
    label: "AI & ML",
    items: [
      "OpenAI",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "OpenCV",
      "Pandas",
      "Jupyter",
      "SciPy",
      "R",
    ],
  },
];


const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const techStackLogos = [
  // Backend languages & runtimes
  { id: "dotnet", name: ".NET", icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
  { id: "csharp", name: "C#", icon: `${DEVICON}/csharp/csharp-original.svg` },
  { id: "java", name: "Java", icon: `${DEVICON}/java/java-original.svg` },
  { id: "kotlin", name: "Kotlin", icon: `${DEVICON}/kotlin/kotlin-original.svg` },
  { id: "scala", name: "Scala", icon: `${DEVICON}/scala/scala-original.svg` },
  { id: "python", name: "Python", icon: `${DEVICON}/python/python-original.svg` },
  { id: "nodejs", name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
  { id: "express", name: "Express", icon: `${DEVICON}/express/express-original.svg` },
  { id: "nestjs", name: "NestJS", icon: `${DEVICON}/nestjs/nestjs-plain.svg` },
  { id: "django", name: "Django", icon: `${DEVICON}/django/django-plain.svg` },
  { id: "flask", name: "Flask", icon: `${DEVICON}/flask/flask-original.svg` },
  { id: "spring", name: "Spring", icon: `${DEVICON}/spring/spring-original.svg` },
  { id: "php", name: "PHP", icon: `${DEVICON}/php/php-original.svg` },
  { id: "laravel", name: "Laravel", icon: `${DEVICON}/laravel/laravel-original.svg` },
  { id: "go", name: "Go", icon: `${DEVICON}/go/go-original-wordmark.svg` },
  { id: "ruby", name: "Ruby", icon: `${DEVICON}/ruby/ruby-original.svg` },
  { id: "rust", name: "Rust", icon: `${DEVICON}/rust/rust-original.svg` },
  { id: "r", name: "R", icon: `${DEVICON}/r/r-original.svg` },
  { id: "dart", name: "Dart", icon: `${DEVICON}/dart/dart-original.svg` },
  { id: "apachekafka", name: "Kafka", icon: `${DEVICON}/apachekafka/apachekafka-original.svg` },

  // Frontend core
  { id: "html5", name: "HTML5", icon: `${DEVICON}/html5/html5-original.svg` },
  { id: "css3", name: "CSS3", icon: `${DEVICON}/css3/css3-original.svg` },
  { id: "javascript", name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
  { id: "typescript", name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
  { id: "react", name: "React", icon: `${DEVICON}/react/react-original.svg` },
  { id: "redux", name: "Redux", icon: `${DEVICON}/redux/redux-original.svg` },
  { id: "zustand", name: "Zustand", icon: "https://zustand-demo.pmnd.rs/favicon.ico" },
  { id: "nextjs", name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
  { id: "vuejs", name: "Vue.js", icon: `${DEVICON}/vuejs/vuejs-original.svg` },
  { id: "nuxtjs", name: "Nuxt", icon: `${DEVICON}/nuxtjs/nuxtjs-original.svg` },
  { id: "angular", name: "Angular", icon: `${DEVICON}/angularjs/angularjs-original.svg` },
  { id: "svelte", name: "Svelte", icon: `${DEVICON}/svelte/svelte-original.svg` },
  { id: "tailwindcss", name: "Tailwind CSS", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  { id: "bootstrap", name: "Bootstrap", icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
  { id: "sass", name: "Sass", icon: `${DEVICON}/sass/sass-original.svg` },
  { id: "postcss", name: "PostCSS", icon: `${DEVICON}/postcss/postcss-original.svg` },
  { id: "vite", name: "Vite", icon: `${DEVICON}/vitejs/vitejs-original.svg` },
  { id: "webpack", name: "Webpack", icon: `${DEVICON}/webpack/webpack-original.svg` },
  { id: "graphql", name: "GraphQL", icon: `${DEVICON}/graphql/graphql-plain.svg` },
  { id: "jest", name: "Jest", icon: `${DEVICON}/jest/jest-plain.svg` },
  { id: "cypress", name: "Cypress", icon: `${DEVICON}/cypressio/cypressio-plain.svg` },
  { id: "storybook", name: "Storybook", icon: `${DEVICON}/storybook/storybook-original.svg` },
  { id: "figma", name: "Figma", icon: `${DEVICON}/figma/figma-original.svg` },
  { id: "materialui", name: "Material UI", icon: `${DEVICON}/materialui/materialui-original.svg` },

  // Mobile
  { id: "reactnative", name: "React Native", icon: `${DEVICON}/reactnative/reactnative-original.svg` },
  { id: "flutter", name: "Flutter", icon: `${DEVICON}/flutter/flutter-original.svg` },
  { id: "swift", name: "Swift", icon: `${DEVICON}/swift/swift-original.svg` },
  { id: "android", name: "Android", icon: `${DEVICON}/android/android-plain.svg` },
  { id: "ionic", name: "Ionic", icon: `${DEVICON}/ionic/ionic-original.svg` },

  // Databases
  { id: "postgresql", name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
  { id: "mysql", name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
  { id: "mariadb", name: "MariaDB", icon: `${DEVICON}/mariadb/mariadb-original.svg` },
  { id: "mongodb", name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
  { id: "redis", name: "Redis", icon: `${DEVICON}/redis/redis-original.svg` },
  { id: "sqlite", name: "SQLite", icon: `${DEVICON}/sqlite/sqlite-original.svg` },
  { id: "firebase", name: "Firebase", icon: `${DEVICON}/firebase/firebase-plain.svg` },
  { id: "elasticsearch", name: "Elasticsearch", icon: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
  { id: "cassandra", name: "Cassandra", icon: `${DEVICON}/cassandra/cassandra-original.svg` },

  // DevOps & cloud
  { id: "docker", name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
  { id: "kubernetes", name: "Kubernetes", icon: `${DEVICON}/kubernetes/kubernetes-plain.svg` },
  { id: "jenkins", name: "Jenkins", icon: `${DEVICON}/jenkins/jenkins-original.svg` },
  { id: "gitlab", name: "GitLab CI", icon: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png" },
  { id: "github", name: "GitHub Actions", icon: `${DEVICON}/github/github-original.svg` },
  { id: "terraform", name: "Terraform", icon: `${DEVICON}/terraform/terraform-original.svg` },
  { id: "linux", name: "Linux", icon: `${DEVICON}/linux/linux-original.svg` },
  { id: "nginx", name: "Nginx", icon: `${DEVICON}/nginx/nginx-original.svg` },
  { id: "ansible", name: "Ansible", icon: `${DEVICON}/ansible/ansible-original.svg` },
  { id: "prometheus", name: "Prometheus", icon: `${DEVICON}/prometheus/prometheus-original.svg` },
  { id: "grafana", name: "Grafana", icon: `${DEVICON}/grafana/grafana-original.svg` },
  { id: "azure", name: "Azure", icon: `${DEVICON}/azure/azure-original.svg` },
  { id: "aws", name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
  { id: "gcp", name: "Google Cloud", icon: `${DEVICON}/googlecloud/googlecloud-original.svg` },
  { id: "vercel", name: "Vercel", icon: "https://vercel.com/favicon.ico" },
  { id: "netlify", name: "Netlify", icon: `${DEVICON}/netlify/netlify-original.svg` },
  { id: "digitalocean", name: "DigitalOcean", icon: `${DEVICON}/digitalocean/digitalocean-original.svg` },
  { id: "heroku", name: "Heroku", icon: `${DEVICON}/heroku/heroku-original.svg` },

  // AI / ML
  { id: "tensorflow", name: "TensorFlow", icon: `${DEVICON}/tensorflow/tensorflow-original.svg` },
  { id: "pytorch", name: "PyTorch", icon: `${DEVICON}/pytorch/pytorch-original.svg` },
  { id: "keras", name: "Keras", icon: `${DEVICON}/keras/keras-original.svg` },
  { id: "opencv", name: "OpenCV", icon: `${DEVICON}/opencv/opencv-original.svg` },
  { id: "pandas", name: "Pandas", icon: `${DEVICON}/pandas/pandas-original.svg` },
  { id: "jupyter", name: "Jupyter", icon: `${DEVICON}/jupyter/jupyter-original.svg` },
  { id: "scipy", name: "SciPy", icon: "https://cdn.simpleicons.org/scipy/8CAAE6" },
  { id: "openai", name: "OpenAI", icon: "https://openai.com/favicon.ico" },
];

export type TechStackLogo = (typeof techStackLogos)[number];

const techStackLogoMap = new Map(techStackLogos.map((logo) => [logo.id, logo]));

function pickTechStackLogos(ids: string[]): TechStackLogo[] {
  return ids.flatMap((id) => {
    const logo = techStackLogoMap.get(id);
    return logo ? [logo] : [];
  });
}

export const techStackLogoGroups = techStackLogoGroupMeta.map((group) => ({
  id: group.id,
  label: group.label,
  description: group.description,
  logos: pickTechStackLogos(group.logoIds),
}));

export const techStackCategories: TechStackCategory[] = [];
export const allTechnologies: (Technology & { category: string })[] = [];


// ===== data/landing/projects.ts =====
export const projects = [
  {
    slug: "prime-lead-crm",
    title: "Prime Lead CRM",
    category: "CRM · Call Center",
    description:
      "A call center CRM built to capture leads, assign staff, track attendance, run training, and keep sales conversations in one system so teams convert faster with full visibility.",
    image: {
      src: "/projects/prime-leads-project/prime-lead-crm-dashboard.webp",
      alt: "Prime Lead CRM dashboard overview",
      width: 1536,
      height: 1024,
    },
  },
  {
    slug: "ai-school-erp",
    title: "AI School ERP",
    category: "Education · ERP · AI",
    description:
      "A smart school management ERP with AI-powered face recognition attendance, student and teacher management, fees, exams, timetables, and role-based portals for admins, teachers, parents, and students.",
    image: {
      src: "/projects/ai-school-erp/ai-school-erp-showcase.webp",
      alt: "AI School ERP showcase overview",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "travel-and-tour-website",
    title: "Travel & Tour Website",
    category: "Travel · Tourism · Booking",
    description:
      "A full travel and tour platform with a public booking website, package listings, destination pages, customer management, bookings, rental inquiries, and an admin panel to manage packages end to end.",
    image: {
      src: "/projects/travel-and-tour-website/travel-and-tour-website-homepage.webp",
      alt: "Travel and tour website homepage",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "restaurant-pos",
    title: "Restaurant POS",
    category: "Hospitality · POS · Management",
    description:
      "An all-in-one restaurant point-of-sale and management platform for orders, menus, tables, customers, inventory, employees, reporting, and day-to-day business settings.",
    image: {
      src: "/projects/restaurant-pos/restaurant-pos-overview.webp",
      alt: "Restaurant POS system overview",
      width: 1024,
      height: 683,
    },
  },
  {
    slug: "travel-and-tours-management",
    title: "Travel & Tours Management",
    category: "Travel · Tourism · Management",
    description:
      "An all-in-one travel and tour management system for bookings, customers, packages, flights, hotels, transport, payments, invoices, agents, and business reporting.",
    image: {
      src: "/projects/travel-and-tours-management/travel-and-tours-management-overview.webp",
      alt: "Travel and tours management system overview",
      width: 1024,
      height: 683,
    },
  },
  {
    slug: "hotel-management-system",
    title: "Hotel Management System",
    category: "Hospitality · Hotel · HMS",
    description:
      "A complete hotel management platform for reservations, front desk, rooms, housekeeping, guests, finance, reports, employees, AI attendance, and AI camera monitoring.",
    image: {
      src: "/projects/hotel-management-system/hotel-management-system-overview.webp",
      alt: "Hotel management system overview",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "royal-pos",
    title: "Royal POS",
    category: "Retail · POS · AI",
    description:
      "An AI-powered retail POS and business platform for checkout, inventory, products, customers, sales, reports, multi-branch operations, and live AI camera monitoring.",
    image: {
      src: "/projects/royal-pos/royal-pos-overview.webp",
      alt: "Royal POS AI-powered retail system overview",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    category: "Healthcare · HMS · Clinic",
    description:
      "A complete hospital management platform for appointments, patients, doctors, departments, beds, billing, pharmacy, reports, users, and a dedicated doctor portal.",
    image: {
      src: "/projects/hospital-management-system/hospital-management-system-sign-in.webp",
      alt: "Hospital management system login and sign-up",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "cash-management-system",
    title: "Cash Management System",
    category: "Finance · Cash · Accounting",
    description:
      "A complete cash management platform for accounts, income, expenses, transfers, categories, payees, budgets, reports, and audit trails so teams control cash flow with full visibility.",
    image: {
      src: "/projects/cash-management-system/cash-management-system-sign-in.webp",
      alt: "Cash management system sign-in",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "hr-management-software",
    title: "HR Management Software",
    category: "HR · Payroll · ATS",
    description:
      "An AI-powered HRMS for employees, attendance, leave, payroll, recruitment, onboarding, performance, training, assets, expenses, and exit management in one platform.",
    image: {
      src: "/projects/hr-management-software/hr-management-software-overview.webp",
      alt: "HR management software overview",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "medicine-inventory-system",
    title: "Medicine Inventory System",
    category: "Healthcare · Pharmacy · Inventory",
    description:
      "A pharmacy inventory platform for medicines, suppliers, purchase orders, stock in and out, adjustments, batch and expiry tracking, and stock and purchase reports.",
    image: {
      src: "/projects/medicine-inventory-system/medicine-inventory-system-overview.webp",
      alt: "Medicine inventory system overview",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "e-learning-portal",
    title: "E-Learning Portal",
    category: "Education · LMS · E-Learning",
    description:
      "A complete EduLearn e-learning platform for courses, enrollments, lessons, assignments, quizzes, attendance, certificates, instructor dashboards, and admin management.",
    image: {
      src: "/projects/e-learning-portal/e-learning-portal-sign-in.webp",
      alt: "E-Learning Portal secure sign-in login",
      width: 1200,
      height: 750,
    },
  },
];


// ===== data/landing/team.ts =====
export const teamIntro =
  "We are a focused team of 20+ software engineers, designers, and delivery specialists. Founded in 2019, we are small enough to stay close to every project and experienced enough to deliver from startup MVPs to enterprise platforms. Each member is selected for technical craft, clear communication, and professional ownership.";

export const teamMembers = [
  {
    name: "Shahvaiz Ahmed",
    role: "Senior Full-stack Developer",
    bio: "Senior full-stack engineer specializing in scalable Node.js and React applications, with a strong focus on clean architecture, performance, and production reliability.",
    image: {
      src: "/team/shahvaiz-ahmed.webp",
      alt: "Portrait of Shahvaiz Ahmed",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Abdullah Mehdi",
    role: "Machine Learning Engineer",
    bio: "Machine learning engineer focused on designing, training, and deploying practical ML models that support intelligent product features and data-driven decisions.",
    image: {
      src: "/team/abdullah-mehdi.webp",
      alt: "Portrait of Abdullah Mehdi",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Izaan Ali",
    role: "DevOps Engineer",
    bio: "DevOps engineer responsible for cloud infrastructure, CI/CD pipelines, and secure deployment workflows that keep environments stable and releases predictable.",
    image: {
      src: "/team/izaan-ali.webp",
      alt: "Portrait of Izaan Ali",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Haider Saleem",
    role: "Data Engineer",
    bio: "Data engineer building reliable data pipelines and warehouse foundations so teams can access accurate, well-structured data for analytics and operations.",
    image: {
      src: "/team/haider-saleem.webp",
      alt: "Portrait of Haider Saleem",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Abdul Hadi",
    role: "iOS Developer",
    bio: "iOS developer crafting polished native applications with attention to usability, performance, and App Store–ready quality standards.",
    image: {
      src: "/team/abdul-hadi.webp",
      alt: "Portrait of Abdul Hadi",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Muhammad Zeeshan",
    role: "Mobile App Developer",
    bio: "Mobile app developer delivering cross-platform experiences with a focus on responsive interfaces, maintainable code, and smooth user journeys.",
    image: {
      src: "/team/muhammad-zeeshan.webp",
      alt: "Portrait of Muhammad Zeeshan",
      width: 600,
      height: 600,
    },
  },
];


// ===== data/landing/testimonials.ts =====
export type TestimonialSource = "Google" | "Clutch" | "Trustpilot";

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  /** @deprecated No longer shown in UI */
  source?: TestimonialSource;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We'd tried two other agencies in Lahore before and nothing stuck: half-finished features, no communication. This time was different. We described a messy manual process for tracking leads and walked away with a CRM our sales team actually opens every morning. Next Software Development Company pushed back when we asked for something that didn't make sense, which honestly built more trust than if they'd just said yes to everything.",
    author: "Saqib Shah",
    role: "CEO, Retail Group · Lahore, Pakistan",
  },
  {
    quote:
      "I run a small manufacturing unit in Faisalabad and our inventory was still on Excel sheets that three different people kept overwriting. This software house built us a proper ERP that talks to our billing, and stock discrepancies practically disappeared. What stood out was that they visited our warehouse before writing a single line of code instead of just working off a call.",
    author: "Imran Baig",
    role: "Operations Director, Textile Manufacturing · Faisalabad, Pakistan",
  },
  {
    quote:
      "Our old online store in Karachi was held together with plugins nobody understood anymore. Next Software Development Company rebuilt the storefront in about six weeks. Checkout is fast now, JazzCash and Easypaisa both work without the payment failures we used to get, and our conversion rate has roughly doubled since launch. I've already sent two other shop owners their way.",
    author: "Zara Khan",
    role: "Founder, Fashion Brand · Karachi, Pakistan",
  },
  {
    quote:
      "Our clinic in Islamabad needed a booking app and we had zero idea where to start. After looking for a software company near me that would explain things in plain language, we found this team. They gave us a realistic timeline instead of over-promising, and the Android app has genuinely cut our front-desk phone calls in half.",
    author: "Dr. Hina Anwar",
    role: "Founder, Healthcare Clinic · Islamabad, Pakistan",
  },
  {
    quote:
      "As a real estate agency in Rawalpindi, our biggest problem was leads slipping through the cracks between WhatsApp, email, and phone calls. The CRM from this software house pulls everything into one dashboard, and our agents actually use it because it's simple, not because they're forced to. Support after launch has been quick too.",
    author: "Ahmed Raza",
    role: "Managing Partner, Real Estate Agency · Rawalpindi, Pakistan",
  },
  {
    quote:
      "We run four grocery outlets in Multan and were still billing customers by hand at two of them. Next Software Development Company set up a POS linked across all branches, so now I can check daily sales from my phone without calling each manager. The switch took under a month with barely any downtime.",
    author: "Waqas Malik",
    role: "Owner, Grocery Chain · Multan, Pakistan",
  },
  {
    quote:
      "When I started searching for a software house near me in Peshawar, I expected the usual generic website pitches. This team asked about our fleet tracking problems first and built the product around the actual issues we were trying to solve, which made all the difference.",
    author: "Fahad Yousafzai",
    role: "Director, Logistics Company · Peshawar, Pakistan",
  },
  {
    quote:
      "Our school in Sialkot needed a student management system that parents could actually use without a manual. Fee tracking, attendance, report cards: all in one portal now from Next Software Development Company. The onboarding session they ran for our teachers was more useful than the entire documentation from our old vendor.",
    author: "Nadia Farooq",
    role: "Principal, Private School Network · Sialkot, Pakistan",
  },
  {
    quote:
      "I was skeptical about outsourcing our mobile app development locally instead of going abroad, mostly on price assumptions. Next Software Development Company ended up cheaper and faster than a quote I got from an agency in Europe, and the iOS app passed App Store review on the first submission.",
    author: "Bilal Chaudhry",
    role: "Founder, Food Delivery Startup · Lahore, Pakistan",
  },
  {
    quote:
      "Our accounting firm in Karachi handles a lot of sensitive client data, so security was non-negotiable. This software development company walked us through their approach to data protection before we signed anything, not after we complained. The client portal has held up fine through two audit seasons now.",
    author: "Samina Qureshi",
    role: "Partner, Accounting Firm · Karachi, Pakistan",
  },
  {
    quote:
      "We manufacture auto parts in Gujranwala and needed a system that could handle both export orders and local distribution separately. Most vendors wanted us to fit into their template. This software house built around our actual workflow, and our export paperwork errors dropped noticeably.",
    author: "Tariq Mehmood",
    role: "General Manager, Auto Parts Manufacturing · Gujranwala, Pakistan",
  },
  {
    quote:
      "I've worked with freelancers and small agencies in Islamabad for years and always ended up maintaining the code myself afterward. Hiring Next Software Development Company was the first project where the handover documentation was actually usable: clear comments, a proper README, nothing I had to reverse-engineer six months later.",
    author: "Omar Siddiqui",
    role: "CTO, Fintech Startup · Islamabad, Pakistan",
  },
  {
    quote:
      "Our restaurant chain in Lahore needed online ordering that worked during peak dinner rush without crashing, which had happened twice with our previous setup. This software development company stress-tested it before launch, something nobody had bothered to mention before. Zero downtime since we went live in December.",
    author: "Rabia Sheikh",
    role: "Co-Founder, Restaurant Chain · Lahore, Pakistan",
  },
  {
    quote:
      "As a small NGO in Quetta, our budget was tight and I said so upfront. This software house didn't disappear or lose interest. They scoped a version that covered what we actually needed for donor reporting and left room to add features later once we had more funding. That kind of honesty is rare.",
    author: "Farrukh Baloch",
    role: "Program Director, Non-Profit Organization · Quetta, Pakistan",
  },
  {
    quote:
      "We're a mid-sized textile exporter in Sialkot and our biggest headache was reconciling orders across email, WhatsApp, and a shared spreadsheet. The order management system from Next Software Development Company consolidated all of it, and our export team says they've cut two full days of manual reconciliation every month.",
    author: "Yasir Iqbal",
    role: "Export Manager, Textile Exports · Sialkot, Pakistan",
  },
];

/** Homepage-only client testimonials — distinct from location and shared landing reviews. */
export const homepageTestimonialsIntro =
  "Hear from founders, business leaders, and technology teams who partnered with Next Software Development to build custom software, web applications, mobile apps, and AI solutions that support real business goals.";

export const homepageTestimonials: Testimonial[] = [
  {
    quote:
      "The artificial intelligence team at Next Software Development helped us develop a recommendation engine that integrated with our existing platform. What impressed us most was their ability to explain the technical options clearly and connect each decision to our actual product and business requirements.",
    author: "Daniel Brooks",
    role: "Vice President of Product, Marketplace Platform · Austin, USA",
  },
  {
    quote:
      "We were looking for a software company near me in New York, but more importantly we needed a partner who could migrate our cloud platform without disrupting our customers. Next Software Development planned the transition carefully, communicated clearly at every stage, and helped our team move to a more scalable infrastructure with minimal disruption.",
    author: "James Wilson",
    role: "Chief Technology Officer, Financial Technology Startup · New York, USA",
  },
  {
    quote:
      "We needed a team in London that could handle several legacy system integrations without creating more operational risk. Next Software Development approached the project carefully, tested the system thoroughly, and helped our sales team transition to the new platform with very little disruption.",
    author: "Oliver Bennett",
    role: "Managing Director, Professional Services Firm · London, UK",
  },
  {
    quote:
      "We were searching for a software development company that could take ownership of both frontend and backend development for an enterprise resource planning platform. Next Software Development provided a structured process, strong technical communication, thorough testing, and a well documented rollout.",
    author: "William Harris",
    role: "Head of Information Technology, Enterprise Operations · Manchester, UK",
  },
  {
    quote:
      "We needed a trusted technology partner to help us modernize our customer platform without interrupting service for our clients. Next Software Development took time to understand our operating model, clarified the roadmap in plain language, and delivered a solution that gave our teams confidence from day one.",
    author: "Sarah Al-Mansoori",
    role: "Operations Director, Retail Group · Dubai, UAE",
  },
  {
    quote:
      "Our digital transformation project was delayed by several vendors before we found a team that could handle both strategy and execution. Next Software Development brought structure, strong engineering discipline, and a clear communication rhythm that made it easy for our leadership team to stay aligned.",
    author: "Emma Thompson",
    role: "Director of Digital Strategy, Healthcare Group · Toronto, Canada",
  },
  {
    quote:
      "We hired Next Software Development to build a custom client portal and reporting platform for our operations team. Their developers were thoughtful, responsive, and deeply involved in making sure the end product matched the business problems we were actually solving.",
    author: "Marcus Lee",
    role: "Chief Operating Officer, Industrial Services Company · Sydney, Australia",
  },
  {
    quote:
      "We were looking for a software house near me in Lahore that would understand retail operations, not just ship another generic build. Next Software Development took the time to understand our requirements, planned the architecture properly, and delivered a custom web application that our team could maintain and grow.",
    author: "Ahmed Raza",
    role: "CEO, E-commerce Business · Lahore, Pakistan",
  },
  {
    quote:
      "Our clinic needed a custom customer relationship management system to manage patient follow-ups and staff scheduling in one place. The team understood our healthcare workflows quickly and delivered a system that reduced our front desk workload and made daily operations much easier.",
    author: "Ayesha Khan",
    role: "Operations Manager, Healthcare Clinic · Karachi, Pakistan",
  },
  {
    quote:
      "The team at Next Software Development made our project feel collaborative from the beginning. They guided us through product decisions, improved our internal workflows, and produced a clean, scalable platform that is now central to how we run daily operations.",
    author: "Sophia Carter",
    role: "Founder, Education Platform · Glasgow, UK",
  },
  {
    quote:
      "We were looking for a partner who could handle both iOS and Android development without overcomplicating the first release. Next Software Development helped us define a focused minimum viable product, built the core features, and maintained a clear development process throughout the project.",
    author: "Hamza Malik",
    role: "Founder, Retail Startup · Islamabad, Pakistan",
  },
  {
    quote:
      "Our existing enterprise resource planning system could not keep up with our warehouse operations. Next Software Development helped us automate several manual processes and improve inventory management. Their team also remained responsive after launch whenever we needed technical support.",
    author: "Usman Farooq",
    role: "Supply Chain Head, Manufacturing Company · Faisalabad, Pakistan",
  },
  {
    quote:
      "We came to Next Software Development to build a software as a service product from the ground up. Their engineers were involved from architecture through deployment, while quality assurance was integrated throughout the process. The result was a much more reliable launch and a strong foundation for future development.",
    author: "Bilal Ahmed",
    role: "Co Founder, Business Software Company · Peshawar, Pakistan",
  },
];


// ===== data/landing/blog.ts =====
export { blogPosts } from "./blog";


// ===== data/landing/faq.ts =====
export const faqIntro =
  "Everything you need to know before starting a project with our software development company. Still have questions? We're happy to walk you through everything on a free call.";

/** Shared FAQs used on /faqs and as the default for non-homepage sections. */
export const faqs: FaqItem[] = [
  {
    column: "left",
    tag: "Overview",
    question: "What kinds of products do you build?",
    answer:
      "We design, build, test, and maintain products tailored to your business: web applications, mobile apps, enterprise systems, SaaS platforms, APIs, and integrations. Instead of forcing off-the-shelf tools, we shape solutions around how your teams actually work.",
  },
  {
    column: "left",
    tag: "Pricing",
    question: "How much does a typical engagement cost?",
    answer:
      "Cost depends on scope, complexity, and team composition. We provide competitive global rates and a detailed, transparent quote after a free discovery call. Engagements range from focused MVPs to full enterprise platforms.",
  },
  {
    column: "left",
    tag: "Timeline",
    question: "How long does it take to build a product?",
    answer:
      "Timelines depend on scope. A simple web app or MVP can ship in 6-10 weeks. A mid-complexity mobile application often takes 3-5 months. A full enterprise platform can take 6-12 months. We share a detailed timeline during planning and protect milestones with clear ownership.",
  },
  {
    column: "left",
    tag: "Global",
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes. Most of our clients are international, including the USA, UK, UAE, Canada, and Australia. We run remote-first collaboration with clear communication rhythms and timezone overlap, using Slack, Zoom, Jira, and Confluence so stakeholders stay informed.",
  },
  {
    column: "right",
    tag: "Process",
    question: "How do you run delivery day to day?",
    answer:
      "We work in short iterations with visible demos, shared backlog priorities, and clear ownership. You see progress early, give feedback while changes are still cheap, and stay aligned on scope, quality, and launch readiness.",
  },
  {
    column: "right",
    tag: "Getting started",
    question: "Can I hire dedicated developers from your team?",
    answer:
      "Absolutely. You can hire one developer or an entire squad on a dedicated basis, working exclusively on your project during business hours. Dedicated engineers integrate with your existing team, follow your processes, and report directly to you—an efficient way to scale capacity quickly.",
  },
  {
    column: "right",
    tag: "Support",
    question: "What happens after launch?",
    answer:
      "Post-launch support is part of how we work. We help with monitoring, fixes, improvements, and knowledge transfer so your team is not left maintaining unfamiliar code alone.",
  },
  {
    column: "right",
    tag: "Security",
    question: "How do you handle security and data protection?",
    answer:
      "We follow secure development practices, least-privilege access, and environment separation. For sensitive domains we discuss compliance needs up front and design controls into architecture, delivery, and operations—not as an afterthought.",
  },
  {
    column: "right",
    tag: "Quality",
    question: "How do you ensure product quality?",
    answer:
      "Quality is built into every stage, not added at the end. We run code reviews, unit and integration tests, manual QA, automated regression checks, and security reviews before release. QA works in parallel with development so issues are caught early.",
  },
  {
    column: "right",
    tag: "Legal",
    question: "Is my project idea safe with you? Do you sign NDAs?",
    answer:
      "Yes. We sign a mutual Non-Disclosure Agreement before detailed project discussions begin. Your idea, business data, and project details stay confidential. We follow internal data security policies and can involve your legal team in reviewing our standard NDA.",
  },
];

/** Homepage-only FAQs — not reused on /faqs, locations, or service pages. */
export const homepageFaqIntro =
  "Questions answered: discovery, delivery, cost, timeline, support, and how we work with startups and enterprises.";

export const homepageFaqs: FaqItem[] = [
  {
    column: "left",
    tag: "Overview",
    question: "What services do you provide?",
    answer:
      "We design, build, test, deploy, and maintain custom solutions tailored to your business. This includes web applications, mobile apps, cloud platforms, enterprise systems, SaaS products, and integrations. Unlike off-the-shelf software, we shape each solution around your unique workflows, users, and business goals.",
  },
  {
    column: "left",
    tag: "Pricing",
    question: "What does a project cost?",
    answer:
      "Cost depends on scope, complexity, features, integrations, and timeline. A focused MVP might range from a smaller investment, while a complex enterprise platform requires a larger, multi-phase engagement. We provide a clear, detailed estimate after understanding your requirements during an initial consultation.",
  },
  {
    column: "left",
    tag: "Choosing",
    question: "What should I look for in a partner?",
    answer:
      "Look for relevant project experience, a verifiable portfolio, experienced engineers, clear communication, transparent pricing, and a structured delivery process. Check client reviews and references. The right partner should understand your business goals as well as your technical requirements and stay involved after launch.",
  },
  {
    column: "left",
    tag: "Terminology",
    question: "What's the difference between a software house and agency?",
    answer:
      "The terms are often used interchangeably. Both provide engineering, design, testing, deployment, and support. What matters most is the team's technical expertise, delivery process, communication style, relevant experience, and ability to build solutions that meet your objectives.",
  },
  {
    column: "left",
    tag: "Timeline",
    question: "How long do projects typically take?",
    answer:
      "Timeline depends on scope, complexity, feature count, integrations, and customization level. A focused MVP might take several weeks. A mid-sized application typically takes 3-5 months. A complex enterprise platform may require 6-12 months or longer. After discovery and technical planning, we provide a detailed timeline based on your specific needs.",
  },
  {
    column: "right",
    tag: "Support",
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance and support after launch, including monitoring, bug fixes, security updates, performance optimization, technical improvements, infrastructure support, and future features. Our goal is to help your solution remain reliable and effective as your business evolves.",
  },
  {
    column: "right",
    tag: "Legal",
    question: "Will you sign an NDA?",
    answer:
      "Yes. We sign non-disclosure agreements when required to protect confidential information, product ideas, technical details, and sensitive project data. You can discuss your project requirements with our team with full confidence before we begin work.",
  },
  {
    column: "right",
    tag: "Clients",
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. We work with businesses at all stages, from early-stage startups building their first MVP to established organizations developing complex business systems. Our delivery approach scales to your project size, budget, technical needs, and growth objectives.",
  },
  {
    column: "right",
    tag: "Getting started",
    question: "How do I request a quote?",
    answer:
      "Submit your project details through our quote form or book a consultation. We'll review your requirements, discuss your goals, identify the right approach, and provide a clear estimate based on scope. There's no cost or obligation to explore options.",
  },
  {
    column: "right",
    tag: "Team",
    question: "Can you staff a dedicated team?",
    answer:
      "Yes. We can provide dedicated developers and teams based on your project needs. You can work with engineers across frontend, backend, mobile, AI, QA, and DevOps, with flexibility to scale the team as your project evolves.",
  },
];


// ===== data/landing/contact.ts =====
export const contactInfo = {
  email: siteBrand.email,
  phone: siteBrand.phone,
  responseTime: "Within 24 hours",
  hours: "Monday – Friday, 9:00 – 18:00 (PKT)",
  location: siteBrand.location,
} as const;


export const contactProjectTypes: ContactSelectOption[] = [
  { value: "custom-software", label: "Custom software / product" },
  { value: "erp", label: "Enterprise resource planning system" },
  { value: "crm", label: "Customer relationship management platform" },
  { value: "ai-agent", label: "Artificial intelligence agent / automation" },
  { value: "mobile-app", label: "Mobile application" },
  { value: "ecommerce", label: "E-commerce platform" },
  { value: "integration", label: "Integration / API work" },
  { value: "other", label: "Other" },
];

export const contactBudgetRanges: ContactSelectOption[] = [
  { value: "under-25k", label: "Under $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "100k-250k", label: "$100,000 – $250,000" },
  { value: "250k-plus", label: "$250,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export const contactTimelineOptions: ContactSelectOption[] = [
  { value: "asap", label: "As soon as possible / within 1 month" },
  { value: "1-3-months", label: "1 – 3 months" },
  { value: "3-6-months", label: "3 – 6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "flexible", label: "Flexible / exploring" },
];


export const homeContact = {
  overline: "Get started",
  titleBefore: "Let's build your",
  titleEmphasis: "next big thing",
  subtext:
    "Share your project details and goals. We'll get back to you within 24 hours with a clear path forward: no obligation, no sales pressure.",
  emailPlaceholder: "Your email address",
  cta: "Request a project consultation",
  reassurance: "Free consultation · No commitment · Global delivery",
} as const;

/** Homepage-only contact CTA — not reused on service pages. */
export const homepageContact = {
  overline: "Start a conversation",
  titleBefore: "Ready to build your next big",
  titleEmphasis: "software solution?",
  subtext:
    "Partner with Next Software Development Company to turn ambitious ideas into secure, scalable, production-ready software. Share your business goals, technical requirements, and project vision—our experienced team will help you define the right solution and path forward.",
  emailPlaceholder: homeContact.emailPlaceholder,
  cta: "Request a free consultation",
  reassurance: "Free consultation · No commitment · Global delivery",
} as const;


// ===== Homepage SEO + section headings =====

export const homepageSeo = {
  title: "Software Development Company | Next Software Development",
  description:
    "We build scalable web, mobile, AI, and enterprise software for startups and growing businesses worldwide. Trusted engineering team since 2019.",
} as const;

export const homepageSectionCopy = {
  about: {
    overlineText: "About us",
    title: "Who we are?",
  },
  services: {
    overlineText: "What we deliver",
    titleBefore: "Innovating your",
    titleEmphasis: "digital future",
    description:
      "We blend modern engineering with thoughtful product design to ship platforms teams can rely on every day.",
  },
  industries: {
    overlineText: "Industries we serve",
    title: "Software solutions for every sector",
    description:
      "For complex industry work, we tailor products to the workflows, compliance needs, and growth goals of every sector we support.",
  },
  techStack: {
    overlineText: "Technology stack",
    titleBefore: "Built with",
    titleEmphasis: "proven, modern tools",
    badgeText: "Technology built around your Business",
  },
  process: {
    overlineText: "How we work",
    titleBefore: "Our delivery process",
    titleEmphasis: "transparent, agile, and built around you",
    description:
      "Many teams talk about best practices. We show you exactly what delivery looks like at every stage of your project.",
    ctaLabel: "Start your project",
  },
  projects: {
    overlineText: "Portfolio",
    titleBefore: "Recent",
    titleEmphasis: "projects",
  },
  team: {
    overlineText: "Our team",
    titleBefore: "A small",
    titleEmphasis: "team",
  },
  testimonials: {
    overlineText: "Client testimonials",
    titleBefore: "What our",
    titleEmphasis: "clients",
    titleAfter: "say",
  },
  blog: {
    overlineText: "Expert insights",
    titleBefore: "Insights from",
    titleEmphasis: "our team",
    description:
      "Practical notes on product delivery, discovery, and building systems that scale, written by the people behind the work.",
  },
  faq: {
    overlineText: "Frequently asked questions",
    titleBefore: "Questions,",
    titleEmphasis: "answered",
  },
} as const;

export const homepageIndustries = [
  {
    slug: "manufacturing",
    name: "TechCorp",
    industry: "Manufacturing",
    description:
      "Automate production lines and streamline factory operations with intelligent control systems.",
    tags: ["ERP", "IoT", "Operations"],
  },
  {
    slug: "healthcare",
    name: "HealthPlus",
    industry: "Healthcare",
    description:
      "Build intelligent diagnostic tools and automated patient management systems to improve care accuracy and streamline clinical workflows.",
    tags: ["HMS", "Telehealth", "Compliance"],
  },
  {
    slug: "retail",
    name: "RetailHub",
    industry: "Retail",
    description:
      "Modernize storefronts and online shops with smart inventory, checkout, and loyalty experiences.",
    tags: ["POS", "E-commerce", "Inventory"],
  },
  {
    slug: "real-estate",
    name: "EstatePro",
    industry: "Real Estate",
    description:
      "Manage listings, contracts, and tenant relationships with unified property platforms.",
    tags: ["CRM", "Listings", "Agents"],
  },
  {
    slug: "education",
    name: "EduSmart",
    industry: "Education",
    description:
      "Deliver adaptive learning experiences and digital classrooms that scale with every student.",
    tags: ["LMS", "EdTech", "Portals"],
  },
  {
    slug: "finance",
    name: "FinTrust",
    industry: "Finance",
    description:
      "Secure trading platforms and analytics dashboards built for speed, accuracy, and compliance.",
    tags: ["FinTech", "Analytics", "Security"],
  },
  {
    slug: "logistics",
    name: "LogiFlow",
    industry: "Logistics",
    description:
      "Track shipments end-to-end and optimize fleets with real-time routing intelligence.",
    tags: ["Tracking", "Fleet", "Warehousing"],
  },
  {
    slug: "media",
    name: "MediaWave",
    industry: "Media",
    description:
      "Power broadcasting, streaming, and content workflows with high-performance production tools.",
    tags: ["Streaming", "CMS", "Workflows"],
  },
  {
    slug: "banking",
    name: "NovaBank",
    industry: "Banking",
    description:
      "Modern core banking, digital onboarding, and fraud protection for next-generation institutions.",
    tags: ["Core banking", "KYC", "Fraud"],
  },
  {
    slug: "agriculture",
    name: "GreenField",
    industry: "Agriculture",
    description:
      "Precision farming software that turns sensor data into higher yields and lower waste.",
    tags: ["IoT", "Sensors", "Analytics"],
  },
  {
    slug: "hospitality",
    name: "Skyline Hotels",
    industry: "Hospitality",
    description:
      "Reservation, guest experience, and operations platforms for premium hotel brands.",
    tags: ["Bookings", "Guest apps", "Ops"],
  },
  {
    slug: "health-fitness",
    name: "Pulse Fitness",
    industry: "Health & Fitness",
    description:
      "Member apps, class booking, and performance tracking to grow modern fitness communities.",
    tags: ["Membership", "Mobile", "Scheduling"],
  },
  {
    slug: "technology",
    name: "Quantum Dynamics",
    industry: "Technology",
    description:
      "Cutting-edge platforms, APIs, and infrastructure for software-first technology companies.",
    tags: ["SaaS", "APIs", "Platforms"],
  },
  {
    slug: "insurance",
    name: "Lumina Insurance",
    industry: "Insurance",
    description:
      "Quote, underwrite, and service policies faster with automated insurance workflows.",
    tags: ["Underwriting", "Claims", "Automation"],
  },
  {
    slug: "consulting",
    name: "Vertex Solutions",
    industry: "Consulting",
    description:
      "Client portals, analytics, and engagement tooling tailored for high-performing consultancies.",
    tags: ["Portals", "Reporting", "CRM"],
  },
] as const;

export const homepageServices = [
  {
    title: "Software Development",
    description:
      "We deliver software development from discovery and architecture through build, launch, and ongoing support for startups and enterprises.",
    tag: "Enterprise",
  },
  {
    title: "Mobile App Development",
    description:
      "Secure, scalable iOS and Android apps with native quality and shared logic where it speeds delivery without sacrificing performance.",
    tag: "Cross-Platform",
  },
  {
    title: "Web Development",
    description:
      "Modern web applications with responsive design, strong performance, and SEO-friendly architecture for every device and browser.",
    tag: "Web",
  },
  {
    title: "Ecommerce Development",
    description:
      "Storefronts, marketplaces, and checkout systems built for conversion, catalog complexity, and reliable order operations.",
    tag: "Commerce",
  },
  {
    title: "UI/UX Design",
    description:
      "Research-led interfaces and design systems focused on usability, consistency, and conversion from wireframes to design QA.",
    tag: "Design",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Production AI covering automation, insights, agents, NLP, and vision systems with clear guardrails, monitoring, and human oversight.",
    tag: "Intelligence",
  },
  {
    title: "Machine Learning",
    description:
      "ML models and pipelines covering data prep, training, evaluation, and production inference so predictions run reliably at scale.",
    tag: "ML",
  },
  {
    title: "Automation Services",
    description:
      "Workflow, RPA, and document automation so teams eliminate repetitive work and move data between systems reliably.",
    tag: "Ops",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Secure cloud-native infrastructure and CI/CD with monitoring and scalable DevOps workflows so teams ship reliably and grow with confidence.",
    tag: "DevSecOps",
  },
  {
    title: "Data & Business Intelligence",
    description:
      "Data engineering, warehousing, and analytics delivering trusted dashboards, reports, and decisions your teams can act on.",
    tag: "Analytics",
  },
  {
    title: "Cybersecurity",
    description:
      "Application security, audits, and compliance readiness so products stay resilient as they scale.",
    tag: "Security",
  },
  {
    title: "Enterprise Solutions",
    description:
      "ERP, CRM, and internal platforms that replace disconnected tools with one system of record.",
    tag: "Enterprise",
  },
  {
    title: "Blockchain Development",
    description:
      "Smart contracts, dApps, and Web3 integrations built for secure on-chain workflows and real product use cases.",
    tag: "Web3",
  },
  {
    title: "Healthcare Software Development",
    description:
      "Hospital, clinic, and telemedicine platforms designed for clinical workflows, patient data, and compliance needs.",
    tag: "Health",
  },
  {
    title: "AR/VR Development",
    description:
      "Augmented and virtual reality experiences for training, retail, and immersive product visualization.",
    tag: "Immersive",
  },
  {
    title: "Testing & QA",
    description:
      "Manual and automated testing across web, mobile, and APIs covering functional, regression, and performance checks before release.",
    tag: "Quality",
  },
] as const;

