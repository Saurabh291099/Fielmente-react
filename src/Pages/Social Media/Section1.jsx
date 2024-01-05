import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/social-media/miami-usa-april-15-2021-park-central-hotel-art-deco-district-ocean-drive-florida.png";
import WhiteLinkButton from "../../Component/WhiteLinkButton";

function Section1() {
  const Section = "web-dev-section-1";
  const containerClass = "py-lg-5 ";
  const rowClass = "";
  const colClass1 = "col-lg-5 col-md-5 col-sm-12 d-flex align-items-center";
  const colClass2 = "col-lg-7 col-md-7 col-sm-12 p-2";
  const heading = "Why is Social Media Marketing Important for Your Business?";
  const ptext =
    "Embrace the power of social media in the digital era with Fielmente, the leading hospitality social media marketing agency. Connect with your target audience, showcase your brand’s personality, and soar to new heights in the restaurant or hotel industry. With billions of active users on platforms like Facebook, Twitter, and Instagram, social media can be a game-changer for your business.";

  const data = [
    {
      heading: "Social Media Calendar",
      text: "A well-planned content calendar to make sure that your posts are always interesting and consistent.",
    },
    {
      heading: "Content Creation",
      text: "Content Creation means making content that is compelling and interesting and sticks with your audience.",
    },
    {
      heading: "Social Media Campaigns",
      text: "Campaigns that are planned strategically to get the most engagement and sales.",
    },
    {
      heading: "Facebook, Twitter & Linkedin Ads",
      text: "Targeted ads can help you reach more people and raise brand awareness, visibility of your brand, reach professionals and people who make decisions.",
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
