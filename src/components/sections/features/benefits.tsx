"use client";

import Image from "next/image";

type Benefit = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt?: string;
};

const BENEFITS: Benefit[] = [
  {
    title: "Nano-Skills Training",
    description:
      "Break down complex workplace communication into bite-sized, actionable skills you can master step by step.",
    iconSrc: "/images/features/nano-skills.svg",
    iconAlt: "Progressive learning steps icon",
  },
  {
    title: "Authentic Scenarios",
    description:
      "Practice with real workplace situations - from upward management to navigating difficult conversations with confidence.",
    iconSrc: "/images/features/authentic-scenarios.svg",
    iconAlt: "Workplace conversation icon",
  },
  {
    title: "Structured Practice",
    description:
      "Follow a proven learning path with shadowing drills, diverse accent challenges, and workplace vocabulary that actually works.",
    iconSrc: "/images/features/structured-practice.svg",
    iconAlt: "Learning path with checkpoints icon",
  },
];

export default function FeatureBenefits({
  items = BENEFITS,
}: {
  items?: Benefit[];
}) {
  return (
    <section id="feature-benefits" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-12 sm:py-16 md:px-6 md:py-20">
        <ul className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3">
          {items.map(({ title, description, iconSrc, iconAlt }) => (
            <li key={title} className="text-start">
              <div className="border-border-light shadow-soft mb-6 flex h-11 w-11 items-center justify-center rounded-xl border bg-white">
                <Image
                  src={iconSrc}
                  alt={iconAlt ?? ""}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  priority={false}
                />
              </div>

              <h3 className="text-foreground text-base font-medium sm:text-lg">
                {title}
              </h3>
              <p className="text-muted-foreground mx-auto mt-2 text-sm sm:text-base">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
