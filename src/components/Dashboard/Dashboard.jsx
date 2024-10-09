import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import assets from "../../assets/assets";
import { LiaTasksSolid } from "react-icons/lia";
import { IoCalendarClearOutline } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import { PiTimerBold } from "react-icons/pi";
import { RiSettingsLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import MainTop from "../Main/Main";

const Dashboard = () => {
  const [activeTask, setActiveTask] = useState(0);
  const [time, setTime] = useState(new Date());

  const handleTaskClick = (index) => {
    setActiveTask(index);
  };

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
          <IoMenu />
          <IoMdAdd />
        </div>
        <div id="nav-bottom">
          <LiaTasksSolid />
          <IoCalendarClearOutline />
          <RiNotification2Line />
          <PiTimerBold />
          <RiSettingsLine />
        </div>
        <div id="line"></div>
      </div>
      <MainTop />
    </div>
  );
};

export default Dashboard;
