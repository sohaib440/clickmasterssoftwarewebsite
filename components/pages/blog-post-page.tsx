import { CardImage } from "@/components/landing/card-image";
import { Reveal } from "@/components/landing/reveal";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { container, overline, sectionPad } from "@/lib/landing/constants";
import type { BlogPost } from "@/data/blog";
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
            <div className="mt-5 space-y-2 text-sm text-horizon-muted">
              <p>
                By <span className="font-medium text-horizon-navy">{post.author}</span>
                <span aria-hidden> · </span>
                {post.readTime} read
              </p>
              <p>
                Published {post.publishedAt}
                <span aria-hidden> · </span>
                Updated {post.updatedAt}
              </p>
            </div>
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
        </div>
      </article>
    </MarketingShell>
  );
}
