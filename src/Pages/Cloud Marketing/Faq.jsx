import React from "react";
import Accordion from "../../Component/Accordion";

function Faq() {
  const accordionItems = [
    {
      title: `What is Marketing for a Restaurant?`,
      content: `<p>Marketing for a restaurant involves:</p>
      <ol>
      <li>Promoting the restaurent's brand, menu, and ambiance.</li>
      <li>Reaching and attracting the target audience.</li>
      <li>Utilizing various channels like social media, online ads, and local promotions.</li>
      <li>Encouraging repeat business through loyalty programs.</li>
      </ol>
      <p>In Fielmente, with our restaurant marketing expert we make this very seamless. Contact us to skyrocket your revenue.</p>`,
    },
    {
      title: `What marketing channels do Restaurants use?`,
      content: `<p>Restaurants use the following marketing channels:</p>
      <ol>
      <li>Social media platforms (Facebook, Instagram, Twitter).</li>
      <li>Google Ads and search engine optimization (SEO).</li>
      <li>Online food delivery platforms(Swiggy, Zomato, ONDC).</li>
      <li>Local promotions and events.</li>
      </ol>`,
    },
    {
      title: `How do Restaurants practice Marketing?`,
      content: `<p>Restaurants practice marketing through:</p>
      <ol>
      <li>Online presence and social media engagement.</li>
      <li>Eye-catching menu design and visuals.</li>
      <li>Local advertising and promotions.</li>
      <li>Email and SMS marketing campaigns.</li>
      <li>Special offers and loyalty programs.</li>
      </ol>
      <p>We at our restaurant marketing agency, with experts with over 10+ years of experience, does all the best practices to fill in your dine.</p>`,
    },
    {
      title: `Why is marketing important in Restaurant?`,
      content: `
      <p>Marketing is crucial for restaurants because it:</p>
      <ol>
      <li>Attracts new customers and increases footfall.</li>
      <li>Builds brand awareness and recognition.</li>
      <li>Increases sales and revenue.</li>
      <li>Helps in standing out in a competitive market.</li>
      <li>Fosters customer loyalty and repeat business.</li>
      </ol>
      <p>We at our restaurant marketing agency, with experts with over 10+ years of experience, does all the best practices to fill in your dine.</p>`,
    },
    
  ];
  const accordionContainerClass = "";
  const headingDivClass = "border-bottom p-1";
  const h3Class = "accordionh3";
  const contentClass = "accordion-content";
  const accordionContentClass = "";
  return (
    <>
      <div className="container text-center mt-4">
        <h2 className="text-black text-capitalize">
          Frequently Asked Questions
        </h2>
      </div>
      <div
        className="my-lg-5 my-md-4 my-3 m-auto"
        style={{ width: "min(90%,60rem)" }}
      >
        <Accordion
          items={accordionItems}
          accordionContainerClass={accordionContainerClass}
          headingDivClass={headingDivClass}
          h3Class={h3Class}
          contentClass={contentClass}
          accordionContentClass={accordionContentClass}
        />
      </div>
    </>
  );
}

export default Faq;
