"use client";

import { motion } from "framer-motion";
import AIButton from "@/components/AIButton";
import AIArchitectureDiagram from "@/components/AIArchitectureDiagram";

export default function CaseStudyTemplate({
  title,
  subtitle,
  challenge,
  solution,
  outcomes
}: {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  outcomes: string[];
}) {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-40 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-semibold leading-tight"
        >
          {title}
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-6 max-w-3xl mx-auto">
          {subtitle}
        </p>

      </section>

      {/* METRICS */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-8 text-center">

          {outcomes.map((metric) => (

            <div
              key={metric}
              className="p-8 rounded-2xl border border-white/10 bg-neutral-900"
            >
              <p className="text-3xl font-semibold text-blue-400">
                {metric}
              </p>

              <p className="text-neutral-400 mt-3 text-sm">
                Business Impact
              </p>
            </div>

          ))}

        </div>

      </section>

      {/* CHALLENGE */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl font-semibold mb-6">
            The Challenge
          </h2>

          <p className="text-neutral-300 text-lg leading-relaxed">
            {challenge}
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-10">

          <h3 className="text-xl font-semibold mb-4">
            Implementation Approach
          </h3>

          <p className="text-neutral-400">
            {solution}
          </p>

        </div>

      </section>

      {/* ARCHITECTURE */}

      <AIArchitectureDiagram />

      {/* IMPLEMENTATION TIMELINE */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <h2 className="text-3xl font-semibold text-center mb-16">
          Implementation Journey
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          {[
            "Discovery & Assessment",
            "Platform Architecture",
            "AI Model Deployment",
            "Enterprise Integration"
          ].map((step) => (

            <div
              key={step}
              className="p-6 rounded-xl border border-white/10 bg-neutral-900"
            >

              <div className="w-10 h-10 rounded-full bg-blue-500/20 mx-auto mb-4 flex items-center justify-center">
                ✓
              </div>

              <p className="text-neutral-300 text-sm">
                {step}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* TESTIMONIAL */}

      <section className="max-w-4xl mx-auto px-6 py-32 text-center">

        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-12">

          <p className="text-2xl leading-relaxed text-neutral-200">
            “KSquare helped us unify enterprise data infrastructure and deploy
            AI intelligence across our organization.”
          </p>

          <p className="text-neutral-400 mt-6">
            Bank of St Lucia
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-4xl mx-auto px-6 py-40 text-center">

        <h2 className="text-4xl font-semibold mb-6">
          Build your AI transformation
        </h2>

        <p className="text-neutral-400 mb-10">
          Partner with KSquare to design and deploy enterprise AI platforms
          that deliver measurable outcomes.
        </p>

        <AIButton>
          Talk to an AI Architect
        </AIButton>

      </section>

    </main>
  );
}