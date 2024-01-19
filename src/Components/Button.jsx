import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="px-4 py-5 text-sm bg-sasomBlue hover:bg-opacity-70 text-white rounded-lg">
        {title}
      </button>
    </div>
  );
};

export default Button;
