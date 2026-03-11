// components/AIParticles.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  delay: number;
  rotate: number;
}

export default function AIParticles({ count = 20 }: { count?: number }) {
  const particles = useRef<Particle[]>(
    Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 5,
      rotate: Math.random() * 360,
    }))
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.current.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/30"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.y}%`,
            left: `${p.x}%`,
            rotate: `${p.rotate}deg`,
          }}
          animate={{
            y: [`${p.y}%`, `${p.y + 3}%`, `${p.y}%`],
            x: [`${p.x}%`, `${p.x + 3}%`, `${p.x}%`],
            opacity: [0.3, 0.6, 0.3],
            rotate: [`${p.rotate}deg`, `${p.rotate + 15}deg`, `${p.rotate}deg`],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}