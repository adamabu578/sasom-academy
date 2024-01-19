import React from "react";

const Ratings = () => {
  return (
    <div className="mt-10 md:mt-0 bg-primary text-white w-full px-5 py-16 md:px-20 flex flex-col items-center justify-center">
      <h2 className="lg:max-w-[600px] text-center mb-10">
        Graduates of the Sasom program secure employment. We've assisted
        numerous students in achieving their career aspirations.
      </h2>
      <div className="flex gap-10 sm:flex-wrap sm:flex-row flex-col items-center sm:items-start">
        <RatingBox
          title={"4"}
          details="MILLION
TECH JOB OPENINGS BY 2032 (BLS.GOV)"
        />
        <RatingBox title="4.5" details="STUDENT STAR RATING" />
        <RatingBox
          title="90%"
          details="JOB SUCCESS RATE - AMONG 2020 FULL-TIME WEB DEV GRADS"
        />
      </div>
    </div>
  );
};

export default Ratings;

function RatingBox({ title, details }) {
  return (
    <div className="p-5 text-center w-[250px] h-[130px] border-white border-2 rounded-lg">
      <h2 className="font-semibold mb-3">{title}</h2>
      <p className="text-sm">{details}</p>
    </div>
  );
}
