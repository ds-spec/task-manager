import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarClass.css";
import { IoCalendarOutline } from "react-icons/io5";

const DueDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState("false");
  const datePickerRef = useRef();
  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true); // Opens the calendar
    }
  };
  return (
    <div className="flex flex-row items-center gap-2">
      <IoCalendarOutline
        onClick={handleIconClick}
        className="due-date-icon text-[#767685] cursor-pointer"
      />

      {isOpen && (
        <DatePicker
          ref={datePickerRef}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Select date and time"
          dateFormat="MMM d, yyyy"
          onClickOutside={() => datePickerRef.current.setOpen(false)}
          shouldCloseOnSelect={true}
        />
      )}
    </div>
  );
};

export default DueDate;
