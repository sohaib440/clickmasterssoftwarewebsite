import type { LucideIcon } from "lucide-react";

import type {
  TechStackCategory,
  TechStackLogoGroup,
  TechStackTab,
  Technology,
} from "./types";

export type {
  TechStackCategory,
  TechStackLogoGroup,
  TechStackTab,
  Technology,
};

export const techStackIntro =
  "We engineer across the full software delivery spectrum from pixel-perfect interfaces and resilient APIs to data platforms, cloud infrastructure, and production AI. Every technology below reflects real project experience: selected for performance, security, team velocity, and long-term maintainability at scale.";


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
