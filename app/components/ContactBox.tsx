import { useColor } from "@/context/ThemeContext";
import { IconBaseProps, IconType } from "react-icons";

type ContactBoxProps = {
    icon: IconBaseProps;
    text: string;
}
const ContactBox = ({icon, text}: ContactBoxProps) => {
  const { brandColor, setBrandColor } = useColor();
  return (
    <div className="border rounded-lg flex items-center gap-5 w-[14rem] h-[4rem] p-2">
        <p className="border text-xl p-2 rounded-full bg-gray-200" style={{color: brandColor}}>{icon}</p>
        <p style={{color: brandColor}}>{text}</p>
    </div>
  );
};

export default ContactBox;
