import { IconBaseProps, IconType } from "react-icons";

type ContactBoxProps = {
    icon: IconBaseProps;
    text: string;
}
const ContactBox = ({icon, text}: ContactBoxProps) => {
  return (
    <div className="border rounded-lg flex items-center gap-5 w-[14rem] h-[4rem] p-2">
        <p className=" text-[#025689] border text-xl p-2 rounded-full bg-gray-200">{icon}</p>
        <p className="text-[#025689]">{text}</p>
    </div>
  );
};

export default ContactBox;
