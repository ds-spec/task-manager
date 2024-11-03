import React, { useState } from "react";
import { VscLayoutStatusbar } from "react-icons/vsc";
import { CgWorkAlt } from "react-icons/cg";
import { RiTimeLine } from "react-icons/ri";
import { MdFormatListBulleted } from "react-icons/md";
import TimelineView from "./Workload-Timeline/Workload-Timeline";
import StatusBottomView from "./StatusBottomView/StatusBottomView";
import TasksView from "./Workload-Tasks/Workload-Tasks";
import ListsView from "./ListsView/ListsView";

const MainBottom = () => {
  const StatusView = () => <StatusBottomView />;
  const WorkView = () => <TasksView />;
  const MembersTimeline = () => <TimelineView />;
  const ListView = () => <ListsView />;

  const [activeState, setActiveState] = useState("Timeline");

  const renderedView = () => {
    switch (activeState) {
      case "Status":
        return <StatusView />;
      case "Work":
        return <WorkView />;
      case "Timeline":
        return <MembersTimeline />;
      case "List":
        return <ListView />;
      default:
        return <MembersTimeline />;
    }
  };

  return (
    <div id="main-bottom">
      <div id="main-nav" className="flex gap-5">
        <h3
          className={`flex items-center gap-2 text-[1.2vw] text-[#939496] cursor-pointer hover:bg-[#FFD9E6] ${
            activeState === "Status"
              ? "bg-[#FFD9E6] font-bold text-[#282828]"
              : ""
          } px-6 py-2 rounded-full`}
          onClick={() => setActiveState("Status")}
        >
          <VscLayoutStatusbar />
          Status
        </h3>

        <h3
          className={`flex items-center gap-2 text-[1.2vw] text-[#939496] cursor-pointer hover:bg-[#FFD9E6] ${
            activeState === "Work" ? "bg-[#FFD9E6] font-bold text-[#282828]" : ""
          } px-6 py-2 rounded-full`}
          onClick={() => setActiveState("Work")}
        >
          <CgWorkAlt />
          Workload
        </h3>
        <h3
          className={`flex items-center gap-2 text-[1.2vw] text-[#939496] cursor-pointer hover:bg-[#FFD9E6] ${
            activeState === "Timeline" ? "bg-[#FFD9E6] font-bold text-[#282828]" : ""
          } px-6 py-2 rounded-full`}
          onClick={() => setActiveState("Timeline")}
        >
          <RiTimeLine />
          Timeline
        </h3>
        <h3
          className={`flex items-center gap-2 text-[1.2vw] text-[#939496] cursor-pointer hover:bg-[#FFD9E6] ${
            activeState === "List" ? "bg-[#FFD9E6] font-bold text-[#282828]" : ""
          } px-6 py-2 rounded-full`}
          onClick={() => setActiveState("List")}
        >
          <MdFormatListBulleted />
          List
        </h3>
      </div>
      <div id="rendered-view">{renderedView()}</div>
    </div>
  );
};

export default MainBottom;
