import React, { useState } from "react";

const Accordion = ({
  items,
  accordionContainerClass,
  headingDivClass,
  h3Class,
  contentClass,
  accordionContentClass,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={accordionContainerClass}>
      {items.map((item, index) => (
        <div key={index} className={accordionContentClass}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handleItemClick(index)}
            
            className={`${headingDivClass}  ${accordionContentClass} ${activeIndex === index ? 'open' : 'closed'}`}
          >
            <h3 className={`${h3Class} ${activeIndex === index ? 'active' : ''}`}>{item.title}</h3>
          </div>
          {activeIndex === index && (
            <div
              className={contentClass}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
