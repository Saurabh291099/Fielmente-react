import React from "react";
import TwoColumn from "../../Component/TwoColumn";
import Img4 from "../../Assests/industries-we-serve/asset-6.png";
import Accordion from "../../Component/Accordion";

function Section2() {
  const Section = "";
  const containerClass = "";
  const rowClass = "";
  const colClass1 = "col-lg-7 col-md-7 col-12 mt-lg-4  p-0 px-lg-2 mx-0";
  const colClass2 = "col-lg-5 col-md-5 col-12 mt-2 mt-lg-0 mt-md-0";

  const heading = "Explore our Hospitality Digital Marketing";

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
      content: `<p class="text-white ps-4">87% of customers crave a personalized shopping experience. 48% of
people judge a business’s credibility based on its website design.
75% of internet users prefer mobile-friendly websites. 42% of
consumers abandon websites that perform poorly.</p>`,
    },
  ];
  //   col-data-----
  const colLeftData = (
    <Accordion
      accordionContainerClass="accordionContainerClass w-100"
      accordionContentClass="accordionContentClass border-top"
      headingDivClass="accordionContentClass p-2"
      h3Class="h3Class text-white"
      contentClass="contentClass text-white"
      items={accordionItems}
    />
  );
  const ColRightData = (
    <div className="web-dev-section-2-img">
      <img src={Img4} className="d-block w-100 h-100" alt="avtar" />
    </div>
  );

  return (
    <div className="web-dev-section-1">
      <div className="container text-center my-4">
        <h2 className="text-white">{heading}</h2>
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

export default Section2;
