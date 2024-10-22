import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { LiaTasksSolid } from "react-icons/lia";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import { PiTimerBold } from "react-icons/pi";
import { RiSettingsLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import MainTop from "../Main/Main";
import TaskUI from "../Task-UI/TaskUI";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div id="main">
      <div id="nav-left">
        <div id="nav-top">
          <h5>{formatTime(time)}</h5>
          <IoMenu className="hover:bg-[#FFD9E6] text-black w-10 h-10 p-2 -ml-2 rounded-lg transition-all duration-300" />
          <IoMdAdd
            className="hover:bg-[#FFD9E6] text-black w-10 h-10 p-2 -ml-2 rounded-lg transition-all duration-300"
            onClick={() => setActiveButton(true)}
          />
        </div>
        <div id="nav-bottom">
          <LiaTasksSolid className="hover:bg-[#D9DDFF] text-black w-10 h-10 p-2 -ml-2 rounded-full cursor-pointer transition-all duration-300" />
          <FaRegFolderOpen className="hover:bg-[#D9DDFF] text-black w-10 h-10 p-2 -ml-2 rounded-full cursor-pointer transition-all duration-300" />
          <IoCalendarClearOutline className="hover:bg-[#D9DDFF] text-black w-10 h-10 p-2 -ml-2 rounded-full cursor-pointer transition-all duration-300" />
          <RiNotification2Line className="hover:bg-[#D9DDFF] text-black w-10 h-10 p-2 -ml-2 rounded-full cursor-pointer transition-all duration-300" />
          <PiTimerBold className="hover:bg-[#D9DDFF] text-black w-10 h-10 p-2 -ml-2 rounded-full cursor-pointer transition-all duration-300" />
          <RiSettingsLine className="hover:bg-[#D9DDFF] text-black w-10 h-10 p-2 -ml-2 rounded-full cursor-pointer transition-all duration-300" />
        </div>
        <div id="line"></div>
      </div>
      <MainTop />
      {activeButton && <TaskUI setActiveButton={setActiveButton} />}
    </div>
  );
};

export default Dashboard;
