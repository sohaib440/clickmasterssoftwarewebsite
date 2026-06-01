import { type Client, clients } from "@/lib/landing/data";
import { cn } from "@/lib/utils";

function ClientLogo({ client }: { client: Client }) {
  return (
    <div className="flex h-12 shrink-0 items-center justify-center px-8 md:h-14 md:px-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={client.logo}
        alt={client.name}
        width={180}
        height={48}
        loading="lazy"
        decoding="async"
        className="h-7 w-auto max-w-[10.5rem] object-contain opacity-55 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0 md:h-8 md:max-w-[11.5rem]"
      />
    </div>
  );
}

export function ClientsSection() {
  const track = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="w-full border-y border-horizon-border/60 bg-horizon-cream py-8 md:py-10"
      aria-label="Client logos"
    >
      <div className="clients-marquee overflow-hidden">
        <ul className="clients-marquee__track list-none" aria-hidden>
          {track.map((client, index) => (
            <li
              key={`${client.slug}-${index}`}
              className={cn(index >= clients.length && "clients-marquee__duplicate")}
            >
              <ClientLogo client={client} />
            </li>
          ))}
        </ul>
      </div>

      <ul className="sr-only">
        {clients.map((client) => (
          <li key={client.slug}>{client.name}</li>
        ))}
      </ul>
    </section>
  );
}
