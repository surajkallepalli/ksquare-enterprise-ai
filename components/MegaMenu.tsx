"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  title: string;
  description?: string;
}

interface MegaMenuProps {
  isOpen: boolean;
  menuKey: string;
  items: MenuItem[];
}

export default function MegaMenu({ isOpen, menuKey, items }: MegaMenuProps) {
  return (
  <AnimatePresence>
  {openMenu && (
<motion.div
  key={openMenu}
  initial={{
    opacity: 0,
    y: -40,
    x:
      openMenu === "About"
        ? -120
        : openMenu === "Solutions"
        ? -60
        : openMenu === "Services"
        ? 60
        : 120,
  }}
  animate={{ opacity: 1, y: 0, x: 0 }}
  exit={{
    opacity: 0,
    y: -40,
    x:
      openMenu === "About"
        ? -120
        : openMenu === "Solutions"
        ? -60
        : openMenu === "Services"
        ? 60
        : 120,
  }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 24,
  }}
  className="absolute top-full left-1/2 -translate-x-1/2 w-[75vw] max-h-[75vh] bg-black/50 backdrop-blur-md rounded-xl shadow-xl grid md:grid-cols-2 overflow-hidden z-50"
  onMouseEnter={() => setHoveringMenu(true)}
  onMouseLeave={() => {
    setHoveringMenu(false);
    setOpenMenu(null);
  }}
>
      {/* Left Panel: Submenu items */}
<div className="p-6 border-r border-white/10 flex flex-col gap-2 overflow-y-auto max-h-[75vh]">
  {navbarItems
    .find((item) => item.label === openMenu)
    ?.content.map((sub) => (
      <div
        key={sub.title}
        onMouseEnter={() => setActiveSubmenu(sub.title)}
        className={`group relative px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 flex items-center
        ${
          activeSubmenu === sub.title
            ? "bg-white/10"
            : "hover:bg-white/5"
        }`}
      >
        {/* Blue indicator bar */}
        <div
          className={`absolute left-0 top-0 h-full w-[3px] rounded-r transition-all duration-200
          ${
            activeSubmenu === sub.title
              ? "bg-blue-500 opacity-100"
              : "opacity-0 group-hover:opacity-60 bg-blue-400"
          }`}
        />

        {/* Title */}
        <span className="ml-3 text-white text-sm font-medium tracking-wide">
          {sub.title}
        </span>
      </div>
    ))}
</div>

      {/* Right Panel: Dynamic content */}
      <div className="p-6 flex flex-col justify-center overflow-y-auto max-h-[75vh]">
        {navbarItems
          .find((item) => item.label === openMenu)
          ?.content.filter((sub) => sub.title === activeSubmenu)
          .map((sub) => (
            <div key={sub.title}>
              <h4 className="font-semibold text-2xl mb-2">{sub.title}</h4>
              <p className="text-neutral-300">{sub.description}</p>
            </div>
          ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>
  );
}