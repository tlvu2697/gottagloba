import type { BlogPost, BlogPostCategory } from "@/types/blog-post";
import type { StrapiMetadata } from "@/types/strapi-metadata";

export type GetBlogPostsResponse = {
  data: BlogPost[];
  meta: StrapiMetadata;
};

export type GetBlogPostCategoriesResponse = {
  data: BlogPostCategory[];
  meta: StrapiMetadata;
};
