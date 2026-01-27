"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type FeaturesHeroProps = {
  overline?: string;
  title?: string;
  description?: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  imageSrc?: string;
};

export default function FeaturesHero({
  overline = "Recurring Billing",
  title = "Recurring Billing for Your Businesses",
  description = `Simple recurring billing to usage-based billing and sales-negotiated contracts. Collect and retain more revenue, automate revenue management workflows, and accept payments globally.`,
  primaryCtaHref = "/pricing",
  primaryCtaLabel = "Get Started",
  secondaryCtaHref = "/contact",
  secondaryCtaLabel = "Contact Sales",
  imageSrc = "/images/features/feature.webp",
}: FeaturesHeroProps) {
  return (
    <section id="features-hero" className="bg-background px-6 lg:px-0">
      <div className="container px-0 md:px-6">
        <div className="bg-features-hero relative overflow-hidden">
          <div className="grid items-center gap-8 p-6 sm:p-8 md:gap-12 md:p-12 lg:grid-cols-2">
            <div className="max-w-xl">
              <p className="text-tagline mb-2 text-sm sm:text-base">
                {overline}
              </p>

              <h2 className="text-foreground text-[36px] leading-[1.05] font-medium tracking-tight sm:text-5xl md:text-[64px]">
                {title.split("\n").map((line, i) => (
                  <span key={i} className={i > 0 ? "block" : undefined}>
                    {line}
                  </span>
                ))}
              </h2>

              <p className="text-muted-foreground mt-4 text-base sm:text-lg">
                {description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-start sm:gap-4">
                <Button asChild className="w-full sm:w-auto">
                  <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
                </Button>

                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="border-border-light shadow-soft relative aspect-[10/9] w-full max-w-[1000px] overflow-hidden rounded-[16px] border bg-white lg:w-[500px]">
                <Image
                  src={imageSrc}
                  alt="Pricing plans UI preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-6 sm:h-8" />
      </div>
    </section>
  );
}
