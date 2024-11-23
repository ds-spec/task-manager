import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";

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
    <div className="bg-transparent border-2 rounded-lg border-[#eaeaeb] w-[29vw] py-2 h-52 flex flex-col relative">
      <textarea
        value={title}
        disabled={saved ? true : false}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className={`text-xl break-words px-2 h-[30px] text-black font-semibold caret-black outline-none resize-none ${
          saved ? "bg-transparent" : "bg-white"
        }`}
        placeholder="Title"
        required="true"
      ></textarea>
      {titleError && <p className="text-red-600">Please fill the title</p>}

      <ReactQuill
        value={description}
        onChange={setDescription}
        className={`text-md w-full h-[65.6%] text-[#4d4d4d] break-words rounded-b-xl caret-black outline-none resize-none ${
          saved ? "bg-transparent" : "bg-white"
        }`}
        placeholder="Description"
        modules={{
          toolbar: [
            [{ font: [] }],
            [{ size: ["small", "medium", "large", "huge"] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
      />

      {descriptionError && (
        <p className="text-red-600 absolute top-28 left-4 description">
          Please fill the description
        </p>
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
            className="bg-[#3150FD] disabled:bg-[#a6a6a6] text-white rounded-md px-6 py-1 text-sm font-bold"
            disabled={title.trim() === "" ? true : false}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTask;
