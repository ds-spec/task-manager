import React, { useContext, useState } from "react";
import { useAuth } from "../../AuthProvider";
import "./Tasks.css";
import assets from "../../assets/assets";
import TaskCard from "../Task-Card/TaskCard";

const Tasks = () => {
  const [schedule, setSchedule] = useState(0);
  const selectedSchedule = (index) => {
    setSchedule(index);
  };
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div id="tasks">
      <div id="tasksDisplay">
        <h4>Hello, John !</h4>
        <div id="number-tasks">
          <h1>You've got</h1>
          <h1>
            <span>9 tasks</span> today
          </h1>
        </div>
      </div>
      <div id="search-bar">
        <img src={assets.search} alt="" />{" "}
        <input type="text" placeholder="Search something..." />
      </div>
      <div id="my-tasks">
        <h1>My Tasks</h1>
        <div id="tasks-schedule">
          <h4
            className={`newSchedule${schedule === 0 ? "schedule" : ""}`}
            onClick={() => selectedSchedule(0)}
          >
            Recent
          </h4>
          <h4
            className={`newSchedule${schedule === 1 ? "schedule" : ""}`}
            onClick={() => selectedSchedule(1)}
          >
            Today
          </h4>
          <h4
            className={`newSchedule${schedule === 2 ? "schedule" : ""}`}
            onClick={() => selectedSchedule(2)}
          >
            Upcoming
          </h4>
        </div>
      </div>
      <TaskCard />
    </div>
  );
};

export default Tasks;
