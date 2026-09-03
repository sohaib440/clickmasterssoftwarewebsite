"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import { LandingContainer, sectionHeadingGap } from "@/components/landing/landing-container";
import { BlogFlipCard } from "@/components/landing/blog-flip-card";
import { SectionHeading } from "@/components/landing/section-heading";
import { blogPosts } from "@/data/blog";
import { blogPostPath } from "@/lib/landing/blog";
import { cn } from "@/lib/utils";

type BlogSectionProps = {
  showHeading?: boolean;
  showAll?: boolean;
  searchable?: boolean;
  /** Homepage stays dark; blog index uses a white band between black sections */
  variant?: "dark" | "light";
};

const blogSectionDescription =
  "Practical notes on product delivery, discovery, and building systems that scale, written by the people behind the work.";

export function BlogSection({
  showHeading = true,
  showAll = false,
  searchable = false,
  variant = "dark",
}: BlogSectionProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All topics");
  const light = variant === "light";
  const posts = showAll ? blogPosts : blogPosts.slice(0, 3);
  const categories = Array.from(new Set(blogPosts.map((post) => post.category))).sort();
  const normalizedQuery = query.trim().toLowerCase();
  const featured = posts.filter((post) => {
    const matchesCategory = category === "All topics" || post.category === category;
    const searchableText = `${post.title} ${post.excerpt} ${post.category} ${post.author.name}`.toLowerCase();
    return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
  });

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

        {searchable ? (
          <div className="mb-8 flex flex-col items-stretch justify-between gap-4 border-y border-horizon-border/70 py-4 sm:flex-row sm:items-center">
            <p className="text-sm text-horizon-muted">
              {featured.length} {featured.length === 1 ? "article" : "articles"}
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <label className="relative block min-w-0 sm:w-80">
                <span className="sr-only">Search articles</span>
                <Search
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-horizon-muted"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search articles"
                  className="h-11 w-full rounded-none border border-horizon-border bg-white pl-11 pr-4 text-sm text-horizon-navy outline-none transition placeholder:text-horizon-muted/70 focus:border-horizon-navy focus:ring-2 focus:ring-horizon-navy/10"
                />
              </label>
              <label className="relative block min-w-0 sm:w-52">
                <span className="sr-only">Filter by topic</span>
                <SlidersHorizontal
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-horizon-muted"
                />
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="h-11 w-full appearance-none rounded-none border border-horizon-border bg-white pl-11 pr-4 text-sm text-horizon-navy outline-none transition focus:border-horizon-navy focus:ring-2 focus:ring-horizon-navy/10"
                >
                  <option>All topics</option>
                  {categories.map((topic) => (
                    <option key={topic}>{topic}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        ) : null}

        {featured.length > 0 ? (
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {featured.map((post) => (
            <BlogFlipCard
              key={post.slug}
              href={blogPostPath(post.slug)}
              image={post.image}
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
        ) : (
          <div className="border border-dashed border-horizon-border px-6 py-16 text-center">
            <p className="font-heading text-2xl text-horizon-navy">No articles found</p>
            <p className="mt-2 text-sm text-horizon-muted">Try a different search term or topic.</p>
          </div>
        )}
      </LandingContainer>
    </section>
  );
}
