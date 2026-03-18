"use client";

import { motion } from "framer-motion";

export default function ImplementationPage() {
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
          AI Platform Implementation
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          KSquare helps organizations deploy enterprise AI platforms,
          data infrastructure, and intelligent applications that
          transform strategy into operational capability.
        </p>

      </section>


      {/* IMPLEMENTATION OVERVIEW */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            From architecture to production systems
          </h2>

          <p className="text-neutral-400 mb-6 leading-relaxed">
            Implementing AI systems requires integrating multiple layers
            of infrastructure, data pipelines, and machine learning
            platforms across complex enterprise environments.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            KSquare engineers scalable AI platforms that connect
            enterprise systems, data environments, and machine learning
            workflows into production-ready intelligence platforms.
          </p>

        </div>


        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8">

          <h3 className="text-xl font-semibold mb-4">
            Implementation outcomes
          </h3>

          <ul className="space-y-3 text-neutral-400">
            <li>• Enterprise data platforms and pipelines</li>
            <li>• Machine learning production systems</li>
            <li>• AI application development</li>
            <li>• Intelligent automation platforms</li>
          </ul>

        </div>

      </section>


      {/* IMPLEMENTATION CAPABILITIES */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold mb-6">
            Implementation capabilities
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            KSquare deploys enterprise-grade AI systems that integrate
            infrastructure, data, and machine learning platforms.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              AI Infrastructure Deployment
            </h3>

            <p className="text-neutral-400">
              Build scalable compute environments including GPU
              clusters, model serving infrastructure, and distributed
              AI systems.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Data Platform Engineering
            </h3>

            <p className="text-neutral-400">
              Deploy lakehouse architectures, real-time data pipelines,
              and enterprise data platforms that power AI systems.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Machine Learning Systems
            </h3>

            <p className="text-neutral-400">
              Implement MLOps platforms, model training pipelines,
              experiment tracking, and production model deployment.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Intelligent Applications
            </h3>

            <p className="text-neutral-400">
              Build AI-driven applications including automation
              platforms, decision intelligence systems, and
              enterprise copilots.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-40 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Deploy enterprise AI systems
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Partner with KSquare to design and implement AI platforms
          that scale across your organization.
        </p>

        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
          Start an Implementation Project
        </button>

      </section>

    </main>
  );
}