import React from "react";
import "./TaskCard.css";
import assets from "../../assets/assets";

const TaskCard = () => {
  // const progressBarStyle =

  const tasks = [
    {
      taskName: "Complete CSS",
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
  ];

  return (
    <div id="task-list">
      {tasks?.map((task) => (
        <div id="task-card" style={{ backgroundColor: task.backgroundColor }}>
          <h3 id="taskName">{task.taskName}</h3>
          <p id="taskDesc">{task.taskDescription}</p>
          <img src={assets.menu} alt="" />
          <div id="progress">
            <div id="progress-bar">
              <div id="progress-track"></div>
            </div>
            <p>75%</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
