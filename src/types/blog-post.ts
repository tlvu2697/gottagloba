import type { StrapiImage } from "@/types/strapi-image";

export type BlogPostCategory = {
  id: number;
  documentId: string;
  slug: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type Author = {
  id: number;
  documentId: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  avatar: StrapiImage;
}

export type BlogPost = {
  id: number;
  documentId: string;
  slug: string;
  featured: boolean;
  title: string;
  subtitle: string;
  summary: string;
  content: string;
  image: StrapiImage;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blogPostCategories: BlogPostCategory[];
  authors: Author[];
}
