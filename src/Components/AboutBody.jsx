import React from "react";
import ValuesComponent from "./ValuesComponent";

const AboutBody = () => {
  return (
    <div className="md:px-20 px-5 mt-10">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="">
          <h2 className="text-xl font-semibold text-darkGreen mb-2">
            About Sasom
          </h2>
          <p>
            Sasom is a software development company rooted in African heritage,
            founded with the vision of emerging as a leading brand in innovative
            world-class solutions and the delivery of cutting-edge technology.
            Our team comprises distinguished, highly skilled, and innovative
            tech experts with extensive experience.
          </p>
          <p>
            Registered with the Corporate Affairs Commission of the Federal
            Republic of Nigeria under the Companies and Allied Matters Act 2020,
            Sasom is the preferred partner for numerous global enterprises,
            SMEs, and technology firms. We specialize in enhancing business
            value through tailored software development, product design, quality
            assurance, and consultancy services. Our expertise extends to
            maintaining and modernizing IT infrastructure, addressing various
            infrastructure-related challenges businesses may encounter.
          </p>
          <p>
            SASOM also conducts immersive software development boot camps,
            ushering in a new era of indigenous software developers propelling
            innovation in the information and technology industry. This
            training, facilitated by industry veterans, incorporates quality
            practical sessions and online resources within a collaborative,
            challenging environment, inspiring and shaping interns into
            proficient tech experts.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-darkGreen mb-2">
            Our Core Values
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <ValuesComponent heading="Passion" />
            <ValuesComponent heading="Creativity" />
            <ValuesComponent heading="Quality" />
            <ValuesComponent heading="Teamwork" />
            <ValuesComponent heading="Innovation" />
            <ValuesComponent heading="Commitment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
