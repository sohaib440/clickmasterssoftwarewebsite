import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Clock,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { EmailLink } from "@/components/landing/email-link";
import { Reveal } from "@/components/landing/reveal";
import { SiteHeader } from "@/components/landing/navbar";
import { ContactQuoteForm } from "@/components/pages/contact-quote-form";
import { container } from "@/lib/landing/constants";
import type { ContactFormState } from "@/lib/landing/contact-form-state";
import { siteBrand, sitePhoneTel, siteWhatsAppHref } from "@/lib/landing/brand";
import { contactInfo } from "@/data/landingPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const goldBtn =
  "mt-auto inline-flex min-h-9 w-full items-center justify-center gap-1 rounded-full border border-primary px-2.5 py-1.5 text-center text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-black";

const heroCards = [
  {
    key: "whatsapp",
    title: "WhatsApp",
    description: "Chat with our team instantly",
    href: siteWhatsAppHref,
    external: true,
    button: "Chat on WhatsApp",
    showArrow: true,
    icon: "whatsapp" as const,
  },
  {
    key: "call",
    title: "Call Us",
    description: "Speak directly with our experts",
    href: sitePhoneTel,
    external: false,
    button: siteBrand.phone,
    showArrow: false,
    icon: "phone" as const,
  },
  {
    key: "email",
    title: "Email Us",
    description: "Drop us an email anytime",
    href: "email" as const,
    external: false,
    button: siteBrand.email,
    showArrow: false,
    icon: "mail" as const,
  },
  {
    key: "quote",
    title: "Get a Quote",
    description: "Fill the form and we'll get back",
    href: "#quote",
    external: false,
    button: "Request a Quote",
    showArrow: true,
    icon: "quote" as const,
  },
] as const;

const details = [
  { icon: MapPin, label: "Our Location", value: siteBrand.location },
  { icon: Phone, label: "Call Us", value: siteBrand.phone, href: sitePhoneTel },
  { icon: Mail, label: "Email Us", value: siteBrand.email, isEmail: true },
  { icon: Clock, label: "Response Time", value: contactInfo.responseTime },
  { icon: CalendarClock, label: "Working Hours", value: "Mon – Fri, 9:00 AM – 6:00 PM (PKT)" },
] as const;

function HeroCardIcon({ name }: { name: (typeof heroCards)[number]["icon"] }) {
  if (name === "whatsapp") return <WhatsAppGlyph className="size-6 text-primary" />;
  if (name === "phone") return <Phone className="size-6 text-primary" strokeWidth={1.5} />;
  if (name === "mail") return <Mail className="size-6 text-primary" strokeWidth={1.5} />;
  return <FileText className="size-6 text-primary" strokeWidth={1.5} />;
}

type ContactPageProps = {
  initialValues?: Partial<ContactFormState>;
};

