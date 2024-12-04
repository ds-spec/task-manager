import React from "react";

const GoalsUI = () => {
  const goals = [
    {
      name: "UI Updates",
      image:
        "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      assigned: "12 minutes",
      completedTasks: "8",
      totalTasks: "11",
    },
    {
      name: "January Updates",
      image:
        "https://images.unsplash.com/photo-1610215497937-f974830cb313?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      assigned: "12 minutes",
      completedTasks: "18",
      totalTasks: "34",
    },
    {
      name: "New Homepage",
      image:
        "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      assigned: "Week",
      completedTasks: "6",
      totalTasks: "7",
    },
  ];
  return (
    <div className="bg-white rounded-xl h-full px-7 py-5">
      <h3 className="text-4xl text-gray-900 font-medium">Goals</h3>
      <div className="divide-y-[3px] divide-[#F5F6F9]">
        {goals?.map((goal, index) => (
          <>
            <div key={index} className="px-2 py-4">
              <div id="profile-name" className="flex items-start gap-4">
                <img
                  className="w-12 aspect-square rounded-full border-2 border-gray-400 p-0.5"
                  src={goal.image}
                  alt="img"
                />
                <div id="name" className="flex flex-col -mt-[5px] gap-1">
                  <h1 className="text-xl font-bold text-black">{goal.name}</h1>
                  <h5 className="text-sm text-[#afadad] font-bold -mt-1">
                    {goal.assigned} ago
                  </h5>
                </div>
              </div>
              <div
                id="progress-bar"
                className="bg-[#E0DBE2] w-[95%] h-4 mt-6 rounded-full relative mb-5"
              >
                <div
                  id="progress"
                  className="bg-[#3F259C] w-[60%] h-full rounded-full"
                ></div>
                <h3 className="absolute ml-[60%] font-extrabold text-md text-black">
                  {goal.completedTasks} tasks
                </h3>
                <h3 className="absolute right-0 font-bold text-md text-[#7a7a7a]">
                  {goal.totalTasks}
                </h3>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default GoalsUI;
