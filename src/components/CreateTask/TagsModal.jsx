import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TagsModal = ({ setOpenModal }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const colorPickerArr = [
    { name: "Red-Orange", hex: "#FF5733" },
    { name: "Green", hex: "#33FF57" },
    { name: "Blue", hex: "#3357FF" },
    { name: "Yellow", hex: "#F1C40F" },
    { name: "Purple", hex: "#8E44AD" },
  ];

  const handleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
  const handleSelectedColor = (selectedColor) => {
    setSelectedColor(selectedColor);
    setOpenDropDown(false);
  };
  return (
    <div>
      <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="bg-[#fff] absolute w-96 h-56 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-8 py-8 rounded-xl">
        <form className="flex flex-col gap-3">
          <div className="flex flex-col w-full">
            <label className="text-black font-bold">Name</label>
            <input
              type="text"
              className="border-2 border-[#bfbfc0] outline-[#9a9a9d] rounded-md text-[#a2a2a3] px-1 py-[0.1vw] caret-black"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-black font-bold">Color</label>
            <div
              onClick={handleDropDown}
              className="border-2 border-[#bfbfc0] rounded-md text-[#a2a2a3] px-1 h-7 caret-black relative cursor-pointer"
            >
              <div className="flex h-full gap-2 items-center">
                <div
                  className={`bg-[${selectedColor.hex}] w-4 h-4 rounded-full`}
                ></div>
                <h5 className="text-black text-sm">{selectedColor.name}</h5>
              </div>
              <IoIosArrowDown className="text-black absolute top-1 right-1 cursor-pointer" />
              {openDropDown && (
                <div className="w-full h-32 mt-0.5 rounded-md border-[1px] border-[#bfbfc0] bg-[#FFF] overflow-auto">
                  {colorPickerArr?.map((color) => (
                    <>
                      <div
                        onClick={() => handleSelectedColor(color)}
                        className="flex gap-2 items-center hover:bg-[#f3f3f3] cursor-pointer px-2 py-2"
                      >
                        <div
                          className={`bg-[${color.hex}] w-4 h-4 rounded-full`}
                        ></div>
                        <h5 className="text-black text-sm">{color.name}</h5>
                      </div>
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 flex gap-3 justify-end w-full">
            <button
              onClick={() => setOpenModal(false)}
              className="bg-[#e6e6e6] hover:bg-[#d4d4d4] text-[#636363] text-sm rounded-md font-bold px-5 py-1.5"
            >
              Cancel
            </button>
            <button className="bg-[#dc4c3e]  text-[#ffffff] text-sm rounded-md font-bold px-7 py-1.5">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TagsModal;
