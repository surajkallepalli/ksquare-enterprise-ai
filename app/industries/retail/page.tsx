"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, BarChart2, Users, Cpu, Layers, ArrowRight } from "lucide-react";

const accent = "#00A1E0";

const metrics = [
  { value: "18%", label: "Improvement in customer retention" },
  { value: "$12M", label: "Annual overstock eliminated" },
  { value: "4.8★", label: "Average customer satisfaction" },
];

const capabilities = [
  { icon: BarChart2, title: "Demand Forecasting AI", description: "ML-driven demand forecasting models that incorporate seasonality, promotions, weather, and macroeconomic signals — improving forecast accuracy and reducing inventory imbalances across the supply chain.", tags: ["Demand sensing", "Promo modelling", "Inventory optimisation"] },
  { icon: Users, title: "Customer Intelligence Platform", description: "Unified customer data platforms that combine transactional, behavioural, and third-party data — enabling personalisation at scale, churn prediction, and next-best-action recommendations.", tags: ["Customer 360", "Churn prediction", "Personalisation AI"] },
  { icon: ShoppingBag, title: "Merchandising & Pricing AI", description: "Dynamic pricing and assortment optimisation platforms that respond to competitor pricing, demand signals, and margin targets — improving revenue per SKU and reducing markdowns.", tags: ["Dynamic pricing", "Assortment AI", "Markdown optimisation"] },
  { icon: Cpu, title: "Store Operations Intelligence", description: "AI platforms for store labour optimisation, loss prevention, and operational efficiency — combining computer vision, IoT sensor data, and operational AI to reduce costs and improve the in-store experience.", tags: ["Labour optimisation", "Loss prevention", "Footfall analytics"] },
  { icon: Layers, title: "Retail Data Platform", description: "Unified retail data architectures connecting POS, e-commerce, loyalty, supply chain, and third-party data — the foundation for AI, analytics, and personalisation at enterprise scale.", tags: ["POS integration", "E-commerce data", "Loyalty analytics"] },
];

const useCases = [
  { industry: "Fashion Retailer", outcome: "$12M overstock eliminated", description: "AI-driven inventory optimisation platform across 300 stores and 3 DCs, reducing end-of-season overstock by 28% and eliminating $12M in annual inventory write-downs." },
  { industry: "Grocery Chain", outcome: "18% retention improvement", description: "Customer intelligence platform personalising offers and communications for 4M loyalty members — improving 12-month retention by 18% and increasing basket size by 11%." },
  { industry: "Specialty Retail", outcome: "35% fewer markdowns", description: "Dynamic pricing and markdown optimisation AI reduced planned markdowns by 35% while maintaining sell-through targets across a 12,000 SKU catalogue." },
];

function CtaButton() {
  const [hov, setHov] = useState(false);
  return <a href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: hov ? "#fff" : accent, color: "#000", fontSize: "0.85rem", fontWeight: 600, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none", transition: "all 0.25s ease" }}>Start a conversation <ArrowRight size={15} /></a>;
}

function SecondaryButton() {
  const [hov, setHov] = useState(false);
  return <Link href="/case-studies" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: hov ? "#fff" : "rgba(255,255,255,0.65)", fontSize: "0.85rem", fontWeight: 400, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none", border: hov ? "0.5px solid rgba(255,255,255,0.5)" : "0.5px solid rgba(255,255,255,0.2)", transition: "all 0.25s ease" }}>See case studies →</Link>;
}

export default function RetailPage() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "9rem 1.5rem 5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: accent, border: `0.5px solid ${accent}50`, padding: "0.38rem 1rem", borderRadius: "9999px" }}>Retail</span>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "end" }}>
          <div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 400, lineHeight: 1.08, color: "#e8e6f0", marginBottom: "1.75rem" }}>
              AI that powers<br /><em style={{ color: accent }}>intelligent retail</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.75, fontWeight: 300, marginBottom: "2.5rem" }}>
              Retailers are deploying AI to personalise at scale, optimise inventory, and build data-driven customer relationships. KSquare delivers enterprise AI platforms that transform retail data into competitive advantage — across stores, digital channels, and supply chains.
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
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>What we deploy</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>Retail AI capabilities</h2>
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

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>Proven results</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.2 }}>Retail transformations</h2>
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

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem 8rem", textAlign: "center" as const }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, color: "#e8e6f0", marginBottom: "1.25rem", lineHeight: 1.15 }}>Ready to build intelligent retail?</h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: "44ch", margin: "0 auto 2.5rem", lineHeight: 1.7, fontWeight: 300 }}>Talk to our retail AI specialists about demand forecasting, customer intelligence, and inventory optimisation platforms.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" as const }}>
            <CtaButton />
            <SecondaryButton />
          </div>
        </motion.div>
      </section>
    </main>
  );
}