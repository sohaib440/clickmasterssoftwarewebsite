import type { Metadata } from "next";

import { GalleryPageContent } from "@/components/gallery/gallery-page";
import { galleryPageMeta } from "@/data/galleryPage";
import { selfCanonical } from "@/seo/canonical";

export const metadata: Metadata = {
  title: galleryPageMeta.title,
  description: galleryPageMeta.description,
  ...selfCanonical("/gallery"),
  openGraph: {
    title: galleryPageMeta.title,
    description: galleryPageMeta.description,
    type: "website",
  },
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
