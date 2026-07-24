import { BlogSection } from "@/components/landing/blog-section";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { PageHero } from "@/components/layout/page-hero";

export function BlogIndexPage() {
  return (
    <MarketingShell>
      <PageBreadcrumb items={[{ label: "Blog" }]} />
      <PageHero
        overlineText="Journal"
        title={
          <>
            Notes from the <span className="italic">studio</span>
          </>
        }
        description="Ideas on product, design, and engineering, how we plan, build, and ship with clarity."
      />
      <BlogSection showHeading={false} />
    </MarketingShell>
  );
}
