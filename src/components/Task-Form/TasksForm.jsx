import React, { useEffect, useState } from "react";
import "./TaskForm.css";
import { IoFlagOutline } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const TasksForm = ({ setAddTask }) => {
  const [priorityShow, setPriorityShow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const preventReload = (e) => {
    e.preventDefault();
    setPriorityShow(!priorityShow);
  };
  const taskName = watch("task-name");
  useEffect(() => {
    if (taskName === "") {
      setDisabled(true);
    }
  }, [taskName]);
  // console.log(taksName, "flkfnef");
  const createTask = (data) => {
    console.log(data);
    console.log(formState);
    setAddTask(false);
  };
  return (
    <div id="taskFunctionality">
      <form onSubmit={handleSubmit(createTask)}>
        <input
          type="text"
          placeholder="Task name"
          {...register("task-name")}
          id="taskHead"
        />
        <input
          type="text"
          placeholder="Description"
          {...register("task-description")}
          id="description"
        />
        <div id="color-palette">
          <div id="color-orange"></div>
          <div id="color-red"></div>
          <div id="color-purple"></div>
          <div id="color-blue"></div>
          <div id="color-green"></div>
        </div>
        <div id="priority-div">
          <button onClick={(e) => preventReload(e)} id="priority-btn">
            <IoFlagOutline />
            Priority
          </button>
          {priorityShow && (
            <div id="downbar">
              <div id="very-high">
                <FaFlag />
                Very High
              </div>
              <div id="high">
                <FaFlag />
                High
              </div>
              <div id="low">
                <FaFlag />
                Low
              </div>
            </div>
          )}
        </div>
        <hr />
        <button type="submit" id="create-task">
          Create task
        </button>
      </form>
    </div>
  );
};

export default TasksForm;
