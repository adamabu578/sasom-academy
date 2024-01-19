import React from "react";
import CourseCard from "./CourseCard";
import frontend from "../assets/frontend-dev.png";
import productDesign from "../assets/product-design.jpeg";
import backend from "../assets/backend-dev.jpeg";
import mobileApp from "../assets/mobile-dev.jpeg";
import productManagement from "../assets/product-management.png";
import machineLearning from "../assets/machine-learning.jpeg";
import dataAnalyst from "../assets/data-analysis.jpeg";
import digitalMarketting from "../assets/digital-marketing.png";

const Courses = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-4 font-semibold">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        <CourseCard
          image={frontend}
          title="Frontend Development"
          details="Product design is a diverse domain encompassing the creation and enhancement of products to meet both user requirements and business objectives. "
          price="₦500,000"
        />
        <CourseCard
          image={productDesign}
          title="Product Design"
          details="Product design is a diverse domain encompassing the creation and enhancement of products to meet both user requirements and business objectives. "
          price="₦500,000"
        />
        <CourseCard
          image={backend}
          title="Backend Development"
          details="Product design is a diverse domain encompassing the creation and enhancement of products to meet both user requirements and business objectives. "
          price="₦500,000"
        />
        <CourseCard
          image={mobileApp}
          title="Mobile App Development"
          details="Product design is a diverse domain encompassing the creation and enhancement of products to meet both user requirements and business objectives. "
          price="₦500,000"
        />
        <CourseCard
          image={productManagement}
          title="Product Management"
          details="Product design is a diverse domain encompassing the creation and enhancement of products to meet both user requirements and business objectives. "
          price="₦500,000"
        />
        <CourseCard
          image={machineLearning}
          title="Machine Learning with Python"
          details="Product design is a diverse domain encompassing the creation and enhancement of products to meet both user requirements and business objectives. "
          price="₦500,000"
        />
        <CourseCard
          image={dataAnalyst}
          title="Data Analysis"
          details="Product design is a diverse domain encompassing the creation and enhancement of products to meet both user requirements and business objectives. "
          price="₦500,000"
        />
        <CourseCard
          image={digitalMarketting}
          title="Digital Marketing"
          details="Product design is a diverse domain encompassing the creation and enhancement of products to meet both user requirements and business objectives. "
          price="₦500,000"
        />
      </div>
      <button className="bg-sasomRed text-white rounded-xl p-4 mt-8">
        Register Now
      </button>
    </div>
  );
};

export default Courses;
