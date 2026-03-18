"use client";

import { motion } from "framer-motion";

export default function GlobalAIAmbience() {

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* large drifting glow */}
      <motion.div
        className="absolute w-[900px] h-[900px] bg-blue-600/10 blur-[200px] rounded-full"
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -120, 80, 0]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ top: "-200px", left: "-200px" }}
      />

      <motion.div
        className="absolute w-[800px] h-[800px] bg-indigo-600/10 blur-[200px] rounded-full"
        animate={{
          x: [0, -200, 120, 0],
          y: [0, 150, -80, 0]
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ bottom: "-200px", right: "-200px" }}
      />

      {/* floating particles */}

      {[...Array(10)].map((_, i) => (

        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-blue-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

      ))}

    </div>
  );
}