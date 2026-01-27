"use client";

import { BUNDLES, FEATURED_BUNDLE } from "@/app/mock";
import type { GetMetadataResponse } from "@/app/type";
import Features from "@/components/sections/home/features";
import HomeHero from "@/components/sections/home/hero";
import Logos from "@/components/sections/home/logos";
import Testimonials from "@/components/sections/home/testimonials";
import LearnWorldsCourseBundles from "@/components/sections/home/learnworlds-course-bundles";
import Cta from "@/components/sections/shared/cta";
import Faq from "@/components/sections/shared/faq";
import Integrations from "@/components/sections/shared/integrations";
import { getAllBundles, getBundleById } from "@/data/learnworlds/api";
import type { LearnWorldsBundle } from "@/data/learnworlds/types/bundle";
import { strapiUrl } from "@/lib/utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const MOCK = true;

export default function Home() {
  const { data: metadata, isLoading: isLoadingMetadata } =
    useQuery<GetMetadataResponse>({
      queryKey: ["metadata"],
      placeholderData: keepPreviousData,
      staleTime: 1 * 60 * 1000, // 1 minutes
      queryFn: async () => {
        const res = await fetch(strapiUrl("/api/metadata")!);
        return (await res.json()) as GetMetadataResponse;
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

  const featuredBundleId = metadata?.data.featuredLearnworldsBundle;
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
      <Integrations />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
