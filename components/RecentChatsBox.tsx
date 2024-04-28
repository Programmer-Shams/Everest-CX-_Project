import { IoMdTime } from "react-icons/io";
type RecentChatsBox = {
    name: string;
    text: string;
    time: string;
}

const RecentChatsBox = ({ text, time, name}: RecentChatsBox) => {
    return (
      <div className="border-2  w-[30rem] h-[4rem] rounded-lg flex items-center gap-3 p-2">
        <img src="/assets/images/AI.webp" alt="" className="w-8 h-8 rounded-full" />
          <div className="flex items-center justify-between w-full">
            <div>
                 <h2 className="text-[#30425D] text-sm font-bold">{name}</h2>
                 <h2 className="text-[#30425D] text-[14px]">{text}</h2>
            </div>
                  
              <div className="flex items-center gap-1">
                  <IoMdTime />
                  <p className=" text-gray-500 text-[13px]">{time}</p>
              </div>
          </div>
      </div>
    );
};

export default RecentChatsBox;
