import React from "react";
import assets from "../../../assets/assets";
import { IoSearchOutline } from "react-icons/io5";

const MembersProgressUI = () => {
  const members = [
    {
      memberName: "Annie Haulman",
      memberEmail: "annie.haulman@gmail.com",
      profilePicture: assets.user1,
      memberRole: "Product Manager",
      backgroundColor: "#AAD8D4",
      memberStatus: "Office Work",
      memberTasks: "13",
      memberProgress: "50%",
      isChecked: false,
    },
    {
      memberName: "Adam Wadson",
      memberEmail: "adam.wadson@gmail.com",
      profilePicture: assets.user2,
      memberRole: "UX designer",
      backgroundColor: "#E4DCB9",
      memberStatus: "Remote Work",
      memberTasks: "9",
      memberProgress: "25%",
      isChecked: false,
    },
    {
      memberName: "Rosalyn Davis",
      memberEmail: "rosalyn.davis@gmail.com",
      profilePicture: assets.user3,
      memberRole: "UX Product manager",
      backgroundColor: "#E4CBE1",
      memberStatus: "On a break",
      memberTasks: "10",
      memberProgress: "50%",
      isChecked: false,
    },
    {
      memberName: "Jonah Pops",
      memberEmail: "jonah.pops@gmail.com",
      profilePicture: assets.user4,
      memberRole: "Back end developer",
      backgroundColor: "#C0E7E8",
      memberStatus: "Office Work",
      memberTasks: "8",
      memberProgress: "12%",
      isChecked: false,
    },
    {
      memberName: "Ajay Banga",
      memberEmail: "ajay.banga@gmail.com",
      profilePicture: assets.user5,
      memberRole: "Front end developer",
      backgroundColor: "#C0E7E8",
      memberStatus: "Office Work",
      memberTasks: "15",
      memberProgress: "28%",
      isChecked: false,
    },
  ];
  return (
    <div className="container mx-auto absolute -bottom-[77.8%] -left-[16.8%]">
      <table className="w-[68%] ml-[20.3%] text-black">
        <thead>
          <tr>
            <th className="px-6 py-4 text-xl text-[#2a2a2b] font-normal">
              Assignees
            </th>
            <th className="px-6 py-4 text-xl text-[#2a2a2b] font-normal">
              Status
            </th>
            <th className="px-6 py-4 text-xl text-[#2a2a2b] font-normal">
              Role
            </th>
            <th className="px-6 py-4 text-xl text-[#2a2a2b] font-normal">
              Tasks
            </th>
            <th className="px-6 py-4 text-xl text-[#2a2a2b] font-normal">
              Progress
            </th>
          </tr>
        </thead>
      </table>
      <div className="h-80 w-[62%] ml-[22.5%] overflow-y-auto scroll-smooth">
        <table className="mx-auto w-full text-black">
          <tbody className="divide-y-2">
            {members?.map((member, index) => (
              <>
                <tr key={index} className="cursor-pointer">
                  <td className="px-6 py-6 text-xl">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-10 rounded-full aspect-square border-2 p-0.5 border-[#797ACD]"
                        src={member.profilePicture}
                        alt={member.memberName}
                      />
                      <div>
                        <div className="font-semibold">{member.memberName}</div>
                        <div className="text-sm">{member.memberEmail}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-base">
                    <span
                      className={`bg-[${member.backgroundColor}] px-5 py-2 rounded-full`}
                    >
                      {member.memberStatus}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-xl">{member.memberRole}</td>
                  <td className="px-6 py-6 text-xl">{member.memberTasks}</td>
                  <td className="px-6 py-6 text-xl w-[23%]">
                    <div className="relative w-full h-4 bg-[#E0DBE2] rounded-full">
                      <div
                        className="absolute bg-[#3F259C] top-0 left-0 h-full rounded-full"
                        style={{ width: member.memberProgress }}
                      ></div>
                      <span className="absolute right-0 top-4 text-md font-bold text-[#7a7a7a]">
                        {member.memberProgress}
                      </span>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembersProgressUI;
