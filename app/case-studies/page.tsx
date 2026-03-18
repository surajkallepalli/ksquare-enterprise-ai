"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "AI-Driven Supply Chain Optimization",
    description:
      "Predictive AI models that improved forecasting accuracy and reduced operational costs.",
    href: "/case-studies/ai-supply-chain",
    image: "/assets/case-studies/AI-Driven Supply Chain.png",
  },
  {
    title: "Intelligent Customer Insights Platform",
    description:
      "Unified AI platform delivering real-time customer intelligence and retention insights.",
    href: "/case-studies/customer-insights",
    image: "/assets/case-studies/Customer-Insights.png",
  },
  {
    title: "AI-Powered Supply Chain Insights",
    description:
      "Predictive analytics platform improving supply chain visibility and operational decisions.",
    href: "/case-studies/supply-chain-insights",
    image: "/assets/case-studies/Supply-Chain-Insights.png",
  },
];

export default function CaseStudiesPage() {
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
          Enterprise AI Case Studies
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-6 max-w-3xl mx-auto">
          Real-world deployments of enterprise AI systems that drive measurable
          operational and strategic outcomes.
        </p>

      </section>

      {/* CASE STUDY GRID */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-10">

          {caseStudies.map((study, i) => (

            <motion.a
              key={study.title}
              href={study.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer"
            >

              {/* image */}

              <div className="relative h-56 overflow-hidden">

                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* content */}

              <div className="p-8">

                <h3 className="text-xl font-semibold mb-3">
                  {study.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed">
                  {study.description}
                </p>

                <div className="mt-6 text-blue-400 group-hover:text-blue-300 font-medium">
                  Read Case Study →
                </div>

              </div>

              {/* hover glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

            </motion.a>

          ))}

        </div>

      </section>

    </main>
  );
}