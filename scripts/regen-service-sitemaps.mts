import { writeFileSync } from "fs";
import { mainCategories } from "../data/services";

const base = "https://nextsoftwaredevelopment.com";
const lastmod = "2026-08-05";

function urlEntry(loc: string, priority: string) {
  return [
    "  <url>",
    `    <loc>${base}${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    "    <changefreq>monthly</changefreq>",
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

const servicesXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  "",
  "  <!-- Main service category pages -->",
  ...mainCategories.map((c) => urlEntry(`/${c.slug}`, "0.9")),
  "",
  "</urlset>",
  "",
].join("\n");

const subsXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  "",
  ...mainCategories.flatMap((c) => [
    `  <!-- ${c.label} sub-services -->`,
    ...c.subCategories.map((s) => urlEntry(`/${c.slug}/${s.slug}`, "0.8")),
    "",
  ]),
  "</urlset>",
  "",
].join("\n");

writeFileSync("public/sitemap_services.xml", servicesXml);
writeFileSync("public/sitemap_subservices.xml", subsXml);

console.log(
  "wrote",
  mainCategories.length,
  "services and",
  mainCategories.reduce((n, c) => n + c.subCategories.length, 0),
  "subs",
);
