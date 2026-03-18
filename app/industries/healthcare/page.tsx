"use client";

import { motion } from "framer-motion";

export default function HealthcarePage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-40 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-semibold leading-tight"
        >
          AI for Healthcare
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          Healthcare organizations are deploying artificial intelligence
          to improve patient outcomes, optimize hospital operations, and
          unlock clinical insights from complex medical data. KSquare
          designs AI platforms that help healthcare providers transform
          data into intelligent care systems.
        </p>

      </section>


      {/* INDUSTRY CHALLENGE */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            The healthcare intelligence challenge
          </h2>

          <p className="text-neutral-400 mb-6 leading-relaxed">
            Hospitals, clinics, and healthcare networks generate massive
            volumes of patient, operational, and clinical data across
            electronic medical records, imaging systems, and care
            management platforms.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            However, fragmented data systems often prevent organizations
            from fully leveraging this information. AI-driven platforms
            enable healthcare providers to unlock insights that improve
            patient care, optimize operations, and support clinical
            decision-making.
          </p>

        </div>


        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8">

          <h3 className="text-xl font-semibold mb-4">
            Transformation outcomes
          </h3>

          <ul className="space-y-3 text-neutral-400">
            <li>• Predictive patient risk analytics</li>
            <li>• AI-assisted medical imaging analysis</li>
            <li>• Hospital operations optimization</li>
            <li>• Clinical decision support systems</li>
          </ul>

        </div>

      </section>


      {/* AI CAPABILITIES */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold mb-6">
            Healthcare AI capabilities
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            KSquare helps healthcare organizations deploy AI platforms
            that improve clinical insights, streamline operations, and
            enable data-driven healthcare delivery.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Clinical Data Intelligence
            </h3>

            <p className="text-neutral-400">
              AI platforms integrate patient records, clinical data,
              and medical histories to generate predictive insights
              that support clinical decision-making.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Medical Imaging AI
            </h3>

            <p className="text-neutral-400">
              Computer vision models assist radiologists and clinicians
              in detecting anomalies across medical imaging such as
              CT scans, MRIs, and X-rays.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Patient Risk Prediction
            </h3>

            <p className="text-neutral-400">
              Machine learning models predict patient risks such as
              hospital readmissions, disease progression, and care
              interventions.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Healthcare Operations AI
            </h3>

            <p className="text-neutral-400">
              AI-driven platforms optimize hospital scheduling,
              staffing allocation, and patient flow management to
              improve operational efficiency.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-40 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Build intelligent healthcare systems
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Partner with KSquare to deploy AI platforms that enhance
          clinical insights, optimize healthcare operations, and
          improve patient outcomes.
        </p>

        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
          Start a Healthcare AI Strategy
        </button>

      </section>

    </main>
  );
}