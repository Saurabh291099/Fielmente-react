import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/pad-ads/odessa-hotel-sea-port-ukraine 1.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";

function Section1() {
  const Section = "web-dev-section-1";
  const containerClass = "py-lg-5 ";
  const rowClass = "";
  const colClass1 = "col-lg-5 col-md-5 col-sm-12 d-flex align-items-center";
  const colClass2 = "col-lg-7 col-md-7 col-sm-12 p-2";
  const heading = "Why Does Your Business Needs Google Ads?";
  const ptext =
    "At Fielmente, the top hospitality Google Ads agency in India, we amplify your brand’s visibility and drive targeted traffic. Our powerful Google Ads services fuel your business growth by unleashing the full potential of online advertising.";
  const data = [
    {
      heading: "Why Google Ads Matter for Your Business",
      text: "Your Potential: Discover the Impact of Effective Advertising on Your Business Success.",
    },
    {
      heading: "Our Google Ads Services - Igniting Your Online Advertising Strategy",
      text: "Precision Targeting: Drive Results with Search Advertising, Display Advertising, and Video Advertising.",
    },
    {
      heading: "Competitive Research",
      text: "Stay ahead by understanding your competitors' moves.",
    },
    {
      heading: "Our Approach to Your Advertising Success",
      text: "Strategic Mastery: From Planning to Execution, We Craft Customized Ads Strategies for Optimal Results.",
    },
  ];
  // col - data ---------
  const colLeftData = (
    <>
      <div className="col-1-img-div">
        <img src={Img3} alt="hotel-img" />
      </div>
    </>
  );

  const ColRightData = (
    <>
      <div>
        <p className="text-center text-lg-start text-md-start">{ptext}</p>
        {data.map((item, i) => (
          // <div className="social-media-content-wrqp">
          //   <div className="row">
          //     <div className="col-12">
          //       <h3>{item.heading}</h3>
          //     </div>
          //     <div className="col-12">
          //       <p>{item.text}</p>
          //     </div>
          //   </div>
          // </div>
          <div className="social-media-content-wrqp">
            <div className="d-flex gap-3">
              <div className="icon pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM9.6 18L3.6 12L5.292 10.308L9.6 14.604L18.708 5.496L20.4 7.2L9.6 18Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white">{item.heading}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center">
          <WhiteLinkButton text="Know More" url="#" />
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-white text-center">{heading}</h2>
      </div>
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

export default Section1;
