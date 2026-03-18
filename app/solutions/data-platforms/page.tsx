"use client";

import { motion } from "framer-motion";

export default function DataPlatformsPage() {
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
          Enterprise Data Platforms
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          Modern enterprises require unified data platforms capable of powering
          analytics, AI systems, and real-time decision intelligence.
          KSquare designs scalable data architectures that transform fragmented
          enterprise data into strategic intelligence.
        </p>

      </section>


      {/* PROBLEM */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            The enterprise data challenge
          </h2>

          <p className="text-neutral-400 mb-6 leading-relaxed">
            Many organizations operate with fragmented data ecosystems spread
            across legacy systems, cloud platforms, and operational databases.
            These silos prevent organizations from building AI systems and
            real-time intelligence capabilities.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            KSquare architects unified data platforms that integrate enterprise
            data pipelines, governance frameworks, and scalable analytics
            environments designed to support modern AI-driven organizations.
          </p>

        </div>


        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8">

          <h3 className="text-xl font-semibold mb-4">
            Enterprise outcomes
          </h3>

          <ul className="space-y-3 text-neutral-400">
            <li>• Unified enterprise data architecture</li>
            <li>• Scalable analytics and AI-ready data infrastructure</li>
            <li>• Real-time data pipelines and streaming systems</li>
            <li>• Enterprise governance and security frameworks</li>
          </ul>

        </div>

      </section>


      {/* PLATFORM CAPABILITIES */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold mb-6">
            Data platform capabilities
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            Our data platforms combine scalable infrastructure, modern
            analytics technologies, and governance frameworks to power
            enterprise AI initiatives.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Lakehouse Architectures
            </h3>

            <p className="text-neutral-400">
              Modern data lakehouse platforms unify structured and unstructured
              data, enabling organizations to power analytics, AI, and business
              intelligence from a single platform.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Data Pipelines
            </h3>

            <p className="text-neutral-400">
              Automated ingestion pipelines integrate enterprise data sources
              across ERP, CRM, operational systems, and digital platforms.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Real-Time Data Systems
            </h3>

            <p className="text-neutral-400">
              Streaming architectures enable organizations to process and
              analyze data in real time, powering intelligent operational
              decision systems.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Data Governance
            </h3>

            <p className="text-neutral-400">
              Governance frameworks ensure data quality, compliance, security,
              and traceability across enterprise data ecosystems.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-40 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Build your enterprise data platform
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Partner with KSquare to design data platforms that power AI,
          analytics, and intelligent enterprise systems.
        </p>

        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
          Talk to a Data Architect
        </button>

      </section>

    </main>
  );
}