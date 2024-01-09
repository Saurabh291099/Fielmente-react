import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Accordion from "../../Component/Accordion";
import url from '../../Assests/indus-we-serv/three-chefs-are-restaurant-kitchen-one-them-is-wearing-white-apron 1.png'
function Section3() {
  const Section = "";
  const containerClass = "";
  const rowClass = "";
  const colClass1 = "col-lg-5 col-md-5 col-12";
  const colClass2 = "col-lg-7 col-md-7 col-12 d-flex align-items-center";

  const heading ="Why Your Cloud Kitchen need to Go Online?"

  const text ="Catapult your cloud kitchen to the top! Partner with India’s foremost hospitality consultants and the ultimate hospitality digital marketing agency. Check out the industries we serve and taste unrivaled success today!"

  const accordionItems = [
    {
      title: "Unleash the Full Potential of Your Brand",
      content: ` <ul>
    <li>
      Dominate social media platforms and create a buzz that resonates
    </li>
    <li>
      Turbocharge your online visibility with powerful SEO strategies
    </li>
    <li>
      Captivate and engage your audience with compelling content
      marketing
    </li>
    <li>
      Launch high-impact paid advertising campaigns that drive
      remarkable results
    </li>
    <li>
      Build a stellar online reputation that earns trust and loyalty
    </li>
  </ul>`,
    },
    {
      title: "Ignite Your Online Presence with Cutting-Edge Solutions",
      content: `<ul><li>
  Tailored website design and development that captivates your
  audience
</li>
<li>
  Seamless mobile-responsive interfaces that keep users engaged
</li>
<li>
  Intuitive user experience for effortless navigation and
  conversions
</li>
<li>
  Compelling content creation and optimization to tell your brand’s
  story
</li></ul>`,
    },
    {
      title: "Crafting Digital Masterpieces That Demand Attention",
      content: `<ul>
<li>
  A collaborative strategy to understand and exceed your unique
  goals
</li>
<li>
  Innovative design concepts that leave a lasting impact on visitors
</li>
<li>
  Advanced development techniques for flawless performance and
  functionality
</li>
<li>
  Seamless data migration and future scalability for sustained
  growth
</li>
<li>Ongoing maintenance to ensure your website always shines</li>
</ul>`,
    },
    {
      title: "Change the Fore front",
      content: `<p>87% of customers crave a personalized shopping experience. 48% of
people judge a business’s credibility based on its website design.
75% of internet users prefer mobile-friendly websites. 42% of
consumers abandon websites that perform poorly.</p>`,
    },
  ];
  //   col-data-----
  const ColRightData = (
    <div className="d-flex flex-column">
    <p>{text}</p>
      <Accordion
        accordionContainerClass="accordionContainerClass w-100"
        accordionContentClass="accordionContentClass border-top"
        headingDivClass="accordionContentClass p-2"
        h3Class="h3Class"
        contentClass="contentClass"
        items={accordionItems}
      />
    </div>
  );
  const colLeftData = (
    <div className="web-dev-section-2-img mt-3 mt-lg-0 mt-md-0">
      <img
        src={url}
        className="img-fluid"
        alt="happy-young-receptionist-modern-hotel"
      />
    </div>
  );

  return (
    <div className="web-dev-section-1 my-5 container">
      <div className="container mt-4">
        <h2 className="text-center">{heading}</h2>
      </div>
      <TwoColumn
        Section={Section}
        containerClass={containerClass}
        rowClass={rowClass}
        colClass1={colClass1}
        colClass2={colClass2}
        colLeftData={colLeftData}
        ColRightData={ColRightData}
      />
    </div>
  );
}

export default Section3;
