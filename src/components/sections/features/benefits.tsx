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
    title: "Collect More Revenue",
    description:
      "Maximize revenue collection with efficient strategies and streamlined processes.",
    iconSrc: "/images/features/bar.svg",
    iconAlt: "Bar chart icon",
  },
  {
    title: "Realtime Notifications",
    description:
      "Receive instant notifications in real-time for prompt updates and timely responses.",
    iconSrc: "/images/features/bell.svg",
    iconAlt: "Notification bell icon",
  },
  {
    title: "Easy Management",
    description:
      "Get realtime updates when users start or end subscriptions, or have low funds in their wallet.",
    iconSrc: "/images/features/server.svg",
    iconAlt: "Controls icon",
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
