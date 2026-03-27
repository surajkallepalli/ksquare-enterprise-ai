"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Building2, Users, Bot, Cpu, ShieldCheck,
  Factory, HeartPulse, Landmark, ShoppingBag,
  BookOpen, FlaskConical, LayoutList, Lightbulb, Layers, Sparkles,
  Database, Microscope, Workflow, Monitor
} from "lucide-react";

const navbarItems = [
  {
    label: "About",
    content: [
      { title: "Company", description: "Who we are and our mission", href: "/company", icon: Building2 },
      { title: "Team", description: "Meet our leadership", href: "/team", icon: Users },
    ],
  },
  {
    label: "Solutions",
    sections: [
      {
        heading: "Practice Areas",
        items: [
          { title: "Salesforce & Agentforce", description: "AI-powered CRM, Data Cloud & Agentforce", href: "/solutions/salesforce", icon: Cpu, accent: "#00A1E0" },
          { title: "Intelligent Applications", description: "App modernization, conversational AI & VIBE", href: "/solutions/intelligent-applications", icon: Bot, accent: "#a78bfa" },
          { title: "Quality & AI Assurance", description: "KIT, K-Sentinel & AI governance frameworks", href: "/solutions/quality-assurance", icon: ShieldCheck, accent: "#34d399" },
          { title: "Agentic AI & Automation", description: "KODI, pre-built agents & AI operationalization", href: "/solutions/agentic-ai", icon: Workflow, accent: "#f472b6" },
          { title: "Data & Analytics", description: "NEOSIS, agentic data engineering & GenBI", href: "/solutions/data-analytics", icon: Database, accent: "#fb923c" },
        ],
      },
      {
        heading: "Industries",
        items: [
          { title: "Manufacturing", description: "Predictive operations and supply chain AI", href: "/industries/manufacturing", icon: Factory, accent: "#fb923c" },
          { title: "Healthcare", description: "Clinical AI and patient analytics", href: "/industries/healthcare", icon: HeartPulse, accent: "#f472b6" },
          { title: "Financial Services", description: "Fraud detection and risk intelligence", href: "/industries/finance", icon: Landmark, accent: "#34d399" },
          { title: "Retail", description: "Customer intelligence and demand forecasting", href: "/industries/retail", icon: ShoppingBag, accent: "#00A1E0" },
        ],
      },
    ],
  },
{
  label: "Services",
  content: [
    { title: "Consulting", description: "AI transformation strategy and roadmapping", href: "/services/consulting", icon: Lightbulb, stat: "50+", statLabel: "Transformations" },
    { title: "Implementation", description: "Deploy AI systems at enterprise scale", href: "/services/implementation", icon: Layers, stat: "98%", statLabel: "Client satisfaction" },
    { title: "Support", description: "Enterprise monitoring and lifecycle support", href: "/services/support", icon: ShieldCheck, stat: "24/7", statLabel: "Managed support" },
    { title: "Application Management", description: "End-to-end management of your enterprise application portfolio", href: "/services/application-management", icon: Monitor, stat: "45%", statLabel: "Run cost reduction" },
  ],
},
{
    label: "Thought Leadership",
    content: [
      { title: "Insights", description: "Perspectives and research on enterprise AI", href: "/insights", icon: BookOpen },
      { title: "Research", description: "AI and data studies across industries", href: "/research", icon: FlaskConical },
      { title: "Case Studies", description: "Enterprise AI transformation stories", href: "/case-studies", icon: LayoutList },
    ],
  },
];

