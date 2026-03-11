"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navbarItems = [
  {
    label: "About",
    content: [
      { title: "Company", description: "Who we are and our vision" },
      { title: "Team", description: "Meet our leadership" },
    ],
  },
  {
    label: "Solutions",
    content: [
      { title: "AI Platform", description: "Enterprise AI infrastructure" },
      { title: "Data Analytics", description: "Insights for your business" },
      { title: "Automation", description: "Streamline operations" },
      { title: "Healthcare", description: "AI for clinical insights" },
      { title: "Finance", description: "Risk & fraud detection" },
      { title: "Retail", description: "Customer intelligence" },
    ],
  },
  {
    label: "Services",
    content: [
      { title: "Consulting", description: "Strategy & AI adoption" },
      { title: "Implementation", description: "Deploy AI systems" },
      { title: "Support", description: "Enterprise support & monitoring" },
    ],
  },
  {
    label: "Thought Leadership",
    content: [
      { title: "Insights", description: "AI perspectives across industries" },
      { title: "Research", description: "Enterprise intelligence studies" },
    ],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoveringMenu, setHoveringMenu] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full bg-black text-white z-50"
      onMouseLeave={() => !hoveringMenu && setOpenMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="text-2xl font-bold">The Ksquare Group</div>

        {/* Main menu */}
        <ul className="flex gap-8 items-center">
          {navbarItems.map((item) => (
            <li
              key={item.label}
              onMouseEnter={() => {
                setOpenMenu(item.label);
                setActiveSubmenu(item.content[0]?.title || null);
              }}
              className="relative cursor-pointer"
            >
              {item.label}
            </li>
          ))}

          {/* Get Started button */}
          <li>
            <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
              Get Started
            </button>
          </li>
        </ul>

        {/* Chat widget placeholder */}
        <div id="chat-widget">{/* Insert chat widget here */}</div>
      </div>

      {/* Centralized Mega Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-[75vw] max-h-[75vh] bg-black/50 backdrop-blur-md rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden z-50"
            onMouseEnter={() => setHoveringMenu(true)}
            onMouseLeave={() => {
              setHoveringMenu(false);
              setOpenMenu(null);
            }}
          >
            {/* Left Panel: Submenu items */}
            <div className="p-6 border-r border-white/10 flex flex-col gap-3 overflow-y-auto max-h-[75vh]">
              {navbarItems
                .find((item) => item.label === openMenu)
                ?.content.map((sub) => (
                  <div
                    key={sub.title}
                    onMouseEnter={() => setActiveSubmenu(sub.title)}
                    className={`p-3 rounded-lg cursor-pointer transition ${
                      activeSubmenu === sub.title ? "bg-neutral-800/70" : ""
                    }`}
                  >
                    {sub.title}
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
    </nav>
  );
}