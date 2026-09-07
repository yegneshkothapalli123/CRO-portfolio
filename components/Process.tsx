"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start with the business goal, audience, offer and the action the page needs visitors to take.",
    detail: "Audience · Intent · Offer",
  },
  {
    number: "02",
    title: "Diagnose",
    description:
      "I identify friction, confusion, weak messaging and anything that makes the next step harder to understand.",
    detail: "Friction · UX · Messaging",
  },
  {
    number: "03",
    title: "Design",
    description:
      "I turn the insights into a clearer page structure, stronger hierarchy, persuasive copy and focused CTAs.",
    detail: "Structure · Copy · UX",
  },
  {
    number: "04",
    title: "Test",
    description:
      "I turn assumptions into testable hypotheses and use experiments to find what can perform better.",
    detail: "Hypothesis · A/B · Learn",
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-container">

        {/* HEADER */}

        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="process-eyebrow">
              HOW I WORK
            </p>

            <h2>
              Design is only
              <br />
              <span>half the job.</span>
            </h2>
          </div>

          <p className="process-intro">
            A conversion-focused process that connects
            strategy, UX, messaging and experimentation
            instead of treating them as separate pieces.
          </p>
        </motion.div>


        {/* PROCESS STEPS */}

        <div className="process-list">

          {steps.map((step, index) => (
            <motion.div
              className="process-step"
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              {/* NUMBER */}

              <div className="process-number">
                {step.number}
              </div>


              {/* TITLE */}

              <h3>
                {step.title}
              </h3>


              {/* DESCRIPTION */}

              <p>
                {step.description}
              </p>


              {/* DETAIL */}

              <span className="process-detail">
                {step.detail}
              </span>


              {/* ARROW */}

              <span className="process-arrow">
                ↗
              </span>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}