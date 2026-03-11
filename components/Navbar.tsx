"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navbarItems = [
  {
    label: "About",
    content: [
      {
        title: "Company",
        description: "Who we are and our vision",
        href: "/company",
      },
      {
        title: "Team",
        description: "Meet our leadership",
        href: "/team",
      },
    ],
  },

  {
    label: "Capabilities",
    sections: [
      {
        heading: "Solutions",
        items: [
          {
            title: "AI Infrastructure",
            description: "Enterprise GPU and AI platform architecture",
            href: "/solutions/ai-infrastructure",
          },
          {
            title: "Data Platforms",
            description: "Modern lakehouse and enterprise data foundations",
            href: "/solutions/data-platforms",
          },
          {
            title: "Enterprise AI",
            description: "AI systems deployed across business functions",
            href: "/solutions/enterprise-ai",
          },
          {
            title: "Intelligent Automation",
            description: "Agentic workflows and AI-driven operations",
            href: "/solutions/automation",
          },
        ],
      },

      {
        heading: "Industries",
        items: [
          {
            title: "Manufacturing",
            description: "Predictive operations and supply chain intelligence",
            href: "/industries/manufacturing",
          },
          {
            title: "Healthcare",
            description: "AI for clinical insights and patient analytics",
            href: "/industries/healthcare",
          },
          {
            title: "Financial Services",
            description: "Fraud detection and risk intelligence",
            href: "/industries/finance",
          },
          {
            title: "Retail",
            description: "Customer intelligence and demand forecasting",
            href: "/industries/retail",
          },
        ],
      },
    ],
  },

  {
    label: "Services",
    content: [
      {
        title: "Consulting",
        description: "AI transformation strategy",
        href: "/services/consulting",
      },
      {
        title: "Implementation",
        description: "Deploy AI systems at scale",
        href: "/services/implementation",
      },
      {
        title: "Support",
        description: "Enterprise monitoring and lifecycle support",
        href: "/services/support",
      },
    ],
  },

  {
    label: "Thought Leadership",
    content: [
      {
        title: "Insights",
        description: "Perspectives on enterprise AI",
        href: "/insights",
      },
      {
        title: "Research",
        description: "AI and data studies",
        href: "/research",
      },
    ],
  },
];

