import React from "react";
import AboutFaq from "../Components/AboutFaq";
import AboutBody from "../Components/AboutBody";

const About = () => {
  return (
    <div className="">
      <AboutFaq
        heading="About"
        details="We are nurturing tech professionals of the highest caliber, creating innovative solutions to solve problems, and assisting you in turning your dreams into reality."
      />
      <AboutBody />
    </div>
  );
};

export default About;
