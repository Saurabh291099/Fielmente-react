import React from "react";
import BlueLinkButton from "./BlueLinkButton";

function WebCard({
  divclass,
  rowClass,
  cardData,
  cardBodyclass,
  colClass,
  cardClass,
}) {
  const row = `row ${rowClass || ""}`;

  return (
    <div className={divclass}>
      <div className={row}>
        {cardData.map((item, i) => (
          <div className={colClass} key={i}>
            <div className={cardClass}>
              <div className="card-imgDiv w-25">
                <img src={item.imgUrl} className="d-block w-100" alt={item.alt} />
              </div>
              <div className={cardBodyclass}>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <BlueLinkButton url={item.link} text={item.linkText} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebCard;
