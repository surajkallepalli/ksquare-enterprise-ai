"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-black text-white">

      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-indigo-950"></div>

      {/* Animated AI light orb */}
      <motion.div
        className="absolute w-[900px] h-[900px] bg-blue-600 rounded-full blur-[200px] opacity-30"
        animate={{
          x: [0, 120, -120, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Noise overlay (add noise.png in /public folder) */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-25 mix-blend-overlay pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-semibold leading-tight mb-6"
        >
          Building <span className="text-blue-400">AI-Driven</span> Enterprises
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-neutral-300 mb-10 leading-relaxed"
        >
          KSquare integrates artificial intelligence across Salesforce,
          cloud platforms, and enterprise ecosystems to accelerate
          measurable transformation.
        </motion.p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="/ai-strategy-transformation"
            className="px-8 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            Explore AI Strategy
          </a>

          <a
            href="/salesforce-transformation"
            className="px-8 py-3 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition"
          >
            Salesforce Transformation
          </a>
        </div>

      </div>
    </section>
  );
}