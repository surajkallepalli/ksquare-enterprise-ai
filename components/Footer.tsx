// components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} The KSquare Group. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
          Enterprise AI Solutions, Cloud Services, Systems Engineering & Consulting
        </p>
      </div>
    </footer>
  );
}