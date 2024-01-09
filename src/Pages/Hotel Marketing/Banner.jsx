import React from "react";
import { Link } from "react-router-dom";
import url1 from "../../Assests/indus-we-serv/exterior-hotel-resort-with-swimming-pool-sun-loungers 1.png";
import url2 from "../../Assests/indus-we-serv/luxury-restaurant-contemporary-style-with-exquisite-modern-furniture-designer-listroy-with-hidden-lighting 1.png";
import url3 from "../../Assests/indus-we-serv/photo-allergy-free-restaurant-kitchen 1.png";

function Banner() {
  const heading = "industries we serve";

  const peraText1 =
    "Hospitality Marketing Agency with over 10+ Years of Experience in the industries we serve";
  const peraText2 =
    "Take your business to new heights! Connect with us and soar towards succes";
  // ---------------col-datat------------- //

  return (
    <header>
      <div className="container web-dev-section-3 my-4 p-2 border-bottom">
        <div className="container text-center">
          <h2 className="text-center text-capitalize">{heading}</h2>
        </div>
        <div className="container text-center  p-0">
          <p>{peraText1}</p>
        </div>
        <div className="text-center py-3">
          <Link
            to=""
            className="px-4 py-2 text-white rounded m-auto text-capitalize"
            style={{ backgroundColor: "#000" }}
          >
            {" "}
            get free consulyation
          </Link>
        </div>
        <div className="container text-center  p-0">
          <p>{peraText2}</p>
        </div>
      </div>
      <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-center gap-lg-5 gap-md-4 gap-0">
        <div className="leftdiv">
          <div className="card p-3">
            <img src={url1} className="img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title text-capitalize text-center">
                hotel marketing
              </h5>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="card p-3">
            <img src={url2} className="img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title text-capitalize text-center">
                restaurant marketing
              </h5>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="card p-3">
            <img src={url3} className="img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title text-capitalize text-center">
                cloud kitchen marketing
              </h5>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
