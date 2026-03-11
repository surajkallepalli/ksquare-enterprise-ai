"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface Props {
  className?: string;
}

export default function TechParticles({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    // Set initial size after parent renders
    const resizeCanvas = () => {
      setDimensions({
        width: parent.offsetWidth,
        height: parent.offsetHeight,
      });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let { width, height } = dimensions;

    const particleCount = 60;
    const particles: Particle[] = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: 1 + Math.random() * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100,150,255,0.3)";
        ctx.shadowColor = "rgba(100,150,255,0.5)";
        ctx.shadowBlur = 6;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className={`absolute top-0 left-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}