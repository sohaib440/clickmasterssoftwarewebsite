import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import {
  btnOutline,
  btnPrimary,
  contactPath,
  container,
  overline,
  sectionPad,
} from "@/lib/landing/constants";
import type { BlogPost } from "@/lib/landing/data";
import { blogIndexPath } from "@/lib/landing/blog";
import { motionStagger } from "@/lib/landing/motion";
import { cn } from "@/lib/utils";

type BlogPostPageProps = {
  post: BlogPost;
};

export function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <MarketingShell>
      <PageBreadcrumb
        items={[
          { label: "Blog", href: blogIndexPath },
          { label: post.title },
        ]}
      />

      <article className="w-full bg-white">
        <div className={cn(container, sectionPad)}>
          <Reveal immediate>
            <p className={overline}>{post.category}</p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-normal leading-[1.12] tracking-tight text-horizon-navy md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-horizon-muted">
              {post.date} · {post.readTime}
            </p>
          </Reveal>

          <Reveal immediate delay={motionStagger} className="mt-8 overflow-hidden rounded-2xl">
            <CardImage
              {...post.image}
              className="aspect-[21/9] w-full"
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </Reveal>

          <div className="prose-Software Development Company mx-auto mt-10 max-w-3xl space-y-6">
            {post.body.map((paragraph, i) => (
              <Reveal key={i} delay={motionStagger * (i + 2)}>
                <p className="text-base leading-relaxed text-horizon-muted md:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={motionStagger * 6} className="mt-12 flex flex-col gap-2 sm:flex-row">
            <Link href={blogIndexPath} className={btnOutline}>
              <ArrowLeft className="mr-2 inline size-4" aria-hidden />
              All posts
            </Link>
            <Link href={contactPath} className={btnPrimary}>
              Work with us
            </Link>
          </Reveal>
        </div>
      </article>
    </MarketingShell>
  );
}
