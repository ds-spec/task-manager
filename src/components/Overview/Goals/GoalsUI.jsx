import React from "react";

const GoalsUI = () => {
  const goals = [
    {
      name: "UI Updates",
      image: "",
      assigned: "12 minutes",
      completedTasks: "",
    },
  ];
  return (
    <div className="bg-white rounded-xl h-full px-3 py-2">
      <h3 className="text-4xl text-gray-900 font-medium">Goals</h3>
      <div></div>
    </div>
  );
};

export default GoalsUI;
