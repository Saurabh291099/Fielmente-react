import React from "react";
import Img1 from "../../Assests/Images/WHO-ARE-WE-2.jpg";
import Img2 from "../../Assests/Images/APPROACH-US-3.jpg";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import "./Aboutuspage.css";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function Section1() {
  const headingLeft = "Innovative hospitality marketing solutions in India";
  const descriptionLeft =
    "Know About Fielmente, we are your passionate F&B and hospitality marketing consultant! Since 2020, we’ve been crafting brands with creativity and problem-solving flair. Our love for innovation drives us as digital marketing consultants to ensure your successful future. Let’s embark on this exciting journey together – reach out today, and let’s kickstart your captivating branding adventure";

  const headingRight = "Pioneering hospitality marketing solutions in India";
  const descriptionRight =
    "Get to know about Fielmente, your dedicated F&B and hospitality marketing consultant! Share your dreams, and we’ll listen closely, delivering clear and timely social media progress reports to keep you assured of our positive impact. Just tell us about your hotel, restaurant, cloud kitchen or resort business, and we’ll work our magic, spreading the word far and wide across all social media platforms. Let’s create an unforgettable digital journey together!";

  const heading = "What makes us unique?";
  const description =
    "Fielmente, the premier hospitality digital marketing consultant, knows that F&B businesses have unique needs. Our personalized strategies build trust, authority, and drive extreme growth, tailored to your hotel and restaurant’s success!";

  const numberData = [
    { number: "120", data: "", text: "Completed Project" },
    { number: "95", data: "%", text: "Satisfaction rate" },
    { number: "8", data: "+", text: "year of experience" },
  ];
  return (
    <div>
      <div className="about-us-section-1 border-top container px-2 py-3">
        <div className="container">
          <div className="row mt-4 pt-5">
            <div className="col-lg-6 ps-lg-2 pe-lg-4">
              <div className="about-us-content-wrap py-4">
                <h2 className="text-uppercase mb-4">{headingLeft}</h2>
                <p>{descriptionLeft}</p>
              </div>
              <div className="img-div">
                <img src={Img2} className="img-fluid rounded-3" alt="" />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-4 pe-lg-2 mt-3 mt-lg-0">
              <div className="img-div">
                <img src={Img1} className="img-fluid rounded-3" alt="" />
              </div>
              <div className="about-us-content-wrap py-4">
                <h2 className="text-uppercase mb-4">{headingRight}</h2>
                <p>{descriptionRight}</p>
              </div>
              <div className="buttons-link d-flex align-items-center justify-content-center mb-2">
                <Link
                  to="/contact-page"
                  className="d-flex align-items-center justify-content-center gap-1 px-4 py-2 rounded-3"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="container  py-2 border-bottom">
            <div className="row justify-content-center">
              {numberData.map((item, i) => (
                <div className="col-lg-4 col-md-6 col-12 p-5" key={i}>
                  <div className="bnr-counter-inr about-number-section text-center">
                    <span className="count-num">
                      <Number n={parseFloat(item.number)} />{item.data}
                    </span>
                    <span className="text-uppercase about-number-section-text">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container py-5 border-bottom">
            <div className="bottom-content-wrap m-auto p-2">
              <div className="container about-us-content-wrap text-center p-0">
                <h2 className="text-uppercase">{heading}</h2>
              </div>
              <div className="container about-us-content-wrap text-center p-0">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;