import React from "react";
import WorkCard from "../../Component/WorkCard";
import Img1 from '../../Assests/social-media/happy-elegant-professional-hotel-staff-worker-standing-check-reception-desk-close-up-portrait-cheerful-smiling-bellhop-employee-standing-by-baggage-trolley-travel-resort-lobby.png'
import Img2 from '../../Assests/social-media/happy-young-elegant-worker-contemporary-hotel-using-tablet-while-standing-against-staircase-looking-you-inside-lounge.png'
import Img3 from '../../Assests/social-media/hotel-receptionist-check-man-giving-key-card 3.png'

function Section3() {
  const heading = "Why Do Brands Choose Fielmente for SMM?";
  const peraText =
    "Leading the way as the go-to hospitality social media marketing agency, brands choose Fielmente for their Social Media Management needs because:";

  const data = [
    {
      heading: "Personalized Content",
      description:
        "We craft social media content that resonates with your audience, creating meaningful connections that speak directly to them.",
      url: Img1,
    },
    {
      heading: "Strategic Planning",
      description:
        "Our social media marketing experts strategically plan and schedule posts, ensuring engaging content that captivates without overwhelming your audience.",
      url: Img2,
    },
    {
      heading: "Impactful Campaigns",
      description:
        "As a hospitality social media marketing agency, our campaigns reach a vast audience, eliciting direct customer feedback, which sets us apart from the competition.",
      url: Img3,
    },
  ];
  return (
    <>
      <div className="container web-dev-section-3 my-4 p-2 ">
        <div className="container text-center">
          <h2>{heading}</h2>
        </div>
        <div className="container  p-0">
          <p>{peraText}</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-12 p-2">
              <WorkCard
                heading={item.heading}
                description={item.description}
                imageUrl={item.url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section3;
