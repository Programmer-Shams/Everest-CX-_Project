"use client"
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { MdInfoOutline } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { popularTopicsInfo, recentCases, recentChats, Contact, FooterBarInfo } from "../info";
import RecentCaseBox from "./RecentCaseBox";
import RecentChatsBox from "./RecentChatsBox";
import ContactBox from "./ContactBox";
import { IconBaseProps } from "react-icons";
import FooterBar from "./FooterBar";
import { RiHome5Fill } from "react-icons/ri";
import { ChromePicker, ColorResult } from "react-color";
import { useColor } from "@/context/ThemeContext";


const HelpCenter = () => {
  const [showPopularTopics, setShowPopularTopics] = useState(true);
  const [showRecentCases, setShowRecentCases] = useState(true);
  const [showRecentChats, setShowRecentChats] = useState(true);
  const [greeting, setGreeting] = useState("Hello there 👋 !");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const { brandColor, setBrandColor } = useColor();

  const handleSwitchChange = (type: "popularTopics" | "recentCases" | "recentChats") => {
    switch (type) {
      case "popularTopics":
        setShowPopularTopics(!showPopularTopics);
        break;
      case "recentCases":
        setShowRecentCases(!showRecentCases);
        break;
      case "recentChats":
        setShowRecentChats(!showRecentChats);
        break;
      default:
        break;
    }
  };

  const handleGreetingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGreeting(event.target.value);
  };

  const handleColorChange = (color: ColorResult) => {
    if (color.hex) {
      setBrandColor(color.hex);
    }
  };

  return (
    <section className="border-4 w-full p-8 bg-[#F6F7F9] rounded-xl flex flex-row lg:gap-[8rem] responsive">
      {/* Left Hand Side */}
      <div>
        <h1 className="text-xl">Tailored for your Brand</h1>
        <p className="text-lg leading-8 mt-7">Modify the attribute below to see how ivy Chat might look.</p>

        <div className="mt-16">
          <h2 className="text-sm font-bold text-gray-600">Greeting</h2>
          <div className="flex items-center relative w-[18rem]">
            <Input type="email" placeholder="Hello there 👋 !" className="w-full shadow-sm mt-2" onChange={handleGreetingChange} />
            <MdInfoOutline className="absolute right-3 top-4 cursor-pointer" size={20} />
          </div>
          <p className="text-[13px] text-gray-500 font-bold mt-2">Enter the greetings message to display</p>

          <div className="mt-16 flex flex-col gap-16">
            <div className="flex items-center space-x-5">
            <Switch id="show-popular-topics" checked={showPopularTopics} onClick={() => handleSwitchChange("popularTopics")} />
                <div>
                  <Label htmlFor="show-popular-topics" className="bold">Show popular topics</Label>
                <p className="text-sm text-gray-500">Deselect this to hide the popular topics section</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
            <Switch id="show-recent-cases" checked={showRecentCases}  onClick={() => handleSwitchChange("recentCases")} />
                <div>
                  <Label htmlFor="show-recent-cases" className="bold">Show recent case</Label>
                <p className="text-sm text-gray-500">Deselect this to hide the recent cases section</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
            <Switch id="show-recent-chats" checked={showRecentChats} onClick={() => handleSwitchChange("recentChats")} />
                <div>
                  <Label htmlFor="show-recent-chats" className="bold">Show recent chats</Label>
                <p className="text-sm text-gray-500">Deselect this to hide the recent chats section</p>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h1 className="text-[16px] text-gray-600">Brand Color</h1>
            <div className="flex items-center relative">
              
              <button className=" text-black border px-3 py-[5px] rounded-l mt-2" onClick={() => setShowColorPicker(!showColorPicker)}>
                Select Color
              </button>
              {showColorPicker && (
                 <div className="absolute top-20"> 
                  <ChromePicker color={brandColor} onChange={handleColorChange} /> 
                 </div>
              )}
              <Input type="text" className="w-[6rem] mt-2 rounded-l-none bg-blue-500 text-white border-none outline-0" value={brandColor} readOnly />
            </div>
            <p className="text-[13px] text-gray-500 font-bold mt-2">Enter Your brand hex color</p>
          </div>
        </div>
      </div>


      
      {/* Right Hand Side */}
      <div className="border h-[73rem] w-[33rem] rounded-xl bg-white" style={{borderColor: brandColor}}>
        <div className="w-full text-white rounded-t-xl py-4 px-6 flex justify-between" style={{ backgroundColor: brandColor }} >
          <p>e</p>
          <div className="flex items-center gap-3">
            <div className="relative">
              <p className="bg-white text-[10px] rounded-full text-center w-4 px-[1px] absolute -right-1 -top-2" style={{color: brandColor}}>2</p>
              <IoNotificationsOutline className="border rounded-full p-1" size={25} />
            </div>
            <Separator orientation="vertical" />
            <RxCross2 className="border rounded-full p-1" size={20} />
          </div>
        </div>
        <div className="py-4 px-6">
          <p className="font-semibold text-xl mt-4" style={{color: brandColor}}>{greeting}</p>
          <div className="flex items-center relative w-[27rem] mt-4">
            <FiSearch className="absolute left-0 top-4 cursor-pointer ml-1 text-gray-400" size={20} />
            <Input type="email" placeholder="Search knowledge base" className="w-full shadow-sm mt-2 px-8 bg-[#F5F5F5]" />
          </div>

            <div className="mt-10">
              <h1 className="text-lg font-semibold" style={{color: brandColor}}>Popular Topics</h1>
              {showPopularTopics && (
              <div className="flex items-center gap-2">
                {popularTopicsInfo.map((topic, index) => (
                  <div key={index} className="flex items-center gap-2 mt-4 border w-fit p-[1px] rounded-full">
                    <img src={topic.imgUrl} alt={topic.title} className="w-8 h-8 rounded-full" />
                    <p className="text-[11px] font-semibold  pr-2" style={{color: brandColor}}>{topic.title}</p>
                  </div>
                ))}
              </div>
              )}
               {!showPopularTopics && (
               <div className="mt-14 text-lg font-semibold text-center border rounded-lg py-8" style={{color: brandColor}} >
                 No Popular Topics to display
               </div>
              )}
            </div>


            <div className="mt-14">
              <div className="flex justify-between font-bold text-lg" style={{color: brandColor}}>
                <h1>Recent Cases</h1>
                <p className="border-b-2 text-[15px] cursor-pointer" style={{borderColor: brandColor}}>View All</p>
              </div>
              {showRecentCases && (
              <div className="mt-3 flex flex-col items-center gap-3">
                {recentCases.map((recentCase, index) => (
                  <RecentCaseBox key={index} code={recentCase.code} text={recentCase.text} date={recentCase.date} level={recentCase.level} />
                ))}
              </div>
               )}
               {!showRecentCases && (
               <div className="mt-14 text-lg font-semibold text-center border rounded-lg py-8" style={{color: brandColor}}>
                 No Recent Cases to display
               </div>
              )}
            </div>

          
            <div className="mt-14">
              <div className="flex justify-between text-lg font-bold" style={{color: brandColor}}>
                <h1>Recent Chats</h1>
                <p className="border-b-2 text-[15px] cursor-pointer" style={{borderColor: brandColor}}>View All</p>
              </div>
              {showRecentChats && (
              <div className="mt-3 flex flex-col items-center gap-3">
                {recentChats.map((recentChat, index) => (
                  <RecentChatsBox key={index} name={recentChat.name} text={recentChat.text} time={recentChat.time} />
                ))}
              </div>
               )}
               {!showRecentChats && (
               <div className="mt-14 text-lg font-semibold text-center border rounded-lg py-8" style={{color: brandColor}}>
                 No Recent Chats to display
               </div>
              )}
            </div>

          <div className="mt-14">
            <h1 className="font-bold text-lg" style={{color: brandColor}} >Need more help ?</h1>
            <div className="flex gap-3 mt-3">
              {Contact.map((helpCenter, index) => (
                <ContactBox key={index} icon={helpCenter.icon({} as IconBaseProps)} text={helpCenter.text} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-10 border-t py-2 px-5">
          <div>
            <div className="flex items-center flex-col cursor-pointer">
              <p className="text-white p-2 rounded-full text-xl text-center" style={{backgroundColor: brandColor}}><RiHome5Fill /></p>
              <p className="text-[14px]" style={{color: brandColor}}>Home</p>
            </div>
          </div>
          {FooterBarInfo.map((footer, index) => (
            <FooterBar key={index} icon={footer.icon({} as IconBaseProps)} name={footer.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;