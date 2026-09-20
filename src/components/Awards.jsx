import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { data } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function Awards() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredAwards = data.awards.filter((a) => {
    if (activeFilter === "all") return true;
    return a.type === activeFilter;
  });

  return (
    <section className="section" id="awards" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <div className="section-badge">🏆 Honors & Distinctions</div>
          <h2 className="section-title">
            Awards, Sports & <span>Certificates</span>
          </h2>
          <p className="section-subtitle">
            Celebrating excellence across academic research presentations, national sports championships,
            distinguished FDP certifications, and professional training workshops.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="awards-filter-tabs">
          <button
            className={`pub-tab ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Accolades ({data.awards.length})
          </button>
          <button
            className={`pub-tab ${activeFilter === "academic" ? "active" : ""}`}
            onClick={() => setActiveFilter("academic")}
          >
            Academic Awards (2)
          </button>
          <button
            className={`pub-tab ${activeFilter === "sports" ? "active" : ""}`}
            onClick={() => setActiveFilter("sports")}
          >
            Sports Championships (3)
          </button>
        </div>

        {/* Awards Cards Grid */}
        <div className="awards-grid">
          {filteredAwards.map((award, idx) => (
            <motion.div
              key={idx}
              className="award-card"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={idx + 1}
            >
              <div className="award-top">
                <div className="award-icon-circle">{award.icon}</div>
                <span className="award-badge">{award.badge}</span>
              </div>

              <h3 className="award-title">{award.title}</h3>
              <div className="award-event">{award.event}</div>

              <div className="award-venue">
                <span>📍 {award.venue}</span>
                <span style={{ marginLeft: "0.8rem", color: "var(--gold-light)", fontFamily: "var(--font-accent)" }}>
                  🗓️ {award.dates}
                </span>
              </div>

              <p className="award-desc">{award.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FDP Grade A+ Feature Banner */}
        <motion.div
          className="fdp-card"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={4}
        >
          <div className="fdp-info-col">
            <span className="project-pill pill-gold" style={{ marginBottom: "0.8rem", display: "inline-block" }}>
              Faculty Development Milestone
            </span>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
              {data.fdp.title}
            </h3>
            <p style={{ color: "var(--emerald-light)", fontSize: "0.95rem", marginBottom: "0.8rem" }}>
              {data.fdp.organizer}
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.7" }}>
              {data.fdp.description}
            </p>
            <div style={{ marginTop: "0.8rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>
              📅 Completed: {data.fdp.dates}
            </div>
          </div>

          <div className="fdp-grade-box">
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.9 }}>
              Awarded Grade
            </div>
            <div>{data.fdp.grade}</div>
          </div>
        </motion.div>

        {/* Workshops & Symposia Section */}
        <div style={{ marginTop: "4.5rem" }}>
          <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
            Workshops, Symposia & <span className="gradient-text">Certificates</span>
          </h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.8rem" }}>
            Continuous professional learning across cutting-edge AI in agriculture, IPR, climate resilience, and food processing:
          </p>

          <div className="workshops-list">
            {data.workshops.map((w, idx) => (
              <div key={idx} className="workshop-item">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.3rem" }}>
                    <span className="workshop-date">{w.date}</span>
                    <span className="project-pill" style={{ background: "rgba(16, 185, 129, 0.12)", color: "var(--emerald-light)", fontSize: "0.7rem", padding: "0.2rem 0.6rem" }}>
                      {w.badge}
                    </span>
                  </div>
                  <h4 className="workshop-title">{w.title}</h4>
                </div>
                <div className="workshop-org">{w.organizer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sports Participations */}
        <div style={{ marginTop: "3.5rem" }}>
          <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", color: "var(--gold-light)", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span>🏃‍♂️</span>
            <span>Sports Participation & Inter-University Representation</span>
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {data.sportsParticipation.map((sp, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(10, 31, 21, 0.5)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "var(--border-radius-sm)",
                  padding: "1rem 1.3rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.8rem",
                }}
              >
                <div style={{ fontSize: "1.4rem", marginTop: "2px" }}>{sp.icon}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: "600", color: "var(--text-primary)" }}>
                    {sp.title}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--emerald-light)" }}>{sp.venue}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                    {sp.date} · {sp.scope}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
