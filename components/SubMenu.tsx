"use client";

import { motion } from "framer-motion";

export default function SubMenu({ title }: { title: string }) {
  return (
    <motion.li
      whileHover={{ x: 5, color: "#60A5FA" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="cursor-pointer text-neutral-300 hover:text-blue-400"
    >
      {title}
    </motion.li>
  );
}