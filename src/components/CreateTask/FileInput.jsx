import React, { useEffect, useState } from "react";
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

  // useEffect(() => {
  //   if (files.length > 0) {
  //     // For each file, find its FilePond item and add download button
  //     files.forEach((file, index) => {
  //       const itemPanel = document.querySelectorAll(".filepond--file")[index];
  //       if (itemPanel) {
  //         const downloadBtn = document.createElement("button");
  //         downloadBtn.className =
  //           "absolute right-3 hover:bg-gray-500 rounded-full transition-colors";
  //         downloadBtn.innerHTML = "<LuDownload />"; // Your download icon SVG
  //         downloadBtn.style.width = "30px";
  //         downloadBtn.style.height = "30px";
  //         downloadBtn.onclick = () => downloadFile(file);
  //         itemPanel.appendChild(downloadBtn);
  //       }
  //     });
  //   }
  // }, [files]);

  useEffect(() => {
    if (files.length > 0) {
      files.forEach((file, index) => {
        const itemPanel = document.querySelectorAll(".filepond--file")[index];
        if (itemPanel) {
          const downloadBtn = document.createElement("button");
          downloadBtn.className =
            "absolute right-3 hover:bg-gray-500 rounded-full transition-colors";
          downloadBtn.style.width = "30px";
          downloadBtn.style.height = "30px";
          downloadBtn.style.display = "flex";
          downloadBtn.style.alignItems = "center";
          downloadBtn.style.justifyContent = "center";

          // Create icon element
          const icon = document.createElement("i");
          icon.className = "w-4 h-4 text-white";
          icon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>`;

          downloadBtn.appendChild(icon);
          downloadBtn.onclick = () => downloadFile(file);
          itemPanel.appendChild(downloadBtn);
        }
      });
    }
  }, [files]);
  return (
    <>
      <div>
        <div className="flex items-center gap-1">
          <h2 className="text-black text-lg font-extrabold mb-3">
            Attachments
          </h2>
          <h5 className="text-[#b2b2b2] text-[0.675rem] font-bold mb-2"></h5>
        </div>
        <hr />
      </div>
      <div className="max-w-md">
        <FilePond
          files={files}
          name="files"
          onupdatefiles={handleFileSelection}
          allowMultiple={true}
          maxFiles={2}
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
      </div>
    </>
  );
};

export default FileInput;
