"use client";

import { motion } from "framer-motion";

export default function HeroNetwork() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* moving gradient glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-blue-600/20 blur-[160px] rounded-full"
        animate={{
          x: [0, 200, -150, 0],
          y: [0, -120, 120, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[700px] h-[700px] bg-indigo-500/20 blur-[160px] rounded-full"
        animate={{
          x: [200, -200, 100, 200],
          y: [-100, 150, -120, -100],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
}