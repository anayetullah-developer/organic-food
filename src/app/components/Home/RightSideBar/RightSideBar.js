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

  console.log(textSize);

  return (
    <div className="bg-white w-1/5 rounded-lg hidden md:block">
      <div className="border border-gray-300 rounded">
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex gap-2">
            <Image src={textIcon} alt="Text Icon" />
            <h2 style={textSize} className="font-semibold text-[#E55527]">
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
            <div className="flex justify-between items-center">
              <div>Paragraph font size</div>
              <div>{sizeNumber}</div>
            </div>
            <div className="w-full">
              <input
                type="range"
                min="12"
                max="100"
                value={parseInt(textSize.fontSize)}
                onChange={(e) =>
                  updateTextSize("fontSize", e.target.value + "px")
                }
                className="bg-[#D5D8DC] w-full appearance-none h-[5px] rounded-full hover:bg-[#D5D8DC]"
              />
            </div>
            <label className="flex items-center cursor-pointer">
              <div
                className={`relative w-10 h-4 bg-gray-400 rounded-full shadow-inner ${
                  isChecked ? "bg-red-500" : ""
                }`}
              >
                <input
                  type="checkbox"
                  id="toggle"
                  className="hidden"
                  checked={isChecked}
                  onChange={toggleSwitch}
                />
                <div
                  className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow ${
                    isChecked
                      ? "transform translate-x-full bg-red-500 -left-1"
                      : "-left-1"
                  }`}
                ></div>
              </div>
              <div className="ml-3 text-gray-700 font-medium">
                Toggle Switch
              </div>
            </label>

            <div className="relative text-left">
      <button
        onClick={() => setDropDownOpen(!isDropDownOpen)}
        type="button"
        className="flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        Vitamins
        <span className="ml-2">
          {isDropDownOpen ? '🔽' : '🔼'}
        </span>
      </button>

      {isDropDownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSideBar;
