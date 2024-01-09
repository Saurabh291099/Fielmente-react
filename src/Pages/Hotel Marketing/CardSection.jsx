import React from "react";

import WebCard from "../../Component/WebCard";
import Img1 from "../../Assests/industries-we-serve/asset-2.png";
import Img2 from "../../Assests/industries-we-serve/asset-3.png";
import Img3 from "../../Assests/industries-we-serve/asset-4.png";

function CardSection() {
  const cardData = [
    {
      imgUrl: Img1,
      alt: "hotel-png",
      title: "hotel website",
      text: "If you are looking for the best hotel seo, look no further.",
      link: "#",
      linkText: "know more",
    },
    {
      imgUrl: Img2,
      alt: "kitchen-png",
      title: "cloud kitchen website",
      text: "If you are looking for the best cloud kitchen promotion, look no further.",
      link: "#",
      linkText: "know more",
    },
    {
      imgUrl: Img3,
      alt: "restaurent-png",
      title: "restaurent website",
      text: "If you are looking for the best restaurant, look no further.",
      link: "#",
      linkText: "know more",
    },
  ];
  return (
    <div>
      {" "}
      <div className="container py-4">
        <div className="card-section-div border-top border-bottom">
          <WebCard
            cardData={cardData}
            rowClass="row justify-content-center"
            colClass="col-lg-4 col-md-6 col-12 p-2"
            cardClass="card align-items-center py-4"
            cardBodyclass="card-body text-center"
          />
        </div>
      </div>
    </div>
  );
}

export default CardSection;
