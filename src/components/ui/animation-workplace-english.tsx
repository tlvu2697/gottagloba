"use client";

import { motion } from "framer-motion";
import { useId } from "react";

import ShadowRootHost from "./shadow-root-host";

type Props = {
  className?: string;
};

export default function AnimationWorkplaceEnglish({ className }: Props) {
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
        .s1 { fill: #ffffff }
        .s2 { fill: url(#${gradId}) }
        svg, div { width: 100%; height: 100%; display: block; }
      `}</style>

      <svg
        viewBox="0 0 600 400"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        role="img"
        aria-label="Workplace English Excellence animation"
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

          {/* Main feature cards */}
          {/* Shadowing Drills */}
          <motion.g
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.0 }}
          >
            <rect
              x={60}
              y={70}
              width={240}
              height={100}
              rx={14}
              fill="#3a5e96"
            />
            <text
              x={180}
              y={110}
              fill="#ffffff"
              fontSize="20"
              fontWeight="600"
              textAnchor="middle"
            >
              Shadowing Drills
            </text>
            <text
              x={180}
              y={135}
              fill="#ffffff"
              fontSize="13"
              opacity="0.9"
              textAnchor="middle"
            >
              Practice authentic scenarios
            </text>
          </motion.g>

          {/* Diverse Accents */}
          <motion.g
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <rect
              x={320}
              y={70}
              width={220}
              height={100}
              rx={14}
              fill="#fdbf65"
            />
            <text
              x={430}
              y={100}
              fill="#2f2b43"
              fontSize="20"
              fontWeight="600"
              textAnchor="middle"
            >
              Diverse Accents
            </text>

            {/* Accent indicators */}
            <circle cx={380} cy={125} r={8} fill="#2f2b43" opacity="0.3" />
            <circle cx={405} cy={125} r={8} fill="#2f2b43" opacity="0.3" />
            <circle cx={430} cy={125} r={8} fill="#2f2b43" opacity="0.3" />
            <circle cx={455} cy={125} r={8} fill="#2f2b43" opacity="0.3" />
            <circle cx={480} cy={125} r={8} fill="#2f2b43" opacity="0.3" />

            <text
              x={430}
              y={148}
              fill="#2f2b43"
              fontSize="11"
              opacity="0.7"
              textAnchor="middle"
            >
              UK • US • AUS • IND • SG
            </text>
          </motion.g>

          <rect x={0} y={150} width={600} height={250} className="s2" />

          {/* Bottom features */}
          {/* Advanced Vocabulary */}
          <motion.g
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <rect
              x={60}
              y={200}
              width={220}
              height={90}
              rx={12}
              fill="#3a5e96"
              opacity="0.15"
            />
            <text
              x={170}
              y={240}
              fill="#3a5e96"
              fontSize="17"
              fontWeight="600"
              textAnchor="middle"
            >
              Advanced Vocabulary
            </text>
            <text
              x={170}
              y={265}
              fill="#3a5e96"
              fontSize="12"
              opacity="0.8"
              textAnchor="middle"
            >
              Professional terminology
            </text>
          </motion.g>

          {/* Real Career Scenarios */}
          <motion.g
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <rect
              x={300}
              y={200}
              width={240}
              height={90}
              rx={12}
              fill="#fdbf65"
              opacity="0.2"
            />
            <text
              x={420}
              y={240}
              fill="#2f2b43"
              fontSize="17"
              fontWeight="600"
              textAnchor="middle"
            >
              Real Career Scenarios
            </text>
            <text
              x={420}
              y={265}
              fill="#2f2b43"
              fontSize="12"
              opacity="0.8"
              textAnchor="middle"
            >
              International workplace context
            </text>
          </motion.g>

          {/* Practice path indicator - centered */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "backOut", delay: 0.5 }}
          >
            <circle cx={220} cy={330} r={12} fill="#3a5e96" />
            <text
              x={220}
              y={335}
              fill="#ffffff"
              fontSize="14"
              fontWeight="700"
              textAnchor="middle"
            >
              1
            </text>

            <line
              x1={232}
              y1={330}
              x2={288}
              y2={330}
              stroke="#3a5e96"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            <circle cx={300} cy={330} r={12} fill="#3a5e96" />
            <text
              x={300}
              y={335}
              fill="#ffffff"
              fontSize="14"
              fontWeight="700"
              textAnchor="middle"
            >
              2
            </text>

            <line
              x1={312}
              y1={330}
              x2={368}
              y2={330}
              stroke="#3a5e96"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            <circle cx={380} cy={330} r={12} fill="#3a5e96" />
            <text
              x={380}
              y={335}
              fill="#ffffff"
              fontSize="14"
              fontWeight="700"
              textAnchor="middle"
            >
              3
            </text>

            <text
              x={300}
              y={360}
              fill="#3a5e96"
              fontSize="13"
              fontWeight="500"
              textAnchor="middle"
            >
              Step-by-step progression
            </text>
          </motion.g>
        </g>
      </svg>
    </ShadowRootHost>
  );
}
