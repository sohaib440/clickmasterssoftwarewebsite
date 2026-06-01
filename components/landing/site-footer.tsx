import Link from "next/link";

import { Reveal } from "@/components/landing/reveal";
import { container } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { footerColumns } from "@/lib/landing/data";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="w-full bg-horizon-navy text-white">
      <div className={cn(container, "py-10 md:py-12")}>
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Link href="/" className="font-heading text-2xl font-medium text-white">
              Nexus
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Software at the edge of light. Boutique engineering and design for teams who
              value clarity.
            </p>
            <p className="mt-6 text-sm text-white/50">
              © {new Date().getFullYear()} Nexus Software
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {footerColumns.map((column, i) => (
              <Reveal key={column.title} delay={(i + 1) * motionStagger}>
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                    {column.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/80 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
