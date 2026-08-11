/**
 * Complete homepage content — single source of truth for the home page.
 * Edit copy here; landing modules re-export from this file.
 */

import type { LucideIcon } from "lucide-react";
import { BarChart3, Rocket, Shield } from "lucide-react";
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

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: ImageAsset;
  body: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
  tag: string;
  column: "left" | "right";
};


// ===== data/landing/hero.ts =====
export const homeHero = {
  eyebrow: "Software house & software company",
  headlineBefore: "We build",
  headlineEmphasis: "powerful software",
  headlineAfter:
    "as a leading software development company businesses depend on",
  subtextBefore:
    "A top rated software house and leading software company empowering startups, SMBs, and enterprises worldwide with ",
  subtextHighlight: "scalable, secure, and innovative",
  subtextAfter:
    " web apps, mobile apps, AI features, CRM, ERP, SaaS platforms, cloud systems, and DevOps workflows that drive measurable growth.",
  primaryCta: "Get a Free Quote",
  secondaryCta: "View Our Work",
  secondaryHref: projectPath,
} as const;

export const heroFeatures = [
  { icon: Rocket, label: "Scalable Solutions" },
  { icon: Shield, label: "Secure & Reliable" },
  { icon: BarChart3, label: "Business Growth" },
] as const;

export const heroBackgroundVideo = "/heroSection/software-development-company.mp4";

export const heroCtaForm = {
  title: "Get a free quote",
  subtitle: "Share your details and we'll respond within one business day.",
  submitLabel: "Send message",
} as const;


