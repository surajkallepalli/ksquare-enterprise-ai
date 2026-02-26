import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-24 bg-white dark:bg-neutral-950">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-semibold mb-8">
      A Technology & Consulting Partner for Enterprise Evolution
    </h2>

    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
      KSquare partners with enterprises to architect, modernize, and scale
      intelligent systems across cloud, data, and AI ecosystems.
    </p>

    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
      We operate at the intersection of technology engineering and strategic
      transformation — enabling organizations to accelerate growth, optimize
      cost structures, strengthen governance, and unlock new digital revenue streams.
    </p>

  </div>
</section>

<section className="py-16 bg-neutral-50 dark:bg-neutral-900">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <p className="text-sm uppercase tracking-wide text-neutral-500 mb-8">
      Industry Experience
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-neutral-700 dark:text-neutral-300 font-medium">
      <div>Financial Services</div>
      <div>Healthcare & Life Sciences</div>
      <div>Retail & Consumer</div>
      <div>Public Sector</div>
    </div>

  </div>
</section>

      <section className="py-28 bg-neutral-50 dark:bg-neutral-900">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Empowering Your Enterprise Evolution
      </h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
  A structured framework designed to accelerate performance, modernize systems,
  strengthen governance, and unlock new digital revenue models.
</p>
    </div>

    <div className="grid md:grid-cols-4 gap-12">

      {/* ACCELERATION */}
      <div className="p-10 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
       <div className="w-12 h-1 bg-blue-600 mb-6 rounded"></div>
        <h3 className="text-2xl font-semibold mb-4">
          Accelerate
        </h3>
        <p className="text-neutral-500 mb-6">
          Speed, Scale & Sustainable Growth
        </p>
        <ul className="space-y-3 text-neutral-600">
          <li>• Agentic Process Automation</li>
          <li>• Spec-Driven Application Development</li>
          <li>• AI-Powered Operations</li>
          <li>• Intelligent Managed Services</li>
        </ul>
      </div>

      {/* TRANSFORMATION */}
      <div className="p-10 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
        <div className="w-12 h-1 bg-blue-600 mb-6 rounded"></div>
        <h3 className="text-2xl font-semibold mb-4">
          Transform
        </h3>
        <p className="text-neutral-500 mb-6">
          Excellence & Cost Optimization
        </p>
        <ul className="space-y-3 text-neutral-600">
          <li>• Next-Gen Customer Experience</li>
          <li>• Enterprise Digital Transformation</li>
          <li>• Data & Platform Modernization</li>
          <li>• Application & Cloud Modernization</li>
        </ul>
      </div>

      {/* ASSURANCE */}
      <div className="p-10 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
        <div className="w-12 h-1 bg-blue-600 mb-6 rounded"></div>
        <h3 className="text-2xl font-semibold mb-4">
          Assure
        </h3>
        <p className="text-neutral-500 mb-6">
          Risk, Quality & Governance
        </p>
        <ul className="space-y-3 text-neutral-600">
          <li>• Intelligent Quality Engineering</li>
          <li>• AI Agent Evaluation</li>
          <li>• Risk & Operational Intelligence</li>
          <li>• Data Quality & Governance</li>
          <li>• AI Lifecycle Governance</li>
          <li>• Vulnerability Management</li>
        </ul>
      </div>

      {/* INNOVATION */}
      <div className="p-10 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
        <div className="w-12 h-1 bg-blue-600 mb-6 rounded"></div>
        <h3 className="text-2xl font-semibold mb-4">
          Innovate
        </h3>
        <p className="text-neutral-500 mb-6">
          New Value, New Revenue, New Business Models
        </p>
        <ul className="space-y-3 text-neutral-600">
          <li>• Revenue & Growth Analytics</li>
          <li>• Generative Business Intelligence (GenBI)</li>
          <li>• Decisioning Intelligence</li>
          <li>• Intelligent Document Processing</li>
        </ul>
      </div>

    </div>
  </div>
</section>

  <section className="bg-neutral-950 text-white py-28 text-center">
  <div className="max-w-4xl mx-auto px-6">

    <h2 className="text-4xl font-semibold mb-6">
      Intelligence Embedded Across Every Pillar
    </h2>

    <p className="text-neutral-400 text-lg leading-relaxed mb-10">
      AI is not a standalone offering. It is the intelligence layer embedded 
      across Acceleration, Transformation, Assurance, and Innovation — 
      enabling faster decisions, optimized operations, governed systems, 
      and entirely new revenue models.
    </p>

    <a
      href="/ai-strategy-transformation"
      className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
    >
      Explore AI Strategy →
    </a>

  </div>
</section>

      <Metrics />
    </>
  );
}