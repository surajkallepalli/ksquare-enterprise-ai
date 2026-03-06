"use client";

import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function NeuralBackground() {
  const [init, setInit] = useState(false);

  const particlesInit = async (engine: any) => {
    await loadFull(engine);
    setInit(true);
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#000000" },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: { enable: true },
          },
          color: { value: "#3b82f6" },
          links: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
    />
  );
}