// ===== data/landing/about.ts =====
export const aboutSection = {
  teamLink: teamPath,
  teamCta: "Meet our engineering team",
  paragraphs: [
    "Next Software Development Company is a trusted software house and software company partnering with founders and operators across the United States, United Kingdom, United Arab Emirates, Canada, and Australia. We were founded in 2019 with one belief: that great software should be accessible to every business, not just the Fortune 500.",
    "Since 2019 we have built 7+ years of experience supporting 500+ happy clients across 10+ countries with a team of 20+ software engineers, designers, QA specialists, and project managers. We turn complex business challenges into clean, efficient, and scalable digital products, whether you need a mobile app for your startup, an ERP for manufacturing, or a SaaS platform for recurring revenue.",
    "Clients choose us as a top rated software company for senior delivery quality and practical pricing. You get English-speaking, timezone-flexible teams with strong technical craft, clear communication, and ownership that continues after launch.",
  ],
  values: [
    {
      title: "Proven delivery record",
      description:
        "Founded in 2019, with 7+ years of experience, 500+ happy clients, and delivery across 10+ countries.",
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
    src: "/about us/software-development-company.webp",
    alt: "Next Software Development Company team collaborating on product delivery",
    width: 1000,
    height: 700,
  },
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
    value: "10+",
    label: "Countries Served",
    detail:
      "Delivery for clients in Pakistan and overseas markets including the USA, UK, UAE, Canada, and Australia.",
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
  { slug: "google", name: "Google", logo: "/trustedPartners/google.svg" },
  { slug: "microsoft", name: "Microsoft", logo: "/trustedPartners/microsoft.svg" },
  { slug: "amazon", name: "Amazon", logo: "/trustedPartners/amazon.svg" },
  { slug: "apple", name: "Apple", logo: "/trustedPartners/apple.svg" },
  { slug: "meta", name: "Meta", logo: "/trustedPartners/meta.svg" },
  { slug: "netflix", name: "Netflix", logo: "/trustedPartners/netflix.svg" },
  { slug: "adobe", name: "Adobe", logo: "/trustedPartners/adobe.svg" },
  { slug: "salesforce", name: "Salesforce", logo: "/trustedPartners/salesforce.svg" },
  { slug: "ibm", name: "IBM", logo: "/trustedPartners/ibm.svg" },
  { slug: "intel", name: "Intel", logo: "/trustedPartners/intel.svg" },
  { slug: "nvidia", name: "Nvidia", logo: "/trustedPartners/nvidia.svg" },
  { slug: "tesla", name: "Tesla", logo: "/trustedPartners/tesla.svg" },
  { slug: "shopify", name: "Shopify", logo: "/trustedPartners/shopify.svg" },
  { slug: "slack", name: "Slack", logo: "/trustedPartners/slack.svg" },
  { slug: "oracle", name: "Oracle", logo: "/trustedPartners/oracle.svg" },
  { slug: "cisco", name: "Cisco", logo: "/trustedPartners/cisco.svg" },
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
  "As a leading software house, we engineer across the full delivery spectrum from polished interfaces and resilient APIs to data platforms, cloud infrastructure, and production AI. Every technology below reflects real project experience, selected for performance, security, team velocity, and long-term maintainability.";


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
      src: "/projects/prime-leads-project/Prime-Lead-Crm-Dashboard.webp",
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
      src: "/projects/ai-school-erp/AI-School-Erp-Showcase.webp",
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
      src: "/projects/travel-and-tour-website/Travel-And-Tour-Website-Homepage.webp",
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
      src: "/projects/restaurant-pos/Restaurant-Pos-Overview.webp",
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
      src: "/projects/travel-and-tours-management/Travel-And-Tours-Management-Overview.webp",
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
      src: "/projects/hotel-management-system/Hotel-Management-System-Overview.webp",
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
      src: "/projects/royal-pos/Royal-Pos-Overview.webp",
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
      src: "/projects/hospital-management-system/Hospital-Management-System-Sign-In.webp",
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
      src: "/projects/cash-management-system/Cash-Management-System-Sign-In.webp",
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
      src: "/projects/hr-management-software/Hr-Management-Software-Overview.webp",
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
      src: "/projects/medicine-inventory-system/Medicine-Inventory-System-Overview.webp",
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
      src: "/projects/e-learning-portal/E-Learning-Portal-Sign-In.webp",
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
      src: "/team/Shahvaiz-Ahmed.webp",
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
      src: "/team/Abdullah-Mehdi.webp",
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
      src: "/team/Izaan-Ali.webp",
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
      src: "/team/Haider-Saleem.webp",
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
      src: "/team/Abdul-Hadi.webp",
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
      src: "/team/Muhammad-Zeeshan.webp",
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
      "We needed a booking app for our clinic in Islamabad and had zero idea where to start technically. This software development company explained everything in plain language, gave us a realistic timeline instead of over-promising, and the Android app has genuinely cut our front-desk phone calls in half. Patients book their own slots now.",
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
      "Finding a software development company in Peshawar that actually understood what a logistics business needs was harder than I expected. Most agencies just wanted to build a generic website. This software house asked about our fleet tracking problems first and built the product around solving that, not the other way round.",
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


// ===== data/landing/blog.ts =====
export const blogPosts: BlogPost[] = [
  {
    slug: "choose-software-development-company-pakistan",
    title: "How to Choose the Right Software Development Company in Pakistan",
    excerpt:
      "There are hundreds of agencies offering software development services across Pakistan. Here is the honest framework we recommend for evaluating any software company including us.",
    date: "May 12, 2026",
    readTime: "14 min",
    category: "Software Development",
    image: {
      src: "/insights/software-development.webp",
      alt: "Software development insights",
      width: 1200,
      height: 750,
    },
    body: [
      "Choosing a software development company in Pakistan is not about picking the lowest quote or the flashiest portfolio. It is about finding a partner who will still answer the phone six months after launch.",
      "The market is crowded. Islamabad, Lahore, Karachi, and remote-first teams all compete on price, stack, and delivery claims. That noise makes it easy to confuse a polished pitch with a reliable engineering practice. A clear evaluation framework cuts through that.",
      "Start with delivery proof: case studies with measurable outcomes, references you can call, and code you can inspect if you have a technical advisor. Ask how they handle scope changes, who owns the IP, and what happens when timelines slip.",
      "Ask for specifics, not slogans. How many releases shipped in the last quarter? Who was the product owner on the client side? What tools do they use for tickets, CI, and staging? Vague answers usually mean vague delivery.",
      "Look for a team that writes specifications before coding, demos working software every two weeks, and documents handoff. A good software company in Islamabad should overlap with your timezone if you are in the UK or UAE and communicate in plain language.",
      "Timezone overlap matters more than most buyers admit. A four-hour daily window for decisions prevents week-long email chains. If your stakeholders are in Europe or the Gulf, Pakistan-based teams often have a natural advantage over farther-east outsourcing hubs.",
      "Evaluate senior involvement early. Who writes the architecture? Who joins discovery calls? If you only meet sales until the contract is signed, expect junior-heavy staffing later. Ask for named roles on the proposal and confirm those people appear in kickoff.",
      "Pricing models tell you how risk is shared. Fixed price works when scope is clear after discovery. Time and materials works when you need flexibility. Hybrid models with a discovery fixed fee and a build estimate range often protect both sides better than a single inflated lump sum.",
      "Security and compliance should be ordinary conversation, not a surprise. Ask about access control, secrets management, backup policy, and how production credentials are handled. For fintech, health, or government-adjacent work, ask which standards they have already shipped against.",
      "Finally, run a small paid discovery phase before committing to a six-figure build. The best firms will encourage that. It protects both sides and surfaces fit early.",
      "A strong discovery should produce user stories, an architecture sketch, a milestone plan, and an explicit out-of-scope list. If a company resists writing that down, they are asking you to buy uncertainty.",
      "Use the discovery output to compare vendors fairly. Same scope, same assumptions, same success metrics. The cheapest bid is rarely the cheapest outcome once rework, delays, and support are included.",
      "After launch, support quality separates partners from project shops. Clarify response times, who owns bugs versus enhancements, and how knowledge is transferred if your internal team takes over. Handoff documentation should be part of the definition of done, not an optional extra.",
      "If you apply this checklist consistently, you will filter out most of the market quickly. The remaining shortlist will look quieter on marketing and stronger on process, which is usually where good software comes from.",
    ],
  },
  {
    slug: "discovery-structure-prevents-problems",
    title: "A little structure now prevents a lot of problems later",
    excerpt:
      "The most expensive software projects we have ever seen were not the complex ones. They were simple projects that skipped discovery. Here is what a proper discovery phase actually looks like.",
    date: "Apr 28, 2026",
    readTime: "12 min",
    category: "Product Strategy",
    image: {
      src: "/insights/product-strategy.webp",
      alt: "Product strategy and discovery",
      width: 1200,
      height: 750,
    },
    body: [
      "Discovery is not a sales exercise. It is a short, structured phase where we map users, workflows, integrations, risks and success metrics then agree on a fixed scope and price before build.",
      "Teams skip discovery for familiar reasons: urgency, budget pressure, or confidence that the idea is already clear. Urgency rarely survives the first integration surprise. Budget pressure often creates larger spend later. Confidence without shared documents is usually optimism, not alignment.",
      "A proper discovery deliverable includes user stories, a technical architecture sketch, milestone plan, and explicit out-of-scope list. Stakeholders sign off so there is one shared truth.",
      "User stories force the conversation onto outcomes. Instead of debating screens in isolation, you describe who needs what and why. That clarity reduces feature bloat and makes acceptance criteria testable.",
      "Workflow mapping catches hidden steps that never appear in a pitch deck. Approvals, exception paths, offline scenarios, and role permissions often decide whether a system feels smooth or frustrating in week one of real use.",
      "Integration inventory should be written early. Payment gateways, ERPs, CRMs, SMS providers, and legacy databases each bring constraints. Discovering them mid-build is how timelines quietly double.",
      "Risks belong on paper too. Data migration quality, third-party API limits, regulatory review, and key-person dependency are not pessimism. They are planning inputs. A mature discovery names them and proposes mitigations.",
      "Success metrics keep the project honest. Decide what good looks like before coding: conversion lift, ticket reduction, faster fulfillment, fewer manual reconciliations. Without metrics, every demo becomes a taste debate.",
      "Skipping discovery feels faster until rework piles up: wrong database choices, missing compliance requirements, or features nobody actually uses. That is when budgets blow past PKR estimates and trust erodes.",
      "The commercial shape of discovery should be simple. A fixed fee, a fixed window, and a concrete pack of deliverables. At the end, you either proceed with a clear build proposal or stop with useful artifacts and no sunk-build cost.",
      "Stakeholders should leave discovery able to answer the same five questions: Who is this for? What is in scope? What is out of scope? What is the architecture direction? How will we measure success?",
      "Whether you work with Software Development Company or another firm, invest in discovery. It is the cheapest insurance on any custom software project.",
      "If a vendor says discovery is unnecessary because they have built something similar before, treat that as a yellow flag. Similarity helps, but your users, data, and constraints are still yours. Structure is how those differences get respected.",
    ],
  },
  {
    slug: "weekly-demos-keep-software-on-track",
    title: "Why weekly demos keep software projects on track",
    excerpt:
      "Long gaps between demos hide problems until they are expensive. A simple weekly rhythm keeps stakeholders aligned and teams shipping visible progress.",
    date: "Mar 15, 2026",
    readTime: "11 min",
    category: "Engineering",
    image: {
      src: "/insights/Engeenring.webp",
      alt: "Engineering and software delivery",
      width: 1200,
      height: 750,
    },
    body: [
      "Weekly demos are not status meetings. They are working sessions where the team shows real software even if rough and collects feedback before the next sprint.",
      "Status slides can say green while the product is wrong. A live build cannot hide that for long. Demos force truth into the open while changes are still cheap.",
      "When demos slip to monthly, assumptions pile up. Product owners discover misaligned UI late. Integrations fail quietly. Budget conversations get harder because nobody saw progress.",
      "A good demo cadence includes a short agenda: what shipped, what is blocked, what is next. Recordings help remote stakeholders. Notes become the living changelog.",
      "Keep the demo audience intentional. Decision makers should attend often enough to steer. Subject-matter experts should join when their workflows are on screen. Large silent audiences slow feedback and dilute ownership.",
      "Show working paths, not polished fiction. Incomplete UI is fine if the flow is real. Fake happy-path walkthroughs create false confidence and delay hard conversations about edge cases.",
      "Feedback should be captured in one place and prioritized the same day. Untracked comments in a call become forgotten preferences. Tracked notes become the backlog the team can actually execute.",
      "Blockers deserve daylight. If an API key, content decision, or legal review is stuck, the demo is the right moment to escalate. Waiting until a milestone review turns a one-week delay into a four-week surprise.",
      "Remote-friendly habits matter for Pakistan-based teams serving UK, UAE, and US clients. Stable staging links, short recordings, and clear timestamps let async reviewers stay close without forcing every stakeholder into every call.",
      "Weekly rhythm also improves team morale. Engineers ship visible increments. Clients see movement. Trust compounds because progress is demonstrated, not promised.",
      "If your vendor resists regular demos, treat that as a signal. Transparency should be default, not a premium add-on.",
      "Some teams worry that weekly demos create thrash. The opposite is usually true. Small course corrections each week prevent large pivots later. Thrash comes from silence, not from short feedback loops.",
      "Make demos part of the contract language: cadence, attendees, staging environment, and how feedback enters the backlog. When the process is explicit, delivery quality stops depending on goodwill alone.",
    ],
  },
];


// ===== data/landing/faq.ts =====
export const faqIntro =
  "Everything you need to know before starting a project with our software development company. Still have questions? We're happy to walk you through everything on a free call.";

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


// ===== data/landing/contact.ts =====
export const contactInfo = {
  email: siteBrand.email,
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
  overline: "Best software company consultation",
  titleBefore: "Let's build your",
  titleEmphasis: "next big thing",
  subtext:
    "Tell our software house about your goals. We will get back to you within 24 hours with a clear path forward: no obligation, no sales pressure.",
  emailPlaceholder: "Your email address",
  cta: "Request a project consultation",
  reassurance: "Free consultation · No commitment · Global delivery",
} as const;


// ===== Homepage SEO + section headings =====

export const homepageSeo = {
  title: "Software House & Software Development Company",
  description:
    "Software house and software development company building web apps, mobile apps, AI, CRM, ERP, and SaaS platforms for startups and enterprises worldwide.",
} as const;

export const homepageSectionCopy = {
  about: {
    overlineText: "About us",
    title: "Who Is Next Software Development Company?",
  },
  services: {
    overlineText: "What we deliver",
    titleBefore: "Innovating your",
    titleEmphasis: "digital future",
    description:
      "As a leading software company, we blend modern engineering with thoughtful product design to ship platforms teams can rely on every day.",
  },
  industries: {
    overlineText: "Industries we serve",
    title: "Software solutions for every sector",
    description:
      "As a best software house for complex industry work, we tailor products to the workflows, compliance needs, and growth goals of every sector we support.",
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
      "Many teams talk about best practices. As a top rated software house, we show you exactly what delivery looks like at every stage of your project.",
    ctaLabel: "Start your project",
  },
  projects: {
    overlineText: "Software house portfolio",
    titleBefore: "Recent",
    titleEmphasis: "projects",
  },
  team: {
    overlineText: "Leading software company team",
    titleBefore: "A small",
    titleEmphasis: "team",
  },
  testimonials: {
    overlineText: "Client feedback",
    titleBefore: "What",
    titleEmphasis: "partners",
    titleAfter: "say",
  },
  blog: {
    overlineText: "Insights from our software house",
    titleBefore: "Insights from",
    titleEmphasis: "our team",
    description:
      "Practical notes on product delivery, discovery, and building systems that scale, written by the people behind the work.",
  },
  faq: {
    overlineText: "Software development company FAQs",
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
      "As a leading software development company and software house, we deliver software development from discovery and architecture through build, launch, and ongoing support for startups and enterprises.",
    tag: "Enterprise",
  },
  {
    title: "Mobile App Development",
    description:
      "Secure, scalable iOS and Android apps built by our software house with native quality and shared logic where it speeds delivery without sacrificing performance.",
    tag: "Cross-Platform",
  },
  {
    title: "Web Development",
    description:
      "Modern web applications from a trusted software company with responsive design, strong performance, and SEO-friendly architecture for every device and browser.",
    tag: "Web",
  },
  {
    title: "Ecommerce Development",
    description:
      "Storefronts, marketplaces, and checkout systems from a leading software company built for conversion, catalog complexity, and reliable order operations.",
    tag: "Commerce",
  },
  {
    title: "UI/UX Design",
    description:
      "Research-led interfaces and design systems from a leading software house, focused on usability, consistency, and conversion from wireframes to design QA.",
    tag: "Design",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Production AI from a top rated software company covering automation, insights, agents, NLP, and vision systems with clear guardrails, monitoring, and human oversight.",
    tag: "Intelligence",
  },
  {
    title: "Machine Learning",
    description:
      "ML models and pipelines from a top rated software house covering data prep, training, evaluation, and production inference so predictions run reliably at scale.",
    tag: "ML",
  },
  {
    title: "Automation Services",
    description:
      "Workflow, RPA, and document automation from a best software company so teams eliminate repetitive work and move data between systems reliably.",
    tag: "Ops",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Secure cloud-native infrastructure and CI/CD from a best software company with monitoring and scalable DevOps workflows so teams ship reliably and grow with confidence.",
    tag: "DevSecOps",
  },
  {
    title: "Data & Business Intelligence",
    description:
      "Data engineering, warehousing, and analytics from a leading software company delivering trusted dashboards, reports, and decisions your teams can act on.",
    tag: "Analytics",
  },
  {
    title: "Cybersecurity",
    description:
      "Application security, audits, and compliance readiness from a trusted software house so products stay resilient as they scale.",
    tag: "Security",
  },
  {
    title: "Enterprise Solutions",
    description:
      "ERP, CRM, and internal platforms from a leading software development company that replace disconnected tools with one system of record.",
    tag: "Enterprise",
  },
  {
    title: "Blockchain Development",
    description:
      "Smart contracts, dApps, and Web3 integrations from a software company built for secure on-chain workflows and real product use cases.",
    tag: "Web3",
  },
  {
    title: "Healthcare Software Development",
    description:
      "Hospital, clinic, and telemedicine platforms from a software house designed for clinical workflows, patient data, and compliance needs.",
    tag: "Health",
  },
  {
    title: "AR/VR Development",
    description:
      "Augmented and virtual reality experiences from a top rated software company for training, retail, and immersive product visualization.",
    tag: "Immersive",
  },
  {
    title: "Testing & QA",
    description:
      "Manual and automated testing from our software development company across web, mobile, and APIs covering functional, regression, and performance checks before release.",
    tag: "Quality",
  },
] as const;

