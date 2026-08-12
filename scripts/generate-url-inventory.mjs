/**
 * Builds site-url-inventory.xlsx from public sitemap XML files.
 * Run: node scripts/generate-url-inventory.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const outFile = path.join(root, "site-url-inventory.xlsx");
const outFileAlt = path.join(root, "site-url-inventory-updated.xlsx");

const PAGE_SITEMAPS = [
  { file: "sitemap_pages.xml", category: "Core Pages" },
  { file: "sitemap_services.xml", category: "Services (Main)" },
  { file: "sitemap_subservices.xml", category: "Services (Sub)" },
  { file: "sitemap_solutions.xml", category: "Solutions" },
  { file: "sitemap_projects.xml", category: "Projects" },
  { file: "sitemap_case_studies.xml", category: "Case Studies" },
  { file: "sitemap_locations.xml", category: "Locations (Country)" },
  { file: "sitemap_citiesofpakistan.xml", category: "Locations (Cities)" },
  { file: "sitemap_blog.xml", category: "Blog" },
];

const MEDIA_SITEMAPS = [
  { file: "sitemap_images.xml", category: "Images" },
  { file: "sitemap_videos.xml", category: "Videos" },
];

function titleCase(value) {
  return value
    .split(/[\s-_]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function friendlyName(url, category) {
  const pathname = new URL(url).pathname.replace(/\/$/, "") || "/";

  if (pathname === "/") return "Homepage";

  const staticNames = {
    "/about": "About Us",
    "/team": "Our Team",
    "/gallery": "Gallery",
    "/contact": "Contact Us",
    "/faqs": "FAQs",
    "/industries": "Industries",
    "/case-study": "Case Studies Index",
    "/projects": "Projects Index",
    "/blog": "Blog Index",
    "/solutions": "Solutions Index",
    "/location": "Locations Index",
    "/privacy": "Privacy Policy",
    "/terms": "Terms & Conditions",
  };
  if (staticNames[pathname]) return staticNames[pathname];

  const cityMatch = pathname.match(
    /^\/location\/software-house-and-software-company-in-(.+)$/
  );
  if (cityMatch) {
    const city = titleCase(cityMatch[1].replace(/-/g, " "));
    return `Software House in ${city}`;
  }

  if (pathname.startsWith("/location/")) {
    return titleCase(pathname.replace("/location/", "").replace(/-/g, " "));
  }

  if (pathname.startsWith("/blog/")) {
    return titleCase(pathname.replace("/blog/", "").replace(/-/g, " "));
  }

  if (pathname.startsWith("/projects/")) {
    return `Project — ${titleCase(pathname.replace("/projects/", "").replace(/-/g, " "))}`;
  }

  if (pathname.startsWith("/case-study/")) {
    return `Case Study — ${titleCase(pathname.replace("/case-study/", "").replace(/-/g, " "))}`;
  }

  if (pathname.startsWith("/solutions/")) {
    return `Solution — ${titleCase(pathname.replace("/solutions/", "").replace(/-/g, " "))}`;
  }

  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 2) {
    const [main, sub] = parts;
    return `${titleCase(main.replace(/-/g, " "))} — ${titleCase(sub.replace(/-/g, " "))}`;
  }

  if (parts.length === 1) {
    return titleCase(parts[0].replace(/-/g, " "));
  }

  return titleCase(pathname.replace(/^\//, "").replace(/\//g, " — "));
}

function normalizeUpdateFreq(raw) {
  const map = {
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly",
    yearly: "Yearly",
  };
  return map[raw?.toLowerCase()] ?? titleCase(raw ?? "Monthly");
}

function parseSitemap(filePath) {
  const xml = fs.readFileSync(filePath, "utf8");
  const urls = [];
  const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) ?? [];

  for (const block of urlBlocks) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    if (!loc) continue;

    const priority = block.match(/<priority>([^<]+)<\/priority>/)?.[1]?.trim() ?? "";
    const changefreq =
      block.match(/<changefreq>([^<]+)<\/changefreq>/)?.[1]?.trim() ?? "monthly";
    const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? "";

    urls.push({ loc, priority, changefreq, lastmod });
  }

  return urls;
}

function buildRows(sitemapDefs, type) {
  const rows = [];

  for (const { file, category } of sitemapDefs) {
    const filePath = path.join(publicDir, file);
    if (!fs.existsSync(filePath)) {
      console.warn(`Skip missing: ${file}`);
      continue;
    }

    const entries = parseSitemap(filePath);
    for (const entry of entries) {
      rows.push({
        "#": rows.length + 1,
        Type: type,
        Category: category,
        Name: friendlyName(entry.loc, category),
        URL: entry.loc,
        Priority: entry.priority,
        "Update Frequency": normalizeUpdateFreq(entry.changefreq),
        "Last Modified": entry.lastmod,
        "Sitemap Source": file,
      });
    }
  }

  return rows;
}

const pageRows = buildRows(PAGE_SITEMAPS, "Page");
const mediaRows = buildRows(MEDIA_SITEMAPS, "Media");
const allRows = [...pageRows, ...mediaRows];

// Re-number after merge
allRows.forEach((row, i) => {
  row["#"] = i + 1;
});

const categoryCounts = {};
for (const row of allRows) {
  categoryCounts[row.Category] = (categoryCounts[row.Category] ?? 0) + 1;
}

const summaryRows = [
  { Metric: "Site", Value: "https://nextsoftwaredevelopment.com" },
  { Metric: "Generated On", Value: new Date().toISOString().slice(0, 10) },
  { Metric: "Total URLs", Value: allRows.length },
  { Metric: "Page URLs", Value: pageRows.length },
  { Metric: "Media URLs", Value: mediaRows.length },
  { Metric: "", Value: "" },
  { Metric: "Category", Value: "URL Count" },
  ...Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([category, count]) => ({ Metric: category, Value: count })),
  { Metric: "", Value: "" },
  { Metric: "Update Frequency", Value: "URL Count" },
  ...Object.entries(
    allRows.reduce((acc, row) => {
      acc[row["Update Frequency"]] = (acc[row["Update Frequency"]] ?? 0) + 1;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .map(([freq, count]) => ({ Metric: freq, Value: count })),
];

const wb = XLSX.utils.book_new();
const wsAll = XLSX.utils.json_to_sheet(allRows);
const wsSummary = XLSX.utils.json_to_sheet(summaryRows);
const wsPages = XLSX.utils.json_to_sheet(pageRows.map((r, i) => ({ ...r, "#": i + 1 })));

XLSX.utils.book_append_sheet(wb, wsSummary, "Summary");
XLSX.utils.book_append_sheet(wb, wsAll, "All URLs");
XLSX.utils.book_append_sheet(wb, wsPages, "Pages Only");

wsAll["!cols"] = [
  { wch: 5 },
  { wch: 8 },
  { wch: 22 },
  { wch: 55 },
  { wch: 75 },
  { wch: 10 },
  { wch: 16 },
  { wch: 14 },
  { wch: 28 },
];

try {
  XLSX.writeFile(wb, outFile);
  console.log(`Created ${outFile}`);
} catch (err) {
  if (err && (err.code === "EBUSY" || err.code === "EPERM")) {
    XLSX.writeFile(wb, outFileAlt);
    console.log(`Primary file locked — created ${outFileAlt}`);
  } else {
    throw err;
  }
}

console.log(`Total URLs: ${allRows.length} (${pageRows.length} pages + ${mediaRows.length} media)`);
