"use client";

import { motion } from "motion/react";

export default function BeforeAfterPage() {
  return (
    <main className="case-study">
      {/* Back to portfolio */}
      <div className="case-study-nav">
        <a href="/#work">← Back to selected work</a>
      </div>

      <section className="case-hero">
        <div className="case-container">

          {/* Project heading */}
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

          {/* Intro */}
          <motion.div
            className="case-intro"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
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
          </motion.div>

          {/* Main Before / After visual */}
          <motion.div
            className="case-main-visual"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <div className="case-visual-label">
              <span>BEFORE → AFTER</span>
              <span>AVENUE</span>
            </div>

            <div className="case-main-image">
              <img
                src="/before-after.png"
                alt="Avenue landing page before and after redesign"
              />
            </div>
          </motion.div>

          {/* Project overview */}
          <motion.div
            className="case-overview"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="case-overview-label">
              OVERVIEW
            </div>

            <div className="case-overview-text">
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

          {/* Challenge */}
          <motion.div
            className="case-challenge"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="case-section-label">
              THE CHALLENGE
            </div>

            <div>
              <h2>
                The page explained the product
                <br />
                <span>before explaining the problem.</span>
              </h2>

              <p>
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

          {/* Initial findings */}
          <motion.div
            className="case-findings"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="case-section-label">
              WHAT I IDENTIFIED
            </div>

            <div className="case-finding-grid">

              <article className="case-finding">
                <span>01</span>
                <h3>Unclear problem framing</h3>
                <p>
                  The original page moved into product
                  capabilities without clearly establishing
                  the operational problems Avenue solves.
                </p>
              </article>

              <article className="case-finding">
                <span>02</span>
                <h3>Feature-first communication</h3>
                <p>
                  Product features were explained before
                  visitors had a strong reason to connect
                  them with their own problems.
                </p>
              </article>

              <article className="case-finding">
                <span>03</span>
                <h3>Decision friction</h3>
                <p>
                  Missing pricing, unanswered objections,
                  and weaker conversion cues created
                  additional uncertainty.
                </p>
              </article>

              <article className="case-finding">
                <span>04</span>
                <h3>Weak conversion path</h3>
                <p>
                  The experience needed clearer next steps
                  for visitors who had already developed
                  enough understanding and intent.
                </p>
              </article>

            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}