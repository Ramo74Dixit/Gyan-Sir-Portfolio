import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { data } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function InstitutionalRoles() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="section" id="roles" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <div className="section-badge">🏛️ Academic Leadership</div>
          <h2 className="section-title">
            Institutional <span>Responsibilities</span> & Portfolios
          </h2>
          <p className="section-subtitle">
            Entrusted with vital statutory and administrative portfolios at Geeta University,
            fostering industry ties, student welfare, quality accreditation, and laboratory infrastructure.
          </p>
        </motion.div>

        <motion.div
          className="roles-grid"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {data.institutionalRoles.map((role, idx) => (
            <motion.div
              key={idx}
              className="role-card"
              variants={fadeUp}
              custom={idx + 1}
            >
              <div className="role-icon-box">{role.icon}</div>
              <span className="role-badge">{role.badge}</span>
              <h3 className="role-title">{role.title}</h3>
              <div className="role-dept">{role.dept}</div>
              <p className="role-desc">{role.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
