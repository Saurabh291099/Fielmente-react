import React from "react";

function TwoColumn({
  Section,
  containerClass,
  rowClass,
  colClass1,
  colClass2,
  colLeftData,
  ColRightData,
  styleColLeft,
  styleColRight
}) {
  const container = `container ${containerClass || ""}`;
  const row = `row ${rowClass || ""}`;

  return (
    <section className={Section}>
      <div className={container}>
        <div className={row}>
          <div className={colClass1} style={styleColLeft}>
            {colLeftData}
          </div>
          <div className={colClass2} style={styleColRight}>
            {ColRightData}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoColumn;
