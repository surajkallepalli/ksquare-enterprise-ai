"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ── Data from deck ────────────────────────────────────────────────────────────

const practices = ["All", "Salesforce & Agentforce", "Intelligent Applications", "Quality & AI Assurance", "Agentic AI & Automation", "Data & Analytics"];

const caseStudies = [
  {
    id: 1,
    practice: "Salesforce & Agentforce",
    practiceShort: "Salesforce",
    industry: "Financial Services",
    title: "2× Faster Lead-to-Revenue Cycle for a Regional Bank",
    summary: "Deployed Agentforce and Data Cloud to unify fragmented CRM data, automate loan origination workflows, and deliver AI-personalized client journeys — cutting the lead-to-revenue cycle in half.",
    outcomes: [
      { value: "2×", label: "Faster lead-to-revenue" },
      { value: "45%", label: "Faster release cycles" },
      { value: "35%", label: "Reduced TCO" },
    ],
    tags: ["Agentforce", "Data Cloud", "CRM AI"],
    accent: "#00A1E0",
  },
  {
    id: 2,
    practice: "Agentic AI & Automation",
    practiceShort: "Agentic AI",
    industry: "Manufacturing",
    title: "65% Cycle Time Reduction Across 14 Distribution Centers",
    summary: "Implemented KODI document AI and agentic process automation across supply chain operations, replacing manual document processing with end-to-end intelligent workflows — improving accuracy to 95%.",
    outcomes: [
      { value: "65%", label: "Cycle time reduction" },
      { value: "95%", label: "Processing accuracy" },
      { value: "45%", label: "Cost efficiency" },
    ],
    tags: ["KODI", "Document AI", "Process Intelligence"],
    accent: "#f472b6",
  },
  {
    id: 3,
    practice: "Data & Analytics",
    practiceShort: "Data & Analytics",
    industry: "Retail",
    title: "3× Faster Decision Making for an Omnichannel Retailer",
    summary: "Built a NEOSIS-powered agentic data platform on Databricks and Snowflake, replacing static reporting with real-time conversational BI — enabling store-level decisions in minutes, not days.",
    outcomes: [
      { value: "3×", label: "Faster decisions" },
      { value: "35%", label: "Reduced operational cost" },
      { value: "40%", label: "Analytics acceleration" },
    ],
    tags: ["NEOSIS", "GenBI", "Databricks"],
    accent: "#a78bfa",
  },
  {
    id: 4,
    practice: "Quality & AI Assurance",
    practiceShort: "QA & Assurance",
    industry: "Healthcare",
    title: "60% QE Acceleration for a Healthcare Network",
    summary: "Deployed KIT intelligent testing and K-Sentinel RAG agents across an 8-hospital network's clinical AI systems — achieving full AI assurance compliance and reducing security risk by 30%.",
    outcomes: [
      { value: "60%", label: "QE acceleration" },
      { value: "30%", label: "Reduced security risk" },
      { value: "100%", label: "AI assurance coverage" },
    ],
    tags: ["KIT", "K-Sentinel", "AI Governance"],
    accent: "#34d399",
  },
  {
    id: 5,
    practice: "Intelligent Applications",
    practiceShort: "Intelligent Apps",
    industry: "Hospitality",
    title: "35% Growth in User Engagement via AI-Native App Modernization",
    summary: "Modernized a legacy guest servicing platform using the VIBE Framework and Conversational Agent Suite — replacing static UI with adaptive, context-aware AI experiences that drove measurable loyalty lift.",
    outcomes: [
      { value: "35%", label: "Growth in user engagement" },
      { value: "40%", label: "Reduction in legacy run costs" },
      { value: "25%", label: "Faster time to market" },
    ],
    tags: ["VIBE Framework", "Conversational AI", "App Modernization"],
    accent: "#fb923c",
  },
  {
    id: 6,
    practice: "Agentic AI & Automation",
    practiceShort: "Agentic AI",
    industry: "Financial Services",
    title: "~50% Operational Efficiency Gain for an Insurance Firm",
    summary: "Stood up an AI Center of Excellence using pre-built RAG agents and the VIBE AI delivery lifecycle — operationalizing document AI across claims processing and underwriting workflows.",
    outcomes: [
      { value: "50%", label: "Operational efficiency" },
      { value: "45%", label: "Cost efficiency" },
      { value: "95%", label: "Improved accuracy" },
    ],
    tags: ["Pre-built Agents", "AI CoE", "Document AI"],
    accent: "#f472b6",
  },
];

