"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ThemeToggle } from "../ui/theme-toggle";

const HEADER_HEIGHT = 80;

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState<number | "auto">(0);
  const [minOpenHeight, setMinOpenHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const viewportRemainder = Math.max(0, window.innerHeight - HEADER_HEIGHT);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinOpenHeight(viewportRemainder);

    const onEnd = () => {
      if (isMenuOpen) setPanelHeight("auto");
      wrapper.removeEventListener("transitionend", onEnd);
    };

    if (isMenuOpen) {
      const target = Math.max(content.scrollHeight, viewportRemainder);
      setPanelHeight(target);
      wrapper.addEventListener("transitionend", onEnd);
    } else {
      const current = wrapper.getBoundingClientRect().height || 0;
      setPanelHeight(current);
      requestAnimationFrame(() => setPanelHeight(0));
    }
  }, [isMenuOpen, pathname]);

  useEffect(() => {
    const onResize = () => {
      if (!isMenuOpen || !contentRef.current) return;
      const viewportRemainder = Math.max(0, window.innerHeight - HEADER_HEIGHT);
      setMinOpenHeight(viewportRemainder);
      if (panelHeight !== "auto") {
        const target = Math.max(
          contentRef.current.scrollHeight,
          viewportRemainder,
        );
        setPanelHeight(target);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMenuOpen, panelHeight]);

  const ITEMS = [
    { label: "Features", href: "/features" },
    { label: "Integrations", href: "/integrations" },
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background border-border relative z-50 h-20 border-b px-2.5 lg:px-0">
      <div className="container flex h-20 items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto]">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/layout/logo.svg"
            alt="Gotta GLOBA"
            width={129}
            height={32}
            className="invert-0 dark:invert"
            priority
          />
        </Link>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {ITEMS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-muted-foreground hover:text-foreground text-sm font-medium transition-colors",
                pathname === link.href && "text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link href="/login" className={cn("hidden sm:block lg:block")}>
            <Button size="sm" variant="outline">
              Login
            </Button>
          </Link>
          <Link href="/pricing" className={cn("hidden sm:block lg:block")}>
            <Button size="sm" variant="default">
              Get Started
            </Button>
          </Link>

          <div className="lg:block">
            <ThemeToggle />
          </div>

          <button
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle main menu"
          >
            <span className="sr-only">Toggle main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out",
                  isMenuOpen ? "rotate-45" : "-translate-y-1.5",
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out",
                  isMenuOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out",
                  isMenuOpen ? "-rotate-45" : "translate-y-1.5",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Full-bleed, in-flow mobile menu below the bar */}
      <div className="lg:hidden">
        <div
          ref={wrapperRef}
          style={{
            height: panelHeight === "auto" ? "auto" : panelHeight,
            minHeight: isMenuOpen ? `${minOpenHeight}px` : undefined,
            transition: "height 320ms cubic-bezier(.22,.61,.36,1)",
          }}
          className={cn(
            "border-border bg-background overflow-hidden border-t",
            // full-bleed: escape container padding and span edge-to-edge
            "relative right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] w-screen",
          )}
          aria-hidden={!isMenuOpen}
        >
          {/* scrollable content area constrained to the remaining viewport */}
          <div
            ref={contentRef}
            className="max-h-[calc(100vh-80px)] overflow-auto"
          >
            {/* keep content aligned with your layout while background is full-bleed */}
            <div className="container px-2.5">
              <div className="px-5">
                <nav
                  className={cn(
                    "mt-6 flex flex-col",
                    "transition-[transform,opacity] duration-300",
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0",
                  )}
                >
                  <div className="flex flex-col gap-6">
                    {ITEMS.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={cn(
                          "text-lg tracking-[-0.36px]",
                          pathname === link.href
                            ? "text-foreground"
                            : "text-muted-foreground",
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 mb-6 flex flex-col gap-3">
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full" size="sm" variant="outline">
                        Login
                      </Button>
                    </Link>
                    <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full" size="sm" variant="default">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
