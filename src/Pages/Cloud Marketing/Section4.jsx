import React from "react";

import TwoColumn from "../../Component/TwoColumn";
import Img7 from "../../Assests/service/asset 9.png";
import BlueLinkButton from "../../Component/BlueLinkButton";

function Section4() {
  const heading = "Why does your hotel need to have social media presence?";
  const description1 =
    "Boost guest engagement and attract potential guests with an impactful social media presence, customized by Fielmente, a renowned hotel marketing agency in India.";
  const description2 =
    "Partner with Fielmente’s expert team to elevate your brand and dominate the digital landscape. Embrace your potential today.";
  const Section = "web-dev-section-3 py-lg-4";
  const containerClass = "my-4";
  const rowClass = "px-lg-5";
  const colClass1 = "col-lg-5 col-md-5 col-12 d-flex align-items-center justify-content-center";
  const colClass2 = "col-lg-7 col-md-7 col-12 p-lg-4 p-2";
  const colLeftData = (
    <div className="web-dev-section-3-img-div " >
      <img src={Img7} className="img-fluid " alt="avatar" style={{ height: "35rem" }}/>
    </div>
  );
  const ColRightData = (
    <div>
      <h2 className="h2-lg ff-p c-fw-6 text-gray5">{heading}</h2>

      <p className="c-fw-4 ff-p p-text-lg">{description1}</p>
      <p className="mt-lg-5 c-fw-4 ff-p p-text-lg mt-2">{description2}</p>
      <div className="text-center">
      <BlueLinkButton
          className="px-5 text-capitalize rounded-5"
          to="#"
          text="Connect with Our Experts"
        />
        
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
      <div className="text-center py-2">
        <BlueLinkButton to="#" text="contact us" className="px-5 text-capitalize rounded-5" />
      </div>
    </div>
  );
}

export default Section4;
