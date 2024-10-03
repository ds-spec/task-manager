import React, { useState } from "react";
import "./Dashboard.css";
import assets from "../../assets/assets";
import Tasks from "../Tasks-Details/Tasks";

const Dashboard = () => {
  const [activeTask, setActiveTask] = useState(0);

  const handleTaskClick = (index) => {
    setActiveTask(index);
  };

  return (
    <div id="main">
      <div id="nav-box">
        <h1>Life Tracker</h1>
        <div id="task-actions">
          <div
            className={`tasks ${activeTask === 0 ? "active" : ""}`}
            onClick={() => handleTaskClick(0)}
          >
            <img src={assets.tasks} />

            <h5>Simple Tasks</h5>
          </div>

          <div
            className={`tasks ${activeTask === 1 ? "active" : ""}`}
            onClick={() => handleTaskClick(1)}
          >
            <img src={assets.calendar} />

            <h5>Smart Calendar</h5>
          </div>

          <div
            className={`tasks ${activeTask === 2 ? "active" : ""}`}
            onClick={() => handleTaskClick(2)}
          >
            <img src={assets.schedule} />

            <h5>Schedule</h5>
          </div>

          <div
            className={`tasks ${activeTask === 3 ? "active" : ""}`}
            onClick={() => handleTaskClick(3)}
          >
            <img src={assets.timer} />

            <h5>Pomodoro</h5>
          </div>
          <div
            className={`tasks ${activeTask === 4 ? "active" : ""}`}
            onClick={() => handleTaskClick(4)}
          >
            <img src={assets.settings} />

            <h5>Settings</h5>
          </div>
        </div>
      </div>
      <Tasks />
    </div>
  );
};

export default Dashboard;
