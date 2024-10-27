import React from "react";

import AssigneesCard from "./AssigneesCard";

const Assignees = () => {
  return (
    <div>
      <div id="assignees-view" className="relative">
        <div
          id="assignees-header"
          className="flex justify-between px-4 py-1 sticky top-0 w-full bg-[#E7E2E1]"
        >
          <h2 className="text-[#AFADAD]">Total</h2>
          <h2 className="text-[#746E71] font-extrabold">51</h2>
        </div>
        <div className="w-[94%] ml-4 h-[0.2vh] bg-[#dbd3d3]"></div>
        <div
          id="assignees-body"
          className="overflow-y-auto h-[36vh] bg-[#E7E2E1]"
        >
          <AssigneesCard />
        </div>
      </div>
    </div>
  );
};

export default Assignees;
