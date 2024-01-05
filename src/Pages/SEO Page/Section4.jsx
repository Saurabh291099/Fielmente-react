import React from "react";
import WhiteLinkButton from "../../Component/WhiteLinkButton";
import WebCard from "../../Component/WebCard";
import Img1 from "../../Assests/industries-we-serve/asset-8.png";
import Img2 from "../../Assests/industries-we-serve/asset-9.png";
import Img3 from "../../Assests/industries-we-serve/asset-10.png";
import Img4 from "../../Assests/industries-we-serve/asset-11.png";
import Img5 from "../../Assests/industries-we-serve/asset-12.png";

function Section4() {
  const heading = "Join Our Circle of Thriving Brands";
  const text =
    "Don’t just take our word for it. Discover the stories of businesses like yours that have achieved remarkable success with Fielmente’s SEO services. Read our testimonials and see how we’ve transformed brands into online powerhouses in our Hospitality SEO Agency.";
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
    <section className="web-dev-secton-4 py-lg-5 py-3">
      <div className="container web-dev-secton-4-content-wrap py-lg-4 p-1">
        <h2>{heading}</h2>
        <div className=" m-auto" style={{ width: "min(100%,60rem)" }}>
          <p className="text-center m-0">{text}</p>
        </div>
        <div className="text-center m-auto mt-2">
          <WhiteLinkButton url="" text="Get Started" />
        </div>
      </div>
      <div className="container my-lg-4 web-dev-secton-4-content-wrap py-lg-4 p-1">
        <h2>
          Amplify Your Impact with Our Comprehensive Digital Marketing Solutions
        </h2>
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
  );
}

export default Section4;
