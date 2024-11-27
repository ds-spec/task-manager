import React from "react";
import assets from "../../assets/assets";
import { IoMdArrowBack } from "react-icons/io";
import { RiUserAddLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Mainheader = ({ headerTitle }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        id="user-actions"
        className="p-[2vw_1vw] flex justify-between items-center"
      >
        <IoMdArrowBack
          className="text-[1.6vw] cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div id="add-menu" className="flex gap-[2vw] items-center">
          <h4>
            <RiUserAddLine className="text-[1.2vw]" /> Add user
          </h4>
          <BsThreeDotsVertical />
        </div>
      </div>
      <div
        id="workboard-bar"
        className="flex justify-between items-center px-1 mt-7"
      >
        <h1 className="text-[3vw] font-normal">{headerTitle}</h1>
        <div id="search-bar">
          <img src={assets.search} alt="" />{" "}
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div
        id="main-line"
        className="absolute top-[32%] left-[4.2%] w-full h-[1.5px] bg-[#e2e5ff]"
      ></div>
    </>
  );
};

export default Mainheader;
