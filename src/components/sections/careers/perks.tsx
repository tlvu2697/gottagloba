"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

type PerksProps = {
  overline?: string;
  title?: string;
  description?: string;
  perks?: string[];
  imageSrc?: string;
  imageAlt?: string;
};

const DEFAULT_PERKS = [
  "Competitive compensation",
  "Flexible and hybrid working hours",
  "Health and wellness benefits",
  "Medical, dental & vision insurance",
  "And much more…",
];

export default function Perks({
  overline = "Benefit",
  title = "Perks and Benefit",
  description = `These can include various offerings such as health insurance, retirement plans, paid time off, wellness programs, flexible working hours, professional development opportunities, employee discounts, and more. These perks and benefits are designed to enhance employee satisfaction, promote well-being, and attract and retain top talent within the organization.`,
  perks = DEFAULT_PERKS,
  imageSrc = "/images/about/perks.webp",
  imageAlt = "Happy teammate on a video call",
}: PerksProps) {
  return (
    <section id="perks" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative overflow-hidden rounded-t-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1600}
                height={1066}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority={false}
              />
            </div>
          </div>

          <div>
            <p className="text-tagline text-sm sm:text-base">{overline}</p>
            <h2 className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
              {title}
            </h2>
            <p className="text-muted-foreground mt-4 text-base sm:text-lg">
              {description}
            </p>

            <ul className="mt-6 space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="text-success mt-0.5 h-5 w-5" />
                  <span className="text-foreground/90 text-base">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
