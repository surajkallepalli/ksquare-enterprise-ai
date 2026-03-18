"use client";

import { motion } from "framer-motion";

export default function ManufacturingPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-40 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-semibold leading-tight"
        >
          AI for Manufacturing
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          Manufacturing leaders are deploying AI systems to optimize production,
          improve supply chain resilience, and enable predictive operations.
          KSquare helps manufacturers design intelligent platforms that
          transform data into operational advantage.
        </p>

      </section>


      {/* INDUSTRY CHALLENGE */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            The intelligent manufacturing opportunity
          </h2>

          <p className="text-neutral-400 mb-6 leading-relaxed">
            Modern manufacturing operations generate enormous volumes of
            operational data across production lines, equipment sensors,
            supply chains, and enterprise systems.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            However, much of this data remains underutilized. By deploying
            AI-driven platforms, manufacturers can transform raw operational
            data into predictive intelligence that improves efficiency,
            reduces downtime, and strengthens supply chain performance.
          </p>

        </div>


        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8">

          <h3 className="text-xl font-semibold mb-4">
            Transformation outcomes
          </h3>

          <ul className="space-y-3 text-neutral-400">
            <li>• Predictive maintenance for critical equipment</li>
            <li>• AI-powered demand forecasting</li>
            <li>• Supply chain optimization</li>
            <li>• Automated quality inspection</li>
          </ul>

        </div>

      </section>


      {/* AI CAPABILITIES */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold mb-6">
            Manufacturing AI capabilities
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            KSquare helps manufacturing organizations deploy AI systems
            across production, logistics, and operational decision-making.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Predictive Maintenance
            </h3>

            <p className="text-neutral-400">
              Machine learning models analyze equipment telemetry and
              sensor data to predict failures before they occur,
              reducing downtime and maintenance costs.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Supply Chain Intelligence
            </h3>

            <p className="text-neutral-400">
              AI-driven forecasting and logistics optimization platforms
              enable manufacturers to improve inventory management and
              supply chain resilience.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Quality Inspection
            </h3>

            <p className="text-neutral-400">
              Computer vision systems detect product defects and anomalies
              across manufacturing lines with greater accuracy and speed
              than manual inspection processes.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Production Optimization
            </h3>

            <p className="text-neutral-400">
              AI-driven operational intelligence platforms optimize
              production planning, scheduling, and resource allocation
              across manufacturing facilities.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-40 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Build the intelligent factory
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Partner with KSquare to deploy AI platforms that transform
          manufacturing operations and unlock operational intelligence.
        </p>

        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
          Start an Industry Conversation
        </button>

      </section>

    </main>
  );
}