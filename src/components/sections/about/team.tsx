"use client";

import { strapiUrl } from "@/lib/utils";
import type { Member } from "@/types/member";
import Image from "next/image";

export default function Team({
  overline = "Our Team",
  title = "Passionate Educators & Career Coaches",
  subtitle = "Dedicated professionals combining language expertise with real-world experience to transform ambitious learners into confident global professionals.",
  members,
  isLoading,
}: {
  overline?: string;
  title?: string;
  subtitle?: string;
  members: Member[];
  isLoading: boolean;
}) {
  if (isLoading || members.length === 0) {
    return null;
  }

  return (
    <section id="team" className="bg-accent px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="text-center">
          <p className="text-tagline text-sm sm:text-base">{overline}</p>
          <h2 className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            {subtitle}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => {
            const { displayName, role, avatar, linkedInUrl } = member;

            const content = (
              <article className="bg-card border-border-light shadow-light rounded-xl border p-4 pb-5 transition-all duration-200 hover:shadow-md">
                <div className="relative h-[250px] w-full overflow-hidden rounded-[10px] bg-[#edf0f3]">
                  <Image
                    src={strapiUrl(avatar.url)!}
                    alt={avatar.alternativeText ?? displayName}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                  />
                </div>

                {/* Meta */}
                <div className="mt-3 sm:mt-4">
                  <h3 className="text-foreground text-xl font-medium">
                    {displayName}
                  </h3>
                  <p className="text-muted-foreground text-md mt-2">{role}</p>
                </div>
              </article>
            );

            return (
              <li key={`${displayName}-${index}`}>
                {linkedInUrl ? (
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
