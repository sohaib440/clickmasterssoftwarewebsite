import type { LucideIcon } from "lucide-react";
import { Mail, Share2 } from "lucide-react";

import { siteBrand } from "@/lib/landing/brand";
import { contactPath } from "@/lib/landing/constants";

export type NavChild = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navLinks: readonly NavLink[] = [
  {
    label: "About",
    href: "/about",
    children: [{ label: "Our Team", href: "/about#team" }],
  },
  { label: "Services", href: "/software-development" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: contactPath },
  {
    label: "Resources",
    href: "/#",
    children: [
      { label: "Blogs", href: "/blog" },
      { label: "Demos", href: "/demos" },
      { label: "Case Study", href: "/case-study" },
    ],
  },
];

export const navCtaLabel = "Get a Free Quote";

export const contactInfo = {
  email: siteBrand.email,
  responseTime: "Within 24 hours",
  hours: "Monday – Friday, 9:00 – 18:00 (PKT)",
  location: siteBrand.location,
} as const;

export const homeHero = {
  eyebrow: "Leading Software Development Company in Pakistan",
  headlineBefore: "A global software development company",
  headlineEmphasis: "that builds products businesses rely on",
  subtext:
    "Software Development Company helps startups, small and medium-sized businesses, and enterprises across the United States, United Kingdom, United Arab Emirates, Canada, Australia, and Pakistan build powerful, scalable digital products. From idea to launch and beyond we deliver software that drives real business growth.",
  primaryCta: "Get a Free Quote",
  secondaryCta: "View Our Work",
  secondaryHref: "#projects",
} as const;

export const trustedPartnersSection: { label: string; fallbackText: string } = {
  label: "",
  fallbackText:
    "",
};

export type RatingBadge = {
  slug: string;
  name: string;
  logo: string;
};

export const ratingBadges: RatingBadge[] = [
  { slug: "facebook", name: "Facebook", logo: "/ratings/facebook-rating.webp" },
  { slug: "clutch", name: "Clutch", logo: "/ratings/clutch-rating.webp" },
  { slug: "trustpilot", name: "Trustpilot", logo: "/ratings/trustpilot.webp" },
  { slug: "google", name: "Google", logo: "/ratings/google-rating.webp" },
];

export type ContactSelectOption = {
  value: string;
  label: string;
};

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

export const heroImages: ImageAsset[] = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=75",
    alt: "Laptop with code on a bright desk",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=480&q=75",
    alt: "Developer working at a monitor",
    width: 480,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=480&q=75",
    alt: "Analytics dashboard on screen",
    width: 480,
    height: 360,
  },
];

export type ServiceSubItem = { label: string; slug: string; href: string };
export type ServiceCategory = {
  label: string;
  slug: string;
  href: string;
  description?: string;
  items: ServiceSubItem[];
};

import { getServiceNavCategories } from "@/lib/content";

/** Nav dropdown auto-generated from lib/content/categories.data.ts */
export const serviceCategories = getServiceNavCategories();

export const processSteps = [
  {
    step: "01",
    title: "Discover & Business Analysis",
    description:
      "We start by deeply understanding your business, your users, and your goals. We document functional requirements, define success metrics, and align on scope before any design or code begins.",
  },
  {
    step: "02",
    title: "Architecture & Technical Planning",
    description:
      "Our senior engineers define the system architecture, select the optimal technology stack, and create a detailed technical specification. You receive a full project plan with milestones, deliverables, timeline, and cost breakdown all agreed upfront.",
  },
  {
    step: "03",
    title: "UI/UX Design & Prototyping",
    description:
      "Our designers create wireframes and clickable prototypes that bring your product to life before development begins. You review and approve the design at every stage your feedback drives every design decision we make.",
  },
  {
    step: "04",
    title: "Agile Development in Sprints",
    description:
      "We develop your software in 2-week agile sprints, with a working demo shared at the end of each sprint. You see real progress continuously not just at the finish line.",
  },
  {
    step: "05",
    title: "Quality Assurance & Security Testing",
    description:
      "Every feature is tested across functional, performance, security, and cross-device dimensions before release. We use both manual QA and automated testing frameworks to ensure your software is production-ready and resilient.",
  },
  {
    step: "06",
    title: "Launch, Handover & Ongoing Support",
    description:
      "We manage your go-live smoothly and provide full handover documentation, code access, and team training. After launch, we offer flexible maintenance and support plans so your software evolves as your business grows.",
  },
];

