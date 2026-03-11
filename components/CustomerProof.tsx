export default function CustomerProof() {
  return (
    <section className="relative py-40 bg-[#0b0f1a] text-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Video */}

        <div className="relative rounded-xl overflow-hidden border border-white/10">
          <video
            controls
            className="w-full h-full object-cover"
            poster="/testimonial-thumb.jpg"
          >
            <source src="/testimonial.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Quote */}

        <div>

          <p className="text-3xl lg:text-4xl leading-relaxed font-light text-gray-200">
            “KSquare helped us unify enterprise data infrastructure and deploy
            AI-driven intelligence across our organization.”
          </p>

          <div className="mt-8 text-sm text-gray-400">
            <p className="font-medium text-white">Client Name</p>
            <p>Company Name</p>
          </div>

        </div>

      </div>

    </section>
  )
}