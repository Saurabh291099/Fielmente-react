import React from "react";

import url1 from "../../Assests/Marketing/high-end-clean-atmospheric-hotel-rooms 3.png"
import url2 from "../../Assests/Marketing/cheerful-smiling-concierge-personnel-helping-tourists-with-accommodation-booking-helpful-front-desk-receptionists-answering-questions-about-hotel-room-amenities-during-check-process 1.png"
import url3 from "../../Assests/Marketing/interior-vintage-massage-room-with-nature-light-source-from-window 1.png"


function Section5() {
 
  return (
    <div className="section-5">
     <div className="first-img-dev">
      <img src={url1} className="" alt="" />
     </div>
     <div className="second-img-dev mt-lg-5 my-3">
      <img src={url2} className="" alt="" />
     </div>
     <div className="third-img-dev">
      <img src={url3} className="" alt="" />
     </div>
    </div>
  );
}

export default Section5;
