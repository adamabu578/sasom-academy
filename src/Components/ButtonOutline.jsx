import React from "react";

const ButtonOutline = ({ title }) => {
  return (
    <div>
      <button className="px-4 py-5 text-sm text-primary rounded-lg hover:text-white transition ease-in border-primary border">
        {title}
      </button>
    </div>
  );
};

export default ButtonOutline;
