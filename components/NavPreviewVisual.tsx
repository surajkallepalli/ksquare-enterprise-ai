"use client";

import { motion } from "framer-motion";

export default function NavPreviewVisual({ type }: { type: string }) {

  if (type === "AI Infrastructure") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-blue-400 rounded-full absolute"
            style={{ left: `${20 + i * 15}%` }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}

      </div>
    );
  }

  if (type === "Data Platforms") {
    return (
      <div className="flex flex-col gap-2 w-full items-center">

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="h-[3px] bg-blue-400 rounded"
            style={{ width: `${60 + i * 10}px` }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}

      </div>
    );
  }

  if (type === "Enterprise AI") {
    return (
      <motion.div
        className="w-16 h-16 rounded-full border border-blue-400 flex items-center justify-center"
        animate={{
          boxShadow: [
            "0 0 10px rgba(59,130,246,0.3)",
            "0 0 30px rgba(59,130,246,0.9)",
            "0 0 10px rgba(59,130,246,0.3)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        AI
      </motion.div>
    );
  }

  if (type === "Intelligent Automation") {
    return (
      <div className="flex gap-2">

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-indigo-400 rounded-full"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}

      </div>
    );
  }

  return (
    <div className="text-blue-400 text-4xl">✦</div>
  );
}