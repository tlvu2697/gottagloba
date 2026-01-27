"use client";

import { motion } from "framer-motion";
import { useId } from "react";

import ShadowRootHost from "./shadow-root-host";

type Props = {
  className?: string;
};

export default function AnimationMeetingsConfidence({ className }: Props) {
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
        aria-label="Meetings with Confidence animation"
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

          {/* Top cards */}
          {/* Speak with Authority */}
          <motion.g
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <rect
              x={60}
              y={60}
              width={220}
              height={90}
              rx={14}
              fill="#3a5e96"
            />
            <text
              x={170}
              y={95}
              fill="#ffffff"
              fontSize="18"
              fontWeight="600"
              textAnchor="middle"
            >
              Speak with Authority
            </text>
            <text
              x={170}
              y={120}
              fill="#ffffff"
              fontSize="13"
              opacity="0.9"
              textAnchor="middle"
            >
              Command attention
            </text>
          </motion.g>

          {/* Defend Strategically */}
          <motion.g
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <rect
              x={300}
              y={60}
              width={240}
              height={90}
              rx={14}
              fill="#fdbf65"
            />
            <text
              x={420}
              y={95}
              fill="#2f2b43"
              fontSize="18"
              fontWeight="600"
              textAnchor="middle"
            >
              Defend Strategically
            </text>
            <text
              x={420}
              y={120}
              fill="#2f2b43"
              fontSize="13"
              opacity="0.8"
              textAnchor="middle"
            >
              Protect priorities
            </text>
          </motion.g>

          <rect x={0} y={130} width={600} height={270} className="s1" />

          {/* Connection lines */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <line
              x1={170}
              y1={150}
              x2={170}
              y2={170}
              stroke="#3a5e96"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.4"
            />
            <line
              x1={420}
              y1={150}
              x2={420}
              y2={170}
              stroke="#fdbf65"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.4"
            />
          </motion.g>

          {/* Middle row */}
          {/* Meeting Dynamics */}
          <motion.g
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <rect
              x={60}
              y={170}
              width={220}
              height={80}
              rx={12}
              fill="#3a5e96"
              opacity="0.15"
            />
            <text
              x={170}
              y={215}
              fill="#3a5e96"
              fontSize="15"
              fontWeight="500"
              textAnchor="middle"
            >
              Meeting Dynamics
            </text>
          </motion.g>

          {/* Navigate Tension */}
          <motion.g
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <rect
              x={300}
              y={170}
              width={240}
              height={80}
              rx={12}
              fill="#fdbf65"
              opacity="0.2"
            />
            <text
              x={420}
              y={215}
              fill="#2f2b43"
              fontSize="15"
              fontWeight="500"
              textAnchor="middle"
            >
              Navigate Tension
            </text>
          </motion.g>

          {/* Connection lines to bottom */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <line
              x1={170}
              y1={250}
              x2={260}
              y2={270}
              stroke="#3a5e96"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.4"
            />
            <line
              x1={420}
              y1={250}
              x2={340}
              y2={270}
              stroke="#fdbf65"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.4"
            />
          </motion.g>

          {/* Bottom emphasis card - Drive Outcomes */}
          <motion.g
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.4 }}
          >
            <rect
              x={180}
              y={270}
              width={240}
              height={85}
              rx={14}
              fill="#3a5e96"
            />
            <text
              x={300}
              y={315}
              fill="#ffffff"
              fontSize="19"
              fontWeight="600"
              textAnchor="middle"
            >
              Drive Outcomes
            </text>
          </motion.g>
        </g>
      </svg>
    </ShadowRootHost>
  );
}
