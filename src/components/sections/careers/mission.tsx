"use client";

type MissionProps = {
  overline?: string;
  primary?: string;
  secondary?: string;
  showDivider?: boolean;
};

export default function Mission({
  overline = "Our Mission",
  primary = "At Gotta GLOBA, we transform language barriers into bridges.",
  secondary = "Our mission is to help professionals  secure the promotions and global careers they deserve.",
  showDivider = true,
}: MissionProps) {
  return (
    <section id="mission" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-12 sm:py-16 md:px-6 md:py-20">
        <p className="text-tagline text-sm sm:text-base">{overline}</p>

        <h2 className="text-foreground mt-4 text-3xl leading-[1.1] font-medium tracking-tight text-balance md:text-5xl">
          <span className="whitespace-pre-line">{primary}</span>
          <br />
          <span className="text-muted-foreground whitespace-pre-line">
            {secondary}
          </span>
        </h2>

        {showDivider && (
          <div className="border-border/60 mt-10 h-px w-full border-t" />
        )}
      </div>
    </section>
  );
}
