"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import NeuralNetwork from "@/components/NeuralNetwork";
import AIPlatformSection from "@/components/AIPlatformSection";
import ThoughtLeadershipSection from "@/components/ThoughtLeadershipSection";

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
    <main className="pt-24 relative overflow-hidden">
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
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/videos/hero-bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Optional dark overlay for readability */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10"></div>

  {/* Hero Content */}
  <div className="relative z-20 max-w-4xl space-y-8 text-brown">
    {/* <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
      Revenue. Growth. Innovation.
      <span className="block text-blue-400">Powered by AI.</span>
    </h1> */}
    <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
      From insight to execution, we make transformation happen
    </h1>

    <p className="text-lg max-w-2xl mx-auto">
      We architect, govern, and scale AI systems that drive measurable
      enterprise outcomes across infrastructure, data, and intelligence.
    </p>
  </div>
</section>
 


{/* ================= TESTIMONIALS ================= */}
<SlideFadeSection direction="left">
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
</SlideFadeSection>


      {/* ================= TECHNOLOGY PARTNERS ================= */}
      <SlideFadeSection direction="right">
        <section className="max-w-6xl mx-auto px-6 py-32 text-center">
          <p className="text-sm uppercase tracking-widest text-neutral-500 mb-6">
            Technology Ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-20">
            Built on the world's leading platforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 items-center opacity-70">
            <img src="/assets/logos/aws.png" className="mx-auto h-10 grayscale hover:grayscale-0 transition duration-500" />
            <img src="/assets/logos/nvidia.png" className="mx-auto h-10 grayscale hover:grayscale-0 transition duration-500" />
            <img src="/assets/logos/salesforce.png" className="mx-auto h-10 grayscale hover:grayscale-0 transition duration-500" />
            <img src="/assets/logos/microsoft.png" className="mx-auto h-10 grayscale hover:grayscale-0 transition duration-500" />
          </div>
        </section>
      </SlideFadeSection>

{/* ================= CASE STUDIES ================= */}
<SlideFadeSection direction="left">
  <section className="max-w-7xl mx-auto px-6 py-32">
    {/* Section Heading */}
    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-16 text-center">
      Case Studies
    </h2>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-16">
      {/* Case Study 1 */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.8)] cursor-pointer backdrop-blur-sm"
      >
        {/* Sliding background square */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-32 h-32 bg-blue-600/50 rounded-lg"
        ></motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            AI-Driven Supply Chain Optimization
          </h3>
          <p className="text-neutral-300 mb-6">
            Leveraged predictive AI models to reduce operational costs by 22%
            while improving delivery speed for a global enterprise.
          </p>
          <button className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 transition">
            Explore Case Study
          </button>
        </div>
      </motion.div>

      {/* Case Study 2 */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.8)] cursor-pointer backdrop-blur-sm"
      >
        {/* Sliding background square */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-600/50 rounded-lg"
        ></motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Intelligent Customer Insights Platform
          </h3>
          <p className="text-neutral-300 mb-6">
            Built a unified AI-driven platform that delivered real-time
            customer insights and increased retention by 18%.
          </p>
          <button className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 transition">
            Explore Case Study
          </button>
        </div>
      </motion.div>
    </div>
  </section>
</SlideFadeSection>

      {/* ================= SERVICES TEASER ================= */}
      <SlideFadeSection direction="right">
        <AIPlatformSection />
      </SlideFadeSection>

      {/* ================= THOUGHT LEADERSHIP TEASER ================= */}
      <ThoughtLeadershipSection />

      {/* ================= STRATEGIC CTA ================= */}
<section className="relative py-40 px-6 text-center overflow-hidden">

  {/* glow background */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-3xl"></div>

  <div className="relative max-w-4xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-semibold mb-8">
      Build the next generation of intelligent enterprises
    </h2>

    <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-12">
      We partner with forward-thinking organizations to design, deploy, and scale
      enterprise AI systems that drive measurable transformation.
    </p>

    <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold text-lg shadow-[0_20px_80px_rgba(59,130,246,0.5)]">
      Start a Conversation
    </button>

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