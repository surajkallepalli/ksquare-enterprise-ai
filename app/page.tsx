"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AIPlatformSection from "@/components/AIPlatformSection";
import NeuralNetwork from "@/components/NeuralNetwork";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
}

export default function Home() {
  return (
    <>
      {/* ================= GLOBAL ANIMATIONS ================= */}
      <style>{`
        @keyframes line-pulse {
          0%, 100% { stroke-opacity: 0.2; }
          50% { stroke-opacity: 0.4; }
        }
        .animate-line-pulse {
          animation: line-pulse 3s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.02); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }

        @keyframes shimmer {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(50%); opacity: 0.15; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes particle-float {
          0% { transform: translate(0, 0); opacity: 0.4; }
          50% { transform: translate(3px, -6px); opacity: 0.2; }
          100% { transform: translate(0, 0); opacity: 0.4; }
        }
        .animate-particle {
          animation-name: particle-float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          position: absolute;
          border-radius: 50%;
        }
      `}</style>

      {/* ================= UNIFIED HOMEPAGE BACKGROUND ================= */}
      <main className="bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white">

        {/* ================= HERO SECTION ================= */}
        <section className="relative flex items-center justify-center min-h-[85vh] px-6 text-center overflow-hidden bg-black">
          {/* Subtle AI glow background */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
          <NeuralNetwork />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] bg-blue-500/30 blur-[140px] animate-pulse"></div>
            <div className="absolute bottom-[-25%] right-[5%] w-[700px] h-[700px] bg-indigo-500/30 blur-[140px] animate-pulse"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40"></div>
<div className="relative z-10 max-w-4xl">
  <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-white">
    Revenue. Growth. Innovation. Powered by AI.
  </h1>

  <p className="mt-6 text-lg text-neutral-300 max-w-2xl mx-auto">
    We architect, govern, and scale AI systems that drive measurable enterprise results—faster, smarter, safer.
    <br/>
    Partner with us to transform your business operations, discover new opportunities, and maximize ROI with AI-driven intelligence.
  </p>

  {/* CTA Buttons */}
  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
    
    <a
      href="/contact"
      className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition shadow-lg"
    >
      Talk to an AI Expert
    </a>

    <a
      href="/services"
      className="px-8 py-4 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition"
    >
      View Solutions
    </a>

  </div>
</div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

{/* PARTNERSHIP LOGOS */}
<section className="py-20 border-y border-neutral-200 dark:border-neutral-800 text-center overflow-hidden">
  <div className="mb-14">
    <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
      Strategic Technology Partnerships
    </p>

    <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white">
      Trusted by global enterprises through strategic technology alliances
    </h3>
  </div>

  <div className="relative w-full overflow-hidden">

    {/* LEFT FADE */}
<div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />

{/* RIGHT FADE */}
<div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

    {/* SCROLL TRACK */}
    <div className="flex animate-scroll gap-20 items-center w-max">

      {/* ORIGINAL LOGOS */}
      <img
        src="/assets/logos/salesforce.png"
        alt="Salesforce Summit Partner"
        className="h-16 w-auto object-contain"
      />

      <img
        src="/assets/logos/aws.png"
        alt="AWS Partner Network"
        className="h-16 w-auto object-contain"
      />

      <img
        src="/assets/logos/nvidia.png"
        alt="AWS Partner Network"
        className="h-16 w-auto object-contain"
      />

      <img
        src="/assets/logos/mulesoft.png"
        alt="MuleSoft Partner"
        className="h-16 w-auto object-contain"
      />

      <img
        src="/assets/logos/microsoft.png"
        alt="Microsoft Partner"
        className="h-16 w-auto object-contain"
      />

      {/* DUPLICATE SET FOR SEAMLESS LOOP */}

      <img
        src="/assets/logos/salesforce.png"
        alt="Salesforce Summit Partner"
        className="h-16 w-auto object-contain"
      />

      <img
        src="/assets/logos/aws.png"
        alt="AWS Partner Network"
        className="h-16 w-auto object-contain"
      />

      <img
        src="/assets/logos/mulesoft.png"
        alt="MuleSoft Partner"
        className="h-16 w-auto object-contain"
      />

      <img
        src="/assets/logos/microsoft.png"
        alt="Microsoft Partner"
        className="h-16 w-auto object-contain"
      />

    </div>
  </div>
</section>

<div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

{/* AI Opportunities Section */}
<section className="relative py-32 overflow-hidden">

  {/* Floating AI Bubbles */}

  {/* Bubble 1 */}
  <motion.div
    animate={{
      y: [0, -40, 0],
      x: [0, 20, 0],
      rotate: [0, 8, -8, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{ duration: 10, repeat: Infinity }}
    className="absolute left-[10%] top-[30%] w-44 h-44 rounded-full bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 flex items-center justify-center text-center p-6 text-sm"
  >
    Intelligent Automation
  </motion.div>

  {/* Bubble 2 */}
  <motion.div
    animate={{
      y: [0, -35, 0],
      x: [0, -20, 0],
      rotate: [0, -6, 6, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{ duration: 11, repeat: Infinity }}
    className="absolute right-[12%] top-[28%] w-44 h-44 rounded-full bg-purple-500/20 backdrop-blur-xl border border-purple-400/30 flex items-center justify-center text-center p-6 text-sm"
  >
    AI-Driven Insights
  </motion.div>

  {/* Bubble 3 */}
  <motion.div
    animate={{
      y: [0, -45, 0],
      x: [0, 25, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{ duration: 12, repeat: Infinity }}
    className="absolute left-[22%] bottom-[18%] w-44 h-44 rounded-full bg-cyan-500/20 backdrop-blur-xl border border-cyan-400/30 flex items-center justify-center text-center p-6 text-sm"
  >
    Predictive Intelligence
  </motion.div>

  {/* Bubble 4 */}
  <motion.div
    animate={{
      y: [0, -38, 0],
      x: [0, -18, 0],
      rotate: [0, -7, 7, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{ duration: 9, repeat: Infinity }}
    className="absolute right-[25%] bottom-[15%] w-44 h-44 rounded-full bg-indigo-500/20 backdrop-blur-xl border border-indigo-400/30 flex items-center justify-center text-center p-6 text-sm"
  >
    Enterprise AI Agents
  </motion.div>

  {/* Center Text */}
  <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
    <h2 className="text-4xl font-semibold mb-6">
      Where Enterprise Meets Artificial Intelligence
    </h2>

    <p className="text-neutral-400 text-lg">
      We help organizations discover high-impact opportunities for AI across
      operations, customer engagement, and decision intelligence.
    </p>
  </div>

</section>

<div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

{/* ================= ENTERPRISE AI CAPABILITIES ================= */}
<section className="relative py-28 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none"></div>
  <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-indigo-400/20 blur-[120px] rounded-full pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
        Enterprise AI Capabilities
      </h2>

      <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
        Designing, deploying, and governing AI systems that power modern enterprises.
      </p>
    </div>

    {/* Capabilities Grid */}
    <div className="grid md:grid-cols-4 gap-8">

      {/* Capability 1 */}
      <div className="p-8 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:-translate-y-1 transition-transform duration-500">
        <h3 className="text-xl font-semibold mb-4">AI Strategy</h3>
        <p className="text-neutral-500 text-sm">
          Defining enterprise AI roadmaps aligned with business outcomes and long-term digital transformation goals.
        </p>
      </div>

      {/* Capability 2 */}
      <div className="p-8 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:-translate-y-1 transition-transform duration-500">
        <h3 className="text-xl font-semibold mb-4">Machine Learning Platforms</h3>
        <p className="text-neutral-500 text-sm">
          Building scalable ML infrastructure and pipelines to operationalize AI across enterprise environments.
        </p>
      </div>

      {/* Capability 3 */}
      <div className="p-8 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:-translate-y-1 transition-transform duration-500">
        <h3 className="text-xl font-semibold mb-4">Generative AI</h3>
        <p className="text-neutral-500 text-sm">
          Deploying LLM-powered applications that enhance productivity, automate workflows, and unlock new insights.
        </p>
      </div>

      {/* Capability 4 */}
      <div className="p-8 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:-translate-y-1 transition-transform duration-500">
        <h3 className="text-xl font-semibold mb-4">AI Integration</h3>
        <p className="text-neutral-500 text-sm">
          Integrating AI models with enterprise platforms like CRM, cloud infrastructure, and data systems.
        </p>
      </div>

    </div>
  </div>
</section>

<div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

{/* Case Studies Section */}
<section className="relative py-24 px-6 bg-black border-t border-white/10">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Case Studies
      </h2>
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Real-world applications of enterprise AI solutions delivering measurable impact.
      </p>
    </div>

    {/* Case Study Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="group relative bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-xl p-8 hover:border-indigo-500/40 transition duration-300">

        <h3 className="text-xl font-semibold text-white mb-4">
          AI-Driven Clinical Research
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Built an AI pipeline that processes biomedical literature and patient data to accelerate drug discovery workflows for biotech teams.
        </p>

        <div className="text-indigo-400 text-sm font-medium">
          Biotech Industry
        </div>

      </div>

      {/* Card 2 */}
      <div className="group relative bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-xl p-8 hover:border-indigo-500/40 transition duration-300">

        <h3 className="text-xl font-semibold text-white mb-4">
          Intelligent Enterprise Automation
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Implemented generative AI workflows that automate document processing, reporting, and internal knowledge retrieval across enterprise systems.
        </p>

        <div className="text-indigo-400 text-sm font-medium">
          Enterprise Operations
        </div>

      </div>

      {/* Card 3 */}
      <div className="group relative bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-xl p-8 hover:border-indigo-500/40 transition duration-300">

        <h3 className="text-xl font-semibold text-white mb-4">
          AI Customer Intelligence Platform
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Developed an AI analytics engine that identifies customer behavior patterns and predicts purchasing intent for global digital platforms.
        </p>

        <div className="text-indigo-400 text-sm font-medium">
          Digital Commerce
        </div>

      </div>

    </div>

    {/* CTA Buttons */}
    <div className="flex justify-center gap-6 mt-16 flex-wrap">

      <a
        href="/case-studies"
        className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition"
      >
        View More Case Studies
      </a>

      <a
        href="/contact"
        className="px-8 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-medium transition"
      >
        Start a Project
      </a>

    </div>

  </div>
</section>

{/* ================= POSITIONING SECTION ================= */}
<section className="relative py-24 px-6 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
  {/* Subtle background shapes */}
  <div className="absolute top-0 left-1/2 w-[400px] h-[400px] bg-blue-200/20 dark:bg-blue-500/20 rounded-full -translate-x-1/2 -translate-y-1/3 blur-3xl pointer-events-none"></div>
  <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-indigo-200/20 dark:bg-indigo-500/20 rounded-full translate-x-1/2 translate-y-1/3 blur-3xl pointer-events-none"></div>

  <div className="relative max-w-4xl mx-auto text-center z-10">
    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
      Building AI-Driven Enterprises
    </h2>
    <p className="text-blue-600 dark:text-blue-400 font-medium mb-8">
      Embedding intelligence into the heart of business operations
    </p>

    <div className="space-y-6 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
      <p>
        AI shouldn’t operate in isolation. It must be <span className="font-semibold text-neutral-900 dark:text-white">embedded into the platforms</span> driving customer engagement, operations, and enterprise decisions.
      </p>
      <p>
        We design and deploy <span className="font-semibold text-neutral-900 dark:text-white">intelligent systems</span>, embedding AI into Salesforce, cloud platforms, and unified data architectures—making intelligence core, not an add-on.
      </p>
      <p>
        We partner with enterprises seeking <span className="font-semibold text-neutral-900 dark:text-white">structured, scalable, outcome-driven AI transformation</span>—leveraging proprietary accelerators, Salesforce expertise, and enterprise-grade governance.
      </p>
    </div>
  </div>
</section>

        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

        {/* ================= FOUR PILLARS ================= */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-semibold">
                The Ksquare Group’s Service Offering Structure
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  title: "Accelerate",
                  subtitle: "Speed, Scale & Sustainable Growth",
                  items: [
                    "Agentic Process Automation",
                    "Spec-Driven Application Development",
                    "AI-Powered Operations",
                    "Intelligent Managed Services"
                  ],
                  glow: "bg-blue-400/20"
                },
                {
                  title: "Transform",
                  subtitle: "Excellence & Cost Optimization",
                  items: [
                    "Next-Gen Customer Experience",
                    "Enterprise Digital Transformation",
                    "Data & Platform Modernization",
                    "Application & Cloud Modernization"
                  ],
                  color: "green"
                },
                {
                  title: "Assure",
                  subtitle: "Risk, Quality & Governance",
                  items: [
                    "Intelligent Quality Engineering",
                    "AI Agent Evaluation",
                    "Risk & Operational Intelligence",
                    "Data Quality & Governance",
                    "AI Lifecycle Governance",
                    "Vulnerability Management"
                  ],
                  color: "purple"
                },
                {
                  title: "Innovate",
                  subtitle: "New Value, New Revenue, New Business Models",
                  items: [
                    "Revenue & Growth Analytics",
                    "Generative Business Intelligence (GenBI)",
                    "Decisioning Intelligence",
                    "Intelligent Document Processing"
                  ],
                  color: "pink"
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className={`p-8 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg hover:-translate-y-1 transition-transform duration-500 relative overflow-hidden`}
                >
                  <div
  className={`absolute -top-10 -left-10 w-32 h-32 rounded-full animate-pulse-slow pointer-events-none ${
    pillar.title === "Accelerate"
      ? "bg-blue-400/20"
      : pillar.title === "Transform"
      ? "bg-green-400/20"
      : pillar.title === "Assure"
      ? "bg-purple-400/20"
      : "bg-pink-400/20"
  }`}
></div>
                  <h3 className="text-2xl font-semibold mb-4 relative z-10">{pillar.title}</h3>
                  <p className="text-neutral-500 mb-6 relative z-10">{pillar.subtitle}</p>
                  <ul className="space-y-3 text-neutral-400 text-sm relative z-10">
                    {pillar.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>


        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

        {/* ================= ENTERPRISE AI ARCHITECTURE ================= */}
        <AIPlatformSection />



{/* ================= AI FLOW DIAGRAM ================= */}
<section className="py-28 relative overflow-hidden bg-white dark:bg-neutral-950">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Title */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Enterprise AI Data & Decision Flow
      </h2>
      <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
        How enterprise data flows through Ksquare’s AI architecture to generate
        intelligence, automation, and measurable business outcomes.
      </p>
    </div>

    {/* Flow Diagram */}
    <div className="relative grid md:grid-cols-5 gap-8 items-center">

      {[
        {
          title: "Enterprise Data",
          desc: "CRM, ERP, operational systems, and external datasets.",
          glow: "bg-blue-400/20"
        },
        {
          title: "Data Engineering",
          desc: "Pipelines, integration layers, and unified data platforms.",
          color: "green"
        },
        {
          title: "AI Intelligence",
          desc: "Machine learning, generative AI, and predictive analytics.",
          color: "purple"
        },
        {
          title: "Decision Systems",
          desc: "AI copilots, automation agents, and business intelligence.",
          color: "pink"
        },
        {
          title: "Business Outcomes",
          desc: "Revenue growth, efficiency, and enterprise innovation.",
          color: "orange"
        }
      ].map((step, i) => (
        <div
          key={step.title}
          className="relative group p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center shadow-md hover:-translate-y-1 transition-transform duration-500"
        >

          {/* Glow */}
          <div className={`absolute -top-6 -left-6 w-24 h-24 {
  step.title === "Enterprise Data"
    ? "bg-blue-400/20"
    : step.title === "Data Engineering"
    ? "bg-green-400/20"
    : step.title === "AI Intelligence"
    ? "bg-purple-400/20"
    : step.title === "Decision Systems"
    ? "bg-pink-400/20"
    : "bg-orange-400/20"
} rounded-full blur-2xl animate-pulse-slow`}></div>

          <h3 className="font-semibold text-lg mb-2 relative z-10">
            {step.title}
          </h3>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 relative z-10">
            {step.desc}
          </p>

        </div>
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">

        <line
          x1="12%"
          y1="50%"
          x2="28%"
          y2="50%"
          stroke="rgba(59,130,246,0.25)"
          strokeWidth="2"
          className="animate-line-pulse"
        />

        <line
          x1="32%"
          y1="50%"
          x2="48%"
          y2="50%"
          stroke="rgba(34,197,94,0.25)"
          strokeWidth="2"
          className="animate-line-pulse"
        />

        <line
          x1="52%"
          y1="50%"
          x2="68%"
          y2="50%"
          stroke="rgba(168,85,247,0.25)"
          strokeWidth="2"
          className="animate-line-pulse"
        />

        <line
          x1="72%"
          y1="50%"
          x2="88%"
          y2="50%"
          stroke="rgba(236,72,153,0.25)"
          strokeWidth="2"
          className="animate-line-pulse"
        />

      </svg>

    </div>
  </div>

</section>


{/* ================= INDUSTRIES WE SERVE ================= */}
<section className="py-28">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
        Industries We Serve
      </h2>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
        Driving business growth and revenue across diverse sectors
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        { name: "Banking & Insurance", gradient: "from-blue-100 to-blue-200", text: "text-neutral-900" },
        { name: "Healthcare & Biotech", gradient: "from-green-100 to-green-200", text: "text-neutral-900" },
        { name: "Hospitality", gradient: "from-pink-100 to-pink-200", text: "text-neutral-900" },
        { name: "Manufacturing", gradient: "from-purple-100 to-purple-200", text: "text-neutral-900" },
        { name: "Retail", gradient: "from-yellow-100 to-yellow-200", text: "text-neutral-900" },
      ].map((industry) => (
        <div
          key={industry.name}
          className={`relative overflow-hidden p-4 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-800 transform transition-transform duration-500 hover:-translate-y-1 bg-gradient-to-br ${industry.gradient} ${industry.text} text-center`}
        >
          <h3 className="text-lg font-semibold relative z-10">{industry.name}</h3>
          <div className="absolute inset-0 bg-white/5 -rotate-12 scale-150 opacity-0 animate-shimmer pointer-events-none rounded-md"></div>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <a
        href="/industries"
        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
      >
        View All Industries →
      </a>
    </div>
  </div>
</section>


{/* ================= PERSPECTIVES SECTION ================= */}
<section className="py-28 bg-neutral-50 dark:bg-neutral-900">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
        Our Perspectives
      </h2>
      <p className="mt-4 text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
        Insights that drive business growth and revenue
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      {[
        { 
          title: "Banking & Finance", 
          img: "/images/perspective-finance.jpg",
          description: "Transforming banking operations with AI-driven automation and intelligent decision-making.",
          bullets: [
            "AI for fraud detection and risk management",
            "Intelligent customer service solutions",
            "Optimized investment analytics"
          ]
        },
        { 
          title: "Healthcare & Biotech", 
          img: "/images/perspective-healthcare.jpg",
          description: "Accelerating drug discovery and patient care through predictive AI analytics.",
          bullets: [
            "Predictive patient monitoring",
            "AI-assisted research and drug discovery",
            "Operational efficiency in hospitals"
          ]
        },
        { 
          title: "Manufacturing & Industry 4.0", 
          img: "/images/perspective-manufacturing.jpg",
          description: "Optimizing production lines and supply chains with AI insights and automation.",
          bullets: [
            "Predictive maintenance",
            "Supply chain optimization",
            "Smart factory automation"
          ]
        },
        { 
          title: "Retail & Customer Experience", 
          img: "/images/perspective-retail.jpg",
          description: "Enhancing personalized experiences and revenue with intelligent customer analytics.",
          bullets: [
            "Personalized marketing campaigns",
            "AI-driven inventory management",
            "Customer behavior analytics"
          ]
        },
      ].map((perspective, index) => (
        <div
          key={perspective.title}
          className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer h-96 flex flex-col justify-start pt-6 transform transition-all duration-700 hover:scale-[1.03] hover:-translate-y-1 hover:rotate-[1deg]"
        >
          {/* Background Image with Parallax */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${perspective.img})` }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 pointer-events-none"></div>

          {/* Orbiting particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-white/30 rounded-full animate-orbit`}
                style={{
                  top: `${50 + 20 * Math.sin((i + 1) * Math.PI/3)}%`,
                  left: `${50 + 20 * Math.cos((i + 1) * Math.PI/3)}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              ></div>
            ))}
          </div>

          {/* Card content with staggered animation */}
          <div className="relative z-20 px-6 flex flex-col text-white">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{perspective.title}</h3>

            <div className="opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-150">
              <p className="text-sm md:text-base mb-2">{perspective.description}</p>
            </div>

            <ul className="opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-300 text-xs md:text-sm space-y-1">
              {perspective.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* ================= GLOBAL ANIMATIONS ================= */}
  <style jsx>{`
    @keyframes orbit {
      0% { transform: rotate(0deg) translateX(12px) rotate(0deg); }
      100% { transform: rotate(360deg) translateX(12px) rotate(-360deg); }
    }
    .animate-orbit {
      animation: orbit 6s linear infinite;
      position: absolute;
      border-radius: 50%;
    }
  `}</style>
</section>



        {/* ================= CLIENT IMPACT ================= */}
  <section className="py-20 bg-white dark:bg-neutral-950">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-semibold mb-12">
      Selected Client Impact
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      <div className="group">
        <h3 className="text-5xl md:text-6xl font-semibold mb-3 transition-transform duration-500 group-hover:scale-105 group-hover:text-blue-600">
          <Counter target={27}/>%
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400">
          Reduction in operational inefficiencies
        </p>
      </div>

      <div className="group">
        <h3 className="text-5xl md:text-6xl font-semibold mb-3 transition-transform duration-500 group-hover:scale-105 group-hover:text-blue-600">
          <Counter target={35}/>%
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400">
          Faster AI deployment cycles
        </p>
      </div>

      <div className="group">
        <h3 className="text-5xl md:text-6xl font-semibold mb-3 transition-transform duration-500 group-hover:scale-105 group-hover:text-blue-600">
          <Counter target={18}/>%
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400">
          Revenue growth from AI initiatives
        </p>
      </div>

    </div>

  </div>
</section>



</main>
</>
);
}