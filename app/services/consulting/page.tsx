"use client";

import { motion } from "framer-motion";

export default function ConsultingPage() {
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
          AI Transformation Consulting
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          KSquare partners with enterprise leaders to design AI strategies,
          architect intelligent platforms, and build the operational
          foundations required to deploy AI at scale.
        </p>

      </section>


      {/* CONSULTING OVERVIEW */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Turning AI ambition into enterprise capability
          </h2>

          <p className="text-neutral-400 mb-6 leading-relaxed">
            Many organizations recognize the potential of artificial
            intelligence but struggle to operationalize it across
            complex enterprise environments.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            KSquare helps organizations bridge this gap by aligning
            AI strategy with enterprise data platforms, infrastructure,
            and operational processes.
          </p>

        </div>


        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8">

          <h3 className="text-xl font-semibold mb-4">
            Engagement outcomes
          </h3>

          <ul className="space-y-3 text-neutral-400">
            <li>• Enterprise AI strategy and roadmap</li>
            <li>• Data and AI platform architecture</li>
            <li>• AI governance and operating model</li>
            <li>• Transformation execution plans</li>
          </ul>

        </div>

      </section>


      {/* CONSULTING APPROACH */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold mb-6">
            Our consulting approach
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            KSquare works alongside enterprise teams to design,
            architect, and operationalize AI transformation programs.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-12">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Discovery
            </h3>

            <p className="text-neutral-400">
              Assess enterprise data ecosystems, technology
              infrastructure, and AI opportunities across
              business functions.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Strategy
            </h3>

            <p className="text-neutral-400">
              Design an AI transformation roadmap aligned
              with enterprise priorities, operational needs,
              and measurable outcomes.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Architecture
            </h3>

            <p className="text-neutral-400">
              Architect scalable AI platforms integrating
              data pipelines, machine learning systems,
              and enterprise infrastructure.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-40 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Start your AI transformation journey
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Work with KSquare to define your enterprise AI strategy and
          build the platforms required to scale intelligent systems.
        </p>

        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
          Schedule a Strategy Conversation
        </button>

      </section>

    </main>
  );
}