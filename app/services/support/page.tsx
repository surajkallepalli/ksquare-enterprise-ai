"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, RefreshCw, Shield, TrendingUp, Clock, ArrowRight } from "lucide-react";

const accent = "#34d399";

const metrics = [
  { value: "24/7", label: "AI platform monitoring" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<1hr", label: "Critical incident response" },
];

const capabilities = [
  { icon: Activity, title: "AI Platform Monitoring", description: "Continuous monitoring of infrastructure performance, model behaviour, and data pipeline health — with automated alerting, anomaly detection, and real-time dashboards for full operational visibility.", tags: ["Infrastructure monitoring", "Model drift detection", "Pipeline health"] },
  { icon: RefreshCw, title: "Model Lifecycle Management", description: "Managed retraining schedules, model version control, performance tracking, and champion-challenger testing — ensuring your AI models stay accurate as data and business conditions evolve.", tags: ["Model retraining", "Version control", "Performance tracking"] },
  { icon: TrendingUp, title: "Performance Optimisation", description: "Continuous optimisation of compute environments, data pipelines, and AI workloads — reducing inference latency, training cost, and infrastructure spend while improving throughput.", tags: ["Latency optimisation", "Cost reduction", "Throughput improvement"] },
  { icon: Shield, title: "AI Governance Operations", description: "Ongoing governance frameworks ensuring transparency, compliance, and responsible AI operations — including bias monitoring, explainability reporting, and regulatory audit support.", tags: ["Bias monitoring", "Explainability", "Audit support"] },
  { icon: Clock, title: "AI Managed Services", description: "A dedicated pod of hyper-specialised full-stack AI engineers powered by in-house R&D — your always-on AI operations team handling everything from model ops to infrastructure management.", tags: ["Dedicated pod", "Full-stack AI", "Always-on support"] },
];

const tiers = [
  { name: "Essential", description: "Core monitoring and incident response for production AI platforms.", includes: ["24/7 infrastructure monitoring", "Incident response (4hr SLA)", "Monthly model performance review", "Quarterly optimisation report"] },
  { name: "Professional", description: "Full lifecycle management with proactive optimisation and governance.", includes: ["Everything in Essential", "Model retraining management", "Weekly performance reviews", "AI governance reporting", "Cost optimisation programme"] },
  { name: "Enterprise", description: "Dedicated managed services pod — your embedded AI operations team.", includes: ["Everything in Professional", "Dedicated AI engineers pod", "Custom SLAs", "In-house R&D access", "Co-innovation programme"] },
];

const outcomes = [
  { label: "Financial Services", result: "99.97% uptime maintained across fraud detection platform processing 2M+ daily transactions — zero production incidents in 18 months." },
  { label: "Manufacturing", result: "Predictive maintenance model retraining cycle reduced from quarterly to weekly — improving defect detection accuracy by 14%." },
  { label: "Healthcare", result: "HIPAA-compliant AI governance reporting automated across 8 hospital networks — reducing compliance overhead by 60%." },
];

function CtaButton() {
  const [hov, setHov] = useState(false);
  return <a href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: hov ? "#fff" : accent, color: "#000", fontSize: "0.85rem", fontWeight: 600, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none", transition: "all 0.25s ease" }}>Start an AI operations programme <ArrowRight size={15} /></a>;
}

function SecondaryButton() {
  const [hov, setHov] = useState(false);
  return <Link href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: hov ? "#fff" : "rgba(255,255,255,0.65)", fontSize: "0.85rem", fontWeight: 400, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none", border: hov ? "0.5px solid rgba(255,255,255,0.5)" : "0.5px solid rgba(255,255,255,0.2)", transition: "all 0.25s ease" }}>Discuss SLAs →</Link>;
}

export default function SupportPage() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "9rem 1.5rem 5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: accent, border: `0.5px solid ${accent}50`, padding: "0.38rem 1rem", borderRadius: "9999px" }}>Support & Operations</span>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "end" }}>
          <div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 400, lineHeight: 1.08, color: "#e8e6f0", marginBottom: "1.75rem" }}>
              Deploying AI is only<br /><em style={{ color: accent }}>the beginning</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.75, fontWeight: 300, marginBottom: "2.5rem" }}>
              Enterprise AI platforms require continuous monitoring, model lifecycle management, and operational expertise to stay performant and compliant as they scale. KSquare provides the operational backbone that keeps your AI systems reliable, accurate, and governed.
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

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>What we operate</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>AI operations capabilities</h2>
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

      {/* ── SERVICE TIERS ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>Service tiers</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>Support that scales with you</h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {tiers.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} style={{ padding: "2.25rem", background: i === 2 ? `${accent}08` : "rgba(255,255,255,0.03)", border: `0.5px solid ${i === 2 ? accent + "30" : "rgba(255,255,255,0.08)"}`, borderRadius: "1rem", position: "relative" as const }}>
              {i === 2 && <div style={{ position: "absolute" as const, top: "1.25rem", right: "1.25rem", fontSize: "0.65rem", letterSpacing: "0.1em", color: accent, background: `${accent}15`, border: `0.5px solid ${accent}30`, padding: "0.2rem 0.6rem", borderRadius: "9999px" }}>Most popular</div>}
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.5rem", fontWeight: 400, color: "#e8e6f0", marginBottom: "0.75rem" }}>{t.name}</div>
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: "1.5rem" }}>{t.description}</p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.6rem" }}>
                {t.includes.map((item, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: accent, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>Client outcomes</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>AI that keeps performing</h2>
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

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem 8rem", textAlign: "center" as const }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, color: "#e8e6f0", marginBottom: "1.25rem", lineHeight: 1.15 }}>Ready to scale AI with confidence?</h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: "44ch", margin: "0 auto 2.5rem", lineHeight: 1.7, fontWeight: 300 }}>Talk to our AI operations team about monitoring, model lifecycle management, and managed services for your platform.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" as const }}>
            <CtaButton />
            <SecondaryButton />
          </div>
        </motion.div>
      </section>

    </main>
  );
}