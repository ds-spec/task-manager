import React from "react";
import Right from "./Right";
import Left from "./Left.jsx";

const NewTask = (setCreateTaskCard) => {
  return (
    <>
      <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#FFFFFF] w-[60%] h-[96%] rounded-lg overflow-hidden">
        <div className="modal-nav h-14"></div>
        <div className="w-full h-0.5 bg-[#F5F5F7] shadow-lg"></div>
        <div className="flex w-full h-full">
          <div className="w-[60%] h-full">
            <Left />
          </div>
          <div className="bg-[#F8F9FA] w-[40%] h-full">
            <Right />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTask;
