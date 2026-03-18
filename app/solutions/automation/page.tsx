"use client";

import { motion } from "framer-motion";

export default function IntelligentAutomationPage() {
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
          Intelligent Automation
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          Intelligent automation combines artificial intelligence,
          data platforms, and enterprise workflows to automate complex
          decision-making processes across organizations.
        </p>

      </section>


      {/* PROBLEM */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Automating enterprise complexity
          </h2>

          <p className="text-neutral-400 mb-6 leading-relaxed">
            Many enterprise processes still rely on manual decision-making,
            fragmented workflows, and disconnected systems. These inefficiencies
            slow down operations and limit the ability to scale innovation.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            KSquare designs intelligent automation platforms that integrate AI,
            predictive models, and enterprise systems to streamline operations
            and enable organizations to operate at digital speed.
          </p>

        </div>


        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8">

          <h3 className="text-xl font-semibold mb-4">
            Enterprise outcomes
          </h3>

          <ul className="space-y-3 text-neutral-400">
            <li>• Automated decision workflows</li>
            <li>• AI-powered operational systems</li>
            <li>• Intelligent process orchestration</li>
            <li>• Scalable enterprise automation platforms</li>
          </ul>

        </div>

      </section>


      {/* AUTOMATION CAPABILITIES */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold mb-6">
            Automation capabilities
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            Our intelligent automation systems combine AI models,
            workflow orchestration, and enterprise platforms to create
            scalable operational intelligence.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              AI Workflow Automation
            </h3>

            <p className="text-neutral-400">
              AI-driven workflows automate complex enterprise processes
              across operations, finance, customer service, and supply
              chain management.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Decision Automation
            </h3>

            <p className="text-neutral-400">
              Predictive models and decision engines enable organizations
              to automate operational decisions while maintaining oversight
              and governance.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Intelligent Process Orchestration
            </h3>

            <p className="text-neutral-400">
              Enterprise orchestration platforms coordinate AI systems,
              data pipelines, and operational applications into cohesive
              automated workflows.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              AI Agent Systems
            </h3>

            <p className="text-neutral-400">
              Autonomous AI agents can execute tasks, analyze data,
              interact with systems, and assist teams across enterprise
              environments.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-40 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Automate enterprise intelligence
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          KSquare helps organizations design intelligent automation
          platforms that streamline operations and unlock scalable
          digital transformation.
        </p>

        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
          Start an Automation Strategy
        </button>

      </section>

    </main>
  );
}