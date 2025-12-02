'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

export type BlogGridCard = {
  slug: string;
  title: string;
  intro?: string;
  tagline?: string;
  author?: string;
  date?: string;
  coverImage?: string;
};

const PER_PAGE = 6;
const ALL = 'All Post';

export default function MetafiBlogGrid({ posts }: { posts: BlogGridCard[] }) {
  const categories = React.useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => set.add((p.tagline ?? 'General').trim()));
    return [ALL, ...Array.from(set).sort()];
  }, [posts]);

  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState<string>(ALL);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => setPage(1), [query, category]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const cat = (p.tagline ?? 'General').trim();
      const inCat = category === ALL || cat === category;
      if (!inCat) return false;
      if (!q) return true;
      const hay =
        `${p.title} ${p.intro ?? ''} ${p.tagline ?? ''}`.toLowerCase();
      return hay.includes(q);
    });
  }, [posts, query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  const goPrev = () => {
    if (page > 1) {
      setPage((p) => p - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const goNext = () => {
    if (page < totalPages) {
      setPage((p) => p + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="px-6 py-10 lg:py-16">
      <div className="container grid gap-8 px-0 lg:grid-cols-[260px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="space-y-4">
          <h3 className="text-muted-foreground text-sm font-medium">
            Explore by topics
          </h3>

          {/* Search — always visible */}
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="border-border bg-background text-foreground focus:ring-ring/30 h-11 w-full rounded-[12px] border px-3 text-sm outline-none focus:ring-2"
          />

          {/* Mobile: dropdown */}
          <div className="lg:hidden">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="border-border bg-background text-foreground focus:ring-ring/30 h-11 w-full rounded-[12px] border px-3 text-sm shadow-none focus:ring-2">
                <SelectValue placeholder={ALL} />
              </SelectTrigger>

              <SelectContent
                align="start"
                sideOffset={6}
                className="border-border bg-background text-foreground rounded-[12px] border p-1 shadow-none"
              >
                {categories.map((c) => {
                  const active = category === c;
                  return (
                    <SelectItem
                      key={c}
                      value={c}
                      className={cn(
                        'rounded-[8px] px-3 py-2 text-sm transition-colors',
                        active
                          ? 'bg-muted text-tagline'
                          : 'hover:bg-muted text-foreground',
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
                        'w-full rounded-[8px] px-0 py-2 text-left text-sm transition-colors',
                        active
                          ? 'text-tagline'
                          : 'text-muted-foreground hover:text-foreground',
                      )}
                    >
                      <span
                        className={cn(
                          'inline-flex items-center gap-3 pl-3',
                          'border-l-2',
                          active ? 'border-tagline' : 'border-transparent',
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
          {pageItems.length === 0 ? (
            <p className="text-muted-foreground text-base">No posts found.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {pageItems.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block">
                  <article className="bg-background overflow-hidden">
                    <Image
                      src={p.coverImage || '/images/blog/placeholder.webp'}
                      alt={p.title}
                      width={800}
                      height={520}
                      className="h-[200px] w-full rounded-xl object-cover sm:h-[220px]"
                    />

                    <div className="mt-5 mb-6">
                      {!!p.tagline && (
                        <span className="text-tagline">{p.tagline}</span>
                      )}

                      <h4 className="text-foreground mt-2 text-[20px] leading-[1.3] tracking-tight">
                        {p.title}
                      </h4>

                      {!!p.intro && (
                        <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
                          {p.intro}
                        </p>
                      )}

                      <div className="text-muted-foreground mt-4 flex items-center gap-3">
                        <Image
                          src="/images/homepage/testimonials/1.webp"
                          alt=""
                          width={24}
                          height={24}
                          className="h-6 w-6 rounded-full object-cover"
                        />
                        <span className="text-xs">{p.author}</span>
                        <span className="text-xs">•</span>
                        <span className="text-xs">
                          {p.date
                            ? new Date(p.date).toLocaleDateString(undefined, {
                                month: 'short',
                                day: '2-digit',
                                year: 'numeric',
                              })
                            : ''}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
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
