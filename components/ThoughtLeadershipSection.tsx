"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const insights = [
  {
    title: "AI in Enterprise Data",
    description: "How AI drives efficiency across large-scale data operations.",
  },
  {
    title: "Customer Intelligence Platforms",
    description: "Leveraging AI to gain real-time customer insights.",
  },
  {
    title: "Automation & Workflow Optimization",
    description: "Streamlining business processes using predictive AI models.",
  },
];

export default function ThoughtLeadershipSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setScrollY(rect.top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative" ref={sectionRef}>
      {/* Rotating & Parallax Blobs */}
      <motion.div
        style={{ y: scrollY * 0.05 }}
        className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-600/50 rounded-full blur-3xl animate-slow-rotate z-0"
      ></motion.div>
      <motion.div
        style={{ y: scrollY * -0.05 }}
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/50 rounded-full blur-3xl animate-slow-rotate-reverse z-0"
      ></motion.div>

      {/* Section Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Thought Leadership</h2>
        <p className="text-neutral-300 text-lg max-w-3xl mx-auto mb-16">
          Explore our perspectives and insights on AI innovation across industries, shaping the future of enterprise intelligence.
        </p>

        {/* Insights Cards with slight parallax */}
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{ y: scrollY * (0.02 * (index + 1)) }}
              className="bg-neutral-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <h3 className="font-semibold text-xl text-white mb-2">{item.title}</h3>
              <p className="text-neutral-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <button className="mt-12 px-8 py-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 transition">
          View All Insights
        </button>
      </div>
    </div>
  );
}