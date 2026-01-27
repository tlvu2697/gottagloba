"use client";

import AboutHero from "@/components/sections/about/hero";
import PartnerLogos from "@/components/sections/about/partner-logos";
import Team from "@/components/sections/about/team";
import ThroughYears from "@/components/sections/about/through-years";
import Cta from "@/components/sections/shared/cta";
import { strapiUrl } from "@/lib/utils";
import type { Member } from "@/types/member";
import type { StrapiResponse } from "@/types/strapi-response";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import qs from "qs";

const fetchMembers = async (): Promise<Member[]> => {
  const query = qs.stringify({
    sort: "disclosure:asc",
    populate: ["avatar"],
    filters: {
      disclosure: { $notNull: true },
    },
    pagination: {
      pageSize: 100,
    },
  });

  const res = await fetch(strapiUrl(`/api/members?${query}`)!);
  const json_res = (await res.json()) as StrapiResponse<Member[]>;

  return json_res.data;
};

export default function AboutPage() {
  const { data: members, isLoading: isLoadingMembers } = useQuery<Member[]>({
    queryKey: ["members"],
    placeholderData: keepPreviousData,
    staleTime: 1 * 60 * 1000, // 1 minutes
    queryFn: fetchMembers,
  });

  return (
    <>
      <AboutHero />
      <ThroughYears />
      <Team members={members ?? []} isLoading={isLoadingMembers} />
      <PartnerLogos />
      <Cta />
    </>
  );
}
