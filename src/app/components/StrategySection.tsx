import strategyImage from "figma:asset/ca1e21dda78033f7039c4fcbc76adff263f4c861.png";

export function StrategySection() {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-[663px] w-full">
        <img 
          src={strategyImage} 
          alt="Where strategy meets seamless user experience - showing UX skills including UX Research, Journey Mapping, UX audits, Competitor analysis, Information architecture & user flows, Wireframing, Design systems, UI design & Consistency, Advanced prototyping, and Usability testing & A/B testing"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
