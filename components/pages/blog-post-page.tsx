import Image from "next/image";
import Link from "next/link";
import { BarChart3, CircleMinus, Code2, TrendingUp, UserRound, Workflow } from "lucide-react";

import { BlogShareLinks } from "@/components/blog/blog-share-links";
import { BlogSidebarCta } from "@/components/blog/blog-sidebar-cta";
import { BlogStickySidebar } from "@/components/blog/blog-sticky-sidebar";
import { BlogTableOfContents, type TocItem } from "@/components/blog/blog-table-of-contents";
import { CardImage } from "@/components/landing/card-image";
import { FaqSection } from "@/components/landing/faq-section";
import { Reveal } from "@/components/landing/reveal";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { btnOnDark, contactPath, container, sectionPad } from "@/lib/landing/constants";
import type { BlogBodyBlock, BlogPost } from "@/data/blog";
import { blogIndexPath, blogPostPath } from "@/lib/landing/blog";
import { siteBrand } from "@/lib/landing/brand";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type BlogPostPageProps = {
  post: BlogPost;
};

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getHeadingItems(blocks: BlogBodyBlock[], includeFaqs = false): TocItem[] {
  const seen = new Map<string, number>();
  const faqHeading = "frequently asked questions";

  const items = blocks
    .filter((block): block is Extract<BlogBodyBlock, { type: "h2" | "h3" }> => {
      return block.type === "h2" || block.type === "h3";
    })
    .filter((block) => block.text.trim().toLowerCase() !== faqHeading)
    .map((block) => {
      const base = slugifyHeading(block.text) || "section";
      const count = seen.get(base) ?? 0;
      seen.set(base, count + 1);
      const id = count === 0 ? base : `${base}-${count + 1}`;

      return {
        id,
        text: block.text,
        level: (block.type === "h2" ? 2 : 3) as 2 | 3,
      };
    });

  if (includeFaqs && !items.some((item) => item.text.trim().toLowerCase() === faqHeading)) {
    items.push({
      id: "faqs",
      text: "Frequently asked questions",
      level: 2,
    });
  }

  return items;
}

