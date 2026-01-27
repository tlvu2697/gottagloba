"use client";

import Image from "next/image";

type Logo = { name: string; src: string };

const BASE_LOGOS: Logo[] = [
  { name: "Mercury", src: "/images/logos/adobe.svg" },
  { name: "Watershed", src: "/images/logos/evernote.svg" },
  { name: "Retool", src: "/images/logos/spotify.svg" },
  { name: "Descript", src: "/images/logos/airtable.svg" },
  { name: "Perplexity", src: "/images/logos/asana.svg" },
  { name: "Monzo", src: "/images/logos/notion.svg" },
  { name: "Ramp", src: "/images/logos/mailchimp.svg" },
  { name: "Raycast", src: "/images/logos/medium.svg" },
  { name: "Arc", src: "/images/logos/square.svg" },
];

export default function PartnerLogos({
  logos = BASE_LOGOS,
}: {
  logos?: Logo[];
}) {
  const list: Logo[] = (
    logos.length === 9 ? [...logos, logos[0]] : logos.slice(0, 10)
  ) as Logo[];

  const filterClass =
    "brightness-0 contrast-[90%] hue-rotate-[190deg] invert-[0.43] saturate-[180%] sepia-[0.06]";

  return (
    <section id="partner-logos" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-10 sm:py-12 md:px-6 md:py-16">
        <ul className="grid grid-cols-5 gap-x-8 gap-y-6 sm:gap-x-10 md:gap-x-16 md:gap-y-10">
          {list.map((item, i) => (
            <li
              key={`${item.name}-${i}`}
              className="flex items-center justify-start"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={140}
                height={40}
                className={`h-4 w-auto md:h-[26px] ${filterClass}`}
                sizes="(max-width: 640px) 20vw, (max-width: 1200px) 10vw, 140px"
                priority={false}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
