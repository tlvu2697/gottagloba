'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

type Job = {
  title: string;
  type?: string;
  location?: string;
  href: string;
};

type MetafiJobOpeningsProps = {
  overline?: string;
  title?: string;
  intro?: string;
  notifyText?: string;
  notifyHref?: string;
  jobs?: Job[];
};

const DEFAULT_JOBS: Job[] = [
  {
    title: 'Product Designer',
    type: 'Full-time',
    location: 'Remote',
    href: '/careers/product-designer',
  },
  {
    title: 'Backend Engineer',
    type: 'Full-time',
    location: 'Remote',
    href: '/careers/backend-engineer',
  },
  {
    title: 'Data Analyst',
    type: 'Full-time',
    location: 'Remote',
    href: '/careers/data-analyst',
  },
];

export default function MetafiJobOpenings({
  overline = 'Jobs',
  title = 'Jobs Opening',
  intro = `These openings represent diverse roles across various departments and levels within the company, offering candidates the chance to apply their skills and expertise in a professional setting.`,
  notifyText = 'Get notified when new roles added',
  notifyHref = '/careers/notify',
  jobs = DEFAULT_JOBS,
}: MetafiJobOpeningsProps) {
  return (
    <section id="metafi-job-openings" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-tagline text-sm sm:text-base">{overline}</p>
          <h2 className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            {intro}
          </p>
        </div>

        <ul className="border-border/70 mt-8 divide-y rounded-none border-t sm:mt-10">
          {jobs.map((job) => (
            <li key={job.title} className="border-border">
              <Link
                href={job.href}
                className="group flex items-center justify-between gap-4 py-6 sm:py-7"
                aria-label={`${job.title} – ${job.type ?? ''} ${job.location ? '• ' + job.location : ''}`}
              >
                <div>
                  <h3 className="text-foreground text-xl font-medium sm:text-2xl">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {job.type ?? '—'}
                    {job.location ? <span> • {job.location}</span> : null}
                  </p>
                </div>

                <ArrowUpRight
                  className="text-logo-gray mt-1 h-5 w-5 flex-shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
          <li aria-hidden className="border-border/70 border-t" />
        </ul>

        <p className="text-muted-foreground mt-8 text-sm">
          Don’t see opportunity that suits you?{' '}
          <Link
            href={notifyHref}
            className="text-tagline underline-offset-2 hover:underline"
          >
            {notifyText}
          </Link>
        </p>
      </div>
    </section>
  );
}
