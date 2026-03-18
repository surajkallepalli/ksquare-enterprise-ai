"use client";

import { motion } from "framer-motion";
import ReadingProgress from "@/components/ReadingProgress";

export default function EnterpriseAITransformation() {
  return (
    <main className="bg-black text-white">
        <ReadingProgress />

      {/* ARTICLE HERO */}

      <section className="max-w-4xl mx-auto px-6 pt-40 pb-20">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold leading-tight"
        >
          AI Systems for Enterprise Transformation
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-6 leading-relaxed">
          Organizations across industries are deploying artificial
          intelligence platforms to transform operations, decision-making,
          and customer experiences. However, scaling AI across complex
          enterprise environments requires more than isolated models —
          it requires integrated AI systems.
        </p>

        <div className="mt-6 text-sm text-neutral-500">
          KSquare Insights • Enterprise AI
        </div>

      </section>


      {/* HERO IMAGE */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <img
          src="/assets/thought-leadership/ai-enterprise.png"
          className="rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
        />

      </section>


      {/* ARTICLE CONTENT */}

      <section className="max-w-3xl mx-auto px-6 pb-40 space-y-12 leading-relaxed">

        <div>

          <h2 className="text-2xl font-semibold mb-4">
            From isolated models to enterprise AI systems
          </h2>

          <p className="text-neutral-400">
            Many organizations begin their AI journey with individual
            machine learning models designed to solve specific problems.
            While these models can deliver incremental value, they rarely
            create the systemic transformation that enterprise leaders
            seek.
          </p>

          <p className="text-neutral-400 mt-4">
            True enterprise AI requires integrated systems that connect
            data platforms, machine learning pipelines, and operational
            workflows across the organization.
          </p>

        </div>


        <div>

          <h2 className="text-2xl font-semibold mb-4">
            The enterprise AI architecture
          </h2>

          <p className="text-neutral-400">
            Successful AI-driven organizations build layered platforms
            that combine enterprise infrastructure, data engineering,
            and machine learning capabilities.
          </p>

          <ul className="mt-4 space-y-2 text-neutral-400">
            <li>• Data platforms that unify enterprise data</li>
            <li>• Machine learning systems that operationalize intelligence</li>
            <li>• AI-driven applications that automate decisions</li>
          </ul>

        </div>


        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Scaling intelligence across the enterprise
          </h2>

          <p className="text-neutral-400">
            Organizations that successfully scale AI typically move
            through three stages:
          </p>

          <ul className="mt-4 space-y-2 text-neutral-400">
            <li>• Experimentation with individual models</li>
            <li>• Deployment of production machine learning systems</li>
            <li>• Enterprise-wide AI platforms powering operations</li>
          </ul>

          <p className="text-neutral-400 mt-4">
            The final stage enables organizations to embed intelligence
            directly into operational workflows.
          </p>

        </div>


        <div>

          <h2 className="text-2xl font-semibold mb-4">
            The future of intelligent enterprises
          </h2>

          <p className="text-neutral-400">
            As AI technologies continue to evolve, enterprises will move
            toward autonomous decision systems powered by data platforms,
            machine learning models, and AI agents.
          </p>

          <p className="text-neutral-400 mt-4">
            Organizations that build the foundational architecture today
            will be positioned to lead the next generation of intelligent
            industries.
          </p>

        </div>

      </section>

    </main>
  );
}