import React from "react";
import { GoProjectRoadmap } from "react-icons/go";

const TaskInput = () => {
  const progressStates = [
    {
      name: "Daily Progress",
      action: "6h 30m",
      backgroundColor: "#6366F1",
    },
    {
      name: "Tasks Completed",
      action: "12/15",
      backgroundColor: "#3B82F6",
    },
    {
      name: "Active Projects",
      action: "5",
      backgroundColor: "#A855F7",
    },
  ];
  const recentTasks = [
    {
      title: "Website Development",
      timeElapsed: "2h 35m",
    },
    {
      title: "Mobile App Development",
      timeElapsed: "1h 30m",
    },
    {
      title: "Backend Integration",
      timeElapsed: "4h 15m",
    },
    {
      title: "Backend Integration",
      timeElapsed: "4h 15m",
    },
    {
      title: "Backend Integration",
      timeElapsed: "4h 15m",
    },
    {
      title: "Backend Integration",
      timeElapsed: "4h 15m",
    },
  ];
  return (
    <div className="w-full h-4 flex flex-col justify-start items-start mt-12 gap-12">
      <div id="start-timer" className="flex gap-6 w-full items-center">
        <input
          className="px-3 py-3 w-1/4 bg-[#F9FAFB] text-black rounded-md"
          type="text"
          placeholder="What are you working on?"
        />
        <select
          className="text-black text-center w-[10%] py-3 rounded-md cursor-pointer"
          name="Projects"
        >
          <option value="task">Task</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
          <option value="chore">Chore</option>
          <option value="meeting">Meeting</option>
        </select>
        <h3 className="text-black text-2xl">00:00:00</h3>
        <button className="w-[8%] py-3 bg-[#00aeffbb] hover:bg-[#00B0FF] text-white rounded-md">
          Start
        </button>
      </div>
      <div id="tasks-info" className="flex gap-8">
        {progressStates?.map((progress, index) => (
          <div
            className={`bg-[${progress.backgroundColor}] w-52 h-32 rounded-xl px-4 py-6`}
          >
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-white text-xl">{progress.name}</h1>
              <h3 className="text-white text-4xl font-bold">
                {progress.action}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div id="recent-tasks" className="w-full flex flex-col gap-4">
        <h1 className="text-2xl">Recent Tasks</h1>
        <div className="overflow-auto h-56">
          {recentTasks?.map((task) => (
            <div className="w-1/2 px-4 py-4 mb-4 rounded-xl bg-[#dfdfdf] flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <GoProjectRoadmap size={"1.4em"} />
                <h3 className="text-black font-bold text-xl">{task.title}</h3>
              </div>
              <h3 className="text-black text-base">{task.timeElapsed}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
