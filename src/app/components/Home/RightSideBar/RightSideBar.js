"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import textIcon from "@/app/assets/images/text-square.svg";
import Image from "next/image";
import { fruits } from "@/app/data/data";

const RightSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [sizeNumber, setSizeNumber] = useState(15);
  const [isChecked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!isChecked);
  };

  const [textSize, setTextSize] = useState({
    fontSize: "15px",
  });

  const updateTextSize = (property, value) => {
    setTextSize({ [property]: value });
    setSizeNumber(value);
  };


  return (
    <div className="bg-white w-1/5 max-w-[19rem] rounded-lg hidden md:block p-3">
      <div className=" border-gray-300 rounded-lg mb-6  border-2 ">
        <div
          className="flex justify-between items-center p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex gap-2">
            <Image src={textIcon} alt="Text Icon" />
            <h2 className="font-semibold text-[#E55527]">
              Setting
            </h2>
          </div>
          <span className="text-gray-600">
            {isOpen ? (
              <FiChevronUp className="text-[#E55527]" />
            ) : (
              <FiChevronDown />
            )}
          </span>
        </div>
        {isOpen && (
          <div className="p-4 border-t border-gray-300">
            <div className="flex mb-5 justify-between items-center">
              <div className="text-sm text-[#101010] font-medium">
                Paragraph font size
              </div>
              <div className="text-[#E55527] text-sm font-medium">
                {sizeNumber}
              </div>
            </div>
            <div className="w-full mb-5">
              <input
                type="range"
                min="12"
                max="100"
                value={parseInt(textSize.fontSize)}
                onChange={(e) =>
                  updateTextSize("fontSize", e.target.value + "px")
                }
                className="bg-[#D5D8DC] w-full appearance-none h-[5px] rounded-full hover:bg-[#E55527]"
              />
            </div>
            
            <div className="relative text-left">
              <div className="text-sm text-[#101010] font-medium mb-5">
                Choose Vitamin type
              </div>
              <button
                onClick={() => setDropDownOpen(!isDropDownOpen)}
                type="button"
                className="flex justify-between items-center w-full rounded-lg px-4 py-2 bg-[#10101021]  text-sm font-medium text-[#101010] focus:outline-none hover:text-[#E55527] hover:font-medium"
              >
                Vitamins
                <span className="ml-2">
                  {isDropDownOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>

              {isDropDownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ">
                  <div className="py-1">
                    {fruits.map((fruit, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {fruit.vitamine}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <label className="flex items-center cursor-pointe mt-5">
              <div className="relative flex-shrink-0 w-10 overflow-hidden h-5 border border-[#10101027] bg-white rounded-full shadow-inner">
                <input
                  type="checkbox"
                  id="toggle"
                  className="hidden"
                  checked={isChecked}
                  onChange={toggleSwitch}
                />
                <div
                  className={`toggle__dot absolute w-4 h-4 bg-[#10101027] rounded-full shadow ${
                    isChecked
                      ? "transform translate-x-full bg-[#E55527] left-[4px] top-[1px]"
                      : "left-[2px] top-[1px]"
                  } transition-transform`}
                ></div>
              </div>
              <div className="ml-3 text-sm text-[#101010] font-medium">
                Turn Off Subtitle
              </div>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSideBar;
