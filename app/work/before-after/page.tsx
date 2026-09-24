"use client";

import { motion } from "motion/react";

export default function BeforeAfterPage() {
  return (
    <main className="case-study">

      {/* =====================================================
          BACK TO PORTFOLIO
      ===================================================== */}

      <div className="case-study-nav">
        <a href="/#work">← Back to selected work</a>
      </div>


      {/* =====================================================
          CASE STUDY
      ===================================================== */}

      <section className="case-hero">
        <div className="case-container">

          {/* =================================================
              HEADER
          ================================================= */}

          <motion.div
            className="case-hero-top"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="case-eyebrow">
                01 — CRO / UX
              </p>

              <h1>
                Before
                <br />
                <span>→ After</span>
              </h1>
            </div>

            <div className="case-meta">
              <span>PROJECT</span>
              <strong>Avenue</strong>

              <span>TYPE</span>
              <strong>CRO Audit + Redesign</strong>

              <span>YEAR</span>
              <strong>2026</strong>
            </div>
          </motion.div>


          {/* =================================================
              PROJECT SUMMARY TABLE
          ================================================= */}

          <motion.div
            className="case-table"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            {/* INTRO */}

            <div className="case-table-row case-table-intro">
              <div className="case-table-label">
                SUMMARY
              </div>

              <div className="case-table-content">
                <h2>
                  From unclear messaging
                  <br />
                  <span>to a clearer path to action.</span>
                </h2>

                <p>
                  A conversion-focused redesign of Avenue's
                  landing page. The work focused on making the
                  problem clearer, communicating the product
                  more effectively, and reducing friction between
                  understanding and action.
                </p>
              </div>
            </div>


            {/* MAIN IMAGE */}

            <div className="case-table-row case-table-image-row">
              <div className="case-table-label">
                BEFORE → AFTER
              </div>

              <div className="case-table-content">
                <div className="case-main-image">
                  <img
                    src="/before-after.png"
                    alt="Avenue landing page before and after redesign"
                  />
                </div>

                <div className="case-image-meta">
                  <span>AVENUE</span>
                  <span>CRO REDESIGN</span>
                </div>
              </div>
            </div>


            {/* =================================================
                OVERVIEW
            ================================================= */}

            <motion.div
              className="case-table-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="case-table-label">
                OVERVIEW
              </div>

              <div className="case-table-content case-two-column">
                <p>
                  The original experience moved quickly into
                  product capabilities without first making
                  the visitor's problem and its consequences
                  clear.
                </p>

                <p>
                  The redesign reframed the experience around
                  operational pain points, clearer product
                  workflows, stronger decision-making cues,
                  and more direct calls to action.
                </p>
              </div>
            </motion.div>


            {/* =================================================
                CHALLENGE
            ================================================= */}

            <motion.div
              className="case-table-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="case-table-label">
                THE CHALLENGE
              </div>

              <div className="case-table-content">

                <h2>
                  The page explained the product
                  <br />
                  <span>
                    before explaining the problem.
                  </span>
                </h2>

                <p className="case-small-text">
                  The redesign introduced a clearer sequence:
                </p>

                <div className="case-flow">
                  <span>Problem</span>
                  <b>→</b>
                  <span>Consequences</span>
                  <b>→</b>
                  <span>Solution</span>
                </div>

              </div>
            </motion.div>


            {/* =================================================
                FINDINGS
            ================================================= */}

            <motion.div
              className="case-table-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
            >

              <div className="case-table-label">
                WHAT I IDENTIFIED
              </div>

              <div className="case-table-content">

                <div className="case-findings-table">

                  {/* FINDING 01 */}

                  <article className="case-finding-row">

                    <span className="case-finding-number">
                      01
                    </span>

                    <h3>
                      Unclear problem framing
                    </h3>

                    <p>
                      The original page moved into product
                      capabilities without clearly establishing
                      the operational problems Avenue solves.
                    </p>

                  </article>


                  {/* FINDING 02 */}

                  <article className="case-finding-row">

                    <span className="case-finding-number">
                      02
                    </span>

                    <h3>
                      Feature-first communication
                    </h3>

                    <p>
                      Product features were explained before
                      visitors had a strong reason to connect
                      them with their own problems.
                    </p>

                  </article>


                  {/* FINDING 03 */}

                  <article className="case-finding-row">

                    <span className="case-finding-number">
                      03
                    </span>

                    <h3>
                      Decision friction
                    </h3>

                    <p>
                      Missing pricing, unanswered objections,
                      and weaker conversion cues created
                      additional uncertainty.
                    </p>

                  </article>


                  {/* FINDING 04 */}

                  <article className="case-finding-row">

                    <span className="case-finding-number">
                      04
                    </span>

                    <h3>
                      Weak conversion path
                    </h3>

                    <p>
                      The experience needed clearer next steps
                      for visitors who had already developed
                      enough understanding and intent.
                    </p>

                  </article>

                </div>

              </div>

            </motion.div>


            {/* =================================================
                FINAL STRUCTURE
            ================================================= */}

            <motion.div
              className="case-table-row case-final-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
            >

              <div className="case-table-label">
                CONVERSION LOGIC
              </div>

              <div className="case-table-content">

                <div className="case-flow case-flow-large">

                  <span>Problem</span>

                  <b>→</b>

                  <span>Consequences</span>

                  <b>→</b>

                  <span>Solution</span>

                  <b>→</b>

                  <span>Action</span>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>
      </section>

    </main>
  );
}