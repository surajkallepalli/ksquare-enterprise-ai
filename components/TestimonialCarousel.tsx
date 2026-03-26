"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "KSquare helped us transform fragmented data systems into a unified AI platform that significantly improved operational efficiency.",
    name: "Global Manufacturing Leader",
    role: "Head of Digital Transformation",
    videoId: "ieDtOC95xJ0",
  },
  {
    quote: "Their AI platform enabled real-time decision making across our supply chain.",
    name: "Enterprise Retail Company",
    role: "VP, Operations",
    videoId: "JQSSfDaM0Rk",
  },
  {
    quote: "KSquare's engineering depth made a huge difference in scaling our AI initiatives.",
    name: "Financial Services Firm",
    role: "Chief Data Officer",
    videoId: "Saf8GSPKz2Y",
  },
];

const LEFT_CLIP  = "polygon(82% 0px, 0px 0px, 0px 100%, 98% 100%)";
const RIGHT_CLIP = "polygon(100% 0px, 2% 0px, 18% 100%, 100% 100%)";

const hoverWhite   = (e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.color = "#fff"; };
const unhoverWhite = (e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.color = "#737373"; };
const hoverLink    = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = "#fff"; };
const unhoverLink  = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = "#a3a3a3"; };

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [animDir, setAnimDir] = useState(1);

  const next = () => { setAnimDir(1); setIndex((p) => (p + 1) % testimonials.length); };
  const prev = () => { setAnimDir(-1); setIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1)); };
  const goTo = (i: number) => { setAnimDir(i > index ? 1 : -1); setIndex(i); };

  const t = testimonials[index];

  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "7rem 1.5rem" }}>

      {/* Title left, arrows right */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)", fontWeight: 600, color: "#fff" }}>Why leading teams trust KSquare</h2>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <button onClick={prev} onMouseEnter={hoverWhite} onMouseLeave={unhoverWhite} style={{ background: "none", border: "none", color: "#737373", fontSize: "1.25rem", cursor: "pointer" }}>&#8592;</button>
          <button onClick={next} onMouseEnter={hoverWhite} onMouseLeave={unhoverWhite} style={{ background: "none", border: "none", color: "#737373", fontSize: "1.25rem", cursor: "pointer" }}>&#8594;</button>
        </div>
      </div>

      {/* Aspect ratio wrapper */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "2274 / 1120" }}>
        <AnimatePresence mode="wait">
          <motion.div key={index} initial={{ opacity: 0, x: animDir * 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: animDir * -60 }} transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} style={{ position: "absolute", inset: 0 }}>

            {/* RIGHT: video — anchored right:0, width 56% */}
            <div style={{ position: "absolute", top: 0, right: 0, width: "56%", height: "100%" }}>
              <div style={{ height: "100%", width: "100%", overflow: "hidden", borderRadius: "0.75rem", clipPath: RIGHT_CLIP }}>
                {/* Outer relative box — iframe sits inside scaled up to hide YouTube chrome */}
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  {/* Scale up and shift up to crop YouTube title bar */}
                  <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "110%", height: "120%" }}>
                    <iframe key={t.videoId} src={"https://www.youtube.com/embed/" + t.videoId + "?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=" + t.videoId + "&rel=0&showinfo=0&iv_load_policy=3&disablekb=1"} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} allow="autoplay; encrypted-media" allowFullScreen />
                  </div>
                </div>
              </div>
            </div>

            {/* LEFT: border layer */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "55%", height: "100%" }}>
              <div style={{ height: "100%", width: "100%", borderRadius: "0.75rem", clipPath: LEFT_CLIP, background: "rgba(255,255,255,0.12)" }} />
            </div>

            {/* LEFT: fill layer — 1px inset for border effect */}
            <div style={{ position: "absolute", top: "1px", left: "1px", width: "calc(55% - 2px)", height: "calc(100% - 2px)" }}>
              <div style={{ height: "100%", width: "100%", borderRadius: "0.75rem", clipPath: LEFT_CLIP, background: "rgba(10,10,14,0.97)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "8%" }}>

                <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#fff", margin: 0 }}>{t.name}</p>

                <p style={{ fontSize: "clamp(1rem, 1.6vw, 1.35rem)", fontWeight: 300, lineHeight: 1.65, color: "#e5e5e5", maxWidth: "70%", margin: 0 }}>&ldquo;{t.quote}&rdquo;</p>

                <div>
                  <div style={{ width: 32, height: 1, background: "#404040", marginBottom: "0.6rem" }} />
                  <p style={{ fontSize: "0.85rem", color: "#a3a3a3", margin: "0 0 0.5rem 0" }}>&mdash; {t.role}</p>
                  <a href="#" onMouseEnter={hoverLink} onMouseLeave={unhoverLink} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: "0.85rem", color: "#a3a3a3", textDecoration: "none" }}>Read more &#8599;</a>
                </div>

              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: "1.5rem" }}>
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{ height: 3, width: i === index ? 48 : 24, borderRadius: 9999, border: "none", cursor: "pointer", transition: "all 0.5s", background: i === index ? "linear-gradient(to right, #818cf8, #f87171)" : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>

    </section>
  );
}