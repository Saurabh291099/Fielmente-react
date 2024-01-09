import React from "react";

import WebCard from "../../Component/WebCard";
import Img1 from "../../Assests/industries-we-serve/asset-8.png";
import Img2 from "../../Assests/industries-we-serve/asset-9.png";
import Img3 from "../../Assests/industries-we-serve/asset-10.png";
import Img4 from "../../Assests/industries-we-serve/asset-11.png";
import Img5 from "../../Assests/industries-we-serve/asset-12.png";

function Section4() {
  const heading = "Join Our Circle of Thriving Brands";
  const text =
    "Enjoy the full potential of your hospitality brand with our comprehensive digital marketing services, including expert Social Media Management. As your trusted hospitality social media marketing agency and consultant, explore our offerings to enhance your online presence and attract a steady influx of customers.";
  const cardData = [
    {
      imgUrl: Img1,
      alt: "hotel-png",
      title: "Website Design and Development",
      text: "Elevate your business’s success with a website.",
      link: "#",
      linkText: "know more",
    },
    {
      imgUrl: Img2,
      alt: "kitchen-png",
      title: "Search Engine Optimization & Analytics",
      text: "Rank higher with search engine optimization.",
      link: "#",
      linkText: "know more",
    },
    {
      imgUrl: Img3,
      alt: "restaurent-png",
      title: "Social Media Marketing",
      text: "Build your brand with social media marketing.",
      link: "#",
      linkText: "know more",
    },
    {
      imgUrl: Img4,
      alt: "restaurent-png",
      title: "Paid Ads and Marketing",
      text: "Increase your business revenue by running ads.",
      link: "#",
      linkText: "know more",
    },
    {
      imgUrl: Img5,
      alt: "restaurent-png",
      title: "Influencer Marketing",
      text: "Win your consumer’s heart via influencers.",
      link: "#",
      linkText: "know more",
    },
  ];
  return (
    <section className="social-media-secton-4 py-lg-5 py-3">
      <div className="container social-media-secton-4-content-wrap p-lg-2 p-1 text-center">
        <h2 className="text-white h2-lg ff-p c-fw-6">{heading}</h2>
        <div className="c-container-70rem">
          <p className="text-center m-0 text-white p-text-lg ff-p c-fw-4">{text}</p>
        </div>
      </div>

      <div className="container">
        <div className="c-container-65rem">
          <WebCard
            cardData={cardData}
            rowClass="row justify-content-center"
            colClass="col-lg col-md-6 col-12 p-2"
            cardClass="card align-items-center py-4"
            cardBodyclass="card-body text-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Section4;
