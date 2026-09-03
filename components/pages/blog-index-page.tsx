import Link from "next/link";

import { BlogSection } from "@/components/landing/blog-section";
import { Reveal } from "@/components/landing/reveal";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { PageHero } from "@/components/layout/page-hero";
import { btnOnDark, contactPath, container, sectionPad } from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

export function BlogIndexPage() {
  return (
    <MarketingShell>
      <PageBreadcrumb
        items={[{ label: "Blog" }]}
        className="border-white/10 bg-black text-white [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white/40 [&_span.text-horizon-navy]:text-white"
      />
      <PageHero
        dark
        overlineText="Journal"
        title={
          <>
            Notes from the <span className="italic text-primary">studio</span>
          </>
        }
        description="Ideas on product, design, and engineering, how we plan, build, and ship with clarity."
      />
      <BlogSection showHeading={false} showAll variant="light" />
      <section className="w-full bg-horizon-navy text-white">
        <div className={cn(container, sectionPad, "text-center")}>
          <Reveal>
            <h2 className="font-heading text-3xl font-normal text-white md:text-4xl">
              Have a topic you want us to <span className="italic text-primary">cover</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/70 md:text-base">
              Tell us what you&apos;re building. We&apos;ll share practical notes from delivery, or
              start a conversation about your next project.
            </p>
            <Link href={contactPath} className={cn(btnOnDark, "mt-8")}>
              Get a Free Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </MarketingShell>
  );
}
