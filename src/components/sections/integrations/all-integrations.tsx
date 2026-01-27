"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Integration = {
  name: string;
  description: string;
  icon: string; // e.g. "/images/homepage/integrations/slack.svg"
  href?: string;
};

const DEFAULT_ITEMS: Integration[] = [
  {
    name: "Mailchimps",
    description:
      "Take control of your email design by using your own custom-coded HTML templates.",
    icon: "/images/homepage/integrations/mailchimp.svg",
    href: "#",
  },
  {
    name: "Zapier integration",
    description:
      "Connect Apps and Automate Workflows with Zapier — No Coding Required.",
    icon: "/images/homepage/integrations/zapier.svg",
    href: "#",
  },
  {
    name: "Stripe integration",
    description:
      "Work faster and smarter by integrating directly with Notion, right in the app.",
    icon: "/images/homepage/integrations/stripe.svg",
    href: "#",
  },
  {
    name: "Shopify integration",
    description:
      "Scale your entire business with the best ranked commerce platform",
    icon: "/images/homepage/integrations/shopify.svg",
    href: "#",
  },
  {
    name: "Intercom",
    description:
      "AI-first customer service solution, giving exceptional experiences for support teams",
    icon: "/images/homepage/integrations/intercom.svg",
    href: "#",
  },
  {
    name: "OK",
    description:
      "Hendrerit fames metus leo ut orci pretium. Sit vitae montes egestas montes mauris.",
    icon: "/images/homepage/integrations/ok.svg",
    href: "#",
  },
  {
    name: "Okta integration",
    description:
      "Scale & flexibility with the broadest & deepest set of integrations",
    icon: "/images/homepage/integrations/okta.svg",
    href: "#",
  },
  {
    name: "Google SSO",
    description:
      "Comprehensive tools to connect applications (Google Cloud and others).",
    icon: "/images/homepage/integrations/google.svg",
    href: "#",
  },
  {
    name: "Slack integration",
    description:
      "With Gotta GLOBA\'s integration for Slack, your team can seamlessly send messages to a Gotta GLOBA database",
    icon: "/images/homepage/integrations/slack.svg",
    href: "#",
  },
];

export default function AllIntegrations({
  items = DEFAULT_ITEMS,
  title = "All Integrations",
  pageSize = 9,
}: {
  items?: Integration[];
  title?: string;
  pageSize?: number;
}) {
  const [visible, setVisible] = useState(pageSize);
  const canLoadMore = visible < items.length;

  return (
    <section
      id="all-integrations"
      className="bg-background px-6 lg:px-0"
    >
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <h2 className="text-foreground text-center text-[40px] leading-tight font-medium tracking-tight md:text-[52px]">
          {title}
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-18 lg:grid-cols-3">
          {items.slice(0, visible).map((it) => {
            const CardInner = (
              <article className="bg-card border-border-light shadow-light h-full rounded-2xl border p-4">
                <div className="bg-accent flex h-[200px] w-full items-center justify-center rounded-xl">
                  <Image
                    src={it.icon}
                    alt=""
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain"
                  />
                </div>

                <h3 className="text-foreground mt-4 text-2xl font-medium">
                  {it.name.replace(/ integration$/i, "")}
                </h3>
                <p className="text-muted-foreground mt-2 text-[18px]">
                  {it.description}
                </p>
              </article>
            );

            return (
              <li key={it.name} className="h-full">
                {it.href ? (
                  <Link
                    href={it.href}
                    className="block h-full transition-transform hover:-translate-y-0.5"
                    aria-label={it.name}
                  >
                    {CardInner}
                  </Link>
                ) : (
                  CardInner
                )}
              </li>
            );
          })}
        </ul>

        {canLoadMore && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              onClick={() =>
                setVisible((v) => Math.min(v + pageSize, items.length))
              }
            >
              Load More Integrations
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
