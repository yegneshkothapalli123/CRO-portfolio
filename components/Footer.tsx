"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* FINAL CTA */}

        <motion.div
          className="footer-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="footer-eyebrow">
            HAVE A PAGE THAT ISN'T CONVERTING?
          </p>

          <h2>
            Let's figure out
            <br />
            <span>what's getting in the way.</span>
          </h2>

          <button
            type="button"
            className="footer-cta-button"
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("open-contact-modal")
              );
            }}
          >
            LET'S TALK
            <span>↗</span>
          </button>
        </motion.div>


        {/* FOOTER MAIN */}

        <div className="footer-main">

          <div className="footer-brand">
            <a href="/" className="footer-logo">
              YEGNESH
              <span>KOTHAPALLI</span>
            </a>

            <p>
              Conversion-focused design,
              CRO and experimentation for
              digital businesses.
            </p>
          </div>


          <div className="footer-links">

            <div className="footer-column">
              <span>EXPLORE</span>

              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
            </div>


            <div className="footer-column">
              <span>SERVICES</span>

              <a href="#services">CRO Audit</a>
              <a href="#services">
                Conversion Design
              </a>
              <a href="#services">
                Testing & Optimization
              </a>
            </div>

<div className="footer-column">
  <span>CONTACT</span>

  <a href="mailto:yegneshkothapalli29@gmail.com">
    yegneshkothapalli29@gmail.com
  </a>

  <a href="tel:+91XXXXXXXXXX">
    +91 7973599240
  </a>

  <span className="footer-availability">
    <i />
    AVAILABLE FOR PROJECTS
  </span>
</div>
          </div>

        </div>


        {/* BOTTOM */}

        <div className="footer-bottom">

          <span>
            © 2026 YEGNESH KOTHAPALLI
          </span>

          <span>
            INDIA · REMOTE
          </span>

          <span>
            CLARITY · INTENT · ACTION
          </span>

        </div>

      </div>
    </footer>
  );
}