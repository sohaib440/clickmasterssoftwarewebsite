import type { Metadata } from "next";

import { SoftwareDevelopmentJsonLd } from "@/components/seo/software-development-json-ld";
import { SoftwareDevelopmentPage } from "@/components/services/software-development-page";
import { softwareDevelopmentMeta } from "@/data/softwareDevelopmentPage";

export const metadata: Metadata = {
  title: {
    absolute: softwareDevelopmentMeta.title,
  },
  description: softwareDevelopmentMeta.description,
  openGraph: {
    title: softwareDevelopmentMeta.title,
    description: softwareDevelopmentMeta.description,
    type: "website",
    locale: "en_PK",
  },
};

export default function SoftwareDevelopmentRoute() {
  return (
    <>
      <SoftwareDevelopmentJsonLd />
      <SoftwareDevelopmentPage />
    </>
  );
}
