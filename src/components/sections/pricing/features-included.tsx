'use client';

import Image from 'next/image';

type IncludedItem = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt?: string;
};

export default function FeaturesIncluded({
  overline = 'Features',
  title = 'What\'s Included',
  subtitle = 'Unlock the power of our robust features to elevate your business to new heights',
  items = DEFAULT_ITEMS,
}: {
  overline?: string;
  title?: string;
  subtitle?: string;
  items?: IncludedItem[];
}) {
  return (
    <section
      id="features-included"
      className="bg-background px-6 lg:px-0"
    >
      <div className="container px-0 py-16 sm:py-20 md:py-24">
        <div className="text-center">
          <p className="text-tagline text-sm sm:text-base">{overline}</p>
          <h2 className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            {subtitle}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-18 md:gap-x-12 md:gap-y-18 lg:grid-cols-3">
          {items.map((it) => (
            <li key={it.title} className="text-center">
              <div
                className="border-border-light bg-card shadow-light mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border"
                aria-hidden
              >
                <Image
                  src={it.iconSrc}
                  alt={it.iconAlt ?? ''}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </div>

              <h3 className="text-foreground mt-6 text-lg font-medium">
                {it.title}
              </h3>
              <p className="text-muted-foreground mx-auto mt-2 max-w-[44ch] text-base">
                {it.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const DEFAULT_ITEMS: IncludedItem[] = [
  {
    title: 'Payments',
    description:
      'Facilitate secure transactions, ensuring smooth financial exchanges between businesses and customers.',
    iconSrc: '/images/features/included/payments.svg',
  },
  {
    title: 'Checkout',
    description:
      'Simplify the purchasing process with a seamless, efficient experience to complete transactions.',
    iconSrc: '/images/features/included/checkout.svg',
  },
  {
    title: 'Payment Link',
    description:
      'Generate quick and convenient links to streamline payment processes and improve customer satisfaction.',
    iconSrc: '/images/features/included/payment-link.svg',
  },
  {
    title: 'Connect',
    description:
      'Integrate with external systems to enhance operational efficiency and data exchange.',
    iconSrc: '/images/features/included/connect.svg',
  },
  {
    title: 'Billing',
    description:
      'Manage and track transactions efficiently, keeping accurate records and ensuring timely payments.',
    iconSrc: '/images/features/included/billing.svg',
  },
  {
    title: 'Invoicing',
    description:
      'Create and send professional invoices, streamlining the billing process and communication.',
    iconSrc: '/images/features/included/invoicing.svg',
  },
  {
    title: 'Revenue Recognition',
    description:
      'Automate recognition and recording for accuracy and compliance with accounting standards.',
    iconSrc: '/images/features/included/revenue.svg',
  },
  {
    title: 'Financial Connections',
    description:
      'Connect with financial institutions or services to manage finances effectively and securely.',
    iconSrc: '/images/features/included/connections.svg',
  },
  {
    title: 'Data Pipeline',
    description:
      'Manage the flow of data between systems or processes, ensuring seamless integration and efficiency.',
    iconSrc: '/images/features/included/data-pipeline.svg',
  },
];
