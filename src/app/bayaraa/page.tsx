import { mockData } from "../mock/mockdata";
export default function App() {
  return (
    <div className=" w-full h-full flex justify-center ">
      <div className="border-white border-[1px] border-solid w-[700px] h-[700px] flex flex-col gap-[20px]">
        {mockData.map((item) => (
          <div className="flex gap-[50px] mt-[20px]">
            <div key={item.id} className="flex flex-col items-center">
              <div className="text-[#ffffff] text-[20px]">{item.name}</div>
              <div className="text-[#ffffff] text-[20px]">{item.age}</div>
              <div className="text-[#ffffff] text-[20px]">{item.email}</div>
            </div>
            <div className=" cursor-pointer">EDIT</div>
            <div className=" cursor-pointer">DELETE</div>
          </div>
        ))}
      </div>
      <div className="text-[#ffffff] text-[30px] cursor-pointer"> + Add</div>
    </div>
  );
}
