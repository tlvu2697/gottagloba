import type { BlogPost } from "@/types/blog-post";

export const getTaglineCategory = (
  post: BlogPost,
): string | undefined => post.blogPostCategories[0]?.name;
