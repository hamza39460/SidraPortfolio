import imgIMockupIPhone15ProMax from "../assets/b5b67cd46c265bd21140e43ea75115bd3191f40b.png";
import imgIMockupIPhone15ProMax1 from "../assets/790c6bb102646d99fa7a7972c5a2b3d7c3424bdd.png";
import imgIMockupIPhone15ProMax2 from "../assets/1ee825b6f8643069e9b30556c061d5abff4a0441.png";

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[420px] ml-[158.3px] mt-[147px] relative row-1 w-[593px]" data-name="iMockup - iPhone 15 Pro Max">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone15ProMax} />
      </div>
      <div className="col-1 h-[431px] ml-[169.3px] mt-[101px] relative row-1 w-[411px]" data-name="iMockup - iPhone 15 Pro Max">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone15ProMax1} />
      </div>
      <div className="col-1 flex h-[572.201px] items-center justify-center ml-0 mt-0 relative row-1 w-[556.368px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-14.33deg]">
          <div className="h-[474.895px] relative w-[452.951px]" data-name="iMockup - iPhone 15 Pro Max">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone15ProMax2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pl-[16px] pr-[50px] top-0 w-[1142px]">
      <Group1 />
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