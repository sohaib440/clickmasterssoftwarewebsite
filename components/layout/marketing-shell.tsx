import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/navbar";

type MarketingShellProps = {
  children: React.ReactNode;
};

export function MarketingShell({ children }: MarketingShellProps) {
  return (
    <div className="flex min-h-full w-full flex-col bg-horizon-cream text-foreground">
      <SiteHeader />
      <main className="flex w-full flex-1 flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
}
