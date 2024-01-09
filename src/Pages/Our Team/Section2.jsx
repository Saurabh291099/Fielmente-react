import React from "react";
import MoreBtn from "../../Component/MoreBtn";
import BgImg from "../../Assests/ourteam/1700679.png";

function Section2() {
  return (
    <div className="section-2 py-lg-5 py-md-4 py-2">
      <div className="container py-lg-5 py-md-4 py-2">
        <div
          class="row justify-content-center align-items-center g-2 p-lg-3 bg-img"
          style={{
            backgroundImage: `url(${BgImg})`,
            
          }}
        >
          <div class="col-lg-6 col-md-6 col-12">
            <h2 className="section-2-heading pb-4 text-center text-lg-start text-md-start">Want to join?</h2>
            <p className="section-2-description text-center text-lg-start text-md-start">
              Find a team of digital marketers you can rely on. Every day, we
              build trust through communication, transparency, and results.
            </p>
          </div>

          <div class="col-lg-2 col-md-3 col-12 offset-lg-4  offset-md-3 offset-0">
            <MoreBtn Btntext="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
