"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "AI Strategy & Transformation",
    description:
      "Enterprise AI roadmaps, operating model redesign, and value-led transformation frameworks."
  },
  {
    title: "Intelligent Platforms & Engineering",
    description:
      "Modern data platforms, AI model deployment, and scalable cloud-native architecture."
  },
  {
    title: "Operational Scale & Governance",
    description:
      "AI governance, compliance frameworks, and enterprise performance management."
  },
  {
    title: "Enterprise Application Transformation",
    description:
      "Salesforce-led modernization across Revenue Cloud, Service Cloud, and industry ecosystems."
  }
];

export default function Pillars() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold mb-16"
        >
          Our Strategic Pillars
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-10 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {pillar.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
