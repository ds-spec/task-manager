import React, { useEffect, useState } from "react";
import assets from "../../assets/assets";
import Labels from "../Labels/Labels";
import MembersTableUI from "./MembersTableUI";

const MembersList = ({ setActiveButton, projectName }) => {
  const [selectedMember, setSelectedMember] = useState([]);
  const [listLabels, setListLabels] = useState(false);
  const [isChecked, setIsChecked] = useState();
  console.log(isChecked, "isChecked");
  const handleCheckboxChange = (event) => {
    console.log(event.target.checked, "eventChecked");
    setIsChecked(event.target.checked);
  };

  console.log(projectName, "projecttttt");
  console.log(selectedMember, "selected");
  const handleMemberChange = (member) => {
    if (selectedMember.includes(member.profilePicture)) {
      setSelectedMember((prevProfiles) =>
        prevProfiles.filter((profile) => profile !== member.profilePicture)
      );
    } else {
      setSelectedMember((prevProfiles) => [...prevProfiles, member]);
      member.isChecked = true;
      console.log(member, "memberChecked");
    }
  };

  const members = [
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
      memberName: "Rosalyn Davis",
      memberEmail: "rosalyn.davis@gmail.com",
      profilePicture: assets.user3,
      memberRole: "UX Product manager",
      backgroundColor: "#E4CBE1",
      memberStatus: "On a break",
      isChecked: false,
    },
    {
      memberName: "Jonah Pops",
      memberEmail: "jonah.pops@gmail.com",
      profilePicture: assets.user4,
      memberRole: "Back end developer",
      backgroundColor: "#C0E7E8",
      memberStatus: "Office Work",
      isChecked: false,
    },
    {
      memberName: "Ajay Banga",
      memberEmail: "ajay.banga@gmail.com",
      profilePicture: assets.user5,
      memberRole: "Front end developer",
      backgroundColor: "#C0E7E8",
      memberStatus: "Office Work",
      isChecked: false,
    },
  ];

  return (
    <>
      {listLabels ? (
        <Labels
          selectedMember={selectedMember}
          projectName={projectName}
          setActiveButton={setActiveButton}
        />
      ) : (
        <MembersTableUI
          members={members}
          selectedMember={selectedMember}
          setListLabels={setListLabels}
          handleCheckboxChange={handleCheckboxChange}
          handleMemberChange={handleMemberChange}
          setIsChecked={setIsChecked}
          isChecked={isChecked}
        />
      )}
    </>
  );
};

export default MembersList;
