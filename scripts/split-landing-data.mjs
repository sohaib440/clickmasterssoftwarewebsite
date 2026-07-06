import fs from "fs";
import path from "path";

const root = path.resolve("data");
const src = fs.readFileSync(path.join(root, "landingPage.tsx"), "utf8");
const lines = src.split("\n");
const slice = (start, end) => lines.slice(start - 1, end).join("\n");
const dir = path.join(root, "landing");
fs.mkdirSync(dir, { recursive: true });

const write = (name, content) => {
  fs.writeFileSync(path.join(dir, name), content.trimEnd() + "\n");
  console.log("wrote", name);
};

write(
  "types.ts",
  `// Shared landing page content types

import type { LucideIcon } from "lucide-react";

${slice(7, 16)}

${slice(81, 96)}

${slice(127, 178)}

${slice(285, 305)}

${slice(664, 681)}

${slice(958, 967)}

${slice(1035, 1041)}
`
);

write(
  "navigation.ts",
  `import type { LucideIcon } from "lucide-react";
import { Mail, Share2 } from "lucide-react";

import { siteBrand } from "@/lib/landing/brand";
import {
  aboutPath,
  caseStudyPath,
  contactPath,
  industriesPath,
  projectPath,
} from "@/lib/landing/constants";

import type { NavChild, NavLink } from "./types";

export type { NavChild, NavLink };

${slice(18, 40)}

${slice(1115, 1165)}
`
);

write(
  "hero.ts",
  `import { BarChart3, Rocket, Shield } from "lucide-react";

import { projectPath } from "@/lib/landing/constants";

import type { HeroImageAsset } from "./types";

export type { HeroImageAsset };

${slice(48, 74)}

${slice(148, 170)}
`
);

write(
  "contact.ts",
  `import { siteBrand } from "@/lib/landing/brand";

import type { ContactFormData, ContactSelectOption } from "./types";

export type { ContactFormData, ContactSelectOption };

${slice(41, 47)}

${slice(99, 126)}

${slice(1104, 1113)}
`
);

write(
  "trust.ts",
  `import type { Client, RatingBadge } from "./types";

export type { Client, RatingBadge };

${slice(75, 80)}

${slice(87, 93)}

${slice(230, 236)}

${slice(676, 700)}
`
);

write(
  "about.ts",
  `import { aboutPath } from "@/lib/landing/constants";

${slice(237, 284)}
`
);

write(
  "process.ts",
  `${slice(185, 229)}
`
);

write(
  "services-nav.ts",
  `import { getServiceNavCategories } from "@/lib/content";

/** Nav dropdown auto-generated from data/services.tsx via lib/content */
export const serviceCategories = getServiceNavCategories();
`
);

write(
  "tech-stack.ts",
  `import type { LucideIcon } from "lucide-react";

import type {
  TechStackCategory,
  TechStackLogo,
  TechStackLogoGroup,
  TechStackTab,
  Technology,
} from "./types";

export type {
  TechStackCategory,
  TechStackLogo,
  TechStackLogoGroup,
  TechStackTab,
  Technology,
};

${slice(296, 298)}

${slice(306, 435)}

${slice(436, 545)}

${slice(546, 663)}
`
);

write(
  "projects.ts",
  `import type { ImageAsset } from "./types";

export type { ImageAsset };

${slice(701, 846)}
`
);

write(
  "team.ts",
  `${slice(847, 918)}
`
);

write(
  "testimonials.ts",
  `${slice(919, 957)}
`
);

write(
  "blog.ts",
  `import type { BlogPost, ImageAsset } from "./types";

export type { BlogPost };

${slice(969, 1034)}
`
);

write(
  "faq.ts",
  `import type { FaqItem } from "./types";

export type { FaqItem };

${slice(1042, 1103)}
`
);

write(
  "index.ts",
  `/** Landing page content — split by domain; import from @/data/landingPage or @/data/landing */

export * from "./types";
export * from "./navigation";
export * from "./hero";
export * from "./contact";
export * from "./trust";
export * from "./about";
export * from "./process";
export * from "./services-nav";
export * from "./tech-stack";
export * from "./projects";
export * from "./team";
export * from "./testimonials";
export * from "./blog";
export * from "./faq";
`
);

write(
  path.join(root, "landingPage.ts"),
  `/**
 * @deprecated Import from \`@/data/landing\` for new code.
 * This barrel preserves backward compatibility with existing imports.
 */
export * from "./landing";
`
);

console.log("done");
