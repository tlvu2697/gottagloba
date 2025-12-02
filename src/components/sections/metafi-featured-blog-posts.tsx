'use client';

import Image from 'next/image';
import Link from 'next/link';

export type FeaturedCard = {
  slug: string;
  title: string;
  intro?: string;
  tagline?: string;
  author?: string;
  date?: string;
  coverImage?: string;
};

export default function MetafiFeaturedBlogPosts({
  posts = [],
  title = 'Latest Blog Posts',
  overline = 'Our Blog',
  subtitle = "Here's what some of our customers say about our platform.",
}: {
  posts?: FeaturedCard[];
  title?: string;
  overline?: string;
  subtitle?: string;
}) {
  if (!posts.length) return null;

  const left = posts.filter((_, i) => i % 2 === 0);
  const right = posts.filter((_, i) => i % 2 === 1);

  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="container px-0 md:px-6">
        <div className="text-center">
          <div className="text-tagline text-sm font-medium">{overline}</div>
          <h2 className="text-foreground mt-2 text-3xl leading-tight font-medium tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-[720px]">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2">
          <div className="space-y-10">
            {left.map((p) => (
              <PostRow key={p.slug} {...p} />
            ))}
          </div>
          <div className="space-y-10">
            {right.map((p) => (
              <PostRow key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PostRow(p: FeaturedCard) {
  return (
    <Link href={`/blog/${p.slug}`} className="block">
      <article className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-[250px_minmax(0,1fr)] sm:gap-6">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-auto sm:h-full sm:w-[250px]">
          <Image
            src={p.coverImage || '/images/blog/placeholder.webp'}
            alt={p.title}
            fill
            className="object-cover"
            sizes="(min-width:640px) 250px, 100vw"
            priority={false}
          />
        </div>

        <div>
          {!!p.tagline && (
            <div className="text-tagline text-sm">{p.tagline}</div>
          )}
          <h3 className="text-foreground mt-1 text-[22px] leading-[1.25] font-medium tracking-tight">
            {p.title}
          </h3>
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
  );
}
