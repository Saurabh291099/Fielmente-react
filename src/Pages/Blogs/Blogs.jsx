import React from "react";
import { Link } from "react-router-dom";
import './blog.css'
import Img1 from "../../Assests/blog/asset-1.png";
import Img2 from "../../Assests/blog/asset-2.png";
import Img3 from "../../Assests/blog/asset-3.png";
import Img4 from "../../Assests/blog/asset-4.jpeg";
import Img5 from "../../Assests/blog/asset-5.jpeg";
import Img6 from "../../Assests/blog/asset-6.png";
import Img7 from "../../Assests/blog/asset-7.jpeg";
import Img8 from "../../Assests/blog/asset-8.png";
import Img9 from "../../Assests/blog/asset-9.jpeg";
import Img10 from "../../Assests/blog/asset-10.png";
import Img11 from "../../Assests/blog/asset-11.png";
import Img12 from "../../Assests/blog/asset-12.png";
import Img13 from "../../Assests/blog/asset-13.png";
import Img14 from "../../Assests/blog/asset-14.png";
import Img15 from "../../Assests/blog/asset-15.png";
import Img16 from "../../Assests/blog/asset-16.jpeg";
import Img17 from "../../Assests/blog/asset-17.jpeg";
import Img18 from "../../Assests/blog/asset-18.jpeg";
import Img19 from "../../Assests/blog/asset-19.jpeg";

function Blogs() {
  const cardData = [
    { url: Img1, title: "How to Digitally Market your Hostel with Fielmente" },
    {
      url: Img2,
      title: "How to Reply to Google Business Profile and Facebook Feedback",
    },
    {
      url: Img3,
      title: "Why do you need Fielmente Hospitality Marketing Agency?",
    },
    {
      url: Img4,
      title:
        "How to start Cloud Kitchen in India – Ultimate Guide to open the Cloud Kitchen",
    },
    {
      url: Img5,
      title: "HTML or WordPress: Which one is Best for Your hotel/restaurant?",
    },
    {
      url: Img6,
      title:
        "A Complete Step-by-Step Process to Create a Brand Guide For Hotels",
    },
    {
      url: Img7,
      title: "6 Creative Ways to Market Your Hotel on a Shoestring Budget",
    },
    {
      url: Img8,
      title:
        "8 Marketing Strategies for Food & Beverage Industry to Plan in 2022",
    },
    { url: Img9, title: "Another milestone in Fielmente’s journey" },
    {
      url: Img10,
      title: "Top 3 Food & Beverage Business Pitches on Shark Tank India",
    },
    { url: Img11, title: "How SEO helps to boost restaurant business" },
    {
      url: Img12,
      title: "6 Steps To Do Performance Marketing For Restaurants",
    },
    { url: Img13, title: "Restaurant Marketing in the MetaVerse – Web 3.0" },
    {
      url: Img14,
      title: "7 Restaurant Marketing Strategies in India to Follow for Your",
    },
    { url: Img15, title: "Project on The Asian Wok" },
    {
      url: Img16,
      title: "Tips for Engagement on Social Media of Cloud Kitchen",
    },
    {
      url: Img17,
      title:
        "Cloud Kitchen Consulting Services: 6 Reasons Why You Need Fielmente for It",
    },
    { url: Img18, title: "Congratulations Team Punjabi Chic Inn, Jodhpur" },
    { url: Img19, title: "Which POS is best for Cloud Kitchen?" },
    {
      url: Img19,
      title: "Improved Hotel Business Solutions for the New Normal",
    },
    { url: Img19, title: "How to Digitally Market your Hostel with Fielmente" },
  ];
  return (
    <>
      <section className="blogs">
        <div className="navigation text-center p-2 my-5">
          <p>
            <Link to="/">Home </Link><span className="gt">&gt;&gt;</span> Blog
          </p>
          <h1>Blog</h1>
        </div>
      </section>
      <section className="card-section py-4">
        <div className="container">
          <div className="row ">
            {cardData.map((item, i) => (
              <div className="col-lg-4 col-md-6 ">
                <div className="card gap-3 mb-4" style={{borderRadius:"1rem"}}>
                  <Link to="">
                    <img
                      src={item.url}
                      className="img-fluid "
                      alt="card-img"
                      style={{ height: "13.979rem",borderRadius:"1rem 1rem 0 0" }}
                    />
                  </Link>
                  <div className="card-body custom-height" >
                    <Link to="">
                      {" "}
                      <h5 className="card-title text-center fs-5">
                        {item.title}
                      </h5>
                    </Link>
                  </div>
                  <div className="link text-center mb-3">
                    <Link to="" className="text-uppercase fw-semibold">
                      Read more &gt;&gt;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
