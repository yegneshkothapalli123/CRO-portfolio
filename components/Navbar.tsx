"use client";

import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const openContact = () => setContactOpen(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("open-contact-modal", openContact);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("open-contact-modal", openContact);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-inner">

          {/* Logo */}
          <button
            type="button"
            className="navbar-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            YEGNESH KOTHAPALLI
          </button>

          {/* Navigation */}
          <nav className="navbar-links">
            <button type="button" onClick={() => scrollToSection("work")}>
              Work
            </button>

            <button type="button" onClick={() => scrollToSection("process")}>
              Process
            </button>

            <button type="button" onClick={() => scrollToSection("about")}>
              About
            </button>
          </nav>

          {/* CTA */}
          <button
            type="button"
            className="navbar-cta"
            onClick={() => setContactOpen(true)}
          >
            <span>

Book a free audit</span>
            <span className="navbar-cta-arrow">↗</span>
          </button>

        </div>
      </header>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}