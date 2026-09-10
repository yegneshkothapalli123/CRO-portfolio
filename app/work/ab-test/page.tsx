"use client";

import { motion } from "motion/react";

export default function ABTestPage() {
  return (
    <main className="ab-page">

      {/* =====================================================
          TOP NAV
      ===================================================== */}

      <div className="ab-case-nav">
        <a href="/#work">← Back to selected work</a>
      </div>


      {/* =====================================================
          CASE STUDY HERO
      ===================================================== */}

      <section className="ab-case-hero">
        <div className="ab-container">

          <motion.div
            className="ab-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="ab-eyebrow">
              PROJECT 02 · EXPERIMENTATION
            </p>

            <h1>
              Hero A/B Test
              <br />
              <span>Clearer messaging. Stronger intent.</span>
            </h1>

            <p className="ab-hero-description">
              A fictional A/B testing experiment for Crewline
              exploring how a clearer value proposition and
              stronger messaging could improve the first
              impression of the product.
            </p>
          </motion.div>


          {/* EXPERIMENT META */}

          <motion.div
            className="ab-meta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
          >

            <div className="ab-meta-item">
              <span>EXPERIMENT</span>
              <strong>Hero Section</strong>
            </div>

            <div className="ab-meta-item">
              <span>VARIABLE</span>
              <strong>Messaging + CTA</strong>
            </div>

            <div className="ab-meta-item">
              <span>GOAL</span>
              <strong>Improve clarity</strong>
            </div>

            <div className="ab-meta-item">
              <span>TYPE</span>
              <strong>Conceptual A/B Test</strong>
            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          OBJECTIVE
      ===================================================== */}

      <section className="ab-section">
        <div className="ab-container">

          <div className="ab-section-heading">

            <p className="ab-eyebrow">
              01 · OBJECTIVE
            </p>

            <h2>
              Make the value
              <br />
              <span>easier to understand.</span>
            </h2>

          </div>


          <div className="ab-objective-grid">

            <div className="ab-objective-main">
              <p>
                The original hero communicates a positive
                message, but the proposition is relatively
                broad. A visitor may understand that Crewline
                is useful without immediately understanding
                exactly what the product does.
              </p>

              <p>
                The test introduces a more specific
                problem-to-solution message designed to make
                the product's value easier to understand at a
                glance.
              </p>
            </div>


            <div className="ab-objective-side">

              <div>
                <span>CONTROL</span>
                <strong>Build With Confidence</strong>
              </div>

              <div>
                <span>TEST</span>
                <strong>
                  Replace disconnected tools with one
                  construction platform.
                </strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          VARIANT A
      ===================================================== */}

      <section className="ab-variant-section">

        <div className="ab-container">

          <div className="ab-variant-header">

            <div>
              <span className="ab-variant-number">
                A
              </span>

              <div>
                <p>CONTROL</p>

                <h2>
                  Build With Confidence
                </h2>
              </div>
            </div>

            <span className="ab-variant-label">
              ORIGINAL
            </span>

          </div>


          {/* VARIANT A SCREEN */}

          <div className="ab-screen variant-a">

            {/* NAVBAR */}

            <nav className="crewline-demo-nav">

              <div className="crewline-demo-logo">
                <span />
                crewline
              </div>

              <div className="crewline-demo-links">
                <span>Platform</span>
                <span>Solutions</span>
                <span>Customers</span>
                <span>Resources</span>
                <span>Company</span>
              </div>

              <div className="crewline-demo-actions">
                <span>Login</span>

                <button>
                  Get a demo
                </button>
              </div>

            </nav>


            {/* HERO */}

            <div className="crewline-demo-hero">

              <div className="crewline-demo-copy">

                <p className="crewline-demo-kicker">
                  THE CONNECTED WORKFORCE PLATFORM
                </p>

                <h3>
                  Build With
                  <br />
                  Confidence
                </h3>

                <p>
                  How modern contractors manage payroll,
                  HR, expenses, and field operations in one
                  place.
                </p>

                <div className="crewline-demo-form">

                  <input
                    type="text"
                    placeholder="Enter your work email"
                    readOnly
                  />

                  <button>
                    Submit
                  </button>

                </div>

              </div>


              <Dashboard />

            </div>

          </div>


          {/* VARIANT A ANALYSIS */}

          <div className="ab-variant-analysis">

            <div>
              <span>OBSERVATION</span>

              <h3>
                Broad but positive.
              </h3>
            </div>

            <p>
              The headline communicates confidence, but
              doesn't clearly communicate the problem Crewline
              solves or what makes the platform different.
              Visitors need to read the supporting copy to
              understand the product context.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          VARIANT B
      ===================================================== */}

      <section className="ab-variant-section">

        <div className="ab-container">

          <div className="ab-variant-header">

            <div>
              <span className="ab-variant-number">
                B
              </span>

              <div>
                <p>TEST</p>

                <h2>
                  Replace disconnected tools
                </h2>
              </div>
            </div>

            <span className="ab-variant-label">
              EXPERIMENT
            </span>

          </div>


          {/* VARIANT B SCREEN */}

          <div className="ab-screen variant-b">

            {/* NAVBAR */}

            <nav className="crewline-demo-nav">

              <div className="crewline-demo-logo">
                <span />
                crewline
              </div>

              <div className="crewline-demo-links">
                <span>Platform</span>
                <span>Solutions</span>
                <span>Customers</span>
                <span>Resources</span>
                <span>Company</span>
              </div>

              <div className="crewline-demo-actions">
                <span>Login</span>

                <button>
                  Book Your Demo
                </button>
              </div>

            </nav>


            {/* HERO */}

            <div className="crewline-demo-hero">

              <div className="crewline-demo-copy">

                <p className="crewline-demo-kicker">
                  THE CONNECTED WORKFORCE PLATFORM
                </p>

                <h3>
                  Replace disconnected
                  <br />
                  tools with one
                  <br />
                  construction platform.
                </h3>

                <p>
                  Manage payroll, HR, field operations, and
                  expenses in one place—reducing manual work
                  and simplifying daily operations.
                </p>

                <div className="crewline-demo-form">

                  <input
                    type="text"
                    placeholder="Enter your work email"
                    readOnly
                  />

                  <button>
                    Submit
                  </button>

                </div>

              </div>


              <Dashboard />

            </div>

          </div>


          {/* VARIANT B ANALYSIS */}

          <div className="ab-variant-analysis">

            <div>
              <span>OBSERVATION</span>

              <h3>
                Specific and outcome-led.
              </h3>
            </div>

            <p>
              The new proposition identifies the problem,
              establishes the product category, and explains
              the benefit more directly. This gives visitors
              more context before they decide whether to
              continue.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT CHANGED
      ===================================================== */}

      <section className="ab-section ab-changes">

        <div className="ab-container">

          <div className="ab-section-heading">

            <p className="ab-eyebrow">
              02 · WHAT CHANGED
            </p>

            <h2>
              From a broad promise
              <br />
              <span>to a concrete proposition.</span>
            </h2>

          </div>


          <div className="ab-change-grid">

            <div className="ab-change-card">

              <span>01</span>

              <h3>
                Value proposition
              </h3>

              <p>
                The control focuses on an emotional benefit:
                confidence. The test focuses on a concrete
                product problem and solution.
              </p>

            </div>


            <div className="ab-change-card">

              <span>02</span>

              <h3>
                Messaging clarity
              </h3>

              <p>
                The test makes it easier to understand what
                Crewline does without requiring visitors to
                infer the product category.
              </p>

            </div>


            <div className="ab-change-card">

              <span>03</span>

              <h3>
                CTA intent
              </h3>

              <p>
                The navigation CTA changes from “Get a demo”
                to “Book Your Demo”, creating a more explicit
                action.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HYPOTHESIS
      ===================================================== */}

      <section className="ab-hypothesis">

        <div className="ab-container">

          <div className="ab-hypothesis-inner">

            <p className="ab-eyebrow">
              03 · HYPOTHESIS
            </p>

            <h2>
              If visitors understand the
              <span> problem and solution faster,</span>
              they should be more likely to continue
              toward the demo.
            </h2>

            <p>
              The experiment is designed around clarity rather
              than visual change. The underlying product
              experience remains the same while the first
              message is made more specific.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SUCCESS METRICS
      ===================================================== */}

      <section className="ab-section">

        <div className="ab-container">

          <div className="ab-section-heading">

            <p className="ab-eyebrow">
              04 · SUCCESS METRICS
            </p>

            <h2>
              Measure the behavior,
              <br />
              <span>not just the click.</span>
            </h2>

          </div>


          <div className="ab-metrics">

            <div>
              <span>PRIMARY</span>

              <h3>
                Demo conversion rate
              </h3>

              <p>
                Percentage of visitors who progress toward
                the demo after seeing the hero.
              </p>
            </div>


            <div>
              <span>SECONDARY</span>

              <h3>
                CTA interaction
              </h3>

              <p>
                Measure interaction with the primary CTA and
                whether stronger intent is created.
              </p>
            </div>


            <div>
              <span>DIAGNOSTIC</span>

              <h3>
                Engagement
              </h3>

              <p>
                Analyze downstream behavior to understand
                whether increased clicks translate into
                meaningful progression.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONCLUSION
      ===================================================== */}

      <section className="ab-conclusion">

        <div className="ab-container">

          <p className="ab-eyebrow">
            05 · TAKEAWAY
          </p>

          <h2>
            The strongest test
            <br />
            <span>changes the question.</span>
          </h2>

          <p>
            Instead of asking whether a headline sounds
            better, this experiment asks whether visitors can
            understand the product's value faster—and whether
            that clarity changes what they do next.
          </p>

          <a href="/#work">
            ← Back to selected work
          </a>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   DASHBOARD COMPONENT
