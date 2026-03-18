"use client";

import { motion } from "framer-motion";

export default function CompanyPage() {
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
          Building intelligent enterprises
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          KSquare helps organizations design, deploy, and scale enterprise
          AI systems that transform data into operational intelligence.
          We partner with forward-thinking companies to build the
          platforms that power the next generation of intelligent
          enterprises.
        </p>

      </section>


      {/* COMPANY STORY */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Our mission
          </h2>

          <p className="text-neutral-400 mb-6 leading-relaxed">
            Artificial intelligence is transforming every industry,
            yet many organizations struggle to operationalize AI
            within complex enterprise environments.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            KSquare was founded to bridge this gap by helping
            enterprises build the infrastructure, data platforms,
            and machine learning systems required to deploy AI
            at scale.
          </p>

        </div>


        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-10">

          <h3 className="text-xl font-semibold mb-6">
            What we focus on
          </h3>

          <ul className="space-y-4 text-neutral-400">
            <li>• Enterprise AI architecture</li>
            <li>• Data platform engineering</li>
            <li>• Machine learning systems</li>
            <li>• Intelligent automation</li>
          </ul>

        </div>

      </section>


      {/* VALUES */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold mb-6">
            Our approach
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            We combine deep engineering expertise with enterprise
            transformation experience to deliver scalable AI systems.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-12">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Engineering First
            </h3>

            <p className="text-neutral-400">
              Our teams focus on building real systems — not just
              strategies — that operate in production environments.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Enterprise Scale
            </h3>

            <p className="text-neutral-400">
              We design platforms capable of supporting large
              organizations with complex infrastructure and
              operational demands.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Responsible AI
            </h3>

            <p className="text-neutral-400">
              Governance, transparency, and reliability are core
              principles in every AI system we deploy.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-40 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Partner with KSquare
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Work with a team dedicated to building enterprise
          AI systems that deliver measurable transformation.
        </p>

        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
          Start a Conversation
        </button>

      </section>

    </main>
  );
}