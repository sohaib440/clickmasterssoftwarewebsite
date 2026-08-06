import { FaqSection } from "@/components/landing/faq-section";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";

export function FaqPage() {
  return (
    <MarketingShell>
      <h1 className="sr-only">Frequently Asked Questions</h1>
      <PageBreadcrumb items={[{ label: "FAQ" }]} />
      <FaqSection />
    </MarketingShell>
  );
}
