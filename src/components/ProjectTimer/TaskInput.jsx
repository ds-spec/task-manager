import React from "react";
import { GoProjectRoadmap } from "react-icons/go";
import Mainheader from "../Main/Mainheader";

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
  return <Mainheader headerTitle={"Time Tracking"} />;
};

export default TaskInput;
