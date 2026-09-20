import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiFileText,
  FiBook,
  FiAward,
  FiSearch,
  FiExternalLink,
  FiCheckCircle,
  FiCpu,
} from "react-icons/fi";
import { data } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function Publications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = data.publications.filter((item) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "papers" && item.type === "paper") ||
      (activeTab === "books" && item.type === "book") ||
      (activeTab === "patents" && item.type === "patent");

    const textToMatch = `${item.title} ${item.tags.join(" ")} ${item.desc || ""} ${item.category}`.toLowerCase();
    const matchesSearch = textToMatch.includes(searchQuery.toLowerCase().trim());

    return matchesTab && matchesSearch;
  });

  const getCodeClass = (code) => {
    if (code.startsWith("R")) return "code-r";
    if (code.startsWith("B")) return "code-b";
    return "code-p";
  };

  return (
    <section className="section" id="publications" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <div className="section-badge">📄 Scholarly Output</div>
          <h2 className="section-title">
            Publications & <span>Patent Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Original investigations into the insect-pest complex of aromatic basmati rice,
            efficacy of biopesticides, predictive seasonal modeling, authored book chapters, and a patented BPH monitoring system.
          </p>
        </motion.div>

        {/* Tab Controls & Search Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.2rem", marginBottom: "2.5rem" }}>
          <div className="pub-tabs" style={{ marginBottom: 0 }}>
            <button
              className={`pub-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              <span>All Works</span>
              <span className="pub-count">{data.publications.length}</span>
            </button>
            <button
              className={`pub-tab ${activeTab === "papers" ? "active" : ""}`}
              onClick={() => setActiveTab("papers")}
            >
              <FiFileText />
              <span>Research Papers</span>
              <span className="pub-count">3</span>
            </button>
            <button
              className={`pub-tab ${activeTab === "books" ? "active" : ""}`}
              onClick={() => setActiveTab("books")}
            >
              <FiBook />
              <span>Book Chapters</span>
              <span className="pub-count">5</span>
            </button>
            <button
              className={`pub-tab ${activeTab === "patents" ? "active" : ""}`}
              onClick={() => setActiveTab("patents")}
            >
              <FiAward />
              <span>Patent</span>
              <span className="pub-count">1</span>
            </button>
          </div>

          {/* Search */}
          <div style={{ position: "relative", minWidth: "260px" }}>
            <FiSearch style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Search by topic, crop, pest..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
              style={{ paddingLeft: "2.6rem", paddingRight: "1rem", borderRadius: "50px", fontSize: "0.88rem" }}
            />
          </div>
        </div>

        {/* Publication Cards */}
        <div className="pub-list">
          {filteredItems.map((pub, idx) => (
            <motion.div
              key={pub.id}
              className="pub-card"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={idx + 1}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.8rem" }}>
                <span className={`pub-code-badge ${getCodeClass(pub.code)}`}>
                  {pub.code} · {pub.category}
                </span>
                <span style={{ fontSize: "0.85rem", color: "var(--gold-light)", fontFamily: "var(--font-accent)", fontWeight: "600" }}>
                  {pub.year}
                </span>
              </div>

              <h3 className="pub-item-title">{pub.title}</h3>

              <div className="pub-meta">
                <span>
                  <strong style={{ color: "var(--text-secondary)" }}>Authors:</strong> {pub.authors}
                </span>
                {pub.journal && (
                  <span>
                    <strong style={{ color: "var(--emerald-light)" }}>Journal:</strong> {pub.journal}
                  </span>
                )}
                {pub.publisher && (
                  <span>
                    <strong style={{ color: "var(--cyan-agri)" }}>Publisher:</strong> {pub.publisher}
                  </span>
                )}
                {pub.org && (
                  <span>
                    <strong style={{ color: "var(--gold-light)" }}>Issuing Authority:</strong> {pub.org}
                  </span>
                )}
              </div>

              {pub.desc && <p className="pub-desc">{pub.desc}</p>}

              <div className="pub-tags">
                {pub.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="pub-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {filteredItems.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)" }}>
              <p style={{ fontSize: "1.2rem" }}>No publications found matching "{searchQuery}".</p>
            </div>
          )}
        </div>

        {/* Patent Spotlight Banner */}
        {(activeTab === "all" || activeTab === "patents") && (
          <motion.div
            className="patent-spotlight"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={6}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
              <span className="project-pill pill-gold">Patented Technology</span>
              <span style={{ fontSize: "0.82rem", color: "var(--emerald-light)", fontFamily: "var(--font-accent)" }}>
                {data.patentData.code}
              </span>
            </div>

            <h3 style={{ fontSize: "1.9rem", color: "var(--text-primary)", marginBottom: "0.8rem" }}>
              {data.patentData.title}
            </h3>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              {data.patentData.summary}
            </p>

            <div className="patent-features-grid">
              {data.patentData.features.map((feat, fIdx) => (
                <div key={fIdx} className="patent-feat-card">
                  <FiCheckCircle style={{ color: "var(--gold-light)", flexShrink: 0, marginTop: "3px" }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
