import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";
import {
  btnOnDark,
  btnPrimary,
  contactPath,
  container,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import { teamMembers } from "@/data/landing/team";
import { teamPageMeta } from "@/data/teamPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

function TeamMemberCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[number];
  index: number;
}) {
  return (
    <Reveal delay={index * motionStagger} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-horizon-border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-horizon-sky hover:shadow-[0_20px_50px_-28px_rgba(13,27,42,0.2)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-horizon-peach/40">
          <CardImage
            {...member.image}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h2 className="font-heading text-xl font-medium text-horizon-navy">{member.name}</h2>
          <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-horizon-muted">{member.bio}</p>
        </div>
      </article>
    </Reveal>
  );
}

export function TeamPageContent() {
  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip bg-[#f0f1f3] text-horizon-navy">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-black text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-primary/12 blur-[100px]" />
            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/[0.04] blur-[110px]" />
          </div>

          <div className={cn(container, sectionPad, "relative")}>
            <Reveal immediate>
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60">
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white">
                  <ArrowLeft className="size-4" aria-hidden />
                  Home
                </Link>
                <span aria-hidden>/</span>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white">Our Team</span>
              </nav>
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <p className={cn(overline, "text-white/60")}>{teamPageMeta.hero.eyebrow}</p>
              <h1 className="mt-4 max-w-4xl font-heading text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                {teamPageMeta.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                {teamPageMeta.hero.description}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-2xl font-normal text-horizon-navy md:text-3xl">
                Meet the <span className="italic">team</span>
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-horizon-muted md:text-base">
                Engineers, designers, and delivery leads based in Islamabad hands-on from discovery
                through launch.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {teamMembers.map((member, index) => (
                <li key={member.name}>
                  <TeamMemberCard member={member} index={index} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-horizon-border/60 bg-horizon-cream text-horizon-navy">
          <div className={cn(container, sectionPad)}>
            <Reveal>
              <h2 className="font-heading text-2xl font-normal md:text-3xl">
                How we <span className="italic">work together</span>
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-horizon-muted md:text-base">
                Principles that shape every engagement whether you hire us for a fixed scope or a
                dedicated team.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
              {teamPageMeta.culture.map((item, index) => (
                <Reveal key={item.title} delay={index * motionStagger}>
                  <li className="rounded-2xl border border-horizon-border bg-white p-6">
                    <h3 className="font-heading text-lg text-horizon-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-horizon-muted">
                      {item.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-horizon-navy text-white">
          <div className={cn(container, sectionPad, "text-center")}>
            <Reveal>
              <h2 className="font-heading text-3xl font-normal md:text-4xl">
                {teamPageMeta.cta.titleBefore}{" "}
                <span className="italic">{teamPageMeta.cta.titleEmphasis}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75 md:text-base">
                {teamPageMeta.cta.description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={contactPath} className={cn(btnPrimary, "min-w-[12rem]")}>
                  {teamPageMeta.cta.button}
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    btnOnDark,
                    "inline-flex min-w-[12rem] items-center justify-center gap-1.5"
                  )}
                >
                  About our company
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
