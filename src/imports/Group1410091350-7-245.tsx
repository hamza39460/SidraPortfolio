import imgScreenshot20251210At92952Pm1 from "../assets/158e402ecad7981f2bea0040a64a17a3040e8d76.png";
import imgScreenshot20251210At92913Pm1 from "../assets/754a4e9751fc29e4578e86821b9caa2b665bd78f.png";
import imgIMockupIPhone14 from "../assets/a78bedf785b41081579b3f01658bba49280d3039.png";

function Group1() {
  return (
    <div className="absolute contents left-0 pointer-events-none top-0">
      <div className="absolute h-[203.429px] left-0 rounded-bl-[9px] rounded-br-[9px] top-[379.12px] w-[1068px]" data-name="Screenshot 2025-12-10 at 9.29.52 PM 1">
        <div className="absolute inset-0 overflow-hidden rounded-bl-[9px] rounded-br-[9px]">
          <img alt="" className="absolute h-[150.91%] left-[-0.91%] max-w-none top-[0.5%] w-[101.1%]" src={imgScreenshot20251210At92952Pm1} />
        </div>
        <div aria-hidden="true" className="absolute border-9 border-[#2a3266] border-solid inset-[-9px] rounded-bl-[18px] rounded-br-[18px]" />
      </div>
      <div className="absolute h-[388.646px] left-0 rounded-tl-[9px] rounded-tr-[9px] top-0 w-[1068px]" data-name="Screenshot 2025-12-10 at 9.29.13 PM 1">
        <div className="absolute inset-0 overflow-hidden rounded-tl-[9px] rounded-tr-[9px]">
          <img alt="" className="absolute h-[99.99%] left-[-0.9%] max-w-none top-[0.02%] w-[100.96%]" src={imgScreenshot20251210At92913Pm1} />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(45,54,106,0.89)] border-l-9 border-r-9 border-solid border-t-9 inset-[-9px_-9px_0_-9px] rounded-tl-[18px] rounded-tr-[18px]" />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group4 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Group5 />
      <div className="absolute h-[501px] left-[907px] shadow-[6px_-4px_4px_0px_rgba(0,0,0,0.06)] top-[141px] w-[244px]" data-name="iMockup - iPhone 14">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.92%] left-[-0.13%] max-w-none top-0 w-[100.26%]" src={imgIMockupIPhone14} />
        </div>
      </div>
    </div>
  );
}