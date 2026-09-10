"use client";

import { motion } from "motion/react";

const principles = [
  {
    number: "01",
    title: "Clarity",
    description: "Make the value obvious.",
  },
  {
    number: "02",
    title: "Friction",
    description: "Find what's getting in the way.",
  },
  {
    number: "03",
    title: "Intent",
    description: "Guide users toward the right action.",
  },
  {
    number: "04",
    title: "Action",
    description: "Turn attention into conversion.",
  },
];

export default function CROMindset() {
  return (
    <section className="cro-mindset">
      <div className="cro-mindset-container">

        <motion.div
          className="cro-mindset-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span>CRO MINDSET</span>

          <p>
            Every conversion starts with understanding
            what the visitor needs next.
          </p>
        </motion.div>

        <div className="cro-mindset-grid">
          {principles.map((principle, index) => (
            <motion.div
              className="cro-mindset-item"
              key={principle.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <span className="cro-mindset-number">
                {principle.number}
              </span>

              <div>
                <h3>{principle.title}</h3>

                <p>{principle.description}</p>
              </div>

              {index < principles.length - 1 && (
                <span className="cro-mindset-arrow">→</span>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}