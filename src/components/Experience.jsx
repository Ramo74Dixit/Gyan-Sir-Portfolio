import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { data } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <div className="section-badge">💼 Professional Journey</div>
          <h2 className="section-title">
            Academic & <span>Field Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on expertise spanning undergraduate classroom teaching, curriculum design,
            experiential agribusiness mushroom units, and grassroots rural extension.
          </p>
        </motion.div>

        <div className="timeline">
          {data.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={idx + 1}
            >
              <div className="timeline-node" />

              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.4rem" }}>
                <span className="timeline-period">{exp.period}</span>
                {exp.current && (
                  <span
                    style={{
                      background: "rgba(16, 185, 129, 0.2)",
                      color: "var(--emerald-light)",
                      border: "1px solid var(--emerald)",
                      fontSize: "0.72rem",
                      fontWeight: "700",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "50px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Current Designation
                  </span>
                )}
              </div>

              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-inst">
                {exp.org} — <span style={{ color: "var(--text-muted)" }}>{exp.location}</span>
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1rem" }}>
                {exp.desc}
              </p>

              {exp.responsibilities && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <FiCheckCircle style={{ color: "var(--emerald-light)", flexShrink: 0, marginTop: "4px" }} />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
