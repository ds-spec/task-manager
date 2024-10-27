import React from "react";

import assets from "../../../../assets/assets";
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

const AssigneesCard = () => {
  return membersWorkload?.map((members, index) => (
    <>
      <div key={index} className="px-6 py-2">
        <div id="profile-name" className="flex items-center gap-2">
          <img
            className="w-10 h-11 rounded-full border-2 border-gray-400 p-[0.05vw]"
            src={members.profilePicture}
            alt="img"
          />
          <div id="name" className="flex flex-col">
            <h1 className="text-xl font-bold text-[#6b6868]">
              {members.memberName}
            </h1>
            <h5 className="text-sm text-[#afadad] font-bold -mt-1">01h 32m</h5>
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
        </div>
      </div>
      <div
        className="w-[94%] mt-4 ml-8 h-[0.2vh] bg-[#dbd3d3]"
        id="progress-line"
      ></div>
    </>
  ));
};

export default AssigneesCard;
