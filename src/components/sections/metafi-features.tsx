import Image from 'next/image';

import AnimationCheckout from '../ui/animation-checkout';
import AnimationInvoicing from '../ui/animation-invoicing';
import AnimationPaymentLink from '../ui/animation-payment-link';
import AnimationRecurringBilling from '../ui/animation-recurring-bill';

type Feature = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Checkout',
    description:
      'Embed checkout into your website or direct customers to a Metafi-hosted page to easily and securely accept one-time payments or subscriptions.',
    image: '/images/homepage/features/animation1.svg',
  },
  {
    title: 'Recurring Billing',
    description:
      'Collect and retain more revenue, automate revenue management workflows, and accept payments.',
    image: '/images/homepage/features/recurring-billing.webp',
  },
  {
    title: 'Invoicing',
    description:
      'Create an invoice and send it to your customers in minutes—no-code required—to easily collect payments.',
    image: '/images/homepage/features/invoicing.webp',
  },
  {
    title: 'Payment Link',
    description:
      'Sell online without a website. Create a full payment page in a few clicks and share the link with customers—no code required.',
    image: '/images/homepage/features/payment-link.webp',
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const isCheckout = feature.title === 'Checkout';
  const isRecurring = feature.title === 'Recurring Billing';
  const isInvoicing = feature.title === 'Invoicing';
  const isPayment = feature.title === 'Payment Link';

  return (
    <div className="bg-card border-border-light relative flex flex-col rounded-[16px] border p-6 text-left shadow-[0_2px_8px_-1px_rgba(13,13,18,0.04)]">
      <h3 className="text-foreground text-lg font-medium sm:text-xl">
        {feature.title}
      </h3>
      <p className="text-muted-foreground mt-2 text-sm sm:text-base">
        {feature.description}
      </p>

      <div className="relative mt-6 w-full overflow-hidden rounded-[12px]">
        <div className="bg-accent relative h-[220px] w-full sm:h-[260px] md:h-[300px]">
          {isRecurring ? (
            <AnimationRecurringBilling className="absolute inset-0" />
          ) : isCheckout ? (
            <AnimationCheckout className="absolute inset-0" />
          ) : isInvoicing ? (
            <AnimationInvoicing className="absolute inset-0" />
          ) : isPayment ? (
            <AnimationPaymentLink className="absolute inset-0" />
          ) : (
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const MetafiFeatures = () => {
  const [f1, f2, f3, f4] = FEATURES;

  return (
    <section id="metafi-features" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <p className="text-tagline mb-4 text-center text-sm sm:text-base">
          Features
        </p>

        <h2 className="text-foreground mx-auto max-w-3xl text-center text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
          Everything You Need to Run & <br className="hidden sm:block" />
          Grow Your Business
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base sm:text-lg">
          All the tools and resources necessary for managing and expanding your
          business, conveniently accessible in one place. Take control of your
          journey to success with our comprehensive solutions.
        </p>

        <div className="mt-12 flex flex-col gap-6 md:mt-14 md:gap-8 lg:flex-row">
          <div className="lg:flex-1">
            <FeatureCard feature={f1!} />
          </div>
          <div className="lg:w-[500px]">
            <FeatureCard feature={f2!} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6 md:mt-8 md:gap-8 lg:flex-row">
          <div className="lg:w-[500px]">
            <FeatureCard feature={f3!} />
          </div>
          <div className="lg:flex-1">
            <FeatureCard feature={f4!} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetafiFeatures;
