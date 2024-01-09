import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../Assests/Marketing/young-confident-head-manager-luxurious-hotel-looking-camera 1.png";
import Img2 from "../../Assests/Marketing/young-smiling-hotel-worker-uniform-holding-digital-tablet-while-showing-mature-businessman-his-room-wishing-him-good-rest 1.png";
import Img3 from "../../Assests/Marketing/happy-businesswoman-standing-meeting 1.png";
import Img4 from "../../Assests/Marketing/bellboy-hotel 2.png";
import Img5 from "../../Assests/Marketing/portrait-cheerful-vietnamese-hotel-concierge-making-welcoming-gesture-invite-guests-hotel-lobby 1.png";
import Img6 from "../../Assests/Marketing/portrait-male-receptionist-hotel 1.png";

function Section3() {
  const heading1 =
    "Are you ready to unlock the full potential of your business's online presence width our Hospitality Marketing Services?";
  const peraText1 =
    "Go online and take your hospitality business to new heights! With the leading hospitality consultants in india and the best hospitality marketing agency, today";

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
          <h2 className="h2-lg ff-p c-fw-6 text-clr-gray5">{heading1}</h2>
        </div>
        <div
          className="container text-center  p-0"
          style={{ width: "min(100%,60rem)" }}
        >
          <p className="p-text-lg ff-p c-fw-4 text-clr-scorpion">{peraText1}</p>
        </div>
        <div className="text-center py-3">
          <Link to="" className="px-4 py-2 bg-black text-white rounded m-auto">
            {" "}
            Contact us
          </Link>
        </div>

        <div className="container text-center">
          <h2 className="h2-lg ff-p c-fw-6 text-clr-gray5">{heading2}</h2>
        </div>
        <div
          className="container text-center  p-0"
          style={{ width: "min(100%,60rem)" }}
        >
          <p className="p-text-lg ff-p c-fw-4 text-clr-scorpion">{peraText2}</p>
        </div>
      </div>
      <div className="container">
        <div className="row g-3">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-12 p-2">
              <div className="card border-0">
                <div className="d-flex justify-content-center align-items-center " style={{height:"25.4rem"}}>
                  <img
                    src={item.url}
                    className="img-fluid rounded-4"
                    alt={`${item.heading}-img`}
                  />
                </div>
                <div className="card-body text-center h-25 ">
                  <h5 className="h3-1 text-clr-gray5 ff-p c-fw-4 card-title text-capitalize">{item.heading}</h5>
                  <p className="p-text-md ff-p c-fw-4 text-clr-scorpion card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section3;
