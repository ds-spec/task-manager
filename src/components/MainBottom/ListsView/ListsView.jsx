import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import TableView from "./TableView/TableView";

const ListsView = () => {
  return (
    <div id="tasks-workload" className="mt-4 px-2 py-2">
      <div id="tasks-view" className="w-full">
        <div
          id="tasks-up"
          className="bg-[#D9DDFF] px-4 py-3 rounded-t-xl flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <BsArrowUpRightCircleFill className="text-white rounded-full w-14 h-14 p-2" />
            <h1 className="text-4xl font-light">Assignee's Tasks</h1>
          </div>
          <HiDotsHorizontal className="text-3xl" />
        </div>
        <div
          id="tasks-bottom"
          className="bg-[#ECE9EC] w-full h-72 rounded-b-xl flex overflow-hidden"
        >
          <TableView />
        </div>
      </div>
    </div>
  );
};

export default ListsView;
