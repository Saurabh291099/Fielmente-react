import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import BannerImg from "../../Assests/service/profesional-waiter-restaurant 2.png";

function Banner() {
  const heading2 = `Want to Skyrocket Your Business with
  #1 Hotel Marketing Agency?`;
  const heading1 = "SERVICES AS A HOTEL MARKETING AGENCY";
  const pText = `If you are looking for a well-rooted Hotel Advertisement Company or Hotel Markting Agency in India, you will always find Fielmente standing near you with our targeted, site-specific programs to boost your marketing strategies.
  With our expert guidance, our Hotel Marketing professionals work together with your Hotel to drive massive revenue to your.`;
  const linkText = "know more";
  const url = "#";
  const imgUrl = BannerImg;
  const Section = "web-dev-section pt-lg-5 pt-4";
  const container = "web-dev-section-banner";
  const rowClass = "";
  const colClass1 = "col-lg-6 col-md-6 col-12 p-lg-2 p-1";
  const colClass2 = "col-lg-6 col-md-6  col-12 p-2 d-flex align-items-center justify-content-center";

  // ---------------col-datat------------- //
  const colLeftData = (
    <>
      <div className="container px-2">
        <h1 className="mb-4 banner-h1-lg ff-p c-fw-6 text-clr-gray5">{heading2}</h1>
      </div>
      <div className="container px-lg-2 p-1">
        <p className="mb-4 p-text-lg ff-p c-fw-4 text-clr-scorpion">{pText}</p>
      </div>
    </>
  );

  const ColRightData = (
    <div className="img-div">
      <img src={imgUrl} className="img-fluid rounded-4" alt="banner-img" />
    </div>
  );

  return (
    <header className="pt-5">
      <div className="container text-center">
        <h2 className=" banner-h1-md ff-p c-fw-4 clr-green-1">{heading1}</h2>
      </div>
      <TwoColumn
        Section={Section}
        containerClass={container}
        rowClass={rowClass}
        colClass1={colClass1}
        colClass2={colClass2}
        colLeftData={colLeftData}
        ColRightData={ColRightData}
      />
    </header>
  );
}

export default Banner;
