import React from "react";
import assets from "../../../assets/assets";

const WorkloadHeader = () => {
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
    <div>
      <h2>Workload</h2>
      {teams?.map((team) =>
        team?.length > 4 ? (
          <img
            className="w-8 rounded-full inline-block"
            src={team.profilePicture}
            alt=""
          />
        ) : (
          <img
            className="w-8 rounded-full inline-block"
            src={team.profilePicture}
            alt=""
          />
        )
      )}
    </div>
  );
};

export default WorkloadHeader;
