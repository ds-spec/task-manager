import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { addTaskCard } from "../../features/taskdetails/taskDetails";

const Labels = ({ selectedMember, projectName, setActiveButton }) => {
  const dispatch = useDispatch();
  const handleCreateProject = async () => {
    console.log("task created", projectName, selectedMember);

    try {
      await addDoc(collection(db, "tasks"), {
        projectName: projectName,
        membersProfile: selectedMember,
      });
      const data = {
        projectName: projectName,
        membersProfile: selectedMember,
      };
      dispatch(addTaskCard(data));
      setActiveButton(false);
    } catch (error) {
      console.log("Error creating task: ", error.message);
    }
  };

  const labelCard = [
    {
      labelName: "Planned",
      backgroundColor: "#B7B6DF",
    },
    {
      labelName: "In Progress",
      backgroundColor: "#B8E2E8",
    },
    {
      labelName: "Stopped",
      backgroundColor: "#EAD7C2",
    },
    {
      labelName: "Discussed",
      backgroundColor: "#E1D498",
    },
    {
      labelName: "Approved",
      backgroundColor: "#EEC4D0",
    },
  ];
  return (
    <>
      <div className="absolute flex top-[20%] right-50">
        {selectedMember?.map((task) => (
          <img
            className="w-9 rounded-full aspect-square border-2 p-0.5 border-[#797ACD]"
            src={task}
          />
        ))}
      </div>
      <div className="flex flex-col flex-wrap gap-x-12 gap-y-8 h-72">
        {labelCard?.map((label) => (
          <div
            className={`bg-[${label.backgroundColor}] w-72 h-[4.8vw] rounded-2xl text-left px-4 py-4 text-[#282748]
            text-xl font-normal flex items-center gap-2`}
          >
            <input className="w-4 aspect-square" type="checkbox" />
            <h4>{label.labelName}</h4>{" "}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center -mt-12">
        <h3 className="text-xl text-[#a2a3ad]">
          Selected task statuses will be available for work in this project
        </h3>
        <button
          className="px-[2.6vw] py-[0.7vw] text-[1.2vw] mt-4 cursor-pointer border-none rounded-[9px] text-white bg-[#121212]"
          type="submit"
          onClick={() => handleCreateProject()}
        >
          Finish Creating
        </button>
      </div>
    </>
  );
};

export default Labels;
