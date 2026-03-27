"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "2009", label: "Founded" },
  { value: "200+", label: "Team members" },
  { value: "5", label: "Countries" },
  { value: "50+", label: "Enterprise clients" },
];

const values = [
  { title: "Engineering first", description: "We build real systems that operate in production — not just strategies and slide decks. Every engagement ends with working software.", accent: "#4ca8ff" },
  { title: "Enterprise scale", description: "We design platforms capable of supporting large organisations with complex infrastructure, high availability, and operational demands.", accent: "#a78bfa" },
  { title: "Responsible AI", description: "Governance, transparency, and reliability are core principles in every AI system we deploy — especially in regulated industries.", accent: "#34d399" },
  { title: "Global delivery", description: "With teams across 5 countries, we bring local knowledge and global scale to every engagement — following the sun for 24/7 delivery.", accent: "#fb923c" },
];

const timeline = [
  { year: "2009", event: "Founded in Dallas, TX", detail: "KSquare Group established to bridge the gap between enterprise complexity and AI potential." },
  { year: "2015", event: "Salesforce partnership", detail: "Became an official Salesforce partner, expanding into AI-powered CRM and enterprise cloud." },
  { year: "2019", event: "Global expansion", detail: "Opened offices in Mexico, India, Dominican Republic and St. Lucia — building a 24/7 delivery model." },
  { year: "2022", event: "AI transformation focus", detail: "Shifted focus entirely to enterprise AI — data platforms, ML systems, and intelligent automation." },
  { year: "2024", event: "Agentforce & LLM practice", detail: "Launched dedicated Agentic AI practice, helping enterprises deploy autonomous AI systems at scale." },
];

const focus = [
  "Enterprise AI architecture",
  "Data platform engineering",
  "Machine learning systems",
  "Intelligent automation",
  "AI quality & governance",
  "Salesforce & Agentforce",
];

// ── Office data — lon drives daylight calculation ─────────────────────────────

const OFFICES = [
  { country: "United States", city: "Dallas, TX", flag: "🇺🇸", hq: true, cx: 178, cy: 168, lon: -96.8 },
  { country: "Mexico", city: "Guadalajara", flag: "🇲🇽", hq: false, cx: 163, cy: 193, lon: -103.3 },
  { country: "Dominican Republic", city: "Santo Domingo", flag: "🇩🇴", hq: false, cx: 232, cy: 193, lon: -69.9 },
  { country: "St. Lucia", city: "Castries", flag: "🇱🇨", hq: false, cx: 248, cy: 205, lon: -60.9 },
  { country: "India", city: "Hyderabad", flag: "🇮🇳", hq: false, cx: 590, cy: 188, lon: 78.5 },
];

// ── Globe component ───────────────────────────────────────────────────────────

