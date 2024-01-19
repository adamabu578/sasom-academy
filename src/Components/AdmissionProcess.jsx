import React from "react";
import AdmissionCard from "./AdmissionCard";

const AdmissionProcess = () => {
  return (
    <div className="flex items-center flex-col px-5 md:px-20 mt-20">
      <h1 className="mb-5 text-lg self-start font-semibold">
        How the Admission Process Works
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <AdmissionCard
          index="1"
          heading="Admission Submission"
          details="Aspiring candidates initiate the process by filling out and submitting the online application form. Please ensure that all personal details, educational history, and program preferences are accurately supplied."
          answer1="It is fast"
          answer2="Easy to get into and complete"
        />
        <AdmissionCard
          index="2"
          heading="Application Review"
          details="Our admissions team meticulously evaluates every application to determine eligibility and compatibility with the selected program. Academic credentials, any previous experience in technology, and the candidate's statement of interest are taken into account at this stage"
          answer1="We verify all provided information."
          answer2="Verify and provide guidance if necessary"
        />
        <AdmissionCard
          index="3"
          heading="Interview Assessment"
          details="People who make it to the shortlist will be asked to come for an interview or test. This is a chance to talk about why they want to join the program and to see if it's a good fit. It helps us learn more about the person's goals and how dedicated they are to learning."
          answer1="The interview is virtual"
          answer2="We advise on what next if need be"
        />
        <AdmissionCard
          index="4"
          heading="Confirmation & Enrollment"
          details="People who are accepted get a letter telling them what to do next, like how to pay and special details about the program. Once they finish signing up, they can use class materials, mentor programs, and other things to officially start learning at Sasom Academy."
          answer1="Get your course brochure"
          answer2="Start your training"
        />
      </div>
    </div>
  );
};

export default AdmissionProcess;
