import { getTaglineCategory } from "@/app/blog/utils";
import { Button } from "@/components/ui/button";
import { DebouncedInput } from "@/components/ui/debounce-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn, strapiUrl } from "@/lib/utils";
import type { BlogPost } from "@/types/blog-post";
import Image from "next/image";
import Link from "next/link";
import { type Dispatch, type SetStateAction, useRef, useEffect } from "react";

const BlogCardSkeleton = () => (
  <div className="block">
    <article className="bg-background overflow-hidden">
      {/* Image */}
      <Skeleton className="h-[200px] w-full rounded-xl sm:h-[220px]" />

      <div className="mt-5 mb-6">
        {/* Tagline */}
        <Skeleton className="h-6 w-1/4" />

        {/* Title */}
        <Skeleton className="mt-2 h-[26px] w-3/4" />

        {/* Summary */}
        <Skeleton className="mt-2 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-5/6" />

        {/* Author Row */}
        <div className="text-muted-foreground mt-4 flex items-center gap-3">
          {/* Avatar */}
          <Skeleton className="h-6 w-6 rounded-full" />

          {/* Name */}
          <Skeleton className="h-3 w-20" />

          {/* Dot */}
          <Skeleton className="h-1 w-1 rounded-full" />

          {/* Date */}
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </article>
  </div>
);

export default function BlogGrid({
  isLoading,
  posts,
  categories,
  totalPages,
  page,
  query,
  category,
  setPage,
  setQuery,
  setCategory,
}: {
  isLoading: boolean;
  posts: BlogPost[];
  categories: string[];
  totalPages: number;
  page: number;
  query: string;
  category: string;
  setPage: Dispatch<SetStateAction<number>>;
  setQuery: Dispatch<SetStateAction<string>>;
  setCategory: Dispatch<SetStateAction<string>>;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldScrollRef = useRef(false);

  // Scroll to section after page changes (triggered by pagination buttons)
  useEffect(() => {
    if (shouldScrollRef.current) {
      // Use requestAnimationFrame to ensure DOM has updated
      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
        shouldScrollRef.current = false;
      });
    }
  }, [page]);

  const goPrev = () => {
    if (page > 1) {
      shouldScrollRef.current = true;
      setPage(page - 1);
    }
  };
  const goNext = () => {
    if (page < totalPages) {
      shouldScrollRef.current = true;
      setPage(page + 1);
    }
  };

  return (
    <section ref={sectionRef} className="px-6 py-10 lg:py-16">
      <div className="container grid gap-8 px-0 lg:grid-cols-[260px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="space-y-4">
          <h3 className="text-muted-foreground text-sm font-medium">
            Explore by topics
          </h3>

          {/* Search — always visible */}
          <DebouncedInput
            type="search"
            value={query}
            onChange={(value) => setQuery(value as string)}
            placeholder="Search..."
            className="border-border bg-background text-foreground focus:ring-ring/30 h-11 w-full rounded-xl border px-3 text-sm outline-none focus:ring-2"
            debounce={500}
          />

          {/* Mobile: dropdown */}
          <div className="lg:hidden">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="border-border bg-background text-foreground focus:ring-ring/30 h-11 w-full rounded-xl border px-3 text-sm shadow-none focus:ring-2">
                <SelectValue placeholder={categories[0]} />
              </SelectTrigger>

              <SelectContent
                align="start"
                sideOffset={6}
                className="border-border bg-background text-foreground rounded-xl border p-1 shadow-none"
              >
                {categories.map((c) => {
                  const active = category === c;
                  return (
                    <SelectItem
                      key={c}
                      value={c}
                      className={cn(
                        "rounded-lg px-3 py-2 text-sm transition-colors",
                        active
                          ? "bg-muted text-tagline"
                          : "hover:bg-muted text-foreground",
                      )}
                    >
                      {c}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop: vertical list */}
          <nav className="hidden lg:block">
            <ul className="space-y-1">
              {categories.map((c) => {
                const active = category === c;
                return (
                  <li key={c}>
                    <button
                      type="button"
                      onClick={() => setCategory(c)}
                      className={cn(
                        "w-full rounded-lg px-0 py-2 text-left text-sm transition-colors",
                        active
                          ? "text-tagline"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <span
                        className={cn(
                          "inline-flex items-center gap-3 pl-3",
                          "border-l-2",
                          active ? "border-tagline" : "border-transparent",
                        )}
                      >
                        {c}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Grid */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <p className="text-muted-foreground text-base">No posts found.</p>
          ) : isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <BlogCardSkeleton />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {posts.map((post) => {
                const { slug, title, summary, date, image, authors } = post;
                const tagline = getTaglineCategory(post);
                const author = authors[0];

                return (
                  <Link key={slug} href={`/blog/${slug}`} className="block">
                    <article className="bg-background overflow-hidden">
                      {image && (
                        <Image
                          src={strapiUrl(image.url)!}
                          alt={image.alternativeText ?? title}
                          width={800}
                          height={520}
                          className="h-[200px] w-full rounded-xl object-cover sm:h-[220px]"
                        />
                      )}

                      <div className="mt-5 mb-6">
                        {!!tagline && (
                          <span className="text-tagline">{tagline}</span>
                        )}

                        <h4 className="text-foreground mt-2 text-[20px] leading-[1.3] tracking-tight">
                          {title}
                        </h4>

                        {!!summary && (
                          <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
                            {summary}
                          </p>
                        )}

                        <div className="text-muted-foreground mt-4 flex items-center gap-3">
                          {author?.avatar && (
                            <>
                              <Image
                                src={strapiUrl(author.avatar.url)!}
                                alt={author.avatar.alternativeText ?? title}
                                width={24}
                                height={24}
                                className="h-6 w-6 rounded-full object-cover"
                              />
                              <span className="text-xs">
                                {author.firstName} {author.lastName}
                              </span>
                              <span className="text-xs">•</span>
                            </>
                          )}
                          <span className="text-xs">
                            {date
                              ? new Date(date).toLocaleDateString(undefined, {
                                  month: "short",
                                  day: "2-digit",
                                  year: "numeric",
                                })
                              : ""}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-sm">
                Page {page} of {totalPages}
              </p>
              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  disabled={page <= 1}
                  onClick={goPrev}
                >
                  Previous
                </Button>
                <Button disabled={page >= totalPages} onClick={goNext}>
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