export function ContactPage({ initialValues }: ContactPageProps) {
  return (
    <div className="flex min-h-full w-full flex-col bg-white text-foreground">
      <SiteHeader />
      <main className="flex w-full flex-1 flex-col">
        <section className="relative overflow-hidden bg-black text-white">
          <div className="pointer-events-none absolute inset-0 text-primary" aria-hidden>
            <svg
              className="absolute inset-0 h-full w-full opacity-40"
              viewBox="0 0 1440 520"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M-80 340C180 220 320 80 560 160C800 240 920 40 1180 120C1320 170 1400 90 1520 40"
                stroke="currentColor"
                strokeWidth="1.25"
              />
              <path
                d="M-40 390C220 270 380 140 620 210C860 280 980 90 1240 170C1380 220 1460 140 1580 90"
                stroke="currentColor"
                strokeWidth="1.25"
                opacity="0.55"
              />
              <path
                d="M40 430C280 310 440 190 680 250C920 310 1040 140 1300 210"
                stroke="currentColor"
                strokeWidth="1.1"
                opacity="0.35"
              />
              <path
                d="M-60 200C160 90 340 40 520 110C740 200 860 20 1100 80C1260 120 1380 50 1520 10"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.25"
              />
            </svg>
          </div>

          <div className={cn(container, "relative pt-5 pb-10 md:pt-6 md:pb-12 lg:pt-8 lg:pb-14")}>
            <Reveal immediate>
              <nav className="text-sm text-white/55" aria-label="Breadcrumb">
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                <span className="px-2" aria-hidden>
                  /
                </span>
                <span className="text-white">Contact</span>
              </nav>
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                Start Your{" "}
                <span className="font-heading text-[1.08em] font-normal italic text-primary">
                  Project
                </span>
              </h1>
            </Reveal>
            <Reveal immediate delay={motionStagger * 2}>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Have an idea? Let&apos;s turn it into powerful digital solutions. Reach out via your
                preferred channel or send us a message.
              </p>
            </Reveal>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroCards.map((item, i) => {
                const body = (
                  <>
                    <HeroCardIcon name={item.icon} />
                    <span className="mt-3 text-base font-semibold text-white">{item.title}</span>
                    <span className="mt-1.5 text-[13px] leading-relaxed text-white/60">
                      {item.description}
                    </span>
                    <span className={goldBtn}>
                      <span className="min-w-0 truncate">{item.button}</span>
                      {item.showArrow ? (
                        <ArrowRight className="size-3 shrink-0" aria-hidden />
                      ) : null}
                    </span>
                  </>
                );

                const cardClass =
                  "flex h-full min-h-[13.25rem] flex-col rounded-xl border border-primary/50 bg-black/80 p-4";

                return (
                  <li key={item.key}>
                    <Reveal delay={i * motionStagger} className="h-full">
                      {item.href === "email" ? (
                        <EmailLink className={cardClass} ariaLabel={`Email ${siteBrand.email}`}>
                          {body}
                        </EmailLink>
                      ) : (
                        <a
                          href={item.href}
                          className={cardClass}
                          {...(item.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {body}
                        </a>
                      )}
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="w-full bg-white">
          <div className={cn(container, "py-14 md:py-16 lg:py-20")}>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-horizon-navy sm:text-4xl">
                    Let&apos;s Build Something{" "}
                    <span className="font-heading text-[1.08em] font-normal italic text-primary">
                      Amazing
                    </span>{" "}
                    Together
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-horizon-muted md:text-base">
                    Whether you have a clear plan or just an idea, our team is here to help you take
                    the next step.
                  </p>
                </Reveal>

                <ul className="mt-8 space-y-5">
                  {details.map((item, i) => (
                    <li key={item.label}>
                      <Reveal delay={i * motionStagger}>
                        <div className="flex items-start gap-4">
                          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-zinc-950">
                            <item.icon
                              className="size-5 text-primary"
                              color="#d4af37"
                              strokeWidth={1.75}
                              aria-hidden
                            />
                          </span>
                          <div className="min-w-0 pt-0.5">
                            <p className="text-sm font-semibold text-horizon-navy">{item.label}</p>
                            {"isEmail" in item && item.isEmail ? (
                              <EmailLink className="mt-0.5 block break-all text-sm text-horizon-muted hover:text-horizon-navy hover:underline">
                                {item.value}
                              </EmailLink>
                            ) : "href" in item && item.href ? (
                              <a
                                href={item.href}
                                className="mt-0.5 block text-sm text-horizon-muted hover:text-horizon-navy hover:underline"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="mt-0.5 text-sm text-horizon-muted">{item.value}</p>
                            )}
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={motionStagger}>
                  <div
                    id="quote"
                    className="scroll-mt-32 rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:p-8"
                  >
                    <h2 className="text-2xl font-bold tracking-tight text-horizon-navy sm:text-3xl">
                      Send Us a Message
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                      Share a few details and we&apos;ll get back with next steps.
                    </p>
                    <div className="mt-6">
                      <ContactQuoteForm initialValues={initialValues} />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/*
            <Reveal delay={motionStagger} className="mt-12 md:mt-16">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
                <div className="border-b border-neutral-200 px-5 py-4 sm:px-8">
                  <h2 className="text-2xl font-bold tracking-tight text-horizon-navy sm:text-3xl">
                    Find Us
                  </h2>
                  <p className="mt-1 text-sm text-horizon-muted">
                    H # 592, Street 41, Phase 4A, Ghori Town, Islamabad
                  </p>
                </div>
                <iframe
                  title="Map showing Next Software Development Company in Ghori Town, Islamabad"
                  src="https://www.google.com/maps?q=Next%20Software%20Development%20Company%2C%20H%20%23592%2C%20Street%2041%2C%20Phase%204A%2C%20Ghori%20Town%2C%20Islamabad&output=embed"
                  className="min-h-80 h-80 w-full border-0 sm:h-112"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
            */}
          </div>
        </section>

      </main>
    </div>
  );
}
