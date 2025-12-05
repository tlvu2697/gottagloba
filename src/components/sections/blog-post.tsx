import { cn, strapiUrl } from "@/lib/utils";
import type { StrapiImage } from "@/types/strapi-image";
import Image from "next/image";

type Props = {
  tagline?: string;
  title: string;
  intro?: string;
  image?: StrapiImage;
  author?: string;
  avatar?: StrapiImage;
  published?: string;
  children: React.ReactNode;
};

export default function BlogPost({
  tagline,
  title,
  intro,
  image,
  author,
  avatar,
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
                <div className="relative mx-auto aspect-video w-full max-w-[980px]">
                  <Image
                    src={strapiUrl(image.url)!}
                    alt={image.alternativeText ?? title}
                    fill
                    priority
                    className="rounded-xl object-cover"
                    sizes="(min-width:1024px) 980px, 100vw"
                  />
                </div>
              </div>
            ) : null}

            {(author ?? published) && (
              <div className="text-muted-foreground mt-5 flex items-center gap-3">
                {avatar && (
                  <Image
                    src={strapiUrl(avatar.url)!}
                    alt={avatar.alternativeText ?? title}
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full object-cover"
                  />
                )}
                {author && <span className="text-sm">{author}</span>}
                {author && published && <span className="text-sm">•</span>}
                {published && (
                  <span className="text-sm">
                    {new Date(published).toLocaleDateString(undefined, {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
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
              className={cn(
                "prose max-w-none",
                "prose-headings:text-foreground prose-h2:tracking-tight prose-h3:tracking-tight",
                "prose-p:text-muted-foreground prose-li:text-muted-foreground",
                "prose-a:text-tagline hover:prose-a:opacity-80",
                "prose-hr:border-border prose-blockquote:text-muted-foreground",
                "prose-img:rounded-xl",
                "dark:prose-invert",
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
