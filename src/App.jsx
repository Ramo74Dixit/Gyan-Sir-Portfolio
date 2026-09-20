import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import InstitutionalRoles from "./components/InstitutionalRoles";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  // Lenis smooth scrolling (lazy init)
  useEffect(() => {
    let lenis;
    import("lenis")
      .then(({ default: Lenis }) => {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      })
      .catch(() => {
        // Fallback gracefully
      });
    return () => lenis?.destroy?.();
  }, []);

  return (
    <>
      {/* Background Bio-Particles & Fireflies */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />

        <div className="section-divider" />
        <About />

        <div className="section-divider" />
        <Projects />

        <div className="section-divider" />
        <InstitutionalRoles />

        <div className="section-divider" />
        <Publications />

        <div className="section-divider" />
        <Experience />

        <div className="section-divider" />
        <Education />

        <div className="section-divider" />
        <Skills />

        <div className="section-divider" />
        <Awards />

        <div className="section-divider" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
