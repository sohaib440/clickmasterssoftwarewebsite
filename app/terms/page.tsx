import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { siteBrand } from "@/lib/landing/brand";
import { contactPath, container, sectionPad } from "@/lib/landing/constants";
import { selfCanonical, pageTitle, pageTitleString } from "@/seo/canonical";
import { breadcrumbSchema } from "@/seo/schema";
import { cn } from "@/lib/utils";

const siteHost = siteBrand.url.replace("https://", "");

export const metadata: Metadata = {
  title: pageTitle("Terms of Service"),
  description: `Terms of Service for ${siteBrand.name}: website use, inquiries, proposals, intellectual property, liability, and governing law for international clients.`,
  ...selfCanonical("/terms"),
  openGraph: {
    title: pageTitleString("Terms of Service"),
    description: `Terms governing use of ${siteHost} and related inquiries to ${siteBrand.name}.`,
    type: "website",
  },
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-3">
      <h2 className="font-heading text-xl text-horizon-navy md:text-2xl">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

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
            <p className="mt-4 text-sm text-horizon-muted">Last updated: August 7, 2026</p>
            <p className="mt-6 text-base leading-relaxed text-horizon-muted">
              These Terms of Service (&quot;Terms&quot;) govern access to and use of{" "}
              {siteHost} and related marketing pages operated by {siteBrand.name} (&quot;we&quot;,
              &quot;us&quot;), based in {siteBrand.location}. By using the site you agree to these
              Terms. If you do not agree, do not use the site.
            </p>
            <p className="mt-3 text-base leading-relaxed text-horizon-muted">
              These Terms cover the website and pre-engagement inquiries. Paid software development
              work is governed by a separate written agreement (proposal, statement of work, or
              master services agreement). If there is a conflict, the signed client agreement
              controls for that engagement.
            </p>

            <nav
              aria-label="Terms sections"
              className="mt-8 rounded-xl border border-horizon-border/80 bg-horizon-cream/40 p-4 text-sm"
            >
              <p className="font-medium text-horizon-navy">On this page</p>
              <ul className="mt-2 grid gap-1 text-horizon-muted sm:grid-cols-2">
                {[
                  ["acceptance", "Acceptance"],
                  ["website-use", "Website use"],
                  ["no-engagement", "No automatic engagement"],
                  ["inquiries", "Inquiries & proposals"],
                  ["accounts-conduct", "Conduct"],
                  ["ip", "Intellectual property"],
                  ["third-party", "Third-party links"],
                  ["disclaimer", "Disclaimer"],
                  ["liability", "Limitation of liability"],
                  ["indemnity", "Indemnity"],
                  ["privacy", "Privacy"],
                  ["governing-law", "Governing law"],
                  ["changes", "Changes"],
                  ["contact", "Contact"],
                ].map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-primary underline-offset-2 hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 space-y-10 text-base leading-relaxed text-horizon-muted">
              <Section id="acceptance" title="1. Acceptance of terms">
                <p>
                  By browsing {siteHost}, submitting a form, or contacting us through channels listed
                  on the site, you confirm you are at least 18 years old (or the age of majority in
                  your jurisdiction) and have authority to accept these Terms on behalf of yourself
                  or the organization you represent.
                </p>
              </Section>

              <Section id="website-use" title="2. Website use">
                <p>
                  The site provides general information about our software house services—including
                  custom software, HMS, ERP, web and mobile products, and related delivery. Content
                  may change without notice. You may use the site for lawful, non-abusive purposes
                  only. You must not:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Attempt to disrupt, scrape at abusive scale, or reverse-engineer the site</li>
                  <li>Introduce malware or attempt unauthorized access to our systems</li>
                  <li>Misrepresent your identity or affiliation when contacting us</li>
                  <li>Use the site to send spam or unlawful content</li>
                </ul>
              </Section>

              <Section id="no-engagement" title="3. No automatic client engagement">
                <p>
                  Visiting the site, reading case studies, or sending an inquiry does{" "}
                  <strong className="font-medium text-horizon-navy">not</strong> create a
                  client–vendor relationship, fiduciary duty, or obligation for us to perform work.
                  An engagement begins only when both parties sign a written agreement covering
                  scope, fees, and terms.
                </p>
              </Section>

              <Section id="inquiries" title="4. Inquiries, quotes & proposals">
                <p>
                  Information you submit through our{" "}
                  <Link href={contactPath} className="text-primary underline">
                    contact form
                  </Link>{" "}
                  or email is used to evaluate fit and respond. Any timelines, prices, tech
                  recommendations, or &quot;fixed&quot; quotes shared before a signed agreement are{" "}
                  <strong className="font-medium text-horizon-navy">estimates</strong> based on the
                  information available at the time. Scope, assumptions, and commercial terms may
                  change after discovery.
                </p>
                <p>
                  You are responsible for the accuracy of information you provide. We may decline or
                  discontinue conversations at our discretion (for example, out-of-scope requests,
                  conflicts, or abusive conduct).
                </p>
              </Section>

              <Section id="accounts-conduct" title="5. International clients & communications">
                <p>
                  We communicate primarily in English and collaborate remotely with clients in
                  Pakistan and overseas markets. You are responsible for complying with export,
                  sanctions, and local laws that apply to your use of our site and any materials you
                  send us. Do not upload regulated health, payment-card, or classified data through
                  marketing forms.
                </p>
              </Section>

              <Section id="ip" title="6. Intellectual property">
                <p>
                  Unless otherwise stated, the site&apos;s design, text, graphics, logos, videos, and
                  compilation of content are owned by {siteBrand.name} or used under license. Case
                  studies and project screenshots may describe client work; client trademarks remain
                  their owners&apos;. You may not copy, modify, distribute, or commercially exploit
                  site materials without our prior written permission, except for fair personal
                  viewing or sharing a link to a public page.
                </p>
                <p>
                  Ownership of custom software delivered under a client contract is defined in that
                  contract—not by these website Terms.
                </p>
              </Section>

              <Section id="third-party" title="7. Third-party links & tools">
                <p>
                  The site may link to third-party sites (for example social profiles, review
                  platforms, or vendor documentation) or load third-party scripts such as Google Tag
                  Manager. We are not responsible for third-party content, policies, or availability.
                  Your use of third-party services is governed by their terms.
                </p>
              </Section>

              <Section id="disclaimer" title="8. Disclaimer of warranties">
                <p>
                  The website and its content are provided on an &quot;as is&quot; and &quot;as
                  available&quot; basis. To the fullest extent permitted by law, we disclaim
                  warranties of merchantability, fitness for a particular purpose, and
                  non-infringement regarding the site. We do not warrant that the site will be
                  uninterrupted, error-free, or free of harmful components.
                </p>
              </Section>

              <Section id="liability" title="9. Limitation of liability">
                <p>
                  To the fullest extent permitted by applicable law, {siteBrand.name} and its
                  directors, employees, and agents will not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of profits, data, or
                  goodwill, arising from (a) your use of or inability to use the site, (b) reliance
                  on site content alone, or (c) unauthorized access to or alteration of your
                  transmissions—whether based on warranty, contract, tort, or any other legal theory.
                </p>
                <p>
                  Our aggregate liability arising out of these Terms or use of the website will not
                  exceed USD 100 (or equivalent). Some jurisdictions do not allow certain
                  limitations; in those cases our liability is limited to the maximum extent
                  permitted by law. Liability for paid project work is governed by the applicable
                  client agreement.
                </p>
              </Section>

              <Section id="indemnity" title="10. Indemnity">
                <p>
                  You agree to defend and indemnify {siteBrand.name} against claims, damages, losses,
                  and expenses (including reasonable legal fees) arising from your misuse of the
                  site, your violation of these Terms, or your infringement of another party&apos;s
                  rights in connection with content you submit.
                </p>
              </Section>

              <Section id="privacy" title="11. Privacy">
                <p>
                  Personal data collected through the site is handled as described in our{" "}
                  <Link href="/privacy" className="text-primary underline">
                    Privacy Policy
                  </Link>
                  , including use of Google Tag Manager and contact-form processing. By using the
                  site you acknowledge that policy.
                </p>
              </Section>

              <Section id="governing-law" title="12. Governing law & disputes">
                <p>
                  These Terms are governed by the laws of Pakistan, without regard to conflict-of-law
                  rules. Courts in Islamabad, Pakistan shall have exclusive jurisdiction over
                  disputes arising from these Terms or the website, unless mandatory consumer
                  protections in your country require otherwise. International clients may agree
                  different dispute terms in a signed services contract.
                </p>
              </Section>

              <Section id="changes" title="13. Changes">
                <p>
                  We may revise these Terms at any time by posting an updated version on this page
                  and changing the &quot;Last updated&quot; date. Continued use of the site after
                  changes constitutes acceptance of the revised Terms.
                </p>
              </Section>

              <Section id="contact" title="14. Contact">
                <p>
                  Questions about these Terms:{" "}
                  <a className="text-primary underline" href={`mailto:${siteBrand.email}`}>
                    {siteBrand.email}
                  </a>
                  , phone {siteBrand.phone}, or{" "}
                  <Link href={contactPath} className="text-primary underline">
                    contact us
                  </Link>
                  . Business location: {siteBrand.location}.
                </p>
              </Section>
            </div>
          </div>
        </section>
      </MarketingShell>
    </>
  );
}
