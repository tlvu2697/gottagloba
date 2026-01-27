import { Button } from "@/components/ui/button";
import { SOCIAL_URLS } from "@/constants";
import Link from "next/link";

const Cta = () => {
  return (
    <section id="cta" className="bg-tagline relative overflow-hidden px-6">
      {/* dotted pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[16px_16px] text-[oklch(1_0_89.88)] opacity-30" />

      {/* centered rectangle behind text */}
      <div className="bg-tagline pointer-events-none absolute top-0 left-1/2 h-full w-[500px] -translate-x-1/2" />

      <div className="relative container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
        <h2 className="text-primary-foreground mx-auto max-w-5xl text-4xl leading-tight font-medium text-balance sm:text-5xl md:text-6xl">
          Global-scale Career
          <br className="hidden sm:block" /> is no longer a distant dream
        </h2>

        <p className="text-primary-foreground/80 mx-auto mt-4 max-w-2xl text-base font-normal sm:text-lg">
          Join over 300+ partners and customers already growing with Gotta GLOBA
        </p>

        <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          {/* Primary button */}
          <Button
            asChild
            className="bg-primary-foreground text-tagline hover:bg-primary-foreground/90 h-12 w-full rounded-xl sm:w-auto"
          >
            <Link href={SOCIAL_URLS.youtube}>Get Started</Link>
          </Button>

          {/* Transparent button */}
          <Button
            asChild
            variant="ghost"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 w-full rounded-xl border bg-transparent sm:w-auto"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
