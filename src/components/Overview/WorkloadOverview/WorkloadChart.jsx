// import React, { useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// const WorkloadChart = () => {
//   const [selectedDay, setSelectedDay] = useState(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const data = [
//     { day: "1", fullTime: 1800, partTime: 1200, leave: 500 },
//     { day: "2", fullTime: 2000, partTime: 1000, leave: 400 },
//     { day: "3", fullTime: 1900, partTime: 1100, leave: 600 },
//     { day: "4", fullTime: 1700, partTime: 1300, leave: 500 },
//     { day: "5", fullTime: 1800, partTime: 1200, leave: 400 },
//     { day: "6", fullTime: 1600, partTime: 1000, leave: 300 },
//     { day: "7", fullTime: 800, partTime: 400, leave: 200 },
//     { day: "8", fullTime: 0, partTime: 0, leave: 0 },
//     { day: "9", fullTime: 1700, partTime: 900, leave: 400 },
//     { day: "10", fullTime: 1900, partTime: 1100, leave: 500 },
//     { day: "11", fullTime: 2000, partTime: 1000, leave: 400 },
//     { day: "12", fullTime: 1800, partTime: 800, leave: 300 },
//     { day: "13", fullTime: 1000, partTime: 500, leave: 200 },
//     { day: "14", fullTime: 1600, partTime: 700, leave: 300 },
//     { day: "15", fullTime: 1500, partTime: 800, leave: 400 },
//   ];
//   // return (
//   //   <div className="p-6 bg-white rounded-xl">
//   //     <div className="flex justify-between items-center mb-4">
//   //       <div>
//   //         <h3 className="text-4xl text-gray-900 font-medium">Workload</h3>
//   //         <p className="text-sm text-[#464fd4] mt-4">J  ANUARY</p>
//   //       </div>
//   //       <select className="text-sm text-blue-600 bg-transparent border-none">
//   //         <option>Stacked bar chart</option>
//   //       </select>
//   //     </div>

//   //     <BarChart
//   //       width={800}
//   //       height={250}
//   //       data={data}
//   //       margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
//   //       barSize={10}
//   //     >
//   //       <CartesianGrid stroke="#ECEFF3" vertical={true} horizontal={false} />
//   //       <XAxis
//   //         dataKey="day"
//   //         axisLine={false}
//   //         tickLine={false}
//   //         // tick={{ fontSize: 12, fill: "#6B7280", fontWeight: "bold" }}
//   //         tick={(props) => {
//   //           const { x, y, payload } = props;
//   //           return (
//   //             <g>
//   //               <rect
//   //                 x={x - 15} // Adjust these values to control the background size
//   //                 y={y - 10}
//   //                 width={30}
//   //                 height={30}
//   //                 rx={4} // Rounded corners
//   //                 className="fill-transparent hover:fill-blue-600 cursor-pointer transition-colors"
//   //               />
//   //               <text
//   //                 x={x}
//   //                 y={y}
//   //                 dy={10}
//   //                 textAnchor="middle"
//   //                 className="text-[15px] font-bold fill-[#6B7280] cursor-pointer transition-colors"
//   //               >
//   //                 {`${payload.value}`}
//   //               </text>
//   //             </g>
//   //           );
//   //         }}
//   //       />
//   //       <YAxis
//   //         className="hover:bg-red-400"
//   //         axisLine={false}
//   //         tickLine={false}
//   //         tick={{ fontSize: 15, fill: "#6B7280", fontWeight: "bold" }}
//   //         ticks={[0, 500, 1000, 1500, 2000, 2500]}
//   //         tickFormatter={(value) => `${value}h`}
//   //       />
//   //       <Tooltip />
//   //       <Bar
//   //         dataKey="fullTime"
//   //         stackId="a"
//   //         // fill="#4F46E5"
//   //         fill="#FFD8E6"
//   //         radius={[4, 4, 0, 0]}
//   //       />
//   //       <Bar
//   //         dataKey="partTime"
//   //         stackId="a"
//   //         fill="#7B82DA"
//   //         radius={[4, 4, 0, 0]}
//   //       />
//   //       <Bar dataKey="leave" stackId="a" fill="#2A3074" radius={[4, 4, 0, 0]} />
//   //       {/* <Bar dataKey="leave" stackId="a" radius={[4, 4, 0, 0]} /> */}
//   //     </BarChart>
//   //   </div>
//   // );
//   return (
//     <div className="p-6 bg-white rounded-xl">
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h3 className="text-4xl text-gray-900 font-medium">Workload</h3>
//           <p className="text-sm text-[#464fd4] mt-4">JANUARY</p>
//         </div>
//         <select className="text-sm text-blue-600 bg-transparent border-none">
//           <option>Stacked bar chart</option>
//         </select>
//       </div>

//       <BarChart
//         width={800}
//         height={250}
//         data={data}
//         margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
//         barSize={10}
//         onMouseMove={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <CartesianGrid
//           stroke={isHovered ? "#2563EB" : "#ECEFF3"}
//           vertical={true}
//           horizontal={false}
//         />
//         <XAxis
//           dataKey="day"
//           axisLine={false}
//           tickLine={false}
//           tick={(props) => {
//             const { x, y, payload } = props;
//             const isSelected = selectedDay === payload.value;

