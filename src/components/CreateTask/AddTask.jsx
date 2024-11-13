import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [saved, setSaved] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleCancel = () => {
    setTitle("");
    setDescription("");
  };

  const handleSave = () => {
    console.log(title, description, "titleeDescription");
    if (title.trim() === "") {
      setSaved(false);
      setTitleError(true);
    } else if (description.trim() === "") {
      setSaved(false);
      setDescriptionError(true);
    } else {
      setSaved(true);
    }
  };
  return (
    <div className="bg-transparent border-2 rounded-lg border-[#eaeaeb] w-[29vw] h-36 flex flex-col px-2 py-1 relative">
      <textarea
        value={title}
        disabled={saved ? true : false}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className={`text-xl  break-words text-black font-semibold caret-black outline-none resize-none ${
          saved ? "bg-transparent" : "bg-white"
        }`}
        placeholder="Title"
        required="true"
      ></textarea>
      {titleError && <p className="bg-red-600">Please fill the title</p>}

      <textarea
        value={description}
        disabled={saved ? true : false}
        onChange={(e) => setDescription(e.target.value)}
        className={`text-md w-full h-full text-[#8b8b8b] text-sm break-words caret-black outline-none resize-none ${
          saved ? "bg-transparent" : "bg-white"
        }`}
        placeholder="Description"
        required="true"
      ></textarea>
      {descriptionError && (
        <p className="bg-red-600">Please fill the description</p>
      )}
      {saved ? (
        <AiFillEdit
          className="text-black absolute right-3 top-2 text-xl cursor-pointer"
          onClick={() => setSaved(false)}
        />
      ) : (
        <div className="absolute -right-1 -bottom-9 flex gap-3">
          <button
            onClick={handleCancel}
            className=" text-[#7A7989] hover:bg-[#dcdbe5] rounded-md px-4 py-1 text-sm border-2 border-[#eaeaeb] font-bold"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-[#3150FD] text-white rounded-md px-6 py-1 text-sm font-bold"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTask;
