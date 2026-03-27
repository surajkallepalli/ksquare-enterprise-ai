"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Lightbulb, Map, Target, Users, ShieldCheck, ArrowRight } from "lucide-react";

const accent = "#4ca8ff";

const metrics = [
  { value: "50+", label: "AI transformations delivered" },
  { value: "10+", label: "Years of enterprise AI advisory" },
  { value: "5", label: "Countries, global delivery" },
];

const capabilities = [
  { icon: Target, title: "AI Readiness Assessment", description: "A structured assessment of your enterprise data ecosystems, technology infrastructure, and AI maturity — identifying the highest-value opportunities and the gaps that need closing before scaling.", tags: ["Data maturity", "Infrastructure audit", "Opportunity mapping"] },
  { icon: Map, title: "AI Strategy & Roadmap", description: "We design AI transformation roadmaps aligned with your enterprise priorities, operational realities, and measurable business outcomes — not just technology for technology's sake.", tags: ["Strategic roadmap", "Use case prioritisation", "ROI modelling"] },
  { icon: Lightbulb, title: "Platform Architecture", description: "Architecture design for scalable AI platforms — integrating data pipelines, ML systems, and enterprise infrastructure into a coherent, production-ready technical blueprint.", tags: ["Reference architecture", "Data platform design", "AI infrastructure"] },
  { icon: Users, title: "AI Operating Model", description: "Design the governance structures, team models, and operational processes required to run AI at enterprise scale — from AI Centre of Excellence setup to federated delivery models.", tags: ["AI CoE", "Governance design", "Team structuring"] },
  { icon: ShieldCheck, title: "AI Governance & Risk", description: "Embed responsible AI principles into your transformation from day one — defining governance frameworks, bias controls, explainability requirements, and regulatory compliance checkpoints.", tags: ["AI governance", "Risk framework", "Responsible AI"] },
];

const approach = [
  { step: "01", title: "Discovery", description: "Assess your enterprise data ecosystem, technology landscape, and AI opportunities across business functions — current state, not aspirational state." },
  { step: "02", title: "Strategy", description: "Design an AI transformation roadmap that maps to your enterprise priorities and measurable outcomes — sequenced realistically against your constraints." },
  { step: "03", title: "Architecture", description: "Architect the scalable AI platform — data pipelines, ML infrastructure, and application layers — that your roadmap requires to succeed in production." },
  { step: "04", title: "Execution", description: "Stand alongside your team through delivery — hands-on advisory through implementation, go-live, and the first iteration of production operations." },
];

const outcomes = [
  { label: "Financial Services", result: "AI strategy that secured board approval and $24M transformation budget — delivered in 6 weeks." },
  { label: "Global Manufacturer", result: "AI readiness assessment across 14 plants that identified $18M in priority use cases with clear implementation sequence." },
  { label: "Healthcare System", result: "AI governance framework and operating model enabling compliant, HIPAA-aligned AI deployment across 8 hospital networks." },
];

function CtaButton() {
  const [hov, setHov] = useState(false);
  return <a href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: hov ? "#d4d8ff" : "#ffffff", color: "#080810", fontSize: "0.85rem", fontWeight: 600, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none", transition: "all 0.25s ease" }}>Schedule a conversation <ArrowRight size={15} /></a>;
}

function SecondaryButton() {
  const [hov, setHov] = useState(false);
  return <Link href="/case-studies" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: hov ? "#fff" : "rgba(255,255,255,0.65)", fontSize: "0.85rem", fontWeight: 400, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none", border: hov ? "0.5px solid rgba(255,255,255,0.5)" : "0.5px solid rgba(255,255,255,0.2)", transition: "all 0.25s ease" }}>See our work →</Link>;
}

export default function ConsultingPage() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "9rem 1.5rem 5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: accent, border: `0.5px solid ${accent}50`, padding: "0.38rem 1rem", borderRadius: "9999px" }}>Consulting</span>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "end" }}>
          <div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 400, lineHeight: 1.08, color: "#e8e6f0", marginBottom: "1.75rem" }}>
              Turning AI ambition into<br /><em style={{ color: accent }}>enterprise capability</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.75, fontWeight: 300, marginBottom: "2.5rem" }}>
              Most enterprises know AI is important. Few have a clear path from ambition to production. KSquare partners with enterprise leaders to design AI strategies, architect intelligent platforms, and build the operational foundations required to deploy AI at scale.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}>
              <CtaButton />
              <SecondaryButton />
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1px", background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", overflow: "hidden" }}>
              {metrics.map((m, i) => (
                <div key={i} style={{ padding: "2rem 2.5rem", background: "#000" }}>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "3rem", fontWeight: 400, color: accent, lineHeight: 1, marginBottom: "0.4rem" }}>{m.value}</div>
                  <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.55)" }}>{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── CAPABILITIES ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>What we deliver</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>Consulting capabilities</h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", overflow: "hidden" }}>
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.6 }} style={{ padding: "2.5rem", background: "#000", borderLeft: i % 3 !== 0 ? "0.5px solid rgba(255,255,255,0.07)" : "none", borderTop: i >= 3 ? "0.5px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ width: 40, height: 40, borderRadius: "0.75rem", background: `${accent}15`, border: `0.5px solid ${accent}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <Icon size={18} color={accent} />
                </div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.2rem", fontWeight: 400, color: "#e8e6f0", marginBottom: "0.75rem" }}>{c.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{c.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.4rem" }}>
                  {c.tags.map((t, j) => <span key={j} style={{ fontSize: "0.72rem", padding: "0.22rem 0.65rem", borderRadius: "9999px", background: `${accent}10`, border: `0.5px solid ${accent}25`, color: accent }}>{t}</span>)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── APPROACH ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>How we work</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>Our consulting approach</h2>
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column" as const }}>
          {approach.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "2.5rem", alignItems: "flex-start", padding: "2rem 0", borderBottom: i < approach.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none" }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2rem", fontWeight: 400, color: `${accent}60`, lineHeight: 1 }}>{a.step}</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#e8e6f0", marginBottom: "0.5rem" }}>{a.title}</h3>
                <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontWeight: 300 }}>{a.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── OUTCOMES ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>Client outcomes</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>Strategy that gets implemented</h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {outcomes.map((o, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} style={{ padding: "2.25rem", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: "1rem" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>{o.label}</div>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontWeight: 300, fontStyle: "italic" }}>"{o.result}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── CTA ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem 8rem", textAlign: "center" as const }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, color: "#e8e6f0", marginBottom: "1.25rem", lineHeight: 1.15 }}>Ready to define your AI strategy?</h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: "44ch", margin: "0 auto 2.5rem", lineHeight: 1.7, fontWeight: 300 }}>Talk to our AI strategy and consulting specialists about your transformation goals and where to start.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" as const }}>
            <CtaButton />
            <SecondaryButton />
          </div>
        </motion.div>
      </section>

    </main>
  );
}