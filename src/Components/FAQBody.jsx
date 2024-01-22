import React from "react";
import QuestionCard from "./QuestionCard";

const FAQBody = () => {
  const faqs = [
    {
      question:
        "Is it necessary for me to be physically there in person to sign up?",
      answer:
        "Our platform has be made easy to interract with for signing up at your conmfort ",
    },

    {
      question: "Are the classes conducted online or in person?",
      answer: "Classes are conducted online",
    },

    {
      question: "How long does the program last?",
      answer:
        "Our average program last for 3months after which you get a month project and internship. Success in the final part entitles you to our certificate",
    },

    {
      question: "Am I eligible to enroll as an undergraduate student?",
      answer:
        "Yes, our lecturers courses are tailored to help all background flow seemlessly in tech ",
    },

    {
      question: "What course is right for me?",
      answer:
        "Our product catalogue has courses that are tailored towards your neeeds. You can take a survey on the",
    },

    {
      question: "What course is right for me?",
      answer:
        "Our product catalogue has courses that are tailored towards your neeeds. You can take a survey on the",
    },

    {
      question: "What course is right for me?",
      answer:
        "Our product catalogue has courses that are tailored towards your neeeds. You can take a survey on the",
    },

    {
      question: "What course is right for me?",
      answer:
        "Our product catalogue has courses that are tailored towards your neeeds. You can take a survey on the",
    },

    {
      question: "What course is right for me?",
      answer:
        "Our product catalogue has courses that are tailored towards your neeeds. You can take a survey on the",
    },

    {
      question: "What course is right for me?",
      answer:
        "Our product catalogue has courses that are tailored towards your neeeds. You can take a survey on the",
    },

    {
      question: "What course is right for me?",
      answer:
        "Our product catalogue has courses that are tailored towards your neeeds. You can take a survey on the",
    },

    {
      question: "What course is right for me?",
      answer:
        "Our product catalogue has courses that are tailored towards your neeeds. You can take a survey on the",
    },

    {
      question: "What course is right for me?",
      answer:
        "Our product catalogue has courses that are tailored towards your neeeds. You can take a survey on the",
    },

    {
      question: "What course is right for me?",
      answer:
        "Our product catalogue has courses that are tailored towards your neeeds. You can take a survey on the",
    },
  ];

  return (
    <div className="mt-24 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-5">FAQS</h2>
        <div className="flex gap-10">
          <p className="p-4 border-[1px] rounded-lg border-primary">General</p>
          <p className="p-4 border-[1px] rounded-lg border-primary">
            Registration
          </p>
          <p className="p-4 border-[1px] rounded-lg border-primary">Training</p>
        </div>
      </div>
      <div className="mt-5">
        {faqs.map((ques, index) => (
          <QuestionCard key={index} que={ques.question} ans={ques.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQBody;
