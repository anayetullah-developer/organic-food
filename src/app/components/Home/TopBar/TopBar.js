"use client"
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/app/assets/images/logo.svg";
import { FaTimes } from "react-icons/fa";
import { fruits } from "@/app/data/data";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black text-center px-6 py-3 flex justify-between">
      <div>
        <Image src={logo} alt="Logo" />
      </div>
      <div class="relative hidden md:block w-[23rem]">
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

      <div className="flex items-center gap-6">
        <div className="border-2 hidden md:block border-[#F5E4E1] bg-[#FFEEE9] p-1 rounded-lg" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M14.1673 10.0007C14.1673 12.3018 12.3018 14.1673 10.0007 14.1673C7.69947 14.1673 5.83398 12.3018 5.83398 10.0007C5.83398 7.69947 7.69947 5.83398 10.0007 5.83398C12.3018 5.83398 14.1673 7.69947 14.1673 10.0007Z"
              fill="#E65527"
              stroke="#E65527"
              stroke-width="1.5"
              stroke-linecap="square"
            />
            <path
              d="M9.99625 2.5H10.0038M9.99675 17.5H10.0043M15.299 4.69666H15.3065M4.69507 15.3033H4.70256M4.69507 4.69706H4.70256M15.2985 15.3037H15.306M17.4925 10.0005H17.5M2.5 10.0005H2.50748"
              stroke="#E65527"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="hidden md:block border-2 border-[#F5E4E1] bg-[#FFEEE9] p-1 rounded-lg" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M9.62498 3.95831V14.375C9.62498 15.0744 9.62498 15.4241 9.50068 15.6962C9.36336 15.9971 9.12205 16.2384 8.82117 16.3757C8.54909 16.5 8.19939 16.5 7.49998 16.5C5.63489 16.5 4.70234 16.5 3.97679 16.1686C3.17445 15.8022 2.53108 15.1588 2.16466 14.3565C1.83331 13.6309 1.83331 12.6984 1.83331 10.8333V7.49998C1.83331 5.63489 1.83331 4.70234 2.16466 3.97679C2.53108 3.17445 3.17445 2.53108 3.97679 2.16466C4.70234 1.83331 5.63489 1.83331 7.49998 1.83331C8.19939 1.83331 8.54909 1.83331 8.82117 1.95757C9.12205 2.09498 9.36336 2.33624 9.50068 2.63712C9.62498 2.9092 9.62498 3.2589 9.62498 3.95831Z"
              stroke="#101010"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.72936 12.8333H5.72113"
              stroke="#101010"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.271 9.16669H16.2628"
              stroke="#101010"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.72919 5.04169V7.79169M4.35419 6.41669H7.10419"
              stroke="#101010"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.375 18.0417V7.625C12.375 6.92559 12.375 6.57588 12.4993 6.30381C12.6366 6.00293 12.8779 5.76166 13.1788 5.62425C13.4509 5.5 13.8006 5.5 14.5 5.5C16.3651 5.5 17.2976 5.5 18.0232 5.83135C18.8255 6.19777 19.4689 6.84114 19.8353 7.64348C20.1667 8.36903 20.1667 9.3016 20.1667 11.1667V14.5C20.1667 16.3651 20.1667 17.2976 19.8353 18.0232C19.4689 18.8255 18.8255 19.4689 18.0232 19.8353C17.2976 20.1667 16.3651 20.1667 14.5 20.1667C13.8006 20.1667 13.4509 20.1667 13.1788 20.0424C12.8779 19.905 12.6366 19.6638 12.4993 19.3628C12.375 19.0908 12.375 18.7411 12.375 18.0417Z"
              stroke="#101010"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.2708 16.9583V14.2083M17.6458 15.5833H14.8958"
              stroke="#101010"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class=" md:hidden block flex justify-center p-1 items-center cursor-pointer rounded border-2 border-[#F5E4E1] bg-[#FFEEE9]">
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
        {
          isMenuOpen ? <div onClick={toggleMenu}><FaTimes/></div> : <div className="border-2 bg-[#E7E7E7] p-1 rounded-lg"  onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M3.33301 4.16602H16.6663"
              stroke="#101010"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.33301 10H16.6663"
              stroke="#101010"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.33301 15.834H16.6663"
              stroke="#101010"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div> 
        }
          {isMenuOpen && (
        <div className="z-50 left-0 md:left-[79%] lg:left-[85%] absolute top-16 md:right-0 mt-2 max-w-[18rem] w-10/12 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <LeftSideBar/>
        </div>
      )}
      </div>
    </header>
  );
};

export default TopBar;
