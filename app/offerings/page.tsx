export default function Offerings() {
  return (
    <main>

      {/* HERO */}
      <section className="py-28 px-6 text-center bg-white dark:bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">
            Enterprise Growth Architecture
          </h1>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Empowering your enterprise evolution through four strategic pillars 
            of growth and innovation.
          </p>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="py-28 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* ACCELERATE */}
          <div className="p-10 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Accelerate</h3>
            <p className="text-neutral-500 mb-6">
              Speed, Scale & Sustainable Growth
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li>• Agentic Process Automation</li>
              <li>• Spec-Driven Application Development</li>
              <li>• AI-Powered Operations</li>
              <li>• Intelligent Managed Services</li>
            </ul>
          </div>

          {/* TRANSFORM */}
          <div className="p-10 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Transform</h3>
            <p className="text-neutral-500 mb-6">
              Excellence & Cost Optimization
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li>• Next-Gen Customer Experience</li>
              <li>• Enterprise Digital Transformation</li>
              <li>• Data & Platform Modernization</li>
              <li>• Application & Cloud Modernization</li>
            </ul>
          </div>

          {/* ASSURE */}
          <div className="p-10 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Assure</h3>
            <p className="text-neutral-500 mb-6">
              Risk, Quality & Governance
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li>• Intelligent Quality Engineering</li>
              <li>• AI Agent Evaluation</li>
              <li>• Risk & Operational Intelligence</li>
              <li>• Data Quality & Governance</li>
              <li>• AI Lifecycle Governance</li>
              <li>• Vulnerability Management</li>
            </ul>
          </div>

          {/* INNOVATE */}
          <div className="p-10 bg-white dark:bg-neutral-950 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Innovate</h3>
            <p className="text-neutral-500 mb-6">
              New Value, New Revenue, New Business Models
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li>• Revenue & Growth Analytics</li>
              <li>• Generative Business Intelligence (GenBI)</li>
              <li>• Decisioning Intelligence</li>
              <li>• Intelligent Document Processing</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}