import React, { useEffect, useState } from "react";
import { LiaTasksSolid } from "react-icons/lia";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import { PiTimerBold } from "react-icons/pi";
import { RiSettingsLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import TaskUI from "../Task-UI/TaskUI";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showTaskUI, setShowTaskUI] = useState(false);
  const [showTimerUI, setShowTimerUI] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate();

  // Handle time update
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  // Common icon style class
  const iconClass =
    "text-black w-10 h-10 p-2 -ml-2 transition-all duration-300 cursor-pointer";

  // Handle icon click
  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };
  return (
    <div id="main">
      <div id="nav-left">
        {/* Top Navigation */}
        <div id="nav-top">
          <h5>{formatTime(time)}</h5>
          <IoMenu
            className={`${iconClass} hover:bg-[#FFD9E6] rounded-lg`}
            onClick={() => handleIconClick("menu")}
          />
          <IoMdAdd
            className={`${iconClass} hover:bg-[#FFD9E6] rounded-lg`}
            onClick={() => setShowTaskUI(true)}
          />
        </div>

        {/* Bottom Navigation */}
        <div id="nav-bottom">
          <LiaTasksSolid
            className={`${iconClass} hover:bg-[#D9DDFF] rounded-full active:bg-red-400`}
            onClick={() => navigate("/dashboard/overview")}
            // onClick={() => handleIconClick("tasks")}
          />
          <FaRegFolderOpen
            className={`${iconClass} hover:bg-[#D9DDFF] rounded-full`}
            onClick={() => handleIconClick("folder")}
          />
          <IoCalendarClearOutline
            className={`${iconClass} hover:bg-[#D9DDFF] rounded-full`}
            onClick={() => handleIconClick("calendar")}
          />
          <RiNotification2Line
            className={`${iconClass} hover:bg-[#D9DDFF] rounded-full`}
            onClick={() => handleIconClick("notification")}
          />
          <PiTimerBold
            className={`${iconClass} hover:bg-[#D9DDFF] rounded-full`}
            onClick={() => navigate("/dashboard/timer")}
          />
          <RiSettingsLine
            className={`${iconClass} hover:bg-[#D9DDFF] rounded-full`}
            onClick={() => handleIconClick("settings")}
          />
        </div>
      </div>

      <div id="line"></div>
      {/* <MainTop /> */}
      {showTaskUI && <TaskUI setActiveButton={setShowTaskUI} />}
      {/* {showTimerUI && <TimerUI setActiveButton={setShowTimerUI} />} */}
    </div>
  );
};

export default Navbar;
