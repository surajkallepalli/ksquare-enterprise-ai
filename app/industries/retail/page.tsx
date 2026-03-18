"use client";

import { motion } from "framer-motion";

export default function RetailPage() {
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
          AI for Retail
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          Retail organizations are deploying artificial intelligence to
          understand customer behavior, optimize inventory, and deliver
          personalized shopping experiences. KSquare designs intelligent
          retail platforms that transform customer and operational data
          into actionable insights.
        </p>

      </section>


      {/* INDUSTRY CHALLENGE */}

      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            The intelligent retail opportunity
          </h2>

          <p className="text-neutral-400 mb-6 leading-relaxed">
            Modern retail environments generate vast amounts of data across
            customer interactions, digital commerce platforms, supply chains,
            and in-store systems. However, many retailers struggle to convert
            this data into meaningful business intelligence.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            AI-powered platforms enable retailers to analyze customer behavior,
            forecast demand, and optimize product availability across physical
            and digital channels.
          </p>

        </div>


        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8">

          <h3 className="text-xl font-semibold mb-4">
            Transformation outcomes
          </h3>

          <ul className="space-y-3 text-neutral-400">
            <li>• AI-driven demand forecasting</li>
            <li>• Personalized customer experiences</li>
            <li>• Intelligent inventory management</li>
            <li>• Dynamic pricing optimization</li>
          </ul>

        </div>

      </section>


      {/* AI CAPABILITIES */}

      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold mb-6">
            Retail AI capabilities
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto">
            KSquare helps retailers deploy AI platforms that improve
            customer intelligence, optimize supply chains, and enhance
            operational decision-making.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Customer Intelligence
            </h3>

            <p className="text-neutral-400">
              AI-driven analytics platforms analyze customer behavior,
              purchase history, and engagement patterns to enable
              personalized marketing and product recommendations.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Demand Forecasting
            </h3>

            <p className="text-neutral-400">
              Predictive models forecast product demand across regions,
              channels, and seasons, enabling retailers to optimize
              supply chain planning and inventory allocation.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Inventory Optimization
            </h3>

            <p className="text-neutral-400">
              AI systems optimize inventory distribution across warehouses
              and retail locations to minimize stockouts and reduce excess
              inventory costs.
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Dynamic Pricing
            </h3>

            <p className="text-neutral-400">
              AI-powered pricing engines analyze demand signals,
              competitor pricing, and customer behavior to optimize
              pricing strategies in real time.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-40 px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Build intelligent retail platforms
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Partner with KSquare to deploy AI systems that improve customer
          experiences, optimize supply chains, and drive retail innovation.
        </p>

        <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 transition rounded-xl font-semibold">
          Start a Retail AI Strategy
        </button>

      </section>

    </main>
  );
}