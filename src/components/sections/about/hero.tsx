"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type AboutHeroProps = {
  overline?: string;
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function AboutHero({
  overline = "About Us",
  title = "Get to Know Gotta GLOBA",
  subtitle = "Gateway to discovering the essence of our company and the comprehensive suite of financial solutions we offer.",
  ctaHref = "/careers",
  ctaLabel = "See Open Positions",
  imageSrc = "/images/about/hero.webp",
  imageAlt = "Gotta GLOBA team working together",
}: AboutHeroProps) {
  return (
    <section id="about-hero" className="bg-background px-6 lg:px-0">
      <div className="container px-0 md:px-6">
        <div className="bg-features-hero relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-8 sm:py-18 md:py-20">
            <p className="text-tagline text-sm sm:text-base">{overline}</p>

            <h1 className="text-foreground mt-4 text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl md:text-[68px]">
              {title}
            </h1>

            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
              {subtitle}
            </p>

            <div className="mt-8">
              <Button asChild className="w-full sm:w-auto">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </div>

          <div className="px-6 sm:px-8">
            <div className="border-border-light shadow-light bg-card mx-auto max-w-5xl overflow-hidden rounded-t-sm border md:rounded-t-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={2400}
                height={1400}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
                priority={false}
              />
            </div>
          </div>
        </div>

        <div className="h-6 sm:h-8" />
      </div>
    </section>
  );
}
