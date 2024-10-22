import React from "react";
import { IoIosClose } from "react-icons/io";
import Timeline, {
  TimelineTheme,
  TimelineProps,
  ITimelineEvent,
} from "react-timeline";
import Workload from "../Workload/Workload";

const TimelineView = () => {
  const theme = {
    ...TimelineTheme.default,
    card: {
      ...TimelineTheme.default.card,
      colors: {
        text: "#5F646A",
        background: "#FFFFFF",
        active: {
          border: "#3498CC",
          background: "#FFFFFF",
          text: "#5F646A",
        },
      },
    },
  };
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
        <div id="timeline-bottom" className="bg-[#ECE9EC] w-full h-72"></div>
      </div>
      <div id="workload-view" className="w-[20vw]">
        <Workload />
      </div>
    </div>
  );
};

export default TimelineView;
