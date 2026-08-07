import type { Metadata } from "next";

import { GalleryPageContent } from "@/components/gallery/gallery-page";
import { galleryPageMeta } from "@/data/galleryPage";
import { selfCanonical, pageTitle, pageTitleString } from "@/seo/canonical";
import { breadcrumbSchema } from "@/seo/schema";

export const metadata: Metadata = {
  title: pageTitle(galleryPageMeta.title),
  description: galleryPageMeta.description,
  ...selfCanonical("/gallery"),
  openGraph: {
    title: pageTitleString(galleryPageMeta.title),
    description: galleryPageMeta.description,
    type: "website",
  },
};

export default function GalleryPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Gallery", path: "/gallery" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <GalleryPageContent />
    </>
  );
}
