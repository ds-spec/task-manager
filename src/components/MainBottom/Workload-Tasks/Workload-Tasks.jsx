import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import WorkTimeline from "./WorkTimeline/WorkTimeline";
import Assignees from "./AssigneesView/Assignees";
import TasksListView from "./TasksListView/TasksListView";

const TasksView = () => {
  return (
    <div id="tasks-workload" className="flex justify-between mt-4 px-2 py-2">
      <div id="tasks-view" className="w-[70vw]">
        <div
          id="tasks-up"
          className="bg-[#E5D794] px-4 py-3 rounded-t-xl flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <BsArrowUpRightCircleFill className="text-white rounded-full w-14 h-14 p-2" />
            <h1 className="text-4xl font-light">Assignees</h1>
          </div>
          <HiDotsHorizontal className="text-3xl" />
        </div>
        <div
          id="tasks-bottom"
          className="bg-[#ECE9EC] w-full h-72 rounded-b-xl flex overflow-hidden"
        >
          <div className="w-[15vw]">
            <Assignees />
          </div>
          <div className="w-[55vw]">
            <WorkTimeline />
          </div>
        </div>
      </div>
      <div id="tasks-view" className="w-[20vw]">
        <TasksListView />
      </div>
    </div>
  );
};

export default TasksView;
