import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function Page() {
  return (
    <CaseStudyTemplate
      title="AI-Driven Supply Chain Optimization"
      subtitle="Using predictive AI models to improve forecasting and logistics efficiency."
      challenge="A global enterprise faced inefficiencies in supply chain forecasting due to fragmented data sources and manual planning processes."
      solution="KSquare implemented a unified enterprise data platform combined with predictive AI models that enabled real-time demand forecasting, inventory optimization, and automated logistics decisions."
      outcomes={[
        "22% reduction in operational costs",
        "Improved demand forecasting accuracy",
        "Faster supply chain decision cycles"
      ]}
    />
  );
}