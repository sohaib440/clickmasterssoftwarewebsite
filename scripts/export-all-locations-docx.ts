/**
 * Generates a Word (.docx) export of:
 * 1. Main /location hub page
 * 2. Six country location pages (Pakistan, USA, Canada, Australia, UK, UAE)
 *
 * Run from project root:
 *   npm run export:locations
 *   npx tsx scripts/export-all-locations-docx.ts
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from "docx";

import { companyStats } from "../data/landing/trust";
import {
  australiaLocation,
  canadaLocation,
  locationPages,
  pakistanCities,
  pakistanLocation,
  uaeLocation,
  ukLocation,
  usaLocation,
  type LocationPageContent,
} from "../data/locations";

const SITE = "https://nextsoftwaredevelopment.com";

const HUB = {
  url: `${SITE}/location`,
  metaTitle: "Software Company Locations Worldwide | Next Soft Development",
  metaDescription:
    "Software development company serving businesses worldwide in Pakistan, the USA, UK, UAE, Canada, and Australia with web, mobile, SaaS, and AI solutions.",
  hero: {
    overline: "Locations",
    title: "Software Development Company Serving Businesses Worldwide",
    paragraphs: [
      "From our headquarters in Pakistan, we deliver software development services to startups, growing businesses, and enterprises across Pakistan, the USA, UK, UAE, Canada, and Australia.",
      "Explore our locations to see how Next Software Development supports businesses with scalable web applications, mobile apps, SaaS platforms, AI solutions, and custom software development.",
      "Serving clients locally and globally, with engineering expertise built for businesses that want to grow.",
    ],
    primaryCta: "Explore Pakistan",
    secondaryCta: "Get a Free Quote",
  },
  footprint: {
    overline: "Global footprint",
    title: "Six Live Country Pages. One Delivery Team.",
    description:
      "Start with our Pakistan HQ and easily connect with a dedicated team for the USA, UK, UAE, Canada, or Australia.",
  },
  pakistanCard: {
    badge: "Our home",
    label: "Headquarters",
    title: "Pakistan",
    description: (cityCount: number) =>
      `Headquarters and primary delivery base for HMS, ERP, mobile apps, and SaaS across ${cityCount} cities, including Islamabad, Lahore, Karachi, and every market we cover nationwide.`,
    popularCities: ["Islamabad", "Lahore", "Karachi", "Faisalabad", "Multan"],
    cta: "Open Pakistan location page",
  },
  internationalMarkets: [
    {
      name: "USA",
      href: usaLocation.href,
      blurb:
        "Product engineering for startups, SaaS companies, and mid-market teams across the United States.",
    },
    {
      name: "Canada",
      href: canadaLocation.href,
      blurb:
        "Digital products, mobile apps, and custom software for Canadian businesses and scaling startups.",
    },
    {
      name: "UK",
      href: ukLocation.href,
      blurb:
        "English-first delivery for UK SaaS, operations, healthcare, and digital product teams.",
    },
    {
      name: "Australia",
      href: australiaLocation.href,
      blurb:
        "Workflow automation, digital transformation, and custom platforms for Australian teams.",
    },
    {
      name: "UAE",
      href: uaeLocation.href,
      blurb:
        "CRM, ERP, mobile apps, and business automation for founders and operators across the UAE.",
    },
  ],
  industries: {
    overline: "Industries",
    title: "Industries we serve worldwide",
    description:
      "Software tailored to the workflows, compliance needs, and growth goals of every sector we work with, across Pakistan and global markets.",
  },
  faq: {
    overline: "Locations FAQs",
    title: "Location questions, answered",
  },
  cta: {
    title: "Ready to build with a software partner in your market?",
    description:
      "Whether you are in Pakistan, the USA, UK, UAE, Canada, or Australia, tell us about your project. We'll reply within one business day with a clear next step.",
    button: "Get a Free Quote",
  },
} as const;

function stripWiki(text: string): string {
  return String(text ?? "").replace(/\[\[([^\]]+)\]\]/g, "$1");
}

function heading(
  text: string,
  level: (typeof HeadingLevel)[keyof typeof HeadingLevel]
) {
  return new Paragraph({
    text,
    heading: level,
    spacing: { before: 280, after: 120 },
  });
}

function body(text: string, opts?: { bold?: boolean; italics?: boolean }) {
  return new Paragraph({
    spacing: { after: 100 },
    children: [
      new TextRun({
        text: stripWiki(text),
        bold: opts?.bold,
        italics: opts?.italics,
        size: 22,
      }),
    ],
  });
}

function labelValue(label: string, value: string) {
  return new Paragraph({
    spacing: { after: 80 },
    children: [
      new TextRun({ text: `${label}: `, bold: true, size: 22 }),
      new TextRun({ text: stripWiki(value), size: 22 }),
    ],
  });
}

function bullet(text: string) {
  return new Paragraph({
    spacing: { after: 60 },
    indent: { left: 360 },
    children: [new TextRun({ text: `• ${stripWiki(text)}`, size: 22 })],
  });
}

function divider() {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: {
      bottom: {
        color: "CCCCCC",
        space: 1,
        style: BorderStyle.SINGLE,
        size: 6,
      },
    },
    children: [],
  });
}

function hubBlock(): Paragraph[] {
  const cityCount = pakistanCities.length;
  const moreCities = Math.max(cityCount - HUB.pakistanCard.popularCities.length, 0);
  const blocks: Paragraph[] = [
    heading("0. Main Locations Hub", HeadingLevel.HEADING_1),
    labelValue("URL", HUB.url),
    labelValue("Path", "/location"),
    labelValue("Meta title", HUB.metaTitle),
    labelValue("Meta description", HUB.metaDescription),

    heading("Hero", HeadingLevel.HEADING_2),
    labelValue("Overline", HUB.hero.overline),
    labelValue("Title", HUB.hero.title),
    ...HUB.hero.paragraphs.map((paragraph) => body(paragraph)),
    labelValue("Primary CTA", `${HUB.hero.primaryCta} → ${pakistanLocation.href}`),
    labelValue("Secondary CTA", `${HUB.hero.secondaryCta} → /contact`),

    heading("Global footprint", HeadingLevel.HEADING_2),
    labelValue("Overline", HUB.footprint.overline),
    labelValue("Title", HUB.footprint.title),
    body(HUB.footprint.description),

    heading("Pakistan headquarters card", HeadingLevel.HEADING_2),
    labelValue("Badge", HUB.pakistanCard.badge),
    labelValue("Label", HUB.pakistanCard.label),
    labelValue("Title", HUB.pakistanCard.title),
    body(HUB.pakistanCard.description(cityCount)),
    labelValue("Image", "/locations/islamabad-headquater.png"),
  ];

  blocks.push(heading("Stats", HeadingLevel.HEADING_3));
  for (const stat of companyStats) {
    blocks.push(bullet(`${stat.value} ${stat.label}`));
  }

  blocks.push(
    heading("Popular cities", HeadingLevel.HEADING_3),
    body(
      `${HUB.pakistanCard.popularCities.join(", ")} · +${moreCities} more (${cityCount} total)`
    ),
    labelValue("CTA", `${HUB.pakistanCard.cta} → ${pakistanLocation.href}`),

    heading("International markets", HeadingLevel.HEADING_2),
  );

  for (const market of HUB.internationalMarkets) {
    blocks.push(
      body(market.name, { bold: true }),
      body(market.blurb),
      labelValue("URL", `${SITE}${market.href}`)
    );
  }

  blocks.push(
    heading("Shared sections on hub", HeadingLevel.HEADING_2),
    labelValue("Industries overline", HUB.industries.overline),
    labelValue("Industries title", HUB.industries.title),
    body(HUB.industries.description),
    body("Also includes: Trusted partners, Services, Projects, Testimonials, Team"),
    labelValue("FAQ overline", HUB.faq.overline),
    labelValue("FAQ title", HUB.faq.title),

    heading("Hub CTA", HeadingLevel.HEADING_2),
    labelValue("Title", HUB.cta.title),
    body(HUB.cta.description),
    labelValue("Button", `${HUB.cta.button} → /contact`),
    divider(),
  );

  return blocks;
}

function pageBlock(page: LocationPageContent, index: number): Paragraph[] {
  const { sections } = page;
  const blocks: Paragraph[] = [
    heading(`${index}. ${page.title}`, HeadingLevel.HEADING_1),
    labelValue("URL", `${SITE}${page.href}`),
    labelValue("Slug", page.slug),
    labelValue("Country", page.country),
    labelValue("Meta title", page.metaTitle ?? page.title),
    labelValue("Meta description", page.metaDescription ?? page.description),
  ];

  if (page.eyebrow) blocks.push(labelValue("Eyebrow", page.eyebrow));

  blocks.push(
    heading("Hero", HeadingLevel.HEADING_2),
    labelValue("Title", page.title),
    body(page.description),
  );

  if (page.descriptionSecondary) {
    blocks.push(body(page.descriptionSecondary));
  }
  if (page.descriptionTertiary) {
    blocks.push(body(page.descriptionTertiary));
  }

  blocks.push(
    heading("About", HeadingLevel.HEADING_2),
    labelValue("Title", page.about.title),
  );
  for (const p of page.about.paragraphs) {
    blocks.push(body(p));
  }

  blocks.push(
    heading("Services", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.services.overlineText),
    labelValue("Title", sections.services.title),
    body(sections.services.description),
  );
  for (const item of sections.services.items) {
    blocks.push(body(item.title, { bold: true }), body(item.description));
  }

  blocks.push(
    heading("Why choose us", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.whyChoose.overlineText),
    labelValue("Title", sections.whyChoose.title),
    body(sections.whyChoose.description),
  );
  for (const value of sections.whyChoose.values) {
    blocks.push(body(value.title, { bold: true }), body(value.description));
  }

  blocks.push(
    heading("Projects", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.projects.overlineText),
    labelValue("Title", sections.projects.title),
    body(sections.projects.description),
  );

  blocks.push(
    heading("Industries", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.industries.overlineText),
    labelValue("Title", sections.industries.title),
    body(sections.industries.description),
  );
  for (const item of sections.industries.items) {
    blocks.push(body(item.industry, { bold: true }), body(item.description));
  }

  blocks.push(
    heading("Tech stack", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.tech.overlineText),
    labelValue(
      "Title",
      sections.tech.titleItalic && !sections.tech.title.includes(sections.tech.titleItalic)
        ? `${sections.tech.title} (${sections.tech.titleItalic})`
        : sections.tech.title
    ),
    body(sections.tech.description),
  );

  blocks.push(
    heading("Process", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.process.overlineText),
    labelValue(
      "Title",
      `${sections.process.title}${sections.process.titleItalic ? ` ${sections.process.titleItalic}` : ""}`
    ),
    body(sections.process.description),
  );
  for (const step of sections.process.steps) {
    blocks.push(
      body(`${step.step}. ${step.title}`, { bold: true }),
      body(step.description)
    );
  }

  if (page.cities?.length) {
    blocks.push(heading("Cities / regions", HeadingLevel.HEADING_2));
    if (page.coverageDescription) blocks.push(body(page.coverageDescription));
    for (const city of page.cities) {
      blocks.push(
        bullet(
          `${city.city}${city.blurb ? ` — ${city.blurb}` : ""}${city.href && city.href !== "#" ? ` (${SITE}${city.href})` : " (coming soon)"}`
        )
      );
    }
  }

  if (sections.caseStudies.items.length > 0) {
    blocks.push(
      heading("Case studies", HeadingLevel.HEADING_2),
      labelValue("Overline", sections.caseStudies.overlineText),
      labelValue("Title", sections.caseStudies.title),
      body(sections.caseStudies.description),
    );
    for (const item of sections.caseStudies.items) {
      blocks.push(bullet(item.title));
    }
  }

  blocks.push(
    heading("Testimonials", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.testimonials.overlineText),
    labelValue(
      "Title",
      `${sections.testimonials.title}${sections.testimonials.titleItalic ? ` ${sections.testimonials.titleItalic}` : ""}`
    ),
    body(sections.testimonials.description),
  );
  for (const item of sections.testimonials.items) {
    blocks.push(
      body(`"${item.quote}"`),
      body(`— ${item.author}${item.role ? `, ${item.role}` : ""}`, {
        italics: true,
      })
    );
  }

  blocks.push(
    heading("Team", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.team.overlineText),
    labelValue(
      "Title",
      sections.team.titleItalic && !sections.team.title.toLowerCase().includes(sections.team.titleItalic.toLowerCase())
        ? `${sections.team.title} ${sections.team.titleItalic}`
        : sections.team.title
    ),
    body(sections.team.intro),
  );

  blocks.push(heading("FAQs", HeadingLevel.HEADING_2), body(page.faqIntro));
  for (const faq of page.faqs) {
    blocks.push(body(faq.question, { bold: true }), body(faq.answer));
  }

  blocks.push(
    heading("CTA", HeadingLevel.HEADING_2),
    labelValue("Title", page.cta.title),
    body(page.cta.description),
    labelValue("Button", `${page.cta.buttonLabel} → ${page.cta.buttonHref}`),
    divider(),
  );

  return blocks;
}

async function main() {
  const allPages: LocationPageContent[] = [...locationPages];

  const children: Paragraph[] = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
      children: [
        new TextRun({
          text: "Next Software Development Company",
          bold: true,
          size: 36,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: "Locations Hub + Country Pages — Content Export",
          size: 28,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: "Main /location · Pakistan · USA · Canada · Australia · UK · UAE",
          size: 22,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: `Generated ${new Date().toISOString().slice(0, 10)} · 1 hub + ${allPages.length} country pages`,
          size: 20,
          italics: true,
        }),
      ],
    }),
    divider(),
    heading("Table of contents", HeadingLevel.HEADING_1),
    bullet(`0. Main Locations Hub — ${HUB.url}`),
  ];

  allPages.forEach((page, i) => {
    children.push(bullet(`${i + 1}. ${page.title} — ${SITE}${page.href}`));
  });

  children.push(divider());
  children.push(...hubBlock());

  allPages.forEach((page, i) => {
    children.push(...pageBlock(page, i + 1));
  });

  const doc = new Document({
    creator: "Next Software Development Company",
    title: "Locations Hub and Country Pages Content",
    description:
      "Full content export of the main /location hub plus Pakistan, USA, Canada, Australia, UK, and UAE location pages",
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,
              right: 720,
              bottom: 720,
              left: 720,
            },
          },
        },
        children,
      },
    ],
  });

  const exportsDir = join(process.cwd(), "exports");
  mkdirSync(exportsDir, { recursive: true });

  let outPath = join(exportsDir, "Locations-Hub-and-Country-Pages-Content.docx");
  const buffer = await Packer.toBuffer(doc);

  try {
    writeFileSync(outPath, buffer);
  } catch (err) {
    const code = (err as NodeJS.ErrnoException).code;
    if (code === "EBUSY" || code === "EPERM") {
      const stamp = new Date()
        .toISOString()
        .replace(/[:.]/g, "-")
        .slice(0, 19);
      outPath = join(
        exportsDir,
        `Locations-Hub-and-Country-Pages-Content-${stamp}.docx`
      );
      writeFileSync(outPath, buffer);
      console.warn(
        "Original file is open/locked in Word. Wrote a timestamped copy instead."
      );
    } else {
      throw err;
    }
  }

  console.log(
    `Wrote 1 hub + ${allPages.length} country location pages to:\n${outPath}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
