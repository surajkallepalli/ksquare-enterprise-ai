"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ShieldCheck, Bot, Database, Zap } from "lucide-react";

const capabilities = [
  {
    title: "Salesforce & Agentforce",
    short: "Salesforce",
    icon: Cpu,
    color: "#00A1E0",
    glow: "rgba(0,161,224,0.45)",
    dim: "rgba(0,161,224,0.12)",
    description: "AI-powered CRM, Data Cloud and Agentforce — delivering 2× faster lead-to-revenue cycles.",
    items: ["AI-Powered CRM", "Data Cloud Enablement", "Agentforce Automation", "Next-Gen Experiences"],
  },
  {
    title: "Intelligent Applications",
    short: "Intelligent",
    icon: Bot,
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.45)",
    dim: "rgba(167,139,250,0.12)",
    description: "Advancing AI into everyday operations through app modernization and conversational AI.",
    items: ["Conversational AI Agents", "App Modernization", "AI-Driven Integration", "UI/UX for AI"],
  },
  {
    title: "Quality & AI Assurance",
    short: "Quality",
    icon: ShieldCheck,
    color: "#34d399",
    glow: "rgba(52,211,153,0.45)",
    dim: "rgba(52,211,153,0.12)",
    description: "Ensuring reliability, governance and trust in AI systems — 60% faster quality engineering.",
    items: ["Intelligent QE (KIT)", "AI Assurance", "AI Lifecycle Governance", "DevSecOps"],
  },
  {
    title: "Agentic AI & Automation",
    short: "Agentic",
    icon: Zap,
    color: "#f472b6",
    glow: "rgba(244,114,182,0.45)",
    dim: "rgba(244,114,182,0.12)",
    description: "A hybrid strategy blending Gen AI with AI/ML — 65% cycle time reduction, 95% accuracy.",
    items: ["Document AI (KODI)", "Pre-built RAG Agents", "AI Operationalization", "AI Managed Services"],
  },
  {
    title: "Data & Analytics",
    short: "Data",
    icon: Database,
    color: "#fb923c",
    glow: "rgba(251,146,60,0.45)",
    dim: "rgba(251,146,60,0.12)",
    description: "Agentic data engineering and analytics — 3× faster decisions with the NEOSIS platform.",
    items: ["NEOSIS Platform", "Agentic Data Engineering", "GenBI Agent", "MLOps & Data Quality"],
  },
];

const CX = 280;
const CY = 280;
const R = 195;

const nodeAngles = [-90, -90 + 72, -90 + 144, -90 + 216, -90 + 288];

function toRad(d: number) { return (d * Math.PI) / 180; }
function nodeXY(angle: number) {
  return { x: CX + R * Math.cos(toRad(angle)), y: CY + R * Math.sin(toRad(angle)) };
}

const CIRCUMFERENCE = 2 * Math.PI * R;

