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

function PlayButton({ onClick }: { onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Dark overlay that lightens on hover */}
      <div style={{ position: "absolute", inset: 0, background: hov ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.4)", transition: "background 0.3s ease" }} />
      {/* Play circle */}
      <div style={{ position: "relative", zIndex: 1, width: 64, height: 64, borderRadius: "50%", background: hov ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)", display: "flex", alignItems: "center", justifyContent: "center", transform: hov ? "scale(1.1)" : "scale(1)", transition: "all 0.25s ease", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
        {/* Triangle play icon */}
        <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "18px solid #1a1a2e", marginLeft: 4 }} />
      </div>
    </button>
  );
}

function VideoPanel({ videoId }: { videoId: string }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {!playing ? (
        <>
          {/* Thumbnail */}
          <img src={thumb} alt="Video thumbnail"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={e => { (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; }}
          />
          <PlayButton onClick={() => setPlaying(true)} />
        </>
      ) : (
        /* Only mount iframe after user clicks — avoids autoplay block */
        <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "110%", height: "120%" }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0`}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [animDir, setAnimDir] = useState(1);

  const next = () => { setAnimDir(1);  setIndex(p => (p + 1) % testimonials.length); };
  const prev = () => { setAnimDir(-1); setIndex(p => p === 0 ? testimonials.length - 1 : p - 1); };
  const goTo = (i: number) => { setAnimDir(i > index ? 1 : -1); setIndex(i); };

  const t = testimonials[index];

  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "7rem 1.5rem" }}>

      {/* Title + arrows */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
<h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)", fontWeight: 400, color: "#e8e6f0", lineHeight: 1.1 }}>
  Why leading teams trust KSquare
</h2>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <button onClick={prev} onMouseEnter={hoverWhite} onMouseLeave={unhoverWhite} style={{ background: "none", border: "none", color: "#737373", fontSize: "1.25rem", cursor: "pointer" }}>&#8592;</button>
          <button onClick={next} onMouseEnter={hoverWhite} onMouseLeave={unhoverWhite} style={{ background: "none", border: "none", color: "#737373", fontSize: "1.25rem", cursor: "pointer" }}>&#8594;</button>
        </div>
      </div>

      {/* Aspect ratio wrapper */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "2274 / 1120" }}>
        <AnimatePresence mode="wait">
          <motion.div key={index}
            initial={{ opacity: 0, x: animDir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: animDir * -60 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: "absolute", inset: 0 }}
          >
            {/* RIGHT: video panel */}
            <div style={{ position: "absolute", top: 0, right: 0, width: "56%", height: "100%" }}>
              <div style={{ height: "100%", width: "100%", overflow: "hidden", borderRadius: "0.75rem", clipPath: RIGHT_CLIP }}>
                <VideoPanel key={t.videoId} videoId={t.videoId} />
              </div>
            </div>

            {/* LEFT: border layer */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "55%", height: "100%" }}>
              <div style={{ height: "100%", width: "100%", borderRadius: "0.75rem", clipPath: LEFT_CLIP, background: "rgba(255,255,255,0.12)" }} />
            </div>

            {/* LEFT: fill layer */}
            <div style={{ position: "absolute", top: "1px", left: "1px", width: "calc(55% - 2px)", height: "calc(100% - 2px)" }}>
              <div style={{ height: "100%", width: "100%", borderRadius: "0.75rem", clipPath: LEFT_CLIP, background: "rgba(10,10,14,0.97)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "8%" }}>
                <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#fff", margin: 0 }}>{t.name}</p>
                <p style={{ fontSize: "clamp(1rem, 1.6vw, 1.35rem)", fontWeight: 300, lineHeight: 1.65, color: "#e5e5e5", maxWidth: "70%", margin: 0 }}>&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div style={{ width: 32, height: 1, background: "#404040", marginBottom: "0.6rem" }} />
                  <p style={{ fontSize: "0.95rem", color: "#a3a3a3", margin: "0 0 0.5rem 0" }}>&mdash; {t.role}</p>
                  <a href="#" onMouseEnter={hoverLink} onMouseLeave={unhoverLink} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: "0.95rem", color: "#a3a3a3", textDecoration: "none" }}>Read more &#8599;</a>
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