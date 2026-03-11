"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]"
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -60, 100, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "10%", left: "20%" }}
      />

      <motion.div
        className="absolute w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[160px]"
        animate={{
          x: [0, -150, 80, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ bottom: "10%", right: "20%" }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px]"
        animate={{
          x: [0, 60, -100, 0],
          y: [0, -80, 120, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "40%", left: "50%" }}
      />

    </div>
  );
}