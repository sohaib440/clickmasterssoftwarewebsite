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
  title: "Privacy Policy",
  description: `How ${siteBrand.name} collects, uses, and protects information submitted through our website and contact forms.`,
  ...selfCanonical("/privacy"),
};

export default function PrivacyPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <MarketingShell>
        <PageBreadcrumb items={[{ label: "Privacy Policy" }]} />
        <section className="bg-white text-horizon-navy">
          <div className={cn(container, sectionPad, "max-w-3xl")}>
            <h1 className="font-heading text-3xl font-normal md:text-4xl">Privacy Policy</h1>
            <p className="mt-4 text-sm text-horizon-muted">Last updated: August 5, 2026</p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-horizon-muted">
              <p>
                {siteBrand.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy
                explains what information we collect when you use {siteBrand.url.replace("https://", "")}
                and how we use it.
              </p>
              <h2 className="font-heading text-xl text-horizon-navy">Information we collect</h2>
              <p>
                When you submit a contact or quote form, we collect the details you provide such as
                name, email, phone number, company, and project description. We also receive standard
                technical logs (IP address, browser type, pages visited) used for security and site
                reliability.
              </p>
              <h2 className="font-heading text-xl text-horizon-navy">How we use information</h2>
              <p>
                We use submitted information to respond to inquiries, prepare proposals, deliver
                services you request, and improve our website. We do not sell personal information.
              </p>
              <h2 className="font-heading text-xl text-horizon-navy">Sharing</h2>
              <p>
                We may share information with trusted processors that help us operate email, hosting,
                or analytics only as needed to run the business, and when required by law.
              </p>
              <h2 className="font-heading text-xl text-horizon-navy">Contact</h2>
              <p>
                Questions about privacy can be sent to{" "}
                <a className="text-primary underline" href={`mailto:${siteBrand.email}`}>
                  {siteBrand.email}
                </a>{" "}
                or via our{" "}
                <Link href={contactPath} className="text-primary underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </MarketingShell>
    </>
  );
}
