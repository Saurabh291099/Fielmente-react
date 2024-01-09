import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img4 from "../../Assests/seo/bellboy-hotel 3.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";

function Section2() {
  const Section = "";
  const containerClass = "";
  const rowClass = "";
  const colClass1 = "col-lg-7 col-md-7 col-12";
  const colClass2 = "col-lg-5 col-md-5 col-12";

  const heading = "Driving Success Through Revenue - Focused SEO Strategies.";
  const text =
    "Fielmente understands it’s about RESULTS, not just rankings. Our hospitality SEO Agency in India drives increased organic traffic, ensuring substantial revenue growth. Partner with us for unparalleled success!";
  //   col-data-----
  const colLeftData = (
    <>
      <div className="container text-center text-lg-start text-md-start my-4">
        <h2 className="text-white">{heading}</h2>
      </div>
      <div className="text-center text-lg-start text-md-start">
        <p className="text-white">{text}</p>
      </div>
      <div className="mt-lg-1 mt-md-3 mt-0 text-center text-lg-start text-md-start">
        <WhiteLinkButton url="#" text="get started" />
      </div>
    </>
  );
  const ColRightData = (
    <div className="web-dev-section-2-img mt-3 mt-lg-0 mt-md-0">
      <img
        src={Img4}
        className="img-fluid"
        alt="happy-young-receptionist-modern-hotel"
      />
    </div>
  );

  return (
    <div className="web-dev-section-1">
      <TwoColumn
        Section={Section}
        containerClass={containerClass}
        rowClass={rowClass}
        colClass1={colClass1}
        colClass2={colClass2}
        colLeftData={colLeftData}
        ColRightData={ColRightData}
      />
    </div>
  );
}

export default Section2;
