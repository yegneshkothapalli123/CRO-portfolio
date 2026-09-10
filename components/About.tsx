"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="about-eyebrow">ABOUT</p>

          <h2>
            I design for
            <br />
            <span>what happens next.</span>
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-statement"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              A landing page shouldn't just look polished.
              It should make the value clear, remove
              friction, build confidence and make the next
              action feel obvious.
            </p>

            <p>
              That's where I focus — combining conversion
              strategy, UX, messaging and experimentation
              to create digital experiences built around
              user intent.
            </p>
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="about-detail">
              <span>FOCUS</span>
              <strong>Landing Pages · CRO · UX</strong>
            </div>

            <div className="about-detail">
              <span>APPROACH</span>
              <strong>Research → Design → Test</strong>
            </div>

            <div className="about-detail">
              <span>WORK WITH</span>
              <strong>SaaS · Startups · Digital Businesses</strong>
            </div>

            <div className="about-detail">
              <span>BASED IN</span>
              <strong>India · Working remotely</strong>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span>CONVERSION DESIGNER × CRO</span>

          <span className="about-line" />

          <span>CLARITY · INTENT · ACTION</span>
        </motion.div>
      </div>
    </section>
  );
}