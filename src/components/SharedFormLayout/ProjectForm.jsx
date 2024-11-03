import React, { useEffect, useState } from "react";
import "./ProjectForm.css";
import { useForm } from "react-hook-form";
import MembersList from "../Members-List/MembersList";

const ProjectForm = ({ setAddTask, setActiveButton, inputProject }) => {
  const [disabled, setDisabled] = useState(false);
  console.log(disabled, "disabledstatee");
  const [list, setList] = useState(false);
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      projectName: "",
    },
  });
  const projectName = watch("projectName");
  console.log(projectName, "projectNamedd");

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const isProjectName = projectName?.trim();
    if (isProjectName === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [projectName]);

  console.log(projectName, "flkfnef");
  const createProject = (data) => {
    // handleCreateProject(data);
    setAddTask(false);
  };
  return (
    <div id="taskFunctionality">
      <div id="form-task">
        {/* {list ? <h1>{projectName}</h1> : <h1>New project</h1>} */}
        {list ? <h1>{projectName}</h1> : <h1>{inputProject}</h1>}
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
        {list && (
          <MembersList
            projectName={projectName}
            setActiveButton={setActiveButton}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectForm;
