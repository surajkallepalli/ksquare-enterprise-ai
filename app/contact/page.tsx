"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Twitter } from "lucide-react";

const offices = [
  { country: "United States", city: "Dallas, TX", flag: "🇺🇸", primary: true },
  { country: "Mexico", city: "Guadalajara", flag: "🇲🇽", primary: false },
  { country: "India", city: "Hyderabad", flag: "🇮🇳", primary: false },
  { country: "Dominican Republic", city: "Santo Domingo", flag: "🇩🇴", primary: false },
  { country: "St. Lucia", city: "Castries", flag: "🇱🇨", primary: false },
];

function InputField({ label, type = "text", placeholder, required = false }: { label: string; type?: string; placeholder: string; required?: boolean }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
      <label style={{ fontSize: "0.9rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", letterSpacing: "0.02em" }}>
        {label}{required && <span style={{ color: "#4ca8ff", marginLeft: 2 }}>*</span>}
      </label>
      <input type={type} placeholder={placeholder} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ background: "rgba(255,255,255,0.04)", border: `0.5px solid ${focused ? "rgba(76,168,255,0.5)" : "rgba(255,255,255,0.1)"}`, borderRadius: "0.625rem", padding: "0.8rem 1rem", fontSize: "0.9rem", color: "#ffffff", outline: "none", transition: "border-color 0.2s ease", width: "100%", boxSizing: "border-box" as const }}
      />
    </div>
  );
}

function TextareaField({ label, placeholder }: { label: string; placeholder: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
      <label style={{ fontSize: "0.9rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", letterSpacing: "0.02em" }}>{label}</label>
      <textarea placeholder={placeholder} rows={5}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ background: "rgba(255,255,255,0.04)", border: `0.5px solid ${focused ? "rgba(76,168,255,0.5)" : "rgba(255,255,255,0.1)"}`, borderRadius: "0.625rem", padding: "0.8rem 1rem", fontSize: "0.9rem", color: "#ffffff", outline: "none", transition: "border-color 0.2s ease", width: "100%", boxSizing: "border-box" as const, resize: "vertical" as const, fontFamily: "inherit" }}
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
      <label style={{ fontSize: "0.9rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", letterSpacing: "0.02em" }}>{label}</label>
      <select onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ background: "rgba(10,10,20,0.95)", border: `0.5px solid ${focused ? "rgba(76,168,255,0.5)" : "rgba(255,255,255,0.1)"}`, borderRadius: "0.625rem", padding: "0.8rem 1rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", outline: "none", transition: "border-color 0.2s ease", width: "100%", cursor: "pointer" }}>
        <option value="">Select an option</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [hovBtn, setHovBtn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ background: "#000000", color: "#ffffff", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "9rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "56ch" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "1.25rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#9a9aaa", border: "0.5px solid rgba(255,255,255,0.1)", padding: "0.38rem 1rem", borderRadius: "9999px", display: "inline-block" }}>Get in touch</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.1, color: "#e8e6f0", marginBottom: "1.5rem" }}>
            Let's build something<br /><em style={{ color: "#4ca8ff" }}>intelligent together</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, fontWeight: 300 }}>
            Tell us about your organisation and what you're looking to achieve. Our team will be in touch within one business day.
          </motion.p>
        </div>
      </section>

      {/* Separator */}
      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem 8rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "6rem", alignItems: "start" }}>

          {/* ── LEFT: Info ── */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>

            {/* Contact methods */}
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "2rem", marginBottom: "3rem" }}>
              {[
                { icon: Mail, label: "Email us", value: "hello@ksquare.com", href: "mailto:hello@ksquare.com" },
                { icon: Phone, label: "Call us", value: "+1 (214) 555-0100", href: "tel:+12145550100" },
                { icon: Linkedin, label: "LinkedIn", value: "The KSquare Group", href: "https://linkedin.com/company/theksquaregroup" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a key={i} href={item.href} style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none", transition: "opacity 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "1"}>
                    <div style={{ width: 40, height: 40, borderRadius: "0.625rem", background: "rgba(76,168,255,0.1)", border: "0.5px solid rgba(76,168,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} color="#4ca8ff" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.38)", marginBottom: "0.1rem", letterSpacing: "0.04em" }}>{item.label}</div>
                      <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", marginBottom: "2.5rem" }} />

            {/* Global offices */}
            <div>
              <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1.25rem" }}>Global offices</p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.85rem" }}>
                {offices.map((o, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ fontSize: "1.2rem" }}>{o.flag}</span>
                    <div>
                      <div style={{ fontSize: "0.95rem", color: o.primary ? "#ffffff" : "rgba(255,255,255,0.7)", fontWeight: o.primary ? 500 : 400 }}>{o.country}</div>
                      <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.35)", marginTop: "0.05rem" }}>{o.city}</div>
                    </div>
                    {o.primary && (
                      <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "#4ca8ff", background: "rgba(76,168,255,0.1)", border: "0.5px solid rgba(76,168,255,0.25)", padding: "0.15rem 0.5rem", borderRadius: "9999px", marginLeft: "auto" }}>HQ</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.6 }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: "1.25rem", padding: "2.5rem" }}>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <InputField label="First name" placeholder="Raj" required />
                  <InputField label="Last name" placeholder="Kumar" required />
                </div>

                <InputField label="Work email" type="email" placeholder="raj@company.com" required />
                <InputField label="Company" placeholder="Your organisation" required />
                <InputField label="Job title" placeholder="Head of AI" />

                <SelectField label="What are you looking for?" options={["AI Strategy & Consulting", "Data Platform Implementation", "Enterprise AI Deployment", "Intelligent Automation", "AI Quality & Governance", "Something else"]} />

                <SelectField label="Company size" options={["1–50 employees", "51–200 employees", "201–1000 employees", "1000+ employees"]} />

                <TextareaField label="Tell us about your project" placeholder="What are you trying to achieve? What challenges are you facing? Any relevant context..." />

                <button type="submit" onMouseEnter={() => setHovBtn(true)} onMouseLeave={() => setHovBtn(false)}
                  style={{ marginTop: "0.5rem", padding: "0.9rem 2rem", background: hovBtn ? "#d4d8ff" : "#ffffff", color: "#080810", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.04em", border: "none", borderRadius: "9999px", cursor: "pointer", transition: "all 0.25s ease", transform: hovBtn ? "translateY(-1px)" : "translateY(0)" }}>
                  Send message &#8594;
                </button>

                <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.28)", textAlign: "center" as const, lineHeight: 1.5 }}>
                  We typically respond within one business day. Your information is kept confidential.
                </p>

              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                style={{ background: "rgba(76,168,255,0.06)", border: "0.5px solid rgba(76,168,255,0.25)", borderRadius: "1.25rem", padding: "4rem 2.5rem", textAlign: "center" as const }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(76,168,255,0.15)", border: "1px solid rgba(76,168,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <Mail size={24} color="#4ca8ff" />
                </div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.8rem", fontWeight: 400, color: "#e8e6f0", marginBottom: "1rem" }}>Message sent</h3>
                <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "38ch", margin: "0 auto" }}>
                  Thank you for reaching out. A member of our team will be in touch within one business day.
                </p>
              </motion.div>
            )}
          </motion.div>

        </div>
      </section>

    </main>
  );
}