export default function Navbar() {

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoveringMenu, setHoveringMenu] = useState(false);
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null);

  return (
    <nav
      className="fixed top-0 w-full bg-black text-white z-50"
      onMouseLeave={() => {
        const timer = setTimeout(() => {
          if (!hoveringMenu) setOpenMenu(null);
        }, 100);
        setCloseTimer(timer);
      }}
    >

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
<a
  href="/"
  className="flex items-center gap-3 text-2xl font-semibold hover:opacity-90 transition"
>

  {/* Logo Image */}
  <img
    src="/assets/logos/ksquare-logo.png"
    className="h-8 w-auto"
  />

</a>

        {/* Main Menu */}
        <ul
  className="flex gap-8 items-center"
  onMouseLeave={() => {
    const timer = setTimeout(() => {
      if (!hoveringMenu) setOpenMenu(null);
    }, 120);
    setCloseTimer(timer);
  }}
>

          {navbarItems.map((item) => (

<li
  key={item.label}
  onMouseEnter={() => {

    if (closeTimer) clearTimeout(closeTimer);

    setHoveringMenu(false);

    setOpenMenu(item.label);

    setActiveSubmenu(
      item.content?.[0]?.title ||
      item.sections?.[0]?.items?.[0]?.title ||
      null
    );
  }}
  className="relative cursor-pointer py-2 group"
>
  <motion.span
    className="relative text-white/90 group-hover:text-white transition"
    whileHover={{ y: -2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {item.label}

    {/* Blue underline */}
    <span
      className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
        openMenu === item.label ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  </motion.span>
</li>

          ))}

          {/* CTA */}
          <li>
            <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
              Get Started
            </button>
          </li>

        </ul>

        {/* Chat widget placeholder */}
        <div id="chat-widget"></div>

      </div>

      {/* Mega Menu */}

      <AnimatePresence>

        {openMenu && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[1100px] bg-black/70 backdrop-blur-xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.9)] rounded-2xl grid md:grid-cols-[280px_1px_1fr] overflow-hidden"
            onMouseEnter={() => {
              setHoveringMenu(true);
              if (closeTimer) clearTimeout(closeTimer);
            }}
            onMouseLeave={() => {
              setHoveringMenu(false);
              const timer = setTimeout(() => setOpenMenu(null), 150);
              setCloseTimer(timer);
            }}
          >

            {/* LEFT PANEL */}

            <div className="p-6 border-r border-white/10 flex flex-col gap-6 overflow-y-auto">

              {/* Sectioned Menu (Capabilities) */}

              {navbarItems
                .find((item) => item.label === openMenu)
                ?.sections?.map((section) => (

                <div key={section.heading}>

                  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
                    {section.heading}
                  </p>

                  {section.items.map((sub) => (

                    <a
                      key={sub.title}
                      href={sub.href}
                      onMouseEnter={() => setActiveSubmenu(sub.title)}
                      className="relative px-4 py-3 rounded-lg flex items-center"
                    >

                      {activeSubmenu === sub.title && (
                        <motion.div
                          layoutId="submenu-highlight"
                          className="absolute inset-0 rounded-lg bg-white/10"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      <span className="relative z-10 text-sm font-medium ml-3">
                        {sub.title}
                      </span>

                    </a>

                  ))}

                </div>

              ))}

              {/* Simple Menu */}

              {navbarItems
                .find((item) => item.label === openMenu)
                ?.content?.map((sub) => (

                <a
                  key={sub.title}
                  href={sub.href}
                  onMouseEnter={() => setActiveSubmenu(sub.title)}
                  className="relative px-4 py-3 rounded-lg flex items-center"
                >

                  {activeSubmenu === sub.title && (
                    <motion.div
                      layoutId="submenu-highlight"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10 text-sm font-medium ml-3">
                    {sub.title}
                  </span>

                </a>

              ))}

            </div>

            {/* Animated Divider */}

            <div className="relative w-px bg-white/10">

              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 opacity-40"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

            </div>

            {/* RIGHT PANEL */}

<div className="p-12 flex items-center relative overflow-hidden">
{/* AI background glow */}
<motion.div
  className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10"
  animate={{
    opacity: [0.4, 0.7, 0.4]
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>

{/* floating particles */}
<div className="absolute inset-0 pointer-events-none">
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-blue-400 rounded-full"
      style={{
        top: `${20 + i * 10}%`,
        left: `${10 + i * 10}%`
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.8, 0.2]
      }}
      transition={{
        duration: 4 + i,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  ))}
</div>
  <AnimatePresence mode="wait">

    {[
      ...(navbarItems
        .find((item) => item.label === openMenu)
        ?.sections?.flatMap((section) => section.items) || []),
      ...(navbarItems
        .find((item) => item.label === openMenu)
        ?.content || [])
    ]
      .filter((sub) => sub.title === activeSubmenu)
      .map((sub) => (

        <motion.div
          key={sub.title}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-[160px_1fr] gap-10 items-center w-full"
        >

          {/* Visual Tile */}

          <div className="relative w-[160px] h-[160px] rounded-2xl bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center">

            <div className="absolute inset-0 blur-2xl bg-blue-500/20 rounded-2xl" />

            <div className="relative text-blue-400 text-4xl">
              ✦
            </div>

          </div>

          {/* Content */}

          <div className="space-y-5">

            <h3 className="text-3xl font-semibold tracking-tight">
              {sub.title}
            </h3>

            <p className="text-neutral-300 text-lg max-w-lg leading-relaxed">
              {sub.description}
            </p>

            <a
              href={sub.href}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition"
            >
              Explore {sub.title} →
            </a>

          </div>

        </motion.div>

      ))}

  </AnimatePresence>

</div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}