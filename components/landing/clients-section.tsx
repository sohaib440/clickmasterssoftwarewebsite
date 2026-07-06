import { type Client, clients, trustedPartnersSection } from "@/data/landingPage";
import { overline, container } from "@/lib/landing/constants";
import { cn } from "@/lib/utils";

function PartnerLogo({ client }: { client: Client }) {
  return (
    <div className="flex h-16 shrink-0 items-center justify-center px-8 md:h-20 md:px-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={client.logo}
        alt={client.name}
        width={240}
        height={64}
        loading="lazy"
        decoding="async"
        className="h-10 w-auto max-w-[14rem] object-contain  duration-300 hover:opacity-100 hover:grayscale-0 md:h-12 md:max-w-[16rem]"
      />
    </div>
  );
}

export function TrustedPartnersSection({
  className,
  labelClassName,
}: {
  className?: string;
  labelClassName?: string;
} = {}) {
  const track = [...clients, ...clients];

  return (
    <section
      id="trusted-partners"
      className={cn(
        "w-full overflow-x-clip border-y border-horizon-border/60 bg-horizon-cream py-0",
        className
      )}
      aria-label="Trusted Partners"
    >
      <div className={cn(container, "py-8 md:py-10")}>
        <p className={cn(overline, "text-center", labelClassName)}>{trustedPartnersSection.label}</p>
      </div>

      <div className="partners-marquee overflow-hidden">
        <ul className="partners-marquee__track list-none" aria-hidden>
          {track.map((client, index) => (
            <li
              key={`${client.slug}-${index}`}
              className={cn(index >= clients.length && "partners-marquee__duplicate")}
            >
              <PartnerLogo client={client} />
            </li>
          ))}
        </ul>
      </div>

      <div className={cn(container, "mt-6 md:hidden")}>
        <p className="mx-auto max-w-2xl text-center text-sm text-horizon-muted">
          {trustedPartnersSection.fallbackText}
        </p>
      </div>

      <ul className="sr-only">
        {clients.map((client) => (
          <li key={client.slug}>{client.name}</li>
        ))}
      </ul>
    </section>
  );
}
