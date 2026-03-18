"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black text-neutral-300 border-t border-white/10">

      {/* glow background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-200px] w-[700px] h-[700px] bg-blue-600/10 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-16">

          {/* BRAND */}
          <div className="space-y-6">

            <h3 className="text-2xl font-semibold text-white">
              KSquare
            </h3>

            <p className="text-neutral-400 text-sm leading-relaxed">
              We design, deploy, and scale enterprise AI systems that
              transform organizations through intelligent infrastructure,
              data platforms, and AI-driven decision systems.
            </p>

          </div>

          {/* CAPABILITIES */}
          <div>
            <h4 className="text-white font-semibold mb-6">
              Capabilities
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  AI Infrastructure
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Machine Learning Platforms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  AI Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-6">
              Services
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/consulting" className="hover:text-white transition">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/implementation" className="hover:text-white transition">
                  Implementation
                </Link>
              </li>
              <li>
                <Link href="/services/support" className="hover:text-white transition">
                  Managed AI Services
                </Link>
              </li>
            </ul>
          </div>

          {/* INSIGHTS */}
          <div>
            <h4 className="text-white font-semibold mb-6">
              Thought Leadership
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/insights" className="hover:text-white transition">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-white transition">
                  Research
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">

          <p>
            © {new Date().getFullYear()} KSquare Enterprise AI. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}