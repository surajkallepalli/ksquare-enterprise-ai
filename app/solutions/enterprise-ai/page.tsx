"use client";

import { motion } from "framer-motion";

export default function EnterpriseAIPage() {
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
          Enterprise AI Systems
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          Artificial intelligence is transforming how organizations make
          decisions, automate operations, and deliver customer value.
          KSquare designs enterprise AI systems that embed intelligence
          directly into business processes and digital platforms.
        </p>

      </section>


      {/* CHALLENGE */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Moving beyond AI experiments
          </h2>

          <p className="text-neutral-400 mb-6 leading-relaxed">
            Many organizations have invested heavily in AI pilots and
            experimentation, yet struggle to scale those initiatives
            into production systems that drive measurable business impact.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            KSquare works with enterprise leaders to design AI platforms
            that integrate predictive models, generative AI systems, and
            intelligent automation directly into operational workflows.
          </p>

        </div>


        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8">

          <h3 className="text-xl font-semibold mb-4">
            Enterprise outcomes
          </h3>

          <ul className="space-y-3 text-neutral-400">
            <li>• AI-driven decision intelligence</li>
            <li>• Predictive operations and forecasting</li>
            <li>• AI copilots for employees and customers</li>
            <li>• Real-time enterprise insights</li>
          </ul>

        </div>

      </section>


      {/* AI CAPABILITIES */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold mb-6">
            Enterprise AI capabilities
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            Our enterprise AI platforms combine advanced machine learning,
            generative AI, and decision intelligence systems designed to
            operate across enterprise environments.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Predictive Intelligence
            </h3>

            <p className="text-neutral-400">
              Machine learning models that forecast demand, optimize supply
              chains, detect anomalies, and power intelligent operational
              decision systems.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Generative AI Platforms
            </h3>

            <p className="text-neutral-400">
              Enterprise-grade generative AI systems that support research,
              knowledge discovery, and intelligent document workflows.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              AI Copilots
            </h3>

            <p className="text-neutral-400">
              AI copilots assist employees, analysts, and executives with
              insights, automation, and real-time intelligence across
              enterprise systems.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Decision Intelligence
            </h3>

            <p className="text-neutral-400">
              AI systems integrated into enterprise workflows that support
              real-time decisions across operations, finance, and customer
              engagement.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-40 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Deploy AI across your enterprise
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          KSquare partners with organizations to design and implement
          enterprise AI platforms that transform how businesses operate.
        </p>

        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
          Speak with an AI Architect
        </button>

      </section>

    </main>
  );
}