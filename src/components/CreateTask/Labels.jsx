import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import TagsModal from "./TagsModal";

const Labels = () => {
  const [openModal, setOpenModal] = useState(false);
  const labels = [
    {
      labelName: "UI Design",
      color: "#FFB6C1",
    },
  ];
  return (
    <div>
      <div className="flex gap-4 ">
        {labels?.map((label) => (
          <div className="flex items-center gap-1 border-2 cursor-pointer border-[#e6e6e7] px-2 -py-1">
            <div
              className={`w-1.5 h-1.5 rounded-full bg-[${label.color}]`}
            ></div>
            <h5 className="text-[#bfbfc0] text-sm"> {label.labelName}</h5>
          </div>
        ))}
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-1 border-2 border-[#e6e6e7] px-2 -py-1"
        >
          <IoIosAdd className="text-[#bfbfc0]" />
          <h5 className="text-[#bfbfc0] text-sm">Add tag</h5>
        </button>
        {openModal && <TagsModal setOpenModal={setOpenModal} />}
      </div>
    </div>
  );
};

export default Labels;
