"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "AI Strategy & Architecture",
    desc: "Designing enterprise AI platforms, governance frameworks, and scalable intelligence systems."
  },
  {
    title: "Data Platforms",
    desc: "Building governed, high-performance data foundations for analytics, machine learning, and AI."
  },
  {
    title: "Generative AI",
    desc: "Deploying enterprise copilots, AI assistants, and domain-specific generative applications."
  },
  {
    title: "AI Operations",
    desc: "Monitoring, securing, and scaling AI systems in production environments."
  }
];

export default function AICapabilities() {
  return (
    <section className="py-40 px-6 relative">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
            Capabilities
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Enterprise AI Capabilities
          </h2>
        </div>

        <div className="space-y-6">

          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative p-10 border border-white/10 rounded-xl bg-white/[0.02] backdrop-blur-sm overflow-hidden"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/5 blur-2xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-neutral-400 max-w-xl">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}