import appleImg from "@/app/assets/images/apple.png"
import { paragraphs } from "@/app/data/paragraphs";
import Image from "next/image";
import Paragraph from "./Paragraph";
const Featured = () => {
    const [,,,paragraph4] = paragraphs;

    return (
        <div className="flex md:flex-row flex-col md:items-center mt-10 md:gap-10">
            <div className="md:w-1/2">
                <Image src={appleImg} className="w-full md:h-auto sm:h-[16rem] h-[10rem]" alt="featured-image"/>
            </div>
            <div className="md:w-1/2 mt-10">
                <Paragraph paragraph={paragraph4}/>
            </div>
        </div>
    );
};

export default Featured;