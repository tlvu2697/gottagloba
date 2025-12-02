'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

type MetafiCareersHeroProps = {
  overline?: string;
  title?: string;
  description?: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
};

export default function MetafiCareersHero({
  overline = 'Careers',
  title = 'Join The Future of Financial Platform',
  description = 'Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris. Auctor vitae neque urna nam nunc pellentesque.',
  primaryCtaHref = '#',
  primaryCtaLabel = 'See Job Openings',
}: MetafiCareersHeroProps) {
  return (
    <section id="metafi-careers-hero" className="bg-background px-6 lg:px-0">
      <div className="container px-0 md:px-6">
        <div className="bg-features-hero relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 sm:py-20 md:py-24">
            <p className="text-tagline mb-4 text-sm sm:text-base">{overline}</p>

            <h1 className="text-foreground text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl md:text-[68px]">
              {title}
            </h1>

            <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-base sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild>
                <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="h-6 sm:h-8" />
      </div>
    </section>
  );
}
