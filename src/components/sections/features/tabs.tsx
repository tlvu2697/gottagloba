'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import * as React from 'react';

import { cn } from '@/lib/utils';

type FeatureItem = {
  key: string;
  label: string;
  caption?: string;
  body: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
  buttonLabel?: string;
};

export type FeaturesTabsProps = {
  tagline?: string;
  title?: string;
  description?: string;
  items?: FeatureItem[];
};

const DEFAULT_ITEMS: FeatureItem[] = [
  {
    key: 'upward',
    label: 'Upward Management',
    body: 'Master high-level communication with superiors. Learn to manage pressure, handle conflict, command resources, and build executive presence through authentic workplace scenarios.',
    imageSrc: '/images/features/upward-management.svg',
    imageAlt: 'Upward management training',
    href: '/pricing',
    buttonLabel: 'Start Learning',
  },
  {
    key: 'meetings',
    label: 'Meetings with Confidence',
    body: 'Speak with authority, defend strategically, and drive effective outcomes. Navigate meeting dynamics and tension like a seasoned professional in any international workplace.',
    imageSrc: '/images/features/meetings-confidence.svg',
    imageAlt: 'Meeting confidence training',
    href: '/pricing',
  },
  {
    key: 'ielts',
    label: 'IELTS Mastery',
    body: 'Achieve your target IELTS score with structured practice and high-impact vocabulary. Get the results you need for higher education and global opportunities.',
    imageSrc: '/images/features/ielts-mastery.svg',
    imageAlt: 'IELTS preparation',
    href: '/pricing',
  },
  {
    key: 'workplace',
    label: 'Workplace English',
    body: 'Build professional fluency through shadowing drills, diverse accent challenges, and real career scenarios. Communicate confidently in any international workplace.',
    imageSrc: '/images/features/workplace-english.svg',
    imageAlt: 'Workplace English training',
    href: '/pricing',
  },
];

function useLockedAspectHeight(aspect = 3 / 2) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      setHeight(Math.round(w / aspect));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [aspect]);

  return { ref, height };
}

export default function FeaturesTabs({
  tagline = 'Learning Collections',
  title = 'Everything You Need for a Global Career',
  description = 'Master professional English through nano-skills training. From workplace communication to IELTS success - structured, effective, and ready for real-world application.',
  items = DEFAULT_ITEMS,
}: FeaturesTabsProps) {
  const [active, setActive] = React.useState(items[0]?.key);
  const current: FeatureItem = items.find((i) => i.key === active) ?? items[0]!
  const { ref: imgLockRef, height: imgH } = useLockedAspectHeight(3 / 2);

  return (
    <section id="features-tabs" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-tagline text-sm sm:text-base">{tagline}</p>
          <h2 className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl lg:text-[52px]">
            {title}
          </h2>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:gap-16">
          <div className="w-full">
            <div
              ref={imgLockRef}
              className="relative w-full overflow-hidden"
              style={{ height: imgH || undefined }}
            >
              <AnimatePresence mode="sync" initial={false}>
                <motion.div
                  key={current.key}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
                  className="absolute inset-0 will-change-transform"
                >
                  <Image
                    src={current.imageSrc}
                    alt={current.imageAlt ?? current.label ?? 'Feature preview'}
                    fill
                    sizes="100vw"
                    className="pointer-events-none object-contain object-left select-none"
                    priority={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div>
            <div
              role="tablist"
              aria-orientation="vertical"
              className="hidden lg:flex lg:flex-col"
            >
              {items.map((it) => {
                const isActive = active === it.key;
                return (
                  <button
                    key={it.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(it.key)}
                    className={cn(
                      'w-full border-b py-5 text-left transition-colors',
                      isActive
                        ? 'border-tagline/70'
                        : 'border-border-light hover:text-foreground/80',
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          'text-base font-medium',
                          isActive
                            ? 'text-foreground'
                            : 'text-muted-foreground',
                        )}
                      >
                        {it.label}
                      </span>
                    </div>

                    {isActive && (
                      <motion.div
                        key={`${it.key}-body`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.2,
                          ease: [0.22, 0.61, 0.36, 1],
                        }}
                        className="mt-3"
                      >
                        <p className="text-muted-foreground text-sm sm:text-base">
                          {it.body}
                        </p>
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="lg:hidden">
              {items.map((it) => {
                const open = active === it.key;
                return (
                  <div
                    key={it.key}
                    className={cn(
                      'border-b transition-colors',
                      open ? 'border-tagline/70' : 'border-border-light',
                    )}
                  >
                    <button
                      onClick={() => setActive(it.key)}
                      className={cn(
                        'flex w-full items-center justify-between py-4 text-left',
                        open ? 'text-foreground' : 'text-muted-foreground',
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-base font-medium">
                          {it.label}
                        </span>
                      </div>
                    </button>

                    {open && (
                      <motion.div
                        key={`${it.key}-mobile`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.2,
                          ease: [0.22, 0.61, 0.36, 1],
                        }}
                        className="pb-5"
                      >
                        <p className="text-muted-foreground text-sm sm:text-base">
                          {it.body}
                        </p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
