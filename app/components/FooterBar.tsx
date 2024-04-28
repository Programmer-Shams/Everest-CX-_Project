import { useColor } from "@/context/ThemeContext";
import { IconBaseProps } from "react-icons";

type FooterBarProps = {
    icon: IconBaseProps;
    name: string;

}

const FooterBar = ({icon, name}: FooterBarProps) => {
  const { brandColor, setBrandColor } = useColor();
  return (
    <div className="flex flex-col items-center cursor-pointer">
        <p className="p-2 rounded-full text-xl text-center" style={{color: brandColor}}>{icon}</p>
        <p className="text-[14px]" style={{color: brandColor}}>{name}</p>
    </div>
  );
};

export default FooterBar;
