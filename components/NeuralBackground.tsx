"use client";

import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function NeuralBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async (engine: Engine) => {
      await loadFull(engine);
      setInit(true);
    };

    initParticles({} as Engine);
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },

        background: {
          color: "transparent"
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 90,
            density: { enable: true }
          },

          color: {
            value: "#60a5fa"
          },

          links: {
            enable: true,
            distance: 160,
            color: "#60a5fa",
            opacity: 0.7,
            width: 1.5
          },

          move: {
            enable: true,
            speed: 1,
            outModes: { default: "bounce" }
          },

          opacity: {
            value: 0.9
          },

          size: {
            value: { min: 2, max: 4 }
          }
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            }
          },

          modes: {
            grab: {
              distance: 200,
              links: { opacity: 1 }
            }
          }
        },

        detectRetina: true
      }}

      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0
      }}
    />
  );
}