import React, { useEffect, useState } from "react";
import "./TaskForm.css";
import { IoFlagOutline } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../AuthProvider";
import { db } from "../../firebase";

const TasksForm = ({ setAddTask }) => {
  const { currentUser } = useAuth();
  const [backgroundColor, setBackgroundColor] = useState();
  console.log(currentUser);
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

  const handleCreateTask = async (data) => {
    try {
      await addDoc(collection(db, "tasks"), {
        taskName: data?.taskname,
        taskDescription: data?.taskdescription,
        userId: currentUser?.uid,
        backgroundColor: backgroundColor,
        taskCompleted: "20%",
      });
    } catch (error) {
      console.log("Error creating task: ", error.message);
    }
  };

  useEffect(() => {
    if (taskName === "") {
      setDisabled(true);
    }
  }, [taskName]);
  // console.log(taksName, "flkfnef");
  const createTask = (data) => {
    console.log(data);
    handleCreateTask(data);
    // console.log(formState);
    setAddTask(false);
  };
  return (
    <div id="taskFunctionality">
      <form onSubmit={handleSubmit(createTask)}>
        <input
          type="text"
          placeholder="Task name"
          {...register("taskname")}
          id="taskHead"
        />
        <input
          type="text"
          placeholder="Description"
          {...register("taskdescription")}
          id="description"
        />
        <div id="color-palette">
          <div
            tabindex="0"
            id="color-orange"
            onClick={() => setBackgroundColor("#f5390f")}
          ></div>
          <div
            tabindex="0"
            id="color-red"
            onClick={() => setBackgroundColor("red")}
          ></div>
          <div
            tabindex="0"
            id="color-purple"
            onClick={() => setBackgroundColor("rgb(206, 19, 206)")}
          ></div>
          <div
            tabindex="0"
            id="color-blue"
            onClick={() => setBackgroundColor("#a4b4ff")}
          ></div>
          <div
            tabindex="0"
            id="color-green"
            onClick={() => setBackgroundColor("green")}
          ></div>
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
