import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiCopy,
  FiDownload,
} from "react-icons/fi";
import { data } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <div className="section-badge">📬 Academic Inquiries</div>
          <h2 className="section-title">
            Get in <span>Touch</span>
          </h2>
          <p className="section-subtitle">
            Open for faculty positions, joint research consortia, DBT/ICAR grants, guest lectures,
            and agricultural student mentorship.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* LEFT: Direct Communication Channels */}
          <motion.div
            className="glass-card contact-info-card"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={1}
          >
            <div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
                Dr. A Gyan <span className="gradient-text">Sirohi</span>
              </h3>
              <p style={{ color: "var(--emerald-light)", fontSize: "0.9rem", fontFamily: "var(--font-heading)" }}>
                Assistant Professor – Entomology · Crop Protection · Agri-AI
              </p>
            </div>

            {/* Email */}
            <div className="contact-channel">
              <div className="channel-icon">
                <FiMail />
              </div>
              <div style={{ flex: 1 }}>
                <div className="channel-label">Official Email</div>
                <div className="channel-val">
                  <a href={`mailto:${data.personal.email}`}>{data.personal.email}</a>
                </div>
                <button
                  onClick={() => handleCopy(data.personal.email, "email")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--emerald-light)",
                    cursor: "pointer",
                    fontSize: "0.78rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    marginTop: "0.3rem",
                  }}
                >
                  {copiedEmail ? <FiCheck /> : <FiCopy />}
                  <span>{copiedEmail ? "Copied to clipboard!" : "Copy email address"}</span>
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-channel">
              <div className="channel-icon">
                <FiPhone />
              </div>
              <div style={{ flex: 1 }}>
                <div className="channel-label">Direct Phone Numbers</div>
                <div className="channel-val">
                  <a href={`tel:${data.personal.phone}`}>{data.personal.phone}</a>
                  <span style={{ margin: "0 0.5rem", color: "var(--text-muted)" }}>|</span>
                  <a href={`tel:${data.personal.alternatePhone}`}>{data.personal.alternatePhone}</a>
                </div>
                <button
                  onClick={() => handleCopy(data.personal.phone, "phone")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--gold-light)",
                    cursor: "pointer",
                    fontSize: "0.78rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    marginTop: "0.3rem",
                  }}
                >
                  {copiedPhone ? <FiCheck /> : <FiCopy />}
                  <span>{copiedPhone ? "Copied!" : "Copy primary phone"}</span>
                </button>
              </div>
            </div>

            {/* Workplace Location */}
            <div className="contact-channel">
              <div className="channel-icon">
                <FiMapPin />
              </div>
              <div>
                <div className="channel-label">Academic Institution</div>
                <div className="channel-val" style={{ fontSize: "0.95rem" }}>
                  School of Agriculture, Geeta University, Naultha, Panipat, Haryana, India
                </div>
              </div>
            </div>

            {/* Permanent Address */}
            <div className="contact-channel">
              <div className="channel-icon" style={{ borderColor: "rgba(245, 158, 11, 0.3)", color: "var(--gold-light)" }}>
                <FiMapPin />
              </div>
              <div>
                <div className="channel-label">Permanent Native Address</div>
                <div className="channel-val" style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  {data.personal.hometown}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Quick Inquiry Message Form */}
          <motion.div
            className="glass-card"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={2}
          >
            <h3 style={{ fontSize: "1.6rem", marginBottom: "1.5rem" }}>
              Send a Direct <span className="gradient-text">Message</span>
            </h3>

            {submitted ? (
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid var(--emerald)",
                  padding: "2rem",
                  borderRadius: "var(--border-radius-sm)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>✅</div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", color: "var(--emerald-light)", marginBottom: "0.5rem" }}>
                  Message Prepared!
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Thank you! Opening your preferred email client or redirecting to Dr. Gyan Sirohi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Full Name / Organization</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma / ICAR / Agritech Ltd."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. rajesh@university.ac.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject / Purpose</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Research Collaboration, Faculty Inquiry, Seminar Invitation"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    placeholder="Provide details about your query or research discussion..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-control"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}
                >
                  <FiSend />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Formal Academic Declaration */}
        <motion.div
          className="declaration-card"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={3}
        >
          <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>📜</div>
          <p className="declaration-text">"{data.declaration.statement}"</p>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: "700", color: "var(--gold-light)", fontSize: "1.1rem" }}>
            ({data.declaration.signatory})
          </div>
          <div style={{ color: "var(--emerald-light)", fontSize: "0.85rem" }}>
            {data.declaration.designation}
          </div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.4rem" }}>
            Place: {data.declaration.place} | Date: {data.declaration.date}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
