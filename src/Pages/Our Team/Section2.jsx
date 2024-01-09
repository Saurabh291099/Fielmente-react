import React from "react";
import MoreBtn from "../../Component/MoreBtn";
import BgImg from "../../Assests/ourteam/1700679.png";

function Section2() {
  return (
    <div className="section-2 py-5">
      <div className="container py-5">
        <div
          class="row justify-content-center align-items-center g-2 p-3"
          style={{
            backgroundImage: `url(${BgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "40rem",
            backgroundSize: "contain",
          }}
        >
          <div class="col-lg-6">
            <h2 className="section-2-heading pb-4">Want to join?</h2>
            <p className="section-2-description">
              Find a team of digital marketers you can rely on. Every day, we
              build trust through communication, transparency, and results.
            </p>
          </div>

          <div class="col-lg-2 offset-4 ">
            <MoreBtn Btntext="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
