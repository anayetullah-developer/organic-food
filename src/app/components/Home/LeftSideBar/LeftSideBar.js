"use client";
import React, { useState } from "react";
import TabList from "./Components/TabList";

const LeftSideBar = () => {
  const [activeTab, setActiveTab] = useState("fruits");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="bg-white w-1/5 rounded-lg hidden md:block">
      <div className="w-full">
        <div className="bg-white shadow-md rounded-lg p-2">
          <div className="flex border-2 border-[#e556272f] p-1 rounded-lg">
            <button
              className={`w-1/2 py-1 px-4 font-medium focus:outline-none ${
                activeTab === "fruits"
                  ? "text-[#E55527] rounded-lg bg-[#FFEEE9]"
                  : "text-[#101010]"
              }`}
              onClick={() => handleTabClick("fruits")}
            >
              Fruits
            </button>
            <button
              className={`w-1/2 py-1 px-4 font-medium focus:outline-none ${
                activeTab === "vegetables"
                  ? "text-[#E55527] rounded-lg bg-[#FFEEE9]"
                  : "text-[#101010]"
              }`}
              onClick={() => handleTabClick("vegetables")}
            >
              Vegetables
            </button>
          </div>
          <div className="my-5">
            {/* Content for the "Fruits" tab */}
            {activeTab === "fruits" && (
              <>
                <div class="relative mb-5">
                  <input
                    type="text"
                    class="w-full pr-1 pl-3 py-2 w-full rounded-lg border-2 border-[#F0F2F4] focus:outline-none text-[#101010] text-xs"
                    placeholder="Search Best Food..."
                  />
                  <div class="absolute inset-y-1 right-1 flex justify-center p-1 items-center cursor-pointer rounded border-2 border-[#F5E4E1] bg-[#FFEEE9]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0,0,256,256"
                    >
                      <g fill="#e55527">
                        <g transform="scale(4,4)">
                          <path d="M27,9c-9.925,0 -18,8.075 -18,18c0,9.925 8.075,18 18,18c4.12921,0 7.9263,-1.41263 10.9668,-3.75977l13.08203,13.08203c0.904,0.904 2.36944,0.904 3.27344,0c0.904,-0.904 0.904,-2.36944 0,-3.27344l-13.08203,-13.08203c2.34713,-3.0405 3.75977,-6.83758 3.75977,-10.9668c0,-9.925 -8.075,-18 -18,-18zM27,13c7.719,0 14,6.281 14,14c0,7.719 -6.281,14 -14,14c-7.719,0 -14,-6.281 -14,-14c0,-7.719 6.281,-14 14,-14z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="fruits-tab">
                  {/* Place your Fruits content here */}
                  <TabList/>
                </div>
              </>
            )}

            {/* Content for the "Vegetables" tab */}
            {activeTab === "vegetables" && (
              <>
                <div class="relative mb-5">
                  <input
                    type="text"
                    class="w-full pr-1 pl-3 py-2 rounded-lg border-2 border-[#F0F2F4] focus:outline-none text-[#101010] text-xs"
                    placeholder="Search Best Food..."
                  />
                  <div class="absolute inset-y-1 right-1 flex justify-center p-1 items-center cursor-pointer rounded border-2 border-[#F5E4E1] bg-[#FFEEE9]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0,0,256,256"
                    >
                      <g fill="#e55527">
                        <g transform="scale(4,4)">
                          <path d="M27,9c-9.925,0 -18,8.075 -18,18c0,9.925 8.075,18 18,18c4.12921,0 7.9263,-1.41263 10.9668,-3.75977l13.08203,13.08203c0.904,0.904 2.36944,0.904 3.27344,0c0.904,-0.904 0.904,-2.36944 0,-3.27344l-13.08203,-13.08203c2.34713,-3.0405 3.75977,-6.83758 3.75977,-10.9668c0,-9.925 -8.075,-18 -18,-18zM27,13c7.719,0 14,6.281 14,14c0,7.719 -6.281,14 -14,14c-7.719,0 -14,-6.281 -14,-14c0,-7.719 6.281,-14 14,-14z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>

                <div className="vegetables-tab">
                  {/* Place your Vegetables content here */}
                  <p>This is the content for the Vegetables tab.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
