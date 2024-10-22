import React from "react";
import { IoIosClose } from "react-icons/io";
import MembersWorkload from "./MembersWorkload";

const Workload = () => {
  
  return (
    <>
      <div
        id="workload-up"
        className="bg-[#AED9D5] px-4 py-5 rounded-t-xl flex items-center gap-3"
      >
        <IoIosClose className="bg-[#EBECEF] rounded-full w-10 h-10 p-2" />
        <h1 className="text-4xl">Workload</h1>
      </div>
      <div id="workload-bottom" className="bg-[#ECE9EC] w-full h-72 overflow-auto">
        <MembersWorkload />
      </div>
    </>
  );
};

export default Workload;
