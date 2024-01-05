import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import WhiteLinkButton from "../../Component/WhiteLinkButton";
import BannerImg from "../../Assests/social-media/portrait-smiling-waitress-welcoming.png";
import "./webDev.css";

function Banner() {
  const heading =
    "Revolutionize Your Business with Fielmente, the Hospitality SEO Agency that Unleashes True Potential!";
  const pText =
    "At Fielmente, our expertise lies in crafting hospitality social media marketing campaigns and content with a remarkable ROI, elevating brand visibility, nurturing customer relationships, and driving sales like never before.";
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
