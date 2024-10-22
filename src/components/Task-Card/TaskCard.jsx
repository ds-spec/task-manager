import React, { useState } from "react";
import "./TaskCard.css";
import { FiArrowUpRight } from "react-icons/fi";

import { useSelector } from "react-redux";

const TaskCard = () => {
  const [activeCard, setActiveCard] = useState(0);

  const projectCard = useSelector((state) => state.taskDetails.tasks);
  console.log(projectCard, "projectCardprojectCard");

  return (
    <div id="task-list">
      {projectCard?.map((project, index) => (
        <div
          className={`task-card ${activeCard === index ? "active" : ""}`}
          onClick={() => setActiveCard(index)}
          key={index}
        >
          <h3 id="taskName">{project?.projectName}</h3>
          <div id="shared-users">
            {project?.membersProfile.map((member) => (
              <img src={member.profilePicture} alt="" />
            ))}
          </div>
          <div className={`track-time ${activeCard === index ? "active" : ""}`}>
            <h4>
              Tracked <span>0m</span>
            </h4>
            <FiArrowUpRight />
          </div>
          <div
            className={`task-line ${activeCard === index ? "active" : ""}`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
