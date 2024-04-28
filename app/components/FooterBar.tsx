import { IconBaseProps } from "react-icons";

type FooterBarProps = {
    icon: IconBaseProps;
    name: string;

}

const FooterBar = ({icon, name}: FooterBarProps) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
        <p className="text-[#025689] p-2 rounded-full text-xl text-center">{icon}</p>
        <p className="text-[#025689] text-[14px]">{name}</p>
    </div>
  );
};

export default FooterBar;
