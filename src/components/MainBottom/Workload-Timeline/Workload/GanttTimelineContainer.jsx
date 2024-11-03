import { GanttComponent } from "@syncfusion/ej2-react-gantt";
import React from "react";

const GanttTimelineContainer = () => {
  const tasks = [
    {
      TaskID: 1,
      TaskName: "Task 1",
      StartDate: new Date("2024-10-29"),
      Duration: 5,
      Progress: 50,
    },
    {
      TaskID: 2,
      TaskName: "Task 2",
      StartDate: new Date("2024-11-02"),
      Duration: 3,
      Progress: 70,
    },
  ];
  return (
    <div>
      <GanttComponent
        dataSource={tasks}
        taskFields={{
          id: "TaskID",
          name: "TaskName",
          startDate: "StartDate",
          duration: "Duration",
          progress: "Progress",
        }}
      ></GanttComponent>
    </div>
  );
};

export default GanttTimelineContainer;
