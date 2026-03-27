"use client";

import { useState } from "react";
import Link from "next/link";
import { Linkedin, Twitter, Youtube, Globe } from "lucide-react";

const links = {
  Capabilities: [
    { label: "AI Infrastructure", href: "/solutions/ai-infrastructure" },
    { label: "Data Platforms", href: "/solutions/data-platforms" },
    { label: "Enterprise AI", href: "/solutions/enterprise-ai" },
    { label: "Intelligent Automation", href: "/solutions/automation" },
  ],
  Industries: [
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Financial Services", href: "/industries/finance" },
    { label: "Retail", href: "/industries/retail" },
  ],
  Services: [
    { label: "Consulting", href: "/services/consulting" },
    { label: "Implementation", href: "/services/implementation" },
    { label: "Managed Support", href: "/services/support" },
  ],
  "Thought Leadership": [
    { label: "Insights", href: "/insights" },
    { label: "Research", href: "/research" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  Company: [
    { label: "About Us", href: "/company" },
    { label: "Leadership Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/company/theksquaregroup", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/ksquaregroup", label: "X / Twitter" },
  { icon: Youtube, href: "https://youtube.com/@ksquaregroup", label: "YouTube" },
  { icon: Globe, href: "https://theksquaregroup.com", label: "Website" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "block", fontSize: "0.92rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s ease", lineHeight: 1.4 }}>
      {children}
    </Link>
  );
}

function SocialButton({ icon: Icon, href, label }: { icon: any; href: string; label: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ width: 36, height: 36, borderRadius: "0.5rem", border: `0.5px solid ${hov ? "rgba(76,168,255,0.4)" : "rgba(255,255,255,0.1)"}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s ease", background: hov ? "rgba(76,168,255,0.1)" : "transparent", flexShrink: 0 }}>
      <Icon size={15} color={hov ? "#4ca8ff" : "rgba(255,255,255,0.45)"} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={{ position: "relative", background: "#000000", borderTop: "0.5px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>

      {/* Ambient glow */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse at top, rgba(76,168,255,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* ── CLOSING STATEMENT ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem 4rem", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1.25rem" }}>
          Enterprise AI Transformation
        </p>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.15, color: "#e8e6f0", marginBottom: "1.5rem", maxWidth: "18ch", margin: "0 auto 1.5rem" }}>
          Ready to build an <em style={{ color: "#4ca8ff" }}>intelligent enterprise?</em>
        </h2>
        <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.42)", maxWidth: "44ch", margin: "0 auto 2.5rem", lineHeight: 1.7, fontWeight: 300 }}>
          Let's talk about how KSquare can help you design, deploy, and scale AI across your organisation.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" as const }}>
          <CtaPrimary />
          <CtaSecondary />
        </div>
      </div>

      {/* Divider with glow */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ height: "0.5px", background: "linear-gradient(to right, transparent, rgba(76,168,255,0.3) 30%, rgba(76,168,255,0.3) 70%, transparent)" }} />
      </div>

      {/* ── MAIN GRID ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 1.5rem 3rem", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr 1fr 1fr", gap: "3rem" }}>

          {/* Brand column */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.5rem" }}>
            {/* Logo */}
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
              <div style={{ width: 28, height: 28, overflow: "hidden", flexShrink: 0 }}>
                <img src="/assets/logos/ksquare-logo.png" alt="KSquare" style={{ height: 28, width: "auto", maxWidth: "none", display: "block" }} />
              </div>
              <span style={{ fontSize: "0.88rem", letterSpacing: "0.09em", whiteSpace: "nowrap" as const }}>
                <span style={{ fontWeight: 400, color: "#a8c8f0" }}>THE </span>
                <span style={{ fontWeight: 700, color: "#1a56db" }}>KSQUARE</span>
                <span style={{ fontWeight: 400, color: "#a8c8f0" }}> GROUP</span>
              </span>
            </Link>

            <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontWeight: 300 }}>
              Enterprise AI transformation across 5 countries — building intelligent systems that drive measurable results.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {socials.map((s) => <SocialButton key={s.label} icon={s.icon} href={s.href} label={s.label} />)}
            </div>

            {/* Presence flags */}
            <div>
              <p style={{ fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.55)", marginBottom: "0.5rem" }}>Global presence</p>
              <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
                {["🇺🇸", "🇲🇽", "🇮🇳", "🇩🇴", "🇱🇨"].map((flag, i) => (
                  <span key={i} style={{ fontSize: "1.1rem" }}>{flag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <p style={{ fontSize: "0.92rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.75)", marginBottom: "1.25rem" }}>
                {heading}
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.7rem" }}>
                {items.map((item) => (
                  <FooterLink key={item.label} href={item.href}>{item.label}</FooterLink>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: "0.75rem" }}>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>
            © {new Date().getFullYear()} The KSquare Group. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }, { label: "Cookie Policy", href: "/cookies" }].map((item) => (
              <BottomBarLink key={item.label} href={item.href}>{item.label}</BottomBarLink>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}

function CtaPrimary() {
  const [hov, setHov] = useState(false);
  return (
    <a href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: hov ? "#d4d8ff" : "#ffffff", color: "#080810", fontSize: "0.92rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const, padding: "0.85rem 2rem", borderRadius: "9999px", textDecoration: "none", transform: hov ? "translateY(-1px)" : "translateY(0)", transition: "all 0.25s ease" }}>
      Start a conversation
    </a>
  );
}

function CtaSecondary() {
  const [hov, setHov] = useState(false);
  return (
    <a href="/case-studies" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: hov ? "#fff" : "rgba(255,255,255,0.6)", fontSize: "0.92rem", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" as const, padding: "0.85rem 2rem", borderRadius: "9999px", textDecoration: "none", border: hov ? "0.5px solid rgba(255,255,255,0.5)" : "0.5px solid rgba(255,255,255,0.18)", transform: hov ? "translateY(-1px)" : "translateY(0)", transition: "all 0.25s ease" }}>
      See our work &#8594;
    </a>
  );
}

function BottomBarLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ fontSize: "0.88rem", color: hov ? "#ffffff" : "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.2s ease" }}>
      {children}
    </Link>
  );
}