function GlobalGlobe() {
  const FLAGS: Record<string, string> = {
    US: "🇺🇸", MX: "🇲🇽", DO: "🇩🇴", SL: "🇱🇨", IN: "🇮🇳",
  };

  const [sunX, setSunX] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const PERIOD = 24000;

  useEffect(() => {
    const animate = (time: number) => {
      if (!startRef.current) startRef.current = time;
      const elapsed = (time - startRef.current) % PERIOD;
      setSunX((elapsed / PERIOD) * 800);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  function project(lon: number, lat: number): [number, number] {
    const x = ((lon + 180) / 360) * 800;
    const latR = (lat * Math.PI) / 180;
    const mercY = Math.log(Math.tan(Math.PI / 4 + latR / 2));
    const y = (1 - mercY / Math.PI) * 160 + 20;
    return [x, y];
  }

  function ring(coords: [number, number][]): string {
    return coords.map((c, i) => {
      const [x, y] = project(c[0], c[1]);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ") + " Z";
  }

  const landPaths: string[] = [
    ring([[-124.7,48.4],[-123.3,48.2],[-122.4,48.2],[-121.2,49.0],[-117.0,49.0],[-110.0,49.0],[-100.0,49.0],[-95.2,49.0],[-93.5,48.5],[-88.4,48.3],[-84.7,46.0],[-83.5,46.1],[-83.1,42.2],[-82.2,42.0],[-79.7,43.5],[-79.0,43.1],[-76.8,44.2],[-75.0,44.9],[-72.3,45.0],[-70.0,46.7],[-67.8,47.1],[-66.9,44.8],[-70.2,43.7],[-70.9,42.9],[-73.6,40.6],[-74.3,39.6],[-75.0,38.9],[-76.0,38.0],[-76.3,34.8],[-77.0,33.9],[-79.5,32.2],[-81.0,30.8],[-81.4,29.1],[-82.9,28.8],[-84.0,29.7],[-85.0,29.7],[-86.5,30.4],[-87.5,30.2],[-88.5,30.3],[-89.6,29.2],[-90.3,29.3],[-93.8,29.8],[-96.6,26.1],[-97.1,25.9],[-97.4,27.9],[-97.1,28.2],[-97.4,28.5],[-97.4,29.0],[-99.5,27.2],[-100.8,28.2],[-101.9,29.7],[-103.6,29.0],[-104.5,29.6],[-105.0,30.6],[-106.6,31.8],[-108.2,31.3],[-111.0,31.3],[-114.8,32.5],[-117.1,32.5],[-118.5,34.0],[-120.5,34.5],[-122.4,37.8],[-124.2,40.1],[-124.7,48.4]]),
    ring([[-141,60],[-141,70],[-156,72],[-163,71],[-166,64],[-168,63],[-162,60],[-160,58],[-152,58],[-149,60],[-145,60],[-141,60]]),
    ring([[-141,60],[-117,60],[-100,60],[-89,60],[-84,46],[-83,46],[-76,44],[-75,45],[-67,47],[-60,46],[-65,44],[-66,43],[-70,46],[-72,45],[-74,45],[-77,44],[-79,43],[-82,42],[-83,42],[-83,46],[-84,46],[-90,48],[-93,48],[-95,49],[-100,49],[-110,49],[-117,49],[-121,49],[-123,48],[-125,50],[-130,55],[-135,58],[-137,59],[-141,60]]),
    ring([[-73,76],[-57,82],[-23,83],[-18,76],[-24,68],[-45,60],[-53,67],[-60,72],[-73,76]]),
    ring([[-117,32],[-111,31],[-108,30],[-104,29],[-100,28],[-97,22],[-91,18],[-88,16],[-90,18],[-92,18],[-94,18],[-96,19],[-97,22],[-97,26],[-101,20],[-103,19],[-105,21],[-109,23],[-110,24],[-109,27],[-111,29],[-113,29],[-114,31],[-117,32]]),
    ring([[-92,18],[-88,16],[-83,10],[-77,7],[-76,8],[-78,9],[-83,10],[-85,11],[-86,13],[-87,14],[-89,15],[-90,15],[-92,15],[-92,18]]),
    ring([[-85,22],[-82,23],[-75,20],[-77,20],[-83,22],[-85,22]]),
    ring([[-74,18],[-72,18],[-69,18],[-69,19],[-72,20],[-74,19],[-74,18]]),
    ring([[-61,14],[-61,13],[-60,13],[-61,14]]),
    ring([[-77,8],[-72,12],[-72,11],[-70,12],[-67,6],[-66,2],[-70,2],[-72,2],[-75,0],[-77,1],[-79,2],[-77,8]]),
    ring([[-73,12],[-67,11],[-62,11],[-61,11],[-60,6],[-61,4],[-64,4],[-67,2],[-67,6],[-70,12],[-73,12]]),
    ring([[-35,-5],[-35,-10],[-38,-15],[-40,-20],[-43,-23],[-44,-23],[-46,-24],[-48,-26],[-50,-29],[-51,-33],[-53,-33],[-53,-31],[-57,-30],[-58,-28],[-58,-20],[-60,-16],[-60,-13],[-64,-10],[-68,-11],[-70,-10],[-72,-10],[-73,-8],[-72,-2],[-70,2],[-67,2],[-64,4],[-61,4],[-60,5],[-60,9],[-63,4],[-65,1],[-68,2],[-69,0],[-72,-2],[-73,-8],[-70,-10],[-72,-10],[-68,-11],[-64,-10],[-60,-13],[-58,-20],[-57,-24],[-54,-28],[-53,-33],[-49,-28],[-48,-26],[-44,-23],[-40,-20],[-38,-15],[-35,-10],[-35,-5]]),
    ring([[-53,-33],[-58,-34],[-62,-38],[-65,-40],[-65,-45],[-67,-46],[-65,-55],[-68,-54],[-69,-52],[-72,-50],[-72,-46],[-70,-42],[-69,-39],[-68,-35],[-65,-32],[-63,-28],[-57,-20],[-58,-20],[-58,-28],[-57,-30],[-53,-33]]),
    ring([[-69,-17],[-69,-21],[-67,-24],[-68,-30],[-70,-33],[-71,-35],[-72,-39],[-72,-42],[-72,-46],[-68,-46],[-67,-45],[-65,-46],[-65,-55],[-67,-46],[-72,-50],[-72,-46],[-70,-42],[-71,-35],[-70,-33],[-68,-30],[-67,-24],[-69,-21],[-69,-17]]),
    ring([[2,51],[3,51],[4,53],[7,53],[8,55],[10,55],[12,56],[14,55],[14,53],[14,51],[12,50],[14,48],[14,47],[11,47],[8,47],[7,44],[3,43],[1,43],[-2,44],[-5,44],[-8,44],[-9,39],[-7,37],[-5,36],[-2,36],[0,37],[3,40],[0,41],[0,43],[3,43],[7,44],[8,47],[11,47],[14,47],[14,48],[14,53],[12,54],[8,55],[5,53],[4,53],[3,51],[2,51]]),
    ring([[-6,50],[-5,50],[-4,51],[-3,51],[-2,52],[-3,54],[-3,56],[-5,58],[-3,58],[-2,57],[0,54],[2,52],[1,51],[-1,50],[-2,50],[-3,51],[-4,51],[-5,50],[-6,50]]),
    ring([[-10,52],[-8,51],[-6,52],[-8,55],[-10,54],[-10,52]]),
    ring([[5,58],[5,57],[8,57],[10,58],[11,56],[11,58],[14,58],[17,57],[20,59],[26,62],[28,65],[28,70],[25,71],[16,70],[14,65],[12,62],[8,58],[5,58]]),
    ring([[20,59],[21,57],[24,57],[28,58],[29,60],[29,63],[28,65],[26,62],[20,59]]),
    ring([[14,54],[20,54],[24,54],[24,58],[25,58],[27,57],[28,56],[26,55],[24,54],[20,54],[17,54],[14,54]]),
    ring([[14,54],[20,54],[24,54],[28,56],[30,60],[28,65],[28,70],[32,68],[36,68],[40,68],[44,69],[50,68],[55,72],[58,70],[60,68],[60,60],[56,56],[52,52],[50,50],[48,46],[44,44],[40,44],[36,48],[34,48],[30,52],[28,56],[26,55],[24,54],[20,54],[17,54],[14,54]]),
    ring([[60,68],[70,68],[80,70],[90,72],[100,72],[110,70],[120,68],[130,66],[140,62],[150,60],[160,58],[168,60],[175,64],[180,68],[175,72],[160,72],[150,72],[140,72],[130,72],[120,72],[110,72],[100,70],[90,72],[80,70],[70,68],[60,68]]),
    ring([[22,48],[24,48],[28,48],[30,50],[34,50],[36,48],[34,46],[32,46],[30,46],[28,45],[26,46],[24,48],[22,48]]),
    ring([[26,42],[28,42],[30,41],[36,38],[40,38],[44,38],[44,41],[40,42],[36,42],[32,42],[28,42],[26,42]]),
    ring([[36,38],[36,32],[37,22],[45,22],[55,22],[60,22],[60,25],[58,24],[56,26],[55,28],[52,28],[50,28],[48,30],[46,30],[44,32],[42,37],[40,38],[36,38]]),
    ring([[44,38],[48,38],[56,38],[62,36],[60,36],[58,36],[56,36],[52,34],[48,34],[44,36],[44,38]]),
    ring([[-6,35],[0,37],[5,37],[10,37],[12,34],[12,32],[14,30],[15,22],[15,15],[15,10],[10,5],[5,5],[2,4],[-2,5],[-5,5],[-8,5],[-8,10],[-15,10],[-15,15],[-17,15],[-17,20],[-17,24],[-10,28],[-8,28],[-5,30],[-2,35],[-6,35]]),
    ring([[10,5],[15,4],[18,5],[20,8],[24,5],[25,3],[28,2],[32,-4],[36,-2],[40,0],[42,2],[44,8],[45,12],[43,12],[40,11],[38,12],[34,10],[30,4],[25,3],[20,8],[15,4],[10,5]]),
    ring([[15,10],[20,10],[24,8],[28,8],[30,10],[32,8],[35,10],[36,14],[34,16],[32,18],[30,18],[28,18],[25,18],[22,20],[20,22],[18,22],[15,22],[15,10]]),
    ring([[14,30],[15,22],[22,20],[28,22],[30,22],[32,22],[36,22],[36,30],[32,32],[28,32],[24,32],[22,32],[18,32],[14,30]]),
    ring([[30,4],[32,-4],[36,-2],[38,-4],[36,-10],[36,-18],[34,-20],[32,-22],[28,-24],[26,-26],[24,-28],[18,-30],[16,-28],[14,-24],[12,-22],[12,-18],[14,-12],[14,-6],[14,0],[18,5],[20,8],[24,5],[25,3],[28,2],[30,4]]),
    ring([[32,-22],[34,-24],[36,-26],[34,-28],[30,-30],[28,-30],[24,-32],[22,-34],[18,-34],[16,-34],[14,-34],[14,-30],[18,-30],[24,-28],[26,-26],[28,-24],[32,-22]]),
    ring([[44,-12],[48,-14],[50,-18],[50,-22],[46,-26],[44,-24],[42,-22],[42,-16],[44,-12]]),
    ring([[78,36],[80,36],[82,38],[86,42],[88,46],[92,48],[96,50],[100,50],[104,48],[106,44],[110,44],[114,40],[118,38],[120,34],[122,30],[120,24],[116,22],[110,20],[106,22],[102,22],[100,22],[98,22],[95,26],[90,26],[88,28],[86,28],[82,30],[80,34],[78,36]]),
    ring([[68,24],[70,20],[72,22],[72,24],[74,24],[76,20],[80,12],[80,8],[78,8],[76,10],[74,14],[72,16],[68,20],[65,22],[65,24],[68,24]]),
    ring([[68,24],[70,26],[72,28],[74,28],[76,30],[78,32],[80,34],[78,36],[74,36],[72,34],[70,30],[68,28],[68,24]]),
    ring([[80,8],[80,6],[82,8],[80,8]]),
    ring([[98,22],[100,20],[102,18],[104,10],[104,4],[102,2],[100,2],[100,4],[102,8],[100,10],[100,14],[98,16],[95,22],[98,22]]),
    ring([[95,6],[98,4],[102,2],[106,0],[106,-4],[102,-4],[98,-2],[95,2],[95,6]]),
    ring([[108,0],[110,2],[114,2],[116,4],[118,4],[116,2],[114,0],[110,-2],[108,-2],[108,0]]),
    ring([[126,38],[128,36],[130,36],[130,38],[128,40],[126,38]]),
    ring([[130,34],[132,34],[134,36],[136,36],[138,36],[140,38],[142,40],[140,40],[138,38],[136,36],[134,35],[132,34],[130,34]]),
    ring([[140,42],[142,44],[144,44],[142,42],[140,42]]),
    ring([[114,-22],[118,-20],[122,-18],[126,-14],[130,-12],[134,-12],[136,-14],[138,-16],[140,-18],[144,-18],[146,-20],[148,-20],[150,-22],[152,-24],[154,-26],[152,-28],[150,-32],[150,-36],[146,-38],[144,-38],[140,-36],[136,-34],[132,-32],[128,-32],[125,-32],[122,-34],[118,-34],[114,-34],[112,-30],[112,-26],[114,-22]]),
    ring([[144,-40],[146,-42],[148,-42],[146,-40],[144,-40]]),
    ring([[168,-46],[170,-44],[172,-44],[174,-42],[172,-40],[170,-40],[168,-42],[168,-46]]),
    ring([[172,-36],[174,-36],[176,-38],[174,-40],[172,-38],[172,-36]]),
  ];

  const offices = [
    { country: "United States", city: "Dallas, TX", flag: "US", hq: true, lon: -96.8, lat: 32.8 },
    { country: "Mexico", city: "Mexico City", flag: "MX", hq: false, lon: -99.1, lat: 19.4 },
    { country: "Dominican Republic", city: "Santo Domingo", flag: "DO", hq: false, lon: -69.9, lat: 18.5 },
    { country: "St. Lucia", city: "Castries", flag: "SL", hq: false, lon: -61.0, lat: 14.0 },
    { country: "India", city: "Hyderabad", flag: "IN", hq: false, lon: 78.5, lat: 17.4 },
  ];

  const sunLon = (sunX / 800) * 360 - 180;
  const sunY = 65;
  const dayWidth = 200;
  const nightAlpha = 0.62;

  function getDaylight(lon: number) {
    let diff = Math.abs(lon - sunLon);
    if (diff > 180) diff = 360 - diff;
    return Math.max(0, 1 - diff / 90);
  }

  return (
    <div style={{ borderRadius: "1.5rem", overflow: "hidden", border: "0.5px solid rgba(255,255,255,0.1)" }}>
      <svg width="100%" viewBox="0 0 800 340" style={{ display: "block" }}>
        <defs>
          <linearGradient id="skyBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#04060f" />
            <stop offset="100%" stopColor="#070b1c" />
          </linearGradient>
          <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff8e0" />
            <stop offset="35%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
          <linearGradient id="nightL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={`rgba(3,5,14,${nightAlpha})`} />
            <stop offset="100%" stopColor="rgba(3,5,14,0)" />
          </linearGradient>
          <linearGradient id="nightR" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(3,5,14,0)" />
            <stop offset="100%" stopColor={`rgba(3,5,14,${nightAlpha})`} />
          </linearGradient>
          <clipPath id="mapClip"><rect x="0" y="0" width="800" height="340" /></clipPath>
        </defs>

        <rect x="0" y="0" width="800" height="340" fill="url(#skyBg)" />

        <ellipse cx={sunX} cy={sunY + 40} rx={230} ry={200}
          fill="rgba(255,170,30,0.06)" />

        {[60, 30, 0, -30, -60].map((lat) => {
          const [, y] = project(0, lat);
          return <line key={lat} x1="0" y1={y} x2="800" y2={y}
            stroke={lat === 0 ? "rgba(76,168,255,0.18)" : "rgba(255,255,255,0.05)"}
            strokeWidth={lat === 0 ? 0.75 : 0.4} />;
        })}
        {[-120, -60, 0, 60, 120].map((lon) => {
          const [x] = project(lon, 0);
          return <line key={lon} x1={x} y1="0" x2={x} y2="340"
            stroke="rgba(255,255,255,0.04)" strokeWidth="0.4" />;
        })}

        <g clipPath="url(#mapClip)"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="0.65"
          strokeLinejoin="round"
          strokeLinecap="round">
          {landPaths.map((d, i) => <path key={i} d={d} />)}
        </g>

        {sunX > dayWidth && (
          <rect x="0" y="0" width={sunX - dayWidth} height="340"
            fill={`rgba(3,5,14,${nightAlpha})`} clipPath="url(#mapClip)" />
        )}
        <rect x={Math.max(0, sunX - dayWidth)} y="0"
          width={Math.min(dayWidth, sunX)} height="340"
          fill="url(#nightL)" clipPath="url(#mapClip)" />
        <rect x={sunX} y="0"
          width={Math.min(dayWidth, 800 - sunX)} height="340"
          fill="url(#nightR)" clipPath="url(#mapClip)" />
        {sunX + dayWidth < 800 && (
          <rect x={sunX + dayWidth} y="0" width={800 - sunX - dayWidth} height="340"
            fill={`rgba(3,5,14,${nightAlpha})`} clipPath="url(#mapClip)" />
        )}

        <circle cx={sunX} cy={sunY} r={60} fill="rgba(251,191,36,0.05)" />
        <circle cx={sunX} cy={sunY} r={36} fill="rgba(251,191,36,0.09)" />
        <circle cx={sunX} cy={sunY} r={20} fill="rgba(255,220,80,0.14)" />
        <circle cx={sunX} cy={sunY} r={11}
          fill="url(#sunGrad)"
          style={{ filter: "drop-shadow(0 0 8px rgba(251,191,36,1)) drop-shadow(0 0 22px rgba(251,191,36,0.6))" }} />
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          return <line key={i}
            x1={sunX + Math.cos(rad) * 14} y1={sunY + Math.sin(rad) * 14}
            x2={sunX + Math.cos(rad) * 23} y2={sunY + Math.sin(rad) * 23}
            stroke="#fbbf24" strokeWidth="1" opacity="0.5" strokeLinecap="round" />;
        })}

        {offices.map((o, i) => {
          const lit = getDaylight(o.lon);
          const isDay = lit > 0.2;
          const [cx, cy] = project(o.lon, o.lat);
          return (
            <g key={i}>
              {isDay && <circle cx={cx} cy={cy} r={14} fill={`rgba(76,168,255,${lit * 0.15})`} />}
              <circle cx={cx} cy={cy} r={isDay ? 8 : 6}
                fill="none"
                stroke={isDay ? `rgba(76,168,255,${0.35 + lit * 0.5})` : "rgba(255,255,255,0.08)"}
                strokeWidth={isDay ? 0.75 : 0.5}
                style={{ transition: "all 1s ease" }} />
              {o.hq && (
                <circle cx={cx} cy={cy} r={isDay ? 11 : 8}
                  fill="none"
                  stroke={isDay ? `rgba(251,191,36,${0.5 + lit * 0.4})` : "rgba(251,191,36,0.08)"}
                  strokeWidth={0.75}
                  style={{ transition: "all 1s ease" }} />
              )}
              <circle cx={cx} cy={cy} r={isDay ? 4 : 2.5}
                fill={isDay ? "#4ca8ff" : "#111828"}
                stroke={isDay ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.12)"}
                strokeWidth={isDay ? 1.5 : 0.5}
                style={{ transition: "all 1s ease", filter: isDay ? `drop-shadow(0 0 5px rgba(76,168,255,${lit}))` : "none" }} />
              <text x={cx} y={cy - 11} textAnchor="middle"
                style={{ fontSize: "9px", fontFamily: "'Outfit',sans-serif", fontWeight: 500, letterSpacing: "0.1em", fill: isDay ? `rgba(255,255,255,${0.5 + lit * 0.45})` : "rgba(255,255,255,0.12)", transition: "fill 1s ease" }}>
                {o.city.split(",")[0].toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", borderTop: "0.5px solid rgba(255,255,255,0.08)", background: "rgba(4,6,14,0.98)" }}>
        {offices.map((o, i) => {
          const lit = getDaylight(o.lon);
          const isDay = lit > 0.2;
          return (
            <div key={i} style={{ padding: "1.25rem 1.5rem", borderLeft: i > 0 ? "0.5px solid rgba(255,255,255,0.07)" : "none", background: isDay ? `rgba(76,168,255,${0.02 + lit * 0.04})` : "transparent", transition: "background 1s ease", position: "relative" as const }}>
              <div style={{ position: "absolute" as const, top: "0.9rem", right: "0.9rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: isDay ? "#fbbf24" : "rgba(255,255,255,0.12)", boxShadow: isDay ? "0 0 5px #fbbf24" : "none", transition: "all 1s ease" }} />
                <span style={{ fontSize: "0.52rem", letterSpacing: "0.1em", color: isDay ? "rgba(251,191,36,0.7)" : "rgba(255,255,255,0.12)", transition: "color 1s ease" }}>{isDay ? "DAY" : "NIGHT"}</span>
              </div>
              <div style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{FLAGS[o.flag]}</div>
              <div style={{ fontSize: "0.8rem", fontWeight: 500, color: isDay ? "#ffffff" : "rgba(255,255,255,0.3)", marginBottom: "0.15rem", transition: "color 1s ease" }}>{o.country}</div>
              <div style={{ fontSize: "0.8rem", color: isDay ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.15)", transition: "color 1s ease", letterSpacing: "0.02em" }}>{o.city}</div>
              {o.hq && <div style={{ marginTop: "0.5rem", fontSize: "0.7rem", letterSpacing: "0.12em", color: isDay ? "#fbbf24" : "rgba(251,191,36,0.2)", transition: "color 1s ease" }}>● HQ</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Button components ─────────────────────────────────────────────────────────

function HeroCtaPrimary() {
  const [hov, setHov] = useState(false);
  return (
    <a href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: hov ? "#d4d8ff" : "#ffffff", color: "#080810", fontSize: "0.92rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const, padding: "0.85rem 2rem", borderRadius: "9999px", textDecoration: "none", transform: hov ? "translateY(-1px)" : "translateY(0)", transition: "all 0.25s ease" }}>Start a conversation</a>
  );
}

function HeroCtaSecondary() {
  const [hov, setHov] = useState(false);
  return (
    <a href="/case-studies" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: hov ? "#fff" : "rgba(255,255,255,0.6)", fontSize: "0.92rem", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" as const, padding: "0.85rem 2rem", borderRadius: "9999px", textDecoration: "none", border: hov ? "0.5px solid rgba(255,255,255,0.5)" : "0.5px solid rgba(255,255,255,0.18)", transform: hov ? "translateY(-1px)" : "translateY(0)", transition: "all 0.25s ease" }}>See our work &#8594;</a>
  );
}

function CtaPrimary() {
  const [hov, setHov] = useState(false);
  return (
    <a href="/contact" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: hov ? "#d4d8ff" : "#ffffff", color: "#080810", fontSize: "0.92rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const, padding: "0.85rem 2rem", borderRadius: "9999px", textDecoration: "none", transform: hov ? "translateY(-1px)" : "translateY(0)", transition: "all 0.25s ease" }}>Get in touch</a>
  );
}

function TeamLink() {
  const [hov, setHov] = useState(false);
  return (
    <Link href="/team" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.92rem", fontWeight: 400, letterSpacing: "0.05em", textTransform: "uppercase" as const, color: hov ? "#fff" : "rgba(255,255,255,0.6)", border: hov ? "0.5px solid rgba(255,255,255,0.5)" : "0.5px solid rgba(255,255,255,0.18)", padding: "0.85rem 2rem", borderRadius: "9999px", textDecoration: "none", transition: "all 0.25s ease" }}>Meet the team &#8594;</Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CompanyPage() {
  return (
    <main style={{ background: "#000000", color: "#ffffff", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "9rem 1.5rem 5rem" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#9a9aaa", border: "0.5px solid rgba(255,255,255,0.1)", padding: "0.38rem 1rem", borderRadius: "9999px", display: "inline-block" }}>Our company</span>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "end" }}>
          <div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.08, color: "#e8e6f0", marginBottom: "1.75rem" }}>
              Building the AI backbone of<br /><em style={{ color: "#4ca8ff" }}>intelligent enterprises</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, fontWeight: 300, marginBottom: "2.5rem" }}>
              KSquare helps organisations design, deploy, and scale enterprise AI systems that transform fragmented data into operational intelligence.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}>
              <HeroCtaPrimary />
              <HeroCtaSecondary />
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.08)", border: "0.5px solid rgba(255,255,255,0.08)", borderRadius: "1.25rem", overflow: "hidden" }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: "2.5rem 2rem", background: "#000000" }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "3rem", fontWeight: 400, color: "#4ca8ff", lineHeight: 1, marginBottom: "0.5rem" }}>{s.value}</div>
                <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── MISSION ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1.25rem" }}>Our mission</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, lineHeight: 1.2, color: "#e8e6f0", marginBottom: "1.5rem" }}>
              Bridging the gap between AI potential and enterprise reality
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.25rem" }}>
              Artificial intelligence is transforming every industry, yet most organisations struggle to operationalize AI within complex enterprise environments.
            </p>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontWeight: 300 }}>
              KSquare was founded to bridge this gap — helping enterprises build the infrastructure, data platforms, and AI systems required to move from pilot to production at scale.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1.25rem" }}>What we focus on</p>
            <div style={{ display: "flex", flexDirection: "column" as const }}>
              {focus.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 0", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ca8ff", opacity: 0.6, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.72)", fontWeight: 400 }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── VALUES ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>How we work</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, lineHeight: 1.2, color: "#e8e6f0" }}>Our principles</h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "1.25rem", overflow: "hidden" }}>
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} style={{ padding: "2.5rem", background: "#000000", borderLeft: i > 0 ? "0.5px solid rgba(255,255,255,0.07)" : "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: "0.625rem", background: `${v.accent}15`, border: `0.5px solid ${v.accent}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: v.accent }} />
              </div>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.2rem", fontWeight: 400, color: "#e8e6f0", marginBottom: "0.75rem", lineHeight: 1.3 }}>{v.title}</h3>
              <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontWeight: 300 }}>{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── TIMELINE ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>Our journey</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, lineHeight: 1.2, color: "#e8e6f0" }}>15+ years of enterprise delivery</h2>
        </motion.div>
        <div style={{ position: "relative" as const }}>
          <div style={{ position: "absolute" as const, left: 72, top: 0, bottom: 0, width: "0.5px", background: "rgba(255,255,255,0.08)" }} />
          <div style={{ display: "flex", flexDirection: "column" as const }}>
            {timeline.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start", padding: "2rem 0", borderBottom: i < timeline.length - 1 ? "0.5px solid rgba(255,255,255,0.04)" : "none" }}>
                <div style={{ width: 72, flexShrink: 0, textAlign: "right" as const }}>
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.1rem", color: "#4ca8ff", fontWeight: 400 }}>{t.year}</span>
                </div>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ca8ff", flexShrink: 0, marginTop: "0.35rem", position: "relative" as const, zIndex: 1 }} />
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "#e8e6f0", marginBottom: "0.4rem", lineHeight: 1.3 }}>{t.event}</h3>
                  <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.6, fontWeight: 300 }}>{t.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", maxWidth: 1280, margin: "0 auto" }} />

      {/* ── GLOBAL PRESENCE ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9a9aaa", marginBottom: "1rem" }}>Global presence</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, lineHeight: 1.2, color: "#e8e6f0" }}>
            Operating across 5 countries
          </h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.38)", marginTop: "0.75rem", fontWeight: 300 }}>
            Follow the sun — our teams are active around the clock across the Americas and South Asia.
          </p>
        </motion.div>
        <GlobalGlobe />
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 1.5rem 8rem", textAlign: "center" as const }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, lineHeight: 1.15, color: "#e8e6f0", marginBottom: "1.25rem" }}>Ready to work with us?</h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: "44ch", margin: "0 auto 2.5rem", lineHeight: 1.7, fontWeight: 300 }}>
            Join 50+ enterprise organisations that have partnered with KSquare to build intelligent systems that drive real results.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" as const }}>
            <CtaPrimary />
            <TeamLink />
          </div>
        </motion.div>
      </section>

    </main>
  );
}