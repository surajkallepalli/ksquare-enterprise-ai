"use client";

import { useState, useEffect } from "react";

const cases = [
  {
    title: "Global Manufacturing Leader",
    result: "30% Reduction in Service Delivery Time",
    description:
      "Modernized Salesforce ecosystem with AI-driven automation and analytics.",
  },
  {
    title: "Healthcare Enterprise",
    result: "10x CRM Adoption Increase",
    description:
      "Unified data and embedded predictive insights across care operations.",
  },
  {
    title: "Retail Organization",
    result: "40% Faster Customer Resolution",
    description:
      "Integrated AI across service cloud and operational systems.",
  },
];

export default function CaseCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = cases[index];

  return (
    <div className="max-w-4xl mx-auto text-center p-12 bg-neutral-900/60 backdrop-blur-xl rounded-xl border border-white/10">
      <h3 className="text-2xl font-semibold mb-4">{current.title}</h3>
      <p className="text-blue-400 font-medium mb-6">{current.result}</p>
      <p className="text-neutral-300">{current.description}</p>
    </div>
  );
}