import { BlogFlipCard } from "@/components/landing/blog-flip-card";
import { SectionHeading } from "@/components/landing/section-heading";
import { container, sectionPad } from "@/lib/landing/constants";
import { blogPosts } from "@/data/landingPage";
import { blogPostPath } from "@/lib/landing/blog";
import { cn } from "@/lib/utils";

type BlogSectionProps = {
  showHeading?: boolean;
};

const blogSectionDescription =
  "Practical notes on software delivery, discovery, and building products that scale — written by the team behind your projects.";

function getFrontTitle(category: string) {
  const short = category.split(" ").slice(0, 2).join(" ");
  return short.length > 22 ? category.split(" ")[0] : short;
}

export function BlogSection({ showHeading = true }: BlogSectionProps) {
  const featured = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="w-full bg-black text-white">
      <div className={cn(container, sectionPad, !showHeading && "pt-0 md:pt-0")}>
        {showHeading ? (
          <SectionHeading
            dark
            overlineText="From the blog"
            title={
              <>
                Insights from <span className="italic">our team</span>
              </>
            }
            description={blogSectionDescription}
            className="mb-8 md:mb-10"
          />
        ) : null}

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {featured.map((post, index) => (
            <BlogFlipCard
              key={post.slug}
              href={blogPostPath(post.slug)}
              image={post.image}
              index={index}
              frontTitle={getFrontTitle(post.category)}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
