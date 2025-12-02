'use client';

import { motion } from 'framer-motion';
import { useId } from 'react';

import ShadowRootHost from './shadow-root-host';

type Props = {
  className?: string;
  'aria-label'?: string;
};

export default function AnimationInvoicing({
  className,
  'aria-label': ariaLabel = 'Invoicing animation',
}: Props) {
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
        viewBox="0 0 452 300"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id={cpId}>
            <rect width="452" height="300" rx="16" />
          </clipPath>

          <linearGradient
            id={gradId}
            x2="0"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#f8fafb" stopOpacity="0" />
            <stop offset="1" stopColor="#f8fafb" stopOpacity="1" />
          </linearGradient>
        </defs>

        <g clipPath={`url(#${cpId})`}>
          <rect width="452" height="300" rx="16" className="s0" />

          <motion.image
            href="/images/homepage/features/anim3-item1.webp"
            x={24}
            y={41}
            width={366}
            height={259}
            preserveAspectRatio="none"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            xlinkHref="/images/homepage/features/anim3-item1.webp"
          />

          <rect x={0} y={112.027} width={452} height={188} className="s1" />

          <motion.image
            href="/images/homepage/features/anim3-item2.webp"
            x={227}
            y={134}
            width={209}
            height={84}
            preserveAspectRatio="none"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            xlinkHref="/images/homepage/features/anim3-item2.webp"
          />
        </g>
      </svg>
    </ShadowRootHost>
  );
}