//             return (
//               <g onClick={() => setSelectedDay(payload.value)}>
//                 <rect
//                   x={x - 15}
//                   y={y - 10}
//                   width={30}
//                   height={30}
//                   rx={4}
//                   className={`${
//                     isSelected
//                       ? "fill-blue-600"
//                       : "fill-transparent hover:fill-blue-600/10"
//                   } cursor-pointer transition-colors`}
//                 />
//                 <text
//                   x={x}
//                   y={y}
//                   dy={10}
//                   textAnchor="middle"
//                   className={`text-[15px] font-bold cursor-pointer transition-colors ${
//                     isSelected ? "fill-white" : "fill-[#6B7280]"
//                   }`}
//                 >
//                   {`${payload.value}`}
//                 </text>
//               </g>
//             );
//           }}
//         />
//         <YAxis
//           className="hover:bg-red-400"
//           axisLine={false}
//           tickLine={false}
//           tick={{ fontSize: 15, fill: "#6B7280", fontWeight: "bold" }}
//           ticks={[0, 500, 1000, 1500, 2000, 2500]}
//           tickFormatter={(value) => `${value}h`}
//         />
//         <Tooltip />
//         <Bar
//           dataKey="fullTime"
//           stackId="a"
//           fill="#FFD8E6"
//           radius={[4, 4, 0, 0]}
//         />
//         <Bar
//           dataKey="partTime"
//           stackId="a"
//           fill="#7B82DA"
//           radius={[4, 4, 0, 0]}
//         />
//         <Bar dataKey="leave" stackId="a" fill="#2A3074" radius={[4, 4, 0, 0]} />
//       </BarChart>
//     </div>
//   );
// };

// export default WorkloadChart;

import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine } from "recharts";

export default function WorkloadChart() {
  const [selectedDay, setSelectedDay] = useState(null);

  const data = [
    { day: "1", fullTime: 800, partTime: 1200, leave: 500 },
    { day: "2", fullTime: 500, partTime: 1000, leave: 400 },
    { day: "3", fullTime: 900, partTime: 1100, leave: 600 },
    { day: "4", fullTime: 700, partTime: 1300, leave: 500 },
    { day: "5", fullTime: 800, partTime: 1200, leave: 400 },
    { day: "6", fullTime: 600, partTime: 1000, leave: 300 },
    { day: "7", fullTime: 800, partTime: 400, leave: 200 },
    { day: "8", fullTime: 0, partTime: 0, leave: 0 },
    { day: "9", fullTime: 700, partTime: 900, leave: 400 },
    { day: "10", fullTime: 900, partTime: 1100, leave: 500 },
    { day: "11", fullTime: 500, partTime: 1000, leave: 400 },
    { day: "12", fullTime: 800, partTime: 800, leave: 300 },
    { day: "13", fullTime: 400, partTime: 500, leave: 200 },
    { day: "14", fullTime: 600, partTime: 700, leave: 300 },
    { day: "15", fullTime: 500, partTime: 800, leave: 400 },
  ];

  return (
    <div className="px-6 py-4 bg-white rounded-xl">
      <div className="flex flex-col justify-between items-start">
        <div>
          <h3 className="text-4xl text-gray-900 font-medium">Workload</h3>
          <p className="text-sm text-[#5f68ea] font-bold mt-4">JANUARY</p>
        </div>
        <BarChart
          width={900}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: -15, bottom: 5 }}
          barSize={10}
        >
          {/* Render default gray lines */}
          {data.map((entry, index) => (
            <ReferenceLine
              key={index}
              x={entry.day}
              stroke={selectedDay === entry.day ? "#C4C7E5" : "#ECEFF3"}
              strokeWidth={3}
            />
          ))}

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={(props) => {
              const { x, y, payload } = props;
              const isSelected = selectedDay === payload.value;

              return (
                <g
                  onClick={() =>
                    setSelectedDay(isSelected ? null : payload.value)
                  }
                >
                  <rect
                    x={x - 12}
                    y={y - 3}
                    width={25}
                    height={25}
                    rx={52}
                    className={`${
                      isSelected
                        ? "fill-[#474FAD]"
                        : "fill-transparent hover:fill-blue-600/10"
                    } cursor-pointer transition-colors`}
                  />
                  <text
                    x={x}
                    y={y}
                    dy={15}
                    textAnchor="middle"
                    className={`text-[15px] font-bold cursor-pointer transition-colors ${
                      isSelected ? "fill-white" : "fill-[#6B7280]"
                    }`}
                  >
                    {`${payload.value}`}
                  </text>
                </g>
              );
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 15, fill: "#6B7280", fontWeight: "bold" }}
            ticks={[0, 600, 1200, 1800, 2400]}
            domain={[0, 3000]}
            tickFormatter={(value) => `${value}h`}
          />
          <Tooltip />
          <Bar
            dataKey="fullTime"
            stackId="a"
            fill="#FFD8E6"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="partTime"
            stackId="a"
            fill="#7B82DA"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="leave"
            stackId="a"
            fill="#2A3074"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </div>
    </div>
  );
}
