import React, { useState } from "react";
import "./TaskCard.css";
import assets from "../../assets/assets";

const TaskCard = () => {
  const tasks = [
    {
      taskName: "Make Prototypes",
      taskDescription: "Create a responsive CSS layout for a website",
      backgroundColor: "#C3B0FF",
      taskCompleted: "70%",
    },
    {
      taskName: "Create Assets",
      taskDescription: "Create a responsive asset for a website",
      backgroundColor: "#95EAFF",
      taskCompleted: "40%",
    },
    {
      taskName: "Create a linkedin post",
      taskDescription: "Create a react doc",
      backgroundColor: "aqua",
      taskCompleted: "24%",
    },
    {
      taskName: "Create a twitter account",
      taskDescription: "Learn in public",
      backgroundColor: "#95EAFF",
      taskCompleted: "38%",
    },
  ];

  return (
    <div id="task-list">
      {tasks?.map((task, index) => (
        <div
          id="task-card"
          key={index}
          style={{ backgroundColor: task.backgroundColor }}
        >
          <h3 id="taskName">{task.taskName}</h3>
          <p id="taskDesc">{task.taskDescription}</p>
          <img src={assets.menu} alt="" />
          <div id="progress">
            <div id="progress-bar">
              <div id="progress-track" style={{ width: task.taskCompleted }}>
                <h5>Progress</h5>
                <h5>{task.taskCompleted}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
