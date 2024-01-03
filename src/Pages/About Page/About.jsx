import React from "react";
import AboutUSBanner from "./AboutUSBanner";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Contact from "../../Component/Contact";

const About = () => {
  return (
    <div style={{backgroundImage:`url("https://fielmente.com/wp-content/uploads/2023/06/kjgrn-1536x930.png")`,backgroundRepeat:"repeat-x"}}>
      <AboutUSBanner />
      <Section1 />
      <Section2 />
      <Contact/>
    </div>
  );
};

export default About;
