import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function Page() {
  return (
    <CaseStudyTemplate
      title="Intelligent Customer Insights Platform"
      subtitle="AI-driven analytics delivering real-time customer intelligence."
      challenge="The organization lacked a unified platform for understanding customer behavior across digital channels and operational systems."
      solution="KSquare built an AI-powered customer intelligence platform that unified enterprise data sources and applied machine learning models to deliver real-time insights for marketing and product teams."
      outcomes={[
        "18% improvement in customer retention",
        "Unified customer intelligence platform",
        "Real-time customer analytics",
      ]}
    />
  );
}