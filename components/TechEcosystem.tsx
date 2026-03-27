"use client";

const partners = [
  { name: "AWS Partner Network", logo: "/assets/logos/aws.png", bg: "rgba(32,45,65,0.4)", border: "rgba(255,153,0,0.2)", hoverBorder: "rgba(255,153,0,0.5)" },
  { name: "NVIDIA Partner", logo: "/assets/logos/nvidia.png", bg: "rgba(255,255,255,0.06)", border: "rgba(118,185,0,0.2)", hoverBorder: "rgba(118,185,0,0.5)" },
  { name: "Microsoft Partner", logo: "/assets/logos/microsoft.png", bg: "rgba(255,255,255,0.06)", border: "rgba(0,164,239,0.2)", hoverBorder: "rgba(0,164,239,0.5)" },
  { name: "Salesforce Summit Partner", logo: "/assets/logos/salesforce.png", bg: "rgba(0,46,97,0.5)", border: "rgba(0,161,224,0.2)", hoverBorder: "rgba(0,161,224,0.5)" },
];

const track = [...partners, ...partners, ...partners];

export default function TechnologyEcosystem() {
  return (
    <section style={{ position: "relative", padding: "1.5rem 0", overflow: "hidden" }}>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)", marginBottom: "1.25rem" }} />

      <p style={{ textAlign: "center", fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1.25rem" }}>
        Trusted technology partners
      </p>

      {/* Left fade */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 180, zIndex: 10, pointerEvents: "none", background: "linear-gradient(to right, rgb(0,0,0) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)" }} />
      {/* Right fade */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 180, zIndex: 10, pointerEvents: "none", background: "linear-gradient(to left, rgb(0,0,0) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)" }} />

      <div style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", width: "max-content", animation: "ksq-marquee 35s linear infinite", paddingLeft: "1.5rem" }}>
          {track.map((p, i) => (
            <PartnerCard key={i} partner={p} />
          ))}
        </div>
      </div>

      <div style={{ borderBottom: "0.5px solid rgba(255,255,255,0.07)", marginTop: "1.25rem" }} />

      <style>{`
        @keyframes ksq-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .ksq-partner-card:hover { opacity: 1 !important; transform: translateY(-3px) !important; }
        .ksq-partner-card:hover .ksq-partner-img { opacity: 1 !important; }
      `}</style>
    </section>
  );
}

function PartnerCard({ partner }: { partner: typeof partners[0] }) {
  return (
    <div className="ksq-partner-card" style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.85rem 1.75rem", borderRadius: "0.875rem", background: partner.bg, border: `0.5px solid ${partner.border}`, backdropFilter: "blur(12px)", opacity: 0.65, transition: "opacity 0.35s ease, transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease", cursor: "default", minWidth: 160 }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = partner.hoverBorder; el.style.boxShadow = `0 0 24px ${partner.hoverBorder.replace('0.5', '0.15')}`; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = partner.border; el.style.boxShadow = "none"; }}
    >
      <img className="ksq-partner-img" src={partner.logo} alt={partner.name} style={{ height: 34, width: "auto", maxWidth: 150, objectFit: "contain", display: "block", opacity: 0.85, transition: "opacity 0.3s ease" }} />
    </div>
  );
}