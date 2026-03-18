"use client";

import { motion } from "framer-motion";
import AIButton from "@/components/AIButton";
import AIArchitectureDiagram from "@/components/AIArchitectureDiagram";

export default function SolutionTemplate({
  title,
  subtitle,
  problem,
  capabilities,
}: {
  title: string;
  subtitle: string;
  problem: string;
  capabilities: string[];
}) {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-40 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-semibold leading-tight"
        >
          {title}
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-6 max-w-3xl mx-auto">
          {subtitle}
        </p>

      </section>

      {/* PROBLEM */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl font-semibold mb-6">
            The Challenge
          </h2>

          <p className="text-neutral-300 text-lg leading-relaxed">
            {problem}
          </p>
        </div>

        <div className="relative h-[320px] rounded-2xl bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center">

          <div className="absolute inset-0 blur-2xl bg-blue-500/20 rounded-2xl" />

          <span className="relative text-blue-400 text-4xl">✦</span>

        </div>

      </section>

      <AIArchitectureDiagram />

      {/* CAPABILITIES */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <h2 className="text-3xl font-semibold text-center mb-20">
          Core Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {capabilities.map((cap, i) => (

            <motion.div
              key={cap}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-8 hover:-translate-y-1 transition"
            >

              <h3 className="text-xl font-semibold mb-4">
                {cap}
              </h3>

              <p className="text-neutral-400">
                Enterprise-grade implementation designed to scale AI systems
                across complex data and infrastructure environments.
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* OUTCOMES */}

      <section className="max-w-6xl mx-auto px-6 py-32 text-center">

        <h2 className="text-3xl font-semibold mb-12">
          Business Outcomes
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            "Accelerated AI deployment",
            "Operational efficiency",
            "Data-driven decision making",
          ].map((item) => (

            <div
              key={item}
              className="p-8 border border-white/10 rounded-2xl bg-white/5"
            >
              <p className="text-lg">{item}</p>
            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-4xl mx-auto px-6 py-40 text-center">

        <h2 className="text-4xl font-semibold mb-6">
          Start your AI transformation
        </h2>

        <p className="text-neutral-400 mb-10">
          Partner with KSquare to design and deploy enterprise-grade AI
          systems that drive measurable outcomes.
        </p>

        <AIButton>
          Talk to an AI Architect
        </AIButton>

      </section>

    </main>
  );
}