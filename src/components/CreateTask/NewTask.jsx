import React from "react";
import assets from "../../assets/assets";
import DueDate from "./DueDate";
import Labels from "./Labels";

const NewTask = (setCreateTaskCard) => {
  const newAsigneeCard = [
    assets.user1,
    assets.user2,
    assets.user3,
    assets.user4,
  ];
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#FFFFFF] w-[60%] h-[90%] rounded-lg overflow-hidden">
      <div className="modal-nav h-14"></div>
      <div className="w-full h-0.5 bg-[#F5F5F7] shadow-lg"></div>
      <div className="flex w-full h-full">
        <div className="w-[60%] h-full"></div>
        <div className="bg-[#F8F9FA] w-[40%] h-full">
          <div className="created flex flex-col px-6 py-8">
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
          <div className="assignee flex flex-col px-6 py-8">
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
          <div className="duedate flex flex-col px-6 py-8">
            <h2 className="text-[#C0C0C7] font-bold mb-3">Due Date</h2>
            <div className="flex items-center gap-1">
              <DueDate />
            </div>
          </div>
          <div className="w-full h-0.5 bg-[#F5F5F7] shadow-lg"></div>
          <div className="duedate flex flex-col px-6 py-8">
            <h2 className="text-[#C0C0C7] font-bold mb-3">Tags</h2>
            <div className="flex items-center gap-1">
              <Labels />
            </div>
          </div>
          <div className="w-full h-0.5 bg-[#F5F5F7] shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
