import React from "react";

const AboutFaq = ({ heading, details }) => {
  return (
    <div>
      <div className="h-[334px] bg-gradient text-white flex flex-col items-center justify-center md:px-20 px-5">
        <h1 className="font-bold text-2xl mb-5 text-center">{heading}</h1>
        <p className="max-w-[800px] text-center">{details}</p>
      </div>
    </div>
  );
};

export default AboutFaq;
