import React from "react";
import Button from "./Button";
import HeroImage from "../assets/lady-with-books.png";

const Hero = () => {
  return (
    <header className="md:h-[600px] bg-white  w-full px-5 py-0 md:px-20 bg-opacity-40 flex md:justify-between flex-col md:flex-row items-center">
      <section className="md:mt-10 md:w-[550px]">
        <h1 className="text-4xl leading-normal  font-semiBold text-black mb-5">
          Acquire the skills you need for a $100k+ tech career in just{" "}
          <span className="text-primary">3 months.</span>
        </h1>
        <p className="text-sm">
          Acquire the 21st century skills so as to improve your relevance and
          employability in this ever changing world.
        </p>
        <div className="mt-5">
          <Button title="Get Started" />
        </div>
      </section>
      <section className="relative w-[300px] md:w-[600px] overflow-hidden md:h-[600px] h-[500px] flex items-center justify-center">
        <div className="lg:mr-10  mb-[150px] lg:mb-0 h-[700px] w-[100px] md:w-[170px] bg-primary rotate-[65deg] lg:rotate-[20deg]"></div>
        <div className="h-[700px] w-[100px] md:w-[170px] bg-sasomRed rotate-[65deg] lg:rotate-[20deg]"></div>
        <img
          className="absolute -right-5 lg:bottom-0 lg:h-[550px] h-[400px]"
          src={HeroImage}
          alt="a lady holding pile of books"
        />
      </section>
    </header>
  );
};

export default Hero;
