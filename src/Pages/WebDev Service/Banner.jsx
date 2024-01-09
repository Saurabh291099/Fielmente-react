import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import WhiteLinkButton from "../../Component/WhiteLinkButton";
import BannerImg from "../../Assests/industries-we-serve/asset-1.png";

function Banner() {
  const heading =
    "Fielmente unlocks true potential with impactful hospitality website development for your business.";
  const pText =
    "Experience the pinnacle of digital transformation with our leading hospitality website development agency in India. At Fielmente, we create cutting-edge websites that redefine the online experience for hotels and restaurants. Our expert team seamlessly blends aesthetics with functionality to engage guests, showcase amenities, and boost direct bookings. Elevate your brand’s online presence to new heights with our unparalleled website development services. Join us on a journey of success as we shape your digital landscape together!";

  const linkText = "know more";
  const url = "#";
  const imgUrl = BannerImg;
  const Section = "web-dev-section pt-lg-5 pt-4";
  const container = "web-dev-section-banner";
  const rowClass = "";
  const colClass1 = "col-lg-6 col-md-6 col-12 p-lg-2 p-1 bg-eigengrau rounded-4";
  const colClass2 = "col-lg-6 col-md-6  col-12 p-2";

  // ---------------col-datat------------- //
  const colLeftData = (
    <>
      <div className="container px-2">
        <h1 className="mb-4 text-white banner-h1-lg ff-p c-fw-6">{heading}</h1>
      </div>
      <div className="container px-lg-2 p-1">
        <p className="mb-4 text-white banner-p-lg ff-p c-fw-4">{pText}</p>
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
