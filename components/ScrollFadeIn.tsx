"use client";

import { useRef, ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface FadeInSectionProps {
  children: ReactNode;
}

export default function FadeInSection({ children }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
          } else {
            controls.start({ opacity: 0, y: 80, transition: { duration: 0 } });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}