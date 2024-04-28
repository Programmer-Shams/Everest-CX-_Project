import { RxDotFilled } from "react-icons/rx";
type RecentCaseBoxProps = {
    code: string;
    text: string;
    date: string;
    level: string;
}

const RecentCaseBox = ({code, text, date, level}: RecentCaseBoxProps) => {
  return (
    <div className="border-2  w-[30rem] h-[4.5rem] rounded-lg flex items-center gap-2 p-2">
        <input type="radio" />
        <div className="flex items-center justify-between w-full">
            <div>
                <p className="text-gray-500 text-sm">{code}</p>
                <h2 className="text-[#30425D] text-[15px]">{text}</h2>
            </div>
            <div className="flex">
            <div className="flex items-center gap-3">
                <p className=" text-gray-500 text-sm">{date}</p>
                <p className="bg-[#DEDEDE] text-[#30425D] text-sm text-center rounded-sm w-fit px-2">{level}</p>
            </div>
            <div className="flex flex-col gap-0 h-8 cursor-pointer">
                <RxDotFilled className=" text-gray-600" size={22} />
                <RxDotFilled className=" text-gray-600" size={22}/>
                <RxDotFilled className=" text-gray-600" size={22}/>
            </div>
            </div>
        </div>
    </div>
  );
};

export default RecentCaseBox;
