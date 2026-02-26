"use client";

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
import { motion } from "framer-motion";

export default function Services() {
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
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          {title}
        </h2>
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
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
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
    <main className="bg-white dark:bg-neutral-950">

      {/* HEADER */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">
            Enterprise Services
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The Ksquare Group delivers integrated consulting, engineering,
            and platform solutions enabling enterprise-scale transformation.
          </p>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-20 border-y border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-4xl font-semibold text-blue-600">18+</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Years of Experience
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold text-blue-600">300+</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Enterprise Projects Delivered
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold text-blue-600">Global</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              Delivery & Consulting Presence
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-28">
        <Section
          title="Strategic & Advisory Services"
          services={strategicServices}
        />
        <Section
          title="Engineering & Platform Services"
          services={engineeringServices}
        />
      </div>

    {/* PARTNERSHIP LOGOS */}
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

      {/* EXECUTIVE CTA */}
      <section className="py-28 bg-neutral-100 dark:bg-neutral-900 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">
            Architect Your Next Phase of Growth
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-10">
            Partner with The Ksquare Group to design, build, and scale
            transformative enterprise solutions.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Start a Strategic Conversation
          </button>
        </div>
      </section>

    </main>
  );
}