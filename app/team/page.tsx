"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Varma Buddharaju",
    role: "CEO",
    image: "/assets/team/varma-buddharaju.jpg",
  },
  {
    name: "Sunny Mandapati",
    role: "Chief Revenue Officer",
    image: "/assets/team/sunny-mandapati.jpg",
  },
  {
    name: "Girish Mallampalli",
    role: "Delivery Partner",
    image: "/assets/team/girish-mallampalli.jpg",
  },
  {
    name: "Enrique Castillejos",
    role: "Sales Engineering, CS & Channels Partner",
    image: "/assets/team/enrique-castillejos.jpg",
  },
  {
    name: "Merinely Beltre",
    role: "Global HR Manager",
    image: "/assets/team/merinely-beltre.jpg",
  },
  {
    name: "Aditya Buddharaju",
    role: "VP of Delivery",
    image: "/assets/team/aditya-buddharaju.jpg",
  },
  {
    name: "Agustín Galindo",
    role: "PMO Director",
    image: "/assets/team/agustin-galindo.jpg",
  },
  {
    name: "Daniela Rossi",
    role: "Marketing Manager",
    image: "/assets/team/daniela-rossi.jpg",
  },
  {
    name: "Jessica Muñoz",
    role: "Group Manager",
    image: "/assets/team/jessica-munoz.jpg",
  },
];

export default function TeamPage() {
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
          Leadership Team
        </motion.h1>

        <p className="text-neutral-400 text-lg mt-8 max-w-3xl mx-auto">
          KSquare's leadership team combines enterprise technology expertise,
          engineering experience, and industry insight to build intelligent
          systems for modern organizations.
        </p>

      </section>


      {/* TEAM GRID */}

      <section className="max-w-7xl mx-auto px-6 pb-40">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {team.map((member, index) => (

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >

              {/* image */}

              <div className="relative h-[320px] overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* subtle overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              </div>

              {/* content */}

              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="text-blue-400 text-sm mt-1">
                  {member.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </main>
  );
}