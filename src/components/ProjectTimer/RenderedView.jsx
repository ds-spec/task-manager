import React, { useState } from "react";
import { RiTimeLine } from "react-icons/ri";
import { RxLapTimer } from "react-icons/rx";
import { ImStatsDots } from "react-icons/im";
import { TbReportAnalytics } from "react-icons/tb";
import TaskInput from "./TaskInput";
import TaskStats from "./TaskStats";
import Report from "./Report";

const RenderedView = () => {
  const [activeState, setActiveState] = useState("Timer");

  const renderedView = () => {
    switch (activeState) {
      case "Timer":
        return <TaskInput />;
      case "Statistics":
        return <TaskStats />;
      case "Report":
        return <Report />;
      default:
        return <TaskInput />;
    }
  };
  return (
    <>
      <div className="flex gap-5 p-[1.2vw_1vw]">
        <h3
          className={`flex items-center gap-2 text-[1.2vw] text-[#939496] cursor-pointer hover:bg-[#FFD9E6] ${
            activeState === "Timer"
              ? "bg-[#FFD9E6] font-bold text-[#282828]"
              : ""
          } px-6 py-2 rounded-full`}
          onClick={() => setActiveState("Timer")}
        >
          <RxLapTimer />
          Timer
        </h3>

        <h3
          className={`flex items-center gap-2 text-[1.2vw] text-[#939496] cursor-pointer hover:bg-[#FFD9E6] ${
            activeState === "Statistics"
              ? "bg-[#FFD9E6] font-bold text-[#282828]"
              : ""
          } px-6 py-2 rounded-full`}
          onClick={() => setActiveState("Statistics")}
        >
          <ImStatsDots />
          Statistics
        </h3>
        <h3
          className={`flex items-center gap-2 text-[1.2vw] text-[#939496] cursor-pointer hover:bg-[#FFD9E6] ${
            activeState === "Report"
              ? "bg-[#FFD9E6] font-bold text-[#282828]"
              : ""
          } px-6 py-2 rounded-full`}
          onClick={() => setActiveState("Report")}
        >
          <TbReportAnalytics />
          Report
        </h3>
      </div>
      <div id="rendered-view">{renderedView()}</div>
    </>
  );
};

export default RenderedView;
