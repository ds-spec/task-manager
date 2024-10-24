import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import CardView from "./CardView";

const StatusBottomView = () => {
  const cardDecks = [
    {
      cardType: "Discussed",
      cardHeaderColor: "#FFF1C1",
      cardBodyColor: "#FFFFFF",
      taskCards: {},
    },
    {
      cardType: "Approved",
      cardHeaderColor: "#FFD9E6",
      cardBodyColor: "#FFFFFF",
      taskCards: {},
    },
    {
      cardType: "Planned",
      cardHeaderColor: "#D9DDFF",
      cardBodyColor: "#FFFFFF",
      taskCards: {},
    },
  ];
  return (
    <div className="flex gap-5 mt-5">
      {cardDecks?.map((card) => (
        <>
          <div className="w-[30vw]">
            <div
              className={`bg-[${card.cardHeaderColor}] px-5 py-5 rounded-t-xl flex items-center justify-between`}
            >
              <div className="flex items-center gap-5">
                <BsArrowUpRightCircleFill className="text-5xl text-white flex" />
                <h2 className="text-3xl">{card.cardType}</h2>
              </div>
              <HiDotsHorizontal className="text-3xl" />
            </div>
            <div
              className={`bg-[${card.cardBodyColor}] h-96 rounded-b-xl flex justify-center px-4 py-4`}
            >
              <CardView />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default StatusBottomView;
