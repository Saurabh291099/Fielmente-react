import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import WhiteLinkButton from "../../Component/WhiteLinkButton";
import BannerImg from "../../Assests/seo/exterior-hotel-resort-with-swimming-pool-sun-loungers 5.png";

function Banner() {
  const heading =
    "Revolutionize Your Business with Fielmente, the Hospitality SEO Agency that Unleashes True Potential!";
  const data = [
    {
      pText:
        "Fielmente, India’s premier Hospitality SEO Agency, where success awaits! Boost your online presence and skyrocket revenue with our cutting-edge strategies.",
    },
    {
      pText:
        "Embrace the full potential of your business with personalized solutions tailored for the hospitality industry. Welcome to a new era of growth and prosperity!",
    },
  ];
  const linkText = "know more";
  const url = "#";
  const imgUrl = BannerImg;
  const Section = "seo-section pt-lg-5 pt-4";
  const container = "seo-section-banner";
  const rowClass = "";
  const colClass1 =
    "col-lg-6 col-md-6 col-12 p-lg-2 p-1 bg-eigengrau rounded-4";
  const colClass2 = "col-lg-6 col-md-6  col-12 p-2";

  // ---------------col-datat------------- //
  const colLeftData = (
    <>
      <div className="container px-2">
        <h1 className="mb-4 text-white banner-h1-lg ff-p c-fw-6">{heading}</h1>
      </div>
      <div className="container px-lg-2 p-1">
        {data.map((item, i) => (
          <div key={i}>
            <p className="mb-4 text-white banner-p-lg ff-p c-fw-4">{item.pText}</p>
          </div>
        ))}
        <div className="text-center">
          <WhiteLinkButton url={url} text={linkText} />
        </div>
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
