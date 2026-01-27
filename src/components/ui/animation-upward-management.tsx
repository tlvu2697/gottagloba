"use client";

import { motion } from "framer-motion";
import { useId } from "react";

import ShadowRootHost from "./shadow-root-host";

type Props = {
  className?: string;
};

export default function AnimationUpwardManagement({ className }: Props) {
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
        aria-label="Upward Management animation"
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

          {/* Main card - Managing Pressure */}
          <motion.g
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <rect
              x={60}
              y={80}
              width={280}
              height={120}
              rx={16}
              fill="#3a5e96"
            />
            <text
              x={200}
              y={125}
              fill="#ffffff"
              fontSize="22"
              fontWeight="600"
              textAnchor="middle"
            >
              Managing Pressure
            </text>
            <text
              x={200}
              y={155}
              fill="#ffffff"
              fontSize="14"
              opacity="0.9"
              textAnchor="middle"
            >
              Navigate high-stakes conversations
            </text>
            <text
              x={200}
              y={175}
              fill="#ffffff"
              fontSize="14"
              opacity="0.9"
              textAnchor="middle"
            >
              with confidence and clarity
            </text>
          </motion.g>

          <rect x={0} y={150} width={600} height={250} className="s1" />

          {/* Accent card - Handling Conflict */}
          <motion.g
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <rect
              x={360}
              y={120}
              width={180}
              height={100}
              rx={12}
              fill="#fdbf65"
            />
            <text
              x={450}
              y={160}
              fill="#2f2b43"
              fontSize="18"
              fontWeight="600"
              textAnchor="middle"
            >
              Handling Conflict
            </text>
            <text
              x={450}
              y={185}
              fill="#2f2b43"
              fontSize="12"
              opacity="0.8"
              textAnchor="middle"
            >
              Disagree respectfully
            </text>
          </motion.g>

          {/* Bottom elements */}
          <motion.g
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.3 }}
          >
            <rect
              x={60}
              y={230}
              width={220}
              height={80}
              rx={12}
              fill="#3a5e96"
              opacity="0.15"
            />
            <text
              x={170}
              y={275}
              fill="#3a5e96"
              fontSize="16"
              fontWeight="500"
              textAnchor="middle"
            >
              Executive Presence
            </text>
          </motion.g>

          <motion.g
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.4 }}
          >
            <rect
              x={300}
              y={230}
              width={240}
              height={80}
              rx={12}
              fill="#fdbf65"
              opacity="0.2"
            />
            <text
              x={420}
              y={275}
              fill="#2f2b43"
              fontSize="16"
              fontWeight="500"
              textAnchor="middle"
            >
              Command Resources
            </text>
          </motion.g>

          {/* Decorative elements */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "backOut", delay: 0.5 }}
          >
            <circle cx={100} cy={340} r={8} fill="#3a5e96" opacity="0.3" />
            <circle cx={130} cy={350} r={6} fill="#3a5e96" opacity="0.2" />
            <circle cx={500} cy={340} r={10} fill="#fdbf65" opacity="0.3" />
            <circle cx={470} cy={350} r={7} fill="#fdbf65" opacity="0.2" />
          </motion.g>
        </g>
      </svg>
    </ShadowRootHost>
  );
}