const outcomes = [
  { value: "30+", label: "Successful implementations", color: "#4ca8ff" },
  { value: "65%", label: "Avg cycle time reduction", color: "#a78bfa" },
  { value: "95%", label: "Accuracy improvement", color: "#34d399" },
  { value: "45%", label: "Avg cost efficiency gain", color: "#fb923c" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{ padding: "0.45rem 1.1rem", borderRadius: "9999px", fontSize: "0.9rem", fontWeight: active ? 500 : 400, background: active ? "rgba(76,168,255,0.15)" : "transparent", color: active ? "#4ca8ff" : "rgba(255,255,255,0.45)", border: active ? "0.5px solid rgba(76,168,255,0.4)" : "0.5px solid rgba(255,255,255,0.1)", cursor: "pointer", transition: "all 0.2s ease", whiteSpace: "nowrap" as const }}>
      {label}
    </button>
  );
}

function CaseCard({ cs, index }: { cs: typeof caseStudies[0]; index: number }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07, duration: 0.5 }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)", border: `0.5px solid ${hov ? `${cs.accent}40` : "rgba(255,255,255,0.08)"}`, borderRadius: "1.25rem", padding: "2rem", display: "flex", flexDirection: "column" as const, gap: "1.5rem", cursor: "pointer", transition: "all 0.25s ease", position: "relative" as const, overflow: "hidden" }}>

      {/* Subtle accent glow top-right */}
      <div style={{ position: "absolute" as const, top: 0, right: 0, width: 200, height: 200, background: `radial-gradient(ellipse at top right, ${cs.accent}12 0%, transparent 70%)`, pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" as const }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: cs.accent, background: `${cs.accent}15`, border: `0.5px solid ${cs.accent}35`, padding: "0.25rem 0.65rem", borderRadius: "9999px" }}>{cs.practiceShort}</span>
          <span style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.1)", padding: "0.25rem 0.65rem", borderRadius: "9999px" }}>{cs.industry}</span>
        </div>
        <div style={{ width: 28, height: 28, borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, opacity: hov ? 1 : 0, transition: "opacity 0.2s", color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}>&#8599;</div>
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.25rem", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.3, margin: 0 }}>{cs.title}</h3>

      {/* Summary */}
      <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, fontWeight: 300, margin: 0, flexGrow: 1 }}>{cs.summary}</p>

      {/* Metrics */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
        {cs.outcomes.map((o, i) => (
          <div key={i} style={{ padding: "0.85rem 0.75rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.07)" }}>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.4rem", fontWeight: 400, color: cs.accent, lineHeight: 1, marginBottom: "0.3rem" }}>{o.value}</div>
            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.3 }}>{o.label}</div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" as const }}>
        {cs.tags.map((tag, i) => (
          <span key={i} style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.08)", padding: "0.2rem 0.6rem", borderRadius: "9999px" }}>{tag}</span>
        ))}
      </div>

    </motion.div>
  );
}

function CtaButton() {
  const [hov, setHov] = useState(false);
  return (
    <a href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: hov ? "#d4d8ff" : "#ffffff", color: "#080810", fontSize: "0.92rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const, padding: "0.85rem 2rem", borderRadius: "9999px", textDecoration: "none", transform: hov ? "translateY(-1px)" : "translateY(0)", transition: "all 0.25s ease" }}>Start a conversation</a>
  );
}

