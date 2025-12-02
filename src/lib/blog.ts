import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const BLOGS_PATH = path.join(process.cwd(), 'src/blog');

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
  latest: boolean;
  tagline: string;
  content: string;
};

export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOGS_PATH)
    .filter((fileName) => fileName.endsWith('.mdx'));
}

export function getBlogBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(BLOGS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    description: data.description || data.intro || '',
    date: data.date || data.published || '',
    author: data.author || '',
    tags: data.tags || [],
    coverImage: data.coverImage || data.image || '',
    featured: data.featured || false,
    latest: data.latest || false, // ✅ reads it from frontmatter
    tagline: data.tagline || '',
    content,
  };
}

export function getAllBlogs(limit?: number): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogBySlug(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return limit ? posts.slice(0, limit) : posts;
}
