"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/assets/logos/ksquare-logo.png"
            alt="The Ksquare Group"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/ai-strategy-transformation" className="text-blue-600 font-semibold">
                AI Strategy & Transformation
          </Link>
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}