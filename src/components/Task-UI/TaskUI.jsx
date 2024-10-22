import React, { useState } from "react";
import "./TaskUI.css";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import TasksForm from "../Project-Form/ProjectForm";

const TaskUI = ({ setActiveButton }) => {
  const [cardActive, setCardActive] = useState(false);
  return (
    <div id="task-ui">
      <IoCloseOutline
        onClick={() => setActiveButton(false)}
        className=" bg-[#B7B6DF] text-black absolute right-5 top-8 w-12 h-12 rounded-full px-3 py-3 cursor-pointer"
      />
      <div id="create-div">
        <h1>What do you want to create?</h1>
        <div id="add-new">
          <div className="new-task-card">
            <h4>New task</h4>
            <BsFillArrowUpRightCircleFill />
          </div>
          <div className="new-project-card">
            <h4>New project</h4>
            <BsFillArrowUpRightCircleFill onClick={() => setCardActive(true)} />
          </div>
          <div className="new-status-card">
            <h4>New status</h4>
            <BsFillArrowUpRightCircleFill onClick={() => setCardActive(true)} />
          </div>
          <div className="new-member-card">
            <h4>New member</h4>
            <BsFillArrowUpRightCircleFill onClick={() => setCardActive(true)} />
          </div>
        </div>
        <h3 className="text-xl text-[#a2a3ad] mt-2">
          Choose one of the options to continue
        </h3>
      </div>
      {cardActive && <TasksForm setActiveButton={setActiveButton} />}
    </div>
  );
};

export default TaskUI;
