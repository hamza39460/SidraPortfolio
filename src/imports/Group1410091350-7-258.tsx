import imgImage29 from "figma:asset/8c8470f31332aa27a94c783bc29686bf3e5e3e9a.png";
import imgImage28 from "figma:asset/a65219cd29c168cc80688b69c61483a181ac8a03.png";

export default function Group() {
  return (
    <div className="pointer-events-none relative size-full">
      <div className="absolute h-[656px] left-0 rounded-[9px] top-0 w-[1056px]" data-name="image 29">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[9px] size-full" src={imgImage29} />
        <div aria-hidden="true" className="absolute border-9 border-[#2d366a] border-solid inset-[-9px] rounded-[18px]" />
      </div>
      <div className="absolute h-[553px] left-[907px] rounded-[20px] top-[141px] w-[244px]" data-name="image 28">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgImage28} />
        <div aria-hidden="true" className="absolute border-8 border-[rgba(67,69,106,0.54)] border-solid inset-[-8px] rounded-[28px]" />
      </div>
    </div>
  );
}