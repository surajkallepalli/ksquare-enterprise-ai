import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function Page() {
  return (
    <CaseStudyTemplate
      title="AI-Powered Supply Chain Insights"
      subtitle="Predictive analytics enabling smarter supply chain planning and operational visibility."
      challenge="A global enterprise lacked visibility across supply chain operations, resulting in inefficient planning and delayed decision making."
      solution="KSquare implemented an enterprise AI platform integrating operational data, predictive forecasting models, and real-time analytics dashboards to improve supply chain visibility and planning."
      outcomes={[
        "Improved supply chain visibility",
        "Faster operational decision making",
        "Reduced logistics inefficiencies",
      ]}
    />
  );
}