"use client";

import { motion } from "framer-motion";

export default function AIButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      className="group relative cursor-pointer px-10 py-5 rounded-xl font-semibold text-lg overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_20px_80px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_30px_120px_rgba(59,130,246,0.8)]"
    >
      {/* shimmer layer */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition duration-300" />

      {/* glow layer */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400 to-indigo-400 blur-xl transition duration-500" />

      {/* content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}