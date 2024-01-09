import React from "react";
import Banner from "./Banner";
import "./industries.css";
import NumberCompnent from "../../Component/NumberCompnent";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Contact from "../../Component/Contact";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

const Industry = () => {
  const numberColClass = "col-lg-3 col-md-3 col-6";

  const data = [
    { number: "25", data: "M+", text: "Impressions" },
    { number: "15", data: "CR+", text: "REVENUE GENRATED" },
    { number: "88", data: "%", text: "CLIENT SATISFACTION" },
    { number: "120", data: "+", text: "RESTAURANTS" },
  ];
  return (
    <div>
      <div className="container web-dev">
        <Banner />
      </div>
      <Section4 />
      <Section1 />
      <Section2 />
      <Section3 />
      <NumberCompnent
          containerClass="py-2"
          rowClass="justify-content-center my-lg-5 my-md-3 my-2"
          colClass={numberColClass}
          divClass="text-center"
          span1Class="text-black"
          span2Class="text-black"
          numberData={data}
        />
      <Section5 />
      <Section6 />
      <Contact />
    </div>
  );
};

export default Industry;
