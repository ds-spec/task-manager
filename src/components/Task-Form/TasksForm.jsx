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
      <div id="form-task">
        <h1>New task</h1>
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
          <button type="submit" id="create-task">
            Create task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TasksForm;
