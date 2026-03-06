"use client";

export default function AIArchitectureDiagram() {

  return (

<div className="relative w-full max-w-6xl mx-auto py-20">

  {/* GRID */}
  <div className="grid md:grid-cols-4 gap-10 text-center">

    {/* Layer 1 */}
    <div className="space-y-4">
      <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
        <h3 className="font-semibold">Enterprise Systems</h3>
        <p className="text-sm text-neutral-400 mt-2">
          Salesforce • ERP • CRM • Data Platforms
        </p>
      </div>
    </div>

    {/* Layer 2 */}
    <div className="space-y-4">
      <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
        <h3 className="font-semibold">Unified Data Layer</h3>
        <p className="text-sm text-neutral-400 mt-2">
          Data pipelines, governance, secure integration
        </p>
      </div>
    </div>

    {/* Layer 3 */}
    <div className="space-y-4">
      <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
        <h3 className="font-semibold">AI Intelligence</h3>
        <p className="text-sm text-neutral-400 mt-2">
          LLMs • Predictive Models • AI Agents
        </p>
      </div>
    </div>

    {/* Layer 4 */}
    <div className="space-y-4">
      <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900">
        <h3 className="font-semibold">Business Outcomes</h3>
        <p className="text-sm text-neutral-400 mt-2">
          Forecasting • Automation • Decisions
        </p>
      </div>
    </div>

  </div>

  {/* Animated Connection Lines */}
  <svg
    className="absolute top-0 left-0 w-full h-full pointer-events-none"
    viewBox="0 0 1000 300"
  >

    <line
      x1="200"
      y1="150"
      x2="400"
      y2="150"
      stroke="#3b82f6"
      strokeWidth="2"
      strokeDasharray="8 8"
      className="animate-flow"
    />

    <line
      x1="400"
      y1="150"
      x2="600"
      y2="150"
      stroke="#3b82f6"
      strokeWidth="2"
      strokeDasharray="8 8"
      className="animate-flow"
    />

    <line
      x1="600"
      y1="150"
      x2="800"
      y2="150"
      stroke="#3b82f6"
      strokeWidth="2"
      strokeDasharray="8 8"
      className="animate-flow"
    />

  </svg>

</div>

  );
}