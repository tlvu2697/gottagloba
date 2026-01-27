"use client";

import { default as BlogPostSection } from "@/components/sections/blog/blog-post";
import SpinnerApplication from "@/components/spinner-application";
import { strapiUrl } from "@/lib/utils";
import type { BlogPost } from "@/types/blog-post";
import type { StrapiResponse } from "@/types/strapi-response";
import { useQuery } from "@tanstack/react-query";
import { notFound, useParams } from "next/navigation";
import qs from "qs";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
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
  const json_res = (await res.json()) as StrapiResponse<BlogPost[]>;

  return json_res.data[0] ?? null;
};

const Page = () => {
  const { slug }: { slug: string } = useParams();
  const { data: blogPost, isLoading } = useQuery<BlogPost | null>({
    queryKey: ["blog-posts", slug],
    queryFn: () => fetchBlogPost(slug),
  });

  if (isLoading) {
    return <SpinnerApplication />;
  }

  if (!blogPost) notFound();

  const { title, summary, image, authors, blogPostCategories, content, date } =
    blogPost;
  const author = authors[0];
  const category = blogPostCategories[0];

  return (
    <BlogPostSection
      tagline={category?.name}
      title={title}
      intro={summary}
      image={image}
      author={`${author?.displayName}`}
      avatar={author?.avatar}
      published={date}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize]}
      >
        {content}
      </ReactMarkdown>
    </BlogPostSection>
  );
};

export default Page;
