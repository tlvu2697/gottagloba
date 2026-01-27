"use client";

import Image from "next/image";

type Stat = {
  value: string;
  label: string;
};

type ThroughYearsProps = {
  overline?: string;
  title?: string;
  paragraphs?: string[];
  stats?: Stat[];
  imageSrc?: string;
  imageAlt?: string;
};

const DEFAULT_PARAS = [
  `Encapsulates our journey of empowering ambitious professionals to achieve global-scale careers. Gotta GLOBA has evolved into a dedicated platform for professional training and coaching, helping busy self-improvers speak English confidently in international workplaces and achieve high IELTS scores for higher education opportunities. Our success is measured in the lives we've transformed and the global career pathways we've opened.`,
  `With structured and effective practice methods, Gotta GLOBA turns hard work into real progress. From language proficiency to career-scenario virtual simulations and dynamic professional networks, we provide the comprehensive support needed to harness opportunities across borders and rise above limitations, making global careers an achievable reality rather than a distant dream.`,
];

const DEFAULT_STATS: Stat[] = [
  { value: "2025", label: "Launched" },
  { value: "10+", label: "Team Members" },
  { value: "10+", label: "Training Programs" },
];

export default function ThroughYears({
  overline = "Gotta GLOBA Through The Years",
  title = "The Number to Back It Up",
  paragraphs = DEFAULT_PARAS,
  stats = DEFAULT_STATS,
  imageSrc = "/images/about/years.webp",
  imageAlt = "Gotta GLOBA team meeting",
}: ThroughYearsProps) {
  return (
    <section id="through-years" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16">
          <div>
            <p className="text-tagline text-sm sm:text-base">{overline}</p>

            <h2 className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
              {title.split("\n").map((line, i) => (
                <span key={i} className={i ? "block" : undefined}>
                  {line}
                </span>
              ))}
            </h2>

            <div className="text-muted-foreground mt-5 space-y-4 text-base">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((s, index) => (
            <li key={`${s.value}-${index}`}>
                  <div className="bg-card border-border-light shadow-light rounded-xl border p-5">
                    <div className="text-tagline text-2xl font-medium sm:text-[28px]">
                      {s.value}
                    </div>
                    <div className="text-muted-foreground mt-1 text-sm">
                      {s.label}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-accent overflow-hidden rounded-2xl">
            <div className="relative overflow-hidden rounded-t-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1400}
                height={980}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