function InsightsButton() {
  const [hov, setHov] = useState(false);
  return (
    <a href="/insights" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: hov ? "#fff" : "rgba(255,255,255,0.6)", fontSize: "0.92rem", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" as const, padding: "0.85rem 2rem", borderRadius: "9999px", textDecoration: "none", border: hov ? "0.5px solid rgba(255,255,255,0.5)" : "0.5px solid rgba(255,255,255,0.18)", transform: hov ? "translateY(-1px)" : "translateY(0)", transition: "all 0.25s ease" }}>View insights &#8594;</a>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter(cs => cs.practice === activeFilter);

  return (
    <main style={{ background: "#000000", color: "#ffffff", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "9rem 1.5rem 5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#9a9aaa", border: "0.5px solid rgba(255,255,255,0.1)", padding: "0.38rem 1rem", borderRadius: "9999px", display: "inline-block" }}>Transformation impact</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
          style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.08, color: "#e8e6f0", marginBottom: "1.5rem", maxWidth: "18ch" }}>
          Results that speak<br /><em style={{ color: "#4ca8ff" }}>for themselves</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
          style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, fontWeight: 300, maxWidth: "56ch" }}>
          Real-world enterprise AI deployments across Salesforce, Agentic AI, Data platforms, Intelligent Applications, and Quality Assurance — with measurable outcomes from day one.
        </motion.p>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── OUTCOME STRIP ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", overflow: "hidden" }}>
          {outcomes.map((o, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{ padding: "2rem 2.25rem", background: "#000000", borderLeft: i > 0 ? "0.5px solid rgba(255,255,255,0.07)" : "none" }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2.8rem", fontWeight: 400, color: o.color, lineHeight: 1, marginBottom: "0.5rem" }}>{o.value}</div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>{o.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── FILTERS + GRID ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 1.5rem 8rem" }}>

        {/* Filter bar */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
          style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" as const, marginBottom: "3rem", alignItems: "center" }}>
          <p style={{ fontSize: "0.95rem", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", marginRight: "0.5rem" }}>Filter by practice</p>
          {practices.map(p => (
            <FilterButton key={p} label={p} active={activeFilter === p} onClick={() => setActiveFilter(p)} />
          ))}
        </motion.div>

        {/* Card grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {filtered.map((cs, i) => (
              <CaseCard key={cs.id} cs={cs} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center" as const, padding: "6rem 0", color: "rgba(255,255,255,0.3)", fontSize: "0.95rem" }}>
            No case studies found for this practice area yet.
          </div>
        )}

      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── FRAMEWORKS STRIP ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center" as const, marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>Proprietary frameworks</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>
            Built on frameworks that deliver at scale
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", overflow: "hidden" }}>
          {[
            { name: "VIBE Framework", desc: "AI-driven delivery lifecycle across all practice areas", accent: "#4ca8ff" },
            { name: "KODI", desc: "Document AI and analytics framework for intelligent processing", accent: "#f472b6" },
            { name: "NEOSIS", desc: "Agentic data & analytics platform for enterprise scale", accent: "#a78bfa" },
            { name: "KIT", desc: "Intelligent testing for apps and AI agents", accent: "#34d399" },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{ padding: "2rem", background: "#000000", borderLeft: i > 0 ? "0.5px solid rgba(255,255,255,0.07)" : "none" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: f.accent, marginBottom: "1rem", boxShadow: `0 0 12px ${f.accent}` }} />
              <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#e8e6f0", marginBottom: "0.5rem" }}>{f.name}</h3>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.6, fontWeight: 300 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 1.5rem 8rem", textAlign: "center" as const }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1.25rem" }}>Work with us</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, lineHeight: 1.15, color: "#e8e6f0", marginBottom: "1.25rem" }}>
            Ready to be our next<br /><em style={{ color: "#4ca8ff" }}>success story?</em>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: "44ch", margin: "0 auto 2.5rem", lineHeight: 1.7, fontWeight: 300 }}>
            We architect highly operable, assured, and precise AI solutions — helping organisations move from pilots to an AI-native operating model.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" as const }}>
            <CtaButton />
            <InsightsButton />
          </div>
        </motion.div>
      </section>

    </main>
  );
}