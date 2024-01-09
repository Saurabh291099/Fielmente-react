import React from "react";
import BlueLinkButton from "../../Component/BlueLinkButton";
import Url1 from "../../Assests/indus-we-serv/Group 434 (2).png";
import Url2 from "../../Assests/indus-we-serv/Group 434 (1).png";
import Url3 from "../../Assests/indus-we-serv/asset 7.png";
import Url4 from "../../Assests/indus-we-serv/asset 8.png";
import Url5 from "../../Assests/indus-we-serv/Group 434.png";
import Url6 from "../../Assests/indus-we-serv/Group 434.png";

function Section2() {
  const data = [
    {
      title: "Online Presence",
      description: "Be discoverable 24/7, reaching potential guests globally.",
      url: Url1,
      alt: "",
    },
    {
      title: "Showcase Your Hotel",
      description: "Highlight unique features and amenities.",
      url: Url2,
      alt: "",
    },
    {
      title: "Build Trust",
      description: "Establish credibility and professionalism.",
      url: Url3,
      alt: "",
    },
    {
      title: "Direct Bookings",
      description: "Boost revenue with a seamless booking experience.",
      url: Url4,
      alt: "",
    },
    {
      title: "Enhanced Customer Service",
      description: "Provide important information and assistance",
      url: Url5,
      alt: "",
    },
    {
      title: "Search Engine Visibility",
      description: "Improve visibility in online searches.",
      url: Url6,
      alt: "",
    },
  ];
  return (
    <div className="web-dev-section-1 py-4">
      <div className="container text-center">
        <h2 className="h2-lg ff-p c-fw-6 text-gray5">Why do Your Hotel needs Website?</h2>
      </div>
      <div
        className="text-center m-auto"
        style={{ width: "min(100%,54.375rem)" }}
      >
        <p className="ff-p c-fw-4 p-text-lg text-clr-scorpion">
          Find a team of digital marketers you can rely on. As a Hotel Marketing
          Agency every day, we build trust through communication, transparency,
          and results.
        </p>
      </div>
      <div className="container">
        <div className="row g-3">
          {data.map((item, i) => (
            <div className="col-lg-4 col-md-6 col-12 p-2">
              <div className="card" key={i}>
                <div className="m-auto" style={{width:"7rem"}}>
                  <img
                    src={item.url}
                    className="img-top img-fluid"
                    alt={item.alt}

                  />
                </div>
                <div className="card-body " style={{height:"9rem"}}>
                  <h3 className="h3-1 ff-p c-fw-4 text-clr-gray5 card-title text-capitalize text-center">
                    {item.title}
                  </h3>
                  <p className="p-text-md ff-p c-fw-4 card-text text-center">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center py-lg-4">
        <BlueLinkButton
          className="px-5 text-capitalize rounded-5"
          to="#"
          text="contect us"
        />
      </div>
    </div>
  );
}

export default Section2;
