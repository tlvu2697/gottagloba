import { SOCIAL_URLS } from "@/constants";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const columns = [
  // {
  //   title: "Product",
  //   links: [
  //     { name: "Features", href: "/features" },
  //     { name: "Integrations", href: "/integrations" },
  //     { name: "Pricing", href: "/pricing" },
  //   ],
  // },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal & Access",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      // { name: "Sign Up", href: "/signup" },
      // { name: "Login", href: "/login" },
    ],
  },
];

const socials = [
  { Icon: Youtube, href: SOCIAL_URLS.youtube },
  { Icon: Linkedin, href: SOCIAL_URLS.linkedin },
  { Icon: Facebook, href: SOCIAL_URLS.facebook },
];

export const Footer = () => {
  return (
    <footer className="force-light-vars bg-primary text-primary-foreground px-2.5 lg:px-0">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="md:min-w-[140px]">
            <Link href="/" aria-label="Gotta GLOBA">
              <Image
                src="/images/layout/logo-invert.svg"
                alt="Gotta GLOBA"
                width={140}
                height={32}
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 md:flex md:w-[525px] md:items-start md:justify-between md:gap-0">
            {columns.map((col) => (
              <div key={col.title} className="min-w-0">
                <h3 className="text-muted-foreground mb-4 text-sm leading-tight font-medium">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.name}>
                      <Link
                        href={l.href}
                        className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-normal transition-colors"
                      >
                        {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* divider */}
        <div className="border-border/40 mt-12 border-t" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-muted-foreground text-sm font-normal">
            © {new Date().getFullYear()} Gotta GLOBA. All rights reserved
          </p>

          <div className="flex items-center gap-4">
            {socials.map(({ Icon, href }) => (
              <Link
                key={href}
                href={href}
                aria-label={href}
                className="text-muted-foreground hover:text-primary-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
