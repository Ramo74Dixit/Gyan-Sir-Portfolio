import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiGlobe,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";
import { data } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const personalInfo = [
    { icon: <FiMail />, label: "Email", val: data.personal.email, href: `mailto:${data.personal.email}` },
    { icon: <FiPhone />, label: "Phone", val: `${data.personal.phone} / ${data.personal.alternatePhone}`, href: `tel:${data.personal.phone}` },
    { icon: <FiCalendar />, label: "Date of Birth", val: data.personal.dob },
    { icon: <FiGlobe />, label: "Languages", val: data.personal.languages.join(", ") },
    { icon: <FiMapPin />, label: "Current Workplace", val: data.personal.institution },
    { icon: <FiMapPin />, label: "Permanent Address", val: data.personal.hometown },
  ];

  const highlights = [
    {
      icon: "🌾",
      title: "Basmati Rice Pest Complex",
      desc: "Specialized in population dynamics of stem borers, leaf folders, and Brown Plant Hopper in Western UP.",
    },
    {
      icon: "🌿",
      title: "Biopesticides & Botanicals",
      desc: "Formulation and bioassay efficacy of botanical extracts and entomopathogenic microbial controls.",
    },
    {
      icon: "🤖",
      title: "Agri-AI & Precision UAVs",
      desc: "Proposed ₹6 Cr drone-mounted hyperspectral detection & AI crop diagnostic web platforms.",
    },
    {
      icon: "🍄",
      title: "Mushroom Technology",
      desc: "Extensive experience in oyster/button mushroom production, spawn generation, and lab administration.",
    },
  ];

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-grid"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* LEFT: Info Card with Photo & Contact Meta */}
          <motion.div className="glass-card about-card-left" variants={fadeUp} custom={0}>
            <div className="about-bio-photo">
              <img src="/profile.png" alt="Dr. A Gyan Sirohi" />
            </div>

            <h3 style={{ fontSize: "1.8rem", marginBottom: "0.2rem" }}>
              Dr. A Gyan <span className="gradient-text">Sirohi</span>
            </h3>
            <p
              style={{
                color: "var(--emerald-light)",
                fontSize: "0.9rem",
                fontFamily: "var(--font-heading)",
                fontWeight: "600",
                marginBottom: "1.5rem",
              }}
            >
              Assistant Professor – Entomology | Geeta University
            </p>

            <ul className="about-info-list">
              {personalInfo.map((info, idx) => (
                <li key={idx} className="about-info-row">
                  <span className="about-info-label">
                    {info.icon}
                    <span>{info.label}:</span>
                  </span>
                  <span className="about-info-val">
                    {info.href ? (
                      <a href={info.href} style={{ color: "var(--text-primary)" }}>
                        {info.val}
                      </a>
                    ) : (
                      info.val
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "1.8rem" }}>
              <a
                href="#contact"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem" }}
              >
                Send Message / Inquire
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Professional Narrative & Areas of Interest */}
          <div>
            <motion.div variants={fadeUp} custom={1}>
              <div className="section-badge">🌿 Academic Profile</div>
              <h2 className="section-title">
                Pioneering <span>Crop Protection</span>, IPM & Agri-AI
              </h2>
            </motion.div>

            {data.profile.split("\n\n").map((para, i) => (
              <motion.p
                key={i}
                className="section-subtitle"
                style={{ marginBottom: "1.4rem" }}
                variants={fadeUp}
                custom={i + 2}
              >
                {para}
              </motion.p>
            ))}

            {/* Core Domain Highlights */}
            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.2rem",
                margin: "2rem 0",
              }}
              variants={fadeUp}
              custom={4}
            >
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(10, 31, 21, 0.6)",
                    border: "1px solid var(--glass-border)",
                    borderRadius: "var(--border-radius-sm)",
                    padding: "1.2rem",
                  }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{h.icon}</div>
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", marginBottom: "0.3rem" }}>
                    {h.title}
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                    {h.desc}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Areas of Interest */}
            <motion.div variants={fadeUp} custom={5}>
              <h4
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.15rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FiCheckCircle style={{ color: "var(--gold)" }} />
                <span>Areas of Interest & Extension</span>
              </h4>
              <div className="areas-tags">
                {data.personal.areasOfInterest.map((area, idx) => (
                  <span key={idx} className="area-tag">
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
