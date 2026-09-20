import { FiArrowUp, FiMail, FiPhone } from "react-icons/fi";
import { data } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: "700", color: "var(--text-primary)" }}>
                Dr. A Gyan <span className="gradient-text">Sirohi</span>
              </span>
              <span style={{ fontSize: "0.75rem", background: "rgba(16, 185, 129, 0.15)", color: "var(--emerald-light)", padding: "0.2rem 0.6rem", borderRadius: "50px" }}>
                Ph.D. Entomology
              </span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", maxWidth: "450px" }}>
              Assistant Professor – Entomology at Geeta University, Panipat. Dedicated to advancing sustainable crop protection, IPM, and Agri-AI technologies.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <a href="#about" style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              About
            </a>
            <a href="#projects" style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              AgroSense-AI
            </a>
            <a href="#publications" style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Publications
            </a>
            <a href="#awards" style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Awards
            </a>

            <button
              onClick={scrollToTop}
              style={{
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid var(--glass-border)",
                color: "var(--emerald-light)",
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "var(--transition)",
              }}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <FiArrowUp />
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: "2.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(16, 185, 129, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.78rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © {new Date().getFullYear()} Dr. A Gyan Sirohi. All Academic & Research Rights Reserved.
          </div>
          <div>
            Village & Post Shyampur Jatt, District Hapur, U.P. – 245205 | Panipat, Haryana
          </div>
        </div>
      </div>
    </footer>
  );
}
