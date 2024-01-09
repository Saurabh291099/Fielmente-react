import React from 'react'
import Banner from "./Banner";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Contact from "../../Component/Contact";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from './Section7';
import "./hotelpage.css";


const HotelMarketing = () => {

 
  return (
    <div>
     <div className="container web-dev">
        <Banner />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      
      <Section5 />
      <Section6 />
      <Section7 />
      <Contact />
    </div>
  )
}

export default HotelMarketing
