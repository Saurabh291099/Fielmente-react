import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img5 from "../../Assests/industries-we-serve/asset-7.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";

function Section3() {
  const heading = "Driving Success Through Mind-blowing UI";
  const data = [
    {
      description:
        "At Fielmente, we understand that real success goes beyond rankings – it’s about RESULTS.",
    },

    {
      description:
        "Our approach, as a leading hospitality website development agency in India, focuses on maximizing your ROI by converting organic traffic into tangible revenue growth. Let’s join forces for unparalleled achievements!",
    },
  ];
  const Section = "web-dev-section-3 py-lg-4";
  const containerClass = "my-4";
  const rowClass = "px-lg-5";
  const colClass1 = "col-lg-5 col-md-5 col-12 p-1";
  const colClass2 = "col-lg-7 col-md-7 col-12 p-lg-4";
  const colLeftData = (
    <div className="web-dev-section-3-img-div " style={{ height: "35rem" }}>
      <img src={Img5} className="rounded-4" alt="room-img" />
    </div>
  );
  const ColRightData = (
    <div>
      <h2>{heading}</h2>
      {data.map((item, i) => (
        <p key={i}>{item.description}</p>
      ))}
      <WhiteLinkButton url="#" text="get started"/>
    </div>
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

export default Section3;
