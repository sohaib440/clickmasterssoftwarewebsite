import type { Metadata } from "next";
import Link from "next/link";

import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { siteBrand } from "@/lib/landing/brand";
import { contactPath, container, sectionPad } from "@/lib/landing/constants";
import { selfCanonical } from "@/seo/canonical";
import { breadcrumbSchema } from "@/seo/schema";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${siteBrand.name} website and related inquiries.`,
  ...selfCanonical("/terms"),
};

export default function TermsPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Terms of Service", path: "/terms" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <MarketingShell>
        <PageBreadcrumb items={[{ label: "Terms of Service" }]} />
        <section className="bg-white text-horizon-navy">
          <div className={cn(container, sectionPad, "max-w-3xl")}>
            <h1 className="font-heading text-3xl font-normal md:text-4xl">Terms of Service</h1>
            <p className="mt-4 text-sm text-horizon-muted">Last updated: August 5, 2026</p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-horizon-muted">
              <p>
                By using {siteBrand.url.replace("https://", "")}, you agree to these terms. If you do
                not agree, please do not use the site.
              </p>
              <h2 className="font-heading text-xl text-horizon-navy">Website use</h2>
              <p>
                Content on this site is for general information about our software development
                services. It does not create a client engagement until a written agreement is signed.
              </p>
              <h2 className="font-heading text-xl text-horizon-navy">Inquiries and proposals</h2>
              <p>
                Quotes and timelines shared through our{" "}
                <Link href={contactPath} className="text-primary underline">
                  contact form
                </Link>{" "}
                are estimates based on the information you provide and may change after discovery.
              </p>
              <h2 className="font-heading text-xl text-horizon-navy">Intellectual property</h2>
              <p>
                Site design, copy, logos, and project case materials remain the property of{" "}
                {siteBrand.name} or their respective owners. You may not copy or reuse them without
                permission.
              </p>
              <h2 className="font-heading text-xl text-horizon-navy">Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, {siteBrand.name} is not liable for damages
                arising from use of this website or reliance on its content alone.
              </p>
              <h2 className="font-heading text-xl text-horizon-navy">Contact</h2>
              <p>
                Questions about these terms:{" "}
                <a className="text-primary underline" href={`mailto:${siteBrand.email}`}>
                  {siteBrand.email}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </MarketingShell>
    </>
  );
}
