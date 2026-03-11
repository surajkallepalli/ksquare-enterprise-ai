"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function AmbientAIGrid() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 2000], [0, -120]);

  return (
    <motion.div
      style={{ y }}
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden"
    >
      {/* grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
        `,
          backgroundSize: "80px 80px"
        }}
      />

      {/* soft AI glow */}
      <div className="absolute top-[20%] left-[30%] w-[600px] h-[600px] bg-blue-600/10 blur-[180px]" />
      <div className="absolute bottom-[10%] right-[20%] w-[700px] h-[700px] bg-indigo-600/10 blur-[200px]" />

      {/* floating light nodes */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-[30%] left-[20%] w-2 h-2 bg-blue-400 rounded-full blur-[2px] opacity-70"
      />

      <motion.div
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute top-[60%] left-[70%] w-2 h-2 bg-indigo-400 rounded-full blur-[2px] opacity-70"
      />

      <motion.div
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute top-[50%] left-[40%] w-2 h-2 bg-purple-400 rounded-full blur-[2px] opacity-70"
      />
    </motion.div>
  );
}