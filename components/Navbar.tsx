"use client";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <a href="/" className="navbar-logo">
          YEGNESH <span>KOTHAPALLI</span>
        </a>

        {/* Navigation */}
        <nav className="navbar-links">
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </nav>

        {/* CTA */}
        <a href="#contact" className="navbar-cta">
          Let's talk
          <span>↗</span>
        </a>

      </div>
    </header>
  );
}