"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const accent = "#a78bfa";

const services = [
  { title: "AI Enablement Strategy for Apps", desc: "Progressive adoption strategy contextualizing organisation maturity — from assessment to full AI-native application architecture." },
  { title: "UI/UX Modernization for AI", desc: "Shift from static to dynamic, adaptive and conversational experiences that users actually want to engage with." },
  { title: "Conversational AI", desc: "Context-aware and intent-driven AI agents with high accuracy for Sales, Servicing, and Operations use cases." },
  { title: "Application Modernization", desc: "Generative AI-powered modernization, upgrades and containerization — migrate legacy apps to modern stack with our App Modernization Agent." },
  { title: "AI-Driven Integration", desc: "Dynamic API mediation, MCP-enabled communication, and AI gateways for seamless enterprise connectivity." },
];

const outcomes = [
  { value: "25%", label: "Faster time to market" },
  { value: "40%", label: "Reduction in legacy run costs" },
  { value: "35%", label: "Growth in user engagement" },
];

const differentiators = [
  { name: "Conversational Agent Suite", desc: "Pre-built agents for Sales, Servicing and Operations — deploy in weeks, not months." },
  { name: "App Modernization Agent", desc: "Migrate legacy applications to modern stack using generative AI — reducing effort by 45%." },
  { name: "VIBE Framework", desc: "AI-ingrained delivery lifecycle for Apps, UX and Integration — from discovery to production." },
];

const tags = ["Microsoft", "Spring", "React", "Python", "Node.js", "AWS", "Google", "Azure", "Mulesoft", "WSO2"];

function CtaButton() {
  const [hov, setHov] = useState(false);
  return (
    <a href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: hov ? "#d4d8ff" : "#ffffff", color: "#080810", fontSize: "0.92rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const, padding: "0.85rem 2rem", borderRadius: "9999px", textDecoration: "none", transform: hov ? "translateY(-1px)" : "translateY(0)", transition: "all 0.25s ease" }}>Start a conversation</a>
  );
}

function CasesButton() {
  const [hov, setHov] = useState(false);
  return (
    <a href="/case-studies" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: hov ? "#fff" : "rgba(255,255,255,0.6)", fontSize: "0.92rem", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" as const, padding: "0.85rem 2rem", borderRadius: "9999px", textDecoration: "none", border: hov ? "0.5px solid rgba(255,255,255,0.5)" : "0.5px solid rgba(255,255,255,0.18)", transform: hov ? "translateY(-1px)" : "translateY(0)", transition: "all 0.25s ease" }}>View case studies &#8594;</a>
  );
}

export default function IntelligentApplicationsPage() {
  return (
    <main style={{ background: "#000000", color: "#ffffff", minHeight: "100vh" }}>
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "9rem 1.5rem 5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: accent, border: `0.5px solid ${accent}40`, padding: "0.38rem 1rem", borderRadius: "9999px", display: "inline-block" }}>Intelligent Applications</span>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "end" }}>
          <div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 400, lineHeight: 1.08, color: "#e8e6f0", marginBottom: "1.75rem" }}>
              Advance AI into<br /><em style={{ color: accent }}>everyday operations</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, fontWeight: 300, marginBottom: "2.5rem" }}>
              We modernize applications and embed AI into the systems your teams use every day — replacing static, legacy interfaces with adaptive, conversational experiences that drive measurable engagement and efficiency.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}>
              <CtaButton />
              <CasesButton />
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }} style={{ display: "flex", flexDirection: "column" as const, gap: "1px", background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", overflow: "hidden" }}>
            {outcomes.map((o, i) => (
              <div key={i} style={{ padding: "1.75rem 2rem", background: "#000", borderBottom: i < outcomes.length - 1 ? "0.5px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2.6rem", fontWeight: 400, color: accent, lineHeight: 1, marginBottom: "0.4rem" }}>{o.value}</div>
                <div style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>{o.label}</div>
              </div>
            ))}
            <div style={{ padding: "1.25rem 2rem", background: `${accent}10`, borderTop: `0.5px solid ${accent}25` }}>
              <div style={{ fontSize: "0.92rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: accent, marginBottom: "0.25rem" }}>VIBE Coding Adoption</div>
              <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}>30% faster AI chatbot builds · 45% savings in modernization</div>
            </div>
          </motion.div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>What we deliver</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, lineHeight: 1.2, color: "#e8e6f0" }}>Services & capabilities</h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", overflow: "hidden" }}>
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
              style={{ padding: "2rem 2.25rem", background: "#000", borderLeft: i % 2 !== 0 ? "0.5px solid rgba(255,255,255,0.07)" : "none", borderTop: i >= 2 ? "0.5px solid rgba(255,255,255,0.07)" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: accent, flexShrink: 0 }} />
                <h3 style={{ fontSize: "0.95rem", fontWeight: 500, color: "#e8e6f0", lineHeight: 1.3 }}>{s.title}</h3>
              </div>
              <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.7, fontWeight: 300, margin: 0 }}>{s.desc}</p>
            </motion.div>
          ))}
          {services.length % 2 !== 0 && <div style={{ background: "#000", borderTop: "0.5px solid rgba(255,255,255,0.07)" }} />}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1.25rem" }}>What makes us different</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, lineHeight: 1.2, color: "#e8e6f0", marginBottom: "1.5rem" }}>Accelerators built from real delivery</h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, fontWeight: 300 }}>Our proprietary tools aren't theoretical — they're built from hundreds of enterprise application modernization and AI enablement projects across industries.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.5rem" }}>
              {differentiators.map((d, i) => (
                <div key={i} style={{ padding: "1.5rem", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: "1rem" }}>
                  <div style={{ fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.08em", color: accent, marginBottom: "0.5rem", textTransform: "uppercase" as const }}>{d.name}</div>
                  <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, fontWeight: 300, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "3.5rem 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" as const }}>
          <p style={{ fontSize: "0.92rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.28)", flexShrink: 0 }}>Tech partners</p>
          {tags.map((tag, i) => (
            <span key={i} style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.1)", padding: "0.3rem 0.85rem", borderRadius: "9999px" }}>{tag}</span>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 1.5rem 8rem", textAlign: "center" as const }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, lineHeight: 1.15, color: "#e8e6f0", marginBottom: "1.25rem" }}>
            Ready to modernize your<br /><em style={{ color: accent }}>application estate?</em>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: "44ch", margin: "0 auto 2.5rem", lineHeight: 1.7, fontWeight: 300 }}>Talk to our application modernization and conversational AI specialists about your goals.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" as const }}>
            <CtaButton />
            <CasesButton />
          </div>
        </motion.div>
      </section>
    </main>
  );
}