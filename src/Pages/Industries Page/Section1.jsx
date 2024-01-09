import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/Marketing/confident-manager-restaurant 1.png";
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
        <h2 className="section-1-h2">Industries We Serve</h2> 
        <p className="section-1-p">Fielmente is a place, where we excel in revolutionizing your business! As the finest hospitality marketing agency in India, we exclusively cater to hotels, cloud kitchens, and restaurants.
Elevate your brand’s presence, thrive in competition, and allure countless guests with our exceptional hospitality marketing services.Let us be your key to success in the dynamic world of hospitality!</p>
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
