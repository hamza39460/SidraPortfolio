import { useState, useEffect, useRef } from "react";
import Group1410091350 from "../../imports/Group1410091350";
import Group1410091350ECommerce from "../../imports/Group1410091350-7-245";
import Group1410091350Education from "../../imports/Group1410091350-7-258";
import Group1410091307RealEstate from "../../imports/Group1410091307";
import Group1410091307Lifestyle from "../../imports/Group1410091307-7-292";
import Group1410091350SocialNetworking from "../../imports/Group1410091350-7-303";
import imgCreatorsProfile1 from "../../assets/5313caed970c8e6d946419115e7c14be4bdcc41f.png";
import imgGetStartedV21 from "../../assets/aaca80a5291de843e00a27de1b3542bc0c56cf6b.png";

type Industry = "On Demand Services" | "Healthcare" | "E-Commerce" | "Education" | "Real Estate" | "Lifestyle" | "Social Networking";

export function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("On Demand Services");
  const [isAutoSwitching, setIsAutoSwitching] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const manualSelectionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const industries: Industry[] = [
    "On Demand Services",
    "Healthcare",
    "E-Commerce",
    "Education",
    "Real Estate",
    "Lifestyle",
    "Social Networking"
  ];

  // Auto-switching logic
  useEffect(() => {
    if (isAutoSwitching) {
      intervalRef.current = setInterval(() => {
        setSelectedIndustry((current) => {
          const currentIndex = industries.indexOf(current);
          const nextIndex = (currentIndex + 1) % industries.length;
          return industries[nextIndex];
        });
      }, 5000); // 5 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoSwitching, industries]);

  // Handle manual selection
  const handleManualSelection = (industry: Industry) => {
    setSelectedIndustry(industry);
    setIsAutoSwitching(false);

    // Clear any existing timeout
    if (manualSelectionTimeoutRef.current) {
      clearTimeout(manualSelectionTimeoutRef.current);
    }

    // Resume auto-switching after 60 seconds of manual selection
    manualSelectionTimeoutRef.current = setTimeout(() => {
      setIsAutoSwitching(true);
    }, 60000);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (manualSelectionTimeoutRef.current) {
        clearTimeout(manualSelectionTimeoutRef.current);
      }
    };
  }, []);

  const renderIndustryContent = () => {
    if (selectedIndustry === "Healthcare") {
      return (
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 h-[663px] w-[1155px]">
          <Group1410091350 />
        </div>
      );
    }

    if (selectedIndustry === "E-Commerce") {
      return (
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 h-[663px] w-[1155px]">
          <Group1410091350ECommerce />
        </div>
      );
    }

    if (selectedIndustry === "Education") {
      return (
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 h-[663px] w-[1155px]">
          <Group1410091350Education />
        </div>
      );
    }

    if (selectedIndustry === "Real Estate") {
      return (
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 h-[663px] w-[1155px]">
          <Group1410091307RealEstate />
        </div>
      );
    }

    if (selectedIndustry === "Lifestyle") {
      return (
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 h-[663px] w-[1155px]">
          <Group1410091307Lifestyle />
        </div>
      );
    }

    if (selectedIndustry === "Social Networking") {
      return (
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 h-[663px] w-[1155px]">
          <Group1410091350SocialNetworking />
        </div>
      );
    }

    // Default view for other industries
    return (
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
        <div className="col-1 h-[610px] ml-0 mt-0 relative rounded-[20px] row-1 w-[1100px] pointer-events-none" data-name="Creator's profile 1">
          <div className="absolute inset-0 overflow-hidden rounded-[20px]">
            <img alt="" className="absolute h-[132.76%] left-0 max-w-none top-0 w-full" src={imgCreatorsProfile1} />
          </div>
          <div aria-hidden="true" className="absolute border-9 border-[#2d366a] border-solid inset-[-9px] rounded-[29px]" />
        </div>
        <a href="https://www.upwork.com/freelancers/~01a7b8f5582b50fefd" target="_blank" rel="noopener noreferrer" className="col-1 h-[528px] ml-[911px] mt-[135px] relative rounded-[20px] row-1 w-[244px] cursor-pointer hover:opacity-90 transition-opacity block" data-name="Get Started v2 1">
          <img alt="Get Started" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgGetStartedV21} />
          <div aria-hidden="true" className="absolute border-8 border-[rgba(255,255,255,0.1)] border-solid inset-[-8px] rounded-[28px]" />
        </a>
      </div>
    );
  };

  return (
    <div className="col-1 content-stretch flex flex-col gap-[40px] items-center ml-0 mt-[174px] relative row-1 w-[1156px]" data-name="Industries">
      <div className="content-stretch flex gap-[67px] items-center justify-center relative shrink-0 w-full">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => handleManualSelection(industry)}
            className={`${
              selectedIndustry === industry
                ? "bg-[#2d366a]"
                : "bg-transparent"
            } content-stretch flex items-center justify-center px-[20px] py-[5px] relative rounded-[60px] shrink-0 border-0 transition-all cursor-pointer hover:bg-[#2d366a]/50`}
          >
            {selectedIndustry === industry && (
              <div aria-hidden="true" className="absolute border border-[#838ab3] border-solid inset-0 pointer-events-none rounded-[60px]" />
            )}
            <div className={`flex flex-col font-['Open_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center tracking-[0.201px] whitespace-nowrap ${
              selectedIndustry === industry ? "text-white" : "text-[rgba(255,255,255,0.5)]"
            }`}>
              <p className="leading-[28px]">{industry}</p>
            </div>
          </button>
        ))}
      </div>
      {renderIndustryContent()}
    </div>
  );
}