"use client";
import { motion } from "framer-motion";
import NeuralNetwork from "@/components/NeuralNetwork";
import ChatWidget from "@/components/ChatWidget";

// Import icons
import {
  Globe,
  Palette,
  Code,
  Settings,
  Layers,
  Cloud,
  Database,
  Link2,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const strategicServices = [
    {
      title: "Digital Transformation",
      icon: Globe,
      description:
        "Enterprise-wide transformation initiatives aligning technology, operations, and business strategy.",
    },
    {
      title: "Human-Centric Design",
      icon: Palette,
      description:
        "Research-driven digital experiences engineered to elevate customer engagement and efficiency.",
    },
    {
      title: "Platform Implementation",
      icon: Layers,
      description:
        "Strategic deployment of enterprise platforms to unify infrastructure and executive visibility.",
    },
  ];

  const engineeringServices = [
    {
      title: "Web & Mobile Engineering",
      icon: Code,
      description:
        "Scalable, secure applications built for performance and enterprise growth.",
    },
    {
      title: "Managed Services",
      icon: Settings,
      description:
        "Operational continuity and proactive optimization of IT ecosystems.",
    },
    {
      title: "Salesforce Transformation",
      icon: ShieldCheck,
      description:
        "CRM modernization and ecosystem integration for high-growth enterprises.",
    },
    {
      title: "MuleSoft Integration",
      icon: Link2,
      description:
        "Enterprise-grade system connectivity and workflow automation.",
    },
    {
      title: "Cloud Strategy (AWS & Azure)",
      icon: Cloud,
      description:
        "Cloud migration, governance, and modernization at enterprise scale.",
    },
    {
      title: "Data Engineering",
      icon: Database,
      description:
        "Data architectures transforming enterprise information into intelligence.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const Section = ({ title, services }: any) => (
    <section className="mb-28">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">{title}</h2>
        <div className="h-px bg-neutral-200 dark:bg-neutral-800 w-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service: any, index: number) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-10 bg-white dark:bg-neutral-900 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <Icon className="h-9 w-9 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex items-center justify-center min-h-[85vh] px-6 text-center overflow-hidden bg-black">
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
            We architect, govern, and scale AI systems that drive measurable enterprise results—faster,
            smarter, safer.
            <br />
            Partner with us to transform your business operations, discover new opportunities, and maximize
            ROI with AI-driven intelligence.
          </p>
        </div>
      </section>

      {/* ================= POSITIONING SECTION ================= */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Building AI-Driven Enterprises
          </h2>
          <div className="space-y-6 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              AI shouldn’t operate in isolation. It must be embedded into the platforms driving customer
              engagement, operations, and enterprise decisions.
            </p>
            <p>
              We design and deploy intelligent systems, embedding AI into Salesforce, cloud platforms, and
              unified data architectures—making intelligence core, not an add-on.
            </p>
            <p>
              We partner with enterprises seeking structured, scalable, outcome-driven AI transformation—leveraging
              proprietary accelerators, Salesforce expertise, and enterprise-grade governance.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="relative py-28 bg-white dark:bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white mb-4">
              Flagship Case Studies
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
              How we drive measurable enterprise transformation across industries.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-10">
            {/* Case Study 1 */}
            <div className="group relative p-10 bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h3 className="text-xl font-semibold mb-4 relative z-10">Biotech: AI Quality Automation</h3>
              <p className="text-neutral-600 dark:text-neutral-300 relative z-10">
                Implemented automated quality control pipelines using AI agents, reducing errors by 30% and accelerating R&D cycles.
              </p>
            </div>

            {/* Case Study 2 */}
            <div className="group relative p-10 bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h3 className="text-xl font-semibold mb-4 relative z-10">Manufacturing: Predictive Operations</h3>
              <p className="text-neutral-600 dark:text-neutral-300 relative z-10">
                Deployed AI predictive maintenance solutions, reducing downtime by 25% and optimizing supply chain efficiency.
              </p>
            </div>

            {/* Case Study 3 */}
            <div className="group relative p-10 bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h3 className="text-xl font-semibold mb-4 relative z-10">Retail: AI Revenue Intelligence</h3>
              <p className="text-neutral-600 dark:text-neutral-300 relative z-10">
                Introduced AI-driven customer segmentation and personalization, increasing online revenue by 18% in six months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRATEGIC & ENGINEERING SERVICES ================= */}
      <div className="max-w-7xl mx-auto px-6 py-28">
        <Section title="Strategic & Advisory Services" services={strategicServices} />
        <Section title="Engineering & Platform Services" services={engineeringServices} />
      </div>

      {/* ================= PARTNERS ================= */}
      <section className="py-20 border-y border-neutral-200 dark:border-neutral-800 text-center">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
            Strategic Technology Partnerships
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white">
            Trusted by global enterprises through strategic technology alliances
          </h3>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/logos/partner-salesforce-summit.png"
              alt="Salesforce Summit Partner"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/logos/partner-aws.png"
              alt="AWS Partner Network"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/logos/partner-mulesoft.png"
              alt="MuleSoft Partner"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/logos/partner-microsoft.png"
              alt="Microsoft Partner"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= EXECUTIVE CTA ================= */}
      <section className="py-28 bg-neutral-100 dark:bg-neutral-900 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">Architect Your Next Phase of Growth</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-10">
            Partner with The Ksquare Group to design, build, and scale transformative enterprise solutions.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Start a Strategic Conversation
          </button>
        </div>
      </section>
    </>
  );
}