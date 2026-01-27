import type { StrapiMetadata } from "@/types/strapi-metadata";

export type StrapiResponse<T> = {
  data: T;
  meta: StrapiMetadata;
};
