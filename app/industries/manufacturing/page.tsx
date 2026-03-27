"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Factory, Cpu, BarChart2, ShieldCheck, Layers, ArrowRight } from "lucide-react";

const accent = "#fb923c";

const metrics = [
  { value: "22%", label: "Reduction in operational costs" },
  { value: "40%", label: "Less unplanned downtime" },
  { value: "3×", label: "Faster defect detection" },
];

const capabilities = [
  { icon: Cpu, title: "Predictive Maintenance", description: "ML models analyze equipment telemetry and sensor streams to predict failures before they occur — reducing unplanned downtime and extending asset life.", tags: ["Sensor analytics", "Anomaly detection", "Asset health scoring"] },
  { icon: BarChart2, title: "Supply Chain Intelligence", description: "AI-driven forecasting and logistics optimization platforms improve inventory management, demand sensing, and supplier risk across complex global supply chains.", tags: ["Demand forecasting", "Inventory optimization", "Supplier risk AI"] },
  { icon: ShieldCheck, title: "Quality AI & Inspection", description: "Computer vision systems deployed on production lines detect defects and anomalies with greater accuracy and speed than manual inspection — at scale.", tags: ["Computer vision", "Defect detection", "SPC analytics"] },
  { icon: Factory, title: "Production Optimization", description: "AI-driven operational intelligence platforms optimize production planning, scheduling, and resource allocation across facilities in real time.", tags: ["Production scheduling", "OEE optimization", "Digital twin"] },
  { icon: Layers, title: "IIoT Data Platforms", description: "Unified industrial data platforms that connect OT and IT systems — turning siloed machine data into actionable operational intelligence across the enterprise.", tags: ["OT/IT integration", "Edge computing", "Data lakehouse"] },
];

const useCases = [
  { industry: "Automotive", outcome: "40% reduction in line stoppage", description: "Deployed predictive maintenance across 14 assembly plants, reducing unplanned downtime by 40% and saving $18M annually in production losses." },
  { industry: "Industrial Equipment", outcome: "3× faster quality throughput", description: "Computer vision quality inspection system processing 100% of units at line speed — replacing manual sampling that caught only 60% of defects." },
  { industry: "Consumer Goods", outcome: "22% inventory cost reduction", description: "AI-driven demand forecasting platform across 8 distribution centers, reducing overstock by 22% and improving on-shelf availability." },
];

function CtaButton() {
  const [hov, setHov] = useState(false);
  return <a href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: hov ? "#fff" : accent, color: "#000", fontSize: "0.85rem", fontWeight: 600, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none", transition: "all 0.25s ease" }}>Start a conversation <ArrowRight size={15} /></a>;
}

function SecondaryButton() {
  const [hov, setHov] = useState(false);
  return <Link href="/case-studies" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: hov ? "#fff" : "rgba(255,255,255,0.65)", fontSize: "0.85rem", fontWeight: 400, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none", border: hov ? "0.5px solid rgba(255,255,255,0.5)" : "0.5px solid rgba(255,255,255,0.2)", transition: "all 0.25s ease" }}>See case studies →</Link>;
}

export default function ManufacturingPage() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "9rem 1.5rem 5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: accent, border: `0.5px solid ${accent}50`, padding: "0.38rem 1rem", borderRadius: "9999px" }}>Manufacturing</span>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "end" }}>
          <div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 400, lineHeight: 1.08, color: "#e8e6f0", marginBottom: "1.75rem" }}>
              AI that powers the<br /><em style={{ color: accent }}>intelligent factory</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.75, fontWeight: 300, marginBottom: "2.5rem" }}>
              Manufacturing leaders are deploying AI to predict failures, optimize production, and build resilient supply chains. KSquare helps you move from reactive operations to intelligent, data-driven manufacturing at enterprise scale.
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
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>What we deploy</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>Manufacturing AI capabilities</h2>
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
                  {c.tags.map((t, j) => (
                    <span key={j} style={{ fontSize: "0.72rem", padding: "0.22rem 0.65rem", borderRadius: "9999px", background: `${accent}10`, border: `0.5px solid ${accent}25`, color: accent }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── USE CASES ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>Proven results</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>Manufacturing transformations</h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {useCases.map((u, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} style={{ padding: "2.25rem", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: "1rem" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>{u.industry}</div>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.6rem", fontWeight: 400, color: accent, marginBottom: "0.75rem", lineHeight: 1.2 }}>{u.outcome}</div>
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{u.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── CTA ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem 8rem", textAlign: "center" as const }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, color: "#e8e6f0", marginBottom: "1.25rem", lineHeight: 1.15 }}>Ready to build the intelligent factory?</h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: "44ch", margin: "0 auto 2.5rem", lineHeight: 1.7, fontWeight: 300 }}>Talk to our manufacturing AI specialists about your specific operational challenges and transformation goals.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" as const }}>
            <CtaButton />
            <SecondaryButton />
          </div>
        </motion.div>
      </section>

    </main>
  );
}