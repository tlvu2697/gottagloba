"use client";

import Image from "next/image";

type FeaturePricingProps = {
  overline?: string;
  title?: string;
  description?: string;
  description2?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function FeaturePricing({
  overline = "For Business Team",
  title = "End-to-end Billing Software",
  description = `Start accepting recurring payments in minutes. Use Invoicing to collect payments from existing customers or share a payment link to sell a subscription—no code required.`,
  description2 = `Once you're set up, you can manage accounts and view detailed financial and revenue reports directly from the Dashboard.`,
  imageSrc = "/images/features/pricing.webp",
  imageAlt = "Billing form UI preview",
}: FeaturePricingProps) {
  return (
    <section id="feature-pricing" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)]">
          <div className="max-w-xl">
            <p className="text-tagline mb-4 text-sm sm:text-base">{overline}</p>

            <h2 className="text-foreground text-3xl leading-tight font-medium tracking-tight sm:text-5xl md:text-[56px]">
              {title}
            </h2>

            <p className="text-muted-foreground mt-4 text-base sm:text-lg">
              {description}
            </p>
            <p className="text-muted-foreground mt-4 text-base sm:text-lg">
              {description2}
            </p>
          </div>

          <div className="w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={800}
              className="h-auto w-full object-contain object-left"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
