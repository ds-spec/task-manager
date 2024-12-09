import React, {useState} from "react";
import Mainheader from "../Main/Mainheader";
import {FaRegClock} from "react-icons/fa6";
import {CgColorPicker} from "react-icons/cg";
import {IoMdClose} from "react-icons/io";


import FullCalendar from "@fullcalendar/react";

import dayGridPlugin from "@fullcalendar/daygrid";
//
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
    const [selectedInfo, setSelectedInfo] = useState(null);
    const [cardActive, setCardActive] = useState(false);
    const [selectedColor, setSelectedColor] = useState("");
    const handleClick = () => {
        setCardActive(false);
        if (titleValue && selectedInfo) {
            const newEvent = {
                id: String(events.length + 1),
                title: titleValue,
                start: selectedInfo.startStr,
                end: selectedInfo.endStr,
                backgroundColor: selectedColor
            }
            setEvents([...events, newEvent])
        }
        setCardActive(false)
    }
    const [titleValue, setTitleValue] = useState("");
    console.log(titleValue)
    const [events, setEvents] = useState([
        {title: "Meeting", start: "2024-12-09T10:00:00", end: "2024-12-09T11:00:00", backgroundColor: "#4CAF50"}
    ])
    console.log(events)

    const handleDateSelect = (selectInfo) => {
        setCardActive(true)
        setSelectedInfo(selectInfo)
    }
    return (
        <>
            <div className="w-full h-screen p-[1.2vw_1vw]">
                <Mainheader headerTitle={"Calendar"}/>
                {cardActive && <div
                    className="bg-white px-12 py-8 w-96 h-52 rounded-3xl mt-6 absolute z-10 shadow-xl transition ease-in-out delay-150 duration-200">
                    <IoMdClose
                        className={"absolute right-5 w-6 h-6 p-1 top-2 hover:bg-gray-100 cursor-pointer rounded-full"}
                        size={"1.2em"} onClick={() => setCardActive(false)}/>
                    <div className="flex flex-col items-start gap-4 mt-2">
                        <input
                            autoFocus={true}
                            onChange={(event) => setTitleValue(event.target.value)}
                            className="border-b w-full border-b-gray-400 outline-none text-2xl text-black focus:border-b-blue-800 focus:border-b-2 transition-all"
                            placeholder="Add title"/>
                        <div className="flex items-center gap-2 mt-2">
                            <span><FaRegClock color={"gray"}/></span>
                            <div className="flex gap-2 items-center">
                                <p>Saturday, December 7</p>
                                <p>7:30am - 8:00am</p>
                            </div>
                        </div>
                        <div className={"flex items-center gap-2"}>
                            <CgColorPicker color={"gray"}/>
                            <div className={"flex items-center gap-2"}>
                                <span onClick={() => setSelectedColor("#F4511E")}
                                      className="bg-[#F4511E] p-2 rounded-full cursor-pointer focus:outline-none focus:ring focus:bg-red-400  "/>
                                <span onClick={() => setSelectedColor("#3F51B5")}
                                      className="bg-[#3F51B5] p-2 rounded-full cursor-pointer focus:border-2 focus:border-black "/>
                                <span onClick={() => setSelectedColor("#8E24AA")}
                                      className="bg-[#8E24AA] p-2 rounded-full cursor-pointer focus:border-2 focus:border-black "/>
                                <span onClick={() => setSelectedColor("#0B8043")}
                                      className="bg-[#0B8043] p-2 rounded-full cursor-pointer focus:border-2 border-black"/>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => handleClick()}
                        className={"absolute bottom-2 right-6 bg-blue-700 px-6 py-2.5 rounded-full text-white hover:bg-[#1E64D4] transition-colors"}>Save
                    </button>
                </div>}
                <div className={"mt-16"}>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        nowIndicator={true}
                        events={events}
                        editable={true}
                        selectable={true}
                        height="800px"
                        weekends={true}
                        // dayCellClassNames="!border-none"
                        slotLaneClassNames="!border-none"
                        eventClick={() => setCardActive(true)}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay',
                        }}
                        eventTimeFormat={{
                            hour: 'numeric',
                            minute: '2-digit',
                            meridiem: 'short'
                        }}
                        select={handleDateSelect}
                        allDaySlot={false}
                        eventBackgroundColor={"#FFFF"}
                    />
                </div>
            </div>
        </>
    );
};

export default Calendar;
