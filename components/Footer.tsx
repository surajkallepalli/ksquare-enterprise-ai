export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">KSquare Group</h3>
          <p className="text-neutral-400 text-sm">
            Engineering the AI-first enterprise.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Capabilities</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>Enterprise Strategy</li>
            <li>Cloud Transformation</li>
            <li>Data Engineering</li>
            <li>AI Systems</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-neutral-400 text-sm">
            enterprise@ksquaregroup.com
          </p>
        </div>
      </div>
    </footer>
  );
}