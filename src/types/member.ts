import type { StrapiImage } from "@/types/strapi-image";

export type Member = {
  id: number;
  documentId: string;
  role: string;
  displayName: string;
  linkedInUrl: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  avatar: StrapiImage;
}
