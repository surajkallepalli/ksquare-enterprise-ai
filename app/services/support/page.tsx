"use client";

import { motion } from "framer-motion";

export default function SupportPage() {
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
          AI Platform Support & Operations
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          Deploying AI is only the beginning. KSquare provides continuous
          operational support to monitor, maintain, and evolve enterprise
          AI platforms as they scale across the organization.
        </p>

      </section>


      {/* SUPPORT OVERVIEW */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Operating enterprise AI systems
          </h2>

          <p className="text-neutral-400 mb-6 leading-relaxed">
            AI platforms operate across complex infrastructure,
            data pipelines, and machine learning systems. Maintaining
            these environments requires ongoing monitoring,
            optimization, and lifecycle management.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            KSquare provides operational support to ensure AI systems
            remain reliable, performant, and aligned with evolving
            business needs.
          </p>

        </div>


        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8">

          <h3 className="text-xl font-semibold mb-4">
            Support outcomes
          </h3>

          <ul className="space-y-3 text-neutral-400">
            <li>• Continuous AI platform monitoring</li>
            <li>• Model lifecycle management</li>
            <li>• Infrastructure optimization</li>
            <li>• AI performance improvement</li>
          </ul>

        </div>

      </section>


      {/* SUPPORT CAPABILITIES */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold mb-6">
            Operational capabilities
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            KSquare helps organizations operate AI systems with
            enterprise-grade monitoring, governance, and lifecycle
            management.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              AI Platform Monitoring
            </h3>

            <p className="text-neutral-400">
              Monitor infrastructure performance, model behavior,
              and data pipelines to ensure reliability and
              operational stability.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Model Lifecycle Management
            </h3>

            <p className="text-neutral-400">
              Manage model retraining, version control, and
              performance tracking to maintain model accuracy
              over time.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Infrastructure Optimization
            </h3>

            <p className="text-neutral-400">
              Continuously optimize compute environments,
              data pipelines, and AI workloads to improve
              efficiency and reduce operational cost.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              AI Governance
            </h3>

            <p className="text-neutral-400">
              Implement governance frameworks that ensure
              transparency, compliance, and responsible
              AI operations across the enterprise.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-40 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Scale AI with confidence
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Partner with KSquare to operate and optimize enterprise
          AI platforms that evolve with your organization.
        </p>

        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
          Start an AI Operations Program
        </button>

      </section>

    </main>
  );
}