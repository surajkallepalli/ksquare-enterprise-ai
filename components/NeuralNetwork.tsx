"use client";

import { useEffect, useRef } from "react";

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const NODE_COUNT = 90;
    const MAX_DISTANCE = 190;
    const nodes: any[] = [];
    const pulses: any[] = [];
    const mouse = { x: width / 2, y: height / 2 };

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6
      });
    }

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function createPulse(x1: number, y1: number, x2: number, y2: number) {
      if (Math.random() < 0.01) {
        pulses.push({ x: x1, y: y1, tx: x2, ty: y2, progress: 0 });
      }
    }

    function drawConnections(c: CanvasRenderingContext2D) {
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DISTANCE) {
            const opacity = 1 - dist / MAX_DISTANCE;
            c.strokeStyle = `rgba(96,165,250,${opacity * 0.35})`;
            c.lineWidth = 1.3;
            c.beginPath();
            c.moveTo(nodes[i].x, nodes[i].y);
            c.lineTo(nodes[j].x, nodes[j].y);
            c.stroke();
            createPulse(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
          }
        }
      }
    }

    function drawNodes(c: CanvasRenderingContext2D) {
      for (const node of nodes) {
        c.beginPath();
        c.arc(node.x, node.y, 3, 0, Math.PI * 2);
        c.fillStyle = "#60a5fa";
        c.fill();
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }
    }

    function drawPulses(c: CanvasRenderingContext2D) {
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += 0.02;
        const x = p.x + (p.tx - p.x) * p.progress;
        const y = p.y + (p.ty - p.y) * p.progress;
        c.beginPath();
        c.arc(x, y, 2.5, 0, Math.PI * 2);
        c.fillStyle = "#93c5fd";
        c.fill();
        if (p.progress >= 1) pulses.splice(i, 1);
      }
    }

    function drawMouseInteraction(c: CanvasRenderingContext2D) {
      for (const node of nodes) {
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          c.strokeStyle = "rgba(147,197,253,0.35)";
          c.lineWidth = 1;
          c.beginPath();
          c.moveTo(node.x, node.y);
          c.lineTo(mouse.x, mouse.y);
          c.stroke();
        }
      }
    }

    let rafId: number;

function animate() {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
      drawConnections(ctx);
      drawNodes(ctx);
      drawPulses(ctx);
      drawMouseInteraction(ctx);
      rafId = requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-80"
    />
  );
}