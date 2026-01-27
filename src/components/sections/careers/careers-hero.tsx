"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

type CareersHeroProps = {
  overline?: string;
  title?: string;
  description?: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
};

export default function CareersHero({
  overline = "Careers",
  title = "Join Us in Empowering Global Careers",
  description = "Be part of a team dedicated to helping ambitious professionals achieve their dreams of global-scale careers.",
  primaryCtaHref = "#job-openings",
  primaryCtaLabel = "See Job Openings",
}: CareersHeroProps) {
  const handleScrollToSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetId = primaryCtaHref.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="careers-hero" className="bg-background px-6 lg:px-0">
      <div className="container px-0 md:px-6">
        <div className="bg-features-hero relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 sm:py-20 md:py-24">
            <p className="text-tagline mb-4 text-sm sm:text-base">{overline}</p>

            <h1 className="text-foreground text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl md:text-[68px]">
              {title}
            </h1>

            <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-base whitespace-pre-line sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button onClick={handleScrollToSection}>
                {primaryCtaLabel}
              </Button>
            </div>
          </div>
        </div>

        <div className="h-6 sm:h-8" />
      </div>
    </section>
  );
}
