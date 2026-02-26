"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function CapabilityCard({
  title,
  description,
  icon,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm transition-all"
    >
      <div className="mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    </motion.div>
  );
}