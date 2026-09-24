"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const stackRows = [
  {
    direction: "left",
    items: [
      { text: "FIGMA", style: "outline" },
      { text: "NEXT.JS & REACT", style: "filled" },
      { text: "FRAMER", style: "outline" },
      { text: "UI / UX", style: "accent" },
      { text: "FIGMA", style: "outline" },
    ],
  },
  {
    direction: "right",
    items: [
      { text: "CSS", style: "accent" },
      { text: "POSTHOG", style: "filled" },
      { text: "GA4", style: "outline" },
      { text: "LANDING PAGE CRO", style: "filled" },
      { text: "CLARITY", style: "outline" },
    ],
  },
];

export default function CROMindset() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rowOneX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-18%"]
  );

  const rowTwoX = useTransform(
    scrollYProgress,
    [0, 1],
    ["-18%", "0%"]
  );

  const rowThreeX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-22%"]
  );

  const rowFourX = useTransform(
    scrollYProgress,
    [0, 1],
    ["-22%", "0%"]
  );

  const rowPositions = [
    rowOneX,
    rowTwoX,
    rowThreeX,
    rowFourX,
  ];

  return (
    <section
      ref={sectionRef}
      className="cro-mindset"
    >
      <div className="cro-mindset-container">

        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.div
          className="cro-mindset-intro"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span>TOOLS &amp; STACK</span>

          <p>
            The tools I use to design, build,
            measure, and optimize high-converting
            digital experiences.
          </p>
        </motion.div>


        {/* =====================================================
            SCROLLING STACK
        ===================================================== */}

        <div className="cro-mindset-grid">

          {stackRows.map((row, rowIndex) => (
            <motion.div
              className="cro-mindset-item"
              key={rowIndex}
              style={{
                x: rowPositions[rowIndex],
              }}
            >

              {row.items.map((item, index) => (
                <div
                  key={`${item.text}-${index}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "34px",
                  }}
                >
                  <h3
                    className={
                      item.style === "outline"
                        ? "outline"
                        : ""
                    }
                  >
                    {item.text}
                  </h3>

                  {index < row.items.length - 1 && (
                    <span className="cro-mindset-arrow">
                      •
                    </span>
                  )}
                </div>
              ))}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}