export default function AICapabilities() {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current) {
        const delta = time - lastTimeRef.current;
        setRotation(r => (r + delta * 0.04) % 360);
      }
      lastTimeRef.current = time;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(p => (p + 1) % capabilities.length);
    }, 3000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleClick = (i: number) => {
    setActive(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive(p => (p + 1) % capabilities.length), 3000);
  };

  const cap = capabilities[active];
  const nodes = nodeAngles.map(a => nodeXY(a));
  const arcLen = CIRCUMFERENCE * 0.15;
  const arcGap = CIRCUMFERENCE - arcLen;

  return (
    <section style={{ padding: "4rem 1.5rem 3rem" }} className="max-w-7xl mx-auto overflow-hidden">

      {/* Header */}
      <div className="text-center mb-10">
        <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>Enterprise AI Architecture</p>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.1, color: "#e8e6f0" }}>
          Capabilities that power<br /><em style={{ color: "#4ca8ff" }}>intelligent enterprises</em>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* ── LEFT: Orbit diagram ── */}
        <div className="relative mx-auto" style={{ width: 560, height: 560 }}>
          <svg width="560" height="560" viewBox="0 0 560 560" style={{ position: "absolute", inset: 0 }}>
            <defs>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4ca8ff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4ca8ff" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={cap.color} stopOpacity="0.15" />
                <stop offset="100%" stopColor={cap.color} stopOpacity="0" />
              </radialGradient>
              <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={cap.color} stopOpacity="0" />
                <stop offset="60%" stopColor={cap.color} stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
              {capabilities.map((c, i) => (
                <linearGradient key={i} id={`sp${i}`} gradientUnits="userSpaceOnUse"
                  x1={CX} y1={CY} x2={nodes[i].x} y2={nodes[i].y}>
                  <stop offset="0%" stopColor="#4ca8ff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor={c.color} stopOpacity="0.4" />
                </linearGradient>
              ))}
            </defs>

            <circle cx={CX} cy={CY} r={200} fill="url(#hubGlow)" />

            {nodes.map((n, i) => i === active && (
              <circle key={i} cx={n.x} cy={n.y} r={90} fill="url(#nodeGlow)" />
            ))}

            {/* Spoke lines */}
            {nodes.map((n, i) => (
              <line key={i} x1={CX} y1={CY} x2={n.x} y2={n.y}
                stroke={`url(#sp${i})`}
                strokeWidth={i === active ? 1 : 0.5}
                opacity={i === active ? 0.55 : 0.12}
                style={{ transition: "all 0.5s ease" }}
              />
            ))}

            {/* Midpoint dots */}
            {nodes.map((n, i) => (
              <circle key={i}
                cx={(CX + n.x) / 2} cy={(CY + n.y) / 2}
                r={i === active ? 2.5 : 1.5}
                fill={capabilities[i].color}
                opacity={i === active ? 0.7 : 0.15}
                style={{ transition: "all 0.5s ease" }}
              />
            ))}

            {/* Orbit ring */}
            <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(76,168,255,0.15)" strokeWidth="0.5" />

            {/* Rotating signal arc */}
            <circle cx={CX} cy={CY} r={R} fill="none"
              stroke="url(#arcGrad)"
              strokeWidth="2"
              strokeDasharray={`${arcLen} ${arcGap}`}
              strokeLinecap="round"
              transform={`rotate(${rotation} ${CX} ${CY})`}
              style={{ filter: `drop-shadow(0 0 6px ${cap.color})` }}
            />

            {/* Counter-rotating subtle arc */}
            <circle cx={CX} cy={CY} r={R} fill="none"
              stroke="rgba(76,168,255,0.4)"
              strokeWidth="1"
              strokeDasharray={`${CIRCUMFERENCE * 0.06} ${CIRCUMFERENCE * 0.94}`}
              strokeLinecap="round"
              transform={`rotate(${-rotation * 0.6} ${CX} ${CY})`}
            />

            {/* Node glow rings + connection dots */}
            {nodes.map((n, i) => {
              const isActive = i === active;
              return (
                <g key={i}>
                  {isActive && (
                    <motion.circle cx={n.x} cy={n.y} r={58} fill="none"
                      stroke={capabilities[i].color} strokeWidth="0.8"
                      animate={{ r: [52, 70, 52], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                  <circle cx={n.x} cy={n.y} r={isActive ? 4 : 2.5}
                    fill={capabilities[i].color}
                    opacity={isActive ? 1 : 0.3}
                    style={{ transition: "all 0.4s ease", filter: isActive ? `drop-shadow(0 0 6px ${capabilities[i].color})` : "none" }}
                  />
                </g>
              );
            })}

            {/* Center pulse rings */}
            <motion.circle cx={CX} cy={CY} r={60} fill="none"
              stroke="#4ca8ff" strokeWidth="0.5"
              animate={{ r: [55, 85, 55], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle cx={CX} cy={CY} r={50} fill="none"
              stroke={cap.color} strokeWidth="0.5"
              animate={{ r: [48, 72, 48], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeOut", delay: 2 }}
            />
            <motion.circle cx={CX} cy={CY} r={52} fill="none"
              stroke="rgba(76,168,255,0.2)" strokeWidth="0.7" strokeDasharray="2 8"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: `${CX}px ${CY}px` }}
            />
          </svg>

          {/* Center hub */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, rgba(76,168,255,0.18) 0%, rgba(8,8,18,0.97) 70%)", border: "1.5px solid rgba(76,168,255,0.45)", boxShadow: "0 0 48px rgba(76,168,255,0.25), 0 0 16px rgba(76,168,255,0.15), inset 0 0 28px rgba(76,168,255,0.08)", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", gap: 10, position: "relative", zIndex: 10, transition: "box-shadow 0.5s ease" }}
            >
              <div style={{ position: "absolute", inset: 8, borderRadius: "50%", border: "0.5px solid rgba(76,168,255,0.18)", pointerEvents: "none" }} />
              <div style={{ width: 48, height: 48, overflow: "hidden", flexShrink: 0, position: "relative", zIndex: 1 }}>
                <img src="/assets/logos/ksquare-logo.png" alt="KSquare" style={{ height: 48, width: "auto", maxWidth: "none", display: "block" }} />
              </div>
              <div style={{ position: "relative", zIndex: 1, textAlign: "center" as const, letterSpacing: "0.09em" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 400, color: "#a8c8f0" }}>THE </span>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#1a56db" }}>KSQUARE</span>
                <span style={{ fontSize: "0.7rem", fontWeight: 400, color: "#a8c8f0" }}> GROUP</span>
              </div>
            </motion.div>
          </div>

          {/* Capability nodes */}
          {capabilities.map((c, i) => {
            const pos = nodes[i];
            const isActive = i === active;
            const Icon = c.icon;
            return (
              <motion.div key={i}
                style={{ position: "absolute", left: pos.x - 50, top: pos.y - 50, width: 100, height: 100, zIndex: 20 }}
                animate={{ scale: isActive ? [1, 1.03, 1] : 1 }}
                transition={{ duration: 2.5, repeat: isActive ? Infinity : 0 }}
              >
                <div onClick={() => handleClick(i)}
                  style={{ width: "100%", height: "100%", borderRadius: "50%", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", gap: "0.4rem", cursor: "pointer", background: isActive ? `radial-gradient(circle at 40% 30%, ${c.dim} 0%, rgba(6,6,12,0.96) 80%)` : "rgba(8,8,16,0.85)", border: `1px solid ${isActive ? c.color : "rgba(255,255,255,0.1)"}`, boxShadow: isActive ? `0 0 32px ${c.glow}, 0 0 10px ${c.glow}, inset 0 0 16px ${c.dim}` : "0 2px 20px rgba(0,0,0,0.5)", backdropFilter: "blur(16px)", transition: "all 0.45s cubic-bezier(0.4,0,0.2,1)" }}
                >
                  <Icon size={20} color={isActive ? c.color : "rgba(255,255,255,0.3)"} style={{ transition: "color 0.3s", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9rem", color: isActive ? "#ffffff" : "rgba(255,255,255,0.35)", textAlign: "center" as const, lineHeight: 1.3, fontWeight: isActive ? 500 : 400, padding: "0 0.3rem", transition: "color 0.3s" }}>{c.short}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── RIGHT: Detail panel ── */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{ width: 8, height: 8, borderRadius: "50%", background: cap.color, boxShadow: `0 0 10px ${cap.color}` }}
              />
              <span style={{ fontSize: "0.9rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: cap.color, fontWeight: 500 }}>
                {`0${active + 1} of 05`}
              </span>
            </div>

            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              {cap.title}
            </h3>

            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>
              {cap.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem", marginBottom: "2.5rem" }}>
              {cap.items.map((item, i) => (
                <motion.div key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: i * 0.07 + 0.15, duration: 0.4 }}
                    style={{ width: 24, height: 1.5, background: cap.color, transformOrigin: "left", opacity: 0.7, flexShrink: 0 }}
                  />
                  <span style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.72)", fontWeight: 400 }}>{item}</span>
                </motion.div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              {capabilities.map((c, i) => (
                <button key={i} onClick={() => handleClick(i)}
                  style={{ width: i === active ? 28 : 6, height: 6, borderRadius: 9999, background: i === active ? c.color : "rgba(255,255,255,0.12)", border: "none", padding: 0, cursor: "pointer", transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)", boxShadow: i === active ? `0 0 8px ${c.color}` : "none" }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}