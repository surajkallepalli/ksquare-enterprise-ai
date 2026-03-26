"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import NeuralNetwork from "@/components/NeuralNetwork";
import ThoughtLeadershipSection from "@/components/ThoughtLeadershipSection";
import AIParticlesSection from "@/components/AIParticlesSection";
import AIParticles from "@/components/AIParticles";
import CTAParticles from "@/components/CTAParticles";
import TechEcosystem from "@/components/TechEcosystem";
import AmbientAIGrid from "@/components/AmbientAIGrid";
import AICapabilities from "@/components/AICapabilities";
import ScrollReveal from "@/components/ScrollReveal";
import BackgroundGlow from "@/components/BackgroundGlow";
import HeroNetwork from "@/components/HeroNetwork";
import GlobalAIAmbience from "@/components/GlobalAIAmbience";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import AIButton from "@/components/AIButton";
import TestimonialCarousel from "@/components/TestimonialCarousel";

// ── HERO CTA BUTTONS ──────────────────────────────────────────────────────────

function HeroCtaPrimary() {
  const [hov, setHov] = useState(false);
  return (
    <a href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: hov ? "#d4d8ff" : "#ffffff", color: "#080810", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none", transform: hov ? "translateY(-1px)" : "translateY(0)", transition: "all 0.25s ease" }}>Start a conversation</a>
  );
}

function HeroCtaSecondary() {
  const [hov, setHov] = useState(false);
  return (
    <a href="/case-studies" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: hov ? "#fff" : "rgba(255,255,255,0.65)", fontSize: "0.82rem", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" as const, padding: "0.9rem 2rem", borderRadius: "9999px", textDecoration: "none", border: hov ? "0.5px solid rgba(255,255,255,0.5)" : "0.5px solid rgba(255,255,255,0.2)", transform: hov ? "translateY(-1px)" : "translateY(0)", transition: "all 0.25s ease" }}>See our work &#8594;</a>
  );
}

// ── CASE STUDIES DATA ─────────────────────────────────────────────────────────

