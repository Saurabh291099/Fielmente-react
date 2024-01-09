import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img4 from "../../Assests/pad-ads/market-research-statistics-graphs-laptop-screen-start-up-company-business-office-employee-analyzing-financial-performance-chart-metrics-portable-computer-coworking-space 1.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";

function Section2() {
  const Section = "";
  const containerClass = "";
  const rowClass = "";
  const colClass1 = "col-lg-7 col-md-7 col-12";
  const colClass2 = "col-lg-5 col-md-5 col-12";

  const heading = `Success Stories and Clientele; Experience the Power of Google Ads.`;
  const text =
  "At Fielmente, we pride ourselves on success stories that showcase the unparalleled power of Google Ads. Our clientele has experienced extraordinary results, with increased brand visibility, targeted traffic, and amplified conversions. With our expertise as a top hospitality Google Ads agency, we help businesses across India soar to new heights, creating a trail of satisfied clients who have witnessed the true impact of effective online advertising. Partner with us and become the next success story in the world of digital advertising";
  //   col-data-----
  const colLeftData = (
    <>
      <div className="container text-center text-md-start text-lg-start my-4">
        <h2 className="text-white">{heading}</h2>
      </div>
      <div className="text-center text-lg-start text-md-start">
        <p className="text-white">{text}</p>
      </div>
      <div className="mt-lg-5 mt-md-3 mt-0 text-center text-lg-start text-md-start">
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
