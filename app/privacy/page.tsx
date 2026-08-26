import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { siteBrand, sitePhoneTel } from "@/lib/landing/brand";
import { contactPath, container, sectionPad } from "@/lib/landing/constants";
import { selfCanonical, pageTitle, pageTitleString } from "@/seo/canonical";
import { breadcrumbSchema } from "@/seo/schema";
import { cn } from "@/lib/utils";

const siteHost = siteBrand.url.replace("https://", "");

export const metadata: Metadata = {
  title: pageTitle("Privacy Policy"),
  description: `Privacy Policy for ${siteBrand.name}: how we collect, use, store, and protect personal data from our website, contact forms, Google Tag Manager, and international client inquiries.`,
  ...selfCanonical("/privacy"),
  openGraph: {
    title: pageTitleString("Privacy Policy"),
    description: `How ${siteBrand.name} handles personal data, cookies, analytics, and contact-form submissions.`,
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
            <p className="mt-4 text-sm text-horizon-muted">Last updated: August 7, 2026</p>
            <p className="mt-6 text-base leading-relaxed text-horizon-muted">
              This Privacy Policy explains how {siteBrand.name} (&quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;), headquartered in {siteBrand.location}, collects, uses, stores, shares,
              and protects personal information when you visit {siteHost}, submit a contact or quote
              form, email us, or otherwise interact with our marketing site and related services.
            </p>
            <p className="mt-3 text-base leading-relaxed text-horizon-muted">
              We serve clients in Pakistan and internationally (including the United States, United
              Kingdom, United Arab Emirates, Canada, and Australia). This policy is written to give
              clear notice of our practices for visitors and prospects in those markets. It is not
              legal advice. Client engagements may be governed by a separate written agreement with
              additional confidentiality or data-processing terms.
            </p>

            <nav
              aria-label="Privacy policy sections"
              className="mt-8 rounded-xl border border-horizon-border/80 bg-horizon-cream/40 p-4 text-sm"
            >
              <p className="font-medium text-horizon-navy">On this page</p>
              <ul className="mt-2 grid gap-1 text-horizon-muted sm:grid-cols-2">
                {[
                  ["who-we-are", "Who we are"],
                  ["data-we-collect", "Information we collect"],
                  ["how-we-use", "How we use information"],
                  ["cookies-gtm", "Cookies, GTM & analytics"],
                  ["forms", "Contact & quote forms"],
                  ["sharing", "Sharing & processors"],
                  ["transfers", "International transfers"],
                  ["retention", "Retention"],
                  ["security", "Security"],
                  ["your-rights", "Your rights"],
                  ["children", "Children"],
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
              <Section id="who-we-are" title="1. Who we are">
                <p>
                  Controller of personal data collected through this website:{" "}
                  <strong className="font-medium text-horizon-navy">{siteBrand.legalName}</strong>,{" "}
                  {siteBrand.location}.
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Website:{" "}
                    <a className="text-primary underline" href={siteBrand.url}>
                      {siteHost}
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a className="text-primary underline" href={`mailto:${siteBrand.email}`}>
                      {siteBrand.email}
                    </a>
                  </li>
                  <li>
                    Phone:{" "}
                    <a className="text-primary underline" href={sitePhoneTel}>
                      {siteBrand.phone}
                    </a>
                  </li>
                </ul>
              </Section>

              <Section id="data-we-collect" title="2. Information we collect">
                <p>
                  <strong className="font-medium text-horizon-navy">Information you provide.</strong>{" "}
                  When you use our contact, quote, or related forms, or email us, we may collect:
                  name, email address, phone or messaging contact, company name, project type,
                  budget or timeline preferences, message content, and any files or details you
                  voluntarily include.
                </p>
                <p>
                  <strong className="font-medium text-horizon-navy">
                    Technical and usage information.
                  </strong>{" "}
                  Like most websites, we and our providers may process IP address, approximate
                  location derived from IP, browser and device type, referring URL, pages viewed,
                  timestamps, and similar diagnostics used for security, performance, and analytics.
                </p>
                <p>
                  <strong className="font-medium text-horizon-navy">
                    Cookies and similar technologies.
                  </strong>{" "}
                  See{" "}
                  <a href="#cookies-gtm" className="text-primary underline">
                    Cookies, Google Tag Manager & analytics
                  </a>{" "}
                  below.
                </p>
                <p>
                  We do not knowingly require sensitive personal data (such as health, biometric, or
                  government ID data) through marketing forms. Please do not submit that information
                  in a public inquiry form.
                </p>
              </Section>

              <Section id="how-we-use" title="3. How we use information">
                <p>We use personal information to:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Respond to inquiries and schedule discovery or sales conversations</li>
                  <li>Prepare estimates, proposals, and statements of work</li>
                  <li>Provide and improve our website, content, and lead-handling processes</li>
                  <li>Measure marketing performance (including via Google Tag Manager)</li>
                  <li>Protect the site against abuse, spam, and security incidents</li>
                  <li>Comply with legal obligations and enforce our Terms of Service</li>
                </ul>
                <p className="mt-3">
                  We do <strong className="font-medium text-horizon-navy">not sell</strong> personal
                  information. We do not use form submissions for unrelated third-party advertising
                  lists.
                </p>
              </Section>

              <Section id="cookies-gtm" title="4. Cookies, Google Tag Manager & analytics">
                <p>
                  This website loads <strong className="font-medium text-horizon-navy">Google Tag Manager</strong>{" "}
                  (container ID <code className="text-sm text-horizon-navy">GTM-MQ5RN57R</code>). GTM
                  may deploy tags that set or read cookies and similar identifiers for analytics,
                  conversion measurement, and marketing performance. Those tags may be provided by
                  Google and/or other vendors configured in our GTM workspace.
                </p>
                <p>
                  Cookies and similar technologies may be used to:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Keep the site secure and remember basic preferences</li>
                  <li>Understand how visitors use pages (traffic, engagement, referral sources)</li>
                  <li>Measure whether marketing campaigns and forms perform as intended</li>
                </ul>
                <p>
                  You can control cookies through your browser settings (block, delete, or limit
                  third-party cookies). Blocking some cookies may affect analytics accuracy or certain
                  site features. Where required by local law, we will update this policy and our
                  on-site notices if we introduce a consent banner or additional tracking.
                </p>
                <p>
                  For Google&apos;s own practices, see{" "}
                  <a
                    className="text-primary underline"
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Privacy Policy
                  </a>
                  .
                </p>
              </Section>

              <Section id="forms" title="5. Contact & quote forms">
                <p>
                  Submissions through our{" "}
                  <Link href={contactPath} className="text-primary underline">
                    contact / quote forms
                  </Link>{" "}
                  are processed so our team can reply—typically within one business day. Messages may
                  be transmitted by email and stored in our business inboxes, CRM, or project tools.
                </p>
                <p>
                  By submitting a form you confirm the information is accurate and that you have
                  authority to share any business details included. Do not submit passwords, payment
                  card numbers, or confidential source code through marketing forms.
                </p>
              </Section>

              <Section id="sharing" title="6. Sharing & processors">
                <p>
                  We may share personal information with service providers who help us operate the
                  business, under obligations to use the data only for their contracted purpose. These
                  may include:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Website hosting and content delivery</li>
                  <li>Email delivery and inbox providers</li>
                  <li>Analytics and tag management (including Google via GTM)</li>
                  <li>Collaboration or CRM tools used to handle leads and projects</li>
                </ul>
                <p>
                  We may also disclose information if required by law, regulation, legal process, or
                  governmental request, or to protect the rights, safety, and security of{" "}
                  {siteBrand.name}, our users, or the public.
                </p>
              </Section>

              <Section id="transfers" title="7. International transfers">
                <p>
                  We are based in Pakistan and work with clients and vendors in multiple countries.
                  Personal data you submit may be processed in Pakistan and in other countries where
                  our team or processors operate (for example, where cloud or email providers host
                  data). Those countries may have different data-protection laws than your home
                  country.
                </p>
                <p>
                  Where we transfer personal data internationally, we take steps appropriate to the
                  context—such as using reputable providers, access controls, and contractual
                  confidentiality—to protect the information.
                </p>
              </Section>

              <Section id="retention" title="8. Retention">
                <p>
                  We keep inquiry and related records for as long as needed to respond to you, manage
                  a potential or active engagement, meet accounting or legal requirements, and resolve
                  disputes. Marketing analytics data is retained according to our analytics
                  providers&apos; settings and our operational needs. When retention is no longer
                  necessary, we delete or anonymize data where practical.
                </p>
              </Section>

              <Section id="security" title="9. Security">
                <p>
                  We use reasonable administrative and technical measures to protect personal
                  information (for example, access-limited inboxes, HTTPS on our website, and
                  provider security controls). No method of transmission or storage is 100% secure. If
                  you believe your interaction with us has been compromised, contact us promptly.
                </p>
              </Section>

              <Section id="your-rights" title="10. Your rights">
                <p>
                  Depending on where you live, you may have rights to request access to, correction
                  of, deletion of, or restriction on processing of your personal information, or to
                  object to certain processing, and to lodge a complaint with a supervisory authority.
                </p>
                <p>
                  To exercise a privacy request, email{" "}
                <a className="text-primary underline" href={`mailto:${siteBrand.email}`}>
                  {siteBrand.email}
                </a>{" "}
                  with the subject line &quot;Privacy request&quot; and enough detail for us to verify
                  and respond. We may need to confirm your identity before completing certain
                  requests.
                </p>
              </Section>

              <Section id="children" title="11. Children">
                <p>
                  Our website and services are directed to businesses and adults. We do not knowingly
                  collect personal information from children under 16. If you believe a child has
                  provided us data, contact us and we will take appropriate steps to delete it.
                </p>
              </Section>

              <Section id="changes" title="12. Changes to this policy">
                <p>
                  We may update this Privacy Policy from time to time. The &quot;Last updated&quot;
                  date at the top will change when we do. Continued use of the site after an update
                  means you acknowledge the revised policy. Material changes may also be highlighted
                  on the site or by email where appropriate.
                </p>
              </Section>

              <Section id="contact" title="13. Contact">
                <p>
                  Privacy questions or requests:{" "}
                  <a className="text-primary underline" href={`mailto:${siteBrand.email}`}>
                    {siteBrand.email}
                  </a>
                  , phone{" "}
                  <a className="text-primary underline" href={sitePhoneTel}>
                    {siteBrand.phone}
                  </a>
                  , or our{" "}
                <Link href={contactPath} className="text-primary underline">
                  contact page
                </Link>
                  . Postal / office location: {siteBrand.location}.
                </p>
                <p>
                  Related:{" "}
                  <Link href="/terms" className="text-primary underline">
                    Terms of Service
                  </Link>
                .
              </p>
              </Section>
            </div>
          </div>
        </section>
      </MarketingShell>
    </>
  );
}
