"use client";

import { motion } from "motion/react";

export default function Work() {
  const projects = [
    {
      number: "01",
      type: "CRO / UX",
      title: "Before → After",
      description:
        "A landing page teardown focused on identifying friction, improving hierarchy, and creating a clearer path to conversion.",
      tags: ["CRO Audit", "UX", "Landing Page"],
      image: "/before-after.png",
    },
    {
      number: "02",
      type: "EXPERIMENTATION",
      title: "Hero A/B Test",
      description:
        "A fictional A/B testing project exploring how a clearer value proposition and stronger messaging could improve hero-section performance.",
      tags: ["A/B Testing", "Copy", "CRO"],
      image: "/ab-test.png",
    },
    {
      number: "03",
      type: "LANDING PAGE DESIGN",
      title: "Responsive Landing Page",
      description:
        "A complete responsive landing page designed across desktop, tablet, and mobile with conversion-focused UX.",
      tags: ["UI/UX", "Responsive", "Conversion Design"],
      image: "/responsive-page.png",
    },
  ];

  return (
    <section className="work" id="work">
      <div className="work-container">

        {/* SECTION HEADER */}

        <motion.div
          className="work-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="work-eyebrow">
              SELECTED WORK
            </p>

            <h2>
              Work built around
              <br />
              <span>conversion.</span>
            </h2>
          </div>

          <p className="work-intro">
            A selection of redesigns, experiments and landing
            pages built around user intent, clarity and action.
          </p>
        </motion.div>


        {/* PROJECTS */}

        <div className="work-grid">

          {projects.map((project, index) => (
            <motion.article
              className="work-card"
              key={project.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >

              {/* IMAGE */}

              <div className="work-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="work-number">
                  {project.number}
                </div>

              </div>


              {/* CONTENT */}

              <div className="work-content">

                <div className="work-meta">

                  <span>
                    {project.type}
                  </span>

                  <span>
                    2026
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                {/* TAGS */}

                <div className="work-tags">

                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>


                {/* LINK */}

                <a
                  href="#"
                  className="work-link"
                >
                  View project
                  <span>↗</span>
                </a>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}