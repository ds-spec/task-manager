import React from "react";
import TaskInput from "./TaskInput";

const TimerUI = ({ setActiveButton }) => {
  return (
    <div className="bg-[#EDF0FF] w-full h-full">
      {/* <div className="flex gap-5 flex-col px-5 py-4"> */}
      {/* <h1 className="text-3xl font-bold text-black">Time Tracking</h1> */}
      <TaskInput />
      {/* </div> */}
    </div>
  );
};

export default TimerUI;
