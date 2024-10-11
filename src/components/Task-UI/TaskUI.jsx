import React, { useState } from "react";
import "./TaskUI.css";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import TasksForm from "../Project-Form/ProjectForm";

const TaskUI = () => {
  const [cardActive, setCardActive] = useState(false);
  return (
    <div id="task-ui">
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
        </div>
      </div>
      {cardActive && <TasksForm />}
    </div>
  );
};

export default TaskUI;
