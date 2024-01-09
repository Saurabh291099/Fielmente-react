import React from "react";
import Img1 from "../../Assests/indus-we-serv/card/young-elegant-hotel-manager-inviting-you-one-rooms.png";
import Img2 from "../../Assests/indus-we-serv/card/woman-reception-desk-hotel 1.png";
import Img3 from "../../Assests/indus-we-serv/card/young-happy-waitress-talking-businessman-cafe.png";
import Img4 from "../../Assests/indus-we-serv/card/teamworking-professional-receptionists-checking-guests-vacation-packages-check-reception-desk-hotel-personnel-booking-incoming-tourists-working-stylish-resort-lounge 1.png";
import Img5 from "../../Assests/indus-we-serv/card/asian-chinese-couple-arriving-hotel-front-desk 1.png";
import Img6 from "../../Assests/indus-we-serv/card/profesional-waiter-restaurant 1.png";

function Section5() {
  const heading2 = "Why Choose Us";
  const peraText2 =
    "Your business's success is with Fielmente, your ultimate hospitality consultant, offering tailored and result-driven hospitality marketing services in India, crafted precisely for your needs!";

  const data = [
    {
      heading: "Expertise",
      description:
        "Benefit from our extensive experience and expertise in digital marketing for hotels, ensuring effective strategies tailored to your specific needs.",
      url: Img1,
    },
    {
      heading: "Results-Driven Approach",
      description:
        "We are dedicated to delivering tangible results, maximizing your online presence, and driving increased bookings and revenue for your hotel.",
      url: Img2,
    },
    {
      heading: "industry focus",
      description:
        "Specializing on the hotel sector, we understand the unique challenges and opportunities, enabling us to provide solutions for a competitive edge.",
      url: Img3,
    },
    {
      heading: "customized solutions",
      description:
        "We take the time to understand your hotel's goals and objectives, crafting customized strategies and solutions that align with your brand and resonate with your target audience.",
      url: Img4,
    },
    {
      heading: "integrated services",
      description:
        "From SEO and web design to social media and paid advertising, our comprehensive suite of services ensures a cohesive and holistic approach to your digital marketing efforts.",
      url: Img5,
    },
    {
      heading: "Exception client service",
      description:
        "Enjoy a seamless and personalized experience with our attentive and dedicated client service team, ensuring your satisfaction and success throughout our partnership.",
      url: Img6,
    },
  ];
  return (
    <>
      <div className="container web-dev-section-3 my-4 p-2 ">
        <div className="container text-center">
          <h2>{heading2}</h2>
        </div>
        <div
          className="container text-center  p-0"
          style={{ width: "min(100%,60rem)" }}
        >
          <p>{peraText2}</p>
        </div>
      </div>
      <div className="container my-4">
        <div className="row g-3">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-12 p-2">
              <div className="card border-0" style={{
                    borderRadius: "1.5rem",
                    background: "#FFF",
                    boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}>
                <div className="">
                  <img
                    src={item.url}
                    className="img-fluid"
                    alt={`${item.heading}-img`}
                  />
                </div>
                <div
                  className="card-body text-center h-25 "
                  
                >
                  <h5 className="card-title text-capitalize">{item.heading}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section5;
