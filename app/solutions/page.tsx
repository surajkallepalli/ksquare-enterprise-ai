"use client";

import { motion } from "framer-motion";
import AIButton from "@/components/AIButton";

const solutions = [
  {
    title: "AI Infrastructure",
    description:
      "Scalable compute platforms and AI infrastructure designed for enterprise environments.",
    href: "/solutions/ai-infrastructure",
  },
  {
    title: "Data Platforms",
    description:
      "Modern data architectures that unify enterprise data for analytics and AI.",
    href: "/solutions/data-platforms",
  },
  {
    title: "Enterprise AI Systems",
    description:
      "AI solutions embedded across business operations and decision systems.",
    href: "/solutions/enterprise-ai",
  },
  {
    title: "Intelligent Automation",
    description:
      "Agent-driven automation platforms that transform enterprise workflows.",
    href: "/solutions/automation",
  },
];

export default function SolutionsPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* Background glow */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 blur-[180px]"></div>

        <div className="absolute top-[40%] left-[10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[180px]"></div>

        <div className="absolute bottom-[-200px] right-[10%] w-[700px] h-[700px] bg-violet-600/10 blur-[180px]"></div>

      </div>

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-40 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-semibold leading-tight"
        >
          Enterprise AI Solutions
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-6 max-w-3xl mx-auto">
          Architect, deploy, and scale AI platforms that transform enterprise
          operations across infrastructure, data, and intelligence systems.
        </p>

      </section>

      {/* SOLUTIONS GRID */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-12">

          {solutions.map((solution, i) => (

            <motion.a
              key={solution.title}
              href={solution.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 p-12 cursor-pointer"
            >

              {/* glow effect */}

              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

              {/* content */}

              <div className="relative z-10">

                <h2 className="text-3xl font-semibold mb-4">
                  {solution.title}
                </h2>

                <p className="text-neutral-400 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mt-8 text-blue-400 group-hover:text-blue-300 font-medium">
                  Explore Solution →
                </div>

              </div>

            </motion.a>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-4xl mx-auto px-6 py-40 text-center">

        <h2 className="text-4xl font-semibold mb-6">
          Build your AI platform
        </h2>

        <p className="text-neutral-400 mb-10">
          Partner with KSquare to design and deploy enterprise AI systems
          that deliver measurable transformation.
        </p>

        <AIButton>
          Talk to an AI Architect
        </AIButton>

      </section>

    </main>
  );
}