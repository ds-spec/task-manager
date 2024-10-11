import React, { useEffect, useState } from "react";
import "./ProjectForm.css";
import { IoFlagOutline } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../AuthProvider";
import { db } from "../../firebase";
import MembersList from "../Members-List/MembersList";

const ProjectForm = ({ setAddTask }) => {
  const { currentUser } = useAuth();
  const [disabled, setDisabled] = useState(false);
  const [list, setList] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const projectName = watch("projectName");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCreateProject = async (data) => {
    try {
      await addDoc(collection(db, "tasks"), {
        projectName: data?.projectName,
        // taskDescription: data?.taskdescription,
        userId: currentUser?.uid,
        backgroundColor: backgroundColor,
        taskCompleted: "20%",
      });
    } catch (error) {
      console.log("Error creating task: ", error.message);
    }
  };

  useEffect(() => {
    if (projectName === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [projectName]);
  console.log(projectName, "flkfnef");
  const createProject = (data) => {
    handleCreateProject(data);
    setAddTask(false);
  };
  return (
    <div id="taskFunctionality">
      <div id="form-task">
        <h1>New project</h1>
        {!list && (
          <form onSubmit={handleSubmit(createProject)}>
            <input
              type="text"
              placeholder="Project name"
              {...register("projectName")}
              id="projectHead"
            />
            <input
              type="text"
              placeholder="Project template"
              {...register("projectTemplate")}
              id="projectTemplate"
            />
            <label className="flex items-center cursor-pointer w-12">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                />
                <div
                  className={`block w-14 h-8 rounded-full transition-colors ${
                    isChecked ? "bg-blue-600" : "bg-gray-400"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transform transition-transform ${
                    isChecked ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
              <span className="ml-3 text-gray-700">Private Project</span>
            </label>

            <button
              style={{ backgroundColor: disabled ? "#989EC7" : "#3C3C50" }}
              type="submit"
              id="create-task"
              onClick={() => setList(true)}
            >
              Next
            </button>
          </form>
        )}
        {list && <MembersList />}
      </div>
    </div>
  );
};

export default ProjectForm;
