import Link from "next/link";

import { AboutSection } from "@/components/landing/about-section";
import { Reveal } from "@/components/landing/reveal";
import { TeamSection } from "@/components/landing/team-section";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { btnPrimary, contactPath, container, sectionPad } from "@/lib/landing/constants";
import { stats } from "@/data/landingPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

export function AboutPage() {
  return (
    <MarketingShell>
      <PageBreadcrumb items={[{ label: "About" }]} />
      <AboutSection />
      <section className="w-full border-y border-horizon-border/60 bg-white">
        <div className={cn(container, sectionPad)}>
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * motionStagger}
                className={cn(i > 0 && "sm:border-l sm:border-horizon-navy/10 sm:pl-6")}
              >
                <dt className="font-heading text-3xl font-normal text-horizon-navy md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-horizon-muted">{stat.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
      <TeamSection />
      <section className="w-full bg-horizon-navy text-white">
        <div className={cn(container, sectionPad, "text-center")}>
          <Reveal>
            <h2 className="font-heading text-3xl font-normal text-white md:text-4xl">
              Ready to work <span className="italic">together</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
              Tell us about your product—we&apos;ll share how we can help from discovery through
              launch.
            </p>
            <Link
              href={contactPath}
              className={cn(btnPrimary, "mt-8 bg-white text-horizon-navy hover:bg-white/90")}
            >
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </MarketingShell>
  );
}
