import React from "react";

const KeyCard = ({ icon, title, description }) => {
  return (
    <article className="md:w-[300px] xl:w-[320px] h-[320px] px-[30px] py-[32px] rounded-lg border-[#002933] border">
      <div className="w-[65px] h-[65px] bg-primary bg-opacity-10 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <h2 className="text-lg mb-2 text-[#002933]">{title}</h2>
      <p className="text-sm">{description}</p>
    </article>
  );
};

export default KeyCard;
