import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import TaskListContainer from "./TaskListContainer";

const TasksListView = () => {
  return (
    <>
      <div
        id="workload-up"
        className="bg-[#E5AEC4] px-4 py-3 rounded-t-xl flex items-center gap-3"
      >
        {/* <IoIosClose className="bg-[#EBECEF] rounded-full w-10 h-10 p-2" /> */}
        <BsArrowUpRightCircleFill className="text-white rounded-full w-14 h-14 p-2" />
        <h1 className="text-4xl font-light">Tasks</h1>
      </div>
      <div
        id="workload-bottom"
        className="bg-[#ECE9EC] w-full h-72 rounded-b-xl overflow-auto"
      >
      <TaskListContainer />
      </div>
    </>
  );
};

export default TasksListView;
