"use client";

import { motion } from "framer-motion";
import { useId } from "react";

import ShadowRootHost from "./shadow-root-host";

type Props = {
  className?: string;
};

export default function AnimationLearningPath({ className }: Props) {
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
        aria-label="Learning Path animation"
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

          {/* Step 1: Learn */}
          <motion.g
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.0 }}
          >
            <circle cx={100} cy={80} r={45} fill="#3a5e96" />
            <text
              x={100}
              y={70}
              fill="#ffffff"
              fontSize="28"
              fontWeight="700"
              textAnchor="middle"
            >
              1
            </text>
            <text
              x={100}
              y={95}
              fill="#ffffff"
              fontSize="13"
              fontWeight="500"
              textAnchor="middle"
            >
              Learn
            </text>
            <text
              x={100}
              y={140}
              fill="#3a5e96"
              fontSize="12"
              fontWeight="500"
              textAnchor="middle"
            >
              Nano-Skills
            </text>
          </motion.g>

          {/* Connection line 1 */}
          <motion.line
            x1={145}
            y1={80}
            x2={205}
            y2={80}
            stroke="#3a5e96"
            strokeWidth="3"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          />

          {/* Step 2: Practice */}
          <motion.g
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.2 }}
          >
            <circle cx={250} cy={80} r={45} fill="#fdbf65" />
            <text
              x={250}
              y={70}
              fill="#2f2b43"
              fontSize="28"
              fontWeight="700"
              textAnchor="middle"
            >
              2
            </text>
            <text
              x={250}
              y={95}
              fill="#2f2b43"
              fontSize="13"
              fontWeight="500"
              textAnchor="middle"
            >
              Practice
            </text>
            <text
              x={250}
              y={140}
              fill="#2f2b43"
              fontSize="12"
              fontWeight="500"
              textAnchor="middle"
            >
              Role-Play & Shadow
            </text>
          </motion.g>

          {/* Connection line 2 */}
          <motion.line
            x1={295}
            y1={80}
            x2={355}
            y2={80}
            stroke="#3a5e96"
            strokeWidth="3"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          />

          {/* Step 3: Master */}
          <motion.g
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.4 }}
          >
            <circle cx={400} cy={80} r={45} fill="#3a5e96" />
            <text
              x={400}
              y={70}
              fill="#ffffff"
              fontSize="28"
              fontWeight="700"
              textAnchor="middle"
            >
              3
            </text>
            <text
              x={400}
              y={95}
              fill="#ffffff"
              fontSize="13"
              fontWeight="500"
              textAnchor="middle"
            >
              Master
            </text>
            <text
              x={400}
              y={140}
              fill="#3a5e96"
              fontSize="12"
              fontWeight="500"
              textAnchor="middle"
            >
              Global Career
            </text>
          </motion.g>

          <path className="s1" fillRule="evenodd" d="m0 0.03h628v300h-628z" />

          {/* Structured Progress */}
          <motion.g
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          >
            <rect
              x={180}
              y={200}
              width={270}
              height={55}
              rx={10}
              fill="#3a5e96"
              opacity="0.1"
            />
            <text
              x={315}
              y={233}
              fill="#3a5e96"
              fontSize="15"
              fontWeight="600"
              textAnchor="middle"
            >
              Structured & Effective Practice
            </text>
          </motion.g>
        </g>
      </svg>
    </ShadowRootHost>
  );
}
