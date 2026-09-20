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

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
        <a href="#home" className="nav-logo" onClick={() => setMobileOpen(false)}>
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

        {/* Action Button & Toggle */}
        <div className="nav-actions-group">
          <a
            href={`mailto:${data.personal.email}`}
            className="btn-primary nav-btn-desktop"
          >
            <FiMail />
            <span>Connect</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="nav-mobile-drawer">
          <div className="nav-mobile-links">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="nav-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                <span>{item.label}</span>
                <span className="nav-mobile-arrow">→</span>
              </a>
            ))}
          </div>
          <div className="nav-mobile-footer">
            <a
              href={`mailto:${data.personal.email}`}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "0.85rem" }}
              onClick={() => setMobileOpen(false)}
            >
              <FiMail />
              <span>Contact Directly</span>
            </a>
            <div className="nav-mobile-sub">
              <span>📞 {data.personal.phone}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
