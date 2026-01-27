"use client";

import { motion } from "framer-motion";
import { useId } from "react";

import ShadowRootHost from "./shadow-root-host";

type Props = {
  className?: string;
  "aria-label"?: string;
};

export default function AnimationIELTSMastery({
  className,
  "aria-label": ariaLabel = "IELTS Mastery animation",
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
        viewBox="0 0 600 400"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id={cpId}>
            <rect width="600" height="400" rx="16" />
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
          <rect width="600" height="400" rx="16" className="s0" />

          {/* Score progression - centered */}
          <motion.g
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <rect
              x={130}
              y={80}
              width={140}
              height={140}
              rx={16}
              fill="#e5e7eb"
            />
            <text
              x={200}
              y={165}
              fill="#6b7280"
              fontSize="56"
              fontWeight="700"
              textAnchor="middle"
            >
              6.0
            </text>
          </motion.g>

          {/* Arrow */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "backOut", delay: 0.2 }}
          >
            <path
              d="M290 150 L310 150"
              stroke="#3a5e96"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M302 140 L310 150 L302 160"
              stroke="#3a5e96"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </motion.g>

          {/* Target score */}
          <motion.g
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <rect
              x={330}
              y={80}
              width={140}
              height={140}
              rx={16}
              fill="#3a5e96"
            />
            <text
              x={400}
              y={165}
              fill="#ffffff"
              fontSize="56"
              fontWeight="700"
              textAnchor="middle"
            >
              8.0
            </text>
          </motion.g>

          {/* Success indicator */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "backOut", delay: 0.5 }}
          >
            <circle cx={400} cy={40} r={20} fill="#10b981" opacity="0.2" />
            <path
              d="M392 40 L398 46 L408 34"
              stroke="#10b981"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </motion.g>

          <rect x={0} y={150} width={600} height={250} className="s1" />

          {/* IELTS Skills badges - perfectly centered with equal margins */}
          <motion.g
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <rect
              x={40}
              y={260}
              width={120}
              height={65}
              rx={10}
              fill="#fdbf65"
              opacity="0.3"
            />
            <text
              x={100}
              y={297}
              fill="#2f2b43"
              fontSize="16"
              fontWeight="600"
              textAnchor="middle"
            >
              Speaking
            </text>
          </motion.g>

          <motion.g
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          >
            <rect
              x={173}
              y={260}
              width={120}
              height={65}
              rx={10}
              fill="#3a5e96"
              opacity="0.2"
            />
            <text
              x={233}
              y={297}
              fill="#3a5e96"
              fontSize="16"
              fontWeight="600"
              textAnchor="middle"
            >
              Writing
            </text>
          </motion.g>

          <motion.g
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
          >
            <rect
              x={306}
              y={260}
              width={120}
              height={65}
              rx={10}
              fill="#fdbf65"
              opacity="0.3"
            />
            <text
              x={366}
              y={297}
              fill="#2f2b43"
              fontSize="16"
              fontWeight="600"
              textAnchor="middle"
            >
              Reading
            </text>
          </motion.g>

          <motion.g
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          >
            <rect
              x={440}
              y={260}
              width={120}
              height={65}
              rx={10}
              fill="#3a5e96"
              opacity="0.2"
            />
            <text
              x={500}
              y={297}
              fill="#3a5e96"
              fontSize="16"
              fontWeight="600"
              textAnchor="middle"
            >
              Listening
            </text>
          </motion.g>
        </g>
      </svg>
    </ShadowRootHost>
  );
}
