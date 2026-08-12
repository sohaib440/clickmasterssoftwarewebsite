import { ContactForm } from "@/components/landing/contact-form";
import { Reveal } from "@/components/landing/reveal";
import { container, overline, sectionPad } from "@/lib/landing/constants";
import { homeContact } from "@/data/landingPage";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type ContactSectionContent = {
  overline: string;
  titleBefore: string;
  titleEmphasis: string;
  subtext: string;
  reassurance: string;
  cta?: string;
};

type ContactSectionProps = {
  content?: ContactSectionContent;
};

export function ContactSection({ content }: ContactSectionProps = {}) {
  const data = content ?? homeContact;

  return (
    <section id="contact" className="relative w-full bg-horizon-navy text-white">
      <div className={cn(container, sectionPad)}>
        <Reveal delay={0}>
          <p className={cn(overline, "!text-white/60")}>{data.overline}</p>
        </Reveal>
        <Reveal delay={motionStagger}>
          <h2 className="mt-4 max-w-4xl font-heading text-3xl font-normal leading-[1.12] text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {data.titleBefore}{" "}
            <span className="italic !text-[#d4af37]">{data.titleEmphasis}</span>
          </h2>
        </Reveal>
        <Reveal delay={motionStagger * 2}>
          <p className="mt-4 max-w-3xl text-left text-sm leading-relaxed text-white/75 sm:text-base md:text-justify">
            {data.subtext}
          </p>
        </Reveal>

        <Reveal delay={motionStagger * 3}>
          <ContactForm variant="short" ctaLabel={data.cta} />
        </Reveal>

        <Reveal delay={motionStagger * 4}>
          <p className="mt-4 text-left text-xs text-white/55 sm:text-sm">{data.reassurance}</p>
        </Reveal>
      </div>
    </section>
  );
}
