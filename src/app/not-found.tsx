import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section
      id="metafi-404"
      className="bg-background relative overflow-hidden px-6 lg:px-0"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-[500px]">
          <div className="from-features-hero-top-0 to-features-hero-bottom absolute inset-0 bg-gradient-to-b" />
        </div>
      </div>

      <div className="relative container flex flex-col items-center justify-center px-4 py-24 text-center sm:py-32 md:py-44">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-tagline mb-3 text-sm font-medium tracking-wide uppercase">
            Oops!
          </h1>

          <h2 className="text-foreground text-[80px] leading-none font-semibold sm:text-[120px] md:text-[160px]">
            404
          </h2>

          <p className="text-muted-foreground mt-6 text-lg sm:text-xl">
            The page you’re looking for doesn’t exist or has been moved.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/">Back to Home</Link>
            </Button>

            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
