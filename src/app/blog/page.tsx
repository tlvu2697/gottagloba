import FeaturedPost from '@/components/sections/metafi-blog-featured';
import MetafiBlogGrid from '@/components/sections/metafi-blog-grid';
import type { BlogPost } from '@/lib/blog';
import { getAllBlogs } from '@/lib/blog';

function extractChip(post: BlogPost): string {
  const fromTagline =
    typeof post.tagline === 'string' ? post.tagline.trim() : '';
  const fromTags =
    Array.isArray(post.tags) && typeof post.tags[0] === 'string'
      ? post.tags[0].trim()
      : '';
  return fromTagline || fromTags || 'General';
}

export default function BlogPage() {
  const allPosts = getAllBlogs();

  const featured = allPosts.find((p) => p.featured) ?? null;

  // grid cards
  const gridPosts = allPosts.map((p) => ({
    slug: p.slug,
    title:
      (typeof p.title === 'string' ? p.title.trim() : '') ||
      p.slug.replace(/-/g, ' '),
    tagline: extractChip(p),
    intro: p.description ?? '',
    author: p.author ?? '',
    date: p.date ?? '',
    coverImage: p.coverImage ?? '',
  }));

  return (
    <>
      {featured && <FeaturedPost post={featured} />}
      <MetafiBlogGrid posts={gridPosts} />
    </>
  );
}
