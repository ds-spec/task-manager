import React from "react";
import AddTask from "./AddTask";
import Subtasks from "./Subtasks";
import FileInput from "./FileInput";

const Left = () => {
  const handleSave = () => {};

  return (
    <>
      <div className="px-14 py-6 flex flex-col gap-6">
        <AddTask />
        <Subtasks />
        <FileInput />
      </div>
    </>
  );
};

export default Left;
