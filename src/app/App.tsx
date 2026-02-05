import WhoIAm from "../imports/WhoIAm";

export default function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {/* Full-width background layers - absolutely positioned to cover entire viewport */}
      <div className="fixed inset-0 left-0 right-0 pointer-events-none">
        {/* Dark navy background - Hero section */}
        <div className="absolute bg-[#111343] h-[2457px] left-0 right-0 top-0 w-screen" />
        
        {/* White background - Middle sections */}
        <div className="absolute bg-white h-[3971px] left-0 right-0 top-[2457px] w-screen" />
        
        {/* Dark navy background - Bottom section */}
        <div className="absolute bg-[#111343] h-[1046px] left-0 right-0 top-[6428px] w-screen" />
        <div className="absolute bg-[rgba(17,19,67,0.5)] h-[1001px] left-0 right-0 top-[6428px] w-screen" />
      </div>

      {/* Content wrapper with responsive scaling */}
      <div className="relative w-full flex justify-center">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Scale down on smaller screens */}
          <div className="origin-top scale-[0.4] sm:scale-[0.5] md:scale-[0.65] lg:scale-[0.8] xl:scale-90 2xl:scale-100">
            <WhoIAm />
          </div>
        </div>
      </div>
    </div>
  );
}