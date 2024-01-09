import React from 'react'

import WebCard from "../../Component/WebCard";
import Img1 from "../../Assests/industries-we-serve/asset-8.png";
import Img2 from "../../Assests/industries-we-serve/asset-9.png";
import Img3 from "../../Assests/industries-we-serve/asset-10.png";
import Img4 from "../../Assests/industries-we-serve/asset-11.png";
import Img5 from "../../Assests/industries-we-serve/asset-12.png";

function Section6() {

  const heading = "our services";
  const text = `Wanna taste the ultimate hospitality success? Rocket your hotel’s visibility with our expert SEO, captivating website development, social media magic, targeted Google Ads, and influencer prowess.
  Industries we serve trust our hospitality digital marketing!`
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
    <section className="web-dev-secton-4 py-lg-5 py-3" style={{background: "#0F110F"}}>
      <div className="container web-dev-secton-4-content-wrap p-lg-2 p-1 text-center">
        <h2 className="mb-3 text-white text-capitalize c-fw-6 ff-p h2-lg">{heading}</h2>
        <div className=" m-auto" style={{width:"min(100%,54rem)"}}>
          <p className="text-center text-white p-text-lg ff-p c-fw-4">{text}</p>
        </div>
      </div>

      <div className="container">
        <div className="m-auto" style={{ width: "min(100%,68rem)" }}>
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
  )
}

export default Section6