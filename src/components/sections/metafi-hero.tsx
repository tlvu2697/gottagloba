import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { GridBackground } from '../ui/grid-background';

const MetafiHero = () => {
  return (
    <section
      id="metafi-hero"
      className="bg-background border-b-border relative overflow-hidden border-b px-6 lg:px-0"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-[530px] md:h-[686px]">
          <Image
            src="/images/homepage/hero/Gradient.webp"
            alt="background gradient"
            fill
            priority
            className="object-cover opacity-30"
          />
          <GridBackground className="[background-size:calc(var(--square-size,64px))_calc(var(--square-size,64px))]" />
          <div className="from-background to-background/0 absolute inset-x-0 top-0 h-40 bg-gradient-to-b" />
        </div>
      </div>

      <div className="relative container px-0 md:px-6">
        <div className="mx-auto grid max-w-4xl gap-6 py-14 text-center sm:py-16 md:gap-8 md:pt-24 md:pb-20">
          <h1 className="text-foreground text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl md:text-[68px]">
            Simplifying Payments for Growing Business
          </h1>
          <p className="text-muted-foreground md:text-md mx-auto max-w-2xl text-base sm:text-lg">
            Streamlining transactions for expanding enterprises. Our solutions
            simplify payment processes, empowering businesses to focus on growth
            and innovation.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Button
              asChild
              className="w-full sm:w-auto"
              aria-label="Get started"
            >
              <Link href="/pricing">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto"
              aria-label="Contact us"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[994px] items-center justify-center rounded-t-[16px] bg-white/20 shadow-[0_15px_80px_-1px_rgba(8,9,10,0.04)] backdrop-blur-[20px]">
          <Image
            src="/images/homepage/hero/Dashboard.webp"
            alt="Metafi dashboard preview"
            width={994}
            height={707}
            priority
            sizes="(max-width: 1024px) 100vw, 994px"
            className="h-auto w-full rounded-t-[16px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default MetafiHero;
