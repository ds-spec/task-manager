import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const MembersTableUI = ({
  members,
  selectedMember,
  setListLabels,
  handleMemberChange,
  handleCheckboxChange,
}) => {
  return (
    <div className="container mx-auto -mt-6">
      <div className="absolute top-[27%] left-[50%] -translate-x-[50%] -translate-y-[20%]">
        <IoSearchOutline className="absolute top-[31%] left-5 text-[#898686] text-2xl" />
        <input
          type="text"
          placeholder="Search people by name or email"
          className="px-14 py-4 w-[52vw] rounded-full text-black text-xl bg-[#E2E0E1] outline-none font-normal"
        />
      </div>
      <table className="table-fixed mx-auto mt-4 w-[55%] text-black">
        <thead>
          <tr>
            <th className="px-6 py-6 text-xl text-[#2a2a2b] font-normal">
              Assignees
            </th>
            <th className="px-6 py-6 text-xl text-[#2a2a2b] font-normal">
              Status
            </th>
            <th className="px-6 py-6 text-xl text-[#2a2a2b] font-normal">
              Role
            </th>
          </tr>
        </thead>
      </table>
      <div className="h-80 overflow-y-auto scroll-smooth">
        <table className="table-auto mx-auto w-[55%] text-black">
          <tbody>
            {members?.map((member, index) => (
              <>
                <tr
                  key={index}
                  className="hover:bg-[#9495DB] hover:rounded-full transition-colors cursor-pointer"
                >
                  <td className="px-6 py-6 text-xl">
                    <div className="flex items-center gap-3">
                      <input
                        value={selectedMember}
                        type="checkbox"
                        className="w-4 h-4 border-none outline-none rounded-lg"
                        // onClick={() =>
                        //   dispatch(addTaskCard(task: "taskName",[member.profilePicture]))
                        // }
                        onChange={handleCheckboxChange}
                        onClick={() => handleMemberChange(member)}
                      />
                      <img
                        className="w-12 rounded-full aspect-square border-2 p-0.5 border-[#797ACD]"
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
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="px-[3.6vw] py-[0.7vw] text-[1.4vw] mt-2 ml-96 cursor-pointer border-none rounded-[9px] text-white bg-[#121212]"
        type="submit"
        onClick={() => setListLabels(true)}
      >
        Next
      </button>
      <div className="absolute flex bottom-[5%] right-10">
        {selectedMember?.map((task) => (
          <img
            className="w-12 rounded-full aspect-square border-2 p-0.5 border-[#797ACD]"
            src={task.profilePicture}
          />
        ))}
      </div>
    </div>
  );
};

export default MembersTableUI;
