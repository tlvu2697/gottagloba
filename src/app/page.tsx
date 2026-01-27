"use client";

import { BUNDLES, FEATURED_BUNDLE } from "@/app/mock";
import Features from "@/components/sections/home/features";
import HomeHero from "@/components/sections/home/hero";
import LearnWorldsCourseBundles from "@/components/sections/home/learnworlds-course-bundles";
import Logos from "@/components/sections/home/logos";
import Testimonials from "@/components/sections/home/testimonials";
import Cta from "@/components/sections/shared/cta";
import Faq from "@/components/sections/shared/faq";
import { getAllBundles, getBundleById } from "@/data/learnworlds/api";
import type { LearnWorldsBundle } from "@/data/learnworlds/types/bundle";
import { strapiUrl } from "@/lib/utils";
import type { Metadata } from "@/types/metadata";
import type { StrapiResponse } from "@/types/strapi-response";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const MOCK = true;

export default function Home() {
  const { data: metadata, isLoading: isLoadingMetadata } = useQuery<Metadata>({
    queryKey: ["metadata"],
    placeholderData: keepPreviousData,
    staleTime: 1 * 60 * 1000, // 1 minutes
    queryFn: async () => {
      const res = await fetch(strapiUrl("/api/metadata?populate=*")!);
      const json_req = (await res.json()) as StrapiResponse<Metadata>;

      return json_req.data;
    },
    enabled: !MOCK,
  });

  const { data: bundles, isLoading: isLoadingBundles } = useQuery<
    LearnWorldsBundle[]
  >({
    queryKey: ["learnworlds-bundles"],
    staleTime: 1 * 60 * 1000, // 1 minutes
    queryFn: () => getAllBundles(),
    enabled: !MOCK,
  });

  const featuredBundleId = metadata?.featuredLearnworldsBundle;
  const { data: featuredBundle, isLoading: isLoadingFeaturedBundle } =
    useQuery<LearnWorldsBundle>({
      queryKey: ["learnworlds-featured-bundle", featuredBundleId],
      staleTime: 1 * 60 * 1000, // 1 minutes
      queryFn: () => getBundleById(featuredBundleId!),
      enabled: !MOCK && featuredBundleId !== undefined,
    });

  const isLoading =
    isLoadingMetadata || isLoadingBundles || isLoadingFeaturedBundle;

  return (
    <>
      {!MOCK && !isLoading && (
        <LearnWorldsCourseBundles
          featuredBundle={featuredBundle ?? FEATURED_BUNDLE}
          bundles={bundles ?? BUNDLES}
        />
      )}
      <HomeHero />
      <Logos />
      <Features />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
