import React from "react";
import { FiEdit3 } from "react-icons/fi";

const Subtasks = () => {
  const subtasksArr = [
    {
      id: 1,
      task: "Rough sketch of logo",
    },
    {
      id: 2,
      task: "Create black and white version of logo",
    },
    {
      id: 3,
      task: "Make a minimal presentation",
    },
  ];

  return (
    <div className="mt-6">
      <div>
        <div className="flex items-center gap-1">
          <h2 className="text-black text-lg font-extrabold mb-3">Subtasks</h2>
          <h5 className="text-[#b2b2b2] text-[0.675rem] font-bold mb-2">
            0/{subtasksArr.length}
          </h5>
        </div>
        <hr />
        <div className="mt-2">
          <ul>
            {subtasksArr.map((subtask) => (
              <div className="cursor-pointer hover:bg-[#F4F6F8] px-2 py-0.5 rounded-lg flex items-center justify-between">
                <li
                  id={subtask.id}
                  className="text-black px-0 py-1 flex items-center gap-1"
                >
                  <input type="radio" className="cursor-pointer" />
                  {subtask.task}
                </li>
                <FiEdit3 className="text-[#BFBFC8]" />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subtasks;