function getFeatureTags(title: string): string[] {
  const map: Record<string, string[]> = {
    "Salesforce & Agentforce": ["Agentforce", "Data Cloud", "CRM AI", "Industry Cloud"],
    "Intelligent Applications": ["VIBE Framework", "Conversational AI", "App Modernization"],
    "Quality & AI Assurance": ["KIT", "K-Sentinel", "AI Governance", "DevSecOps"],
    "Agentic AI & Automation": ["KODI", "Pre-built Agents", "Document AI", "AI CoE"],
    "Data & Analytics": ["NEOSIS", "GenBI Agent", "MLOps", "Databricks"],
    "Manufacturing": ["Predictive Ops", "Supply Chain", "Quality AI", "IIoT"],
    "Healthcare": ["Clinical AI", "Patient Analytics", "HIPAA", "Imaging AI"],
    "Financial Services": ["Fraud Detection", "Risk AI", "Compliance", "AML"],
    "Retail": ["Demand Forecasting", "CX AI", "Inventory", "Personalisation"],
  };
  return map[title] || [];
}

function getStats(title: string): { value: string; label: string }[] {
  const map: Record<string, { value: string; label: string }[]> = {
    // Practice areas — from deck
    "Salesforce & Agentforce": [{ value: "2×", label: "Faster lead-to-revenue" }, { value: "45%", label: "Faster releases" }, { value: "35%", label: "Reduced TCO" }],
    "Intelligent Applications": [{ value: "25%", label: "Faster time to market" }, { value: "40%", label: "Less legacy run costs" }, { value: "35%", label: "User engagement growth" }],
    "Quality & AI Assurance": [{ value: "60%", label: "QE acceleration" }, { value: "30%", label: "Less security risk" }, { value: "100%", label: "AI assurance coverage" }],
    "Agentic AI & Automation": [{ value: "65%", label: "Cycle time reduction" }, { value: "95%", label: "Accuracy improvement" }, { value: "45%", label: "Cost efficiency" }],
    "Data & Analytics": [{ value: "3×", label: "Faster decisions" }, { value: "35%", label: "Reduced operational cost" }, { value: "40%", label: "Analytics acceleration" }],
    // Industries
    "Manufacturing": [{ value: "22%", label: "OpEx reduction" }, { value: "40%", label: "Less downtime" }, { value: "14", label: "Sites deployed" }],
    "Healthcare": [{ value: "31%", label: "Readmissions down" }, { value: "8", label: "Hospital networks" }, { value: "HIPAA", label: "Compliant" }],
    "Financial Services": [{ value: "60%", label: "Faster processing" }, { value: "99%", label: "Fraud accuracy" }, { value: "SOC2", label: "Certified" }],
    "Retail": [{ value: "18%", label: "Retention lift" }, { value: "$12M", label: "Overstock saved" }, { value: "4.8★", label: "Satisfaction" }],
    // Other menus
    "Consulting": [{ value: "50+", label: "Transformations" }, { value: "5", label: "Countries" }, { value: "98%", label: "Satisfaction" }],
    "Implementation": [{ value: "100+", label: "Deployments" }, { value: "60%", label: "Faster delivery" }, { value: "24/7", label: "Support" }],
    "Managed Support": [{ value: "99.9%", label: "Uptime" }, { value: "< 1hr", label: "Response time" }, { value: "24/7", label: "Coverage" }],
    "Insights": [{ value: "40+", label: "Reports" }, { value: "500K+", label: "Readers" }, { value: "12", label: "Topics" }],
    "Research": [{ value: "12", label: "Research areas" }, { value: "30+", label: "Studies" }, { value: "5", label: "Industries" }],
    "Case Studies": [{ value: "30+", label: "Stories" }, { value: "5", label: "Industries" }, { value: "22%", label: "Avg cost saving" }],
    "Company": [{ value: "5", label: "Countries" }, { value: "10+", label: "Years" }, { value: "200+", label: "Team members" }],
    "Team": [{ value: "200+", label: "Experts" }, { value: "5", label: "Countries" }, { value: "50+", label: "Clients" }],
  };
  return map[title] || [{ value: "50+", label: "Clients" }, { value: "5", label: "Countries" }, { value: "10yr", label: "Experience" }];
}

