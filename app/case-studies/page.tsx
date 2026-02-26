export default function CaseStudies() {
  return (
    <main className="py-32 max-w-6xl mx-auto px-6">
      <h1 className="text-5xl font-bold mb-16">
        Enterprise Case Studies
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="border p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">
            Global Manufacturing AI Transformation
          </h2>
          <p className="text-neutral-600 mb-6">
            Integrated predictive maintenance AI across 17 facilities.
          </p>
          <ul className="text-sm text-neutral-500 space-y-2">
            <li>• 28% downtime reduction</li>
            <li>• Cloud-native data lake</li>
            <li>• Executive AI dashboards</li>
          </ul>
        </div>

        <div className="border p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">
            Enterprise LLM Deployment for Finance
          </h2>
          <p className="text-neutral-600 mb-6">
            Secure GPT integration for regulatory document automation.
          </p>
          <ul className="text-sm text-neutral-500 space-y-2">
            <li>• 60% process acceleration</li>
            <li>• Compliance-aligned AI framework</li>
            <li>• SOC2-ready deployment</li>
          </ul>
        </div>
      </div>
    </main>
  );
}