import React from "react";

import TwoColumn from "../../Component/TwoColumn";
import Img7 from "../../Assests/pad-ads/portrait-male-receptionist-hotel 2.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";
import Img8 from "../../Assests/industries-we-serve/asset-14.png";

function Section5() {
  const heading = "Expert Consultation : Unlocking Your Advertising Potential.";
  const description1 ="Unleash Your Business’s Full Potential. Get a Website Audit and Expert Advice from Our Seasoned Google Ads Professionals.";
  const description2 ="Partner with Fielmente’s expert team to elevate your brand and dominate the digital landscape. Embrace your potential today."
  const Section = "paid-ads-section-3 py-lg-4";
  const containerClass = "my-lg-4 my-md-2 my-1";
  const rowClass = "px-lg-5";
  const colClass1 = "col-lg-5 col-md-5 col-12 d-flex align-items-center";
  const colClass2 = "col-lg-7 col-md-7 col-12 p-lg-4 p-2";
  const colLeftData = (
    <div className="web-dev-section-3-img-div " style={{ height: "auto" }}>
      <img src={Img7} className="img-fluid " alt="avatar" />
    </div>
  );
  const ColRightData = (
    <div>
      <h2 className="text-white ff-p c-fw-6 h2-lg">{heading}</h2>

      <p className="text-white p-text-lg ff-p c-fw-4">{description1}</p>
      <img src={Img8} alt="avtar" />
      <p className="mt-lg-5 mt-2 text-white p-text-lg ff-p c-fw-4">{description2}</p>
      <div className="text-center">
        <WhiteLinkButton url="#" text="Connect with Our Experts" />
      </div>
    </div>
  );
  return (
    <div>
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

export default Section5;
