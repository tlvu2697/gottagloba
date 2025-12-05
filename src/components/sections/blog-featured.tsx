"use client";

import { getTaglineCategory } from "@/app/blog/utils";
import { strapiUrl } from "@/lib/utils";
import type { BlogPost } from "@/types/blog-post";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedPost({ post }: { post: BlogPost }) {
  const { slug, title, summary, image, authors } = post;
  const tagline = getTaglineCategory(post);
  const author = authors[0];

  return (
    <section className="px-6 py-10 lg:py-16">
      <div className="container px-0">
        <Link href={`/blog/${slug}`}>
          <article className="bg-accent p-5 lg:p-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col justify-between lg:p-6">
                <div>
                  {!!tagline && (
                    <span className="text-tagline text-md">{tagline}</span>
                  )}
                  <h1 className="text-foreground mt-3 text-[32px] leading-tight tracking-tight lg:text-[36px]">
                    {title}
                  </h1>
                  {!!summary && (
                    <p className="text-muted-foreground mt-3 max-w-[640px]">
                      {summary}
                    </p>
                  )}
                  <div className="text-muted-foreground mt-4 flex items-center gap-3">
                    {author?.avatar && (
                      <>
                        <Image
                          src={strapiUrl(author.avatar.url)!}
                          alt={author.avatar.alternativeText ?? title}
                          width={28}
                          height={28}
                          className="h-7 w-7 rounded-full object-cover"
                        />
                        <span className="text-sm">
                          {author.firstName} {author.lastName}
                        </span>
                      </>
                    )}

                    <span className="text-sm">•</span>
                    <span className="text-sm">
                      {post.date
                        ? new Date(post.date).toLocaleDateString(undefined, {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                          })
                        : ""}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative aspect-10/9 w-full max-w-[500px] lg:aspect-auto lg:h-[450px] lg:w-[500px]">
                  <Image
                    src={strapiUrl(image.url)!}
                    alt={image.alternativeText ?? title}
                    fill
                    className="rounded-xl object-cover"
                    sizes="(min-width:1024px) 500px, 100vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
}
