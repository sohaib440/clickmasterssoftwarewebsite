import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { cardSoft, container, overline, sectionPad } from "@/lib/landing/constants";
import { motionStagger } from "@/lib/landing/motion";
import { blogPosts } from "@/lib/landing/data";
import { blogPostPath } from "@/lib/landing/blog";
import { cn } from "@/lib/utils";

type BlogSectionProps = {
  showHeading?: boolean;
};

export function BlogSection({ showHeading = true }: BlogSectionProps) {
  const featured = blogPosts.slice(0, 2);

  return (
    <section id="blog" className="w-full bg-horizon-sky">
      <div className={cn(container, sectionPad, !showHeading && "pt-0 md:pt-0")}>
        {showHeading ? (
          <SectionHeading
            overlineText="From the blog"
            title={
              <>
                Insights from <span className="italic">our team</span>
              </>
            }
            className="mb-8 md:mb-10"
          />
        ) : null}

        <ul className="grid gap-4 md:grid-cols-2">
          {featured.map((post, i) => (
            <li key={post.slug}>
              <Reveal delay={i * motionStagger} className="h-full">
                <Link
                  href={blogPostPath(post.slug)}
                  className={cn(
                    cardSoft,
                    "group flex h-full flex-col overflow-hidden p-0 transition-colors hover:border-horizon-peach hover:bg-white"
                  )}
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <CardImage
                      {...post.image}
                      className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 md:p-5">
                    <p className={overline}>{post.category}</p>
                    <h3 className="mt-2 font-heading text-xl font-medium leading-snug text-horizon-navy group-hover:underline md:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-left text-horizon-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-horizon-navy">
                      Read article →
                      <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
