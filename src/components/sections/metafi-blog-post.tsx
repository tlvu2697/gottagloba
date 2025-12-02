'use client';

import Image from 'next/image';

type Props = {
  tagline?: string;
  title: string;
  intro?: string;
  image?: string;
  author?: string;
  published?: string;
  children: React.ReactNode;
};

export default function MetafiBlogPost({
  tagline,
  title,
  intro,
  image,
  author,
  published,
  children,
}: Props) {
  return (
    <article className="w-full">
      <section className="px-6 pt-10 lg:pt-16">
        <div className="bg-accent container px-0">
          <div className="mx-auto max-w-[992px] px-4 py-6 md:py-12">
            {!!tagline && <span className="text-tagline">{tagline}</span>}

            <h1 className="text-foreground mt-3 text-[34px] leading-[1.2] tracking-tight lg:text-[40px]">
              {title}
            </h1>

            {intro ? (
              <p className="text-muted-foreground mt-3 max-w-[760px]">
                {intro}
              </p>
            ) : null}

            {image ? (
              <div className="mt-6">
                <div className="relative mx-auto aspect-[16/9] w-full max-w-[980px]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="rounded-xl object-cover"
                    sizes="(min-width:1024px) 980px, 100vw"
                  />
                </div>
              </div>
            ) : null}

            {(author || published) && (
              <div className="text-muted-foreground mt-5 flex items-center gap-3">
                <Image
                  src="/images/homepage/testimonials/1.webp"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full object-cover"
                />
                {author && <span className="text-sm">{author}</span>}
                {author && published && <span className="text-sm">•</span>}
                {published && (
                  <span className="text-sm">
                    {new Date(published).toLocaleDateString(undefined, {
                      month: 'short',
                      day: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:py-16">
        <div className="container px-0">
          <div className="mx-auto max-w-[992px] px-4 py-6 md:py-12">
            <div
              className={[
                'prose max-w-none',
                'prose-headings:text-foreground prose-h2:tracking-tight prose-h3:tracking-tight',
                'prose-p:text-muted-foreground prose-li:text-muted-foreground',
                'prose-a:text-tagline hover:prose-a:opacity-80',
                'prose-hr:border-border prose-blockquote:text-muted-foreground',
                'prose-img:rounded-xl',
              ].join(' ')}
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
