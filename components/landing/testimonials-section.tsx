import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { card, container, sectionPad } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { testimonials } from "@/lib/landing/data";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full bg-horizon-cream">
      <div className={cn(container, sectionPad)}>
        <SectionHeading
          overlineText="Testimonials"
          title={
            <>
              What <span className="italic">partners</span> say
            </>
          }
          className="mb-8 md:mb-10"
        />

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <li key={item.author}>
              <Reveal delay={i * motionStagger} className={cn(card, "flex h-full flex-col p-4 lg:p-5")}>
                <blockquote className="flex-1 text-sm leading-relaxed text-left text-horizon-muted md:text-[15px]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="mt-4 flex items-center gap-2.5 border-t border-horizon-border pt-4">
                  <div className="size-12 shrink-0 overflow-hidden rounded-full border border-horizon-border">
                    <CardImage {...item.image} className="size-12" sizes="48px" />
                  </div>
                  <div>
                    <p className="font-medium text-horizon-navy">{item.author}</p>
                    <p className="mt-1 text-sm text-horizon-muted">{item.role}</p>
                  </div>
                </footer>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
