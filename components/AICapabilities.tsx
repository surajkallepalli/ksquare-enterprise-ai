"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "AI Infrastructure",
    description:
      "Scalable compute and platform architecture powering enterprise AI systems.",
    items: ["GPU clusters", "Vector databases", "Model serving", "Edge AI"]
  },
  {
    title: "Data Engineering",
    description:
      "Data platforms and pipelines that transform enterprise data into AI intelligence.",
    items: ["Lakehouse architecture", "Data pipelines", "Feature stores"]
  },
  {
    title: "Machine Learning Platforms",
    description:
      "End-to-end ML lifecycle platforms for training, deploying, and monitoring models.",
    items: ["MLOps pipelines", "Experiment tracking", "Model monitoring"]
  },
  {
    title: "AI Automation",
    description:
      "Intelligent automation systems that streamline complex enterprise workflows.",
    items: ["Decision engines", "AI workflows", "Operational automation"]
  },
  {
    title: "AI Agents",
    description:
      "Autonomous AI copilots capable of assisting teams and executing tasks.",
    items: ["Enterprise copilots", "Multi-agent systems", "Task automation"]
  },
  {
    title: "AI Governance",
    description:
      "Responsible AI frameworks ensuring transparency, compliance and reliability.",
    items: ["Model governance", "AI risk management", "Auditability"]
  }
];

export default function AICapabilities() {
  const [active, setActive] = useState(0);

  const radius = 180;
  const center = 210;

  return (
    <section className="relative py-40 px-6 max-w-7xl mx-auto">

      {/* SECTION HEADER */}
      <div className="text-center mb-28">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          Enterprise AI Architecture
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mt-4">
          Capabilities that power intelligent enterprises
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-24 items-center">

        {/* ORBIT VISUALIZATION */}
        <div className="relative w-[420px] h-[420px] mx-auto">
          {/* orbit rings */}

<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
  className="absolute inset-0 rounded-full border border-blue-500/20"
/>

<motion.div
  animate={{ rotate: -360 }}
  transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
  className="absolute inset-[40px] rounded-full border border-indigo-500/20"
/>
          <motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
  className="absolute inset-0 rounded-full border border-blue-500/20"
/>

<motion.div
  animate={{ rotate: -360 }}
  transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
  className="absolute inset-[40px] rounded-full border border-indigo-500/20"
/>

          {/* connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">

            {capabilities.map((_, i) => {
              const angle = (i / capabilities.length) * Math.PI * 2;

              const x = center + radius * Math.cos(angle);
              const y = center + radius * Math.sin(angle);

              return (
                <line
                  key={i}
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke="rgba(59,130,246,0.25)"
                  strokeWidth="1"
                />
              );
            })}

          </svg>

          <motion.circle
  cx={center}
  cy={center}
  r={radius}
  stroke="rgba(59,130,246,0.25)"
  strokeWidth="1"
  fill="none"
  strokeDasharray="6 10"
  animate={{ strokeDashoffset: [0, -100] }}
  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
/>

          {/* pulse animation */}
          {capabilities.map((_, i) => {

            const angle = (i / capabilities.length) * Math.PI * 2;

            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={"pulse" + i}
                className="absolute w-2 h-2 rounded-full bg-blue-400"
                animate={{
                  x: [x, 0],
                  y: [y, 0],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeOut"
                }}
                style={{
                  left: "50%",
                  top: "50%"
                }}
              />
            );
          })}

          {/* center core */}
          <div className="absolute inset-0 flex items-center justify-center">

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 40px rgba(59,130,246,0.4)",
                  "0 0 90px rgba(59,130,246,0.9)",
                  "0 0 40px rgba(59,130,246,0.4)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
              className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center text-center text-sm font-semibold"
            >
              KSquare
              <br />
              Enterprise AI
            </motion.div>
              <div className="absolute inset-0 rounded-full blur-3xl bg-blue-500/40"></div>
          </div>

          {/* orbit rotation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          >

            {capabilities.map((cap, i) => {

              const angle = (i / capabilities.length) * Math.PI * 2;

              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

 return (
  <motion.div
    key={cap.title}
    className="absolute"
    style={{
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`
    }}
  >

    {/* counter rotation so text stays upright */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear"
      }}
    >

      <motion.div
        onHoverStart={() => setActive(i)}
        whileHover={{ scale: 1.15 }}
        className={`w-20 h-20 rounded-full border flex items-center justify-center text-xs text-center px-2 transition cursor-pointer
        ${
          active === i
            ? "bg-blue-600 border-blue-400 shadow-[0_0_40px_rgba(59,130,246,0.9)]"
            : "bg-neutral-900 border-white/10 hover:border-blue-400"
        }`}
      >
        {cap.title.split(" ")[0]}
      </motion.div>

    </motion.div>

  </motion.div>
              );
            })}

          </motion.div>

        </div>

        {/* DETAILS PANEL */}
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
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