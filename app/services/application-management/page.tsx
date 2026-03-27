"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Layers, RefreshCw, ShieldCheck, Zap, BarChart2, ArrowRight } from "lucide-react";

const accent = "#fb923c";

const metrics = [
  { value: "45%", label: "Reduction in application run costs" },
  { value: "60%", label: "Faster release cycles" },
  { value: "99.9%", label: "Application availability SLA" },
];

const capabilities = [
  { icon: Layers, title: "Application Portfolio Management", description: "Rationalise and manage your enterprise application estate — assessing utilisation, cost, risk, and modernisation priority across hundreds of applications to drive portfolio-level decisions.", tags: ["Portfolio assessment", "Rationalisation", "TCO analysis"] },
  { icon: RefreshCw, title: "Ongoing Application Maintenance", description: "Proactive maintenance, patching, and enhancement management for enterprise applications — keeping systems current, secure, and aligned with evolving business requirements.", tags: ["Patching", "Enhancement management", "Version control"] },
  { icon: Zap, title: "Performance Optimisation", description: "Continuous monitoring and optimisation of application performance — reducing latency, improving throughput, and resolving bottlenecks before they impact end users or business operations.", tags: ["Performance monitoring", "Latency reduction", "Bottleneck resolution"] },
  { icon: ShieldCheck, title: "Security & Compliance", description: "Ongoing security patching, vulnerability management, and compliance monitoring — ensuring enterprise applications meet regulatory requirements and security standards across their lifecycle.", tags: ["Vulnerability management", "Security patching", "Compliance monitoring"] },
  { icon: BarChart2, title: "AI-Augmented Operations", description: "Leverage AI and automation to enhance application management operations — intelligent incident detection, automated remediation, predictive capacity management, and AI-driven release optimisation.", tags: ["AI-driven ops", "Auto-remediation", "Predictive capacity"] },
];

const phases = [
  { step: "01", title: "Application Discovery", description: "Comprehensive discovery of your application portfolio — inventory, dependencies, usage patterns, and current operational model — establishing the baseline for managed services." },
  { step: "02", title: "Transition & Onboarding", description: "Structured knowledge transfer and operational onboarding — runbooks, monitoring setup, escalation paths, and SLA establishment — with zero disruption to production operations." },
  { step: "03", title: "Steady State Operations", description: "Day-to-day managed operations covering incident management, maintenance, patching, performance monitoring, and enhancement delivery across your application portfolio." },
  { step: "04", title: "Continuous Improvement", description: "Regular optimisation cycles identifying cost reduction, performance improvement, and modernisation opportunities — driving measurable improvement in TCO and user experience over time." },
];

const outcomes = [
  { label: "Global Retailer", result: "Application management across 40+ enterprise applications — 45% reduction in run cost and 60% faster release cycles within 12 months of engagement." },
  { label: "Financial Services", result: "99.97% application availability maintained across core banking and payments applications — zero critical incidents in 24 months of managed operations." },
  { label: "Manufacturing", result: "Legacy ERP and MES application portfolio managed and progressively modernised — reducing technical debt by 35% while maintaining full operational continuity." },
];

function CtaButton() {
  const [hov, setHov] = useState(false);
  return <a href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: hov ? "#fff" : accent, color: "#000", fontSize: "0.85rem", fontWeight: 600, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none", transition: "all 0.25s ease" }}>Start a conversation <ArrowRight size={15} /></a>;
}

function SecondaryButton() {
  const [hov, setHov] = useState(false);
  return <Link href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: hov ? "#fff" : "rgba(255,255,255,0.65)", fontSize: "0.85rem", fontWeight: 400, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none", border: hov ? "0.5px solid rgba(255,255,255,0.5)" : "0.5px solid rgba(255,255,255,0.2)", transition: "all 0.25s ease" }}>Discuss your portfolio →</Link>;
}

export default function ApplicationManagementPage() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "9rem 1.5rem 5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: accent, border: `0.5px solid ${accent}50`, padding: "0.38rem 1rem", borderRadius: "9999px" }}>Application Management</span>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "end" }}>
          <div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 400, lineHeight: 1.08, color: "#e8e6f0", marginBottom: "1.75rem" }}>
              Your applications,<br /><em style={{ color: accent }}>expertly managed</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.75, fontWeight: 300, marginBottom: "2.5rem" }}>
              Enterprise applications require constant attention — maintenance, patching, performance management, and continuous improvement. KSquare provides end-to-end application management services that keep your portfolio running, secure, and evolving — so your teams can focus on what matters.
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
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>What we manage</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>Application management capabilities</h2>
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

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>How we onboard</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>Our engagement model</h2>
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column" as const }}>
          {phases.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "2.5rem", alignItems: "flex-start", padding: "2rem 0", borderBottom: i < phases.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none" }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2rem", fontWeight: 400, color: `${accent}60`, lineHeight: 1 }}>{p.step}</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#e8e6f0", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontWeight: 300 }}>{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>Client outcomes</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>Applications that perform</h2>
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
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, color: "#e8e6f0", marginBottom: "1.25rem", lineHeight: 1.15 }}>Ready to take back control of your application estate?</h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: "44ch", margin: "0 auto 2.5rem", lineHeight: 1.7, fontWeight: 300 }}>Talk to our application management specialists about your portfolio, operational challenges, and service requirements.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" as const }}>
            <CtaButton />
            <SecondaryButton />
          </div>
        </motion.div>
      </section>

    </main>
  );
}