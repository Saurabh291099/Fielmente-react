import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/industries-we-serve/asset-5.png";

function Section1() {
  const Section = "web-dev-section-1";
  const containerClass = "py-lg-5 ";
  const rowClass = "";
  const colClass1 = "col-lg-5 col-md-5 col-sm-12 d-flex align-items-center";
  const colClass2 = "col-lg-7 col-md-7 col-sm-12 p-2";
  const question = "Why is a Website Important for Your HospitalityBusiness?";
  const ans = `In today’s digital era, a captivating website from a top-notch hospitality website development agency is the key to unlocking your business’s full potential. It’s the virtual gateway that entices customers, elevates credibility, and drives remarkable success!`;
  // col - data ---------
  const colLeftData = (
    <>
      <div className="col-1-img-div">
        <img src={Img3} alt="hotel-img" />
      </div>
    </>
  );

  const ColRightData = (
    <>
      <div>
        <h2 className="text-center text-lg-start text-md-start text-white">{question}</h2>
        <p className="text-center text-lg-start text-md-start text-white">{ans}</p>
      </div>
    </>
  );

  return (
    <>
      <TwoColumn
        Section={Section}
        containerClass={containerClass}
        rowClass={rowClass}
        colClass1={colClass1}
        colClass2={colClass2}
        colLeftData={colLeftData}
        ColRightData={ColRightData}
      />
    </>
  );
}

export default Section1;
