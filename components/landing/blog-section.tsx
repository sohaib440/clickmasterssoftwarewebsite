import { LandingContainer, sectionHeadingGap } from "@/components/landing/landing-container";
import { BlogFlipCard } from "@/components/landing/blog-flip-card";
import { SectionHeading } from "@/components/landing/section-heading";
import { blogPosts } from "@/data/blog";
import { blogPostPath } from "@/lib/landing/blog";
import { cn } from "@/lib/utils";

type BlogSectionProps = {
  showHeading?: boolean;
  showAll?: boolean;
  /** Homepage stays dark; blog index uses a white band between black sections */
  variant?: "dark" | "light";
};

const blogSectionDescription =
  "Practical notes on product delivery, discovery, and building systems that scale, written by the people behind the work.";

export function BlogSection({ showHeading = true, showAll = false, variant = "dark" }: BlogSectionProps) {
  const featured = showAll ? blogPosts : blogPosts.slice(0, 3);
  const light = variant === "light";

  return (
    <section
      id="blog"
      className={cn("w-full", light ? "bg-white text-horizon-navy" : "bg-black text-white")}
    >
      <LandingContainer className={!showHeading ? "pt-0 md:pt-0" : undefined}>
        {showHeading ? (
          <SectionHeading
            dark={!light}
            overlineText="Insights from our software house"
            title={
              <>
                Insights from <span className="italic">our team</span>
              </>
            }
            description={blogSectionDescription}
            className={sectionHeadingGap}
          />
        ) : null}

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {featured.map((post, index) => (
            <BlogFlipCard
              key={post.slug}
              href={blogPostPath(post.slug)}
              image={post.image}
              index={index}
              frontTitle={post.title}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author.name}
              authorRole={post.author.role}
              publishedAt={post.publishedAt}
              readTime={post.readTime}
            />
          ))}
        </div>
      </LandingContainer>
    </section>
  );
}
