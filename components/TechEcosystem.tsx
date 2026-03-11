export default function TechEcosystem() {
  return (
    <section className="relative py-40 bg-black text-white">

      <div className="max-w-6xl mx-auto text-center px-6">

        <p className="text-sm uppercase tracking-widest text-gray-500 mb-16">
          Technology Ecosystem
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 items-center opacity-70">

          <img src="/logos/aws.svg" className="mx-auto h-8" />
          <img src="/logos/nvidia.svg" className="mx-auto h-8" />
          <img src="/logos/google-cloud.svg" className="mx-auto h-8" />
          <img src="/logos/salesforce.svg" className="mx-auto h-8" />

        </div>

      </div>

    </section>
  )
}