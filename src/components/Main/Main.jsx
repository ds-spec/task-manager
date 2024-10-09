import React from "react";
import "./Main.css";
import { IoMdArrowBack } from "react-icons/io";
import { RiUserAddLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import assets from "../../assets/assets";
import Tasks from "../Tasks-Details/Tasks";
import TaskCard from "../Task-Card/TaskCard";

const MainTop = () => {
  return (
    <div id="main-head">
      <div id="main-top">
        <div id="user-actions">
          <IoMdArrowBack />
          <div id="add-menu">
            <h4>
              <RiUserAddLine /> Add user
            </h4>
            <BsThreeDotsVertical />
          </div>
        </div>
        <div id="workboard-bar">
          <h1>Product workboard</h1>
          <div id="search-bar">
            <img src={assets.search} alt="" />{" "}
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div id="main-line"></div>
      </div>
      <div id="main-center">
        <TaskCard />
      </div>
      <div id="main-bottom">
        <p>Main Bottom</p>
      </div>
    </div>
  );
};

export default MainTop;
