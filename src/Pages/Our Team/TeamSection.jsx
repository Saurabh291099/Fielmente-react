import React from "react";
import Img1 from "../../Assests/ourteam/rbrgc.png.png";
import Img2 from "../../Assests/ourteam/rgbg.png.png";
import Img3 from "../../Assests/ourteam/jmtyr.png.png";
import Img4 from "../../Assests/ourteam/rgtr.png.png";
import Img5 from "../../Assests/ourteam/rbgrg.png.png";
import Img6 from "../../Assests/ourteam/cece.png.png";
import Img7 from "../../Assests/ourteam/3rf3.png.png";
import Img8 from "../../Assests/ourteam/32rfd3.png.png";
import Img9 from "../../Assests/ourteam/f32rf3r.png.png";

function TeamSection() {
  const cardData = [
    { url: Img1, title: "Lorem ipsum", description: "Lorem ipsum" },
    { url: Img2, title: "Lorem ipsum", description: "Lorem ipsum" },
    { url: Img3, title: "Lorem ipsum", description: "Lorem ipsum" },
    { url: Img4, title: "Lorem ipsum", description: "Lorem ipsum" },
    { url: Img5, title: "Lorem ipsum", description: "Lorem ipsum" },
    { url: Img6, title: "Lorem ipsum", description: "Lorem ipsum" },
    { url: Img7, title: "Lorem ipsum", description: "Lorem ipsum" },
    { url: Img8, title: "Lorem ipsum", description: "Lorem ipsum" },
    { url: Img9, title: "Lorem ipsum", description: "Lorem ipsum" },
  ];
  return (
    <div className="team-section">
      <div className="container">
        <div className="row">
          {cardData.map((item, i) => (
            <div className="col-lg-4 d-flex justify-content-center" key={i}>
              <div className="team-card">
                <div className="team-card-img-wrap">
                  <div className="team-img">
                    <img src={item.url} alt="" />
                  </div>
                </div>
                <div className="team-content-wrap">
                  <div className="team-card-title">
                  <h5>{item.title}</h5>
                  </div>
                  <div className="team-card-description">
                  <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