// ── RIGHT PANEL: Solutions / Capabilities ─────────────────────────────────────
function PanelSolutions({ active }: { active: any }) {
  const Icon = active.icon || Cpu;
  const accent = active.accent || "#4ca8ff";
  const stats = getStats(active.title);
  const tags = getFeatureTags(active.title);
  return (
    <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
        <div style={{ width: 48, height: 48, borderRadius: "0.75rem", background: `${accent}18`, border: `1px solid ${accent}35`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon size={22} color={accent} />
        </div>
        <div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.3rem", lineHeight: 1.2 }}>{active.title}</h3>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.55 }}>{active.description}</p>
        </div>
      </div>
      {tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem" }}>
          {tags.map((tag: string, i: number) => (
            <span key={i} style={{ fontSize: "0.95rem", padding: "0.3rem 0.8rem", borderRadius: "9999px", background: `${accent}12`, border: `0.5px solid ${accent}28`, color: accent, letterSpacing: "0.03em" }}>{tag}</span>
          ))}
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.65rem" }}>
        {stats.map((s: any, i: number) => (
          <div key={i} style={{ padding: "0.9rem 1rem", borderRadius: "0.625rem", background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: "1.25rem", fontWeight: 600, color: accent, lineHeight: 1, marginBottom: "0.3rem" }}>{s.value}</div>
            <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.3 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <Link href={active.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", fontWeight: 500, color: accent, textDecoration: "none" }}>
        Explore {active.title} <span>&#8594;</span>
      </Link>
    </div>
  );
}

// ── RIGHT PANEL: Simple menus ─────────────────────────────────────────────────
function PanelSimple({ items, active }: { items: any[]; active: any }) {
  const Icon = active.icon || Sparkles;
  const stats = getStats(active.title);
  return (
    <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
        <div style={{ width: 48, height: 48, borderRadius: "0.75rem", background: "rgba(76,168,255,0.1)", border: "1px solid rgba(76,168,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon size={22} color="#4ca8ff" />
        </div>
        <div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.3rem", lineHeight: 1.2 }}>{active.title}</h3>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.55 }}>{active.description}</p>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.65rem" }}>
        {stats.map((s: any, i: number) => (
          <div key={i} style={{ padding: "0.9rem 1rem", borderRadius: "0.625rem", background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "#4ca8ff", lineHeight: 1, marginBottom: "0.3rem" }}>{s.value}</div>
            <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.3 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
      <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.15rem" }}>
        <p style={{ fontSize: "0.8rem", letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.25)", marginBottom: "0.5rem" }}>Also explore</p>
        {items.filter((i: any) => i.title !== active.title).map((item: any, i: number) => {
          const ItemIcon = item.icon || Sparkles;
          return (
            <Link key={i} href={item.href}
              style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.5rem 0.5rem", borderRadius: "0.4rem", textDecoration: "none", color: "rgba(255,255,255,0.5)", transition: "all 0.15s ease" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(255,255,255,0.04)"; el.style.color = "#fff"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "transparent"; el.style.color = "rgba(255,255,255,0.5)"; }}
            >
              <ItemIcon size={13} color="rgba(255,255,255,0.3)" />
              <span style={{ fontSize: "0.95rem" }}>{item.title}</span>
              <span style={{ marginLeft: "auto", fontSize: "0.88rem", opacity: 0.4 }}>&#8594;</span>
            </Link>
          );
        })}
      </div>
      <Link href={active.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.95rem", fontWeight: 500, color: "#4ca8ff", textDecoration: "none" }}>
        Explore {active.title} <span>&#8594;</span>
      </Link>
    </div>
  );
}

// ── MAIN NAVBAR ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
  }, []);

  const scheduleClose = useCallback((delay = 150) => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), delay);
  }, [cancelClose]);

  const openItem = useCallback((label: string) => {
    cancelClose();
    setOpenMenu(label);
    const item = navbarItems.find(i => i.label === label);
    setActiveSubmenu(
      item?.content?.[0]?.title ||
      item?.sections?.[0]?.items?.[0]?.title ||
      null
    );
  }, [cancelClose]);

  const currentItems = openMenu
    ? (navbarItems.find(i => i.label === openMenu)?.content || [])
    : [];

  const allSolutionItems = navbarItems[1].sections!.flatMap(s => s.items);

  const activeItem = openMenu === "Solutions"
    ? ((allSolutionItems.find(i => i.title === activeSubmenu) || allSolutionItems[0]) as any)
    : ((currentItems.find(i => i.title === activeSubmenu) || currentItems[0]) as any);

  return (
    <nav className={`fixed top-0 w-full z-50 text-white transition-all duration-500 ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-200 flex-shrink-0">
          <div style={{ width: 32, height: 32, overflow: "hidden", flexShrink: 0 }}>
            <img src="/assets/logos/ksquare-logo.png" alt="The KSquare Group" style={{ height: 32, width: "auto", maxWidth: "none", display: "block", filter: "brightness(0) saturate(100%) invert(21%) sepia(89%) saturate(2000%) hue-rotate(210deg) brightness(85%)" }} />
          </div>
          <div style={{ overflow: "hidden", width: scrolled ? 0 : 200, opacity: scrolled ? 0 : 1, transition: "width 0.42s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease", flexShrink: 0 }}>
            <span style={{ display: "block", fontSize: "0.9rem", letterSpacing: "0.09em", whiteSpace: "nowrap" as const }}>
              <span style={{ fontWeight: 400, color: "#a8c8f0" }}>THE </span>
              <span style={{ fontWeight: 700, color: "#1a56db" }}>KSQUARE</span>
              <span style={{ fontWeight: 400, color: "#a8c8f0" }}> GROUP</span>
            </span>
          </div>
        </Link>

        {/* Nav items */}
        <ul className="flex gap-8 items-center" onMouseLeave={() => scheduleClose(200)}
onClick={() => setOpenMenu(null)}>
          {navbarItems.map((item) => (
            <li key={item.label} className="relative cursor-pointer py-6 group" onMouseEnter={() => openItem(item.label)}>
              <span className="relative text-white/90 group-hover:text-white transition font-medium" style={{ fontSize: "1.05rem", letterSpacing: "0.01em" }}>
                {item.label}
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${openMenu === item.label ? "w-full" : "w-0 group-hover:w-full"}`} />
              </span>
            </li>
          ))}
          <li>
            <button className="bg-blue-600 rounded-lg hover:bg-blue-500 transition font-medium" style={{ fontSize: "1.05rem", padding: "0.55rem 1.4rem" }}>
              Get Started
            </button>
          </li>
        </ul>
        <div id="chat-widget" />
      </div>

      {/* Bridge */}
      {openMenu && (
        <div className="absolute w-full" style={{ top: scrolled ? "64px" : "80px", height: "8px" }} onMouseEnter={cancelClose} />
      )}

      {/* Megamenu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key={openMenu}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[1100px] backdrop-blur-xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.9)] rounded-2xl overflow-hidden"
            style={{ background: "rgba(4,6,16,0.97)", display: "grid", gridTemplateColumns: "300px 1px 1fr" }}
            onMouseEnter={cancelClose}
            onMouseLeave={() => scheduleClose(200)}
          >
            {/* LEFT PANEL */}
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column" as const, gap: "1.5rem", borderRight: "0.5px solid rgba(255,255,255,0.08)" }}>

              {openMenu === "Solutions" ? (
                <>
                  {/* Practice Areas */}
                  <div>
                    <p style={{ fontSize: "0.92rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.28)", marginBottom: "0.75rem" }}>Practice Areas</p>
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.2rem" }}>
                      {navbarItems[1].sections![0].items.map((sub) => {
                        const Icon = (sub as any).icon || Cpu;
                        const accent = (sub as any).accent || "#4ca8ff";
                        const isActive = activeSubmenu === sub.title;
                        return (
 <Link key={sub.title} href={sub.href} onMouseEnter={() => setActiveSubmenu(sub.title)} onClick={() => setOpenMenu(null)}
  style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.7rem 0.75rem", borderRadius: "0.625rem", background: isActive ? "rgba(255,255,255,0.07)" : "transparent", border: `0.5px solid ${isActive ? "rgba(255,255,255,0.1)" : "transparent"}`, transition: "all 0.15s ease", textAlign: "left" as const, width: "100%", cursor: "pointer", textDecoration: "none" }}>
  <div style={{ width: 30, height: 30, borderRadius: "0.45rem", background: `${accent}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <Icon size={14} color={accent} />
  </div>
  <div>
    <div style={{ fontSize: "0.86rem", fontWeight: isActive ? 500 : 400, color: isActive ? "#fff" : "rgba(255,255,255,0.7)", lineHeight: 1.2 }}>{sub.title}</div>
    <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginTop: "0.12rem", lineHeight: 1.3 }}>{sub.description}</div>
  </div>
</Link>
                        );
                      })}
                    </div>
                  </div>

                  <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)" }} />

                  {/* Industries */}
                  <div>
                    <p style={{ fontSize: "0.92rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.28)", marginBottom: "0.75rem" }}>Industries</p>
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.2rem" }}>
                      {navbarItems[1].sections![1].items.map((sub) => {
                        const Icon = (sub as any).icon || Factory;
                        const accent = (sub as any).accent || "#4ca8ff";
                        const isActive = activeSubmenu === sub.title;
                        return (
<Link key={sub.title} href={sub.href} onMouseEnter={() => setActiveSubmenu(sub.title)} onClick={() => setOpenMenu(null)}
  style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", borderRadius: "0.625rem", background: isActive ? "rgba(255,255,255,0.07)" : "transparent", border: `0.5px solid ${isActive ? "rgba(255,255,255,0.1)" : "transparent"}`, transition: "all 0.15s ease", textAlign: "left" as const, width: "100%", cursor: "pointer", textDecoration: "none" }}>
  <Icon size={14} color={isActive ? accent : "rgba(255,255,255,0.3)"} style={{ flexShrink: 0 }} />
  <span style={{ fontSize: "0.86rem", color: isActive ? "#fff" : "rgba(255,255,255,0.65)", fontWeight: isActive ? 500 : 400 }}>{sub.title}</span>
</Link>
                        );
                      })}
                    </div>
                  </div>
                </>

              ) : (
                /* About / Services / Thought Leadership */
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.2rem" }}>
                  {currentItems.map((sub) => {
                    const Icon = (sub as any).icon || Sparkles;
                    const isActive = activeSubmenu === sub.title;
                    return (
<Link key={sub.title} href={sub.href} onMouseEnter={() => setActiveSubmenu(sub.title)} onClick={() => setOpenMenu(null)}
  style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.8rem 0.75rem", borderRadius: "0.625rem", background: isActive ? "rgba(255,255,255,0.07)" : "transparent", border: `0.5px solid ${isActive ? "rgba(255,255,255,0.1)" : "transparent"}`, transition: "all 0.15s ease", textAlign: "left" as const, width: "100%", cursor: "pointer", textDecoration: "none" }}>
  <div style={{ width: 34, height: 34, borderRadius: "0.5rem", background: "rgba(76,168,255,0.1)", border: "0.5px solid rgba(76,168,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <Icon size={15} color="#4ca8ff" />
  </div>
  <div>
    <div style={{ fontSize: "0.88rem", fontWeight: isActive ? 500 : 400, color: isActive ? "#fff" : "rgba(255,255,255,0.7)", lineHeight: 1.2 }}>{sub.title}</div>
    <div style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.3)", marginTop: "0.15rem", lineHeight: 1.3 }}>{sub.description}</div>
  </div>
</Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Divider */}
            <div style={{ background: "rgba(255,255,255,0.08)" }} />

            {/* RIGHT PANEL */}
            <div style={{ padding: "1.75rem 2rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 80% 20%, rgba(76,168,255,0.06) 0%, transparent 60%)" }} />
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeSubmenu || "default"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.12, ease: "easeOut" }}
                  style={{ position: "relative", zIndex: 1 }}
                >
                  {openMenu === "Solutions" && activeItem
                    ? <PanelSolutions active={activeItem} />
                    : activeItem
                      ? <PanelSimple items={currentItems} active={activeItem} />
                      : null
                  }
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}