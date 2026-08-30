/**
 * Generates a Word (.docx) export of country location pages only:
 * Pakistan, USA, Canada, Australia, UK, UAE.
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

import {
  locationPages,
  type LocationPageContent,
} from "../data/locations";

const SITE = "https://nextsoftwaredevelopment.com";

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

  if (page.coverageTitle || page.coverageDescription) {
    blocks.push(heading("Coverage", HeadingLevel.HEADING_2));
    if (page.coverageTitle) blocks.push(labelValue("Title", page.coverageTitle));
    if (page.coverageDescription) blocks.push(body(page.coverageDescription));
  }

  if (page.cities?.length) {
    blocks.push(heading("Cities / regions listed", HeadingLevel.HEADING_2));
    for (const city of page.cities) {
      blocks.push(
        bullet(
          `${city.city}${city.blurb ? ` — ${city.blurb}` : ""} (${city.href})`
        )
      );
    }
  }

  blocks.push(
    heading("Facts", HeadingLevel.HEADING_2),
    labelValue("Title", page.facts.title),
    body(page.facts.subtitle),
  );
  for (const fact of page.facts.items) {
    blocks.push(
      bullet(`${fact.value} — ${fact.label}${fact.detail ? `: ${fact.detail}` : ""}`)
    );
  }

  blocks.push(
    heading("Industries (legacy block)", HeadingLevel.HEADING_2),
    labelValue("Title", page.industries.title),
    body(page.industries.subtitle),
  );
  for (const item of page.industries.items) {
    blocks.push(bullet(`${item.title}: ${item.description}`));
  }

  blocks.push(
    heading("Services", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.services.overlineText),
    labelValue(
      "Title",
      `${sections.services.title}${sections.services.titleItalic ? ` ${sections.services.titleItalic}` : ""}`
    ),
    body(sections.services.description),
  );
  for (const item of sections.services.items) {
    blocks.push(
      bullet(
        `${item.title}${item.tag ? ` [${item.tag}]` : ""}: ${item.description}`
      )
    );
  }

  blocks.push(
    heading("Why choose us", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.whyChoose.overlineText),
    labelValue("Title", sections.whyChoose.title),
    body(sections.whyChoose.description),
  );
  for (const value of sections.whyChoose.values) {
    blocks.push(bullet(`${value.title}: ${value.description}`));
  }

  blocks.push(
    heading("Projects", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.projects.overlineText),
    labelValue("Title", sections.projects.title),
  );
  if (sections.projects.description) {
    blocks.push(body(sections.projects.description));
  }
  for (const project of page.projects.slice(0, 12)) {
    blocks.push(
      bullet(
        `${project.title}${project.category ? ` (${project.category})` : ""}`
      )
    );
  }

  blocks.push(
    heading("Industries section", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.industries.overlineText),
    labelValue("Title", sections.industries.title),
    body(sections.industries.description),
  );
  for (const item of sections.industries.items) {
    blocks.push(
      bullet(
        (item as { name?: string; title?: string }).name ??
          (item as { title?: string }).title ??
          "Industry"
      )
    );
  }

  blocks.push(
    heading("Tech stack", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.tech.overlineText),
    labelValue(
      "Title",
      `${sections.tech.title}${sections.tech.titleItalic ? ` ${sections.tech.titleItalic}` : ""}`
    ),
    body(sections.tech.description),
    body(sections.tech.intro),
  );

  blocks.push(
    heading("Process", HeadingLevel.HEADING_2),
    labelValue("Overline", sections.process.overlineText),
    labelValue(
      "Title",
      `${sections.process.title}${sections.process.titleItalic ? ` ${sections.process.titleItalic}` : ""}`
    ),
    body(sections.process.description),
    labelValue("CTA", sections.process.ctaLabel),
  );
  for (const step of sections.process.steps) {
    blocks.push(bullet(`${step.step} ${step.title}: ${step.description}`));
  }

  if (sections.caseStudies.items.length) {
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
      body(`“${item.quote}”`),
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
      `${sections.team.title}${sections.team.titleItalic ? ` ${sections.team.titleItalic}` : ""}`
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
          text: "Country Location Pages — Content Export",
          size: 28,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: "Pakistan · USA · Canada · Australia · UK · UAE",
          size: 22,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: `Generated ${new Date().toISOString().slice(0, 10)} · ${allPages.length} country pages`,
          size: 20,
          italics: true,
        }),
      ],
    }),
    divider(),
    heading("Table of contents", HeadingLevel.HEADING_1),
  ];

  allPages.forEach((page, i) => {
    children.push(bullet(`${i + 1}. ${page.title} — ${SITE}${page.href}`));
  });

  children.push(divider());

  allPages.forEach((page, i) => {
    children.push(...pageBlock(page, i + 1));
  });

  const doc = new Document({
    creator: "Next Software Development Company",
    title: "Country Location Pages Content",
    description:
      "Full content export of Pakistan, USA, Canada, Australia, UK, and UAE location pages",
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

  let outPath = join(exportsDir, "Country-Location-Pages-Content.docx");
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
      outPath = join(exportsDir, `Country-Location-Pages-Content-${stamp}.docx`);
      writeFileSync(outPath, buffer);
      console.warn(
        "Original file is open/locked in Word. Wrote a timestamped copy instead."
      );
    } else {
      throw err;
    }
  }

  console.log(`Wrote ${allPages.length} country location pages to:\n${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
