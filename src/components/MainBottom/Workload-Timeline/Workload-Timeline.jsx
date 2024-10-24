import React from "react";
import { IoIosClose } from "react-icons/io";
import Workload from "./Workload/Workload";

const TimelineView = () => {
  return (
    <div id="timeline-workload" className="flex justify-between mt-4 px-2 py-2">
      <div id="timeline-view" className="w-[70vw]">
        <div
          id="timeline-up"
          className="bg-[#CCCDEF] px-4 py-5 rounded-t-xl flex items-center gap-3"
        >
          <IoIosClose className="bg-[#EBECEF] rounded-full w-10 h-10 p-2" />
          <h1 className="text-4xl">In Review</h1>
        </div>
        <div id="timeline-bottom" className="bg-[#ECE9EC] w-full h-72 rounded-b-xl"></div>
      </div>
      <div id="workload-view" className="w-[20vw]">
        <Workload />
      </div>
    </div>
  );
};

export default TimelineView;
