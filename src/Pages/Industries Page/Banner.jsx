import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import BannerImg from "../../Assests/Marketing/briefing-staff-hotel-restaurant.png";

function Banner() {
  const heading =
    "Boost Your Business with Fielmente India's top Hospitality Marketing Services!";

  const data = [
    {
      text: "Attention savvy business owners! Release the true potential of your online presence with Fielmente, your go-to hospitality marketing services in India",
    },
    {
      text: "Let our experts empower your business with tailored strategies, setting new standards for success in the hospitality industry!",
    },
  ];

  const imgUrl = BannerImg;
  const Section = "web-dev-section pt-lg-5 pt-4";
  const container = "web-dev-section-banner";
  const rowClass = "";
  const colClass1 = "col-lg-6 col-md-6 col-12 p-lg-2 p-1 ";
  const colClass2 = "col-lg-6 col-md-6  col-12 p-2 d-flex align-items-center justify-content-center";

  // ---------------col-datat------------- //
  const colLeftData = (
    <>
      <div className="container px-2">
        <h1 className="text-uppercase clr-green-1 ff-p c-fw-4 banner-h1-md">our hospitality marketing services</h1>
        <h2 className="mb-2 mb-md-3 mb-lg-4 text-clr-gray5 banner-h1-lg ff-p c-fw-6">{heading}</h2>
      </div>
      <div className="container px-lg-2 p-1">
        {data.map((item, i) => (
          <p className="mb-2 mb-md-3 mb-lg-4 p-text-lg ff-p c-fw-4 text-clr-scorpion" key={i}>
            {item.text}
          </p>
        ))}
      </div>
    </>
  );

  const ColRightData = (
    <div className="img-div">
      <img src={imgUrl} className="img-fluid rounded-4" alt="banner-img" />
    </div>
  );

  return (
    <header>
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
