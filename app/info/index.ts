import { IoSchool } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
import { RiHome5Fill } from "react-icons/ri";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { FaCircleNotch } from "react-icons/fa";
import { RiSettings3Line } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";

export const popularTopicsInfo = [
    {
        title: "Networking",
        imgUrl: "/assets/images/networking.jpg",
    },
    {
        title: "Design",
        imgUrl: "/assets/images/desgin.avif",
    },
    {
        title: "AI Bot",
        imgUrl: "/assets/images/AI.webp",
    },
    {
        title: "Crypto",
        imgUrl: "/assets/images/Crypto.webp",
    },
    {
        title: "Ui/Ux",
        imgUrl: "/assets/images/UIUX.avif",
    },
]

export const recentCases = [
    {
        text: "Client data not loading on CRM",
        code: "TP-4377",
        date: "Sep 03",
        level: "High"
    },
    {
        text: "Invoice are duplicated on client email",
        code: "TP-4377",
        date: "Sep 14",
        level: "Medium"
    },
    {
        text: "SMS campaign is broken in Mena Region",
        code: "TP-4377",
        date: "Sep 20",
        level: "Low"
    }
]
export const recentChats = [
    {
        name: "Melinda Martin",
        text: "We can do the CSV upload on the portal again",
        time: "2 hrs ago",
    },
    {
        name: "James Anderson",
        text: "We can do the CSV upload on the portal again",
        time: "1 hrs ago",
    },
]

export const Contact = [
    {
        icon: IoSchool,
        text: "Training Academy"
    },
    {
        icon: RiGroupLine,
        text: "Community"
    }

]

export const FooterBarInfo = [
    {
        icon: HiOutlineChatBubbleBottomCenterText,
        name: "Chats"
    },
    {
        icon: FaCircleNotch,
        name: "Cases"
    },
    {
        icon: RiSettings3Line,
        name: "Settings"
    },
    {
        icon: CiCircleMore,
        name: "More"
    }
]