import React from "react";
import assets from "../../assets/assets";
import DueDate from "./DueDate";
import Labels from "./Labels";

const Right = () => {
  const newAsigneeCard = [
    assets.user1,
    assets.user2,
    assets.user3,
    assets.user4,
  ];
  return (
    <>
      <div className="created flex flex-col px-6 py-6">
        <h2 className="text-[#C0C0C7] font-bold mb-3">Created by</h2>
        <div className="flex items-center gap-3">
          <img
            className="w-7 aspect-square rounded-full"
            src={assets.user1}
            alt=""
          />
          <h2 className="text-[#343435] font-semibold">Michele Jordan</h2>
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#F5F5F7] shadow-lg"></div>
      <div className="assignee flex flex-col px-6 py-6">
        <h2 className="text-[#C0C0C7] font-bold mb-3">Assignee</h2>
        <div className="flex items-center gap-1">
          {newAsigneeCard?.map((assignee) => (
            <img
              className="w-7 aspect-square rounded-full"
              src={assignee}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#F5F5F7] shadow-lg"></div>
      <div className="duedate flex flex-col px-6 py-6">
        <h2 className="text-[#C0C0C7] font-bold mb-3">Due Date</h2>
        <div className="flex items-center gap-1">
          <DueDate />
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#F5F5F7] shadow-lg"></div>
      <div className="tags flex flex-col px-6 py-6">
        <h2 className="text-[#C0C0C7] font-bold mb-3">Tags</h2>
        <div className="flex items-center gap-1">
          <Labels />
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#F5F5F7] shadow-lg"></div>
      <div className="created-updated flex flex-col px-6 py-4">
        <div className="flex flex-col gap-1">
          <div>
            <h2 className="text-[#0c0c0c] font-bold text-sm">Created</h2>
            <h2 className="text-[#787777] font-bold text-sm">
              Feb 2,2023 4:30 PM
            </h2>
          </div>
          <div>
            <h2 className="text-[#0c0c0c] font-bold text-sm">Updated</h2>
            <h2 className="text-[#787777] font-bold text-sm">
              Feb 2,2023 5:20 PM
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
