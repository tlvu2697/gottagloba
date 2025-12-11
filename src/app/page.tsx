"use client";

import { BUNDLES, FEATURED_BUNDLE } from "@/app/mock";
import type { GetMetadataResponse } from "@/app/type";
import { LearnWorldsCourseBundles } from "@/components/sections/learnworlds-course-bundles";
import MetafiCta from "@/components/sections/matafi-cta";
import MetafiFaq from "@/components/sections/metafi-faq";
import MetafiFeatures from "@/components/sections/metafi-features";
import MetafiHero from "@/components/sections/metafi-hero";
import MetafiIntegrations from "@/components/sections/metafi-integrations";
import MetafiLogos from "@/components/sections/metafi-logos";
import MetafiTestimonials from "@/components/sections/metafi-testimonials";
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
      {!isLoading && (
        <LearnWorldsCourseBundles
          featuredBundle={featuredBundle ?? FEATURED_BUNDLE}
          bundles={bundles ?? BUNDLES}
        />
      )}
      <MetafiHero />
      <MetafiLogos />
      <MetafiFeatures />
      <MetafiIntegrations />
      <MetafiTestimonials />
      <MetafiFaq />
      {/* <MetafiFeaturedBlogPosts posts={cards} /> */}
      <MetafiCta />
    </>
  );
}
