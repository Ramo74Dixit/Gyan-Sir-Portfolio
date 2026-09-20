import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCpu, FiCompass, FiShield, FiTrendingUp, FiCheck } from "react-icons/fi";
import { data } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: i * 0.12 },
  }),
};

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <div className="section-badge">🤖 High-Impact Agri-Tech & AI</div>
          <h2 className="section-title">
            Flagship <span>Research & Development</span> Initiatives
          </h2>
          <p className="section-subtitle">
            Pioneering digital crop protection through autonomous aerial drones, hyperspectral diagnostics,
            and machine-learning computer vision for field-level pest control.
          </p>
        </motion.div>

        <div className="projects-grid">
          {data.projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              className={`project-card ${idx === 0 ? "featured" : ""}`}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={idx + 1}
            >
              <div className="project-header">
                <div>
                  <div className="project-badge-row">
                    <span className={`project-pill ${idx === 0 ? "pill-gold" : "pill-cyan"}`}>
                      {proj.badge}
                    </span>
                    <span className="project-pill" style={{ background: "rgba(16, 185, 129, 0.15)", color: "var(--emerald-light)" }}>
                      {proj.role}
                    </span>
                  </div>
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-subtitle">{proj.subtitle}</p>
                </div>

                {/* Budget Badge */}
                <div className="project-budget-badge">
                  <div className="budget-num">{proj.budget}</div>
                  <div className="budget-sub">{proj.fundingBody}</div>
                </div>
              </div>

              {/* Meta strip */}
              <div className="project-meta-strip">
                <div className="meta-item">
                  <strong>Duration:</strong>
                  <span>{proj.duration}</span>
                </div>
                <div className="meta-item">
                  <strong>Lead Institute:</strong>
                  <span>{proj.leadInstitution}</span>
                </div>
                <div className="meta-item">
                  <strong>Status:</strong>
                  <span style={{ color: "var(--gold-light)" }}>{proj.status}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                {proj.description}
              </p>

              {/* Technologies */}
              <div>
                <strong style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "0.6rem" }}>
                  Core Technologies & Architecture:
                </strong>
                <div className="project-tech-tags">
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact / Key Highlights */}
              <div style={{ marginTop: "1.8rem" }}>
                <strong style={{ fontSize: "0.85rem", color: "var(--emerald-light)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "0.8rem" }}>
                  Expected Deliverables & Field Impact:
                </strong>
                <div className="impact-list">
                  {proj.impact.map((imp, impIdx) => (
                    <div key={impIdx} className="impact-item">
                      <FiCheck className="impact-bullet" />
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
