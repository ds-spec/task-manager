import React, { useState } from "react";
import { VscLayoutStatusbar } from "react-icons/vsc";
import { CgWorkAlt } from "react-icons/cg";
import { RiTimeLine } from "react-icons/ri";
import { MdFormatListBulleted } from "react-icons/md";
import TimelineView from "./Workload-Timeline/Workload-Timeline";

const MainBottom = () => {
  const StatusView = () => <div>Status content</div>;
  const WorkView = () => <div>Work content</div>;
  const MembersTimeline = () => <TimelineView />;
  const ListView = () => <div>List content</div>;

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
      <div id="main-nav" className="flex gap-10">
        <h3
          className={`flex items-center gap-2 text-[1.2vw] text-[#939496] cursor-pointer font-medium hover:bg-[#FFD9E6] px-6 py-2 rounded-full`}
          onClick={() => setActiveState("Status")}
        >
          <VscLayoutStatusbar />
          Status
        </h3>

        <h3
          className={`flex items-center gap-2 text-[1.2vw] text-[#939496] cursor-pointer font-medium hover:bg-[#FFD9E6] px-6 py-2 rounded-full`}
          onClick={() => setActiveState("Work")}
        >
          <CgWorkAlt />
          Workload
        </h3>
        <h3
          className={`flex items-center gap-2 text-[1.2vw] text-[#939496] cursor-pointer font-medium hover:bg-[#FFD9E6] px-6 py-2 rounded-full`}
          onClick={() => setActiveState("Timeline")}
        >
          <RiTimeLine />
          Timeline
        </h3>
        <h3
          className={`flex items-center gap-2 text-[1.2vw] text-[#939496] cursor-pointer font-medium hover:bg-[#FFD9E6] px-6 py-2 rounded-full`}
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
