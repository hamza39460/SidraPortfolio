import imgImage38 from "../assets/0049a0bd9a7de17021d1c3e5aa8baa58128204c4.png";
import imgImage39 from "../assets/0ff5869e2f4352c45f9b5964c8477b3c93a1eb84.png";

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[617px] left-0 rounded-[20px] top-0 w-[1097px]" data-name="image 38">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage38} />
      </div>
      <div className="absolute h-[559px] left-[889px] pointer-events-none rounded-[20px] top-[103px] w-[257px]" data-name="image 39">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgImage39} />
        <div aria-hidden="true" className="absolute border-8 border-[rgba(67,69,106,0.54)] border-solid inset-[-8px] rounded-[28px]" />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Group1 />
    </div>
  );
}