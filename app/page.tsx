"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import NeuralNetwork from "@/components/NeuralNetwork";
import ThoughtLeadershipSection from "@/components/ThoughtLeadershipSection";
import AIParticlesSection from "@/components/AIParticlesSection";
import AIParticles from "@/components/AIParticles";
import CTAParticles from "@/components/CTAParticles";
import TechEcosystem from "@/components/TechEcosystem";
import AmbientAIGrid from "@/components/AmbientAIGrid";
import AICapabilities from "@/components/AICapabilities";
import ScrollReveal from "@/components/ScrollReveal";
import BackgroundGlow from "@/components/BackgroundGlow";
import HeroNetwork from "@/components/HeroNetwork";
import GlobalAIAmbience from "@/components/GlobalAIAmbience";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import AIButton from "@/components/AIButton";

function SlideFadeSection({ children, direction = "left" }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px 0px -100px 0px", triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="w-full">
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden perspective-[1200px] will-change-transform">
      <SmoothScroll />
      <CursorGlow />
      <GlobalAIAmbience />
      <BackgroundGlow />
      <AmbientAIGrid />
      {/* Global AI Gradient Background */}
{/* Global AI Gradient Background */}
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

  {/* top glow */}
  <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 blur-[180px]"></div>

  {/* middle glow */}
  <div className="absolute top-[40%] left-[10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[180px]"></div>

  {/* bottom glow */}
  <div className="absolute bottom-[-200px] right-[10%] w-[700px] h-[700px] bg-violet-600/10 blur-[180px]"></div>

</div>

{/* ================= HERO ================= */}

<section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden text-center px-6">

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/videos/hero-bg.mp4" type="video/mp4" />
  </video>

  {/* Ambient AI Glow */}
  <div className="absolute inset-0 z-10 pointer-events-none">
    <HeroNetwork />
  </div>

  {/* Neural Network Animation */}
  <div className="absolute inset-0 z-20 pointer-events-none">
    <NeuralNetwork />
  </div>

  {/* Readability Overlay */}
  <div className="absolute inset-0 bg-black/30 z-30"></div>

  {/* Hero Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-40 max-w-4xl space-y-8"
  >

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-white"
      style={{ textShadow: "0 10px 40px rgba(59,130,246,0.35)" }}
    >
      From insight to execution{" "}
      <span className="text-blue-400">
        we make transformation happen
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="text-lg max-w-2xl mx-auto text-neutral-200"
    >
      We architect, govern, and scale AI systems that drive measurable
      enterprise outcomes across infrastructure, data, and intelligence.
    </motion.p>

  </motion.div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.4, duration: 1 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40"
  >
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="flex flex-col items-center text-neutral-300"
    >
      <div className="w-[2px] h-12 bg-gradient-to-b from-white/80 to-transparent"></div>
    </motion.div>
  </motion.div>

</section>


{/* ================= TESTIMONIALS ================= */}
<SlideFadeSection direction="left">
  <ScrollReveal>
  <section className="max-w-7xl mx-auto px-6 py-40 grid lg:grid-cols-2 gap-28 items-center">

    {/* Video */}
    <div className="relative group">

      {/* glow background */}
      <div className="absolute -inset-10 bg-blue-500/20 blur-3xl opacity-40 group-hover:opacity-60 transition duration-700"></div>

      {/* video frame */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_60px_160px_rgba(0,0,0,0.9)] aspect-video">

        <iframe
          className="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/Saf8GSPKz2Y?autoplay=1&mute=1&rel=0&playsinline=1"
          title="Client Testimonial"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />

      </div>
    </div>

    {/* Quote */}
    <div className="flex flex-col justify-center">

      <p className="text-3xl md:text-4xl leading-relaxed font-light text-neutral-200">
        “KSquare helped us unify enterprise data infrastructure and deploy AI
        intelligence across our organization.”
      </p>

      <div className="mt-10 space-y-1 text-neutral-400">
        <p className="font-semibold text-white text-lg">
          Bank of St Lucia
        </p>
        <p className="text-sm">
          Eastern Caribbean Financial Holding Company
        </p>
      </div>

    </div>

  </section>
  </ScrollReveal>
</SlideFadeSection>

{/* ================= TECHNOLOGY ECOSYSTEM ================= */}

<SlideFadeSection direction="right">
  <ScrollReveal>
    <TechEcosystem />
  </ScrollReveal>
</SlideFadeSection>

      {/* ================= AI CAPABILITIES ================= */}
      <ScrollReveal>
      <AICapabilities />
      </ScrollReveal>

{/* ================= CASE STUDIES ================= */}
<SlideFadeSection direction="left">

<section className="max-w-7xl mx-auto px-6 py-40 space-y-24">

  {/* Section Header */}
  <ScrollReveal>
  <div className="text-center max-w-3xl mx-auto space-y-4">
    <p className="text-sm uppercase tracking-widest text-neutral-500">
      Transformation Impact
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold text-white">
      Real enterprise AI deployments
    </h2>

    <p className="text-neutral-400 text-lg">
      From predictive supply chains to intelligent customer platforms,
      we help enterprises deploy AI systems that deliver measurable outcomes.
    </p>
  </div>
  </ScrollReveal>


  {/* Featured Case Study */}
  <ScrollReveal delay={0.1}>
<motion.div
  whileHover={{
    scale: 1.03,
    y: -6,
    rotateX: 2,
  }}
  transition={{ type: "spring", stiffness: 120 }}
    className="group relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-800/80 via-indigo-800/60 to-purple-800/60 shadow-[0_60px_160px_rgba(0,0,0,0.9)] cursor-pointer transition-all duration-500"
  >

    <AIParticles className="absolute inset-0 z-0" />

    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/10 blur-3xl"></div>

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20 blur-2xl"></div>

    <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">

      <div className="md:w-1/2 text-white space-y-3">
        <p className="uppercase text-sm text-blue-400 font-semibold tracking-widest">
          Case Study
        </p>

        <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
          AI-Driven Supply Chain Optimization
        </h3>

        <p className="text-lg md:text-xl font-light text-neutral-200">
          Leveraged predictive AI models to reduce operational costs by 22%
          while improving delivery speed for a global enterprise.
        </p>

<a
  href="/case-studies/ai-supply-chain"
  className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold shadow-lg transition"
>
  Explore Case Study
</a>
      </div>

      <div className="rounded-xl shadow-md w-full object-cover transition duration-700 group-hover:scale-105">
        <img
          src="/assets/case-studies/AI-Driven Supply Chain.png"
          alt="AI Supply Chain"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>

    </div>
  </motion.div>
  </ScrollReveal>



{/* Small Case Studies */}
<div className="grid md:grid-cols-2 gap-12 mt-16">

  {/* Card 1 */}
  <ScrollReveal delay={0.2}>
    <a href="/case-studies/customer-insights">
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -6,
          rotateX: 2,
        }}
        transition={{ type: "spring", stiffness: 120 }}
        className="group relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700/70 via-indigo-700/50 to-purple-700/50 shadow-[0_40px_100px_rgba(0,0,0,0.7)] cursor-pointer transition-all duration-500"
      >

        {/* glow layers */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-purple-500/5 blur-2xl"></div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20 blur-xl"></div>

        <div className="relative z-10 p-8 grid md:grid-cols-2 gap-6 items-center">

          <div className="text-white space-y-2">
            <p className="uppercase text-xs text-blue-300 font-semibold tracking-widest">
              Case Study
            </p>

            <h4 className="text-2xl md:text-3xl font-semibold leading-snug">
              Intelligent Customer Insights Platform
            </h4>

            <p className="text-sm md:text-base text-neutral-300 font-light">
              Built a unified AI-driven platform that delivered real-time
              customer insights and increased retention by 18%.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl">
            <img
              src="/assets/case-studies/Customer-Insights.png"
              alt="Customer Insights"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

        </div>
      </motion.div>
    </a>
  </ScrollReveal>


  {/* Card 2 */}
  <ScrollReveal delay={0.3}>
    <a href="/case-studies/supply-chain-insights">
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -6,
          rotateX: 2,
        }}
        transition={{ type: "spring", stiffness: 120 }}
        className="group relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700/70 via-indigo-700/50 to-purple-700/50 shadow-[0_40px_100px_rgba(0,0,0,0.7)] cursor-pointer transition-all duration-500"
      >

        {/* glow layers */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-purple-500/5 blur-2xl"></div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20 blur-xl"></div>

        <div className="relative z-10 p-8 grid md:grid-cols-2 gap-6 items-center">

          <div className="text-white space-y-2">
            <p className="uppercase text-xs text-blue-300 font-semibold tracking-widest">
              Case Study
            </p>

            <h4 className="text-2xl md:text-3xl font-semibold leading-snug">
              AI-Powered Supply Chain Insights
            </h4>

            <p className="text-sm md:text-base text-neutral-300 font-light">
              Implemented predictive analytics to optimize supply chain workflows,
              reducing costs and improving delivery efficiency.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl">
            <img
              src="/assets/case-studies/Supply-Chain-Insights.png"
              alt="Supply Chain Insights"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

        </div>
      </motion.div>
    </a>
  </ScrollReveal>

</div>

</section>

</SlideFadeSection>


{/* ================= THOUGHT LEADERSHIP ================= */}

<SlideFadeSection direction="left">
  <ScrollReveal>

<section className="relative max-w-7xl mx-auto px-6 py-40 overflow-hidden">

  {/* background glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-[20%] top-[-200px] w-[600px] h-[600px] bg-blue-600/10 blur-[160px]" />
    <div className="absolute right-[10%] bottom-[-200px] w-[600px] h-[600px] bg-indigo-600/10 blur-[160px]" />
  </div>

  {/* header */}
  <div className="text-center mb-20 relative z-10">

    <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
      Thought Leadership
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
      Insights shaping the future of enterprise AI
    </h2>

    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
      Explore perspectives on AI systems, data platforms, and intelligent
      enterprises from the KSquare research and engineering teams.
    </p>

  </div>

  {/* premium cards */}

{/* premium cards */}

<div className="space-y-10 relative z-10">

{/* FEATURED INSIGHT */}

<motion.div
  whileHover={{ scale: 1.02, y: -6 }}
  className="group relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-[0_40px_120px_rgba(0,0,0,0.9)] cursor-pointer"
>

  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20 opacity-0 group-hover:opacity-100 transition duration-700 blur-2xl"></div>

  <div className="relative z-10 grid md:grid-cols-2 items-center">

    <div className="p-10 md:p-14 space-y-4">

      <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
        Featured Insight
      </p>

      <h3 className="text-3xl md:text-4xl font-semibold">
        AI Systems for Enterprise Transformation
      </h3>

      <p className="text-neutral-400">
        How organizations are deploying AI platforms that reshape operations
        and decision systems across modern enterprises.
      </p>

      <span className="text-blue-400 font-medium">
        Read Insight →
      </span>

    </div>

    <div className="overflow-hidden h-[320px] md:h-full">

      <img
        src="/assets/thought-leadership/ai-enterprise.png"
        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
      />

    </div>

  </div>

</motion.div>


{/* SMALL INSIGHTS */}

<div className="grid md:grid-cols-2 gap-10">

{[
  {
    title: "The Rise of Enterprise AI Agents",
    description:
      "Autonomous agents are redefining enterprise workflows and decision automation.",
    image: "/assets/thought-leadership/generative-ai.png",
  },
  {
    title: "Building Responsible AI Systems",
    description:
      "Balancing innovation with governance, transparency, and ethical AI deployment.",
    image: "/assets/thought-leadership/ethical-ai.png",
  }
].map((item, idx) => (

<motion.div
  key={idx}
  whileHover={{ scale: 1.03, y: -6 }}
  className="group relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-[0_30px_90px_rgba(0,0,0,0.8)] cursor-pointer"
>

  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20 opacity-0 group-hover:opacity-100 transition duration-700 blur-xl"></div>

  <div className="relative z-10">

    <div className="overflow-hidden h-48">

      <img
        src={item.image}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
      />

    </div>

    <div className="p-6 space-y-2">

      <h4 className="text-xl font-semibold text-white">
        {item.title}
      </h4>

      <p className="text-neutral-400 text-sm">
        {item.description}
      </p>

      <div className="text-blue-400 text-sm mt-3">
        Read Insight →
      </div>

    </div>

  </div>

</motion.div>

))}

</div>

</div>

  {/* CTA */}

  <div className="text-center mt-20">

<AIButton>
  View All Insights
</AIButton>

  </div>

</section>

  </ScrollReveal>
</SlideFadeSection>

      {/* ================= STRATEGIC CTA ================= */}
      
<section className="relative py-40 px-6 text-center overflow-hidden">
  {/* Particle / Glow Background */}
  <div className="absolute inset-0">
    <CTAParticles />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-3xl animate-slow-fade"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto space-y-8">
    <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
      Build the next generation of intelligent enterprises
    </h2>

    <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
      We partner with forward-thinking organizations to design, deploy, and scale
      enterprise AI systems that drive measurable transformation.
    </p>

<AIButton>
  Start a Conversation
</AIButton>
  </div>
</section>

      {/* <SlideFadeSection direction="left">
        <section className="max-w-6xl mx-auto px-6 py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Thought Leadership</h2>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto mb-8">
            Explore our perspectives and insights on AI innovation across industries, shaping the future of enterprise intelligence.
          </p>
          <button className="px-8 py-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 transition">
            View Insights
          </button>
        </section>
      </SlideFadeSection> */}
    </main>
  );
}