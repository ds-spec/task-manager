import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { ImCheckboxChecked } from "react-icons/im";

import { FaSquareFull } from "react-icons/fa6";

const TaskListContainer = () => {
  const assignedTasks = [
    {
      title: "Copy for print advertising",
      status: "Completed",
    },
    {
      title: "Draft content for the new Landing page",
      status: "Completed",
    },
    {
      title: "Storyboards",
      status: "Completed",
    },
    {
      title: "Write content for the new Landing page",
      status: "Completed",
    },
    {
      title: "Concept meeting",
      status: "pending",
    },
    {
      title: "Product Brief",
      status: "pending",
    },
    {
      title: "Unfurl links",
      status: "pending",
    },
  ];

  return (
    <div className="flex flex-col px-4 relative">
      <div className="flex justify-between w-full py-3 sticky top-0 z-10">
        <h3 className="text-[#A49FA2] font-bold">Unscheduled</h3>
        <h3 className="text-[#A49FA2] font-bold">27 tasks</h3>
      </div>
      <div className="overflow-y-auto h-72">
        <ul>
          {assignedTasks?.map((task) => (
            <li className="text-[#A49FA2] font-normal text-lg flex gap-3 px-2 py-2">
              {task.status === "Completed" ? (
                <ImCheckboxChecked className="text-green-400 text-[0.8vw] ml-1 mt-2" />
              ) : (
                <FaSquareFull className=" text-yellow-300 w-4 text-[0.7vw] mt-2" />
              )}
              <span>{task.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskListContainer;
