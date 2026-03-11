"use client";

import { useEffect, useRef, useState } from "react";

export default function TestimonialVideo() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const iframe = iframeRef.current;

    if (!section || !iframe) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            iframe.contentWindow?.postMessage(
              '{"event":"command","func":"playVideo","args":""}',
              "*"
            );
          } else {
            setVisible(false);
            iframe.contentWindow?.postMessage(
              '{"event":"command","func":"pauseVideo","args":""}',
              "*"
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 py-40 grid lg:grid-cols-2 gap-24 items-center"
    >
      {/* Video */}
      <div className="relative group w-full">
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl opacity-30 group-hover:opacity-50 transition"></div>

        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.8)] aspect-[16/9] w-full">
          <iframe
            ref={iframeRef}
            className={`w-full h-full transition-opacity duration-1000 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            src="https://www.youtube.com/embed/Saf8GSPKz2Y?enablejsapi=1&rel=0"
            title="Client Testimonial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <p className="text-3xl md:text-4xl leading-relaxed font-light text-neutral-200">
          “KSquare helped us unify enterprise data infrastructure and deploy AI
          intelligence across our organization.”
        </p>

        <div className="mt-10 text-sm text-neutral-400">
          <p className="font-medium text-white">Bank of St Lucia</p>
          <p>Eastern Caribbean Financial Holding Company</p>
        </div>
      </div>
    </section>
  );
}