import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import WhiteLinkButton from "../../Component/WhiteLinkButton";
import BannerImg from "../../Assests/pad-ads/portrait-shows-group-hotel-employees-posing-collectively-hotel-generate-ai 1.png";
import "./webDev.css";

function Banner() {
  const heading =
    "Ignite Your Hospitality Growth with Leading Hospitality Google Ads Agency.";
  const pText =
    "Experience the magic of Fielmente, the leading hospitality Google Ads agency in India. Our expertly crafted campaigns ensure your hotel, restaurant, or resort shines in the digital arena, delivering remarkable results. Trust the best in the industry, partner with Fielmente’s Google Ads agency, and witness your business soar to unprecedented heights through targeted advertising. Let your brand captivate, engage, and thrive with our specialized expertise in the hospitality sector. Unleash the full potential of your business – choose Fielmente today!";
  const linkText = "know more";
  const url = "#";
  const imgUrl = BannerImg;
  const Section = "web-dev-section pt-lg-5 pt-4";
  const container = "web-dev-section-banner";
  const rowClass = "";
  const colClass1 =
    "col-lg-6 col-md-6 col-12 p-lg-2 p-1 bg-eigengrau rounded-4";
  const colClass2 = "col-lg-6 col-md-6  col-12 p-2";

  // ---------------col-datat------------- //
  const colLeftData = (
    <>
      <div className="container px-2">
        <h1 className="mb-4">{heading}</h1>
      </div>
      <div className="container px-lg-2 p-1">
        <p className="mb-4">{pText}</p>
        <div className="text-center">
          <WhiteLinkButton url={url} text={linkText} />
        </div>
      </div>
    </>
  );

  const ColRightData = (
    <div className="img-div">
      <img src={imgUrl} className="d-block w-100 rounded-4" alt="banner-img" />
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
