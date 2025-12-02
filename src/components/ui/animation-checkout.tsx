'use client';

import { motion } from 'framer-motion';
import { useId } from 'react';

import ShadowRootHost from './shadow-root-host';

type Props = {
  className?: string;
};

export default function AnimationCheckout({ className }: Props) {
  const uid = useId();
  const cpId = `cp-${uid}`;
  const gradId = `g-${uid}`;

  return (
    <ShadowRootHost className={className}>
      <style>{`
        /* Respect user settings */
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
        .s0 { fill: #f8fafb }
        .s1 { fill: url(#${gradId}) }
        svg, div { width: 100%; height: 100%; display: block; }
      `}</style>

      <svg
        viewBox="0 0 628 300"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        role="img"
        aria-label="Checkout animation"
      >
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id={cpId}>
            <path d="m16 0h596c8.84 0 16 7.16 16 16v268c0 8.84-7.16 16-16 16h-596c-8.84 0-16-7.16-16-16v-268c0-8.84 7.16-16 16-16z" />
          </clipPath>

          <linearGradient
            id={gradId}
            x2="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,300,-628,0,314,.027)"
          >
            <stop offset="0" stopColor="#f8fafb" stopOpacity="0" />
            <stop offset="1" stopColor="#f8fafb" stopOpacity="1" />
          </linearGradient>
        </defs>

        <g clipPath={`url(#${cpId})`}>
          <path
            className="s0"
            fillRule="evenodd"
            d="m16 0h596c8.84 0 16 7.16 16 16v268c0 8.84-7.16 16-16 16h-596c-8.84 0-16-7.16-16-16v-268c0-8.84 7.16-16 16-16z"
          />

          <motion.image
            href="/images/homepage/features/anim1-Item1.webp"
            x={32}
            y={35}
            width={420}
            height={380}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            xlinkHref="/images/homepage/features/anim1-Item1.webp"
          />

          <path className="s1" fillRule="evenodd" d="m0 0.03h628v300h-628z" />

          <motion.image
            href="/images/homepage/features/anim1-Item3.webp"
            x={326}
            y={140}
            width={276}
            height={90}
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            xlinkHref="/images/homepage/features/anim1-Item3.webp"
          />

          <motion.g
            initial={{ scale: 0.01, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'backOut', delay: 0.3 }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            <image
              href="/images/homepage/features/anim1-Item2.webp"
              x={483}
              y={55}
              width={56}
              height={56}
              xlinkHref="/images/homepage/features/anim1-item2.webp"
              preserveAspectRatio="xMidYMid meet"
            />
          </motion.g>
        </g>
      </svg>
    </ShadowRootHost>
  );
}
