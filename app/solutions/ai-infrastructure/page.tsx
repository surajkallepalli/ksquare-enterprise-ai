"use client";

import { motion } from "framer-motion";
import AIArchitectureDiagram from "@/components/AIArchitectureDiagram";

export default function AIInfrastructurePage() {
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
          AI Infrastructure
          <br />
          for Enterprise Intelligence
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          We design scalable AI infrastructure that enables organizations
          to deploy machine learning, generative AI, and intelligent
          automation across mission-critical systems.
        </p>

      </section>



      {/* CHALLENGE */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            The enterprise AI infrastructure challenge
          </h2>

          <p className="text-neutral-400 leading-relaxed mb-6">
            Many organizations struggle to scale AI initiatives beyond isolated
            experiments. Fragmented data platforms, limited compute capacity,
            and disconnected ML workflows prevent AI systems from delivering
            meaningful enterprise impact.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            KSquare designs enterprise AI infrastructure that integrates data,
            compute, and model deployment into a unified architecture capable
            of supporting production-grade intelligence systems.
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 p-8 bg-neutral-900">

          <h3 className="text-xl font-semibold mb-4">
            Enterprise outcomes
          </h3>

          <ul className="space-y-3 text-neutral-400">
            <li>• Scalable GPU and cloud compute platforms</li>
            <li>• Production-grade ML and AI deployment pipelines</li>
            <li>• Secure enterprise data integration</li>
            <li>• Real-time intelligence and decision systems</li>
          </ul>

        </div>

      </section>



      {/* ARCHITECTURE */}

      <section className="max-w-7xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold mb-6">
            Enterprise AI architecture
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            Our architecture integrates enterprise data platforms, AI
            intelligence systems, and operational workflows to deliver
            scalable intelligent systems.
          </p>

        </div>

        <AIArchitectureDiagram />

      </section>



      {/* CAPABILITIES */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Compute Infrastructure
            </h3>

            <p className="text-neutral-400">
              GPU clusters, cloud compute environments, and distributed
              architectures capable of supporting large-scale AI workloads.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              AI Deployment Platforms
            </h3>

            <p className="text-neutral-400">
              End-to-end platforms for training, deploying, monitoring,
              and governing machine learning and generative AI models.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Data Infrastructure
            </h3>

            <p className="text-neutral-400">
              Lakehouse architectures, streaming pipelines, and enterprise
              data platforms designed to power AI-driven decision systems.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Enterprise Integration
            </h3>

            <p className="text-neutral-400">
              Secure integration with ERP, CRM, and operational systems to
              embed AI capabilities directly into business processes.
            </p>
          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="text-center py-40 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Build your enterprise AI platform
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Partner with KSquare to design scalable AI infrastructure that
          transforms data into intelligent enterprise systems.
        </p>

        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
          Start a Conversation
        </button>

      </section>

    </main>
  );
}