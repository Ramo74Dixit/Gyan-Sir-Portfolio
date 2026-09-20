import { useState, useEffect } from "react";
import { FiMenu, FiX, FiDownload, FiMail } from "react-icons/fi";
import { data } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects & AI", href: "#projects" },
    { label: "Roles", href: "#roles" },
    { label: "Publications & Patent", href: "#publications" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Awards & Sports", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-logo">
          <div className="nav-logo-badge">GS</div>
          <div className="nav-logo-text">
            <h3>Dr. A Gyan Sirohi</h3>
            <p>Assistant Professor · Entomology</p>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <a
            href={`mailto:${data.personal.email}`}
            className="btn-primary"
            style={{ padding: "0.55rem 1.25rem", fontSize: "0.85rem" }}
          >
            <FiMail />
            <span>Connect</span>
          </a>

          {/* Mobile Toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            background: "rgba(5, 19, 11, 0.98)",
            backdropFilter: "blur(25px)",
            borderBottom: "1px solid var(--glass-border)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            zIndex: 999,
          }}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="nav-link"
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: "1.1rem", padding: "0.5rem 0" }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ paddingTop: "1rem", borderTop: "1px solid rgba(16, 185, 129, 0.2)" }}>
            <a
              href={`mailto:${data.personal.email}`}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMobileOpen(false)}
            >
              <FiMail /> Contact Directly
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
