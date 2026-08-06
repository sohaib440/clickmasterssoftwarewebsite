import type { MetadataRoute } from "next";

import { getAllBlogSlugs } from "@/lib/landing/blog";
import {
  getAllMainCategorySlugs,
  getAllSubCategoryParams,
  mainCategoryPath,
  subCategoryPath,
} from "@/lib/content";
import { getAllSolutionSlugs, solutionPath } from "@/lib/content/solutions";
import { getAllPakistanCitySlugs } from "@/data/cities-in-pakistan";
import { pakistanLocation } from "@/data/locations";
import {
  caseStudyDetailPath,
  getAllCaseStudySlugs,
} from "@/data/caseStudy";
import { getAllProjectSlugs, projectDetailPath } from "@/data/projects";
import { siteBrand } from "@/lib/landing/brand";

const base = siteBrand.url;

function url(path: string, priority = 0.7): MetadataRoute.Sitemap[number] {
  return {
    url: `${base}${path.startsWith("/") ? path : `/${path}`}`,
    lastModified: new Date("2026-08-05"),
    changeFrequency: "monthly",
    priority,
  };
}

/** Dynamic sitemap so new routes stay discoverable alongside the static XML index. */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/about",
    "/team",
    "/gallery",
    "/contact",
    "/faqs",
    "/blog",
    "/industries",
    "/solutions",
    "/projects",
    "/case-study",
    "/location",
    "/privacy",
    "/terms",
    pakistanLocation.href,
  ].map((path) => url(path, path === "/" ? 1 : 0.8));

  const services = getAllMainCategorySlugs().map((slug) =>
    url(mainCategoryPath(slug), 0.9)
  );
  const subs = getAllSubCategoryParams().map(({ slug, subSlug }) =>
    url(subCategoryPath(slug, subSlug), 0.8)
  );
  const solutions = getAllSolutionSlugs().map((slug) => url(solutionPath(slug), 0.8));
  const projects = getAllProjectSlugs().map((slug) => url(projectDetailPath(slug), 0.8));
  const caseStudies = getAllCaseStudySlugs().map((slug) =>
    url(caseStudyDetailPath(slug), 0.75),
  );
  const blog = getAllBlogSlugs().map((slug) => url(`/blog/${slug}`, 0.6));
  const cities = getAllPakistanCitySlugs().map((slug) => url(`/location/${slug}`, 0.7));

  return [
    ...staticPages,
    ...services,
    ...subs,
    ...solutions,
    ...projects,
    ...caseStudies,
    ...blog,
    ...cities,
  ];
}
