import React from "react";
import Mainheader from "../Main/Mainheader";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import WorkloadChart from "./WorkloadOverview/WorkloadChart";
import GoalsUI from "./Goals/GoalsUI";
import MembersProgressUI from "./MembersProgress/MembersProgressUI";

// const CircularProgress = ({
//   percentage,
//   size = 120,
//   color = "#4F46E5",
//   background = "#F3F4F6",
// }) => {
//   const data = [{ value: percentage }];

//   return (
//     <RadialBarChart
//       width={size}
//       height={size}
//       innerRadius="65%"
//       outerRadius="100%"
//       data={data}
//       startAngle={90}
//       endAngle={-270}
//     >
//       <PolarAngleAxis
//         type="number"
//         domain={[0, 100]}
//         angleAxisId={0}
//         tick={false}
//       />
//       <RadialBar background dataKey="value" cornerRadius={30} fill={color} />
//       <text
//         x={size / 2}
//         y={size / 2}
//         textAnchor="middle"
//         dominantBaseline="middle"
//         className="text-xl font-semibold"
//       >
//         {`${percentage}%`}
//       </text>
//     </RadialBarChart>
//   );
// };

const DonutChart = ({ data, size = 180, totalPercentage }) => {
  const RADIAN = Math.PI / 180;

  return (
    <div className="relative">
      <PieChart width={size} height={size}>
        <Pie
          data={data}
          cx={size / 2}
          cy={size / 2}
          innerRadius={50}
          outerRadius={80}
          dataKey="value"
          strokeWidth={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      {/* Centered percentage */}
      <div
        className="absolute inset-0 flex items-center justify-center font-semibold text-2xl"
        style={{ color: data[0].textColor }}
      >
        <p className="ml-4">{totalPercentage}%</p>
      </div>
    </div>
  );
};

const Overview = () => {
  const analyticsData = [
    {
      id: "attendance",
      title: "Attendance",
      percentage: 79,
      backgroundColor: "#000000",
      items: [
        {
          name: "Full-time work",
          value: 60,
          color: "#D8BFE3",
          textColor: "#FFFFFF",
        },
        {
          name: "Part-time work",
          value: 25,
          color: "#9492DD",
          textColor: "#FFFFFF",
        },
        { name: "Leave", value: 15, color: "#50548F", textColor: "#FFFFFF" },
      ],
    },
    {
      id: "office",
      title: "Office work",
      percentage: 66,
      backgroundColor: "#9CA4FD",
      items: [
        { name: "Office", value: 45, color: "#FDD9E7", textColor: "#FFFFFF" },
        { name: "Remote", value: 35, color: "#555A96", textColor: "#FFFFFF" },
        {
          name: "Office+Remote",
          value: 20,
          color: "#525AB4",
          textColor: "#FFFFFF",
        },
      ],
    },
    {
      id: "activities",
      title: "Activities",
      percentage: 75,
      backgroundColor: "#FFDCBC",
      items: [
        {
          name: "Active work time",
          value: 55,
          color: "#020965",
          textColor: "#635C98",
        },
        { name: "Breaks", value: 25, color: "#484F9F", textColor: "#635C98" },
        {
          name: "Passive work time",
          value: 20,
          color: "#FFFBF8",
          textColor: "#635C98",
        },
      ],
    },
  ];
  return (
    <>
      <div className="w-full h-screen p-[1.2vw_1vw]">
        <Mainheader headerTitle={"Overview"} />
        <div className="flex flex-col gap-8 mt-8 px-5">
          <div className="flex justify-between items-center gap-5">
            {analyticsData?.map((analytics) => (
              <div
                className={`bg-[${analytics.backgroundColor}] w-[28rem] h-56 rounded-xl px-6 py-5`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-10">
                    <h2 className="text-white text-4xl font-normal">
                      {analytics.title}
                    </h2>
                    <div>
                      {analytics.items.map((item) => (
                        <ul className="flex items-center gap-2">
                          <div
                            className={`w-1.5 h-1.5 bg-[${item.color}]`}
                          ></div>
                          <li className={`text-[${item.textColor}] text-lg`}>
                            {item.name}
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                  <div>
                    <DonutChart
                      data={analytics.items}
                      size={180}
                      totalPercentage={analytics.percentage}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-6">
            <div className="w-[66%] h-fit">
              <WorkloadChart />
            </div>
            <div className="w-[33%]">
              <GoalsUI />
            </div>
          </div>
          <MembersProgressUI />
        </div>
      </div>
    </>
  );
};

export default Overview;
