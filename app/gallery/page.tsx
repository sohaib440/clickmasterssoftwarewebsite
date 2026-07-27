import type { Metadata } from "next";

import { GalleryPageContent } from "@/components/gallery/gallery-page";
import { galleryPageMeta } from "@/data/galleryPage";

export const metadata: Metadata = {
  title: galleryPageMeta.title,
  description: galleryPageMeta.description,
  openGraph: {
    title: galleryPageMeta.title,
    description: galleryPageMeta.description,
    type: "website",
  },
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
