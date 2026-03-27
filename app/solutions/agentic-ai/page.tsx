"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const accent = "#f472b6";

const services = [
  { title: "Automation Strategy", desc: "Current state assessment and outcome-led automation strategy — identifying the highest-value processes for agentic AI." },
  { title: "AI Operationalization", desc: "From AI pilots to AI Center of Excellence — a fully operationalized AI setup with the governance to scale." },
  { title: "Process Intelligence", desc: "Transform processes to autonomous while assuring trust through controls — blending Gen AI with AI/ML for optimal accuracy." },
  { title: "Document AI", desc: "Document digitalization and end-to-end intelligent document processing powered by KODI — our proprietary Document AI framework." },
  { title: "AI Operations", desc: "LLM, AI/ML, and agent lifecycle operations from setup to maintenance — continuous monitoring and optimization." },
  { title: "AI Managed Services", desc: "A POD of hyper-specialized full stack AI specialists powered by in-house R&D — your always-on AI operations team." },
];

const outcomes = [
  { value: "65%", label: "Cycle time reduction" },
  { value: "95%", label: "Accuracy improvement" },
  { value: "45%", label: "Cost efficiency gain" },
];

const differentiators = [
  { name: "KODI", desc: "Document AI and Analytics Framework — end-to-end intelligent document processing with high accuracy." },
  { name: "Pre-built Agents", desc: "Pre-built RAG and Workflow Agents that deploy in days — not months — accelerating time to value." },
  { name: "VIBE Framework", desc: "AI-Ingrained AIDLC — the delivery backbone that keeps agentic AI fast, governed, and production-ready." },
];

const tags = ["Google", "Vertex AI", "LangChain", "OpenAI", "NVIDIA", "AWS Bedrock", "Azure", "Anthropic"];

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

export default function AgenticAIPage() {
  return (
    <main style={{ background: "#000000", color: "#ffffff", minHeight: "100vh" }}>
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "9rem 1.5rem 5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: accent, border: `0.5px solid ${accent}40`, padding: "0.38rem 1rem", borderRadius: "9999px", display: "inline-block" }}>Agentic AI & Automation</span>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "end" }}>
          <div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 400, lineHeight: 1.08, color: "#e8e6f0", marginBottom: "1.75rem" }}>
              A hybrid strategy for<br /><em style={{ color: accent }}>optimal AI accuracy</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, fontWeight: 300, marginBottom: "2.5rem" }}>
              We blend Gen AI with AI/ML to build agentic systems that don't just automate tasks — they reason, decide, and act autonomously while staying within the guardrails your enterprise requires.
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
              <div style={{ fontSize: "0.92rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: accent, marginBottom: "0.25rem" }}>Co-Innovation through R&D</div>
              <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}>In-house R&D powering AI Managed Services</div>
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
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1.25rem" }}>What makes us different</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, lineHeight: 1.2, color: "#e8e6f0", marginBottom: "1.5rem" }}>From pilots to production — at scale</h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, fontWeight: 300 }}>Most agentic AI projects stall at the pilot stage. Our VIBE framework and pre-built agents are designed specifically to bridge the gap between promising proof-of-concept and full enterprise operationalization.</p>
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
            Ready to operationalize<br /><em style={{ color: accent }}>AI across your enterprise?</em>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: "44ch", margin: "0 auto 2.5rem", lineHeight: 1.7, fontWeight: 300 }}>Talk to our agentic AI and automation specialists about your transformation roadmap.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" as const }}>
            <CtaButton />
            <CasesButton />
          </div>
        </motion.div>
      </section>
    </main>
  );
}