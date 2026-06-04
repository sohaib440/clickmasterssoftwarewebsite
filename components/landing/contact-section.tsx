import Link from "next/link";

import { ContactForm } from "@/components/landing/contact-form";
import { Reveal } from "@/components/landing/reveal";
import { contactPath, container, overline, sectionPad } from "@/lib/landing/constants";
import { contactInfo, homeContact } from "@/lib/landing/data";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-horizon-cream via-horizon-peach/70 to-horizon-sky"
    >
      <div className={cn(container, sectionPad)}>
        <Reveal delay={0}>
          <p className={overline}>{homeContact.overline}</p>
        </Reveal>
        <Reveal delay={motionStagger}>
          <h2 className="mt-4 max-w-2xl font-heading text-4xl font-normal leading-[1.12] text-horizon-navy md:text-5xl lg:text-6xl">
            {homeContact.titleBefore}{" "}
            <span className="italic">{homeContact.titleEmphasis}</span>
          </h2>
        </Reveal>
        <Reveal delay={motionStagger * 2}>
          <p className="mt-4 max-w-lg text-left text-horizon-muted">{homeContact.subtext}</p>
        </Reveal>

        <Reveal delay={motionStagger * 3}>
          <ContactForm variant="short" />
        </Reveal>

        <Reveal delay={motionStagger * 4}>
          <p className="mt-4 text-sm text-left text-horizon-muted">{homeContact.reassurance}</p>
          <p className="mt-3 text-sm text-left text-horizon-muted">
            <Link
              href={contactPath}
              className="font-medium text-horizon-navy underline-offset-4 hover:underline"
            >
              Open full contact form
            </Link>{" "}
            for budget, timeline, and project type—or email{" "}
            <Link
              href={`mailto:${contactInfo.email}`}
              className="font-medium text-horizon-navy underline-offset-4 hover:underline"
            >
              {contactInfo.email}
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
