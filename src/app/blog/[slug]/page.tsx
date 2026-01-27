"use client";

import type { GetBlogPostsResponse } from "@/app/blog/type";
import BlogPost from "@/components/sections/blog/blog-post";
import SpinnerApplication from "@/components/spinner-application";
import { strapiUrl } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { notFound, useParams } from "next/navigation";
import qs from "qs";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

const fetchBlogPost = async (slug: string): Promise<GetBlogPostsResponse> => {
  const query = qs.stringify({
    sort: "publishedAt:desc",
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: ["authors.avatar", "image", "blogPostCategories"],
  });

  const res = await fetch(strapiUrl(`/api/blog-posts?${query}`)!);
  return (await res.json()) as GetBlogPostsResponse;
};

const Page = () => {
  const { slug }: { slug: string } = useParams();
  const { data: apiData, isLoading } = useQuery<GetBlogPostsResponse>({
    queryKey: ["blog-posts", slug],
    queryFn: () => fetchBlogPost(slug),
  });
  const blogPost = apiData?.data[0];

  if (isLoading) {
    return <SpinnerApplication />;
  }

  if (!blogPost) notFound();

  const { title, summary, image, authors, blogPostCategories, content, date } =
    blogPost;
  const author = authors[0];
  const category = blogPostCategories[0];

  return (
    <BlogPost
      tagline={category?.name}
      title={title}
      intro={summary}
      image={image}
      author={`${author?.firstName} ${author?.lastName}`}
      avatar={author?.avatar}
      published={date}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize]}
      >
        {content}
      </ReactMarkdown>
    </BlogPost>
  );
};

export default Page;
