import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCpu, FiCheckCircle, FiTool, FiAward } from "react-icons/fi";
import { data } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <div className="section-badge">⚡ Scientific & Technical Mastery</div>
          <h2 className="section-title">
            Core Competencies & <span>Domain Expertise</span>
          </h2>
          <p className="section-subtitle">
            A potent convergence of classical field entomology, applied biological control,
            smart sensors/AI modeling, and academic administration.
          </p>
        </motion.div>

        <div className="skills-grid">
          {/* LEFT: Core Competencies Progress Bars */}
          <motion.div
            className="glass-card"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={1}
          >
            <h3 style={{ fontSize: "1.6rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <FiTool style={{ color: "var(--emerald)" }} />
              <span>Proficiency Metrics</span>
            </h3>

            {data.skills.coreCompetencies.map((comp, idx) => (
              <div key={idx} className="skill-bar-row">
                <div className="skill-bar-header">
                  <span className="skill-bar-name">{comp.name}</span>
                  <span className="skill-bar-pct">{comp.level}%</span>
                </div>
                <div className="skill-progress-track">
                  <div
                    className="skill-progress-fill"
                    style={{ width: inView ? `${comp.level}%` : "0%" }}
                  />
                </div>
              </div>
            ))}

            {/* NIELIT CCC Computer Course Badge */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1.2rem",
                background: "rgba(6, 182, 212, 0.08)",
                border: "1px solid rgba(6, 182, 212, 0.25)",
                borderRadius: "var(--border-radius-sm)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div style={{ fontSize: "2rem" }}>💻</div>
              <div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", color: "var(--cyan-agri)" }}>
                  {data.computerCourse.title}
                </h4>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                  {data.computerCourse.authority} · {data.computerCourse.completionDate} ({data.computerCourse.status})
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Technical Domains & Lab Equipment */}
          <div>
            <motion.div
              className="domains-grid"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={2}
            >
              {data.skills.technicalDomains.map((dom, idx) => (
                <div key={idx} className="domain-card">
                  <h4>
                    <span>{dom.icon}</span>
                    <span>{dom.title}</span>
                  </h4>
                  <ul>
                    {dom.skills.map((s, sIdx) => (
                      <li key={sIdx}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Lab Equipment */}
            <motion.div
              className="glass-card"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={3}
              style={{ marginTop: "1.5rem" }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.2rem",
                  color: "var(--gold-light)",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <span>🔬</span>
                <span>Instrumentation & Laboratory Facilities</span>
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "1.2rem" }}>
                Experienced in operating precision entomological, microbiological, and analytical apparatus:
              </p>
              <div className="equip-tags">
                {data.skills.laboratoryEquipment.map((eq, idx) => (
                  <span key={idx} className="equip-tag">
                    <FiCheckCircle style={{ color: "var(--emerald-light)" }} />
                    <span>{eq}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
