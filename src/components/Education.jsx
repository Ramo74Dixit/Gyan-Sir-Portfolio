import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBookOpen, FiMapPin, FiAward } from "react-icons/fi";
import { data } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="section" id="education" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <div className="section-badge">🎓 Academic Foundation</div>
          <h2 className="section-title">
            Education & <span>Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Strong academic credentials in Agricultural Entomology from premier agricultural universities,
            consistently maintaining top academic standing.
          </p>
        </motion.div>

        <div className="timeline">
          {data.education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={idx + 1}
            >
              <div className="timeline-node" />

              <span className="timeline-period">{edu.period}</span>

              <h3 className="timeline-title">{edu.degree}</h3>
              <div className="timeline-inst">{edu.institution}</div>

              <div className="timeline-meta">
                <span className="timeline-badge-score">{edu.grade}</span>
                <span style={{ color: "var(--gold-light)", fontWeight: "500" }}>{edu.status}</span>
                <span>•</span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <FiMapPin /> {edu.location}
                </span>
              </div>

              {edu.highlight && (
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontStyle: "italic" }}>
                  Key focus: {edu.highlight}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
