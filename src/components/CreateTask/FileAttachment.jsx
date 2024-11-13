import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const FileAttachment = ({ selectFile, onDownload }) => {
  return (
    <div className="border-2 border-[#EAEAEB] rounded-lg px-3 py-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <FaFilePdf className="text-[#EAEAEB] text-3xl" />
          <div>
            <h4 className="font-bold text-[#62666B]">{selectFile.name}</h4>
            <h4 className="text-[#B6B6C0] text-sm">{selectFile.size}</h4>
          </div>
        </div>
        <FiDownload
          onClick={onDownload}
          className="text-[#B6B6C0] text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FileAttachment;
