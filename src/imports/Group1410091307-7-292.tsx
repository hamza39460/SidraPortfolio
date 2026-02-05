import imgIMockupIPhone14 from "../assets/5def56dabe1fb0abf0bc83b3bd4bf1567b869b1f.png";
import imgIMockupIPhone15 from "../assets/26a93ed0951f2b5f8b432f3d4467189362037594.png";
import imgIMockupIPhone16 from "../assets/db36ed54792298b3aea618583f0a6a67086e9b97.png";
import imgIMockupIPhone17 from "../assets/9260e125c2d35e40ab531fe432158edd6d5112ad.png";

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[585.8px] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1 w-[910.633px]">
      <div className="col-1 flex h-[357.892px] items-center justify-center ml-0 mt-[197.51px] relative row-1 w-[519.408px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-6">
          <div className="h-[308.537px] relative w-[490.09px]" data-name="iMockup - iPhone 14">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone14} />
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[439.523px] items-center justify-center ml-[106.74px] mt-[102.57px] relative row-1 w-[559.166px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[17.22deg] scale-x-99 scale-y-101">
          <div className="h-[306.607px] relative w-[493.137px]" data-name="iMockup - iPhone 14">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone15} />
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[422.561px] items-center justify-center ml-[211.65px] mt-[19.58px] relative row-1 w-[474.425px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-9.8deg] scale-x-101 scale-y-99">
          <div className="h-[359.542px] relative w-[416.515px]" data-name="iMockup - iPhone 14">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone16} />
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[387.198px] items-center justify-center ml-[364.52px] mt-0 relative row-1 w-[448.5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-3.17deg] scale-y-99">
          <div className="h-[366.103px] relative w-[427.023px]" data-name="iMockup - iPhone 14">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone17} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[554px] items-center left-0 pl-[16px] pr-[50px] top-0 w-[1142px]">
      <Group2 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}