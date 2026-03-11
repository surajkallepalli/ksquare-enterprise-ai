"use client";

import { motion } from "framer-motion";

const logos = [
  { src: "/assets/logos/aws.png", alt: "AWS" },
  { src: "/assets/logos/nvidia.png", alt: "NVIDIA" },
  { src: "/assets/logos/salesforce.png", alt: "Salesforce" },
  { src: "/assets/logos/microsoft.png", alt: "Microsoft" },
];

const floatingDots = [
  { size: 20, top: "10%", left: "15%", color: "bg-blue-500/40" },
  { size: 30, top: "30%", left: "70%", color: "bg-indigo-500/30" },
  { size: 15, top: "60%", left: "25%", color: "bg-purple-500/30" },
  { size: 25, top: "75%", left: "60%", color: "bg-blue-400/30" },
  { size: 18, top: "50%", left: "50%", color: "bg-indigo-400/25" },
];

export default function TechEcosystem() {
  return (
    <section className="relative py-32 px-6 text-center overflow-hidden bg-black">
      {/* Floating background dots */}
      {floatingDots.map((dot, idx) => (
        <motion.div
          key={idx}
          className={`absolute rounded-full ${dot.color}`}
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.top,
            left: dot.left,
            filter: "blur(20px)",
          }}
          animate={{
            y: ["0%", "10%", "0%"],
            x: ["0%", "10%", "0%"],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 8 + idx, // each dot moves at a slightly different speed
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* Gradient glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-purple-600/5 blur-3xl z-0"></div>

      {/* Section Content */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          Technology Ecosystem
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Built on the world's leading platforms
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-20 items-center mt-12">
{logos.map((logo, index) => (
  <motion.div
    key={index}
    whileHover={{ scale: 1.08, y: -6 }}
    transition={{ type: "spring", stiffness: 120 }}
    className="group flex items-center justify-center"
  >
    <div className="relative flex items-center justify-center px-8 py-6 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm transition duration-500 group-hover:border-blue-400/40 group-hover:bg-white/[0.04]">

      <img
        src={logo.src}
        alt={logo.alt}
        className="h-8 opacity-70 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
      />

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/5 blur-xl"></div>

    </div>
  </motion.div>
))}
        </div>
      </div>
    </section>
  );
}