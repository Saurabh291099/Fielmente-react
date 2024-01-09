import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import BannerImg from "../../Assests/ourteam/evi.png.png";

function Banner() {
  const heading = "Our team";
  const secondHeading = "Lorem ipsum dolor sit amet sectetur.";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const Section = "our-team-banner";
  const containerClass = "mt-4";
  const rowClass = "p-1";
  const colClass1 = "col-lg-6 col-md-6 col-12 p-2";
  const colClass2 = "col-lg-6 col-md-6 col-12 p-2 d-flex align-items-center justify-content-center";
  const colLeftData = (
    <>
      <h1 className="ot-banner-heading text-lg-start text-md-start text-center">{heading}</h1>
      <h2>{secondHeading}</h2>
      <p className="mb-1">{description}</p>
    </>
  );
  const ColRightData = (
    <div className="our-team-banner-img">
      <img src={BannerImg} className="img-fluid" alt="banner-img" />
    </div>
  );
  // const styleColLeft=""
  // const styleColRight=""

  return (
    <header className="py-lg-5 py-md-3 py-1">
      <TwoColumn
        Section={Section}
        containerClass={containerClass}
        rowClass={rowClass}
        colClass1={colClass1}
        colClass2={colClass2}
        colLeftData={colLeftData}
        ColRightData={ColRightData}
        // styleColLeft={Section}
        // styleColRight={Section}
      />
    </header>
  );
}

export default Banner;
