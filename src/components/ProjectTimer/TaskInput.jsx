import React, { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

const TaskInput = () => {
  const [seconds, setSeconds] = useState(0);

  const handleTimer = () => {
    const timerInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(timerInterval);
  };

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

  // useEffect(() => {
  //   const convertTimeToSeconds = (time) => {
  //     const [hours, minutes, seconds] = time.split(":").map(Number);
  //     return hours * 3600 + minutes * 60 + seconds;
  //     // console.log(timerSplit);
  //   };
  //   setTimer(convertTimeToSeconds(timer));
  // }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const pad = (num) => String(num).padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <>
      <div
        id="tasks-info"
        className="flex gap-8 mt-8 w-full pl-[1.2vw] pr-[1.2vw]"
      >
        {/* {progressStates?.map((progress, index) => (
          <div className={`bg-white w-64 h-48 rounded-xl px-4 py-6`}>
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-black text-xl">{progress.name}</h1>
              <h3 className="text-black text-4xl font-bold">
                {progress.action}
              </h3>
            </div>
          </div>
        ))} */}
        <div className="w-full">
          <input
            autoFocus
            className="w-full p-3 bg-transparent text-3xl outline-none"
            type="text"
            placeholder="What are you working on ?"
          />
        </div>
        <div className="flex items-center gap-6">
          <h1 className="text-2xl">{formatTime(seconds)}</h1>
          <FaPlayCircle
            onClick={handleTimer}
            size={"2.2em"}
            color="#6EB454"
            cursor="pointer"
          />
        </div>
      </div>
    </>
  );
};

export default TaskInput;
