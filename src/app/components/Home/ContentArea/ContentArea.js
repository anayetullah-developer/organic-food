import React from "react";
import Hero from "./Components/Hero";
import Paragraph from "./Components/Paragraph";
import { paragraphs } from "@/app/data/data";
import Featured from "./Components/Featured";
import Rating from "./Components/Rating";
import MobileSidebar from "./Components/MobileSideBar";

const ContentArea = () => {
  const [, , paragraph3] = paragraphs;

  return (
    <main className="flex bg-white md:w-3/5 flex-grow p-5 rounded-lg">
      <div className="hidden md:flex flex-col gap-5 pr-6 py-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
        >
          <path
            d="M0.763184 14C0.763184 21.732 7.0312 28 14.7632 28C22.4952 28 28.7632 21.732 28.7632 14C28.7632 6.26801 22.4952 0 14.7632 0C7.0312 0 0.763184 6.26801 0.763184 14Z"
            fill="#1877F2"
          />
          <path
            d="M21.7632 14C21.7632 10.15 18.6132 7 14.7632 7C10.9132 7 7.76318 10.15 7.76318 14C7.76318 17.5 10.3007 20.3875 13.6257 20.9125V16.0125H11.8757V14H13.6257V12.425C13.6257 10.675 14.6757 9.7125 16.2507 9.7125C17.0382 9.7125 17.8257 9.8875 17.8257 9.8875V11.6375H16.9507C16.0757 11.6375 15.8132 12.1625 15.8132 12.6875V14H17.7382L17.3882 16.0125H15.7257V21C19.2257 20.475 21.7632 17.5 21.7632 14Z"
            fill="white"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
        >
          <path
            d="M0.763184 14C0.763184 21.732 7.0312 28 14.7632 28C22.4952 28 28.7632 21.732 28.7632 14C28.7632 6.26801 22.4952 0 14.7632 0C7.0312 0 0.763184 6.26801 0.763184 14Z"
            fill="#2867B2"
          />
          <path
            d="M10.9132 21H7.93818V11.6375H10.9132V21ZM9.42568 10.325C8.46318 10.325 7.76318 9.625 7.76318 8.6625C7.76318 7.7 8.55068 7 9.42568 7C10.3882 7 11.0882 7.7 11.0882 8.6625C11.0882 9.625 10.3882 10.325 9.42568 10.325ZM21.7632 21H18.7882V15.925C18.7882 14.4375 18.1757 14 17.3007 14C16.4257 14 15.5507 14.7 15.5507 16.0125V21H12.5757V11.6375H15.3757V12.95C15.6382 12.3375 16.6882 11.375 18.1757 11.375C19.8382 11.375 21.5882 12.3375 21.5882 15.225V21H21.7632Z"
            fill="white"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
        >
          <path
            d="M0.763184 14C0.763184 21.732 7.0312 28 14.7632 28C22.4952 28 28.7632 21.732 28.7632 14C28.7632 6.26801 22.4952 0 14.7632 0C7.0312 0 0.763184 6.26801 0.763184 14Z"
            fill="#1DA1F2"
          />
          <path
            d="M21.7632 9.625C21.2382 9.8875 20.7132 9.975 20.1007 10.0625C20.7132 9.7125 21.1507 9.1875 21.3257 8.4875C20.8007 8.8375 20.1882 9.0125 19.4882 9.1875C18.9632 8.6625 18.1757 8.3125 17.3882 8.3125C15.5507 8.3125 14.1507 10.0625 14.5882 11.8125C12.2257 11.725 10.1257 10.5875 8.63818 8.8375C7.85068 10.15 8.28818 11.8125 9.51318 12.6875C9.07568 12.6875 8.63818 12.5125 8.20068 12.3375C8.20068 13.65 9.16318 14.875 10.4757 15.225C10.0382 15.3125 9.60068 15.4 9.16318 15.3125C9.51318 16.45 10.5632 17.325 11.8757 17.325C10.8257 18.1125 9.25068 18.55 7.76318 18.375C9.07568 19.1625 10.5632 19.6875 12.1382 19.6875C17.4757 19.6875 20.4507 15.225 20.2757 11.1125C20.8882 10.7625 21.4132 10.2375 21.7632 9.625Z"
            fill="white"
          />
        </svg>
      </div>
      <div>
        <Hero />
        <Paragraph paragraph={paragraph3} />
        <Featured />
        <div>
          <Rating/>
        </div>
      </div>
    </main>
  );
};

export default ContentArea;
