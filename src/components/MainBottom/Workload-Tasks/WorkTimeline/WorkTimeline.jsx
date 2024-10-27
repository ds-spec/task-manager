import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./WorkTimeline.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Vacation",
    start: new Date(2024, 9, 25),
    end: new Date(2024, 10, 2),
    resourceId: 1,
  },
  {
    title: "Updated key objects",
    start: new Date(2024, 9, 26),
    end: new Date(2024, 9, 31),
    resourceId: 2,
  },
  {
    title: "Work on beach",
    start: new Date(2024, 9, 25),
    end: new Date(2024, 10, 1),
    resourceId: 3,
  },
  {
    title: "Integrate MongoDb",
    start: new Date(2024, 9, 26),
    end: new Date(2024, 10, 4),
    resourceId: 4,
  },
];

const WorkTimeline = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        views={["week", "agenda"]}
        startAccessor="start"
        endAccessor="end"
        className="custom-calendar"
      />
    </div>
  );
};

export default WorkTimeline;
