"use client";

import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "CRO Audit",
    description:
      "Find the friction, confusion and missed opportunities that may be stopping visitors from converting.",
    tags: "Research · UX · Heuristics",
  },
  {
    number: "02",
    title: "Conversion-Focused Design",
    description:
      "Turn insights into clearer layouts, stronger messaging and focused user journeys designed around action.",
    tags: "UX · UI · Copy · CTA",
  },
  {
    number: "03",
    title: "Testing",
    description:
      "Turn assumptions into structured experiments and test different ideas to discover what actually performs better.",
    tags: "A/B · Hypotheses · Experiments",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Use learnings from user behavior and experiments to continuously improve the page and its conversion path.",
    tags: "Data · Iteration · CRO",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="services-eyebrow">
              WHAT I DO
            </p>

            <h2>
              Services built
              <br />
              <span>around conversion.</span>
            </h2>
          </div>

          <p className="services-intro">
            I don't just make pages look better. I find
            what is stopping visitors from taking action —
            then improve it through strategy, design and
            experimentation.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="service-top">
                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  ↗
                </span>
              </div>

              <div className="service-body">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <span className="service-tags">
                {service.tags}
              </span>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}