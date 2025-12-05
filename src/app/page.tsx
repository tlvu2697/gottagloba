import MetafiCta from '@/components/sections/matafi-cta';
import MetafiFaq from '@/components/sections/metafi-faq';
import MetafiFeaturedBlogPosts, {
  type FeaturedCard,
} from '@/components/sections/metafi-featured-blog-posts';
import MetafiFeatures from '@/components/sections/metafi-features';
import MetafiHero from '@/components/sections/metafi-hero';
import MetafiIntegrations from '@/components/sections/metafi-integrations';
import MetafiLogos from '@/components/sections/metafi-logos';
import MetafiTestimonials from '@/components/sections/metafi-testimonials';
import { getAllBlogs } from '@/lib/blog';

export default function Home() {
  const latest = getAllBlogs()
    .filter((p) => p.latest)
    .slice(0, 4);

  const cards: FeaturedCard[] = latest.map((p) => ({
    slug: p.slug,
    title: p.title,
    intro: p.description,
    tagline: p.tagline,
    author: p.author,
    date: p.date,
    coverImage: p.coverImage,
  }));

  return (
    <>
      <MetafiHero />
      <MetafiLogos />
      <MetafiFeatures />
      <MetafiIntegrations />
      <MetafiTestimonials />
      <MetafiFaq />
      <MetafiFeaturedBlogPosts posts={cards} />
      <MetafiCta />
    </>
  );
}
