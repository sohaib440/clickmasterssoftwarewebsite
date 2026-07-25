import Link from "next/link";
import { Clock, Globe, Mail } from "lucide-react";

import { ContactForm } from "@/components/landing/contact-form";
import { Reveal } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/navbar";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { PageHero } from "@/components/layout/page-hero";
import { card, container, overline, sectionPad } from "@/lib/landing/constants";
import type { ContactFormState } from "@/lib/landing/contact-form-state";
import { contactInfo } from "@/data/landingPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

const contactItems: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Clock,
    label: "Response time",
    value: contactInfo.responseTime,
  },
  {
    icon: Globe,
    label: "Location",
    value: contactInfo.location,
  },
];

type ContactPageProps = {
  initialValues?: Partial<ContactFormState>;
};

export function ContactPage({ initialValues }: ContactPageProps) {
  return (
    <div className="flex min-h-full w-full flex-col bg-horizon-cream text-foreground">
      <SiteHeader />
      <main className="flex w-full flex-1 flex-col">
        <PageBreadcrumb items={[{ label: "Contact" }]} />
        <PageHero
          overlineText="Start here"
          title={
            <>
              Let&apos;s draw your <span className="italic">horizon</span>
            </>
          }
          description="Share a few details, we'll reply within one business day with next steps."
        />

        <section className="w-full overflow-x-clip bg-gradient-to-b from-white via-horizon-cream/50 to-horizon-sky/30">
          <div className={cn(container, sectionPad, "pt-8 sm:pt-10 md:pt-0")}>
            <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <aside className="order-2 min-w-0 lg:order-1 lg:col-span-4">
                <Reveal>
                  <p className={overline}>Reach us</p>
                  <h2 className="mt-2 font-heading text-xl font-medium text-horizon-navy sm:text-2xl">
                    We&apos;d love to hear from you
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-horizon-muted">
                    Whether you have a brief, a rough idea, or an existing product that needs a
                    senior team, we&apos;ll help you find the right next step.
                  </p>
                </Reveal>

                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {contactItems.map((item, i) => (
                    <li key={item.label} className="min-w-0">
                      <Reveal delay={i * motionStagger} className="h-full">
                        <div className={cn(card, "flex h-full gap-3 p-4 sm:gap-4 sm:p-5")}>
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-horizon-sky/50 text-horizon-navy sm:size-10">
                            <item.icon className="size-4" strokeWidth={1.5} aria-hidden />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-horizon-muted">
                              {item.label}
                            </p>
                            {item.href ? (
                              <Link
                                href={item.href}
                                className="mt-1 block break-words font-medium text-horizon-navy hover:underline"
                              >
                                {item.value}
                              </Link>
                            ) : (
                              <p className="mt-1 break-words font-medium text-horizon-navy">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>

                <Reveal delay={motionStagger * 3} className="mt-4">
                  <p className="text-sm leading-relaxed text-horizon-muted">
                    <span className="font-medium text-horizon-navy">Hours:</span>{" "}
                    {contactInfo.hours}
                  </p>
                </Reveal>
              </aside>

              <Reveal delay={motionStagger} className="order-1 min-w-0 lg:order-2 lg:col-span-8">
                <div className={cn(card, "p-4 sm:p-6 md:p-8")}>
                  <h2 className="font-heading text-lg font-medium text-horizon-navy sm:text-xl">
                    Send a message
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                    Share your project details, name, email, phone, budget, timeline, and message.
                  </p>
                  <ContactForm variant="full" initialValues={initialValues} />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
