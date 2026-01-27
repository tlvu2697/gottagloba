"use client";

import BlogPostGrid from "@/components/sections/blog/blog-post-grid";
import FeaturedBlogPost from "@/components/sections/blog/featured-blog-post";
import SpinnerApplication from "@/components/spinner-application";
import { strapiUrl } from "@/lib/utils";
import type { BlogPost, BlogPostCategory } from "@/types/blog-post";
import type { Metadata } from "@/types/metadata";
import type { StrapiResponse } from "@/types/strapi-response";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import qs from "qs";
import { useState } from "react";

const ALL_POST = "All Post";

const fetchBlogPostCategories = async (): Promise<BlogPostCategory[]> => {
  const query = qs.stringify({
    sort: "name:asc",
    pagination: {
      pageSize: 100,
    },
  });

  const res = await fetch(strapiUrl(`/api/blog-post-categories?${query}`)!);
  const json_res = (await res.json()) as StrapiResponse<BlogPostCategory[]>;

  return json_res.data;
};

const fetchMetadata = async (): Promise<Metadata> => {
  const params = qs.stringify({
    populate: [
      "featuredBlogPost",
      "featuredBlogPost.authors.avatar",
      "featuredBlogPost.image",
      "featuredBlogPost.blogPostCategories",
    ],
  });

  const res = await fetch(strapiUrl(`/api/metadata?${params}`)!);
  const json_res = (await res.json()) as StrapiResponse<Metadata>;

  return json_res.data;
};

const fetchBlogPosts = async ({
  page,
  query,
  category,
  featuredSlug,
}: {
  page?: number;
  query?: string;
  category?: string;
  featuredSlug?: string;
}): Promise<StrapiResponse<BlogPost[]>> => {
  const params = qs.stringify({
    sort: "publishedAt:desc",
    populate: ["authors.avatar", "image", "blogPostCategories"],
    filters: {
      ...(category &&
        category !== ALL_POST && {
          blogPostCategories: {
            name: {
              $eq: category,
            },
          },
        }),
      ...(query && {
        $or: [
          { title: { $containsi: query } },
          { subtitle: { $containsi: query } },
          { summary: { $containsi: query } },
          { content: { $containsi: query } },
        ],
      }),
      ...(featuredSlug && {
        slug: { $ne: featuredSlug },
      }),
    },
    pagination: {
      page: page ?? 1,
      pageSize: 6,
    },
  });

  const res = await fetch(strapiUrl(`/api/blog-posts?${params}`)!);
  return (await res.json()) as StrapiResponse<BlogPost[]>;
};

export default function Page() {
  const queryClient = useQueryClient();
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [category, setCategory] = useState<string>(ALL_POST);

  const { data: metadata, isLoading: isLoadingMetadata } =
    useQuery<Metadata>({
      queryKey: ["metadata", "blog"],
      placeholderData: keepPreviousData,
      staleTime: 1 * 60 * 1000, // 1 minutes
      queryFn: fetchMetadata,
    });

  const { data: blogPostCategories, isLoading: isLoadingBlogPostCategories } =
    useQuery<BlogPostCategory[]>({
      queryKey: ["blog-post-categories"],
      placeholderData: keepPreviousData,
      staleTime: 1 * 60 * 1000, // 1 minutes
      queryFn: fetchBlogPostCategories,
    });

  const featuredBlogPost = metadata?.featuredBlogPost;

  const {
    data: blogPostsResponse,
    isLoading: isLoadingBlogPosts,
    isPlaceholderData,
  } = useQuery<StrapiResponse<BlogPost[]>>({
    queryKey: ["blog-posts", page, category, query, featuredBlogPost?.slug],
    placeholderData: keepPreviousData,
    staleTime: 1 * 60 * 1000, // 1 minutes
    queryFn: () =>
      fetchBlogPosts({
        page,
        category,
        query,
        featuredSlug: featuredBlogPost?.slug,
      }),
  });

  if (isLoadingMetadata || isLoadingBlogPostCategories) {
    return <SpinnerApplication />;
  }

  const isLoadingPosts = isLoadingBlogPosts || isPlaceholderData;
  const blogPostCategoryNames =
    blogPostCategories?.map((cat) => cat.name) ?? [];
  const totalPages = blogPostsResponse?.meta.pagination.pageCount ?? 0;

  // Prefetch next page
  if (page < totalPages) {
    void queryClient.prefetchQuery({
      queryKey: ["blog-posts", page + 1, category, query],
      queryFn: () => fetchBlogPosts({ page: page + 1, category, query }),
    });
  }

  return (
    <>
      {featuredBlogPost && <FeaturedBlogPost blogPost={featuredBlogPost} />}
      <BlogPostGrid
        isLoading={isLoadingPosts}
        blogPosts={blogPostsResponse?.data ?? []}
        categories={[ALL_POST, ...blogPostCategoryNames]}
        totalPages={totalPages}
        page={page}
        query={query}
        category={category}
        setPage={setPage}
        setQuery={setQuery}
        setCategory={setCategory}
      />
    </>
  );
}
