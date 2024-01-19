import React from "react";

const CourseCard = ({ image, title, details, price }) => {
  return (
    <div className="w-[300px] ">
      <div className="h-[130px] mb-5 rounded-xl overflow-hidden">
        <img src={image} height={"100%"} alt="display icon" />
      </div>
      <h2 className="mb-2 text-xl font-">{title}</h2>
      <p className="text-sm text-[#777777]">{details}</p>
      <p className="my-3 font-semibold">{price}</p>
      <p className="text-sasomRed hover:cursor-pointer">Learn more</p>
    </div>
  );
};

export default CourseCard;
