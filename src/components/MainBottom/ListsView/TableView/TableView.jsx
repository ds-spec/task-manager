import React from "react";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import assets from "../../../../assets/assets";

const TableView = () => {
  const allTaskData = [
    {
      assignee: "John Mathew",
      assigneeProfile: assets.user1,
      taskName: "Design Landing Page",
      dueDate: "2024-11-01",
    },
    {
      assignee: "Sara Kim",
      assigneeProfile: assets.user2,
      taskName: "Develop API Endpoints",
      dueDate: "2024-11-05",
    },
    {
      assignee: "Alex Brown",
      assigneeProfile: assets.user3,
      taskName: "Create Database Schema",
      dueDate: "2024-11-03",
    },
    {
      assignee: "Emily Carter",
      assigneeProfile: assets.user3,
      taskName: "Write Test Cases",
      dueDate: "2024-11-02",
    },
    {
      assignee: "Michael Lee",
      assigneeProfile: assets.user4,
      taskName: "Integrate Auth System",
      dueDate: "2024-11-06",
    },
    {
      assignee: "Rachel Adams",
      assigneeProfile: assets.user1,
      taskName: "Design User Dashboard",
      dueDate: "2024-11-07",
    },
    {
      assignee: "David Chen",
      assigneeProfile: assets.user2,
      taskName: "Optimize Query Performance",
      dueDate: "2024-11-08",
    },
    {
      assignee: "Linda Perez",
      assigneeProfile: assets.user3,
      taskName: "Set Up DevOps Pipeline",
      dueDate: "2024-11-09",
    },
    {
      assignee: "Samuel Green",
      assigneeProfile: assets.user4,
      taskName: "Fix UI Bugs",
      dueDate: "2024-11-10",
    },
    {
      assignee: "Nancy Wilson",
      assigneeProfile: assets.user1,
      taskName: "Conduct User Interviews",
      dueDate: "2024-11-04",
    },
    {
      assignee: "Brian King",
      assigneeProfile: assets.user2,
      taskName: "Analyze User Data",
      dueDate: "2024-11-11",
    },
    {
      assignee: "Laura Scott",
      assigneeProfile: assets.user3,
      taskName: "Update Documentation",
      dueDate: "2024-11-12",
    },
    {
      assignee: "Tom Young",
      assigneeProfile: assets.user4,
      taskName: "Implement Payment Gateway",
      dueDate: "2024-11-13",
    },
    {
      assignee: "Anna Martinez",
      assigneeProfile: assets.user1,
      taskName: "Design Marketing Materials",
      dueDate: "2024-11-14",
    },
    {
      assignee: "James Johnson",
      assigneeProfile: assets.user2,
      taskName: "Configure Email Notifications",
      dueDate: "2024-11-15",
    },
  ];

  return (
    <div className="table-view w-full relative h-72 overflow-y-auto">
      <table className="table-auto w-full">
        <thead className="sticky top-0 h-10">
          <tr>
            <th className="text-xl font-normal px-3 py-2 text-left">Done</th>
            <th className="text-xl font-normal px-3 py-2 text-left">
              Assignee
            </th>
            <th className="text-xl font-normal px-3 py-2 text-left">Profile</th>
            <th className="text-xl font-normal px-3 py-2 text-left">
              Task Name
            </th>
            <th className="text-xl font-normal px-3 py-2 text-left">
              Due Date
            </th>
          </tr>
        </thead>
        <tbody>
          {allTaskData?.map((taskDetail, index) => (
            <tr key={index}>
              <td className="px-3 py-2">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-white bg-gray-100 border-gray-300 rounded"
                />
              </td>
              <td className="px-3 py-2 text-xl">{taskDetail?.assignee}</td>
              <td className="px-3 py-2">
                <img
                  className="w-8 aspect-square rounded-full"
                  src={taskDetail?.assigneeProfile}
                />
              </td>
              <td className="px-3 py-2 flex gap-2 items-center">
                {taskDetail?.taskName}{" "}
                <MdOutlineChatBubbleOutline className="text-[#a5a4a4]" />
              </td>
              <td className="px-3 py-2">{taskDetail?.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
