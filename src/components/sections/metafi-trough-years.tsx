'use client';

import Image from 'next/image';

type Stat = {
  value: string;
  label: string;
};

type MetafiThroughYearsProps = {
  overline?: string;
  title?: string;
  paragraphs?: string[];
  stats?: Stat[];
  imageSrc?: string;
  imageAlt?: string;
};

const DEFAULT_PARAS = [
  `Encapsulates our journey of growth, innovation, and unwavering dedication to our customers. Over the years, Metafi has evolved into a leading provider of financial solutions, constantly adapting to meet the ever-changing needs of businesses worldwide. Our success is not just measured in years but in the tangible impact we've made, backed by concrete data and statistics that validate our journey.`,
  `With a proven track record of delivering results, Metafi stands as a testament to our commitment to excellence and continuous improvement. Our growth trajectory is marked by milestones, each supported by solid numbers that underscore our achievements and validate our position as a trusted partner in the financial industry.`,
];

const DEFAULT_STATS: Stat[] = [
  { value: '2023', label: 'Launched' },
  { value: '1500+', label: 'Team Members' },
  { value: '131M', label: 'Pre-seed Round' },
];

export default function MetafiThroughYears({
  overline = 'Metafi Through The Years',
  title = 'The Number to Back It Up',
  paragraphs = DEFAULT_PARAS,
  stats = DEFAULT_STATS,
  imageSrc = '/images/about/years.webp',
  imageAlt = 'Metafi team meeting',
}: MetafiThroughYearsProps) {
  return (
    <section id="metafi-through-years" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16">
          <div>
            <p className="text-tagline text-sm sm:text-base">{overline}</p>

            <h2 className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
              {title.split('\n').map((line, i) => (
                <span key={i} className={i ? 'block' : undefined}>
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
              {stats.map((s) => (
                <li key={s.value}>
                  <div className="bg-card border-border-light shadow-light rounded-[12px] border p-5">
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

          <div className="bg-accent overflow-hidden rounded-[16px]">
            <div className="relative overflow-hidden rounded-t-[16px]">
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

            <div className="hidden md:block md:h-[220px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
