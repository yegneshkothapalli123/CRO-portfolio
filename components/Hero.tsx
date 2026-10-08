"use client";

import { useState } from "react";
import { motion } from "motion/react";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-portrait-bg" aria-hidden="true">
          <img src="/Yegnesh.png" alt="" />
        </div>

        {/* =========================================
            BACKGROUND
        ========================================= */}

        <div className="hero-background" aria-hidden="true">
          <div className="floating-card card-one">
            <div className="mock-card">
              <small>LANDING PAGE</small>

              <strong>
                Clearer
                <br />
                messaging.
                <br />
                Less friction.
              </strong>

              <div className="mock-line" />
              <div className="mock-line short" />
            </div>
          </div>

          <div className="floating-card card-two">
            <div className="mock-card light">
              <small>CASE STUDY</small>

              <strong>
                Built for
                <br />
                clarity.
              </strong>

              <div className="mock-image" />

              <div className="mock-line" />
              <div className="mock-line short" />
            </div>
          </div>

          <div className="floating-card card-three">
            <div className="mock-card light">
              <small>STRATEGY</small>

              <strong>
                From idea
                <br />
                to action.
              </strong>

              <div className="mock-image" />

              <div className="mock-line" />
            </div>
          </div>

          <div className="floating-card card-four">
            <div className="mock-card analytics-card">
              <small>CRO</small>

              <strong>
                Find friction.
                <br />
                Improve flow.
              </strong>

              <div className="analytics-line" />

              <div className="analytics-number">
                TEST
              </div>
            </div>
          </div>

          <div className="floating-card card-five">
            <div className="mock-card process-card">
              <small>PROCESS</small>

              <strong>
                Research.
                <br />
                Design.
                <br />
                Improve.
              </strong>

              <div className="process-arrow">→</div>
            </div>
          </div>

          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
        </div>

        {/* =========================================
            TOP META
        ========================================= */}

        <div className="hero-top-meta">
          <span>01 / 05</span>

          <span>LANDING PAGE DESIGN × CRO</span>

          <span>AVAILABLE FOR SELECT PROJECTS</span>
        </div>

        {/* =========================================
            MAIN HERO
        ========================================= */}

        <div className="hero-container">
          <div className="hero-content">
            <motion.p
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              AI / SAAS / CRO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: "easeOut",
              }}
            >
              I DESIGN LANDING PAGES
              <br />

              <span className="hero-title-white">
                FOR AI & SAAS PRODUCTS
              </span>

              <br />

              <span className="hero-title-muted">
                THAT NEED MORE CLARITY
              </span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
            >
              I combine conversion-focused design, messaging, and CRO
              strategy to turn confusing SaaS landing pages into clear
              experiences built to drive action.
            </motion.p>

            {/* =========================================
                ACTIONS
            ========================================= */}

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
            >
              <a
                href="#work"
                className="hero-btn hero-btn-primary"
              >
               See my case studies 
                <span>↗</span>
              </a>

              <button
                type="button"
                className="hero-btn hero-btn-secondary"
                onClick={() => setContactOpen(true)}
              >
                Get a free landing page audit
              </button>
            </motion.div>
          </div>

          {/* =========================================
              RIGHT SIDE INFORMATION
          ========================================= */}

          <motion.div
            className="hero-side"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
            }}
          >
            <div className="hero-side-number">01</div>

            <div className="hero-side-line" />

            <p>
              Conversion-focused landing page design,
              messaging, and CRO strategy for AI and SaaS
              products.
            </p>

            <div className="hero-side-bottom">
              <span>UX</span>
              <span>MESSAGING</span>
              <span>CRO</span>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            BOTTOM META
        ========================================= */}

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE ↓</span>

          <span>CLARITY · TRUST · ACTION</span>

          <span>BASED IN INDIA · WORKING GLOBALLY</span>
        </div>
      </section>

      {/* =========================================
          CONTACT MODAL
      ========================================= */}

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}