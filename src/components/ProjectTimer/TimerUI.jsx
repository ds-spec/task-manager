import React from "react";
import TaskInput from "./TaskInput";
import { Timeline } from "vis-timeline";

const TimerUI = ({ setActiveButton }) => {
  return (
    <div className="bg-[#EDF0FF] w-full h-full p-[1.2vw_1vw]">
      {/* <div className="flex gap-5 flex-col px-5 py-4"> */}
      {/* <h1 className="text-3xl font-bold text-black">Time Tracking</h1> */}
      <TaskInput />
        <Timeline />
      {/* </div> */}
    </div>
  );
};

export default TimerUI;