const caseStudies = [
  { tag: "Supply Chain", industry: "Manufacturing", title: "AI-driven supply chain optimization across 14 distribution centers", stat: "22%", statLabel: "reduction in operational costs", meta: "Global manufacturer · 2024", href: "/case-studies/ai-supply-chain", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900", color: "#7b6ff0" },
  { tag: "Customer Analytics", industry: "Retail", title: "Intelligent customer insights platform unifying 40M data points", stat: "18%", statLabel: "improvement in retention", meta: "Retail enterprise · 2024", href: "/case-studies/customer-insights", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900", color: "#4ca8ff" },
  { tag: "Process Automation", industry: "Financial Services", title: "End-to-end loan processing automation reducing cycle time by 60%", stat: "60%", statLabel: "faster loan processing", meta: "Regional bank · 2024", href: "/case-studies/loan-automation", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=900", color: "#34d399" },
  { tag: "Clinical AI", industry: "Healthcare", title: "Predictive patient readmission model deployed across 8 hospital networks", stat: "31%", statLabel: "reduction in readmissions", meta: "Health system · 2025", href: "/case-studies/clinical-ai", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=900", color: "#f472b6" },
  { tag: "Guest Experience", industry: "Hospitality", title: "AI concierge platform personalizing experiences for 2M annual guests", stat: "4.8★", statLabel: "average guest satisfaction", meta: "Hotel chain · 2025", href: "/case-studies/hospitality-ai", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=900", color: "#fb923c" },
  { tag: "Demand Forecasting", industry: "Retail", title: "Real-time inventory intelligence eliminating $12M in overstock annually", stat: "$12M", statLabel: "overstock eliminated", meta: "Fashion retailer · 2025", href: "/case-studies/inventory-ai", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900", color: "#a78bfa" },
];

// ── INSIGHTS DATA ─────────────────────────────────────────────────────────────

const insights = [
  { type: "Research Report", title: "Why most enterprise AI initiatives fail at scale", description: "AI pilots succeed, but scaling fails. The real challenge lies in architecture, governance, and integration — not the models themselves.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900", href: "/insights/ai-scale", color: "#7b6ff0" },
  { type: "Research Report", title: "From data chaos to AI readiness", description: "Before AI delivers value, data foundations must be restructured. Most enterprises deeply underestimate this critical phase.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900", href: "/insights/data-readiness", color: "#4ca8ff" },
  { type: "Perspective", title: "Agentic AI in the enterprise: what actually works", description: "Autonomous AI is promising, but only specific use cases deliver real ROI today. Here is where enterprise leaders should start.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900", href: "/insights/agentic-ai", color: "#34d399" },
  { type: "Research Report", title: "The governance gap: AI risk in regulated industries", description: "Regulated industries face unique AI challenges. Without robust governance frameworks, compliance risk can stall transformation.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900", href: "/insights/ai-governance", color: "#f472b6" },
  { type: "Perspective", title: "Building AI-native organizations from the inside out", description: "The companies winning with AI are not just deploying tools — they are redesigning how work gets done at every level.", image: "https://images.unsplash.com/photo-1655720033654-a4239dd42d10?q=80&w=900", href: "/insights/ai-native", color: "#fb923c" },
  { type: "Research Report", title: "Sovereign AI: managing risk while accelerating growth", description: "As AI capabilities grow, so do concerns around data sovereignty and regulatory compliance across global enterprises.", image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=900", href: "/insights/sovereign-ai", color: "#34d3d3" },
  { type: "Perspective", title: "The human side of enterprise AI transformation", description: "Technology is only half the equation. Culture, change management, and people strategy determine whether AI initiatives succeed.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900", href: "/insights/human-ai", color: "#a78bfa" },
  { type: "Research Report", title: "Multimodal AI: the next frontier for enterprise intelligence", description: "Vision, language, and structured data are converging. Early adopters are already building competitive advantages on multimodal foundations.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=900", href: "/insights/multimodal-ai", color: "#4ca8ff" },
];

// ── INSIGHT CARD ──────────────────────────────────────────────────────────────

function InsightCard({ item }: { item: typeof insights[0] }) {
  const [hovered, setHovered] = useState(false);
  const ease = "cubic-bezier(0.85, 0, 0, 1)";
  return (
    <a href={item.href} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ display: "block", position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#080808", textDecoration: "none", cursor: "pointer", transform: hovered ? "scale(1.04)" : "scale(1)", transition: `transform 0.55s ${ease}` }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: hovered ? "145%" : "100%", height: "100%", transform: hovered ? "translateX(10%)" : "translateX(0)", opacity: hovered ? 0.35 : 1, transition: `width 0.55s ${ease}, transform 0.55s ${ease}, opacity 0.55s ${ease}`, overflow: "hidden" }}>
        <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "saturate(0.75) brightness(0.85)" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.55) 45%, transparent 75%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", opacity: hovered ? 0 : 1, transition: "opacity 0.25s ease", pointerEvents: "none" }}>
        <span style={{ fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: item.color, background: `${item.color}18`, border: `0.5px solid ${item.color}40`, padding: "0.28rem 0.65rem", borderRadius: "9999px", width: "fit-content" }}>{item.type}</span>
        <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1rem", fontWeight: 400, color: "#fff", lineHeight: 1.45, maxWidth: "88%" }}>{item.title}</h3>
      </div>
      <div style={{ position: "absolute", inset: 0, padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "flex-end", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(14px)", transition: "opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s", pointerEvents: "none" }}>
        <span style={{ fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: item.color, marginBottom: "0.6rem" }}>{item.type}</span>
        <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "0.95rem", fontWeight: 400, color: "#fff", lineHeight: 1.45, marginBottom: "0.65rem" }}>{item.title}</h3>
        <p style={{ fontSize: "0.78rem", color: "#7a7a8a", lineHeight: 1.65, marginBottom: "1.1rem" }}>{item.description}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", color: item.color, letterSpacing: "0.06em" }}>Read more &#8594;</div>
      </div>
    </a>
  );
}

// ── INSIGHTS SECTION ──────────────────────────────────────────────────────────

function InsightsSection() {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "7rem 1.5rem" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", gap: "1.5rem", flexWrap: "wrap" as const }}>
        <div>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#3a3a4a", marginBottom: "1rem" }}>Thought leadership</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.1, color: "#e8e6f0" }}>
            How enterprise AI is<br /><em style={{ color: "#4ca8ff" }}>actually evolving</em>
          </h2>
        </div>
        <a href="/insights" style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#3a3a4a", borderBottom: "0.5px solid #1e1e2a", paddingBottom: "3px", textDecoration: "none", whiteSpace: "nowrap" as const }} onMouseEnter={e => { e.currentTarget.style.color = "#4ca8ff"; e.currentTarget.style.borderBottomColor = "#4ca8ff"; }} onMouseLeave={e => { e.currentTarget.style.color = "#3a3a4a"; e.currentTarget.style.borderBottomColor = "#1e1e2a"; }}>All insights &#8594;</a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "380px 380px", gap: "12px" }}>
        {insights.map((item, i) => <InsightCard key={i} item={item} />)}
      </div>
      <div style={{ marginTop: "2.5rem" }}>
        <AIButton>View all insights</AIButton>
      </div>
    </section>
  );
}

// ── CASE STUDIES SECTION ──────────────────────────────────────────────────────

function CaseStudiesSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const featured = caseStudies[0];
  const rest = caseStudies.slice(1);
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "7rem 1.5rem" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", gap: "1.5rem", flexWrap: "wrap" as const }}>
        <div>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#3a3a4a", marginBottom: "1rem" }}>Transformation impact</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.1, color: "#e8e6f0" }}>
            Results that speak<br /><em style={{ color: "#7b6ff0" }}>for themselves</em>
          </h2>
        </div>
        <a href="/case-studies" style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#3a3a4a", borderBottom: "0.5px solid #1e1e2a", paddingBottom: "3px", textDecoration: "none", whiteSpace: "nowrap" as const }} onMouseEnter={e => { e.currentTarget.style.color = "#a09be8"; e.currentTarget.style.borderBottomColor = "#7b6ff0"; }} onMouseLeave={e => { e.currentTarget.style.color = "#3a3a4a"; e.currentTarget.style.borderBottomColor = "#1e1e2a"; }}>All case studies &#8594;</a>
      </div>
      <motion.a href={featured.href} whileHover={{ scale: 1.005 }} transition={{ duration: 0.4 }} style={{ display: "block", position: "relative", borderRadius: "1.25rem", overflow: "hidden", marginBottom: "0.75rem", textDecoration: "none", cursor: "pointer", border: "0.5px solid #16161f" }}>
        <img src={featured.image} alt={featured.title} style={{ width: "100%", height: 420, objectFit: "cover", display: "block", filter: "saturate(0.6) brightness(0.55)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,6,8,0.97) 0%, rgba(6,6,8,0.35) 55%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.1)", padding: "0.35rem 0.75rem", borderRadius: "9999px" }}>{featured.industry}</span>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: featured.color, background: `${featured.color}18`, border: `0.5px solid ${featured.color}40`, padding: "0.35rem 0.75rem", borderRadius: "9999px" }}>{featured.tag}</span>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.3, marginBottom: "1.25rem", maxWidth: "55%" }}>{featured.title}</h3>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "2.8rem", fontWeight: 500, color: featured.color, lineHeight: 1 }}>{featured.stat}</span>
              <span style={{ fontSize: "0.9rem", color: "#5a5a6a" }}>{featured.statLabel}</span>
            </div>
            <p style={{ fontSize: "0.7rem", color: "#3a3a4a", letterSpacing: "0.05em" }}>{featured.meta}</p>
          </div>
        </div>
      </motion.a>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.75rem" }}>
        {rest.map((cs, i) => (
          <motion.a key={i} href={cs.href} whileHover={{ y: -4 }} transition={{ duration: 0.3 }} style={{ display: "block", position: "relative", borderRadius: "1rem", overflow: "hidden", textDecoration: "none", cursor: "pointer", border: `0.5px solid ${hovered === i ? "#2a2a3a" : "#16161f"}`, background: "#0d0d12", transition: "border-color 0.3s" }} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
            <img src={cs.image} alt={cs.title} style={{ width: "100%", height: 180, objectFit: "cover", display: "block", filter: `saturate(0.65) brightness(${hovered === i ? 0.9 : 0.7})`, transition: "filter 0.4s, transform 0.6s ease", transform: hovered === i ? "scale(1.06)" : "scale(1)" }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 180, background: "linear-gradient(to top, rgba(6,6,8,0.98) 0%, rgba(6,6,8,0.2) 60%, transparent 100%)" }} />
            <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem" }}>
              <span style={{ fontSize: "0.52rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: cs.color, background: `${cs.color}15`, border: `0.5px solid ${cs.color}35`, padding: "0.2rem 0.5rem", borderRadius: "9999px" }}>{cs.industry}</span>
            </div>
            <div style={{ padding: "0.85rem" }}>
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "0.9rem", fontWeight: 400, color: hovered === i ? "#fff" : "#ccc8e0", lineHeight: 1.4, marginBottom: "0.75rem", transition: "color 0.2s", minHeight: "3.5rem" }}>{cs.title}</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", marginBottom: "0.4rem" }}>
                <span style={{ fontSize: "1.4rem", fontWeight: 500, color: cs.color, lineHeight: 1 }}>{cs.stat}</span>
                <span style={{ fontSize: "0.65rem", color: "#3a3a4a", lineHeight: 1.4 }}>{cs.statLabel}</span>
              </div>
              <p style={{ fontSize: "0.6rem", color: "#28283a", letterSpacing: "0.05em" }}>{cs.meta}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

// ── SLIDE FADE HELPER ─────────────────────────────────────────────────────────

function SlideFadeSection({ children, direction = "left" }: { children: React.ReactNode; direction?: "left" | "right" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px 0px -100px 0px", once: false });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);
  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0, x: direction === "left" ? -50 : 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="w-full">
      {children}
    </motion.div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      <SmoothScroll />
      <CursorGlow />
      <GlobalAIAmbience />
      <BackgroundGlow />
      <AmbientAIGrid />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 blur-[180px]" />
        <div className="absolute top-[40%] left-[10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[10%] w-[700px] h-[700px] bg-violet-600/10 blur-[180px]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-6">

        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(4,6,20,0.75) 50%, rgba(0,0,0,0.80) 100%)" }} />
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)" }} />

        <div className="absolute inset-0 z-20 pointer-events-none" style={{ opacity: 0.35 }}>
          <NeuralNetwork />
        </div>

        <div className="relative z-30 w-full max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }} style={{ marginBottom: "2rem" }}>
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", border: "0.5px solid rgba(255,255,255,0.15)", padding: "0.45rem 1.1rem", borderRadius: "9999px", display: "inline-block" }}>Enterprise AI Transformation</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }} style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "1.75rem", maxWidth: "16ch" }}>
              Intelligence across your entire{" "}<em style={{ fontStyle: "italic", color: "#7b8fff" }}>value chain.</em>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.9 }} style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.58)", maxWidth: "52ch", marginBottom: "2.75rem", letterSpacing: "0.01em" }}>
              We turn fragmented data and disconnected systems into a unified AI backbone — so your enterprise moves faster, smarter, and with less friction.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.8 }} style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" as const }}>
              <HeroCtaPrimary />
              <HeroCtaSecondary />
            </motion.div>

          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "4px" }}>
            <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
            <div style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.25)" }} />
          </motion.div>
        </motion.div>

      </section>

      {/* ================= TESTIMONIALS ================= */}
      <TestimonialCarousel />

      {/* ================= TECHNOLOGY ECOSYSTEM ================= */}
      <SlideFadeSection direction="right">
        <ScrollReveal><TechEcosystem /></ScrollReveal>
      </SlideFadeSection>

      {/* ================= AI CAPABILITIES ================= */}
      <ScrollReveal><AICapabilities /></ScrollReveal>

      {/* ================= CASE STUDIES ================= */}
      <SlideFadeSection direction="left">
        <ScrollReveal><CaseStudiesSection /></ScrollReveal>
      </SlideFadeSection>

      {/* ================= INSIGHTS ================= */}
      <SlideFadeSection direction="right">
        <ScrollReveal><InsightsSection /></ScrollReveal>
      </SlideFadeSection>

      {/* ================= STRATEGIC CTA ================= */}
      <section className="relative py-40 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <CTAParticles />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-3xl animate-slow-fade" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">Build the next generation of intelligent enterprises</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">We partner with forward-thinking organizations to design, deploy, and scale enterprise AI systems that drive measurable transformation.</p>
          <AIButton>Start a Conversation</AIButton>
        </div>
      </section>

    </main>
  );
}