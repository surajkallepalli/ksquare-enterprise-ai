"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const insights = [
  {
    title: "AI Systems for Enterprise Transformation",
    description:
      "How organizations are deploying AI platforms that reshape operations and decision systems.",
    image: "/assets/thought-leadership/ai-enterprise.png",
    href: "/insights/enterprise-ai-transformation",
  },
  {
    title: "The Rise of Enterprise AI Agents",
    description:
      "Autonomous agents are redefining enterprise workflows and decision automation.",
    image: "/assets/thought-leadership/generative-ai.png",
    href: "/insights/enterprise-ai-agents",
  },
  {
    title: "Building Responsible AI Systems",
    description:
      "Balancing innovation with governance, transparency, and responsible AI deployment.",
    image: "/assets/thought-leadership/ethical-ai.png",
    href: "/insights/responsible-ai-systems",
  },
];

export default function InsightsPage() {
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
          Insights
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          Perspectives on enterprise AI, data platforms, and intelligent
          systems from the KSquare engineering and strategy teams.
        </p>

      </section>


      {/* INSIGHTS GRID */}

      <section className="max-w-7xl mx-auto px-6 pb-40">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {insights.map((post, index) => (

            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >

              {/* Image */}

              <div className="relative h-56 overflow-hidden">

                <img
                  src={post.image}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {post.title}
                </h3>

                <p className="text-neutral-400 text-sm mb-6">
                  {post.description}
                </p>

                <Link
                  href={post.href}
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Read Insight →
                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </main>
  );
}