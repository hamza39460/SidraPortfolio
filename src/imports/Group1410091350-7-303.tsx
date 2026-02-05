import imgDesktop1 from "figma:asset/36db5e065224112d2a65ab31c8f8f6ca01875608.png";
import imgMobile1 from "figma:asset/91c1310e80c9acf6205cf551c389f49d66d58044.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[694px] left-0 top-0 w-[1047px]" data-name="Desktop 1">
        <div className="absolute inset-[-1.3%_-0.86%]">
          <img alt="" className="block max-w-none size-full" height="712" src={imgDesktop1} width="1065" />
        </div>
      </div>
      <div className="absolute h-[528px] left-[900px] pointer-events-none rounded-[20px] top-[189px] w-[245px]" data-name="Mobile 1">
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img alt="" className="absolute h-[229.78%] left-0 max-w-none top-0 w-full" src={imgMobile1} />
        </div>
        <div aria-hidden="true" className="absolute border-8 border-[rgba(67,69,106,0.54)] border-solid inset-[-8px] rounded-[28px]" />
      </div>
    </div>
  );
}