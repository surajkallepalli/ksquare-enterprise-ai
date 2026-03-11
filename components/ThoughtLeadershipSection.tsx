"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "AI in Enterprise Data",
    description: "How AI drives efficiency across large-scale data operations.",
    imgSrc: "/assets/thought-leadership/ai-enterprise.png",
  },
  {
    title: "Customer Intelligence Platforms",
    description: "Leveraging AI to gain real-time customer insights.",
    imgSrc: "/assets/thought-leadership/generative-ai.png",
  },
  {
    title: "Automation & Workflow Optimization",
    description: "Streamlining business processes using predictive AI models.",
    imgSrc: "/assets/thought-leadership/ethical-ai.png",
  },
];

export default function ThoughtLeadershipSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32">
      {/* Background Parallax Blobs */}
      <motion.div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-600/50 rounded-full blur-3xl animate-slow-rotate z-0"></motion.div>
      <motion.div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/50 rounded-full blur-3xl animate-slow-rotate-reverse z-0"></motion.div>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
          Thought Leadership
        </h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
          Explore our perspectives and insights on AI innovation across industries, shaping the future of enterprise intelligence.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-12 relative z-10">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-neutral-900 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
          >
            <div className="w-full h-56 md:h-60 overflow-hidden">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-full object-cover rounded-t-3xl transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-6 text-white space-y-2">
              <h3 className="text-2xl font-semibold">{card.title}</h3>
              <p className="text-neutral-300 text-sm">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative z-10 text-center mt-12">
        <button className="px-8 py-4 bg-blue-600 rounded-xl font-semibold hover:bg-blue-500 transition shadow-lg">
          View All Insights
        </button>
      </div>
    </section>
  );
}