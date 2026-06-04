import { type Client, clients, trustedPartnersSection } from "@/lib/landing/data";
import { overline } from "@/lib/landing/constants";
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
        className="h-10 w-auto max-w-[14rem] object-contain opacity-55 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0 md:h-12 md:max-w-[16rem]"
      />
    </div>
  );
}

export function TrustedPartnersSection() {
  const track = [...clients, ...clients];

  return (
    <section
      id="trusted-partners"
      className="w-full border-y border-horizon-border/60 bg-horizon-cream py-0"
      aria-label="Trusted Partners"
    >
      <p className={cn(overline, "mb-6 text-center")}>{trustedPartnersSection.label}</p>

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

      <p className="mx-auto mt-6 max-w-2xl px-4 text-center text-sm text-horizon-muted md:hidden">
        {trustedPartnersSection.fallbackText}
      </p>

      <ul className="sr-only">
        {clients.map((client) => (
          <li key={client.slug}>{client.name}</li>
        ))}
      </ul>
    </section>
  );
}