function BlogBodyContent({
  blocks,
  headingIds,
}: {
  blocks: BlogBodyBlock[];
  headingIds: string[];
}) {
  let headingIndex = 0;

  return (
    <div>
      {blocks.map((block, i) => {
        if (block.type === "image") {
          return (
            <Reveal key={`${block.type}-${i}`} delay={motionStagger * Math.min(i + 2, 8)}>
              <figure className="mt-8 overflow-hidden rounded-2xl border border-horizon-border/60">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  className="h-auto w-full"
                />
              </figure>
            </Reveal>
          );
        }

        if (block.type === "h2") {
          const id = headingIds[headingIndex++];
          return (
            <div key={`${block.type}-${i}`} id={id} className="mt-12 scroll-mt-28">
              <Reveal delay={motionStagger * Math.min(i + 2, 8)}>
                <h2 className="font-heading text-2xl font-semibold leading-snug tracking-tight text-horizon-navy md:text-3xl">
                  {block.text}
                </h2>
              </Reveal>
            </div>
          );
        }

        if (block.type === "h3") {
          const id = headingIds[headingIndex++];
          return (
            <div key={`${block.type}-${i}`} id={id} className="mt-8 scroll-mt-28">
              <Reveal delay={motionStagger * Math.min(i + 2, 8)}>
                <h3 className="font-heading text-xl font-semibold leading-snug tracking-tight text-horizon-navy md:text-2xl">
                  {block.text}
                </h3>
              </Reveal>
            </div>
          );
        }

        if (block.type === "ol") {
          return (
            <Reveal key={`${block.type}-${i}`} delay={motionStagger * Math.min(i + 2, 8)}>
              <ol className="mt-5 list-decimal space-y-3 pl-5 text-base leading-[1.8] text-horizon-muted marker:font-semibold marker:text-horizon-navy md:text-lg md:leading-[1.85]">
                {block.items.map((item) => (
                  <li key={item.lead} className="pl-1">
                    <strong className="font-semibold text-horizon-navy">{item.lead}</strong>{" "}
                    {item.linkText && item.linkHref && item.text.includes(item.linkText) ? (
                      <>
                        {item.text.split(item.linkText)[0]}
                        <Link
                          href={item.linkHref}
                          className="font-medium text-primary underline decoration-primary/50 underline-offset-4 transition-colors hover:text-horizon-navy"
                        >
                          {item.linkText}
                        </Link>
                        {item.text.split(item.linkText).slice(1).join(item.linkText)}
                      </>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>
          );
        }

        if (block.type === "stats") {
          return (
            <Reveal key={`${block.type}-${i}`} delay={motionStagger * Math.min(i + 2, 8)}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {block.items.map((item) => (
                  <div
                    key={item.value}
                    className="flex min-h-32 flex-col items-center justify-center rounded-sm border border-[#d9d0c1] bg-[#faf8f3] px-4 py-5 text-center"
                  >
                    <p className="font-heading text-3xl font-semibold leading-none text-horizon-navy md:text-4xl">
                      {item.value}
                    </p>
                    <p className="mt-4 max-w-40 text-xs leading-relaxed text-horizon-navy/80 md:text-sm">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          );
        }

        if (block.type === "category-grid") {
          const icons = [CircleMinus, Workflow, TrendingUp, UserRound, Code2, BarChart3];

          return (
            <Reveal key={`${block.type}-${i}`} delay={motionStagger * Math.min(i + 2, 8)}>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {block.items.map((item, index) => {
                  const Icon = icons[index % icons.length];

                  return (
                    <div
                      key={item.title}
                      className="min-h-40 rounded-sm border border-[#d9d0c1] bg-[#faf8f3] px-4 py-4"
                    >
                      <Icon className="size-5 text-primary" strokeWidth={1.8} aria-hidden="true" />
                      <h3 className="mt-4 text-sm font-semibold text-horizon-navy">{item.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-horizon-navy/80 md:text-sm">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          );
        }

        if (block.type === "comparison-table") {
          return (
            <Reveal key={`${block.type}-${i}`} delay={motionStagger * Math.min(i + 2, 8)}>
              <div className="mt-6 overflow-hidden rounded-sm border border-[#d9d0c1] bg-[#faf8f3]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[40rem] border-collapse text-left text-xs text-horizon-navy md:text-sm">
                    <thead className="bg-[#123f63] text-white">
                      <tr>
                        {block.columns.map((column) => (
                          <th key={column} className="border-r border-white/40 px-3 py-3 font-semibold last:border-r-0">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-t border-[#d9d0c1]">
                          {row.cells.map((cell, cellIndex) => (
                            <td key={`${rowIndex}-${cellIndex}`} className="border-r border-[#d9d0c1] px-3 py-3 align-top leading-relaxed last:border-r-0">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {block.note ? (
                  <p className="border-t border-[#d9d0c1] px-3 py-2 text-[10px] leading-relaxed text-horizon-muted md:text-xs">
                    {block.note}
                  </p>
                ) : null}
              </div>
            </Reveal>
          );
        }

        if (block.type === "bullet-list") {
          return (
            <Reveal key={`${block.type}-${i}`} delay={motionStagger * Math.min(i + 2, 8)}>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-[1.7] text-horizon-muted marker:text-horizon-navy md:text-lg md:leading-[1.8]">
                {block.items.map((item) => (
                  <li key={item.lead} className="pl-1">
                    <strong className="font-semibold text-horizon-navy">{item.lead}</strong>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        }

        if (block.type === "cost-chart") {
          const maxValue = Math.max(...block.items.flatMap((item) => [item.advertised, item.total]));

          return (
            <Reveal key={`${block.type}-${i}`} delay={motionStagger * Math.min(i + 2, 8)}>
              <div className="mt-7 rounded-sm bg-[#faf8f3] px-3 pb-3 pt-2 sm:px-6">
                <div className="mb-4 flex justify-end gap-4 text-[10px] text-horizon-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="size-2 bg-[#14517d]" /> Advertised price
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="size-2 bg-[#dc9023]" /> True cost
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 border-b border-horizon-border/70 pb-1 sm:gap-8">
                  {block.items.map((item) => (
                    <div key={item.label} className="flex h-44 items-end justify-center gap-1.5 border-b border-horizon-border/40 sm:gap-2">
                      <div className="flex h-full flex-col items-center justify-end">
                        <span className="mb-1 text-[9px] text-horizon-muted">${item.advertised}</span>
                        <span
                          className="w-5 bg-[#14517d] sm:w-7"
                          style={{ height: `${Math.max((item.advertised / maxValue) * 100, 4)}%` }}
                        />
                      </div>
                      <div className="flex h-full flex-col items-center justify-end">
                        <span className="mb-1 text-[9px] text-horizon-muted">${item.total}+</span>
                        <span
                          className="w-5 bg-[#dc9023] sm:w-7"
                          style={{ height: `${Math.max((item.total / maxValue) * 100, 4)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 pt-2 text-center text-[10px] font-medium text-horizon-navy sm:gap-8 sm:text-xs">
                  {block.items.map((item) => <span key={item.label}>{item.label}</span>)}
                </div>
                {block.note ? <p className="mt-6 text-center text-[10px] text-horizon-muted">{block.note}</p> : null}
              </div>
            </Reveal>
          );
        }

        if (block.type === "callout") {
          return (
            <Reveal key={`${block.type}-${i}`} delay={motionStagger * Math.min(i + 2, 8)}>
              <div className="mt-7 border-l-2 border-primary bg-[#f9e9e2] px-4 py-3 text-sm leading-relaxed text-horizon-navy">
                {block.text}
              </div>
            </Reveal>
          );
        }

        return (
          <Reveal key={`${block.type}-${i}`} delay={motionStagger * Math.min(i + 2, 8)}>
            <p className="mt-5 text-justify text-base leading-[1.8] text-horizon-muted md:text-lg md:leading-[1.85]">
              {block.linkText && block.linkHref && block.text.includes(block.linkText) ? (
                <>
                  {block.text.split(block.linkText)[0]}
                  <Link
                    href={block.linkHref}
                    className="font-medium text-primary underline decoration-primary/50 underline-offset-4 transition-colors hover:text-horizon-navy"
                  >
                    {block.linkText}
                  </Link>
                  {block.text.split(block.linkText).slice(1).join(block.linkText)}
                </>
              ) : (
                block.text
              )}
            </p>
          </Reveal>
        );
      })}
    </div>
  );
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  const tocItems = getHeadingItems(post.body, post.faqs.length > 0);
  const headingIds = tocItems.map((item) => item.id);
  const shareUrl = `${siteBrand.url}${blogPostPath(post.slug)}`;

  return (
    <MarketingShell>
      <PageBreadcrumb
        items={[
          { label: "Blog", href: blogIndexPath },
          { label: post.title },
        ]}
        className="border-0 bg-black py-0 text-white [&_a]:text-white/60 [&_a:hover]:text-white [&_div]:!py-3 [&_span]:text-white/40 [&_span.text-horizon-navy]:text-white md:[&_div]:!py-3.5"
      />

      <article className="w-full bg-white">
        <header className="border-b border-white/10 bg-black text-white">
          <div className={cn(container, "pt-1 pb-4 md:pt-2 md:pb-6 lg:pt-3 lg:pb-7")}>
            <Reveal immediate>
              <h1 className="max-w-4xl font-heading text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.1rem]">
                {post.title}
              </h1>
              <p className="mt-3 max-w-3xl text-justify text-base leading-relaxed text-white/70 md:text-lg">
                {post.excerpt}
              </p>
            </Reveal>

            <Reveal immediate delay={motionStagger}>
              <div className="mt-5 flex flex-col gap-4 border-t border-white/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={post.author.image.src}
                    alt={post.author.image.alt}
                    width={48}
                    height={48}
                    className="size-11 rounded-full object-cover ring-2 ring-primary/40"
                  />
                  <div>
                    <p className="text-sm text-white/60">
                      Written by{" "}
                      <span className="font-medium text-white">{post.author.name}</span>
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-primary">{post.author.role}</p>
                  </div>
                </div>

                <dl className="grid grid-cols-1 gap-3 text-sm min-[420px]:grid-cols-3 sm:gap-6">
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                      Read time
                    </dt>
                    <dd className="mt-1 font-medium text-white">{post.readTime}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                      Published
                    </dt>
                    <dd className="mt-1 font-medium text-white">{post.publishedAt}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                      Updated
                    </dt>
                    <dd className="mt-1 font-medium text-white">{post.updatedAt}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </header>

        <div className={cn(container, sectionPad, "!pt-8 md:!pt-10")}>
          <Reveal immediate delay={motionStagger * 2} className="overflow-hidden rounded-2xl border border-horizon-border/60">
            <CardImage
              {...post.image}
              className="h-auto w-full object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 1100px"
            />
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_22rem] xl:gap-10">
            <div className="min-w-0">
              <details className="mb-10 rounded-xl border border-horizon-border/80 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:p-4 xl:hidden">
                <summary className="cursor-pointer list-none font-heading text-sm font-semibold tracking-tight text-horizon-navy md:text-base [&::-webkit-details-marker]:hidden">
                  In this article
                </summary>
                <BlogTableOfContents
                  items={tocItems}
                  className="mt-4 border-0 p-0 shadow-none [&>div]:hidden [&>p]:hidden"
                />
              </details>
              <BlogBodyContent blocks={post.body} headingIds={headingIds} />
              {post.faqs.length > 0 ? (
                <FaqSection
                  embedded
                  items={post.faqs}
                  justify
                  className="border-t-0"
                  overlineText="Article FAQs"
                  title={
                    <>
                      Questions about this <span className="italic">topic</span>
                    </>
                  }
                  intro="Clear answers related to this article, written for buyers and product teams evaluating the same decisions."
                />
              ) : null}
            </div>

            <aside className="relative hidden min-h-[28rem] lg:block">
              <BlogStickySidebar>
                {tocItems.length > 0 ? <BlogTableOfContents items={tocItems} /> : null}
                <BlogSidebarCta />
                <BlogShareLinks url={shareUrl} title={post.title} />
              </BlogStickySidebar>
            </aside>
          </div>
        </div>
      </article>

      <section className="w-full bg-horizon-navy text-white">
        <div className={cn(container, sectionPad, "text-center text-white")}>
          <Reveal>
            <h2 className="font-heading text-3xl font-normal !text-white md:text-4xl">
              Ready to work <span className="italic !text-white">together</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm !text-white md:text-base">
              Tell us about your product, we&apos;ll share how we can help from discovery through
              launch.
            </p>
            <Link
              href={contactPath}
              className={cn(
                btnOnDark,
                "mt-8 !text-white hover:!bg-white hover:!text-horizon-navy"
              )}
            >
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </MarketingShell>
  );
}
