import React from "react";
import TaskInput from "./TaskInput";
import TaskStats from "./TaskStats";
import { Timeline } from "vis-timeline";
import Mainheader from "../Main/Mainheader.jsx";
import { VscLayoutStatusbar } from "react-icons/vsc";
import { CgWorkAlt } from "react-icons/cg";
import { RiTimeLine } from "react-icons/ri";
import { MdFormatListBulleted } from "react-icons/md";
import RenderedView from "./RenderedView.jsx";

const TimerUI = ({ setActiveButton }) => {
  return (
    <>
      <div className="p-[1.2vw_1vw]">
        <Mainheader headerTitle={"Time Tracking"} />
      </div>
      <RenderedView />
    </>
  );
};

export default TimerUI;