========================================================= */

function Dashboard() {
  return (
    <div className="crewline-dashboard-demo">

      <div className="crewline-dashboard-main-demo">

        <p>Good afternoon, Sam</p>

        <h4>
          Welcome back to Crewline
        </h4>

        <div className="crewline-stats-demo">

          <div>
            <span>
              Team
              <br />
              members
            </span>

            <strong>312</strong>
          </div>

          <div>
            <span>
              Safety
              <br />
              incidents
            </span>

            <strong>4</strong>
          </div>

          <div>
            <span>
              Utilization
            </span>

            <strong>253</strong>
          </div>

        </div>

        <p className="crewline-chart-title">
          Headcount — Last 6 months
        </p>

        <div className="crewline-chart-demo">
          <span style={{ height: "42%" }} />
          <span style={{ height: "58%" }} />
          <span style={{ height: "48%" }} />
          <span style={{ height: "72%" }} />
          <span style={{ height: "61%" }} />
          <span style={{ height: "84%" }} />
        </div>

      </div>


      <div className="crewline-dashboard-side-demo">

        <h4>
          Time off
        </h4>

        <div>
          <span>John Pinno</span>
          <span>Out today</span>
        </div>

        <div>
          <span>Hannah Jenkins</span>
          <span>Out tomorrow</span>
        </div>

        <div>
          <span>David Martinez</span>
          <span>Out tomorrow</span>
        </div>

        <h5>
          Live job cost breakdown
        </h5>

        <p>
          Last 3 months
        </p>

      </div>

    </div>
  );
}