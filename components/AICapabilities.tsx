"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Cpu,
  Sparkles,
  ShieldCheck,
  Bot,
  DatabaseZap
} from "lucide-react";

const capabilities = [
  {
    title: "Salesforce & Agentforce",
    short: "Salesforce",
    icon: <Cpu size={26} />,
    description: "AI-powered CRM and unified enterprise data platforms.",
    items: ["AI CRM", "Data Cloud", "Industry Clouds", "Agentforce"],
  },
  {
    title: "Intelligent Applications",
    short: "Intelligent",
    icon: <Sparkles size={26} />,
    description: "Modern applications built with AI-first architecture.",
    items: ["UI/UX", "Conversational AI", "App Modernization", "Integration"],
  },
  {
    title: "Quality & AI Assurance",
    short: "Quality",
    icon: <ShieldCheck size={26} />,
    description: "Ensuring reliability, governance, and trust in AI systems.",
    items: ["QE", "AI Assurance", "Governance", "DevSecOps"],
  },
  {
    title: "Agentic AI & Automation",
    short: "Agentic",
    icon: <Bot size={26} />,
    description: "Autonomous workflows powered by AI systems.",
    items: ["Process AI", "Document AI", "AI Ops", "Managed AI"],
  },
  {
    title: "AI-Powered Data & Analytics",
    short: "Data",
    icon: <DatabaseZap size={26} />,
    description: "Advanced data engineering and intelligent analytics.",
    items: ["Data Engineering", "Analytics", "Governance", "Gen BI"],
  },
];

const positions = [
  { x: -180, y: -140 },
  { x: 180, y: -120 },
  { x: 220, y: 120 },
  { x: -160, y: 160 },
  { x: 0, y: 220 },
];

export default function AICapabilities() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-40 px-6 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="text-center mb-28">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          Enterprise AI Architecture
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mt-4">
          Capabilities that power intelligent enterprises
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT VISUAL */}
        <div className="relative w-[500px] h-[500px] mx-auto">

          {/* CONNECTION LINES */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {positions.map((pos, i) => (
              <line
                key={i}
                x1="250"
                y1="250"
                x2={250 + pos.x}
                y2={250 + pos.y}
                stroke={
                  active === i
                    ? "rgba(59,130,246,0.6)"
                    : "rgba(59,130,246,0.15)"
                }
                strokeWidth="1.5"
              />
            ))}
          </svg>

          {/* CENTER CORE */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 40px rgba(59,130,246,0.4)",
                  "0 0 80px rgba(59,130,246,0.8)",
                  "0 0 40px rgba(59,130,246,0.4)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center text-sm font-semibold text-center"
            >
              The KSquare Group
            </motion.div>
            <div className="absolute inset-0 rounded-full blur-3xl bg-blue-500/40"></div>
          </div>

          {/* NODES */}
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: active === i ? positions[i].x * 0.9 : positions[i].x,
                y: active === i ? positions[i].y * 0.9 : positions[i].y,
              }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              <motion.div
                onHoverStart={() => setActive(i)}
                whileHover={{ scale: 1.15 }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                }}
                className={`w-28 h-28 rounded-xl flex flex-col items-center justify-center gap-2 text-xs text-center px-2 cursor-pointer transition
                ${
                  active === i
                    ? "bg-blue-600 shadow-[0_0_40px_rgba(59,130,246,0.8)]"
                    : "bg-neutral-900 border border-white/10 hover:border-blue-400"
                }`}
              >
                <span className="text-blue-300">
                  {cap.icon}
                </span>

                <span className="text-xs leading-tight">
                  {cap.short}
                </span>
              </motion.div>
            </motion.div>
          ))}

        </div>

        {/* RIGHT PANEL */}
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >

          <h3 className="text-3xl font-semibold">
            {capabilities[active].title}
          </h3>

          <p className="text-neutral-300 text-lg">
            {capabilities[active].description}
          </p>

          <ul className="space-y-2 text-neutral-400">
            {capabilities[active].items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

        </motion.div>

      </div>

    </section>
  );
}