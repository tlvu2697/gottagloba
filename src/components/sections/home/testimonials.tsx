"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"Payments are the main interaction point between our financial services clients and their customers, and are core to our relationships beyond that sector too."',
    name: "Charolette Hanlin",
    role: "Co-Founder, Heroes Digital",
    avatar: "/images/homepage/testimonials/1.webp",
  },
  {
    quote:
      '"Payments are pivotal in our financial operations, serving as the primary interface between our finance department and clients."',
    name: "Novák Balázs",
    role: "Co-Founder, WooCommerce",
    avatar: "/images/homepage/testimonials/2.webp",
  },
  {
    quote:
      '"Using this financial app has made me feel more organized and efficient in managing my finances."',
    name: "Orosz Boldizsár",
    role: "Founder, Okta",
    avatar: "/images/homepage/testimonials/3.webp",
  },
  {
    quote:
      '"The provided features are incredibly helpful in tracking expenses, managing investments, and planning for future financial goals."',
    name: "Floyd Miles",
    role: "Co-Founder, Slack",
    avatar: "/images/homepage/testimonials/4.webp",
  },
  {
    quote:
      '"This app has given me full control over my finances and provided greater confidence in making wise financial decisions."',
    name: "Darrell Steward",
    role: "Founder",
    avatar: "/images/homepage/testimonials/5.webp",
  },
  {
    quote:
      '"Since incorporating this finance app into my daily routine, I\'ve experienced a significant improvement in my financial management."',
    name: "Devon Lane",
    role: "Marketing, Google",
    avatar: "/images/homepage/testimonials/6.webp",
  },
  {
    quote:
      '"We consolidated multiple payment tools into one platform—reporting and cash flow are finally clear."',
    name: "Jenny Wilson",
    role: "CFO, Mailchimp",
    avatar: "/images/homepage/testimonials/1.webp",
  },
  {
    quote:
      '"The billing automation alone paid for the migration in under a month."',
    name: "Jacob Jones",
    role: "VP Ops, Notion",
    avatar: "/images/homepage/testimonials/2.webp",
  },
  {
    quote:
      '"Gotta GLOBA\'s checkout improved conversion and cut our support tickets in half."',
    name: "Eleanor Pena",
    role: "Head of Product, Square",
    avatar: "/images/homepage/testimonials/3.webp",
  },
  {
    quote:
      '"Our finance team finally enjoys month-end. Reconciliation is effortless."',
    name: "Courtney Henry",
    role: "Finance Lead, Spotify",
    avatar: "/images/homepage/testimonials/4.webp",
  },
  {
    quote:
      '"The analytics gave us visibility we didn\'t know we were missing."',
    name: "Leslie Alexander",
    role: "Director, Airtable",
    avatar: "/images/homepage/testimonials/5.webp",
  },
  {
    quote:
      '"From invoicing to recurring billing—everything lives in one place now."',
    name: "Guy Hawkins",
    role: "Founder, Raycast",
    avatar: "/images/homepage/testimonials/6.webp",
  },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <li className="bg-card flex flex-col justify-between rounded-2xl p-6">
      <p className="text-foreground text-base leading-relaxed font-normal md:text-base">
        {t.quote}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <Image
          src={t.avatar}
          alt={t.name}
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <div className="text-foreground mb-0.5 text-base leading-tight font-medium">
            {t.name}
          </div>
          <div className="text-muted-foreground text-sm font-normal">
            {t.role}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Testimonials() {
  const [expanded, setExpanded] = useState(false);
  const VISIBLE = expanded ? TESTIMONIALS.length : 6;

  return (
    <section id="testimonials" className="bg-accent px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <p className="text-tagline mb-4 text-center text-sm leading-tight font-normal sm:text-base">
          Our Customers
        </p>

        <h2 className="text-foreground mx-auto max-w-4xl text-center text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
          See What Our <br className="hidden sm:block" />
          Customers Are Saying
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base font-normal sm:text-lg">
          Here&apos;s what some of our customers say about our platform.
        </p>

        <div className="relative mt-10 md:mt-14">
          {!expanded && (
            <div className="from-accent to-accent/0 pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t" />
          )}

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, VISIBLE).map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </ul>
        </div>

        <div
          className={`relative z-20 flex justify-center transition-all duration-300 ${
            expanded ? "mt-8" : "-mt-6"
          }`}
        >
          <Button onClick={() => setExpanded((s) => !s)}>
            {expanded ? "Show Less" : "See All Customer Stories"}
          </Button>
        </div>
      </div>
    </section>
  );
}
