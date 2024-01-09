import React from "react";
import WorkCard from "../../Component/WorkCard";
import Img1 from "../../Assests/seo/monthly-remport-1-1024x588-1.png";
import Img2 from "../../Assests/seo/SearchEngineOptimization-1024x588-1.png";
import Img3 from "../../Assests/seo/adwords-and-search-engine-marketing.png";
import Img4 from "../../Assests/seo/GoogleAdwordsTargeting-1024x588-1.png";


function Section3() {
  const heading =
    "The Clear Choice for Elevating Your Brand's Digital Presence";
  const peraText =
    "Why brands prefer Us? Fielmente. the leading hospitality SEO agency in India, as we deliver tangible and measurable results. Standout performance and unwavering excellence set us apart. Experience with us:";
  const data = [
    {
      heading: "Expertise",
      description:"A team of seasoned professionals dedicated to your success.",
      url: Img1,
    },
    {
      heading: "Customization",
      description:"Tailored strategies to fit your unique business needs.",
      url: Img2,
    },
    {
      heading: "Innovation",
      description:"Staying ahead with cutting-edge SEO techniques.",
      url: Img3,
    },
    {
      heading: "Patnership",
      description:"SCollaborating closely for mutual growth and prosperity.",
      url: Img4,
    },
  ];
  return (
    <>
      <div className="container web-dev-section-3 my-lg-4 my-md-2 my-1 p-1 ">
        <div className="text-center">
          <h2 className="text-white h2-lg ff-p c-fw-6">{heading}</h2>
        </div>
        <div className="container text-center p-0">
          <p className="text-white p-text-lg ff-p c-fw-4">{peraText}</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-12 p-2">
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
