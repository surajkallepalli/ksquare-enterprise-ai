"use client"

import { useEffect, useRef, useState } from "react"

export default function AIPlatformSection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  const items = [
    {
      title: "Data Infrastructure",
      desc: "Unified enterprise data layer integrating operational systems, warehouses, and real-time streams."
    },
    {
      title: "AI Models",
      desc: "Foundation models, domain models, and enterprise fine-tuning pipelines."
    },
    {
      title: "AI Applications",
      desc: "Enterprise copilots, automation systems, and intelligent decision platforms."
    },
    {
      title: "Governance & Trust",
      desc: "Security, compliance, monitoring, and responsible AI frameworks."
    }
  ]

  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Enterprise AI Architecture
          </h2>

          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
            Ksquare builds enterprise AI platforms that connect data,
            models, and business systems into a unified intelligence layer.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="relative grid md:grid-cols-4 gap-10 text-center"
        >

          {items.map((item, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-xl border border-neutral-800 bg-neutral-950 transition-all duration-1000 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <h3 className="text-lg font-semibold text-blue-400">
                {item.title}
              </h3>

              <p className="mt-4 text-sm text-neutral-400">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Animated Connection Lines */}
          <svg
            className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 hidden md:block"
            viewBox="0 0 1000 100"
            fill="none"
          >

            <line
              x1="150"
              y1="50"
              x2="350"
              y2="50"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="8 6"
              className="animate-pulse"
            />

            <line
              x1="400"
              y1="50"
              x2="600"
              y2="50"
              stroke="#6366f1"
              strokeWidth="2"
              strokeDasharray="8 6"
              className="animate-pulse"
            />

            <line
              x1="650"
              y1="50"
              x2="850"
              y2="50"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="8 6"
              className="animate-pulse"
            />

          </svg>

        </div>
      </div>
    </section>
  )
}