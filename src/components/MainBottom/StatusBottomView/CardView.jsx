import React from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import assets from "../../../assets/assets";

const teams = [
  {
    memberName: "Annie Haulman",
    memberEmail: "annie.haulman@gmail.com",
    profilePicture: assets.user1,
    memberRole: "Product Manager",
    backgroundColor: "#AAD8D4",
    memberStatus: "Office Work",
    isChecked: false,
  },
  {
    memberName: "Adam Wadson",
    memberEmail: "adam.wadson@gmail.com",
    profilePicture: assets.user2,
    memberRole: "UX designer",
    backgroundColor: "#E4DCB9",
    memberStatus: "Remote Work",
    isChecked: false,
  },
  {
    memberName: "Annie Haulman",
    memberEmail: "annie.haulman@gmail.com",
    profilePicture: assets.user1,
    memberRole: "Product Manager",
    backgroundColor: "#AAD8D4",
    memberStatus: "Office Work",
    isChecked: false,
  },
  {
    memberName: "Adam Wadson",
    memberEmail: "adam.wadson@gmail.com",
    profilePicture: assets.user2,
    memberRole: "UX designer",
    backgroundColor: "#E4DCB9",
    memberStatus: "Remote Work",
    isChecked: false,
  },
];

const CardView = () => {
  return (
    <div className="card-view px-3 border-2 border-[#F5F6FA] rounded-xl flex flex-col gap-3 justify-start items-start py-3">
      <img
        src="https://plus.unsplash.com/premium_photo-1661573322713-0935eae5f6a9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full max-w-full h-auto rounded-md"
      />
      <h2 className="text-2xl font-bold spacing tracking-wide">
        Search | Face detection on device
      </h2>
      <div id="tags" className="">
        <h1 className="bg-[#FFD9E6] text-[#222] px-3 py-0.5 rounded-full font-semibold">
          active
        </h1>
      </div>
      <div
        id="icons-members"
        className="flex justify-between w-full items-center"
      >
        <div
          id="icons"
          className="flex gap-2 text-[#a6a6a9] items-center text-xl"
        >
          <HiMiniBars3CenterLeft />
          <MdOutlineRemoveRedEye />
          <MdChatBubbleOutline />
        </div>
        <div id="members" className="flex">
          {teams?.map((team, index) => (
            <img
              key={index}
              className="w-6 rounded-full opacity-80 -ml-2 aspect-square"
              src={team.profilePicture}
              alt="member"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardView;
