"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Salesforce Badge */}
        <div className="flex items-center gap-6">

          <Link href="/" className="flex items-center">
            <img
              src="/assets/logos/ksquare-logo.png"
              alt="The Ksquare Group"
              className="h-10 w-auto"
            />
          </Link>

          <div className="h-8 w-px bg-neutral-300 dark:bg-neutral-700"></div>

          <img
            src="/assets/logos/salesforce.png"
            alt="Salesforce Summit Partner"
            className="h-7 w-auto opacity-90"
          />

        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link href="/about">About</Link>
        {/* SERVICES DROPDOWN */}
<div className="relative group">
  <button className="hover:text-black dark:hover:text-white">
    Services
  </button>

  <div className="absolute left-0 top-full pt-2 w-64 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
    <div className="p-4 space-y-3 text-sm">
      <Link href="/ai-strategy-transformation" className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-150 ease-in-out">
        AI Strategy & Transformation
      </Link>
      <Link href="/intelligent-platforms" className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-150 ease-in-out">
        Intelligent Platforms & Engineering
      </Link>
      <Link href="/data-cloud" className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-150 ease-in-out">
        Data, Cloud & Integration
      </Link>
      <Link href="/governance" className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-150 ease-in-out">
        Operational Scale & Governance
      </Link>
    </div>
  </div>
</div>

{/* INDUSTRIES DROPDOWN */}
<div className="relative group">
  <button className="hover:text-black dark:hover:text-white">
    Industries
  </button>

  <div className="absolute left-0 top-full pt-2 w-64 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
    <div className="p-4 space-y-3 text-sm">
      <Link href="/manufacturing" className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-150 ease-in-out">
        Manufacturing
      </Link>
      <Link href="/biotech" className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-150 ease-in-out">
        Biotech & Life Sciences
      </Link>
      <Link href="/retail" className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-150 ease-in-out">
        Retail & Consumer
      </Link>
      <Link href="/financial-services" className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-150 ease-in-out">
        Financial Services
      </Link>
      <Link href="/technology" className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-150 ease-in-out">
        Technology & SaaS
      </Link>
    </div>
  </div>
</div>
          <Link href="/case-studies">Case Studies</Link>
          <Link
            href="/ai-strategy-transformation"
            className="text-blue-600 font-semibold"
          >
            AI Strategy & Transformation
          </Link>
        </div>

      </div>
    </nav>
  );
}