import React from "react";

const CardView = () => {
  return (
    <div className="card-view px-3 border-2  border-[#F5F6FA] rounded-xl flex flex-col gap-3 justify-center items-start">
      <img
        src="https://plus.unsplash.com/premium_photo-1661573322713-0935eae5f6a9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full max-w-full h-auto rounded-md"
      />
      <h2>Search | Face detection on device</h2>
    </div>
  );
};

export default CardView;
