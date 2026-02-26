"use client";

import { motion } from "framer-motion";

export default function AIBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl"
        animate={{ x: [0, 200, -200, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
    </div>
  );
}