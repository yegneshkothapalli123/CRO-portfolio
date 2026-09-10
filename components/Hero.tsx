"use client";

import { useState } from "react";
import { motion } from "motion/react";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="hero">

      {/* =========================================
          ATMOSPHERIC BACKGROUND
      ========================================= */}

      <div className="hero-background" aria-hidden="true">

        {/* LEFT BACKGROUND CARD */}
        <div className="floating-card card-one">
          <div className="mock-card">
            <small>LANDING PAGE</small>

            <strong>
              Higher
              <br />
              conversions.
              <br />
              Lower friction.
            </strong>

            <div className="mock-line" />
            <div className="mock-line short" />
          </div>
        </div>

        {/* TOP MIDDLE CARD */}
        <div className="floating-card card-two">
          <div className="mock-card light">
            <small>CASE STUDY</small>

            <strong>
              Build with
              <br />
              clarity.
            </strong>

            <div className="mock-image" />

            <div className="mock-line" />
            <div className="mock-line short" />
          </div>
        </div>

        {/* RIGHT BACKGROUND CARD */}
        <div className="floating-card card-three">
          <div className="mock-card light">
            <small>IDEAS</small>

            <strong>
              Ideas
              <br />
              to impact.
            </strong>

            <div className="mock-image" />

            <div className="mock-line" />
          </div>
        </div>

        {/* CENTER ANALYTICS CARD */}
        <div className="floating-card card-four">
          <div className="mock-card analytics-card">
            <small>ANALYTICS</small>

            <strong>
              From traffic
              <br />
              to revenue.
            </strong>

            <div className="analytics-line" />

            <div className="analytics-number">
              +32.4%
            </div>
          </div>
        </div>

        {/* LOWER MIDDLE PROCESS CARD */}
        <div className="floating-card card-five">
          <div className="mock-card process-card">
            <small>PROCESS</small>

            <strong>
              Design.
              <br />
              Test.
              <br />
              Improve.
            </strong>

            <div className="process-arrow">
              →
            </div>
          </div>
        </div>

        {/* ATMOSPHERIC LIGHT */}
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        {/* ORBIT LINES */}
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />

      </div>

      {/* =========================================
          MAIN HERO
      ========================================= */}

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <motion.p
            className="hero-eyebrow"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            CONVERSION DESIGNER × CRO
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            I make
            <br />
            landing pages
            <br />
            <span>easier to say yes to.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            I help SaaS/startups turn more landing-page visitors
            into leads and customers through conversion-focused
            design, messaging, and experimentation.
          </motion.p>

          {/* HERO BUTTONS */}

          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
          >
            <a
              href="#work"
              className="hero-btn hero-btn-primary"
            >
              View my work
              <span>↗</span>
            </a>

            <button
              type="button"
              className="hero-btn hero-btn-secondary"
              onClick={() => setContactOpen(true)}
            >
              Let's talk
            </button>
          </motion.div>

        </div>

        {/* =========================================
            PROFILE PHOTO
        ========================================= */}

        <motion.div
          className="hero-photo"
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: "easeOut",
          }}
        >

          <div className="photo-frame">
            <img
              src="/Yegnesh.png"
              alt="Yegnesh"
              className="profile-image"
            />
          </div>

          <div className="photo-meta">

            <div>
              <span className="meta-label">
                YEGNESH
              </span>

              <span>
                CRO / UX
              </span>
            </div>

            <span>
              01
            </span>

          </div>

        </motion.div>

      </div>

      {/* =========================================
          HERO FOOTER
      ========================================= */}

      <div className="hero-bottom">

        <span>
          01 / 05
        </span>

        <span>
          SCROLL TO EXPLORE ↓
        </span>

        <span>
          AVAILABLE FOR SELECT PROJECTS
        </span>

      </div>

      {/* =========================================
          CONTACT MODAL
      ========================================= */}

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

    </section>
  );
}