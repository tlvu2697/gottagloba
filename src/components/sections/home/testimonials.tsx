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
      '"Gotta GLOBA\'s workplace scenarios helped me master upward management. I can now disagree with my manager respectfully and my ideas are being heard. This changed my career trajectory."',
    name: "Minh Nguyen",
    role: "Software Engineer, Tech Startup",
    avatar: "/images/homepage/testimonials/1.webp",
  },
  {
    quote:
      '"The shadowing drills and diverse accent challenges prepared me for real international meetings. I went from feeling anxious to confident when speaking with our global team."',
    name: "Thao Pham",
    role: "Project Manager, Multinational Corp",
    avatar: "/images/homepage/testimonials/2.webp",
  },
  {
    quote:
      '"I achieved IELTS 8.0 after 3 months with Gotta GLOBA. The structured approach and workplace vocabulary focus made all the difference. Now I\'m studying in Australia!"',
    name: "Tuan Le",
    role: "Graduate Student, Melbourne",
    avatar: "/images/homepage/testimonials/3.webp",
  },
  {
    quote:
      '"The nano-skills approach is brilliant. Instead of overwhelming grammar lessons, I learned specific communication skills I use every day - negotiating tasks, handling meeting dynamics, defending strategies."',
    name: "Linh Tran",
    role: "Marketing Lead, E-commerce",
    avatar: "/images/homepage/testimonials/4.webp",
  },
  {
    quote:
      '"Gotta GLOBA taught me how to speak with authority in meetings. My presentations are clearer, my arguments are stronger, and I recently got promoted to team lead."',
    name: "Huy Vo",
    role: "Business Analyst, Financial Services",
    avatar: "/images/homepage/testimonials/5.webp",
  },
  {
    quote:
      '"As a busy professional, I needed efficient learning. The authentic workplace scenarios meant every minute I spent studying had immediate real-world application. Best investment in my career."',
    name: "Anh Nguyen",
    role: "Product Designer, SaaS Company",
    avatar: "/images/homepage/testimonials/6.webp",
  },
  {
    quote:
      "\"The 'Meetings with Confidence' collection transformed how I participate in strategic discussions. I used to stay silent - now I drive outcomes and navigate tensions professionally.\"",
    name: "Khoi Phan",
    role: "Operations Manager, Logistics",
    avatar: "/images/homepage/testimonials/1.webp",
  },
  {
    quote:
      '"From IELTS 6.0 to 7.5 in just two months! The structured practice and focus on high-impact vocabulary made studying efficient. I got my dream scholarship to the UK."',
    name: "Mai Hoang",
    role: "MBA Student, London",
    avatar: "/images/homepage/testimonials/2.webp",
  },
  {
    quote:
      '"Learning to handle conflict and manage pressure in English was game-changing. I now lead international projects with confidence and my boss noticed the improvement immediately."',
    name: "Nam Tran",
    role: "Engineering Manager, IoT Startup",
    avatar: "/images/homepage/testimonials/3.webp",
  },
  {
    quote:
      '"The diverse accent training was exactly what I needed. I work with teams across India, UK, and US - now I understand everyone clearly and communicate effectively."',
    name: "Lan Vo",
    role: "HR Director, Tech Company",
    avatar: "/images/homepage/testimonials/4.webp",
  },
  {
    quote:
      '"Gotta GLOBA helped me build executive presence. I learned to command resources, defend my team strategically, and communicate at a senior level. Got my first director role!"',
    name: "Phuc Nguyen",
    role: "Director of Product, Fintech",
    avatar: "/images/homepage/testimonials/5.webp",
  },
  {
    quote:
      "\"The real-world scenarios taught me practical skills I use daily - respectful disagreement, prioritizing over refusing, strategic alignment. This isn't just English - it's career advancement.\"",
    name: "Tien Le",
    role: "Senior Consultant, Advisory Firm",
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
          Success Stories
        </p>

        <h2 className="text-foreground mx-auto max-w-4xl text-center text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
          Real Progress from <br className="hidden sm:block" />
          Real Professionals
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base font-normal sm:text-lg">
          See how ambitious professionals transformed their careers through
          workplace English mastery and IELTS success.
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
            {expanded ? "Show Less" : "See All Success Stories"}
          </Button>
        </div>
      </div>
    </section>
  );
}