export const stats = [
  { value: "250+", label: "Software projects delivered" },
  { value: "15+", label: "Countries served worldwide" },
  { value: "10+", label: "Years of development experience" },
  { value: "98%", label: "Client satisfaction rate" },
];

export const aboutSection = {
  teamLink: "/about#team",
  teamCta: "Meet our team",
  paragraphs: [
    "Software Development Company is a globally trusted software development company headquartered in Pakistan, with clients and delivery experience spanning the United States, United Kingdom, United Arab Emirates, Canada, and Australia. We were founded with one belief: that great software should be accessible to every business not just the Fortune 500.",
    "Our team of 60+ software engineers, user interface and user experience designers, quality assurance specialists, and project managers has spent over a decade turning complex business challenges into clean, efficient, and scalable digital solutions. Whether you need a mobile application for your startup, a custom enterprise resource planning system for your manufacturing business, or an enterprise software-as-a-service platform, we have built it before and we can build it for you.",
    "As a software development company that operates at the intersection of global quality and competitive pricing, Software Development Company gives international clients the best of both worlds English-speaking, timezone-flexible developers with world-class technical skills at a fraction of the cost of Western development firms.",
  ],
  values: [
    {
      title: "Proven delivery record",
      description:
        "Decade-long track record with 250+ delivered software projects across 20+ industries.",
    },
    {
      title: "Senior-only teams",
      description:
        "Senior-only development teams no junior developers on client projects.",
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
      title: "ISO-compliant processes",
      description:
        "ISO-compliant development processes and data security best practices.",
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=75",
    alt: "Professional team collaborating in a bright office space",
    width: 1000,
    height: 700,
  },
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

export const techStackIntro =
  "Modern technologies chosen for performance, scalability, and right-fit engineering. We use the tools that match your business goals not buzz.";

export const techStackTabs: TechStackTab[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["Next.js", "React.js", "Vue.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Python", "Laravel", "Django", ".NET"],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    id: "database",
    label: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    id: "cloud",
    label: "Cloud",
    items: ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Vercel"],
  },
  {
    id: "devops",
    label: "DevOps",
    items: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Linux"],
  },
  {
    id: "ai",
    label: "AI & ML",
    items: ["OpenAI API", "LangChain", "TensorFlow", "PyTorch", "Hugging Face"],
  },
];

export const techStackLogos = [
  { id: "dotnet", name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { id: "dotnetframework", name: ".NET Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { id: "csharp", name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { id: "java", name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { id: "kotlin", name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { id: "scala", name: "Scala", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
  { id: "python", name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { id: "nodejs", name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: "php", name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { id: "go", name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
  { id: "ruby", name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
  { id: "rust", name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
  
  { id: "clojure", name: "Clojure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg" },
  { id: "perl", name: "Perl", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg" },
  { id: "r", name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
  { id: "dart", name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { id: "crystal", name: "Crystal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/crystal/crystal-original.svg" },

  { id: "fortran", name: "Fortran", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fortran/fortran-original.svg" },
  { id: "html5", name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { id: "css3", name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { id: "javascript", name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { id: "typescript", name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { id: "react", name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: "redux", name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { id: "zustand", name: "Zustand", icon: "https://zustand-demo.pmnd.rs/favicon.ico" },
  { id: "nextjs", name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { id: "vuejs", name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { id: "angular", name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { id: "tailwindcss", name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { id: "bootstrap", name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { id: "sass", name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { id: "postcss", name: "PostCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postcss/postcss-original.svg" },
  { id: "docker", name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { id: "kubernetes", name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { id: "jenkins", name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { id: "gitlab", name: "GitLab CI", icon: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png" },
  { id: "github", name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { id: "terraform", name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { id: "azure", name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { id: "aws", name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { id: "gcp", name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { id: "vercel", name: "Vercel", icon: "https://vercel.com/favicon.ico" },
  { id: "postgresql", name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { id: "mysql", name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { id: "mongodb", name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { id: "redis", name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { id: "firebase", name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { id: "tensorflow", name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { id: "pytorch", name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { id: "openai", name: "OpenAI", icon: "https://openai.com/favicon.ico" },
];

/** @deprecated Used only if legacy stack UI is restored */
export type TechStackCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "sky" | "peach" | "navy" | "cream";
  technologies: Technology[];
};

export const techStackCategories: TechStackCategory[] = [];
export const allTechnologies: (Technology & { category: string })[] = [];

export type Client = {
  slug: string;
  name: string;
  logo: string;
};

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

export const projects = [
  {
    slug: "mediconnect-pro",
    title: "MediConnect Pro",
    category: "Healthcare · USA",
    description:
      "A telehealth platform connecting 12,000+ patients with licensed doctors via video consultations. Reduced patient wait times by 60% and expanded clinic reach by 300% within six months.",
    image: {
      src: "https://images.unsplash.com/photo-1535378917044-8d2e7c431f1d?auto=format&fit=crop&w=800&q=75",
      alt: "Telehealth medical platform dashboard",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "finedge-erp",
    title: "FinEdge ERP",
    category: "FinTech · UAE",
    description:
      "A comprehensive ERP system replacing five legacy tools for a mid-size financial services firm. Reduced operational overhead by 40% and achieved full regulatory compliance in the UAE.",
    image: {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=75",
      alt: "Financial dashboard for ERP software",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "retailflow-pos",
    title: "RetailFlow POS",
    category: "E-Commerce · UK",
    description:
      "A cloud-based POS and inventory management system deployed across 30 retail branches. Reduced stock discrepancies by 85% and cut checkout time by 35%.",
    image: {
      src: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=75",
      alt: "Retail point of sale software interface",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "eduspark-lms",
    title: "EduSpark LMS",
    category: "EdTech · Canada",
    description:
      "An e-learning management system serving 8,000+ students at a private university. Course completion rates increased by 45% following the platform launch.",
    image: {
      src: "https://images.unsplash.com/photo-1518976024611-48863e63e1ea?auto=format&fit=crop&w=800&q=75",
      alt: "Learning management system dashboard",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "cargotrack",
    title: "CargoTrack",
    category: "Logistics · Pakistan / UAE",
    description:
      "A real-time shipment tracking platform processing 600+ deliveries daily. Reduced customer support queries by 70% by giving clients live GPS visibility of every shipment.",
    image: {
      src: "https://images.unsplash.com/photo-1518606373137-37c89441d7b2?auto=format&fit=crop&w=800&q=75",
      alt: "Logistics tracking dashboard on screen",
      width: 1200,
      height: 750,
    },
  },
  {
    slug: "propertyhub",
    title: "PropertyHub",
    category: "Real Estate · Australia",
    description:
      "A property listing and agent CRM platform with AI-powered search recommendations. Time-on-site increased by 120% and lead generation doubled in the first quarter.",
    image: {
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=75",
      alt: "Real estate platform interface",
      width: 1200,
      height: 750,
    },
  },
];

export const teamIntro =
  "We are a tight-knit team of engineers, designers and strategists based in Islamabad, Pakistan. Small enough to care about every project. Experienced enough to handle anything from a startup MVP to an enterprise ERP. Every person on this team has been chosen for craft, communication and character.";

export const teamMembers = [
  {
    name: "Usman Tariq",
    role: "Lead Engineer",
    bio: "Full-stack engineer with 7 years building production systems in Node.js and React.",
    image: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Usman Tariq",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Sara Malik",
    role: "Head of Design",
    bio: "UI/UX designer with a background in product design for SaaS companies in the UK and Pakistan.",
    image: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Sara Malik",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Ali Hassan",
    role: "Mobile Developer",
    bio: "React Native specialist who has shipped 12 apps to the App Store and Play Store.",
    image: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Ali Hassan",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Zainab Raza",
    role: "Project Manager",
    bio: "Certified Scrum Master keeping every project on time, on budget and well-communicated.",
    image: {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Zainab Raza",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Hamza Khan",
    role: "Backend Engineer",
    bio: "Python and Laravel expert with deep experience in ERP and CRM system architecture.",
    image: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Hamza Khan",
      width: 600,
      height: 600,
    },
  },
  {
    name: "Aisha Noor",
    role: "QA Lead",
    bio: "Manual and automated testing specialist who finds every bug before your users do.",
    image: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=75",
      alt: "Portrait of Aisha Noor",
      width: 600,
      height: 600,
    },
  },
];

export const testimonials = [
  {
    quote:
      "We came to Software Development Company with a rough idea for a CRM and left with a product our entire sales team uses every single day. They were honest about what was possible, fast in delivery and thorough in testing. Exactly the software company we needed.",
    author: "Saqib Shah",
    role: "CEO, Retail Group · Lahore, Pakistan",
    image: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&q=75",
      alt: "Saqib Shah",
      width: 200,
      height: 200,
    },
  },
  {
    quote:
      "As someone who has worked with software agencies in London, Dubai and Karachi Software Development Company is right up there with the best. Their Islamabad team communicates brilliantly, ships on time and the code quality is excellent.",
    author: "Marcus Webb",
    role: "CTO, SaaS Startup · London, UK",
    image: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=75",
      alt: "Marcus Webb",
      width: 200,
      height: 200,
    },
  },
  {
    quote:
      "Our e-commerce platform was a mess before Software Development Company rebuilt it. Within six weeks we had a fast, clean store with proper JazzCash integration. Our conversion rate doubled. I refer them to every business owner I know in Pakistan.",
    author: "Zara Khan",
    role: "Founder, Fashion Brand · Karachi, Pakistan",
    image: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=96&q=75",
      alt: "Zara Khan",
      width: 200,
      height: 200,
    },
  },
];

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

export const blogPosts: BlogPost[] = [
  {
    slug: "choose-software-development-company-pakistan",
    title: "How to Choose the Right Software Development Company in Pakistan",
    excerpt:
      "There are hundreds of agencies offering software development services across Pakistan. Here is the honest framework we recommend for evaluating any software company including us.",
    date: "May 12, 2026",
    readTime: "8 min",
    category: "Software Development",
    image: {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=640&q=75",
      alt: "Team planning software project",
      width: 800,
      height: 500,
    },
    body: [
      "Choosing a software development company in Pakistan is not about picking the lowest quote or the flashiest portfolio. It is about finding a partner who will still answer the phone six months after launch.",
      "Start with delivery proof: case studies with measurable outcomes, references you can call, and code you can inspect if you have a technical advisor. Ask how they handle scope changes, who owns the IP, and what happens when timelines slip.",
      "Look for a team that writes specifications before coding, demos working software every two weeks, and documents handoff. A good software company in Islamabad should overlap with your timezone if you are in the UK or UAE and communicate in plain language.",
      "Finally, run a small paid discovery phase before committing to a six-figure build. The best firms will encourage that. It protects both sides and surfaces fit early.",
    ],
  },
  {
    slug: "discovery-structure-prevents-problems",
    title: "A little structure now prevents a lot of problems later",
    excerpt:
      "The most expensive software projects we have ever seen were not the complex ones. They were simple projects that skipped discovery. Here is what a proper discovery phase actually looks like.",
    date: "Apr 28, 2026",
    readTime: "6 min",
    category: "Product Strategy",
    image: {
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=640&q=75",
      alt: "Product discovery workshop",
      width: 800,
      height: 500,
    },
    body: [
      "Discovery is not a sales exercise. It is a short, structured phase where we map users, workflows, integrations, risks and success metrics then agree on a fixed scope and price before build.",
      "A proper discovery deliverable includes user stories, a technical architecture sketch, milestone plan, and explicit out-of-scope list. Stakeholders sign off so there is one shared truth.",
      "Skipping discovery feels faster until rework piles up: wrong database choices, missing compliance requirements, or features nobody actually uses. That is when budgets blow past PKR estimates and trust erodes.",
      "Whether you work with Software Development Company or another firm, invest in discovery. It is the cheapest insurance on any custom software project.",
    ],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
  tag: string;
  column: "left" | "right";
};

export const faqIntro =
  "Everything you need to know before starting a project with us. Still have questions? We're happy to walk you through everything on a free call.";

export const faqs: FaqItem[] = [
  {
    column: "left",
    tag: "Overview",
    question: "What does a software development company do?",
    answer:
      "A software development company designs, builds, tests, and maintains custom software products tailored to your specific business needs. This includes web applications, mobile apps, enterprise systems, SaaS platforms, APIs, and more. Unlike buying off-the-shelf software, we build exactly what your business requires from the ground up.",
  },
  {
    column: "left",
    tag: "Pricing",
    question: "How much does it cost to hire a software development company?",
    answer:
      "Software development costs vary widely based on project scope, complexity, and the team you hire. As a Pakistan-based software development company, we offer highly competitive rates compared to US or UK firms typically 40–60% lower for the same quality of work. We provide a detailed, transparent quote after a free discovery call. Projects range from PKR 150,000 for a simple MVP to PKR 3,500,000+ for enterprise platforms.",
  },
  {
    column: "left",
    tag: "Timeline",
    question: "How long does it take to build custom software?",
    answer:
      "Timelines depend on scope. A simple web app or MVP can be built in 6-10 weeks. A mid-complexity mobile application takes 3-5 months. A full enterprise software platform can take 6-12 months. We always provide a detailed timeline during the planning phase and stick to it our on-time delivery rate is 94%.",
  },
  {
    column: "left",
    tag: "Global",
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes the majority of our clients are based internationally, including the USA, UK, UAE, Canada, and Australia. We are a remote-first software development company with communication processes and timezone flexibility designed for international collaboration. We use Slack, Zoom, Jira, and Confluence to keep every client fully in the loop regardless of location.",
  },
  {
    column: "right",
    tag: "Process",
    question: "What is the difference between a software house and a software development company?",
    answer:
      "The terms are often used interchangeably. A software house typically refers to a company that builds software products as a service for other businesses. A software development company may also build its own products. We focus entirely on building custom software for our clients. We are both a software house and a software development company in the truest sense.",
  },
  {
    column: "right",
    tag: "Getting started",
    question: "Can I hire dedicated developers from your company?",
    answer:
      "Absolutely. You can hire one developer or an entire team on a dedicated basis, working exclusively on your project during business hours. Dedicated developers integrate with your existing team, follow your processes, and report directly to you. It is the most cost-effective way to scale your development capacity quickly.",
  },
  {
    column: "right",
    tag: "Quality",
    question: "How do you ensure the quality of your software?",
    answer:
      "Quality is built into every stage of our process not added at the end. We conduct code reviews, write unit and integration tests, perform manual QA testing, run automated regression testing, and carry out security audits before every release. Our QA team works in parallel with development to catch issues early, which keeps costs low and launch timelines on schedule.",
  },
  {
    column: "right",
    tag: "Legal",
    question: "Is my project idea safe with you? Do you sign NDAs?",
    answer:
      "Yes absolutely. We sign a mutual Non-Disclosure Agreement (NDA) before any project discussion begins. Your idea, your business data, and all project details are fully confidential. Our team follows strict internal data security policies and we are happy to involve your legal team in reviewing our standard NDA.",
  },
];

export const homeContact = {
  overline: "Start here",
  titleBefore: "Let's build your",
  titleEmphasis: "next big thing",
  subtext:
    "Tell us about your project. We will get back to you within 24 hours with a clear path forward: no obligation, no sales pressure.",
  emailPlaceholder: "Your email address",
  cta: "Get Started",
  reassurance: "Free consultation · No commitment · Based in Islamabad, Pakistan",
} as const;

export const footerBrand = {
  description:
    "A globally trusted software development company headquartered in Pakistan. Building software that lasts for clients in the USA, UK, UAE, Canada, Australia, and beyond.",
  copyright: "© 2026 Software Development Company. All rights reserved.",
} as const;

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Software Development", href: "/software-development" },
      { label: "Web Development", href: "/software-development/web-development" },
      { label: "Mobile Development", href: "/software-development/mobile-app-development" },
      { label: "UI/UX Design", href: "/design-ux" },
      { label: "E-Commerce Development", href: "/solutions/ecommerce" },
      { label: "AI & Automation", href: "/solutions/ai-agent" },
      { label: "Cloud & DevOps", href: "/cloud-devops" },
      { label: "QA & Testing", href: "/software-development" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "#projects" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: contactPath },
      { label: "Contact", href: contactPath },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Twitter / X", href: "https://twitter.com" },
      { label: "Clutch", href: "https://clutch.co" },
    ],
  },
];

export const footerLegal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;

export const socialLinks: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Share2 },
  { label: "GitHub", href: "https://github.com", icon: Share2 },
  { label: "Email", href: `mailto:${siteBrand.email}`, icon: Mail },
];
