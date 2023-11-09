import React from "react";

const Paragraph = ({ paragraph }) => {
  return (
    <div>
      <h4 className="capitalize text-lg font-bold mb-2 text-[#212121]">{paragraph.title}</h4>
      <p className="leading-6 text-sm ">{paragraph.description}</p>
    </div>
  );
};

export default Paragraph;
