import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img3 from "../../Assests/service/hotel-receptionist-check-man-giving-key-card 2.png";
import { Link } from "react-router-dom";

function Section1() {
  const Section = "web-dev-section-1";
  const containerClass = "py-lg-5 ";
  const rowClass = "";
  const colClass1 = "col-lg-5 col-md-5 col-sm-12 d-flex align-items-center";
  const colClass2 = "col-lg-7 col-md-7 col-sm-12 p-2";
  const heading = "Why is Social Media Marketing Important for Your Business?";

  const data = [
    {
      text: "We as a Hotel Marketing Company provide the best-in-class hotel marketing consultancies to individuals branded and unbranded hotels, and resorts to maximize the hotel's return on investment",
    },
    {
      text: `Fielmente offers excellent design input, development solutions, 
   and long-time management for your dream projects Fielmente whole-heartedly engages in guiding the development that influences all aspects of your project.`,
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
        <h2 className="text-uppercase">our approach</h2>
      </div>
      <div>
        <h3 className="text-black text-capitalize">we're here to serve you</h3>
      </div>
      <div>
        {data.map((item, i) => (
          <div className="social-media-content-wrap" key={i}>
            <p>{item.text}</p>
          </div>
        ))}
        <div className="">
          <Link to="#" className="border-bottom text-black fs-4">
            Contact us
          </Link>
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
