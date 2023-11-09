import { paragraphs } from "@/app/data/data";
import React from "react";
import Paragraph from "./Paragraph";
import Image from "next/image";
import heroImage from "../../../../assets/images/heroImg.png";
const [paragraph1, paragraph2] = paragraphs;
const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between gap-8 mb-10">
      <div className="md:w-1/2">
        <h1 className="text-[2.37rem] text-[#212121] leading-[130%] font-[900] capitalize mb-5">
          Health benefits of an avocado
        </h1>
        <div className="mb-5">
          <Paragraph paragraph={paragraph1} />
        </div>
        <Paragraph paragraph={paragraph2} />
      </div>
      <div className="md:w-1/2">
        <Image src={heroImage} alt="Hero Image" className="w-full md:h-auto sm:h-[18rem] h-[10rem]"/>
      </div>
    </div>
  );
};

export default Hero;
