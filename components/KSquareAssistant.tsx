"use client";

import { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { AnimatePresence, motion } from "framer-motion";

export default function KSquareAssistant() {
  const [step, setStep] = useState<"bubble" | "firstCard" | "secondCard">(
    "bubble"
  );
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    setStep("bubble");
  };

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particleOptions = {
    fullScreen: false,
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 80, duration: 0.4 } },
    },
    particles: {
      color: { value: "#60a5fa" },
      links: { enable: true, color: "#60a5fa", distance: 120, opacity: 0.1, width: 1 },
      move: { enable: true, speed: 0.05, random: true, outModes: { default: "out" } },
      number: { density: { enable: true, area: 800 }, value: 20 },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 1.5, max: 3 } },
    },
    detectRetina: true,
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.95 },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Bubble always visible with slide-up animation */}
      <motion.button
        onClick={() => setStep("firstCard")}
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className={`w-20 h-20 rounded-full shadow-2xl flex items-center justify-center text-white text-3xl font-bold bg-gradient-to-br from-blue-500 to-blue-700 hover:scale-110 transform transition duration-300 animate-bubblePulse ring-4 ring-blue-400/50 ${
          step !== "bubble" ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        ?
      </motion.button>

      <AnimatePresence>
        {/* First Card */}
        {step === "firstCard" && (
          <motion.div
            key="firstCard"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cardVariants}
            transition={{ duration: 0.35 }}
            className="absolute bottom-0 right-0 rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col items-center justify-between p-6 z-10 hover:scale-105 transition-transform duration-300 bg-black/30 w-80 h-[500px]"
          >
            <Particles
              id="firstCard-bg"
              init={particlesInit}
              className="absolute inset-0 z-0"
              options={particleOptions}
            />
            <div className="absolute inset-0 z-0 bg-black/20 rounded-3xl" />

            <div className="relative z-10 flex flex-col items-center w-full h-full">
              {/* Close button */}
              <button
                onClick={() => setStep("bubble")}
                className="absolute top-3 right-3 text-white text-lg font-bold hover:text-gray-300 z-10"
              >
                ×
              </button>

              <img
                src="/assets/logos/ksquare.png"
                alt="The KSquare Group"
                className="w-36 h-auto mt-4"
              />
              <div className="text-white text-center mt-6 font-semibold text-lg">
                Hi there
              </div>
              <button
                onClick={() => setStep("secondCard")}
                className="mt-auto mb-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transform hover:-translate-y-1 hover:scale-105 transition"
              >
                Ask a question
              </button>
            </div>
          </motion.div>
        )}

        {/* Second Card */}
        {step === "secondCard" && (
          <motion.div
            key="secondCard"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cardVariants}
            transition={{ duration: 0.35 }}
            className="absolute bottom-0 right-0 rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col items-center justify-between p-6 z-10 hover:scale-105 transition-transform duration-300 bg-black/30 w-80 h-[500px]"
          >
            <Particles
              id="secondCard-bg"
              init={particlesInit}
              className="absolute inset-0 z-0"
              options={particleOptions}
            />
            <div className="absolute inset-0 z-0 bg-black/20 rounded-3xl" />

            <div className="relative z-10 flex flex-col items-center w-full h-full">
              {/* Close button */}
              <button
                onClick={() => setStep("bubble")}
                className="absolute top-3 right-3 text-white text-lg font-bold hover:text-gray-300 z-10"
              >
                ×
              </button>
              {/* Back button */}
              <button
                onClick={() => setStep("firstCard")}
                className="absolute top-3 left-3 text-white text-lg font-bold hover:text-gray-300 z-10"
              >
                ←
              </button>

              <img
                src="/assets/logos/ksquare.png"
                alt="The KSquare Group"
                className="w-36 h-auto mt-4"
              />
              <div className="text-white text-center text-sm mt-6">
                Hi, this is KSquare Assistant. I can help you with your questions
                regarding our services.
              </div>
              <form
                onSubmit={handleEmailSubmit}
                className="flex flex-col gap-2 mt-auto mb-6 w-full"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="px-3 py-3 rounded-2xl border border-blue-700 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-full transition"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-3 rounded-2xl font-medium transition shadow-lg transform hover:-translate-y-1 hover:scale-105"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes bubblePulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
          50% {
            transform: scale(1.15);
            box-shadow: 0 0 18px 18px rgba(59, 130, 246, 0.35);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
        .animate-bubblePulse {
          animation: bubblePulse 1.8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}