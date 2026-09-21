import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFileText,
  FiArrowDown,
  FiDownload,
  FiCpu,
  FiAward,
} from "react-icons/fi";
import { data } from "../data";

function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime = null;
    const num = parseInt(end, 10);
    if (isNaN(num)) return;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
}

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="hero" id="home">
      {/* Dynamic Background Glow Orbs */}
      <div className="hero-bg-glow hero-bg-glow-1" />
      <div className="hero-bg-glow hero-bg-glow-2" />

      {/* Subtle Botanical / Tech Vector Background Decor */}
      <svg
        style={{
          position: "absolute",
          right: "-5%",
          top: "5%",
          opacity: 0.04,
          height: "90%",
          width: "auto",
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="250" cy="250" r="200" stroke="#10b981" strokeWidth="2" strokeDasharray="6 6" />
        <circle cx="250" cy="250" r="140" stroke="#f59e0b" strokeWidth="1.5" />
        <circle cx="250" cy="250" r="80" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M250 50 L250 450 M50 250 L450 250" stroke="#10b981" strokeWidth="1" />
      </svg>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          className="hero-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── IMAGE COLUMN (first in DOM = first on mobile) ───────────── */}
          {/* Desktop: CSS grid-area pushes it to the RIGHT column          */}
          <motion.div className="hero-image-col" variants={itemVariants}>
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-ring" />
              <div className="hero-avatar-ring-2" />

              <div className="hero-avatar-frame">
                <img
                  src="/profile.png"
                  alt="Dr. A Gyan Sirohi"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  style={{
                    display: "none",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #0d3b2e, #155e3d)",
                    fontFamily: "var(--font-display)",
                    fontSize: "3.5rem",
                    fontWeight: "700",
                    color: "var(--gold-light)",
                  }}
                >
                  GS
                </div>
              </div>

              {/* Floating Badge 1: ₹6 Cr Proposal */}
              <motion.div
                className="floating-chip chip-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="chip-icon">🌾</span>
                <div>
                  <div className="chip-val">₹6 Crore</div>
                  <div className="chip-desc">DBT-BIRAC PI Proposal</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Patent */}
              <motion.div
                className="floating-chip chip-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <span className="chip-icon">💡</span>
                <div>
                  <div className="chip-val">Patent: P1</div>
                  <div className="chip-desc">Auto BPH Monitor Device</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Ph.D. Entomology */}
              <motion.div
                className="floating-chip chip-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              >
                <span className="chip-icon">🔬</span>
                <div>
                  <div className="chip-val">Ph.D. Entomology</div>
                  <div className="chip-desc">SVPUAT Meerut</div>
                </div>
              </motion.div>
            </div>

            {/* Mobile-only Highlight Badges — shown below avatar on mobile */}
            <div className="hero-mobile-badges">
              <span className="hero-mobile-badge">🌾 ₹6 Cr Proposal</span>
              <span className="hero-mobile-badge">💡 BPH Patent</span>
              <span className="hero-mobile-badge">🔬 Ph.D. Entomology</span>
            </div>
          </motion.div>

          {/* ── TEXT COLUMN (second in DOM = second on mobile) ───────────── */}
          {/* Desktop: CSS grid-area pushes it to the LEFT column            */}
          <div className="hero-text-col">
            <motion.div className="hero-tag" variants={itemVariants}>
              <span className="hero-tag-dot" />
              <span>Available for Faculty, Research &amp; Agri-AI Collaborations</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              <span className="dr">Dr.</span>
              A Gyan
              <br />
              <span className="gradient-text">Sirohi</span>
            </motion.h1>

            <motion.div className="hero-type-container" variants={itemVariants}>
              <TypeAnimation
                sequence={[
                  "Assistant Professor – Entomology",
                  2200,
                  "Ph.D. in Entomology — SVPUAT Meerut",
                  2200,
                  "PI: ₹6 Cr DBT–BIRAC Bio-AI Moolankur Hub Proposal",
                  2200,
                  "Inventor: Automated BPH Monitoring Device Patent",
                  2200,
                  "Specialist: Integrated Pest Management & Biopesticides",
                  2200,
                  "Lead: AI Crop Pest & Disease Diagnostic Platform",
                  2200,
                ]}
                speed={50}
                repeat={Infinity}
                className="hero-type-text"
              />
            </motion.div>

            <motion.p className="hero-summary" variants={itemVariants}>
              Assistant Professor at Geeta University, Panipat, combining deep entomological science
              with emerging AI, drone sensing, and sustainable biopesticides. Focused on crop protection,
              basmati rice pest suppression, and student mentoring.
            </motion.p>

            {/* At a Glance Stats Grid */}
            <motion.div className="hero-stats-row" variants={itemVariants}>
              {data.stats.slice(0, 3).map((stat, i) => (
                <div key={i} className="hero-stat-card">
                  <span className="hero-stat-number">
                    {inView ? (
                      <AnimatedCounter
                        end={stat.number}
                        duration={2200 + i * 150}
                        prefix={stat.prefix || ""}
                        suffix={stat.suffix || ""}
                      />
                    ) : (
                      "0"
                    )}
                  </span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className="hero-stats-row" style={{ marginTop: "-0.5rem" }} variants={itemVariants}>
              {data.stats.slice(3, 6).map((stat, i) => (
                <div key={i} className="hero-stat-card">
                  <span className="hero-stat-number">
                    {inView ? (
                      <AnimatedCounter
                        end={stat.number}
                        duration={2200 + i * 150}
                        prefix={stat.prefix || ""}
                        suffix={stat.suffix || ""}
                      />
                    ) : (
                      "0"
                    )}
                  </span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="hero-actions" variants={itemVariants}>
              <a href="#projects" className="btn-primary">
                <FiCpu />
                <span>Explore Projects</span>
              </a>
              <a href="#publications" className="btn-gold">
                <FiFileText />
                <span>Publications &amp; Patent</span>
              </a>
              <a href="#contact" className="btn-outline">
                <FiMail />
                <span>Contact</span>
              </a>
            </motion.div>

            {/* Contact Quick Bar */}
            <motion.div className="hero-contacts-bar" variants={itemVariants}>
              <a href={`mailto:${data.personal.email}`} className="hero-contact-item">
                <FiMail style={{ color: "var(--emerald-light)", flexShrink: 0 }} />
                <span>{data.personal.email}</span>
              </a>
              <span className="hero-contact-sep">|</span>
              <a href={`tel:${data.personal.phone}`} className="hero-contact-item">
                <FiPhone style={{ color: "var(--gold-light)", flexShrink: 0 }} />
                <span>{data.personal.phone}</span>
              </a>
              <span className="hero-contact-sep">|</span>
              <span className="hero-contact-item">
                <FiMapPin style={{ color: "var(--cyan-agri)", flexShrink: 0 }} />
                <span>Geeta Univ, Panipat</span>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
