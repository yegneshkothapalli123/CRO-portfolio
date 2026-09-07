"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="hero">

      {/* =========================================
          ATMOSPHERIC BACKGROUND
      ========================================= */}

      <div className="hero-background" aria-hidden="true">

        {/* LEFT BACKGROUND CARD */}
        <motion.div
          className="floating-card card-one"
          animate={{
            y: [0, -14, 0],
            rotate: [-5, -3, -5],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
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
        </motion.div>


        {/* TOP MIDDLE CARD */}
        <motion.div
          className="floating-card card-two"
          animate={{
            y: [0, 18, 0],
            rotate: [4, 2, 4],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
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
        </motion.div>


        {/* RIGHT BACKGROUND CARD */}
        <motion.div
          className="floating-card card-three"
          animate={{
            y: [0, -20, 0],
            rotate: [-4, -2, -4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
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
        </motion.div>


        {/* CENTER ANALYTICS CARD */}
        <motion.div
          className="floating-card card-four"
          animate={{
            y: [0, -12, 0],
            rotate: [3, 1, 3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
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
        </motion.div>


        {/* LOWER MIDDLE PROCESS CARD */}
        <motion.div
          className="floating-card card-five"
          animate={{
            y: [0, 16, 0],
            rotate: [-3, -1, -3],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
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
        </motion.div>


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

            <span>
              easier to say yes to.
            </span>
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
            I help SaaS/startups turn more landing-page visitors into leads and customers through conversion-focused design, messaging, and experimentation.
          </motion.p>


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

  <a
    href="#contact"
    className="hero-btn hero-btn-secondary"
  >
    Let's talk
  </a>
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

          {/* CIRCULAR PHOTO */}

          <div className="photo-frame">

            <img
              src="/Yegnesh.png"
              alt="Yegnesh"
              className="profile-image"
            />

          </div>


          {/* PHOTO INFORMATION */}

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

    </section>
  );
}