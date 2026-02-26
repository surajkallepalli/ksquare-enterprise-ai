"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden bg-neutral-950 text-white">
      
      {/* Blue ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.25),transparent_40%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-semibold leading-tight mb-6"
        >
          Architecting{" "}
          <span className="text-blue-500">Intelligent</span>{" "}
          Enterprise Systems
        </motion.h1>

        {/* Accent bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-1 bg-blue-500 mx-auto mb-8 rounded"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          KSquare delivers enterprise transformation across cloud, data, and AI —
          embedding intelligence into operating models, platforms, and governance
          to enable scalable, future-ready organizations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          <a
            href="/contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            Engage With Us
          </a>

          <a
            href="/ai-strategy-transformation"
            className="px-8 py-3 border border-blue-500 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Explore AI Strategy
          </a>
        </motion.div>

      </div>
    </section>
  );
}