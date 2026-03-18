"use client";

import { motion } from "framer-motion";

export default function FinancePage() {
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
          AI for Financial Services
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          Financial institutions are leveraging artificial intelligence
          to strengthen risk management, detect fraud, and deliver
          personalized customer experiences. KSquare designs enterprise
          AI platforms that enable financial organizations to transform
          data into intelligent decision systems.
        </p>

      </section>


      {/* INDUSTRY CHALLENGE */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            The intelligent finance opportunity
          </h2>

          <p className="text-neutral-400 mb-6 leading-relaxed">
            Financial institutions operate in highly data-intensive
            environments across payments, lending, trading, and risk
            management systems. However, fragmented platforms often
            prevent organizations from extracting meaningful insights
            from this data.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            AI platforms enable financial organizations to transform
            raw transactional and operational data into predictive
            intelligence that strengthens decision-making and risk
            management.
          </p>

        </div>


        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8">

          <h3 className="text-xl font-semibold mb-4">
            Transformation outcomes
          </h3>

          <ul className="space-y-3 text-neutral-400">
            <li>• AI-powered fraud detection</li>
            <li>• Credit risk modeling and forecasting</li>
            <li>• Customer intelligence platforms</li>
            <li>• Automated regulatory analytics</li>
          </ul>

        </div>

      </section>


      {/* AI CAPABILITIES */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold mb-6">
            Financial AI capabilities
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            KSquare helps financial organizations deploy AI systems
            across risk management, operations, and customer
            intelligence platforms.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Fraud Detection
            </h3>

            <p className="text-neutral-400">
              Machine learning models analyze transactional patterns
              to identify fraudulent activity in real time, improving
              security while minimizing false positives.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Credit Risk Analytics
            </h3>

            <p className="text-neutral-400">
              Predictive models evaluate credit risk and lending
              decisions using historical financial data and
              behavioral signals.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Customer Intelligence
            </h3>

            <p className="text-neutral-400">
              AI-driven analytics platforms help financial institutions
              understand customer behavior, personalize services,
              and improve engagement.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Regulatory Analytics
            </h3>

            <p className="text-neutral-400">
              AI systems assist compliance teams by automating
              regulatory monitoring, anomaly detection, and
              reporting workflows.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-40 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Build intelligent financial platforms
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Partner with KSquare to deploy AI systems that strengthen
          financial decision-making, risk management, and
          operational intelligence.
        </p>

        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
          Start a Financial AI Strategy
        </button>

      </section>

    </main>
  );
}