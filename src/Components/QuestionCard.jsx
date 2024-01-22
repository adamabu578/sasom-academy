import React, { useState } from "react";

const QuestionCard = ({ que, ans }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    // onCLick();
    setShow(!show);
  };

  return (
    <div
      onClick={handleShow}
      className="w-[300px]sm:w-[500px] md:w-[600px] lg:w-[700px] p-4 border-[1px] rounded-lg border-primary mb-3"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm sm:text-lg">{que}</h3>
        {show ? (
          <svg
            className="cursor-pointer"
            onClick={handleShow}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="cursor-pointer"
            onClick={handleShow}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15L16 11H8L12 15ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z"
              fill="#009EC5"
            />
          </svg>
        )}
      </div>
      {show && <p className="text-sasomBlue mt-5">{ans}</p>}
    </div>
  );
};

export default QuestionCard;
