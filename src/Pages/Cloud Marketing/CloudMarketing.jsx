import React from "react";
import Banner from "./Banner";
import NumberCompnent from "../../Component/NumberCompnent";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Contact from "../../Component/Contact";
import Section4 from "./Section4";
import BlueLinkButton from "../../Component/BlueLinkButton";
import Section5 from "./Section5";
import Faq from "./Faq";
import "./hotelpage.css";

const CloudMarketing = () => {
  const numberColClass = "col-lg-3 col-md-3 col-6";

  const data = [
    { number: "50", data: "L+", text: "revenue generated" },
    { number: "10", data: "K+", text: "booking achieved" },
    { number: "90", data: "%", text: "satisfaction rate" },
    { number: "10", data: "+", text: "years of experience" },
  ];
  return (
    <div>
      <Banner />
      <Section1 />

      <NumberCompnent
        containerClass="py-2"
        rowClass="justify-content-center my-lg-5 my-md-3 my-2"
        colClass={numberColClass}
        divClass="text-center"
        span1Class="text-black"
        span2Class="text-black"
        numberData={data}
      />
      <div className="text-center py-3">
        <BlueLinkButton className="px-5 text-capitalize rounded-5" url="#" text="Contact us" />
      </div>
      <Section2 />
      <Section4 />
      <Section5 />
      <Contact />
      <Faq />
    </div>
  );
};

export default CloudMarketing;
