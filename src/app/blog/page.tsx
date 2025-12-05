"use client";

import type {
  GetBlogPostCategoriesResponse,
  GetBlogPostsResponse,
} from "@/app/blog/type";
import FeaturedPost from "@/components/sections/blog-featured";
import BlogGrid from "@/components/sections/blog-grid";
import SpinnerApplication from "@/components/spinner-application";
import { strapiUrl } from "@/lib/utils";
import type { BlogPostCategory } from "@/types/blog-post";
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
  const json_res = (await res.json()) as GetBlogPostCategoriesResponse;

  return json_res.data;
};

const fetchBlogPosts = async ({
  page,
  query,
  category,
  featured,
}: {
  page?: number;
  query?: string;
  category?: string;
  featured?: boolean;
}): Promise<GetBlogPostsResponse> => {
  console.log("asd", query);
  const params = qs.stringify({
    sort: "publishedAt:desc",
    populate: ["authors.avatar", "image", "blogPostCategories"],
    filters: {
      ...(category !== undefined &&
        category !== ALL_POST && {
          blogPostCategories: {
            name: {
              $eq: category,
            },
          },
        }),
      ...(query !== undefined && {
        $or: [
          { title: { $containsi: query } },
          { subtitle: { $containsi: query } },
          { summary: { $containsi: query } },
          { content: { $containsi: query } },
        ],
      }),
      ...(featured !== undefined && {
        featured: { $eq: featured },
      }),
    },
    pagination: {
      page: page ?? 1,
      pageSize: 6,
    },
  });

  const res = await fetch(strapiUrl(`/api/blog-posts?${params}`)!);
  return (await res.json()) as GetBlogPostsResponse;
};

export default function Page() {
  const queryClient = useQueryClient();
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [category, setCategory] = useState<string>(ALL_POST);

  const { data: blogPostCategories, isLoading: isLoadingBlogPostCategories } =
    useQuery<BlogPostCategory[]>({
      queryKey: ["blog-post-categories"],
      placeholderData: keepPreviousData,
      staleTime: 1 * 60 * 1000, // 1 minutes
      queryFn: () => fetchBlogPostCategories(),
    });

  const {
    data: blogPosts,
    isLoading: isLoadingBlogPosts,
    isPlaceholderData,
  } = useQuery<GetBlogPostsResponse>({
    queryKey: ["blog-posts", page, category, query],
    placeholderData: keepPreviousData,
    staleTime: 1 * 60 * 1000, // 1 minutes
    queryFn: () => fetchBlogPosts({ page, category, query }),
  });

  const { data: featuredBlogPosts, isLoading: isLoadingFeaturedBlogPosts } =
    useQuery<GetBlogPostsResponse>({
      queryKey: ["featured-blog-posts"],
      placeholderData: keepPreviousData,
      staleTime: 1 * 60 * 1000, // 1 minutes
      queryFn: () => fetchBlogPosts({ featured: true }),
    });

  if (isLoadingBlogPostCategories || isLoadingFeaturedBlogPosts) {
    return <SpinnerApplication />;
  }

  const isLoadingPosts = isLoadingBlogPosts || isPlaceholderData;
  const blogPostCategoryNames =
    blogPostCategories?.map((cat) => cat.name) ?? [];
  const totalPages = blogPosts?.meta.pagination.pageCount ?? 0;
  const featuredBlogPost = featuredBlogPosts?.data[0];

  // Prefetch next page
  if (page < totalPages) {
    void queryClient.prefetchQuery({
      queryKey: ["blog-posts", page + 1, category, query],
      queryFn: () => fetchBlogPosts({ page: page + 1, category, query }),
    });
  }

  return (
    <>
      {featuredBlogPost && <FeaturedPost post={featuredBlogPost} />}
      <BlogGrid
        isLoading={isLoadingPosts}
        posts={blogPosts?.data ?? []}
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
