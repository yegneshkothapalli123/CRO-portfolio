"use client";

import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const openContact = () => {
      setContactOpen(true);
    };

    window.addEventListener("open-contact-modal", openContact);

    return () => {
      window.removeEventListener("open-contact-modal", openContact);
    };
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <a href="/" className="navbar-logo">
            YEGNESH <span>KOTHAPALLI</span>
          </a>

          <nav className="navbar-links">
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
          </nav>

          <button
            type="button"
            className="navbar-cta"
            onClick={() => setContactOpen(true)}
          >
            Let's talk
            <span>↗</span>
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