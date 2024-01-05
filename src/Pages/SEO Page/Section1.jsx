import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/seo/market-research-statistics-graphs-laptop-screen-start-up-company-business-office-employee-analyzing-financial-performance-chart-metrics-portable-computer-coworking-space 1.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";

function Section1() {
  const Section = "web-dev-section-1";
  const containerClass = "py-lg-5 ";
  const rowClass = "";
  const colClass1 = "col-lg-5 col-md-5 col-sm-12 d-flex align-items-center";
  const colClass2 = "col-lg-7 col-md-7 col-sm-12 p-2";
  const heading = "Why is SEO Important for Your Hospitality Business?";
  const pData = [
    {
      text: "Discover the recipe for success as a restaurant, hotel or Cloud Kitchen in the digital age with Fielmente, the top hospitality SEO agency in India.",
    },

    {
      text: "Rule the search engine results, attract a steady stream of customers, and ignite real revenue growth. Rocket your business with our professional SEO services, going beyond mere rankings!",
    },
  ];

  const data = [
    {
      heading: "Website Analysis",
      text: "Gain insights into your previous SEO efforts and their impact on your business.",
    },
    {
      heading: "Keyword Research",
      text: "Keyword Research Uncover competitive keywords that will drive quality traffic to your site.",
    },
    {
      heading: "Competitive Research",
      text: "Stay ahead by understanding your competitors' moves.",
    },
    {
      heading: "Technical & Local SEO",
      text: "Fine-tune the technical aspects for a seamless user experience. Target and reach local customers searching for your restaurant or hotel.",
    },
    {
      heading: "Content Strategy",
      text: "Engaging content that captivates your audience and boosts your rankings.",
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
        {pData.map((item, i) => (
          <div key={i} className="mb-2">
            <p className="text-center text-lg-start text-md-start">
              {item.text}
            </p>
          </div>
        ))}
        {data.map((item, i) => (
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
