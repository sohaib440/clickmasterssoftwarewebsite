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
  return (
    <section id="blog" className="w-full bg-horizon-sky">
      <div className={cn(container, sectionPad, !showHeading && "pt-0 md:pt-0")}>
        {showHeading ? (
          <SectionHeading
            overlineText="Journal"
            title={
              <>
                Notes from the <span className="italic">studio</span>
              </>
            }
            className="mb-8 md:mb-10"
          />
        ) : null}

        <ul className="grid gap-3 md:grid-cols-3">
          {blogPosts.map((post, i) => (
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
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className={overline}>{post.category}</p>
                    <h3 className="mt-2 font-heading text-xl font-medium leading-snug text-horizon-navy group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-horizon-muted">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-horizon-muted">
                      <span>
                        {post.date} · {post.readTime}
                      </span>
                      <ArrowUpRight className="size-4 text-horizon-navy opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
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
