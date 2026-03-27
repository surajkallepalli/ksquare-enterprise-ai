"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  { name: "Varma Buddharaju", role: "CEO", image: "/assets/team/varma-buddharaju.jpg", linkedin: "#" },
  { name: "Sunny Mandapati", role: "Chief Revenue Officer", image: "/assets/team/sunny-mandapati.jpg", linkedin: "#" },
  { name: "Girish Mallampalli", role: "Delivery Partner", image: "/assets/team/girish-mallampalli.jpg", linkedin: "#" },
  { name: "Enrique Castillejos", role: "Sales Engineering, CS & Channels", image: "/assets/team/enrique-castillejos.jpg", linkedin: "#" },
  { name: "Merinely Beltre", role: "Global HR Manager", image: "/assets/team/merinely-beltre.jpg", linkedin: "#" },
  { name: "Aditya Buddharaju", role: "VP of Delivery", image: "/assets/team/aditya-buddharaju.jpg", linkedin: "#" },
  { name: "Agustín Galindo", role: "PMO Director", image: "/assets/team/agustin-galindo.jpg", linkedin: "#" },
  { name: "Daniela Rossi", role: "Marketing Manager", image: "/assets/team/daniela-rossi.jpg", linkedin: "#" },
  { name: "Jessica Muñoz", role: "Group Manager", image: "/assets/team/jessica-munoz.jpg", linkedin: "#" },
];

function LinkedInButton({ href, visible }: { href: string; visible: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} onClick={e => e.stopPropagation()} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ position: "absolute", top: "0.75rem", right: "0.75rem", width: 32, height: 32, borderRadius: "0.5rem", background: hov ? "rgba(76,168,255,0.35)" : "rgba(4,6,16,0.85)", border: "0.5px solid rgba(76,168,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-4px)", transition: "opacity 0.25s ease, transform 0.25s ease, background 0.2s ease", backdropFilter: "blur(8px)" }}>
      <Linkedin size={13} color="#4ca8ff" />
    </a>
  );
}

function MemberCard({ member, index }: { member: typeof team[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", flexDirection: "column" as const, gap: "0.875rem" }}
    >
      {/* Photo */}
      <div style={{ position: "relative", borderRadius: "0.875rem", overflow: "hidden", aspectRatio: "4/5", background: "#0d0d12", border: `0.5px solid ${hovered ? "rgba(76,168,255,0.3)" : "rgba(255,255,255,0.07)"}`, transition: "border-color 0.35s ease" }}>
        <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", transform: hovered ? "scale(1.04)" : "scale(1)", transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s ease", filter: hovered ? "saturate(1)" : "saturate(0.82)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(4,6,16,0.55) 0%, transparent 50%)", pointerEvents: "none", opacity: hovered ? 0.4 : 1, transition: "opacity 0.35s ease" }} />
        <LinkedInButton href={member.linkedin} visible={hovered} />
      </div>

      {/* Text */}
      <div style={{ padding: "0 0.15rem" }}>
        <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.05rem", fontWeight: 400, color: hovered ? "#ffffff" : "#d8d6e8", lineHeight: 1.3, marginBottom: "0.28rem", transition: "color 0.25s ease" }}>
          {member.name}
        </h3>
        <p style={{ fontSize: "0.73rem", color: hovered ? "#4ca8ff" : "#6a6a7a", lineHeight: 1.4, fontWeight: 400, transition: "color 0.25s ease", letterSpacing: "0.02em" }}>
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  return (
    <main style={{ background: "#000000", color: "#ffffff", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "9rem 1.5rem 4rem", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "1.25rem" }}>
          <span style={{ fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#6a6a7a", border: "0.5px solid rgba(255,255,255,0.1)", padding: "0.38rem 1rem", borderRadius: "9999px", display: "inline-block" }}>Our people</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.1, color: "#e8e6f0", marginBottom: "1.25rem" }}>
          The team behind<br /><em style={{ color: "#4ca8ff" }}>enterprise intelligence</em>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: "48ch", margin: "0 auto", lineHeight: 1.75, fontWeight: 300 }}>
          Enterprise technology expertise, engineering excellence, and industry insight — building intelligent systems for modern organisations.
        </motion.p>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} style={{ display: "flex", justifyContent: "center", gap: "3rem", marginTop: "2.5rem", flexWrap: "wrap" as const }}>
          {[{ value: "5", label: "Countries" }, { value: "200+", label: "Team members" }, { value: "10+", label: "Years experience" }].map((s, i) => (
            <div key={i} style={{ textAlign: "center" as const }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.8rem", fontWeight: 400, color: "#4ca8ff", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginTop: "0.3rem" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Separator */}
      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto 4rem" }} />

      {/* Grid */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem 8rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2.5rem 1.75rem" }}>
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>

    </main>
  );
}