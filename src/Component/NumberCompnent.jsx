import React from "react";
import Number from "./Number";

function NumberCompnent({
  containerClass,
  rowClass,
  colClass,
  divClass,
  numberData,
  span1Class,
  span2Class,
  span1Style,
  span2Style,
}) {
  const container = `container ${containerClass || ""}`;
  const row = `row ${rowClass || ""}`;
  const div = `bnr-counter-inr ${divClass || ""}`;
  const span1 = `count-num ${span1Class || ""}`;
  const span2 = `text-uppercase number-section-text ${span2Class || ""}`;

  return (
    <div className={container}>
      <div className="card-section-div">
        <div className={row}>
          {numberData.map((item, i) => (
            <div className={colClass} key={i}>
              <div className={div}>
                <span className={span1} style={span1Style}>
                  <Number n={parseFloat(item.number)} />
                  {item.data}
                </span>
                <span className={span2} style={span2Style}>
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NumberCompnent;
