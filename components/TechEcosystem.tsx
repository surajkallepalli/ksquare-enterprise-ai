"use client";

import { motion } from "framer-motion";

const tech = [
  { name: "AWS", logo: "/assets/logos/aws.png" },
  { name: "NVIDIA", logo: "/assets/logos/nvidia.png" },
  { name: "Microsoft", logo: "/assets/logos/microsoft.png" },
  { name: "Salesforce", logo: "/assets/logos/salesforce.png" },
];

export default function TechnologyEcosystem() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden text-center">

      {/* background glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[10%] w-[700px] h-[700px] bg-indigo-600/10 blur-[180px]" />
      </div>

      <p className="text-sm uppercase tracking-widest text-neutral-500 mb-6">
        Technology Ecosystem
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mb-20">
        Built on the world's leading platforms
      </h2>


      {/* floating ecosystem */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">

        {tech.map((item, i) => (

          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative rounded-2xl border border-white/10 bg-neutral-900 p-8 flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.8)] cursor-pointer"
          >

            {/* glow */}

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20 blur-xl rounded-2xl"></div>

            <img
              src={item.logo}
              alt={item.name}
              className="relative z-10 h-10 object-contain opacity-70 group-hover:opacity-100 transition"
            />

          </motion.div>

        ))}

      </div>

    </section>
  );
}