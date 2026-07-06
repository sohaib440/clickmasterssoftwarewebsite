import { defaultCategorySections } from "@/data/services";
import { defaultSubCategorySections } from "@/data/subServices";
import { contactPath, projectPath } from "@/lib/landing/constants";
import {
  getAllMainCategories,
  mainCategoryPath,
  subCategoryPath,
} from "@/lib/content";
import type { MainCategoryContent, SubCategoryPageData } from "@/lib/content/types";
import type {
  MainServicePageContent,
  SubServicePageContent,
} from "@/lib/content/service-page-types";

const defaultPrimaryCta = { label: "Get a Free Quote", href: contactPath };
const defaultSecondaryCta = { label: "See Our Work", href: projectPath };

function resolveMainSections(category: MainCategoryContent) {
  return {
    offerings: {
      title: category.sections?.offerings?.title ?? defaultCategorySections.offerings.title,
      subtitle:
        category.sections?.offerings?.subtitle ??
        defaultCategorySections.offerings.subtitle(category.label),
    },
    highlights: {
      title: category.sections?.highlights?.title ?? defaultCategorySections.highlights.title,
    },
    approach: {
      title: category.sections?.approach?.title ?? defaultCategorySections.approach.title,
    },
    related: {
      title: category.sections?.related?.title ?? defaultCategorySections.related.title,
    },
    cta: {
      title: category.sections?.cta?.title ?? defaultCategorySections.cta.title,
      description:
        category.sections?.cta?.description ??
        defaultCategorySections.cta.description(category.label),
      buttonLabel: category.sections?.cta?.buttonLabel ?? defaultCategorySections.cta.buttonLabel,
      buttonHref: category.sections?.cta?.buttonHref ?? defaultCategorySections.cta.buttonHref,
    },
  };
}

export function mapMainCategoryToServicePage(
  category: MainCategoryContent
): MainServicePageContent {
  const sections = resolveMainSections(category);
  const siblings = getAllMainCategories().filter((item) => item.slug !== category.slug);

  return {
    mainSlug: category.slug,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: category.label }],
    hero: {
      eyebrow: category.label,
      title: category.tagline,
      description: category.description,
      image: category.heroImage,
      primaryCta: defaultPrimaryCta,
      secondaryCta: defaultSecondaryCta,
    },
    offerings: {
      title: sections.offerings.title,
      subtitle: sections.offerings.subtitle,
      items: category.subCategories.map((sub) => ({
        label: sub.label,
        description: sub.description,
        href: subCategoryPath(category.slug, sub.slug),
        image: sub.image,
      })),
    },
    highlights: {
      title: sections.highlights.title,
      items: category.highlights,
    },
    approach: {
      title: sections.approach.title,
      steps: category.approach,
    },
    related:
      siblings.length > 0
        ? {
            title: sections.related.title,
            items: siblings.map((sibling) => ({
              label: sibling.label,
              tagline: sibling.tagline,
              href: mainCategoryPath(sibling.slug),
            })),
          }
        : undefined,
    cta: sections.cta,
  };
}

export function mapSubCategoryToServicePage(
  data: SubCategoryPageData
): SubServicePageContent {
  const { main, sub } = data;
  const sections = resolveMainSections(main);
  const siblings = main.subCategories.filter((item) => item.slug !== sub.slug);
  const tagline = sub.tagline ?? sub.description;
  const highlights = sub.highlights ?? main.highlights;
  const contentParagraphs =
    sub.content && sub.content.length > 0 ? sub.content : [sub.description];

  return {
    mainSlug: main.slug,
    parent: { label: main.label, href: mainCategoryPath(main.slug) },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: main.label, href: mainCategoryPath(main.slug) },
      { label: sub.label },
    ],
    hero: {
      eyebrow: main.label,
      title: sub.label,
      description: tagline,
      image: sub.image ?? main.heroImage,
      primaryCta: defaultPrimaryCta,
      secondaryCta: defaultSecondaryCta,
    },
    contentParagraphs,
    highlights: {
      title: `Why ${sub.label} with us`,
      items: highlights,
    },
    approach: {
      title: sections.approach.title,
      steps: main.approach,
    },
    relatedSubs: {
      title: `More in ${main.label}`,
      items: siblings.map((item) => ({
        label: item.label,
        description: item.description,
        href: subCategoryPath(main.slug, item.slug),
        image: item.image,
      })),
    },
    cta: {
      title: `Let's talk about ${sub.label}`,
      description: defaultSubCategorySections.cta.description(sub.label),
      buttonLabel: defaultSubCategorySections.cta.buttonLabel,
      buttonHref: defaultSubCategorySections.cta.buttonHref,
    },
  };
}
