import imgManagePatients1 from "../assets/632c4e728a8339430329e994e5f1765af82b45e0.png";
import imgImage4 from "../assets//0d087b5327d0eef825da7818455378ebf492e02c.png";

export default function Group() {
  return (
    <div className="pointer-events-none relative size-full">
      <div className="absolute h-[611px] left-0 rounded-[20px] top-0 w-[1100px]" data-name="Manage Patients 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgManagePatients1} />
        <div aria-hidden="true" className="absolute border-9 border-[#2d366a] border-solid inset-[-9px] rounded-[29px]" />
      </div>
      <div className="absolute h-[528px] left-[911px] rounded-[20px] top-[135px] w-[244px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgImage4} />
        <div aria-hidden="true" className="absolute border-8 border-[rgba(67,69,106,0.54)] border-solid inset-[-8px] rounded-[28px]" />
      </div>
    </div>
  );
}