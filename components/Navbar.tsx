"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import NavPreviewVisual from "@/components/NavPreviewVisual";

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
      {
        title: "Case Studies",
        description: "Enterprise AI transformation stories",
        href: "/case-studies",
      },
    ],
  },
];

const capabilityVisuals = {
  "AI Infrastructure": "/assets/nav/ai-infrastructure.png",
  "Data Platforms": "/assets/nav/data-platforms.png",
  "Enterprise AI": "/assets/nav/enterprise-ai.png",
  "Intelligent Automation": "/assets/nav/automation.png",
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoveringMenu, setHoveringMenu] = useState(false);
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 text-white transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-semibold hover:opacity-90 transition"
        >
          <img src="/assets/logos/ksquare-logo.png" className="h-8 w-auto" />
        </Link>

        {/* Menu */}

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
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                    openMenu === item.label
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.span>
            </li>
          ))}

          <li>
            <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
              Get Started
            </button>
          </li>
        </ul>

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

<div className="p-6 border-r border-white/10 flex flex-col gap-8 overflow-y-auto">

{/* SPECIAL LAYOUT FOR CAPABILITIES */}

{openMenu === "Capabilities" ? (

<>


{/* SOLUTIONS */}

<div>

<p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
Solutions
</p>

<div className="flex flex-col gap-2">

{navbarItems
  .find((item) => item.label === "Capabilities")
  ?.sections?.[0]?.items.map((sub) => (

<Link
  key={sub.title}
  href={sub.href}
  onMouseEnter={() => setActiveSubmenu(sub.title)}
  className={`px-4 py-3 rounded-lg text-sm transition flex flex-col
  ${
    activeSubmenu === sub.title
      ? "bg-white/10"
      : "hover:bg-white/5"
  }`}
>

<span className="font-medium">
{sub.title}
</span>

<span className="text-xs text-neutral-400">
{sub.description}
</span>

</Link>

))}

</div>

</div>


{/* INDUSTRIES */}

<div>

<p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
Industries
</p>

<div className="flex flex-col gap-2">

{navbarItems
  .find((item) => item.label === "Capabilities")
  ?.sections?.[1]?.items.map((sub) => (

<Link
  key={sub.title}
  href={sub.href}
  onMouseEnter={() => setActiveSubmenu(sub.title)}
  className={`px-4 py-3 rounded-lg text-sm transition
  ${
    activeSubmenu === sub.title
      ? "bg-white/10"
      : "hover:bg-white/5"
  }`}
>

{sub.title}

</Link>

))}

</div>

</div>

</>

) : (

<>
{/* DEFAULT MENU FOR OTHER ITEMS */}

{navbarItems
  .find((item) => item.label === openMenu)
  ?.content?.map((sub) => (

<Link
  key={sub.title}
  href={sub.href}
  onMouseEnter={() => setActiveSubmenu(sub.title)}
  className={`px-4 py-3 rounded-lg text-sm transition
  ${
    activeSubmenu === sub.title
      ? "bg-white/10"
      : "hover:bg-white/5"
  }`}
>

{sub.title}

</Link>

))}

</>

)}

</div>

            {/* Divider */}

            <div className="relative w-px bg-white/10" />

            {/* RIGHT PANEL */}

            <div className="p-12 flex items-center relative overflow-hidden">
              {/* background glow */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10" />

              {/* floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                      top: `${20 + i * 10}%`,
                      left: `${10 + i * 10}%`,
                    }}
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
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
                    ?.content || []),
                ]
                  .filter((sub) => sub.title === activeSubmenu)
                  .map((sub) => (
                    <motion.div
                      key={sub.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="relative z-10 grid grid-cols-[180px_1fr] gap-10 items-center w-full"
                    >
                      {/* Visual */}

                      <div className="relative w-[180px] h-[180px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 flex items-center justify-center">
                        <NavPreviewVisual type={sub.title} />
                      </div>

                      {/* Content */}

                      <div className="space-y-5">
                        <h3 className="text-3xl font-semibold tracking-tight">
                          {sub.title}
                        </h3>

                        <p className="text-neutral-300 text-lg max-w-lg leading-relaxed">
                          {sub.description}
                        </p>

                        <Link
                          href={sub.href}
                          onClick={() => setOpenMenu(null)}
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition cursor-pointer"
                        >
                          Explore {sub.title} →
                        </Link>
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