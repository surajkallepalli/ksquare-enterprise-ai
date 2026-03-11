"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "AI-Powered Supply Chain Optimization",
    description:
      "We helped a Fortune 500 logistics company reduce delivery delays by 25% using predictive analytics and AI automation.",
    image: "/assets/case-studies/supply-chain.jpg",
    link: "/case-studies/supply-chain",
    client: "DHL",
  },
  {
    title: "Enterprise Data Intelligence Platform",
    description:
      "Enabled a global healthcare provider to unify data pipelines, providing actionable insights in real-time for patient care optimization.",
    image: "/assets/case-studies/healthcare-platform.jpg",
    link: "/case-studies/healthcare",
    client: "Global Healthcare Inc.",
  },
];

export default function PremiumCaseStudies() {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20">
          Case Studies
        </h2>

        <div className="flex flex-col gap-28">
          {caseStudies.map((cs, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.a
                key={cs.title}
                href={cs.link}
                initial={{ opacity: 0, x: isEven ? -150 : 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                }}
                className="group relative flex flex-col md:flex-row items-center md:justify-between overflow-hidden rounded-[32px] border border-white/20 shadow-2xl bg-neutral-900"
              >
                {/* Background Image */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105`}
                  style={{ backgroundImage: `url(${cs.image})` }}
                />

                {/* Overlay */}
                <div className="relative z-10 flex flex-col md:flex-row w-full items-center justify-between p-8 md:p-16 gap-6">
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 text-center md:text-left"
                  >
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                      {cs.title}
                    </h3>
                    <p className="text-neutral-300 mb-6">{cs.description}</p>
                    <span className="inline-block px-6 py-3 rounded-full border border-white/40 text-white font-medium transition-all group-hover:bg-white group-hover:text-black">
                      View Case Study
                    </span>
                  </motion.div>

                  {/* Optional: Accent bar or element */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`hidden md:block w-1/3 h-64 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500`}
                  />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-20">
          <a
            href="/case-studies"
            className="inline-block px-8 py-4 rounded-lg border border-white/40 text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Explore All Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}