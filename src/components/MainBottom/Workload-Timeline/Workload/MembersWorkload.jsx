import React from "react";
import { useSelector } from "react-redux";
import assets from "../../../../assets/assets";
import WorkloadHeader from "./WorkloadHeader";
const MembersWorkload = () => {
  //   const membersWorkload = useSelector((state) => state.taskDetails.tasks);
  const membersWorkload = [
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
  return (
    <div className="mt-0">
      <div>
        <WorkloadHeader />
      </div>
      {membersWorkload?.map((members, index) => (
        <>
          <div key={index} className="px-6 py-2">
            <div id="profile-name" className="flex items-center gap-2">
              <img
                className="w-10 aspect-square rounded-full border-2 border-gray-400 p-0.5"
                src={members.profilePicture}
                alt="img"
              />
              <div id="name" className="flex flex-col">
                <h1 className="text-xl font-bold text-[#6b6868]">
                  {members.memberName}
                </h1>
                <h5 className="text-sm text-[#afadad] font-bold -mt-1">
                  {members.memberRole}
                </h5>
              </div>
            </div>
            <div
              id="progress-bar"
              className="bg-[#E0DBE2] w-[95%] h-4 mt-3 rounded-full relative"
            >
              <div
                id="progress"
                className="bg-[#3F259C] w-[60%] h-full rounded-full"
              ></div>
              <h3 className="absolute ml-[60%] font-bold text-sm text-[#2c2b2b]">
                1h 10m
              </h3>
            </div>
          </div>
          <div
            className="w-[80%] mt-4 ml-8 h-[0.2vh] bg-[#dbd3d3]"
            id="progress-line"
          ></div>
        </>
      ))}
    </div>
  );
};

export default MembersWorkload;
