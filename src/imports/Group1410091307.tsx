import imgImage37 from "../assets/51fe70147bc0789b953519cbd2280265484b8eb1.png";
import imgImage35 from "../assets/17ce65df92ae6349f4b3187d721a65c092e6f947.png";

export default function Group() {
  return (
    <div className="pointer-events-none relative size-full">
      <div className="absolute h-[642px] left-0 rounded-[20px] top-0 w-[1027px]" data-name="image 37">
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img alt="" className="absolute h-[122.67%] left-0 max-w-none top-0 w-full" src={imgImage37} />
        </div>
        <div aria-hidden="true" className="absolute border-9 border-[#2d366a] border-solid inset-[-9px] rounded-[29px]" />
      </div>
      <div className="absolute h-[513px] left-[898px] rounded-[20px] top-[171px] w-[258px]" data-name="image 35">
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img alt="" className="absolute h-[144.58%] left-[-53.84%] max-w-none top-[-17.4%] w-[206.27%]" src={imgImage35} />
        </div>
        <div aria-hidden="true" className="absolute border-8 border-[rgba(67,69,106,0.54)] border-solid inset-[-8px] rounded-[28px]" />
      </div>
    </div>
  );
}