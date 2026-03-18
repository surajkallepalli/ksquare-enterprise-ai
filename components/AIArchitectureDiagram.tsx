"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  {
    title: "Enterprise Systems",
    description: "CRM, ERP, operational systems and external data sources"
  },
  {
    title: "Unified Data Layer",
    description: "Secure pipelines, governance, and enterprise data platform"
  },
  {
    title: "AI Intelligence",
    description: "Machine learning models, LLMs, and AI agents"
  },
  {
    title: "Business Applications",
    description: "Automation, forecasting, decision intelligence"
  }
];

export default function AIArchitectureDiagram() {

  const [active, setActive] = useState(0);

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-32">

      <h2 className="text-3xl font-semibold text-center mb-20">
        Enterprise AI Architecture
      </h2>

      <div className="relative grid md:grid-cols-4 gap-10">

        {nodes.map((node, i) => (

          <motion.div
            key={node.title}
            onMouseEnter={() => setActive(i)}
            whileHover={{ y: -6 }}
            className={`relative p-6 rounded-xl border cursor-pointer transition
            ${
              active === i
                ? "bg-blue-600/20 border-blue-400 shadow-[0_20px_60px_rgba(59,130,246,0.5)]"
                : "bg-neutral-900 border-neutral-800"
            }`}
          >

            <h3 className="font-semibold mb-3">
              {node.title}
            </h3>

            <p className="text-sm text-neutral-400">
              {node.description}
            </p>

          </motion.div>

        ))}

        {/* connection lines */}

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 300"
        >

          {[0,1,2].map((i) => (

            <motion.line
              key={i}
              x1={200 + i * 200}
              y1="150"
              x2={400 + i * 200}
              y2="150"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="8 8"
              animate={{
                strokeDashoffset: [0, -20]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />

          ))}

        </svg>

        {/* data particles */}

        {[0,1,2].map((i) => (

          <motion.div
            key={"particle" + i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${25 + i * 20}%`,
              top: "50%"
            }}
            animate={{
              x: [0, 200],
              opacity: [0,1,0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear"
            }}
          />

        ))}

      </div>

    </section>
  );
}