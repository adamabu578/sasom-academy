import React from "react";
import AboutFaq from "./../Components/AboutFaq";
import FAQBody from "../Components/FAQBody";

const Faq = () => {
  return (
    <div>
      <AboutFaq
        heading="Frequently Asked Questions"
        details="To provide you with more information about Sasom Academy, we've put together the following frequently asked questions (FAQs)."
      />
      <FAQBody />
    </div>
  );
};

export default Faq;
