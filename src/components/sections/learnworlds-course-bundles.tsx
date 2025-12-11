"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { LearnWorldsBundle } from "@/data/learnworlds/types/bundle";
import Link from "next/link";

const PER_PAGE = 6;

const DEFAULT_IMAGES = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
] as const;

const BlogsResult = ({ bundles }: { bundles: Array<LearnWorldsBundle> }) => {
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);
  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + PER_PAGE);
  }, []);
  const hasMore = visibleCount < bundles.length;

  return (
    <div>
      <div className="flex w-full flex-col gap-4 py-8 lg:gap-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {bundles.slice(0, visibleCount).map((bundle) => (
            <CourseBundleCard key={bundle.title} {...bundle} />
          ))}
        </div>
        <div className="flex justify-center">
          {hasMore && (
            <Button onClick={handleLoadMore} aria-label="Load more">
              Load More
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const CourseBundleCard = ({
  id,
  title,
  image,
  description,
  cta = "Explore",
}: LearnWorldsBundle & { cta?: string }) => (
  <Link href={`/course-bundles/${id}`} className="block h-full w-full">
    <Card className="size-full rounded-lg border py-0">
      <CardContent className="p-0">
        {/* <div className="text-muted-foreground border-b p-2.5 text-sm leading-[1.2] font-medium"> */}
        {/*   {category} */}
        {/* </div> */}
        <AspectRatio ratio={1.520833333} className="overflow-hidden">
          <Image
            src={image ?? DEFAULT_IMAGES[0]}
            alt={title}
            fill={true}
            className="block size-full object-cover object-center"
          />
        </AspectRatio>
        <div className="flex w-full flex-col gap-5 p-5">
          <h2 className="text-lg leading-tight font-medium md:text-xl">
            {title}
          </h2>
          <div className="w-full max-w-[20rem]">
            <p className="text-muted-foreground text-sm leading-[1.4] font-medium">
              {description}
            </p>
          </div>
          <div>
            <Button size="sm" variant="outline">
              {cta}
              <ArrowRight />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </Link>
);

const LearnWorldsCourseBundles = ({
  featuredBundle,
  bundles,
}: {
  featuredBundle: LearnWorldsBundle;
  bundles: LearnWorldsBundle[];
}) => {
  return (
    <section className="pb-32">
      <div className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-size-[3.125rem_3.125rem] bg-repeat">
        <div className="container flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-col justify-between gap-12">
            <div className="flex w-full max-w-xl flex-col gap-8">
              <div className="flex w-full flex-col gap-5">
                <h1 className="text-[2.5rem] leading-[1.2] font-semibold md:text-5xl lg:text-6xl">
                  Top Course Bundle
                </h1>
                <p className="text-muted-foreground text-xl leading-[1.4]">
                  Explore our curated selection of top-rated courses designed to
                  boost your skills and knowledge.
                </p>
              </div>
            </div>
          </div>

          {featuredBundle && (
            <div className="w-full max-w-110">
              <CourseBundleCard {...featuredBundle} />
            </div>
          )}
        </div>
      </div>
      <div className="py-20">
        <div className="container flex flex-col gap-8">
          <h2 className="text-[1.75rem] leading-none font-medium md:text-[2.25rem] lg:text-[2rem]">
            All Course Bundles
          </h2>
          <div>
            <BlogsResult bundles={bundles} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { LearnWorldsCourseBundles };
