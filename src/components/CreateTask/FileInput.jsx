import React, { useState } from "react";
import FileAttachment from "./FileAttachment";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { LuDownload } from "react-icons/lu";
import "./Files.css";

// Register plugins for preview functionality
// registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const FileInput = () => {
  const [files, setFiles] = useState([]);
  const [selectFile, setSelectFile] = useState();
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleDownload = () => {
    if (selectFile) {
      const url = URL.createObjectURL(selectFile.file);
      const a = document.createElement("a");
      a.href = url;
      a.download = selectFile.name;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  };

  // const handleFileSelection = (event) => {
  //   console.log(event.target, "filessssss");
  //   const file = event.target.files[0];
  //   setSelectFile({
  //     name: file.name,
  //     size: formatFileSize(file.size),
  //     type: file.type,
  //   });
  // };
  const handleFileSelection = (fileItems) => {
    console.log(fileItems, "itemss");
    setFiles(fileItems.map((fileItem) => fileItem.file));
  };
  // const handleUpdateFiles = (fileItems) => {
  //   setFiles(fileItems);
  // };

  // Function to download file
  const downloadFile = (file) => {
    // Create a URL for the file
    const url = URL.createObjectURL(file);

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name; // Set the file name

    // Append link, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL
    URL.revokeObjectURL(url);
  };
  return (
    // <div>
    //   <div>
    //     <div className="flex items-center gap-1">
    //       <h2 className="text-black text-lg font-extrabold mb-3">
    //         Attachments
    //       </h2>
    //       <h5 className="text-[#b2b2b2] text-[0.675rem] font-bold mb-2"></h5>
    //     </div>
    //     <hr />
    //     <div className="relative text-black">
    //       {selectFile && (
    //         <FileAttachment
    //           selectFile={selectFile}
    //           onDownload={handleDownload}
    //         />
    //       )}
    //       <input
    //         type="file"
    //         accept="image/png, image/jpeg"
    //         className="relative top-1 w-full h-full inset-0 opacity-0 cursor-pointer"
    //         onChange={handleFileSelection}
    //       />
    //       <div className="flex items-center gap-2 mt-2">
    //         <AiOutlineCloudUpload className="text-3xl" />
    //         <span className="text-black text-sm">Add Attachment</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-md">
      <FilePond
        className="relative"
        files={files}
        name="files"
        onupdatefiles={handleFileSelection}
        allowMultiple={true}
        maxFiles={3}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      >
        {files.length > 0 && (
          <div className=" h-full pt-[46px]">
            {files.map((fileItem, index) => (
              <button
                key={index}
                onClick={() => downloadFile(fileItem)}
                className="p-2 hover:bg-gray-500 rounded-full transition-colors"
                title="Download file"
              >
                <LuDownload className="w-4 h-4 text-white" />
              </button>
            ))}
          </div>
        )}
      </FilePond>
    </div>
  );
};

export default FileInput;
