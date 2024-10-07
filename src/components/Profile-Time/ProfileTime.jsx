import React, { useState } from "react";
import assets from "../../assets/assets";
import { IoMdAdd } from "react-icons/io";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import "./ProfileTime.css";
import TasksForm from "../Task-Form/TasksForm";
import { useAuth } from "../../AuthProvider";

const ProfileTime = () => {
  const { currentUser } = useAuth();
  const [addTask, setAddTask] = useState(false);
  return (
    <div id="profile-time">
      <div id="profile">
        <div id="profileDescription">
          <img src={assets.profile} alt="" />
          <div id="name-desc">
            <h4>
              {currentUser?.firstName} {currentUser?.lastName}
            </h4>
            <h5>UI/UX Designer</h5>
          </div>
        </div>
        <div id="notif">
          <img src={assets.notification} alt="" />
          <img src={assets.message} alt="" />
        </div>
      </div>
      <div id="project_timer">
        <div id="project">
          <h3>Project time tracker</h3>
          <h4>You can start tracking.</h4>
        </div>
        <img src={assets.playTimer} alt="" />
      </div>
      <div id="calendar">
        <div id="date">
          <h4>October 5, 2024</h4>
          <h2>Today</h2>
        </div>
        <button id="add-task" onClick={() => setAddTask(true)}>
          <IoMdAdd />
          Add Task
        </button>
      </div>
      {addTask && <TasksForm setAddTask={setAddTask} />}
    </div>
  );
};

export default ProfileTime;
